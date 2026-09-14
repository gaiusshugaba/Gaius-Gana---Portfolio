import { footer } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="relative pb-10 px-4 sm:px-6 bg-[#19191A]">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-[#2E2E30] pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="font-display-bold text-[#FAFAFA] text-sm sm:text-base tracking-wider uppercase">
            Gaius Gana
          </span>
          <span className="font-body text-[#A3A3A3] text-xs sm:text-sm">
            {footer.credit}
          </span>
          <span className="font-body text-[#A3A3A3] text-xs sm:text-sm">
            {footer.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}