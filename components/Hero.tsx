"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pillY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const pillOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const nameY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  const bottomY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const bottomOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const pillStyle = reduce ? undefined : { y: pillY, opacity: pillOpacity };
  const nameStyle = reduce ? undefined : { y: nameY, opacity: nameOpacity };
  const portraitStyle = reduce ? undefined : { y: portraitY };
  const bottomStyle = reduce ? undefined : { y: bottomY, opacity: bottomOpacity };

  return (
    <section ref={ref} className="relative pt-24 pb-16 px-6 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        <motion.div style={pillStyle} className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-body text-muted text-xs sm:text-sm">
              Available for design and automation projects
            </span>
          </div>
        </motion.div>

        <h1 className="flex flex-col items-center m-0">
          <motion.span
            style={nameStyle}
            className="font-display-bold-wide text-text uppercase leading-[0.8] text-center text-[clamp(2.5rem,9vw,7rem)] relative z-0"
          >
            Gaius
          </motion.span>

          <motion.img
            style={portraitStyle}
            src="/hero/portrait.png"
            alt=""
            aria-hidden="true"
            className="block w-[140px] sm:w-[180px] md:w-[220px] h-auto relative z-10 -mt-[3vw] sm:-mt-[4vw]"
          />

          <motion.span
            style={nameStyle}
            className="font-display-bold-wide text-text uppercase leading-[0.8] text-center text-[clamp(2.5rem,9vw,7rem)] relative z-0"
          >
            Gana
          </motion.span>
        </h1>

        <motion.div
          style={bottomStyle}
          className="max-w-6xl mx-auto mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16"
        >
          <p className="font-body font-semibold text-text text-lg sm:text-xl md:text-2xl leading-tight">
            UI/UX Product Designer &amp; AI Automation Specialist
          </p>
          <p className="font-body text-muted text-sm sm:text-base md:text-lg leading-relaxed">
            I design digital products that are clear, usable, and built for real-world
            constraints. I also build AI automations that remove repetitive work, so
            startups and teams can focus on growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}