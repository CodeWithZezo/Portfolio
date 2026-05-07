import { useState, useCallback, useEffect } from "react";
import { SectionHeader, TerminalBar, GitHubIcon, LinkedInIcon } from "./UI.jsx";

/* ─── Toast Component ─────────────────────────────────── */
function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, 6000);
    return () => clearTimeout(t);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 9999,
        maxWidth: 360,
        background: toast.type === "error" ? "#1a0a0a" : "#0a1a0a",
        border: `1px solid ${toast.type === "error" ? "#ff4444" : "#39ff14"}`,
        borderRadius: 8,
        padding: "1rem 1.25rem",
        boxShadow: `0 0 24px ${toast.type === "error" ? "rgba(255,68,68,0.25)" : "rgba(57,255,20,0.2)"}`,
        animation: "slideInToast 0.3s ease",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <style>{`
        @keyframes slideInToast {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
        <span style={{ fontSize: "0.7rem", color: toast.type === "error" ? "#ff4444" : "#39ff14", fontWeight: 700, letterSpacing: 1 }}>
          {toast.type === "error" ? "// ERROR" : "// SUCCESS"}
        </span>
        <button
          onClick={onClose}
          style={{ background: "none", border: "none", color: "var(--text-dim, #666)", cursor: "pointer", fontSize: "1rem", lineHeight: 1, padding: 0 }}
        >
          ×
        </button>
      </div>

      {/* Message */}
      <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text, #ccc)", lineHeight: 1.6 }}>
        {toast.message}
      </p>

      {/* Hyperlinks for error state */}
      {toast.type === "error" && (
        <div style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <a
            href="mailto:codewithzezo@gmail.com"
            style={{
              fontSize: "0.72rem",
              color: "#39ff14",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            ✉ codewithzezo@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/zeeshan-saleem-2a7000379/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.72rem",
              color: "#0a66c2",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <LinkedInIcon size={13} /> DM on LinkedIn
          </a>
        </div>
      )}
    </div>
  );
}

/* ─── Main Contact Component ──────────────────────────── */
export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(null);

  const closeToast = useCallback(() => setToast(null), []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000); // 8s timeout

      const res = await fetch("https://api-portfolio.codewithzezo.site/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setSubmitted(true);
      setToast({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });

    } catch (err) {
      const isDown = err.name === "AbortError" || err.message.includes("fetch") || err.message.includes("Failed");
      setToast({
        type: "error",
        message: isDown
          ? "Server is currently down. You can reach me directly via:"
          : `Something went wrong (${err.message}). Please reach me directly:`,
      });
    } finally {
      setLoading(false);
    }
  }, [formData]);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <>
      <Toast toast={toast} onClose={closeToast} />
      <section id="contact" className="section section-alt">
        <div className="section-inner">
          <SectionHeader eyebrow="$ ./contact.sh --init-connection" title="Let's Connect" />
          <div className="contact-grid">
            <ContactInfo />
            <ContactForm
              formData={formData}
              submitted={submitted}
              loading={loading}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Contact Info ────────────────────────────────────── */
function ContactInfo() {
  return (
    <div className="contact-block fade-in">
      <div>
        <div className="c-label">Status</div>
        <div className="availability-badge">
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#39ff14", animation: "pulse 2s infinite", flexShrink: 0 }} />
          <span>Actively seeking backend / DevOps remote roles</span>
        </div>
      </div>
      <div>
        <div className="c-label">Location</div>
        <div style={{ fontSize: "0.82rem", color: "var(--text)" }}>Faisalabad, Punjab, Pakistan — Open to Remote</div>
      </div>
      <div>
        <div className="c-label">Email</div>
        <a href="mailto:codewithzezo@gmail.com" className="email-btn">✉ codewithzezo@gmail.com</a>
      </div>
      <div>
        <div className="c-label">Social Links</div>
        <div className="social-grid">
          <a href="https://github.com/codewithzezo" target="_blank" rel="noopener noreferrer" className="social-link">
            <GitHubIcon size={18} />
            <div>
              <div className="social-link-name">GitHub</div>
              <div className="social-link-handle">@codewithzezo</div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/zeeshan-saleem-2a7000379/" target="_blank" rel="noopener noreferrer" className="social-link">
            <LinkedInIcon size={18} />
            <div>
              <div className="social-link-name">LinkedIn</div>
              <div className="social-link-handle">zeeshan-shami-2a7000379</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Contact Form ────────────────────────────────────── */
function ContactForm({ formData, submitted, loading, onChange, onSubmit }) {
  return (
    <div className="terminal fade-in d1">
      <TerminalBar title="send-message.sh" />
      <div style={{ padding: "1.5rem" }}>
        {submitted ? (
          <SuccessState />
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <FormRow label="name" type="text" placeholder="Your name" value={formData.name} onChange={onChange} />
            <FormRow label="email" type="email" placeholder="your@email.com" value={formData.email} onChange={onChange} />
            <div className="form-row">
              <label className="form-label"><span className="prompt">$</span> message</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={onChange}
                required
              />
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
              style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
            >
              {loading ? "$ sending..." : "$ send_message()"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function FormRow({ label, type, placeholder, value, onChange }) {
  return (
    <div className="form-row">
      <label className="form-label"><span className="prompt">$</span> {label}</label>
      <input
        type={type}
        name={label}
        className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

function SuccessState() {
  return (
    <div className="success-state">
      <div className="success-check">✓</div>
      <div className="success-msg">Message sent!<br />I'll get back to you soon.</div>
      <div style={{ marginTop: "0.75rem", fontSize: "0.65rem", color: "var(--text-dim)" }}>
        // status: 200 OK · delivery: confirmed
      </div>
    </div>
  );
}