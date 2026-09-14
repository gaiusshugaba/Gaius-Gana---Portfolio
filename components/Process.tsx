import { processTracks } from "@/data/process";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16">
            My Process
          </h2>
        </Reveal>

        <div className="flex flex-col gap-14 sm:gap-20">
          {processTracks.map((track) => (
            <div key={track.id}>
              {/* Track header */}
              <Reveal>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-8 mb-6 sm:mb-8">
                  <h3 className="font-display-semibold text-text text-xl sm:text-2xl md:text-3xl">
                    {track.label}
                  </h3>
                  <p className="font-body text-muted text-sm sm:text-base md:text-lg sm:text-right">
                    {track.intro}
                  </p>
                </div>
              </Reveal>

              {/* Steps */}
              <div className="flex flex-col">
                {track.steps.map((step, i) => (
                  <Reveal key={step.number} delay={i * 0.06}>
                    <div className="border-t border-border-subtle py-5 sm:py-6 grid grid-cols-[3rem_1fr] sm:grid-cols-[5rem_1fr_1.4fr] gap-x-4 sm:gap-x-8 gap-y-1 sm:gap-y-0 items-baseline">
                      <span className="font-display-semibold text-muted text-sm sm:text-base">
                        {step.number}
                      </span>
                      <span className="font-body font-semibold text-text text-base sm:text-lg">
                        {step.title}
                      </span>
                      <span className="font-body text-muted text-sm sm:text-base leading-relaxed col-span-2 sm:col-span-1">
                        {step.description}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}