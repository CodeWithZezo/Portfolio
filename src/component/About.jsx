import { SectionHeader } from "./UI.jsx";

const WHY_ITEMS = [
  { icon: "⬡", title: "Systems Thinker", desc: "I design for failure modes, not just happy paths. Circuit breakers, DLQs, graceful degradation." },
  { icon: "⚡", title: "Ships to Production", desc: "Every project has CI/CD, monitoring, and docs — not a localhost demo." },
  { icon: "◈", title: "Documents Trade-offs", desc: "Every architectural choice has a reason I can explain in an interview." },
  { icon: "⌬", title: "Learns by Building", desc: "Every concept I study becomes a feature. RabbitMQ → Outbox Pattern → production." },
  { icon: "◉", title: "Reads the Internals", desc: "DDIA, not just Stack Overflow. I understand how PostgreSQL MVCC works." },
  { icon: "▣", title: "Owns Mistakes", desc: "I keep notes on real bugs I have hit. Debugging teaches more than tutorials." },
];

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="section-inner">
        <SectionHeader eyebrow="$ ./about_me.sh --honest" title="About Me" />
        <div className="about-grid">
          <AboutText />
          <WhyGrid />
        </div>
      </div>
    </section>
  );
}

function AboutText() {
  return (
    <div className="about-text fade-in">
      <p>
        I am a backend engineer who builds <strong>production-grade systems</strong>, not just localhost demos.
        Every project I build is deployed, monitored, and documented with real architectural decisions behind each choice.
      </p>
      <p>
        My focus is <span className="g">distributed systems</span> — I understand CAP theorem, the Saga pattern, and the
        Outbox pattern not from textbooks but from implementing them in real projects where a service crash cannot lose a single event.
      </p>
      <p>
        I believe in <strong>understanding the why</strong>, not just the how. Every tech choice has a documented reason —
        why TimescaleDB over plain PostgreSQL for time-series, why Redis Sorted Sets for the rolling window, why orgId-scoped
        queries for multi-tenancy.
      </p>
      <p>
        Currently pursuing <strong>B.Sc. Software Engineering</strong> (CGPA 3.4/4.0) while building systems at the level
        most engineers reach after years on the job.
      </p>
    </div>
  );
}

function WhyGrid() {
  return (
    <div className="why-grid fade-in d1">
      {WHY_ITEMS.map((item) => (
        <div key={item.title} className="why-card">
          <span className="why-icon">{item.icon}</span>
          <div className="why-title">{item.title}</div>
          <div className="why-desc">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}