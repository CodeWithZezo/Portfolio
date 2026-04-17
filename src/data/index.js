export const PROJECTS = [
  {
    id: 1,
    title: "User Management System",
    subtitle: "Clerk-Inspired Identity Platform",
    tag: "AUTH · IDENTITY · SECURITY",
    status: "LIVE",
    description:
      "Production-ready backend identity platform handling authentication, sessions, multi-tenancy, and permissions with enterprise-grade rigour. JWT refresh-token rotation, bcrypt hashing, and server-side revocation close common session-hijacking vulnerabilities.",
    metrics: [
      { label: "Token Strategy", value: "Access + Refresh" },
      { label: "Auth Pattern", value: "RBAC + Multi-Tenant" },
      { label: "Session Cache", value: "Redis" },
    ],
    achievements: [
      "Architected RBAC with fine-grained, per-organization permissions and full multi-tenant data isolation — zero cross-tenant data leakage",
      "Engineered JWT auth with refresh-token rotation, bcrypt hashing, and server-side revocation — closing common session-hijacking vulnerabilities",
      "Built email verification, password-reset, and account-lockout as isolated TypeScript modules with clean interfaces and no business-logic leakage",
      "Integrated Redis for distributed session caching and sliding-window rate limiting, reducing DB load",
      "Containerised with Docker and deployed to AWS via CI/CD — push-to-main triggers automated test, build, and deploy",
    ],
    stack: ["Node.js", "TypeScript", "Express.js", "MongoDB", "JWT", "Redis", "Docker", "AWS"],
    github: "https://github.com/CodeWithZezo/mega-project",
    color: "#39ff14",
    colorDim: "rgba(35,209,139,0.10)",
  },
  {
    id: 2,
    title: "Real-Time Analytics Engine",
    subtitle: "High-Throughput Event Pipeline",
    tag: "REAL-TIME · HIGH PERFORMANCE · STREAMS",
    status: "inprogress",
    description:
      "High-throughput data pipeline that ingests, processes, and serves live metrics at scale. Node.js stream processor handles 50,000 data points/sec with backpressure control, serving 5,000+ concurrent authenticated WebSocket connections.",
    metrics: [
      { label: "Throughput", value: "50K/sec" },
      { label: "Connections", value: "5K+ WS" },
      { label: "Scaling", value: "AWS ASG" },
    ],
    achievements: [
      "Scaled Socket.io to 5,000+ concurrent WebSocket connections with authenticated handshakes and connection pooling",
      "Built Node.js stream processor handling 50,000 data points/sec with backpressure control to prevent memory overflow",
      "Deployed on AWS Auto Scaling Groups — instances scale automatically under traffic spikes, keeping latency flat",
      "TimescaleDB hypertables with time_bucket() for sub-second aggregation queries across millions of time-series events",
      "Redis Sorted Sets for real-time 60-second rolling window — realtime endpoint never touches the primary DB",
    ],
    stack: ["Node.js", "TypeScript", "Socket.io", "TimescaleDB", "Redis", "RabbitMQ", "Docker", "AWS"],
    github: "https://github.com/zeeshansaleem",
    color: "#79b8ff",
    colorDim: "rgba(121,184,255,0.10)",
  },
];

export const SKILLS = [
  { label: "Languages", items: ["TypeScript", "JavaScript (ES2022+)", "SQL"], hot: ["TypeScript", "JavaScript (ES2022+)"] },
  { label: "Backend", items: ["Node.js", "Express.js", "REST API Design", "WebSockets (Socket.io)", "JWT", "OAuth 2.0", "Rate Limiting"], hot: ["Node.js", "Express.js", "WebSockets (Socket.io)"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "TimescaleDB"], hot: ["PostgreSQL", "MongoDB", "Redis"] },
  { label: "Message Queues", items: ["RabbitMQ", "Bull / BullMQ"], hot: ["RabbitMQ", "Bull / BullMQ"] },
  { label: "DevOps & Cloud", items: ["Docker", "AWS (EC2, S3, Auto Scaling)", "GitHub Actions CI/CD", "Git"], hot: ["Docker", "AWS (EC2, S3, Auto Scaling)", "GitHub Actions CI/CD"] },
  { label: "Patterns & Architecture", items: ["RBAC", "Multi-Tenancy", "MVC", "Event-Driven Design", "Microservices Principles"], hot: ["RBAC", "Multi-Tenancy", "Event-Driven Design"] },
];

export const HERO_STATS = [
  { value: "50K", unit: "/sec", label: "events ingested", sub: "analytics engine", color: "#39ff14" },
  { value: "5K+", unit: "", label: "concurrent WebSockets", sub: "socket.io cluster", color: "#79b8ff" },
  { value: "2", unit: "", label: "production systems", sub: "deployed on AWS", color: "#e3b341" },
  { value: "3.45", unit: "/4.0", label: "CGPA", sub: "B.Sc. Software Eng.", color: "#bc8cff" },
];

export const NAV_LINKS = ["Skills", "Projects", "About", "Education", "Contact"];