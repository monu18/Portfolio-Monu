import Navbar from "@/components/Layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import ExtraContent from "@/components/sections/ExtraContent";
import SystemDesign from "@/components/sections/SystemDesign";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <SystemDesign />
      <TechStack />
      <ExtraContent />
      <Contact />
    </main>
  );
}
