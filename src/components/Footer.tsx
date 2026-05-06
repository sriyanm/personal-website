"use client";

import { useEffect, useRef, useState } from "react";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:sriyan@umich.edu",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sriyanm/",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/sriyanm",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
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

export default function Footer() {
  const { ref, inView } = useInView(0.1);

  return (
    <footer id="contact" className="bg-[#000e1f] border-t border-slate-800">
      {/* Contact CTA section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="font-mono text-[#FFCB05] text-xs tracking-[0.3em] uppercase mb-4">
            05 / Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
            My inbox is open.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:sriyan@umich.edu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFCB05] text-[#00274C] font-bold text-sm rounded hover:bg-[#FFD740] transition-all duration-200 shadow-lg shadow-[#FFCB05]/20 hover:shadow-[#FFCB05]/35 mb-10"
          >
            Say Hello
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-[#FFCB05] transition-colors duration-200 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-150">
                  {link.icon}
                </span>
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800/60 px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[#FFCB05] font-bold text-sm">SM</span>
          <p className="text-slate-500 text-xs font-mono">
            Designed &amp; built by Sriyan Madugula · Go Blue 〽️
          </p>
          <p className="text-slate-500 text-xs font-mono">
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
