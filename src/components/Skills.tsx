"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Languages",
    icon: "{ }",
    skills: [
      "Python",
      "Golang",
      "TypeScript",
      "JavaScript",
      "C++",
      "C",
      "Java",
      "Swift",
      "C# .NET",
    ],
  },
  {
    category: "Frontend & Backend",
    icon: "⚡",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Flask",
      "FastAPI",
      "Node.js",
      "GraphQL",
      "REST APIs",
      "gRPC",
    ],
  },
  {
    category: "Data & ML",
    icon: "🧠",
    skills: [
      "PyTorch",
      "TensorFlow",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "DynamoDB",
      "Kafka",
      "SQL",
    ],
  },
  {
    category: "Infrastructure & DevOps",
    icon: "🐳",
    skills: [
      "AWS",
      "GCP",
      "Azure",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Temporal",
      "Bash",
      "Jira",
    ],
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function SkillGroup({
  group,
  index,
}: {
  group: (typeof skillGroups)[0];
  index: number;
}) {
  const { ref, inView } = useInView(0.08);
  return (
    <div
      ref={ref}
      className={`bg-[#000e1f] border border-slate-800 rounded-xl p-6 hover:border-[#FFCB05]/20 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-[#FFCB05] text-sm">{group.icon}</span>
        <h3 className="text-white font-semibold text-sm tracking-wide">{group.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-mono text-slate-300 bg-slate-800/70 border border-slate-700/60 px-2.5 py-1 rounded-md hover:bg-[#FFCB05]/8 hover:border-[#FFCB05]/30 hover:text-[#FFCB05] transition-all duration-150 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section-padding bg-[#000e1f]">
      <div className="stripe-divider mb-16"><span /></div>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="font-mono text-[#FFCB05] text-xs tracking-[0.3em] uppercase mb-2">
            04 / Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tech Stack</h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.category} group={group} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-8 text-center transition-all duration-700 delay-300 ${inView ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-slate-600 text-xs font-mono">
            and always learning more
            <span className="text-[#FFCB05] ml-1">_</span>
          </p>
        </div>
      </div>
    </section>
  );
}
