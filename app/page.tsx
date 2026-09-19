import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import ToolsMarquee from "@/components/ToolsMarquee";
import ClientFeedback from "@/components/ClientFeedback";
import Process from "@/components/Process";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <a
        href="#works"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-[#0A0A0A] focus:font-body focus:font-semibold focus:rounded-full focus:px-4 focus:py-2"
      >
        Skip to work
      </a>
      <Nav />
      <Hero />
      <Works />
      <ToolsMarquee />
      <ClientFeedback />
      <Process />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}