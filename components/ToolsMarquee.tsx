import type { ComponentType } from "react";
import {
  SiFigma,
  SiFramer,
  SiGooglegemini,
  SiAnthropic,
  SiAirtable,
  SiMake,
  SiZapier,
  SiN8N,
  SiSupabase,
} from "react-icons/si";
import { tools } from "@/data/socials";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Figma: SiFigma,
  Framer: SiFramer,
  Gemini: SiGooglegemini,
  Claude: SiAnthropic,
  Airtable: SiAirtable,
  Make: SiMake,
  Zapier: SiZapier,
  n8n: SiN8N,
  Supabase: SiSupabase,
};

export default function ToolsMarquee() {
  return (
    <section className="relative py-10 sm:py-12 border-y border-border-subtle bg-bg overflow-hidden">
      <p className="text-center font-body text-muted text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-6">
        Tools I Use
      </p>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-bg to-transparent z-10" />

        <div className="flex gap-8 sm:gap-12 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...tools, ...tools, ...tools].map((tool, i) => {
            const Icon = iconMap[tool];
            return (
              <span
                key={`${tool}-${i}`}
                aria-hidden={i >= tools.length}
                className="inline-flex items-center gap-2.5 text-muted hover:text-text transition-colors"
              >
                {Icon && <Icon className="w-5 h-5 shrink-0" />}
                <span className="font-body text-sm sm:text-base whitespace-nowrap">
                  {tool}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}