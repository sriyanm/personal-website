"use client";

import { useEffect, useRef, useState } from "react";

const interests = [
  { icon: "🏎️", label: "Formula 1" },
  { icon: "🌌", label: "Astronomy" },
  { icon: "🗺️", label: "GeoGuessr" },
  { icon: "🎾", label: "Tennis" },
  { icon: "🌐", label: "Wikiracing" },
  { icon: "🧠", label: "Neural Nets" },
  { icon: "📖", label: "Storytelling" },
  { icon: "🐳", label: "DevOps" },
];

const awards = [
  { title: "Angell Scholar", desc: "Top academic honor at UMich" },
  { title: "Branstrom Prize", desc: "Top 5% of freshman class" },
  { title: "Shipman Scholarship", desc: "Merit-based engineering award" },
  { title: "Tau Beta Pi", desc: "Engineering Honor Society" },
];

const stats = [
  { value: "3.91", label: "GPA" },
  { value: "5+", label: "Internships & Roles" },
  { value: "4+", label: "Projects Shipped" },
  { value: "Dec '26", label: "Graduation" },
];

function useInView(threshold = 0.15) {
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

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="bg-[#00274C]/30 section-padding relative">
      {/* Top racing stripe */}
      <div className="stripe-divider mb-16"><span /></div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <div
          className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="font-mono text-[#FFCB05] text-xs tracking-[0.3em] uppercase mb-2">
            01 / About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <div
            className={`transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {/* UMich badge */}
            <div className="inline-flex items-center gap-3 bg-[#00274C] border border-[#FFCB05]/30 rounded-lg px-4 py-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#FFCB05]/10 flex items-center justify-center text-lg font-bold text-[#FFCB05]">
                M
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">University of Michigan</p>
                <p className="text-slate-400 text-xs leading-tight">
                  B.S.E. Computer Science · Minor: Mathematics
                </p>
              </div>
              <span className="ml-2 text-xs font-mono text-[#FFCB05] bg-[#FFCB05]/10 px-2 py-0.5 rounded">
                3.91 GPA
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed mb-5">
              I&apos;m a computer science student at the University of Michigan College of Engineering,
              expected to graduate in December 2026. I care deeply about building systems that are
              reliable, fast, and built to scale, from distributed workflow engines to full stack
              product experiences.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Outside of engineering, you&apos;ll find me watching Formula 1, stargazing,
              or playing GeoGuessr.
            </p>

            {/* Relevant courses */}
            <div className="mb-8">
              <p className="text-xs font-mono text-[#FFCB05] tracking-widest uppercase mb-3">
                Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Operating Systems",
                  "Distributed Systems",
                  "Machine Learning",
                  "Cybersecurity",
                  "Networking",
                  "Web Systems",
                  "Graph Theory",
                  "Probability & Stats",
                ].map((c) => (
                  <span
                    key={c}
                    className="text-xs font-mono text-slate-400 border border-slate-700 px-2 py-1 rounded"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <p className="text-xs font-mono text-[#FFCB05] tracking-widest uppercase mb-3">
                Interests
              </p>
              <div className="flex flex-wrap gap-3">
                {interests.map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-2 text-sm text-slate-300 bg-[#00274C]/60 border border-slate-700 rounded-full px-3 py-1.5 hover:border-[#FFCB05]/40 hover:text-white transition-colors"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Stats + Awards */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#000e1f] border border-slate-800 rounded-lg p-5 text-center hover:border-[#FFCB05]/30 transition-colors"
                >
                  <p className="font-mono text-2xl font-bold text-[#FFCB05] mb-1">{stat.value}</p>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div>
              <p className="text-xs font-mono text-[#FFCB05] tracking-widest uppercase mb-4">
                Awards & Honors
              </p>
              <div className="space-y-3">
                {awards.map((award) => (
                  <div
                    key={award.title}
                    className="flex items-start gap-3 bg-[#000e1f] border border-slate-800 rounded-lg p-4 hover:border-[#FFCB05]/20 transition-colors"
                  >
                    <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#FFCB05] flex-shrink-0 mt-2" />
                    <div>
                      <p className="text-white text-sm font-semibold">{award.title}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{award.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
