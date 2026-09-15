"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let revealed = false;
    let ticking = false;
    const REVEAL_BUFFER = 60;

    const check = () => {
      if (revealed || !el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - REVEAL_BUFFER && rect.bottom > 0) {
        revealed = true;
        setVisible(true);
        cleanup();
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        check();
        ticking = false;
      });
    };

    const cleanup = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    // Delay the first check so the hidden state paints first,
    // then elements in view fade in nicely on load.
    const initialTimeout = setTimeout(check, 60);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      clearTimeout(initialTimeout);
      cleanup();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}