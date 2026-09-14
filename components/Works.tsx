"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
  const showViewAll = active === "automation";

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header + tabs */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl">
              Works
            </h2>

            <div className="inline-flex rounded-full border border-border-subtle bg-surface p-1 self-start sm:self-auto">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={`font-body text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors ${
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
        </Reveal>

        {/* Cards — scroll reveal + filter transition */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <AnimatePresence mode="wait">
            {visible.map((project, i) => (
              <motion.div
                key={`${active}-${project.slug}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: i * 0.08,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View all — automation only */}
        {showViewAll && (
          <Reveal delay={0.2}>
            <div className="flex justify-center mt-10 sm:mt-12">
              <Link
                href="/work"
                className="font-body text-text text-base sm:text-lg hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                View All Works →
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}