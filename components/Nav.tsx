"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/socials";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const handleScroll = (target: string) => {
    setOpen(false);
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100vw-2rem)] sm:w-auto">
      <div className="flex items-center justify-between sm:justify-center gap-4 sm:gap-8 rounded-full border border-border-subtle bg-surface/70 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3">
        <span className="font-display-bold text-text text-base sm:text-lg tracking-tight whitespace-nowrap">
          Gaius Gana
        </span>

        <div className="hidden md:flex items-center gap-7">
          <button
            onClick={() => handleScroll("#works")}
            className="font-body text-muted text-sm hover:text-text transition-colors whitespace-nowrap"
          >
            Works
          </button>
          <button
            onClick={() => handleScroll("#about")}
            className="font-body text-muted text-sm hover:text-text transition-colors whitespace-nowrap"
          >
            About
          </button>
          <a
            href={nav.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-muted text-sm hover:text-text transition-colors whitespace-nowrap"
          >
            Resume
          </a>
        </div>

        <a
          href={nav.contact}
          className="hidden md:inline-flex font-body font-semibold text-sm bg-accent text-bg rounded-full px-4 py-2 hover:bg-text hover:-translate-y-0.5 transition-all whitespace-nowrap"
        >
          Let&apos;s talk →
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden text-text p-1"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 rounded-2xl border border-border-subtle bg-surface/95 backdrop-blur-md p-4 flex flex-col gap-1">
          <button
            onClick={() => handleScroll("#works")}
            className="font-body text-text text-left text-base py-2 px-2 rounded-lg hover:bg-bg/50 transition-colors"
          >
            Works
          </button>
          <button
            onClick={() => handleScroll("#about")}
            className="font-body text-text text-left text-base py-2 px-2 rounded-lg hover:bg-bg/50 transition-colors"
          >
            About
          </button>
          <a
            href={nav.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-text text-base py-2 px-2 rounded-lg hover:bg-bg/50 transition-colors"
          >
            Resume
          </a>
          <a
            href={nav.contact}
            className="font-body font-semibold text-center bg-accent text-bg rounded-full px-4 py-2.5 mt-2 hover:bg-text transition-all"
          >
            Let&apos;s talk →
          </a>
        </div>
      )}
    </nav>
  );
}