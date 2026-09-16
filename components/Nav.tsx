"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight, Mail } from "lucide-react";
import { nav } from "@/data/socials";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const handleScroll = (target: string) => {
    setOpen(false);
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const menuItems = [
    { label: "Works", onClick: () => handleScroll("#works"), isLink: false },
    { label: "About", onClick: () => handleScroll("#about"), isLink: false },
    {
      label: "Resume",
      onClick: () => {},
      isLink: true,
      href: nav.resume,
    },
  ];

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100vw-2rem)] md:w-auto"
    >
      <div className="flex items-center justify-between md:justify-start gap-6 rounded-full border border-[#2E2E30] bg-[#212123]/85 backdrop-blur-xl px-6 md:px-10 py-1.5 md:py-2">
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="font-display-bold text-[#FAFAFA] text-sm md:text-base tracking-tight whitespace-nowrap hover:text-accent transition-colors md:mr-20"
        >
          Gaius Gana
        </button>

        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => handleScroll("#works")}
            className="font-body text-[#B0B0B0] text-xs md:text-sm hover:text-[#FAFAFA] transition-colors whitespace-nowrap"
          >
            Works
          </button>
          <button
            onClick={() => handleScroll("#about")}
            className="font-body text-[#B0B0B0] text-xs md:text-sm hover:text-[#FAFAFA] transition-colors whitespace-nowrap"
          >
            About
          </button>
          <a
            href={nav.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[#B0B0B0] text-xs md:text-sm hover:text-[#FAFAFA] transition-colors whitespace-nowrap"
          >
            Resume
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4 md:ml-6">
          <ThemeToggle />
          <a
            href={nav.contact}
            className="group inline-flex items-center gap-2 font-body font-semibold text-xs md:text-sm bg-accent text-[#0A0A0A] rounded-full px-4 py-1.5 hover:bg-[#FAFAFA] transition-colors duration-300 whitespace-nowrap"
          >
            <span>Let&apos;s talk</span>
            <span aria-hidden="true" className="relative w-3.5 h-3.5 shrink-0 overflow-hidden">
              <ArrowRight className="absolute inset-0 w-3.5 h-3.5 transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:opacity-0" />
              <Mail className="absolute inset-0 w-3.5 h-3.5 transition-all duration-300 ease-out -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
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
            className="text-[#FAFAFA] p-1 relative w-7 h-7 flex items-center justify-center"
          >
            <Menu
              size={20}
              className={`absolute transition-all duration-300 ease-out ${
                open
                  ? "opacity-0 rotate-90 scale-75"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              size={20}
              className={`absolute transition-all duration-300 ease-out ${
                open
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-75"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden mt-2 rounded-2xl border bg-[#212123]/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ease-out origin-top ${
          open
            ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto border-[#2E2E30]"
            : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none border-transparent"
        }`}
      >
        <div className="p-4 flex flex-col gap-1">
          {menuItems.map((item, i) => {
            const delay = open ? `${i * 60 + 80}ms` : "0ms";
            const commonClasses =
              "font-body text-[#FAFAFA] text-center text-base py-3 px-2 rounded-lg hover:bg-black/50 transition-all duration-300 ease-out";
            const animClasses = open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2";

            if (item.isLink) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${commonClasses} ${animClasses}`}
                  style={{ transitionDelay: delay }}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <button
                key={item.label}
                onClick={item.onClick}
                className={`${commonClasses} ${animClasses}`}
                style={{ transitionDelay: delay }}
              >
                {item.label}
              </button>
            );
          })}

          <a
            href={nav.contact}
            className={`group inline-flex items-center justify-center gap-2 font-body font-semibold bg-accent text-[#0A0A0A] rounded-full px-4 py-2.5 mt-2 hover:bg-[#FAFAFA] transition-all duration-300 ease-out ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
            style={{ transitionDelay: open ? `${menuItems.length * 60 + 80}ms` : "0ms" }}
          >
            <span>Let&apos;s talk</span>
            <span aria-hidden="true" className="relative w-3.5 h-3.5 shrink-0 overflow-hidden">
              <ArrowRight className="absolute inset-0 w-3.5 h-3.5 transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:opacity-0" />
              <Mail className="absolute inset-0 w-3.5 h-3.5 transition-all duration-300 ease-out -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}