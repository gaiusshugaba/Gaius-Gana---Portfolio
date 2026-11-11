import { Quote } from "lucide-react";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-bg overflow-hidden">
      {/* Background dot pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <Quote size={32} className="text-accent mb-6 opacity-80" />
            
            <blockquote className="font-body text-text text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
              "Working with Gaius on Qurexa has been a smooth and professional journey. He is diligent, hardworking, and very respectful. He conducts himself professionally and sticks to deadlines. He has never disappointed once, and he made corrections quickly. He has taken a complex brief — user types, sensitive healthcare data, real operational constraints — and turned it into a design that felt clear and easy to use. He communicates effectively and he has a positive team spirit. He delivered a design system for Qurexa Ltd UI for both frontend and backend, and he also handled the content production. He is multi-versatile and he is highly recommendable."
            </blockquote>
            
            <div className="flex flex-col items-center gap-1">
              <span className="font-display-semibold text-text text-base sm:text-lg">
                Adedotun David Seremekun
              </span>
              <span className="font-body text-muted text-xs sm:text-sm uppercase tracking-wider">
                Founder, Qurexa Ltd
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}