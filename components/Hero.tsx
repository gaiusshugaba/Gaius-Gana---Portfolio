export default function Hero() {
  return (
    <section className="relative pt-24 pb-24 px-6 overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        {/* Availability pill */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-body text-muted text-sm">
              Available for design and automation projects
            </span>
          </div>
        </div>

        {/* Name + portrait block */}
        <div className="flex flex-col items-center">
          <h1 className="font-display-bold-wide text-text uppercase leading-[0.8] text-center text-[clamp(3rem,10vw,8rem)] relative z-0">
            Gaius
          </h1>

          <img
            src="/hero/portrait.png"
            alt="Gaius Gana"
            className="block w-[180px] sm:w-[240px] h-auto relative z-10 -mt-[3vw] sm:-mt-[4vw]"
          />

          <h1 className="font-display-bold-wide text-text uppercase leading-[0.8] text-center text-[clamp(3rem,10vw,8rem)] relative z-0">
            Gana
          </h1>
        </div>

        {/* Role + subhead */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-8 md:gap-16">
          <p className="font-body font-semibold text-text text-xl leading-tight">
            UI/UX Product Designer &amp; AI Automation Specialist
          </p>
          <p className="font-body text-muted text-base leading-relaxed">
            I design digital products that are clear, usable, and built for real-world
            constraints. I also build AI automations that remove repetitive work, so
            startups and teams can focus on growth.
          </p>
        </div>
      </div>
    </section>
  );
}