"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000e1f]/95 backdrop-blur-md border-b border-[#FFCB05]/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-[#FFCB05] font-bold text-lg tracking-widest hover:opacity-80 transition-opacity"
        >
          SM
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-slate-300 hover:text-[#FFCB05] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FFCB05] group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href="mailto:sriyan@umich.edu"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-[#FFCB05]/50 text-[#FFCB05] text-sm font-mono rounded hover:bg-[#FFCB05]/10 hover:border-[#FFCB05] transition-all duration-200"
        >
          Get In Touch
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-300 hover:text-[#FFCB05] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#000e1f]/98 backdrop-blur-md border-b border-[#FFCB05]/10">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-slate-300 hover:text-[#FFCB05] transition-colors w-full text-left font-medium"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="mailto:sriyan@umich.edu"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#FFCB05]/50 text-[#FFCB05] text-sm font-mono rounded hover:bg-[#FFCB05]/10 transition-all duration-200"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
