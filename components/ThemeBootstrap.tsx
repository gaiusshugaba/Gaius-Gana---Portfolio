"use client";

import { useEffect } from "react";

export default function ThemeBootstrap() {
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const root = document.documentElement;

      if (stored === "light") {
        root.classList.remove("dark");
      } else {
        root.classList.add("dark");
      }

      root.classList.add("js-ready");
    } catch {
      document.documentElement.classList.add("js-ready");
    }
  }, []);

  return null;
}