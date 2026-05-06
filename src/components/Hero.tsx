"use client";

import { useEffect, useRef, useState } from "react";

const TYPEWRITER_STRINGS = [
  "SWE Intern @ Databricks",
  "UMich Computer Science '26",
  "Distributed Systems enthusiast",
  "Formula 1 devotee",
  "Astronomy nerd",
  "GeoGuessr addict",
];

function useTypewriter(strings: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, speed);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, speed / 2);
    } else {
      // charIndex === 0 while deleting: transition cleanly to next string
      setDisplay("");
      setDeleting(false);
      setIndex((i) => (i + 1) % strings.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, strings, speed, pause]);

  return display;
}

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const stars: { x: number; y: number; r: number; speed: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.15 + 0.05,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }

    // A few maize-tinted bright stars
    for (let i = 0; i < 12; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        speed: Math.random() * 0.08 + 0.02,
        opacity: Math.random() * 0.5 + 0.4,
      });
    }

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      stars.forEach((star, i) => {
        const twinkle = Math.sin(frame * 0.02 + i) * 0.3 + 0.7;
        const isMaize = i >= 200;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = isMaize
          ? `rgba(255, 203, 5, ${star.opacity * twinkle * 0.6})`
          : `rgba(226, 232, 240, ${star.opacity * twinkle})`;
        ctx.fill();

        // Drift downward slowly
        star.y += star.speed;
        if (star.y > canvas.height + 2) {
          star.y = -2;
          star.x = Math.random() * canvas.width;
        }
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
}

export default function Hero() {
  const typed = useTypewriter(TYPEWRITER_STRINGS);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000e1f]">
      <StarField />

      {/* Radial glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 55%, rgba(0,37,76,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Racing stripe top accent */}
      <div className="absolute top-0 left-0 flex flex-col gap-[4px] pt-0">
        <div className="h-[6px] w-24 bg-[#FFCB05]" />
        <div className="h-[3px] w-24 bg-[#FFCB05] opacity-60" />
        <div className="h-[2px] w-24 bg-[#FFCB05] opacity-30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Overline label */}
        <p className="font-mono text-[#FFCB05] text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-[fadeIn_0.8s_ease_0.2s_forwards]">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 opacity-0 animate-[slideUp_0.8s_ease_0.4s_forwards] leading-tight">
          Sriyan{" "}
          <span className="text-gradient">Madugula</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-8 opacity-0 animate-[fadeIn_0.8s_ease_0.8s_forwards]">
          <p className="font-mono text-lg md:text-xl text-slate-300">
            {typed}
            <span className="inline-block w-0.5 h-5 bg-[#FFCB05] ml-1 animate-pulse" />
          </p>
        </div>

        {/* Tagline */}
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 opacity-0 animate-[fadeIn_0.8s_ease_1s_forwards] leading-relaxed">
          Building high-performance systems and thoughtful products. CS &amp; Math at{" "}
          <span className="text-[#FFCB05] font-medium">University of Michigan</span>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-[fadeIn_0.8s_ease_1.2s_forwards]">
          <button
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 bg-[#FFCB05] text-[#00274C] font-bold text-sm rounded hover:bg-[#FFD740] transition-all duration-200 shadow-lg shadow-[#FFCB05]/20 hover:shadow-[#FFCB05]/40"
          >
            View My Work
          </button>
          <a
            href="https://github.com/sriyanm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-slate-600 text-slate-300 font-medium text-sm rounded hover:border-[#FFCB05]/60 hover:text-[#FFCB05] transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sriyanm/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-slate-600 text-slate-300 font-medium text-sm rounded hover:border-[#FFCB05]/60 hover:text-[#FFCB05] transition-all duration-200"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}
