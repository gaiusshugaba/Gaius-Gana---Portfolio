"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Different scroll speeds per element — creates parallax depth
  const pillY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const pillOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const nameY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  const bottomY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const bottomOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative pt-24 pb-24 px-6 overflow-hidden min-h-[90vh]"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        {/* Availability pill */}
        <motion.div
          style={{ y: pillY, opacity: pillOpacity }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-body text-muted text-xs sm:text-sm">
              Available for design and automation projects
            </span>
          </div>
        </motion.div>

        {/* Name + portrait block */}
        <div className="flex flex-col items-center">
          <motion.h1
            style={{ y: nameY, opacity: nameOpacity }}
            className="font-display-bold-wide text-text uppercase leading-[0.8] text-center text-[clamp(2.5rem,10vw,8rem)] relative z-0"
          >
            Gaius
          </motion.h1>

          <motion.img
            style={{ y: portraitY }}
            src="/hero/portrait.png"
            alt="Gaius Gana"
            className="block w-[150px] sm:w-[200px] md:w-[240px] h-auto relative z-10 -mt-[3vw] sm:-mt-[4vw]"
          />

          <motion.h1
            style={{ y: nameY, opacity: nameOpacity }}
            className="font-display-bold-wide text-text uppercase leading-[0.8] text-center text-[clamp(2.5rem,10vw,8rem)] relative z-0"
          >
            Gana
          </motion.h1>
        </div>

        {/* Role + subhead */}
        <motion.div
          style={{ y: bottomY, opacity: bottomOpacity }}
          className="max-w-6xl mx-auto mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-6 md:gap-16"
        >
          <p className="font-body font-semibold text-text text-lg sm:text-xl leading-tight">
            UI/UX Product Designer &amp; AI Automation Specialist
          </p>
          <p className="font-body text-muted text-sm sm:text-base leading-relaxed">
            I design digital products that are clear, usable, and built for real-world
            constraints. I also build AI automations that remove repetitive work, so
            startups and teams can focus on growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}