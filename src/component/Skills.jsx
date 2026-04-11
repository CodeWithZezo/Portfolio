import { SectionHeader } from "./UI.jsx";
import { SKILLS } from "../data/index.js";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <SectionHeader
          eyebrow="$ ls ./technical-skills --categorised"
          title="Technical Skills"
        />
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <SkillCard key={s.label} skill={s} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, delay }) {
  return (
    <div className={`skill-card fade-in d${delay}`}>
      <div className="skill-label">{skill.label}</div>
      <div className="tag-cloud">
        {skill.items.map((item) => (
          <span
            key={item}
            className={`tag${skill.hot.includes(item) ? " tag-hot" : ""}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}