"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Dot grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Availability pill */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-body text-muted text-xs sm:text-sm">
              Available for design, automation, and video projects
            </span>
          </div>
        </Reveal>

        {/* Introduction (Image stacked above Name) */}
        <Reveal delay={0.1}>
          <div className="flex flex-col items-center justify-center mb-6">
            {/* The image is now smaller (80px on mobile, 100px on desktop) */}
            <div className="relative w-[80px] sm:w-[100px] mb-3">
              <Image
                src="/hero/portrait.png"
                alt="Gaius Gana"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
            <h2 className="font-body text-muted text-xl sm:text-2xl font-medium">
              Hi, I'm Gaius Gana.
            </h2>
          </div>
        </Reveal>

        {/* Headline (Single Line, Smaller) */}
        <Reveal delay={0.2}>
          <h1 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6 whitespace-nowrap">
            Design. Automate. Create.
          </h1>
        </Reveal>

        {/* Subheadline */}
        <Reveal delay={0.3}>
          <p className="font-body text-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
            Combining UI/UX Product Design, AI Workflow Automation, and AI-Powered Video. I bridge the gap between how a product looks, how it runs, and how it gets in front of users.
          </p>
        </Reveal>

      </div>
    </section>
  );
}