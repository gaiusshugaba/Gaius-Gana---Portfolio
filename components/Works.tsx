"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import type { Track } from "@/lib/types";

type Filter = "all" | Track;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "uiux", label: "UI/UX" },
  { value: "automation", label: "AI Automation" },
];

export default function Works() {
  const [active, setActive] = useState<Filter>("all");

  const featured = projects.filter((p) => p.featured);
  const visible =
    active === "all" ? featured : featured.filter((p) => p.track === active);

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header + tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <h2 className="font-display-bold text-text text-4xl sm:text-5xl">
            Works
          </h2>

          <div className="inline-flex rounded-full border border-border-subtle bg-surface p-1 self-start sm:self-auto">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`font-body text-sm px-4 py-2 rounded-full transition-colors ${
                  active === f.value
                    ? "bg-accent text-bg font-semibold"
                    : "text-muted hover:text-text"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center mt-12">
          <Link
            href="/work"
            className="font-body text-text text-lg hover:text-accent transition-colors inline-flex items-center gap-2"
          >
            View All Works →
          </Link>
        </div>
      </div>
    </section>
  );
}