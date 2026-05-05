export interface ProjectEntry {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  highlights?: string[];
}

export const projects: ProjectEntry[] = [
  {
    title: "Mini Copilot",
    description:
      "Productionized a GPT-2 code autocompletion model with a versioned, API-based inference service on GCP integrated into a VS Code extension. Built ML lifecycle infrastructure including model versioning, rollback, and inference logging.",
    tech: ["Python", "GPT-2", "GCP", "VS Code API", "FastAPI"],
    highlights: [
      "Shared training/inference feature logic with observability for latency and errors",
      "Model versioning, rollback, and inference logging for safe production iteration",
    ],
  },
  {
    title: "Orater",
    description:
      "Real-time computer vision AI for emotion tracking and speech pattern detection, enhanced by NLP and Groq machine learning models with lazy loading for optimized audio-video processing.",
    tech: ["Python", "Flask", "Streamlit", "Groq", "OpenCV", "NLP"],
    github: "https://github.com/sriyanm/Orater",
    demo: "https://devpost.com/software/orater",
    highlights: [
      "Integrated advanced data pipelines and emotion recognition APIs",
      "Scalable Flask & Streamlit web platform with lazy-loaded audio/video processing",
    ],
  },
  {
    title: "Instagram Clone",
    description:
      "Full-stack Instagram clone with user authentication, post management, likes, and comments via RESTful APIs with proper HTTP status codes, secure sessions, and SHA-512 password hashing.",
    tech: ["Flask", "React.js", "SQLite", "Python", "REST API"],
    highlights: [
      "Secure session management with SHA-512 password hashing",
      "Full CRUD operations for posts, likes, and comments",
    ],
  },
  {
    title: "MapReduce",
    description:
      "MapReduce framework in Python using TCP/UDP sockets, JSON-based messaging, and multi-threaded coordination between Manager and Worker processes for distributed data processing with fault tolerance.",
    tech: ["Python", "TCP/UDP", "Multi-threading", "Distributed Systems"],
    highlights: [
      "Fault-tolerant worker coordination with JSON-based messaging",
      "Manager/Worker architecture with heartbeat monitoring",
    ],
  },
];
