import { FaLinkedinIn, FaInstagram, FaBehance, FaXTwitter } from "react-icons/fa6";
import { socials, footer } from "@/data/socials";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  Behance: FaBehance,
  "Twitter/X": FaXTwitter,
};

export default function FinalCTA() {
  return (
    <section className="relative pt-20 sm:pt-24 md:pt-28 pb-10 px-4 sm:px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
            <div className="inline-flex flex-col items-stretch w-fit">
              <h2 className="font-display-bold text-text text-5xl sm:text-6xl md:text-7xl mb-8 sm:mb-10 whitespace-nowrap">
                Lets Talk
              </h2>

              <a
                href={`mailto:${footer.email}`}
                className="inline-flex items-center justify-center gap-3 font-body font-semibold text-bg bg-accent rounded-full px-6 py-3 sm:px-7 sm:py-4 text-base sm:text-lg hover:bg-text transition-all"
              >
                {footer.email} →
              </a>
            </div>

            <div className="md:pt-0 text-left md:text-right">
              <p className="font-body text-muted text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                {footer.tagline}
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8 md:justify-end">
                {socials.map((s) => {
                  const Icon = iconMap[s.label];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-muted text-sm sm:text-base hover:text-text transition-colors"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}