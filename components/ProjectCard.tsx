import Link from "next/link";
import type { Project } from "@/lib/types";

const trackLabel: Record<Project["track"], string> = {
  uiux: "UI/UX",
  automation: "AI Automation",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="block rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 transition-colors hover:border-accent/40"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="font-display-semibold text-text text-2xl sm:text-3xl leading-tight mb-2">
            {project.title}
          </h3>
          <p className="font-body text-muted text-base leading-relaxed max-w-3xl">
            {project.summary}
          </p>
        </div>
        <span className="font-body text-text text-2xl shrink-0" aria-hidden>
          →
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="font-body text-xs text-accent border border-accent/40 rounded-full px-3 py-1">
          {trackLabel[project.track]}
        </span>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-body text-xs text-muted border border-border-subtle rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Thumbnail */}
      <div className="rounded-xl overflow-hidden bg-bg">
        <img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          className="block w-full h-auto"
        />
      </div>
    </Link>
  );
}