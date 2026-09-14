import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import ToolsMarquee from "@/components/ToolsMarquee";
import Process from "@/components/Process";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Works />
      <ToolsMarquee />
      <Process />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}