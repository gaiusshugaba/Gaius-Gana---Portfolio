import { testimonial } from "@/data/testimonial";
import Reveal from "./Reveal";

export default function ClientFeedback() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="font-body text-muted text-xs uppercase tracking-wider mb-8">
            {testimonial.heading}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-l-2 border-accent pl-6 sm:pl-8">
            <div className="flex flex-col gap-5 mb-6">
              {testimonial.quote.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-muted text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="font-body text-text text-sm sm:text-base">
              <span className="font-semibold">{testimonial.author}</span>
              <span className="text-muted"> — {testimonial.role}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}