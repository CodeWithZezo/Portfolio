export const PROJECTS = [
  {
    id: 1,
    title: "Clerk Auth System",
    subtitle: "Multi-Tenant Authentication Platform",
    tag: "AUTH · IDENTITY · SECURITY",
    status: "inprogress",
    description:
      "Production-grade authentication system with JWT rotation, workspace-scoped RBAC, and Redis-backed session management. Multi-tenant from the ground up — orgId-scoped queries make cross-tenant leaks architecturally impossible.",
    metrics: [
      { label: "Token Strategy", value: "15min / 7d" },
      { label: "Auth Pattern", value: "RBAC + ABAC" },
      { label: "Queue", value: "Bull + Redis" },
    ],
    achievements: [
      "Access + refresh token rotation with Redis blacklisting — logout truly invalidates tokens, preventing token theft even after session ends",
      "Workspace-scoped RBAC with granular requirePermission() middleware — OWNER / ADMIN / MEMBER hierarchy enforced at repository layer",
      "Multi-tenant data isolation on every DB query via orgId scoping — cross-tenant data leaks architecturally impossible",
      "Bull email queue with dead letter queue and exponential backoff — email failures never degrade HTTP response time",
      "GitHub Actions CI/CD, Prometheus metrics, Grafana dashboard, Swagger/OpenAPI docs at /api-docs",
    ],
    stack: ["Node.js", "TypeScript", "Express", "MongoDB", "Redis", "Bull", "Docker", "GitHub Actions"],
    github: "https://github.com/CodeWithZezo/authflow",
    color: "#39ff14",
    colorDim: "rgba(35,209,139,0.10)",
  },
  {
    id: 2,
    title: "Real-Time Analytics Engine",
    subtitle: "High-Throughput Event Pipeline",
    tag: "REAL-TIME · HIGH PERFORMANCE · STREAMS",
    status: "Building",
    description:
      "50K events/sec ingestion pipeline backed by TimescaleDB hypertables and a Redis Sorted Set rolling window. Serves live metrics to 5K+ concurrent authenticated WebSocket connections without the realtime path ever touching the primary DB.",
    metrics: [
      { label: "Throughput", value: "50K/sec" },
      { label: "Connections", value: "5K+ WS" },
      { label: "Batch Size", value: "100 rows/trip" },
    ],
    achievements: [
      "Batch ingestion pipeline: POST /ingest → Bull queue → batch worker inserts 100 events per DB round trip — handles 50K data points/sec",
      "Scaled Socket.IO to 5K+ concurrent authenticated WebSocket connections via Redis adapter for horizontal multi-instance broadcasting",
      "TimescaleDB hypertables with time_bucket() for sub-second aggregation queries across millions of time-series events",
      "Redis Sorted Sets for real-time 60-second rolling window — /realtime endpoint never touches TimescaleDB",
      "Load tested with k6 — benchmark results documented with screenshots in README",
    ],
    stack: ["Node.js", "TypeScript", "Socket.IO", "TimescaleDB", "Redis", "Bull", "Docker"],
    github: null, // private repo
    color: "#79b8ff",
    colorDim: "rgba(121,184,255,0.10)",
  },
];

export const SKILLS = [
  { label: "Languages", items: ["TypeScript", "JavaScript (Node.js)", "SQL"], hot: ["TypeScript", "JavaScript (Node.js)"] },
  { label: "Backend", items: ["Express.js", "REST API Design", "WebSockets (Socket.IO)", "JWT Auth"], hot: ["Express.js", "WebSockets (Socket.IO)"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "TimescaleDB"], hot: ["PostgreSQL", "MongoDB", "Redis"] },
  { label: "Message Queues", items: ["RabbitMQ (AMQP)", "Bull / BullMQ"], hot: ["RabbitMQ (AMQP)", "Bull / BullMQ"] },
  { label: "DevOps", items: ["Docker", "Docker Compose", "Kubernetes (K8s, HPA)", "GitHub Actions CI/CD"], hot: ["Docker Compose", "Docker", "Kubernetes (K8s, HPA)"] },
  { label: "Cloud & Monitoring", items: ["AWS (EC2, S3, IAM, ECS)", "Prometheus", "Grafana", "Winston structured logging"], hot: ["Prometheus", "Grafana"] },
  { label: "Concepts", items: ["Distributed Systems", "CAP Theorem", "Saga Pattern", "Outbox Pattern", "CQRS", "Event Sourcing", "RBAC"], hot: ["Distributed Systems", "Saga Pattern", "Outbox Pattern"] },
];

export const HERO_STATS = [
  { value: "50K", unit: "/sec", label: "events ingested", sub: "analytics engine", color: "#39ff14" },
  { value: "5K+", unit: "", label: "concurrent WebSockets", sub: "socket.io cluster", color: "#79b8ff" },
  { value: "2", unit: "", label: "live systems", sub: "production deployed", color: "#e3b341" },
  { value: "3.4", unit: "/4.0", label: "CGPA", sub: "B.Sc. Software Eng.", color: "#bc8cff" },
];

export const NAV_LINKS = ["Skills", "Projects", "About", "Education", "Contact"];
