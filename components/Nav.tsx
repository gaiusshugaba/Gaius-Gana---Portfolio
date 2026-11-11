"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Mail } from "lucide-react";
import { nav } from "@/data/socials";
import ThemeToggle from "./ThemeToggle";
import { useContact } from "./ContactProvider";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { openModal } = useContact();

  const handleScroll = (target: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactClick = () => {
    setOpen(false);
    openModal();
  };

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100vw-2rem)] md:w-auto"
    >
      <div className="flex items-center justify-between md:justify-start gap-6 rounded-full border border-border-subtle bg-surface/85 backdrop-blur-xl px-6 md:px-10 py-1.5 md:py-2 relative z-50">
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="font-display-bold text-text text-sm md:text-base tracking-tight whitespace-nowrap hover:text-accent transition-colors md:mr-20"
        >
          Gaius Gana
        </button>

        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => handleScroll("#works")} className="font-body text-muted text-xs md:text-sm hover:text-text transition-colors whitespace-nowrap">
            Services
          </button>
          <button onClick={() => handleScroll("#about")} className="font-body text-muted text-xs md:text-sm hover:text-text transition-colors whitespace-nowrap">
            About
          </button>
          <a href={nav.resume} target="_blank" rel="noopener noreferrer" className="font-body text-muted text-xs md:text-sm hover:text-text transition-colors whitespace-nowrap">
            Resume
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4 md:ml-6">
          <ThemeToggle />
          <button
            onClick={handleContactClick}
            className="group inline-flex items-center gap-2 font-body font-semibold text-xs md:text-sm bg-accent text-on-accent rounded-full px-4 py-1.5 hover:bg-text hover:text-bg transition-colors duration-300 whitespace-nowrap"
          >
            <span>Let&apos;s talk</span>
            <span aria-hidden="true" className="relative w-3.5 h-3.5 shrink-0 overflow-hidden">
              <ArrowRight className="absolute inset-0 w-3.5 h-3.5 transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:opacity-0" />
              <Mail className="absolute inset-0 w-3.5 h-3.5 transition-all duration-300 ease-out -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </span>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="text-text p-1 relative w-7 h-7 flex items-center justify-center"
          >
            <Menu size={20} className={`absolute transition-all duration-300 ease-out ${open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`} />
            <X size={20} className={`absolute transition-all duration-300 ease-out ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full mt-2 rounded-2xl border border-border-subtle bg-surface/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ease-out origin-top z-40 ${
          open ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="p-4 flex flex-col gap-1">
          <button onClick={() => handleScroll("#works")} className="font-body text-text text-center text-base py-3 px-2 rounded-lg hover:bg-bg/50 transition-all duration-300 ease-out">
            Services
          </button>
          <button onClick={() => handleScroll("#about")} className="font-body text-text text-center text-base py-3 px-2 rounded-lg hover:bg-bg/50 transition-all duration-300 ease-out">
            About
          </button>
          <a href={nav.resume} target="_blank" rel="noopener noreferrer" className="font-body text-text text-center text-base py-3 px-2 rounded-lg hover:bg-bg/50 transition-all duration-300 ease-out">
            Resume
          </a>
          <button
            onClick={handleContactClick}
            className="group inline-flex items-center justify-center gap-2 font-body font-semibold bg-accent text-on-accent rounded-full px-4 py-2.5 mt-2 hover:bg-text hover:text-bg transition-all duration-300 ease-out"
          >
            <span>Let&apos;s talk</span>
            <span aria-hidden="true" className="relative w-3.5 h-3.5 shrink-0 overflow-hidden">
              <ArrowRight className="absolute inset-0 w-3.5 h-3.5 transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:opacity-0" />
              <Mail className="absolute inset-0 w-3.5 h-3.5 transition-all duration-300 ease-out -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}