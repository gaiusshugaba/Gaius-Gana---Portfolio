import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
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
                  <a
                    href={cs.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-text text-sm sm:text-base hover:text-accent transition-colors underline underline-offset-4 decoration-border-subtle hover:decoration-accent"
                  >
                    Visit site →
                  </a>
                ) : (
                  <div className="font-body text-muted text-sm sm:text-base">
                    —
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-border-subtle mt-12">
              <img
                src={cs.coverImage.src}
                alt={`${cs.title} cover`}
                decoding="async"
                className="block w-full h-auto"
              />
            </div>
          </Reveal>
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
      </Section>

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
                      <img
                        src={img.src}
                        alt={`${s.title} ${j + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="block w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Design System */}
      <Section>
        <Reveal>
          <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-6">
            {cs.designSystem.heading}
          </h2>
          <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
            {cs.designSystem.paletteNote}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {cs.designSystem.palette.map((c) => (
              <div key={c.name}>
                <div
                  className="rounded-2xl h-40 mb-4"
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
      </Section>

      {/* Final UI */}
      <Section>
        <Reveal>
          <h2 className="font-display-bold text-text text-3xl sm:text-4xl md:text-5xl mb-12">
            {cs.finalUI.heading}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-12">
          {cs.finalUI.images.map((img, i) => (
            <Reveal key={i}>
              <div>
                <div className="rounded-2xl overflow-hidden border border-border-subtle">
                  <img
                    src={img.src}
                    alt={img.caption || `Screen ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-auto"
                  />
                </div>
                {img.caption && (
                  <div className="font-body text-muted text-sm text-center mt-4">
                    {img.caption}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

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
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-semibold bg-accent text-on-accent rounded-full px-5 py-3 text-sm sm:text-base hover:brightness-110 transition-all"
            >
              Visit live site →
            </a>
          )}
        </Reveal>
      </Section>

      {/* Reflection */}
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