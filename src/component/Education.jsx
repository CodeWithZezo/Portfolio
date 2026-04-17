import { SectionHeader } from "./UI.jsx";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <SectionHeader eyebrow="$ cat ./education.json" title="Education" />
        <div className="edu-card fade-in">
          <div className="edu-watermark">BSSE</div>
          <div className="edu-badge">● Currently Enrolled · 2024 – 2028</div>
          <h3 className="edu-degree">Bachelor of Software Engineering</h3>
          <p className="edu-school">Arid Agriculture University, Faisalabad, Pakistan</p>
          <div className="edu-meta">
            <div className="edu-meta-item">
              <span className="acc">★</span>
              <span>CGPA: 3.45 / 4.0</span>
            </div>
            <div className="edu-meta-item">
              <span className="acc">⌚</span>
              <span>2024 – 2028</span>
            </div>
            <div className="edu-meta-item">
              <span className="acc">◎</span>
              <span>Open to Remote</span>
            </div>
          </div>
          <div className="edu-note">
            <strong>Self-driven:</strong> Building production-grade systems — a Clerk-inspired User Management System
            and a Real-Time Analytics Engine — while maintaining a 3.45 CGPA. Relevant coursework: Data Structures,
            Algorithms, Database Systems, Software Architecture. The majority of what I know came from building real
            systems with real constraints, not just coursework.
          </div>
        </div>
      </div>
    </section>
  );
}