// ============================================================
// PORTFOLIO DATA — Single source of truth
// ============================================================

export const PERSONAL_INFO = {
  name: "Monu Kumar",
  title: "Senior Software Engineer",
  tagline: "Building Distributed Systems at Scale",
  bio: "I design and build high-throughput backend systems that handle millions of users. From real-time personalization engines to distributed subscription platforms and AI gateways — I obsess over latency, reliability, and elegant architecture.",
  email: "mkuma47@uic.edu",
  phone: "+1 (312) 843-0296",
  github: "https://github.com/monu18",
  linkedin: "https://linkedin.com/in/monu18",
  resume: "/resume.pdf",
  location: "Chicago, IL",
  available: true,
};

export const NAV_ITEMS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "System Design", href: "#system-design" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "5M+", label: "Users Served" },
  { value: "42%", label: "Throughput Gain" },
  { value: "99.99%", label: "System Uptime" },
  { value: "10×", label: "Latency Reduction" },
];

// ============================================================
// EXPERIENCE
// ============================================================

export interface Experience {
  id: string;
  company: string;
  companyUrl: string;
  role: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics: { value: string; label: string }[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: "infoedge-senior",
    company: "Info Edge — Jeevansathi.com",
    companyUrl: "https://www.jeevansathi.com",
    role: "Senior Software Engineer",
    type: "Full-time",
    period: "Apr 2022 – Jul 2024",
    duration: "2 yrs 4 mos",
    location: "Noida, India",
    description:
      "Led backend engineering for Jeevansathi.com — one of India's largest matrimonial platforms. Owned the distributed subscription platform, billing infrastructure, and personalization services at 5M+ user scale.",
    highlights: [
      "Architected scalable distributed microservices for a subscription platform serving 5M+ users — achieving 42% throughput improvement and 35% revenue growth via caching and load-balanced services",
      "Designed fault-tolerant recurring billing integrations with Apple and BillDesk using JWT-based authentication and asymmetric key exchange, driving 2× growth in premium subscriptions within a quarter",
      "Built low-latency personalization and ranking services using Collaborative Filtering and XGBoost, processing 2M+ prospects daily — increasing premium conversions by 8% and sales efficiency by 15%",
      "Established production observability and alerting (Prometheus, Grafana), reducing MTTR by 60% and sustaining 99.99% uptime while supporting on-call incident response",
      "Mentored 3 junior engineers and led backend microservices with TDD, unit/integration tests, and documentation",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Redis",
      "Aerospike",
      "Elasticsearch",
      "XGBoost",
      "Prometheus",
      "Grafana",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
    metrics: [
      { value: "5M+", label: "Users" },
      { value: "42%", label: "Throughput ↑" },
      { value: "35%", label: "Revenue ↑" },
      { value: "2×", label: "Premium Subs" },
    ],
  },
  {
    id: "infoedge-swe",
    company: "Info Edge — Jeevansathi.com",
    companyUrl: "https://www.jeevansathi.com",
    role: "Software Engineer",
    type: "Full-time",
    period: "Jun 2021 – Mar 2022",
    duration: "10 mos",
    location: "Noida, India",
    description:
      "Built core search, notification, and CRM infrastructure powering daily matchmaking for millions of users. Led a major search migration from Solr to Elasticsearch and re-architected the order management system.",
    highlights: [
      "Migrated from Solr to Elasticsearch, enabling near-real-time indexing at 6M+ reads/day (1000+ TPS)",
      "Reduced P99 search latency from 6000+ ms to 600 ms via shard reconfiguration and query optimization — a 10× improvement",
      "Built an event-driven notification service (Kafka, APNS, FCM) for real-time and scheduled alerts with Azkaban",
      "Designed RESTful APIs and a React-based full-stack CRM platform serving 200K+ DAUs for subscription lifecycle and payment management",
      "Re-architected order workflow from PHP monolith to Spring Boot microservices using RabbitMQ and Redis",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Elasticsearch",
      "Solr",
      "Kafka",
      "RabbitMQ",
      "Redis",
      "React",
      "PostgreSQL",
      "Azkaban",
      "APNS",
      "FCM",
    ],
    metrics: [
      { value: "6M+", label: "Reads/Day" },
      { value: "1000+", label: "TPS" },
      { value: "10×", label: "Latency ↓" },
      { value: "200K+", label: "DAUs" },
    ],
  },
  {
    id: "uic-ta",
    company: "University of Illinois Chicago",
    companyUrl: "https://cs.uic.edu",
    role: "Graduate Teaching Assistant",
    type: "Part-time",
    period: "Jun 2025 – Present",
    duration: "Current",
    location: "Chicago, IL",
    description:
      "TA for graduate-level data engineering courses. Designed hands-on labs, led applied engineering projects, and mentored students on distributed data pipelines, LLM workflows, and cloud infrastructure.",
    highlights: [
      "Designed hands-on labs in PySpark and Apache Airflow, enabling distributed, fault-tolerant ETL data pipelines",
      "Led applied engineering projects integrating AWS RDS, Python web scraping, and LLM-based ingestion workflows processing 10K+ records per batch",
    ],
    technologies: [
      "PySpark",
      "Apache Airflow",
      "AWS RDS",
      "Python",
      "LLMs",
      "ETL",
      "PostgreSQL",
    ],
    metrics: [
      { value: "10K+", label: "Records/Batch" },
      { value: "2", label: "Courses" },
    ],
  },
];

// ============================================================
// EDUCATION
// ============================================================

export const EDUCATION = [
  {
    school: "University of Illinois Chicago",
    degree: "Master of Science, Computer Science",
    gpa: "3.86 / 4.0",
    period: "Aug 2024 – May 2026 (Expected)",
    location: "Chicago, IL",
  },
  {
    school: "National Institute of Technology Raipur",
    degree: "Bachelor of Technology, Information Technology",
    gpa: "8.63 / 10",
    period: "Aug 2017 – May 2021",
    location: "Raipur, India",
  },
];

// ============================================================
// PROJECTS
// ============================================================

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "distributed" | "ml" | "realtime" | "infra" | "systems";
  status: "production" | "open-source" | "research";
  period: string;
  problem: string;
  solution: string;
  architecture: string;
  impact: string[];
  technologies: string[];
  metrics: { value: string; label: string }[];
  github?: string;
  youtube?: string;
  featured: boolean;
  color: string;
}

export const PROJECTS: Project[] = [
  {
    id: "ai-over-sms",
    title: "AI over SMS — Distributed AI Gateway",
    subtitle: "Event-driven system enabling offline AI access via SMS",
    category: "distributed",
    status: "open-source",
    period: "Aug 2025 – Jan 2026",
    problem:
      "Billions of people lack reliable internet access but need AI capabilities. Traditional AI interfaces require stable HTTP connections — unusable for low-connectivity regions.",
    solution:
      "Designed an event-driven gateway that routes AI queries over SMS using Spring Boot, Kafka, Redis, and Twilio. Stateful conversations are maintained in Redis. Asynchronous Kafka pipelines enable cross-language (Java/Python) AI processing.",
    architecture:
      "SMS (Twilio) → Spring Boot Gateway → Kafka → Python AI Worker (Ollama/Bedrock) → Redis (conversation state) → Response back via Twilio SMS",
    impact: [
      "Stateful conversation handling with Redis-backed caching — zero context loss across SMS turns",
      "Asynchronous Kafka pipelines reduced redundant LLM calls significantly",
      "Cross-language processing: Java gateway + Python AI workers on same Kafka bus",
      "Deployable on minimal infrastructure — accessible in low-bandwidth environments",
    ],
    technologies: [
      "Spring Boot",
      "Apache Kafka",
      "Redis",
      "Twilio",
      "Python",
      "Java",
      "Ollama",
      "AWS Bedrock",
      "Docker",
    ],
    metrics: [
      { value: "0ms", label: "Context Loss" },
      { value: "Async", label: "LLM Pipeline" },
      { value: "Multi-lang", label: "Java + Python" },
    ],
    github: "https://github.com/monu18",
    featured: true,
    color: "primary",
  },
  {
    id: "llm-inference-platform",
    title: "LLM Inference Platform",
    subtitle: "Hybrid model orchestration: local + managed cloud models",
    category: "ml",
    status: "open-source",
    period: "Aug 2024 – Dec 2024",
    problem:
      "Teams want to use both local (private) and cloud LLMs depending on query sensitivity and cost. Switching between models requires different APIs and destroys conversation context.",
    solution:
      "Built a hybrid LLM orchestration layer integrating local (Ollama) and managed (AWS Bedrock) models via a unified gRPC API. Persistent multi-turn conversation storage with seamless model switching.",
    architecture:
      "gRPC API → Orchestrator → {Ollama (local) | AWS Bedrock (cloud)} → PostgreSQL (conversation store) → EC2 deployment (ECR, S3, Lambda)",
    impact: [
      "Unified gRPC API abstracts model provider — zero client changes when switching Ollama ↔ Bedrock",
      "Persistent multi-turn conversation storage with PostgreSQL",
      "Containerized deployment on EC2 via ECR and S3",
      "Benchmarked latency and cost tradeoffs across model tiers",
    ],
    technologies: [
      "Python",
      "gRPC",
      "Ollama",
      "AWS Bedrock",
      "AWS Lambda",
      "EC2",
      "ECR",
      "S3",
      "PostgreSQL",
      "Docker",
    ],
    metrics: [
      { value: "2", label: "LLM Backends" },
      { value: "gRPC", label: "Unified API" },
      { value: "Multi-turn", label: "Context" },
    ],
    github: "https://github.com/monu18",
    youtube: "https://youtube.com",
    featured: true,
    color: "cyan",
  },
  {
    id: "tacodb",
    title: "TacoDB — Relational Database Engine",
    subtitle: "B-Tree indexing, buffer pool management, and query operators from scratch",
    category: "systems",
    status: "open-source",
    period: "Jan 2025 – April 2025",
    problem:
      "Understanding database internals deeply — how real databases handle storage, indexing, and query execution at the systems level.",
    solution:
      "Engineered a relational database engine from scratch: B-Tree indexing, clock-based buffer pool management, and modular storage architecture. Implemented core query operators including Merge Join, Index Loop Join, Aggregation, and External Sort.",
    architecture:
      "SQL Parser → Query Planner → Operators (Merge Join, Index Loop Join, Aggregation, Sort) → Buffer Pool (clock eviction) → B-Tree Index → Disk I/O (page-based storage)",
    impact: [
      "B-Tree indexing with O(log n) lookup — validated on multi-million tuple workloads",
      "Clock-based buffer pool for efficient memory management with configurable page sizes",
      "Full query operator suite: Merge Join, Index Loop Join, Aggregation, External Sort",
      "Tested with GoogleTest and gdb — validated correctness at scale",
    ],
    technologies: ["C++", "B-Tree", "Buffer Pool", "Merge Join", "External Sort", "GoogleTest", "gdb"],
    metrics: [
      { value: "O(log n)", label: "Index Lookup" },
      { value: "Multi-M", label: "Tuple Scale" },
      { value: "4", label: "Join Types" },
    ],
    github: "https://github.com/monu18",
    featured: true,
    color: "green",
  },
];

// ============================================================
// SYSTEM DESIGN CASE STUDIES
// ============================================================

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  designPrinciples: { title: string; description: string }[];
  keyDecisions: { decision: string; rationale: string; tradeoff: string }[];
  scaleNumbers: { metric: string; value: string }[];
  lessonsLearned: string[];
  technologies: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "subscription-system-design",
    title: "Subscription Platform at 5M+ Users",
    subtitle: "How we scaled Jeevansathi's billing infrastructure and drove 35% revenue growth",
    challenge:
      "Design a subscription management system that handles 5M+ concurrent users, integrates with Apple IAP and BillDesk, ensures fault-tolerant billing with exactly-once semantics, and maintains high throughput under peak load — all while supporting complex recurring billing rules across subscription tiers.",
    designPrinciples: [
      {
        title: "Event-Driven Architecture",
        description:
          "Subscription lifecycle events (created, upgraded, cancelled, expired, renewed) are published to Kafka topics. Downstream services (notifications, analytics, CRM) subscribe independently — fully decoupled fanout without tight coupling.",
      },
      {
        title: "Layered Caching Strategy",
        description:
          "Redis for hot subscription state (sub-millisecond reads). Aerospike as the persistent fast store for write-heavy workloads. PostgreSQL as the audit log. This three-tier approach delivered the 42% throughput gain.",
      },
      {
        title: "JWT + Asymmetric Key Billing",
        description:
          "Apple and BillDesk integrations use JWT-based authentication with asymmetric key exchange for webhook verification. This prevents replay attacks and ensures billing events are cryptographically authenticated.",
      },
    ],
    keyDecisions: [
      {
        decision: "Kafka for subscription events instead of direct service calls",
        rationale:
          "6+ downstream consumers (notifications, analytics, CRM, fraud detection) need subscription events. Kafka provides durable fanout, replay capability, and consumer group isolation — impossible with synchronous calls.",
        tradeoff:
          "Adds operational complexity of Kafka cluster management and eventual consistency between services.",
      },
      {
        decision: "Aerospike over Redis for persistent billing state",
        rationale:
          "Redis is volatile by default and expensive at 5M-record scale. Aerospike provides Redis-like sub-millisecond latency with native persistence, multi-GB capacity, and secondary index support.",
        tradeoff:
          "Aerospike has steeper learning curve and more complex operational runbooks vs. Redis.",
      },
      {
        decision: "Asymmetric keys for Apple IAP webhook verification",
        rationale:
          "Apple sends billing webhooks with signed JWTs. Using asymmetric verification (public key from Apple's JWKS endpoint) eliminates shared-secret rotation risk and prevents billing event forgery.",
        tradeoff:
          "Requires periodic public key refresh and adds latency for JWKS endpoint calls (mitigated with caching).",
      },
    ],
    scaleNumbers: [
      { metric: "Active users", value: "5M+" },
      { metric: "Daily billing events", value: "2M+" },
      { metric: "Throughput improvement", value: "42%" },
      { metric: "Revenue growth", value: "35%" },
      { metric: "Premium sub growth", value: "2×" },
      { metric: "System uptime", value: "99.99%" },
    ],
    lessonsLearned: [
      "Billing idempotency is non-negotiable — we caught 3 duplicate charge scenarios in staging with chaos testing that would have been real customer issues in production.",
      "Apple IAP webhook ordering is not guaranteed. Building idempotent handlers that process events out-of-order was critical.",
      "MTTR improvement (60% reduction via Prometheus/Grafana) had more ROI impact per engineer-hour than almost any other infra investment.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Aerospike",
      "Redis",
      "PostgreSQL",
      "Prometheus",
      "Grafana",
      "JWT",
      "Apple IAP",
      "BillDesk",
      "Kubernetes",
    ],
  },
];

// ============================================================
// TECH STACK
// ============================================================

export const TECH_CATEGORIES = [
  {
    label: "Languages",
    items: [
      { name: "Java", level: "expert", color: "#F89820" },
      { name: "Python", level: "expert", color: "#3776AB" },
      { name: "Scala", level: "proficient", color: "#DC322F" },
      { name: "C++", level: "proficient", color: "#00599C" },
      { name: "Go", level: "familiar", color: "#00ADD8" },
      { name: "TypeScript", level: "proficient", color: "#3178C6" },
    ],
  },
  {
    label: "Frameworks & APIs",
    items: [
      { name: "Spring Boot", level: "expert", color: "#6DB33F" },
      { name: "Kafka / Kafka Streams", level: "expert", color: "#231F20" },
      { name: "gRPC", level: "proficient", color: "#244C5A" },
      { name: "RabbitMQ", level: "proficient", color: "#FF6600" },
      { name: "Akka", level: "familiar", color: "#15508D" },
      { name: "React", level: "proficient", color: "#61DAFB" },
    ],
  },
  {
    label: "Data & Search",
    items: [
      { name: "Elasticsearch", level: "expert", color: "#F04E98" },
      { name: "Redis", level: "expert", color: "#DC382D" },
      { name: "PostgreSQL / MySQL", level: "expert", color: "#336791" },
      { name: "Aerospike", level: "expert", color: "#C4161C" },
      { name: "MongoDB / Cassandra", level: "proficient", color: "#47A248" },
      { name: "Solr", level: "proficient", color: "#D9411E" },
    ],
  },
  {
    label: "Cloud & Infra",
    items: [
      { name: "AWS (EC2, S3, Lambda, RDS)", level: "proficient", color: "#FF9900" },
      { name: "Docker", level: "expert", color: "#2496ED" },
      { name: "Kubernetes", level: "proficient", color: "#326CE5" },
      { name: "Apache Spark", level: "proficient", color: "#E25A1C" },
      { name: "Hadoop / Airflow", level: "proficient", color: "#FECC00" },
      { name: "Linux", level: "expert", color: "#FCC624" },
    ],
  },
  {
    label: "Observability & ML",
    items: [
      { name: "Prometheus", level: "proficient", color: "#E6522C" },
      { name: "Grafana", level: "proficient", color: "#F46800" },
      { name: "XGBoost / Collaborative Filtering", level: "proficient", color: "#E95420" },
      { name: "Ollama / AWS Bedrock", level: "familiar", color: "#7C3AED" },
      { name: "PySpark", level: "proficient", color: "#E25A1C" },
      { name: "LLM Orchestration", level: "familiar", color: "#06B6D4" },
    ],
  },
];
