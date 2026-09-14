"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto">
      <div className="flex items-center gap-6 sm:gap-8 rounded-full border border-border-subtle bg-surface/60 backdrop-blur-md px-5 sm:px-6 py-3 whitespace-nowrap">
        <span className="font-display-bold text-text text-base sm:text-lg tracking-tight whitespace-nowrap">
          Gaius Gana
        </span>

        <div className="hidden sm:flex items-center gap-6 sm:gap-8">
          <Link href="/works" className="font-body text-muted text-sm hover:text-text transition-colors whitespace-nowrap">
            Works
          </Link>
          <Link href="/about" className="font-body text-muted text-sm hover:text-text transition-colors whitespace-nowrap">
            About
          </Link>
          <Link href="/resume" className="font-body text-muted text-sm hover:text-text transition-colors whitespace-nowrap">
            Resume
          </Link>
        </div>

        <Link
          href="/contact"
          className="font-body font-semibold text-sm bg-accent text-bg rounded-full px-4 py-2 hover:brightness-110 transition-all whitespace-nowrap"
        >
          Let&apos;s talk →
        </Link>
      </div>
    </nav>
  );
}