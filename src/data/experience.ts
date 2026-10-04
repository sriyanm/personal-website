export interface ExperienceEntry {
  company: string;
  location: string;
  role: string;
  dates: string;
  bullets: string[];
  link?: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Databricks",
    location: "San Francisco, CA",
    role: "Software Engineering Intern — Foundation Model Serving Team",
    dates: "May 2026 – Aug 2026",
    bullets: [
      "Productionized a [new GenAI model-serving offering](https://docs.databricks.com/aws/en/machine-learning/foundation-model-apis/reserved-provisioned-throughput) of provisioned throughput projected to generate $60M in revenue, giving large steady-state customers committed capacity w/ 99.99% availability, consistent latency, & predictable spend.",
      "Owned the product end-to-end, building the UI, API handlers, & database schema, and drove cross-functional alignment across billing & field/sales teams to resolve pricing & rollout blockers, accelerating production launch by 2 weeks.",
    ],
    link: "https://docs.databricks.com/aws/en/machine-learning/foundation-model-apis/reserved-provisioned-throughput",
  },
  {
    company: "Samsara",
    location: "San Francisco, CA",
    role: "Software Engineering Intern — Workflows & Automation Platforms",
    dates: "May 2025 – Aug 2025",
    bullets: [
      "Designed an asynchronous execution framework in Go for Temporal workflows using futures and local activities for LLM use cases, cutting workflow blocking time by 70% for 5 developer teams, scaling growth and safety for 1,000 customers.",
      "Developed external completion mechanism enabling workflows to pause execution and be completed externally by a GraphQL API call to a gRPC service, allowing LLM tasks to be reviewed by humans without blocking workflows.",
    ],
    link: "https://samsara.com",
  },
  {
    company: "Coshii",
    location: "Los Angeles, CA",
    role: "Founding Software Engineer",
    dates: "Jan 2025 – Present",
    bullets: [
      "Built the full-stack e-commerce platform using Next.js and React TypeScript, enabling a market of 40M+ solopreneurs to launch shops in under 2 minutes — a 98% reduction in setup time compared to Shopify or Squarespace.",
      "Integrated responsive UI components, Firebase backend services, and AI content management with RESTful APIs, implementing real-time data synchronization and SendGrid notification systems.",
    ],
    link: "https://coshii.com",
  },
  {
    company: "Next Play Games",
    location: "San Francisco, CA",
    role: "Full Stack Software Engineer",
    dates: "Jun 2024 – Apr 2025",
    bullets: [
      "Engineered scalable REST API features in TypeScript and Node.js, implementing PostgreSQL-backed data retrieval, Postman for API testing, and optimizing Docker containerization — reducing deployment times by 30%.",
      "Architected a CI/CD strategy with GitHub Actions, automating testing and continuous deployments to boost release frequency by 40% and cut integration issues by 25% across staging and production.",
    ],
  },
  {
    company: "MEG Consulting",
    location: "Ann Arbor, MI",
    role: "Web Developer & Business Analyst",
    dates: "Feb 2024 – Present",
    bullets: [
      "Led 6-member team in development of club website (meg-consulting.org), built with ReactJS and deployed to Cloudflare; implemented real-time event updates driving 25,000 annual visitors.",
      "Proposed a market expansion strategy for a Chicago-based Indian fusion startup into 10 new retail channels and a VC financial model to support investor pitching and 5-year growth planning.",
    ],
    link: "https://meg-consulting.org",
  },
];
