import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import type { CaseStudyImage } from "@/lib/types";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

function ImageOrVideo({
  img,
  alt,
  loading = "lazy",
}: {
  img: CaseStudyImage;
  alt: string;
  loading?: "lazy" | "eager";
}) {
  if (img.video) {
    return (
      <video
        src={img.src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="block w-full h-auto"
      />
    );
  }
  return (
    <img
      src={img.src}
      alt={alt}
      loading={loading}
      decoding="async"
      className="block w-full h-auto"
    />
  );
}

function ImageGrid({ images }: { images: CaseStudyImage[] }) {
  return (
    <div className="flex flex-col gap-6">
      {images.map((img, i) => (
        <div key={i}>
          <div className="rounded-2xl overflow-hidden border border-border-subtle">
            <ImageOrVideo img={img} alt={img.caption || `Image ${i + 1}`} />
          </div>
          {img.caption && (
            <div className="font-body text-muted text-sm text-center mt-4">
              {img.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);

  if (!cs) notFound();

  return (
    <main className="bg-bg">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Link
              href="/"
              className="font-body text-muted text-sm hover:text-text transition-colors inline-flex items-center gap-2 mb-10"
            >
              ← Back
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-xs text-muted border border-border-subtle rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display-bold-wide text-text text-4xl sm:text-5xl md:text-6xl leading-[0.95] mb-6 max-w-4xl">
              {cs.title}
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border-subtle pt-8 mt-8">
              <div>
                <div className="font-body text-muted text-xs uppercase tracking-wider mb-2">
                  Role
                </div>
                <div className="font-body text-text text-sm sm:text-base">
                  {cs.role}
                </div>
              </div>
              <div>
                <div className="font-body text-muted text-xs uppercase tracking-wider mb-2">
                  Timeline
                </div>
                <div className="font-body text-text text-sm sm:text-base">
                  {cs.timeline}
                </div>
              </div>
              <div>
                <div className="font-body text-muted text-xs uppercase tracking-wider mb-2">
                  Year
                </div>
                <div className="font-body text-text text-sm sm:text-base">
                  {cs.year}
                </div>
              </div>
              <div>
                <div className="font-body text-muted text-xs uppercase tracking-wider mb-2">
                  Live
                </div>
                {cs.liveUrl ? (
                  <>
                    <a
                      href={cs.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-text text-sm sm:text-base hover:text-accent transition-colors underline underline-offset-4 decoration-border-subtle hover:decoration-accent"
                    >
                      {cs.liveUrlLabel ?? "Visit site"} →
                    </a>
                    {cs.liveUrlNote && (
                      <div className="font-body text-muted text-xs mt-2 leading-relaxed">
                        {cs.liveUrlNote}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="font-body text-muted text-sm sm:text-base">
                    —
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {cs.coverImage && (
            <Reveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-border-subtle mt-12">
                <ImageOrVideo
                  img={cs.coverImage}
                  alt={`${cs.title} cover`}
                  loading="eager"
                />
              </div>
            </Reveal>
          )}

          {cs.overview && (
            <Reveal delay={0.15}>
              <div className="rounded-2xl overflow-hidden border border-border-subtle mt-6">
                <ImageOrVideo
                  img={cs.overview}
                  alt={`${cs.title} overview`}
                  loading="eager"
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Context */}
      <Section>
        <Reveal>
          <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-8">
            {cs.context.heading}
          </h2>
          <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
            {cs.context.body}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border-subtle pt-8">
            {cs.context.meta.map((m) => (
              <div key={m.label}>
                <div className="font-body text-muted text-xs uppercase tracking-wider mb-2">
                  {m.label}
                </div>
                <div className="font-body text-text text-sm sm:text-base">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Problem */}
      <Section>
        <Reveal>
          <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-8">
            {cs.problem.heading}
          </h2>
          <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
            {cs.problem.body}
          </p>

          <div className="border-t border-border-subtle pt-8">
            <h3 className="font-display-semibold text-text text-xl sm:text-2xl mb-6">
              Objectives
            </h3>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {cs.problem.objectives.map((obj, i) => (
                <li
                  key={i}
                  className="font-body text-text text-base sm:text-lg leading-relaxed pl-8 relative"
                >
                  <span className="absolute left-0 text-text font-display-semibold">
                    —
                  </span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {cs.problem.images && cs.problem.images.length > 0 && (
          <Reveal>
            <div className="mt-12">
              <ImageGrid images={cs.problem.images} />
            </div>
          </Reveal>
        )}
      </Section>

      {/* Research */}
      <Section>
        <Reveal>
          <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-8">
            {cs.research.heading}
          </h2>
          <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl">
            {cs.research.body}
          </p>
        </Reveal>

        {cs.research.images && cs.research.images.length > 0 && (
          <Reveal>
            <div className="mt-12">
              <ImageGrid images={cs.research.images} />
            </div>
          </Reveal>
        )}
      </Section>

      {/* Constraints (UX optional) */}
      {cs.constraints && (
        <Section>
          <Reveal>
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-6">
              {cs.constraints.heading}
            </h2>
            {cs.constraints.intro && (
              <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
                {cs.constraints.intro}
              </p>
            )}
          </Reveal>

          <Reveal>
            <ImageGrid images={cs.constraints.images} />
          </Reveal>
        </Section>
      )}

      {/* Before (automation) */}
      {cs.before && (
        <Section>
          <Reveal>
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-8">
              {cs.before.heading}
            </h2>
            <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
              {cs.before.body}
            </p>

            <ul className="flex flex-col gap-4 list-none p-0 m-0 max-w-3xl">
              {cs.before.steps.map((step, i) => (
                <li
                  key={i}
                  className="font-body text-muted text-base sm:text-lg leading-relaxed pl-8 relative line-through decoration-muted/60"
                >
                  <span className="absolute left-0 text-muted font-display-semibold no-underline">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ul>

            {cs.before.timeCost && (
              <div className="mt-10 rounded-2xl border border-accent/40 bg-accent/5 p-6 max-w-3xl">
                <div className="font-body text-muted text-xs uppercase tracking-wider mb-2">
                  Time cost
                </div>
                <div className="font-body text-text text-base sm:text-lg leading-relaxed">
                  {cs.before.timeCost}
                </div>
              </div>
            )}
          </Reveal>
        </Section>
      )}

      {/* Approach */}
      <Section>
        <Reveal>
          <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-6">
            {cs.approach.heading}
          </h2>
          <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl">
            {cs.approach.intro}
          </p>
        </Reveal>

        <div className="flex flex-col gap-20 mt-20">
          {cs.approach.sections.map((s, i) => (
            <Reveal key={i}>
              <div>
                <h3 className="font-display-bold text-text text-2xl sm:text-3xl md:text-4xl text-center mb-4">
                  {s.title}
                </h3>
                <p className="font-body text-muted text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-8">
                  {s.description}
                </p>
                <div className="flex flex-col gap-6">
                  {s.images.map((img, j) => (
                    <div
                      key={j}
                      className="rounded-2xl overflow-hidden border border-border-subtle"
                    >
                      <ImageOrVideo img={img} alt={`${s.title} ${j + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Design (hybrid — optional) */}
      {cs.design && (
        <Section>
          <Reveal>
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-6">
              {cs.design.heading}
            </h2>
            <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
              {cs.design.intro}
            </p>

            {cs.design.principles && cs.design.principles.length > 0 && (
              <ul className="flex flex-col gap-4 list-none p-0 m-0 max-w-3xl mb-16 border-t border-border-subtle pt-8">
                {cs.design.principles.map((principle, i) => (
                  <li
                    key={i}
                    className="font-body text-text text-base sm:text-lg leading-relaxed pl-8 relative"
                  >
                    <span className="absolute left-0 text-text font-display-semibold">
                      —
                    </span>
                    {principle}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>

          <Reveal>
            <ImageGrid images={cs.design.images} />
          </Reveal>
        </Section>
      )}

      {/* Architecture (automation) */}
      {cs.architecture && (
        <Section>
          <Reveal>
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-6">
              {cs.architecture.heading}
            </h2>
            {cs.architecture.intro && (
              <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
                {cs.architecture.intro}
              </p>
            )}
          </Reveal>

          {cs.architecture.images.length > 0 && (
            <Reveal>
              <div className="mb-12">
                <ImageGrid images={cs.architecture.images} />
              </div>
            </Reveal>
          )}

          {cs.architecture.modules && cs.architecture.modules.length > 0 && (
            <div className="flex flex-col">
              {cs.architecture.modules.map((mod, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="border-t border-border-subtle py-6 grid grid-cols-[3rem_1fr] sm:grid-cols-[5rem_1fr_1.4fr] gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-0 items-baseline">
                    <span className="font-display-semibold text-muted text-sm sm:text-base">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body font-semibold text-text text-base sm:text-lg">
                      {mod.title}
                    </span>
                    <span className="font-body text-muted text-sm sm:text-base leading-relaxed col-span-2 sm:col-span-1">
                      {mod.description}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </Section>
      )}

      {/* Key Decisions (automation) */}
      {cs.keyDecisions && (
        <Section>
          <Reveal>
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-12">
              {cs.keyDecisions.heading}
            </h2>
          </Reveal>

          <div className="flex flex-col gap-10 max-w-3xl">
            {cs.keyDecisions.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div>
                  <div className="font-body text-muted text-xs uppercase tracking-wider mb-3">
                    Decision {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display-semibold text-text text-xl sm:text-2xl leading-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted text-base sm:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Error Handling (automation) */}
      {cs.errorHandling && (
        <Section>
          <Reveal>
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-8">
              {cs.errorHandling.heading}
            </h2>
            <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
              {cs.errorHandling.body}
            </p>

            {cs.errorHandling.items && cs.errorHandling.items.length > 0 && (
              <ul className="flex flex-col gap-4 list-none p-0 m-0 max-w-3xl">
                {cs.errorHandling.items.map((item, i) => (
                  <li
                    key={i}
                    className="font-body text-text text-base sm:text-lg leading-relaxed pl-8 relative"
                  >
                    <span className="absolute left-0 text-text font-display-semibold">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>

          {cs.errorHandling.images && cs.errorHandling.images.length > 0 && (
            <Reveal>
              <div className="mt-12">
                <ImageGrid images={cs.errorHandling.images} />
              </div>
            </Reveal>
          )}
        </Section>
      )}

      {/* Design System (UX optional) */}
      {cs.designSystem && (
        <Section>
          <Reveal>
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-6">
              {cs.designSystem.heading}
            </h2>
            <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
              {cs.designSystem.paletteNote}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
              {cs.designSystem.palette.map((c) => (
                <div key={c.name}>
                  <div
                    className="rounded-2xl h-32 sm:h-40 mb-4 border border-border-subtle"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="font-body text-text text-base font-semibold">
                    {c.name}
                  </div>
                  <div className="font-body text-muted text-sm">{c.hex}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border-subtle pt-10 items-center">
              <div>
                <div className="font-body text-muted text-xs uppercase tracking-wider mb-3">
                  Typography
                </div>
                <div className="font-body text-text text-3xl sm:text-4xl md:text-5xl mb-2">
                  {cs.designSystem.typography.fontName}
                </div>
                <div className="font-body text-muted text-sm">
                  {cs.designSystem.typography.weights.join(" · ")}
                </div>
              </div>
              <div className="flex justify-end">
                <div className="font-body text-text leading-none text-[8rem] sm:text-[10rem] md:text-[12rem]">
                  Aa
                </div>
              </div>
            </div>
          </Reveal>

          {cs.designSystem.images && cs.designSystem.images.length > 0 && (
            <Reveal>
              <div className="mt-16">
                <ImageGrid images={cs.designSystem.images} />
              </div>
            </Reveal>
          )}
        </Section>
      )}

      {/* Wireframes (UX optional) */}
      {cs.wireframes && (
        <Section>
          <Reveal>
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-12">
              {cs.wireframes.heading}
            </h2>
          </Reveal>
          <Reveal>
            <ImageGrid images={cs.wireframes.images} />
          </Reveal>
        </Section>
      )}

      {/* Final UI (Qurexa style) */}
      {cs.finalUI && (
        <Section>
          <Reveal>
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-12">
              {cs.finalUI.heading}
            </h2>
          </Reveal>
          <Reveal>
            <ImageGrid images={cs.finalUI.images} />
          </Reveal>
        </Section>
      )}

      {/* Prototype (FunLearn/Trip/AI Support style) */}
      {cs.prototype && (
        <Section>
          <Reveal>
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-6">
              {cs.prototype.heading}
            </h2>
            {cs.prototype.intro && (
              <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
                {cs.prototype.intro}
              </p>
            )}
          </Reveal>
          <Reveal>
            <ImageGrid images={cs.prototype.images} />
          </Reveal>
        </Section>
      )}

      {/* Testing (UX optional) */}
      {cs.testing && (
        <Section>
          <Reveal>
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-8">
              {cs.testing.heading}
            </h2>
            <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
              {cs.testing.body}
            </p>

            <div className="border-t border-border-subtle pt-8">
              <h3 className="font-display-semibold text-text text-xl sm:text-2xl mb-6">
                Key Insights
              </h3>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                {cs.testing.insights.map((insight, i) => (
                  <li
                    key={i}
                    className="font-body text-text text-base sm:text-lg leading-relaxed pl-8 relative"
                  >
                    <span className="absolute left-0 text-text font-display-semibold">
                      —
                    </span>
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {cs.testing.images && cs.testing.images.length > 0 && (
            <Reveal>
              <div className="mt-12">
                <ImageGrid images={cs.testing.images} />
              </div>
            </Reveal>
          )}
        </Section>
      )}

      {/* Results (automation) */}
      {cs.results && (
        <Section>
          <Reveal>
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-8">
              {cs.results.heading}
            </h2>

            {cs.results.metrics && cs.results.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
                {cs.results.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="border-t border-border-subtle pt-4"
                  >
                    <div className="font-display-bold text-text text-3xl sm:text-4xl mb-2">
                      {m.value}
                    </div>
                    <div className="font-body text-muted text-xs uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl">
              {cs.results.body}
            </p>
          </Reveal>

          {cs.results.images && cs.results.images.length > 0 && (
            <Reveal>
              <div className="mt-12">
                <ImageGrid images={cs.results.images} />
              </div>
            </Reveal>
          )}
        </Section>
      )}

      {/* Outcome */}
      <Section>
        <Reveal>
          <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-8">
            {cs.outcome.heading}
          </h2>
          <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            {cs.outcome.body}
          </p>
          {cs.liveUrl && (
            <div className="flex flex-col gap-3 items-start">
              <a
                href={cs.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-semibold bg-accent text-on-accent rounded-full px-5 py-3 text-sm sm:text-base hover:brightness-110 transition-all"
              >
                {cs.liveUrlLabel ?? "Visit live site"} →
              </a>
              {cs.liveUrlNote && (
                <div className="font-body text-muted text-sm">
                  {cs.liveUrlNote}
                </div>
              )}
            </div>
          )}
        </Reveal>
      </Section>

      {/* Reflection (optional) */}
      {cs.reflection && (
        <Section>
          <Reveal>
            <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-8">
              {cs.reflection.heading}
            </h2>
            <div className="flex flex-col gap-6 max-w-3xl">
              {cs.reflection.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-muted text-base sm:text-lg leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </Section>
      )}

      {/* Back to home */}
      <Section>
        <Reveal>
          <div className="flex justify-center">
            <Link
              href="/"
              className="font-body text-text text-base sm:text-lg hover:text-accent transition-colors inline-flex items-center gap-2"
            >
              ← Back to all work
            </Link>
          </div>
        </Reveal>
      </Section>

      <FinalCTA />
      <Footer />
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}