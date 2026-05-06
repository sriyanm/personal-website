"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "@/data/experience";

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

function ExperienceCard({
  entry,
  index,
}: {
  entry: (typeof experience)[0];
  index: number;
}) {
  const { ref, inView } = useInView(0.08);

  return (
    <div
      ref={ref}
      className={`relative pl-8 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-3 h-3 rounded-full border-2 border-[#FFCB05] bg-[#000e1f] z-10" />
      {/* Timeline line — hidden on last item */}
      <div className="absolute left-[5px] top-6 bottom-0 w-px bg-gradient-to-b from-[#FFCB05]/40 to-transparent" />

      <div className="bg-[#000e1f] border border-slate-800 rounded-lg p-6 ml-4 hover:border-[#FFCB05]/25 transition-all duration-200 group">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-white font-bold text-lg leading-tight">
                {entry.link ? (
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FFCB05] transition-colors inline-flex items-center gap-1"
                  >
                    {entry.company}
                    <svg
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="opacity-50 group-hover:opacity-100 transition-opacity"
                    >
                      <path
                        d="M7 3h4v4M11 3 5 9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : (
                  entry.company
                )}
              </h3>
              {entry.incoming && (
                <span className="text-xs font-mono bg-[#FFCB05]/15 text-[#FFCB05] border border-[#FFCB05]/30 px-2 py-0.5 rounded-full">
                  Incoming
                </span>
              )}
            </div>
            <p className="text-[#FFCB05]/80 text-sm mt-0.5">{entry.role}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="font-mono text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
              {entry.dates}
            </p>
            <p className="text-slate-500 text-xs mt-1">{entry.location}</p>
          </div>
        </div>

        {/* Maize left accent bar */}
        <div className="h-px bg-gradient-to-r from-[#FFCB05]/30 to-transparent mb-4" />

        {/* Bullets */}
        {entry.bullets.length > 0 ? (
          <ul className="space-y-2.5">
            {entry.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                <span className="mt-2 w-1 h-1 rounded-full bg-[#FFCB05] flex-shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-500 text-sm italic">Starting May 2026</p>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="section-padding bg-[#000e1f]">
      <div className="stripe-divider mb-16"><span /></div>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="font-mono text-[#FFCB05] text-xs tracking-[0.3em] uppercase mb-2">
            02 / Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Where I&apos;ve Worked</h2>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experience.map((entry, i) => (
            <ExperienceCard key={entry.company + entry.dates} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
