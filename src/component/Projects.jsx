import { SectionHeader, GitHubIcon } from "./UI.jsx";
import { PROJECTS } from "../data/index.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="$ cat ./projects.json | jq"
          title="Projects & Systems"
        />
        <div className="projects-list">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }) {
  return (
    <div className="project-card fade-in">
      <div
        className="project-stripe"
        style={{ background: `linear-gradient(90deg, ${p.color}, transparent 55%)` }}
      />
      <div className="project-body">
        <div className="project-hdr">
          <div>
            <div className="project-tag" style={{ color: p.color }}>{p.tag}</div>
            <div className="project-title-row">
              <h3 className="project-title">{p.title}</h3>
              <span className={`status-pill ${p.status === "LIVE" ? "status-live" : "status-wip"}`}>
                {p.status === "LIVE" ? "● LIVE" : p.status === "inprogress" ? "● IN PROGRESS" : "● Building..."}
              </span>
            </div>
            <div className="project-sub">{p.subtitle}</div>
          </div>
          {p.github ? (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
              style={{ borderColor: `${p.color}55`, color: p.color }}
            >
              <GitHubIcon size={15} />
              View on GitHub →
            </a>
          ) : (
            <span
              className="github-btn github-btn-private"
              style={{ borderColor: `${p.color}33`, color: `${p.color}88` }}
            >
              <GitHubIcon size={15} />
              Private Repository
            </span>
          )}
        </div>

        <div className="project-content">
          <div>
            <p className="project-desc">{p.description}</p>
            <div className="ach-label">Key Engineering Decisions</div>
            <ul className="ach-list">
              {p.achievements.map((a, j) => (
                <li key={j}>
                  <span className="ach-arrow" style={{ color: p.color }}>▸</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <div className="tech-pills">
              {p.stack.map((t) => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>

          <div className="metric-stack">
            {p.metrics.map((m) => (
              <div key={m.label} className="metric-card" style={{ borderColor: p.colorDim }}>
                <div className="metric-lbl">{m.label}</div>
                <div className="metric-val" style={{ color: p.color }}>{m.value}</div>
              </div>
            ))}
            <div
              className="metric-card"
              style={{ borderColor: p.colorDim, background: p.colorDim, padding: "0.75rem 1rem", textAlign: "center" }}
            >
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: p.color, fontSize: "0.7rem", textDecoration: "none", letterSpacing: "0.08em", display: "block" }}
                >
                  $ git clone ↗
                </a>
              ) : (
                <span style={{ color: `${p.color}66`, fontSize: "0.7rem", letterSpacing: "0.08em", display: "block" }}>
                  // private repo
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
