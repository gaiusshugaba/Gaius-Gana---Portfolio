"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import type { Track } from "@/lib/types";

const filters: { value: Track; label: string }[] = [
  { value: "uiux", label: "UI/UX" },
  { value: "automation", label: "AI Automation" },
];

export default function Works() {
  const [active, setActive] = useState<Track>("uiux");

  const featured = projects.filter((p) => p.featured);
  const visible = featured.filter((p) => p.track === active);

  return (
    <section id="works" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl">
              Works
            </h2>

            <div
              role="group"
              aria-label="Filter projects by track"
              className="inline-flex rounded-full border border-border-subtle bg-surface p-1 self-start sm:self-auto"
            >
              {filters.map((f) => {
                const isActive = active === f.value;
                return (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => setActive(f.value)}
                    aria-pressed={isActive}
                    className={`font-body text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors ${
                      isActive
                        ? "bg-text text-bg dark:bg-accent dark:text-on-accent font-semibold"
                        : "text-muted hover:text-text"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4 sm:gap-6">
          {visible.map((project, i) => (
            <Reveal key={`${active}-${project.slug}`} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}