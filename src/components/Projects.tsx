"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

function useInView(threshold = 0.08) {
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

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { ref, inView } = useInView(0.08);

  return (
    <div
      ref={ref}
      className={`card-hover bg-[#000e1f] border border-slate-800 rounded-xl p-6 flex flex-col transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Title row */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          {/* Folder icon */}
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            className="text-[#FFCB05] flex-shrink-0"
          >
            <path
              d="M1 5C1 3.9 1.9 3 3 3H9L11 5H19C20.1 5 21 5.9 21 7V17C21 18.1 20.1 19 19 19H3C1.9 19 1 18.1 1 17V5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-white font-bold text-base">{project.title}</h3>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#FFCB05] transition-colors"
              aria-label="GitHub"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#FFCB05] transition-colors"
              aria-label="Demo"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-[#FFCB05]/20 to-transparent mb-4" />

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

      {/* Highlights */}
      {project.highlights && (
        <ul className="mb-4 space-y-1.5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-xs text-slate-500 leading-relaxed">
              <span className="text-[#FFCB05]/50 mt-0.5">▸</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-slate-800/60">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-[#FFCB05]/70 bg-[#FFCB05]/5 border border-[#FFCB05]/15 px-2 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="section-padding bg-[#00274C]/20">
      <div className="stripe-divider mb-16" />
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="font-mono text-[#FFCB05] text-xs tracking-[0.3em] uppercase mb-2">
            03 / Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Things I&apos;ve Built</h2>
          <p className="text-slate-400 text-sm mt-2">
            Add new entries to{" "}
            <code className="font-mono text-[#FFCB05]/70 text-xs bg-slate-800/60 px-1.5 py-0.5 rounded">
              src/data/projects.ts
            </code>
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
