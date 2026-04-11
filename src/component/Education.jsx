import { SectionHeader } from "./UI.jsx";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <SectionHeader eyebrow="$ cat ./education.json" title="Education" />
        <div className="edu-card fade-in">
          <div className="edu-watermark">BSSE</div>
          <div className="edu-badge">● Currently Enrolled · 2024 – Present</div>
          <h3 className="edu-degree">Bachelor of Science — Software Engineering</h3>
          <p className="edu-school">University of Faisalabad, Pakistan</p>
          <div className="edu-meta">
            <div className="edu-meta-item">
              <span className="acc">★</span>
              <span>CGPA: 3.4 / 4.0</span>
            </div>
            <div className="edu-meta-item">
              <span className="acc">⌚</span>
              <span>2024 – Present</span>
            </div>
            <div className="edu-meta-item">
              <span className="acc">◎</span>
              <span>Open to Remote</span>
            </div>
          </div>
          <div className="edu-note">
            <strong>Self-driven:</strong> Building production-grade distributed systems — Clerk Auth System and
            Real-Time Analytics Engine — while maintaining a 3.4 CGPA. The majority of what I know came from building
            real systems with real constraints, not just coursework.
          </div>
        </div>
      </div>
    </section>
  );
}