import {
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
  FaXTwitter,
} from "react-icons/fa6";
import { ArrowRight, Mail } from "lucide-react";
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
    <section className="relative pt-20 sm:pt-24 md:pt-28 pb-10 px-4 sm:px-6 bg-[#19191A]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
            <div className="inline-flex flex-col items-stretch w-fit">
              <h2 className="font-display-bold text-[#FAFAFA] text-5xl sm:text-6xl md:text-7xl mb-4 whitespace-nowrap">
                Lets Talk
              </h2>

              <a
                href={`mailto:${footer.email}`}
                className="group inline-flex items-center justify-center gap-3 font-body font-semibold text-[#0A0A0A] bg-accent rounded-full px-6 py-3 sm:px-7 sm:py-4 text-base sm:text-lg hover:bg-[#FAFAFA] active:bg-[#FAFAFA] transition-colors duration-300"
              >
                <span>{footer.email}</span>
                <span aria-hidden="true" className="relative w-5 h-5 shrink-0 overflow-hidden">
                  <ArrowRight className="absolute inset-0 w-5 h-5 transition-all duration-300 ease-out group-hover:translate-x-6 group-hover:opacity-0 group-active:translate-x-6 group-active:opacity-0" />
                  <Mail className="absolute inset-0 w-5 h-5 transition-all duration-300 ease-out -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-active:translate-x-0 group-active:opacity-100" />
                </span>
              </a>
            </div>

            <div className="md:pt-0 text-left md:text-right">
              <p className="font-body text-[#A3A3A3] text-base sm:text-lg leading-relaxed mb-4">
                {footer.tagline}
              </p>

              <ul className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8 md:justify-end list-none p-0 m-0">
                {socials.map((s) => {
                  const Icon = iconMap[s.label];
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Gaius Gana on ${s.label} (opens in a new tab)`}
                        className="inline-flex items-center gap-2 font-body text-[#A3A3A3] text-sm sm:text-base hover:text-[#FAFAFA] active:text-[#FAFAFA] transition-colors"
                      >
                        {Icon && <Icon aria-hidden="true" className="w-4 h-4" />}
                        <span>{s.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}