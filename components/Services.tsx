"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import type { Track } from "@/lib/types";

export default function Services() {
  const [active, setActive] = useState<Track>("uiux");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const activeService = services.find((s) => s.id === active)!;
  const featured = projects.filter((p) => p.featured);
  
  const visibleProjects = featured.filter((p) => p.track.includes(active));

  return (
    <section id="works" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Tabs */}
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl mb-6">
              Services
            </h2>

            <div
              role="group"
              aria-label="Filter services"
              className="inline-flex flex-col sm:flex-row rounded-2xl sm:rounded-full border border-border-subtle bg-surface p-1 gap-1 sm:gap-0"
            >
              {services.map((s) => {
                const isActive = active === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(s.id)}
                    aria-pressed={isActive}
                    className={`font-body text-xs sm:text-sm px-5 py-2.5 rounded-xl sm:rounded-full transition-colors ${
                      isActive
                        ? "bg-accent text-on-accent font-semibold shadow-md"
                        : "text-muted hover:text-text hover:bg-bg/50"
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Service Description Block */}
        <Reveal key={`desc-${active}`} delay={0.1}>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h3 className="font-body font-medium text-text text-lg sm:text-xl mb-3">
              {activeService.headline}
            </h3>
            <p className="font-body text-muted text-sm sm:text-base leading-relaxed mb-6">
              {activeService.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-2">
              {activeService.deliverables.map((item) => (
                <span key={item} className="inline-flex items-center font-body text-xs text-text bg-surface border border-border-subtle px-3 py-1.5 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Projects List */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project, i) => (
              <Reveal key={`${active}-${project.slug}`} delay={i * 0.1}>
                <ProjectCard 
                  project={project} 
                  onPlayVideo={(url) => setActiveVideo(url)} 
                />
              </Reveal>
            ))
          ) : (
            <div className="text-center py-12 font-body text-muted border border-dashed border-border-subtle rounded-2xl">
              Projects for this service are coming soon.
            </div>
          )}
        </div>

      </div>

      {/* Video Modal Lightbox */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setActiveVideo(null)}
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()} // Prevent clicking video from closing modal
          >
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              className="w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}