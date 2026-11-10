"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import type { Project } from "@/lib/types";

export default function ProjectCard({ 
  project, 
  onPlayVideo 
}: { 
  project: Project; 
  onPlayVideo?: (url: string) => void;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const isVideo = project.track.includes("video");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isVideo) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isVideo && onPlayVideo) {
      e.preventDefault();
      onPlayVideo(project.thumbnail);
    }
  };

  const cardClasses = "cursor-wand group block rounded-2xl border border-border-subtle bg-surface p-5 sm:p-6 md:p-8 shadow-sm shadow-black/10 transition-colors hover:border-accent/40";

  const CardContent = (
    <>
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-display-semibold text-text text-xl sm:text-2xl md:text-3xl leading-tight mb-2 sm:mb-3">
            {project.title}
          </h3>
          <p className="font-body text-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {project.summary}
          </p>
        </div>
        {!isVideo && (
          <span className="font-body text-text text-lg sm:text-xl md:text-2xl shrink-0 transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="font-body text-[10px] sm:text-xs md:text-sm text-muted border border-border-subtle rounded-full px-2.5 py-1 sm:px-3">
            {tag}
          </span>
        ))}
      </div>

      {/* Media Area */}
      <div className="relative rounded-xl overflow-hidden bg-bg border border-border-subtle/50">
        {isVideo ? (
          /* 
            We use aspect-[4/3] to match the height of your standard image thumbnails 
            so the cards line up perfectly in the layout.
          */
          <div className="relative w-full aspect-[4/3]">
            <video
              src={project.thumbnail}
              preload="metadata"
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/10">
              <div className="w-16 h-16 rounded-full bg-accent text-bg flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110">
                <Play size={24} fill="currentColor" className="ml-1" />
              </div>
            </div>
          </div>
        ) : (
          <img
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            loading="lazy"
            decoding="async"
            className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
      </div>
    </>
  );

  return (
    <>
      {isVideo ? (
        <div onClick={handleClick} className={cardClasses}>
          {CardContent}
        </div>
      ) : (
        <Link
          href={`/work/${project.slug}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          className={cardClasses}
        >
          {CardContent}
        </Link>
      )}

      {/* Floating Custom Tooltip (Only for non-video) */}
      {!isVideo && isHovered && (
        <div
          className="fixed pointer-events-none z-50 flex items-center gap-3 bg-accent text-[#0A0A0A] px-5 py-3 sm:px-6 sm:py-4 rounded-full shadow-lg transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-[130%]"
          style={{ left: mousePos.x, top: mousePos.y }}
        >
          <span className="font-display-bold-wide text-lg sm:text-xl md:text-2xl uppercase tracking-tight">
            View Case Study
          </span>
          <ArrowUpRight size={24} strokeWidth={3} className="shrink-0" />
        </div>
      )}
    </>
  );
}