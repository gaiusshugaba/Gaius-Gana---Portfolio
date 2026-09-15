"use client";

import { useState } from "react";
import { Menu, X, ArrowRight, Mail } from "lucide-react";
import { nav } from "@/data/socials";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const handleScroll = (target: string) => {
    setOpen(false);
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Primary"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100vw-2rem)] md:w-auto"
    >
      <div className="flex items-center justify-between md:justify-start gap-6 rounded-full border border-[#2E2E30] bg-[#212123]/85 backdrop-blur-xl px-6 md:px-10 py-1.5 md:py-2">
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="font-display-bold text-[#FAFAFA] text-sm md:text-base tracking-tight whitespace-nowrap hover:text-accent active:text-accent transition-colors md:mr-20"
        >
          Gaius Gana
        </button>

        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => handleScroll("#works")}
            className="font-body text-[#B0B0B0] text-xs md:text-sm hover:text-[#FAFAFA] active:text-[#FAFAFA] transition-colors whitespace-nowrap"
          >
            Works
          </button>
          <button
            onClick={() => handleScroll("#about")}
            className="font-body text-[#B0B0B0] text-xs md:text-sm hover:text-[#FAFAFA] active:text-[#FAFAFA] transition-colors whitespace-nowrap"
          >
            About
          </button>
          <a
            href={nav.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[#B0B0B0] text-xs md:text-sm hover:text-[#FAFAFA] active:text-[#FAFAFA] transition-colors whitespace-nowrap"
          >
            Resume
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4 md:ml-6">
          <ThemeToggle />
          <a
            href={nav.contact}
            className="group inline-flex items-center gap-2 font-body font-semibold text-xs md:text-sm bg-accent text-[#0A0A0A] rounded-full px-4 py-1.5 hover:bg-[#FAFAFA] active:bg-[#FAFAFA] transition-colors duration-300 whitespace-nowrap"
          >
            <span>Let&apos;s talk</span>
            <span aria-hidden="true" className="relative w-3.5 h-3.5 shrink-0 overflow-hidden">
              <ArrowRight className="absolute inset-0 w-3.5 h-3.5 transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:opacity-0 group-active:translate-x-4 group-active:opacity-0" />
              <Mail className="absolute inset-0 w-3.5 h-3.5 transition-all duration-300 ease-out -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-active:translate-x-0 group-active:opacity-100" />
            </span>
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="text-[#FAFAFA] p-1"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden mt-2 rounded-2xl border border-[#2E2E30] bg-[#212123]/95 backdrop-blur-xl p-4 flex flex-col gap-1"
        >
          <button
            onClick={() => handleScroll("#works")}
            className="font-body text-[#FAFAFA] text-center text-base py-3 px-2 rounded-lg hover:bg-black/50 active:bg-black/50 transition-colors"
          >
            Works
          </button>
          <button
            onClick={() => handleScroll("#about")}
            className="font-body text-[#FAFAFA] text-center text-base py-3 px-2 rounded-lg hover:bg-black/50 active:bg-black/50 transition-colors"
          >
            About
          </button>
          <a
            href={nav.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[#FAFAFA] text-center text-base py-3 px-2 rounded-lg hover:bg-black/50 active:bg-black/50 transition-colors"
          >
            Resume
          </a>
          <a
            href={nav.contact}
            className="group inline-flex items-center justify-center gap-2 font-body font-semibold bg-accent text-[#0A0A0A] rounded-full px-4 py-2.5 mt-2 hover:bg-[#FAFAFA] active:bg-[#FAFAFA] transition-colors duration-300"
          >
            <span>Let&apos;s talk</span>
            <span aria-hidden="true" className="relative w-3.5 h-3.5 shrink-0 overflow-hidden">
              <ArrowRight className="absolute inset-0 w-3.5 h-3.5 transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:opacity-0 group-active:translate-x-4 group-active:opacity-0" />
              <Mail className="absolute inset-0 w-3.5 h-3.5 transition-all duration-300 ease-out -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-active:translate-x-0 group-active:opacity-100" />
            </span>
          </a>
        </div>
      )}
    </nav>
  );
}