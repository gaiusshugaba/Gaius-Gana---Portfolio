import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-2xl border border-border-subtle bg-surface p-5 sm:p-6 md:p-8 transition-colors hover:border-accent/40"
    >
      <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-display-semibold text-text text-xl sm:text-2xl md:text-3xl leading-tight mb-2 sm:mb-3">
            {project.title}
          </h3>
          <p className="font-body text-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {project.summary}
          </p>
        </div>
        <span
          className="font-body text-text text-lg sm:text-xl md:text-2xl shrink-0"
          aria-hidden
        >
          →
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-body text-[10px] sm:text-xs md:text-sm text-muted border border-border-subtle rounded-full px-2.5 py-1 sm:px-3"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative rounded-xl overflow-hidden bg-bg aspect-[16/10]">
        <Image
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, 1100px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span className="font-body font-semibold text-white text-sm sm:text-base md:text-lg border border-white/40 rounded-full px-4 py-2 sm:px-5 sm:py-2.5">
            View Case Study →
          </span>
        </div>
      </div>
    </Link>
  );
}