import { TerminalBar, Cursor } from "./UI.jsx";
import { useTypingEffect } from "../hooks/index.js";
import { HERO_STATS } from "../data/index.js";

export default function Hero() {
  const typedText = useTypingEffect("Backend Engineer", 80);

  return (
    <section className="hero">
      <div className="hero-inner">
        {/* ── Terminal card ── */}
        <div
          className="terminal fade-in visible"
          style={{ marginBottom: "2rem" }}
        >
          <TerminalBar title="zeeshan@portfolio ~ bash" />
          <div className="terminal-body">
            <div className="cmd-line">
              <span className="prompt">$</span>
              <span className="cmd-arg">whoami --verbose</span>
            </div>

            <h1 className="hero-name">Zeeshan Saleem</h1>
            <p className="hero-role">
              {typedText}
              <Cursor />
            </p>

            <div className="cmd-line cmd-line-2">
              <span className="prompt">$</span>
              <span className="cmd-arg">ls ./skills --highlight-core</span>
            </div>
            <div className="skill-pills">
              {[
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "Redis",
                "RabbitMQ",
                "Docker",
                "Kubernetes",
                "AWS",
                "Socket.IO",
                "TimescaleDB",
              ].map((s) => (
                <span key={s} className="pill">
                  {s}
                </span>
              ))}
            </div>

            <div className="hero-meta">
              <div className="meta-item">
                <div className="meta-dot" style={{ background: "#39ff14" }} />
                <span className="meta-text">Open to Remote or onsite Opportunities</span>
              </div>
              <div className="meta-item">
                <div className="meta-dot" style={{ background: "#e3b341" }} />
                <span className="meta-text">Faisalabad, Pakistan</span>
              </div>
              <div className="meta-item">
                <div className="meta-dot" style={{ background: "#79b8ff" }} />
                <span className="meta-text">CGPA 3.4 / 4.0</span>
              </div>
              <div className="meta-item">
                <div className="meta-dot" style={{ background: "#bc8cff" }} />
                <span className="meta-text">1 Live Production Systems</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="hero-stats fade-in d1">
          <div className="stats-label">
            <span className="prompt" style={{ fontSize: "0.65rem" }}>
              $
            </span>{" "}
            cat ./system_stats.json
          </div>
          <div className="stats-grid">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-value" style={{ color: s.color }}>
                  {s.value}
                  <span className="stat-unit">{s.unit}</span>
                </div>
                <div className="stat-label-text">{s.label}</div>
                <div className="stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTAs ── */}
        <div className="hero-cta-row fade-in d2">
          <a href="#projects" className="cta-primary">
            ./view_projects.sh
          </a>
          <a
            href="/Zeeshan_Saleem_Resume.pdf"
            download="Zeeshan_Saleem_Resume.pdf"
            className="cta-resume"
          >
            ↓ Download Resume
          </a>
          <a href="mailto:codewithzezo@gmail.com" className="cta-secondary">
            ✉ codewithzezo@gmail.com
          </a>
          <a
            href="https://github.com/codewithzezo"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-ghost"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/zeeshan-saleem-2a7000379"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-ghost"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
