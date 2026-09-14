import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Process from "@/components/Process";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Works />
      <Process />
      <About />
    </main>
  );
}