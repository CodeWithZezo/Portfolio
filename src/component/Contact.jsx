import { useState, useCallback } from "react";
import { SectionHeader, TerminalBar, GitHubIcon, LinkedInIcon } from "./UI.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Actually send via mailto — opens email client with pre-filled content
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:codewithzezo@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }, [formData]);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <section id="contact" className="section section-alt">
      <div className="section-inner">
        <SectionHeader eyebrow="$ ./contact.sh --init-connection" title="Let's Connect" />
        <div className="contact-grid">
          <ContactInfo />
          <ContactForm
            formData={formData}
            submitted={submitted}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}

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
          <a href="https://linkedin.com/in/zeeshan-shami-2a7000379" target="_blank" rel="noopener noreferrer" className="social-link">
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

function ContactForm({ formData, submitted, onChange, onSubmit }) {
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
            <button type="submit" className="submit-btn">$ send_message()</button>
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
      <div className="success-msg">Email client opened!<br />Your message is ready to send.</div>
      <div style={{ marginTop: "0.75rem", fontSize: "0.65rem", color: "var(--text-dim)" }}>
        // status: 200 OK · delivery: confirmed
      </div>
    </div>
  );
}