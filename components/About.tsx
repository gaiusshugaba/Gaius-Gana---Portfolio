import Image from "next/image";
import { aboutCopy } from "@/data/about";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        
        {/* Left Side (Black Block - Headline) */}
        <div className="relative bg-bg p-8 md:py-24 md:pl-12 md:pr-48 lg:pr-64 flex flex-col justify-center items-center md:items-end text-center md:text-right">
          <Reveal>
            <h2 className="font-display-bold text-text text-4xl sm:text-5xl lg:text-6xl mb-4">
              {aboutCopy.heading}
            </h2>
            <p className="font-body text-muted text-lg sm:text-xl font-medium">
              Design. Automate. Create.
            </p>
          </Reveal>
          
          {/* Mobile Image (stacked after headline) */}
          <div className="md:hidden relative w-[200px] mt-12 rotate-[-4deg]">
             <Image
                src="/about/photo.png"
                alt="Gaius Gana"
                width={800}
                height={800}
                className="w-full h-auto block rounded-[20px] bg-white p-2 shadow-2xl"
              />
          </div>
        </div>

        {/* Right Side (Green Block - Text Write-up) */}
        <div className="relative bg-about p-8 md:py-24 md:pl-48 lg:pl-64 md:pr-12 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5 max-w-md">
              {aboutCopy.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-[#0A0A0A] text-sm sm:text-base leading-relaxed font-medium"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Desktop Image Overlap */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] lg:w-[300px] z-20 pointer-events-none">
        <Reveal delay={0.2}>
          <div className="rotate-[-4deg]">
            <Image
              src="/about/photo.png"
              alt="Gaius Gana"
              width={800}
              height={800}
              className="w-full h-auto block rounded-[24px] bg-white p-2.5 shadow-2xl border border-border-subtle"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}