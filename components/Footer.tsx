import { footer } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="relative pb-10 px-4 sm:px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-border-subtle pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="font-display-bold text-text text-sm sm:text-base tracking-wider uppercase">
            Gaius Gana
          </span>
          <span className="font-body text-muted text-xs sm:text-sm">
            {footer.credit}
          </span>
          <span className="font-body text-muted text-xs sm:text-sm">
            {footer.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}