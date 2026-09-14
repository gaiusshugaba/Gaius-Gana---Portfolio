import Image from "next/image";
import { aboutCopy } from "@/data/about";
import Reveal from "./Reveal";

function renderWithBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} style={{ fontWeight: 500 }} className="text-bg">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function About() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 bg-about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <div className="flex justify-center md:justify-start">
              <div
                className="relative w-[240px] sm:w-[300px] md:w-full max-w-[380px] bg-white rounded-[32px] p-3 shadow-2xl"
                style={{ transform: "rotate(-4deg)" }}
              >
                <Image
                  src="/about/photo.png"
                  alt="Gaius Gana"
                  width={800}
                  height={800}
                  className="w-full h-auto block rounded-[20px]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h2 className="font-display-bold text-bg text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">
                {aboutCopy.heading}
              </h2>

              <div className="flex flex-col gap-4 sm:gap-5">
                {aboutCopy.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-body text-bg text-sm sm:text-base md:text-lg leading-relaxed"
                  >
                    {renderWithBold(p)}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}