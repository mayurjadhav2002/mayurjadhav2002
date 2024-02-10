import About from "@/components/main/About/About";
import Hero from "@/components/main/Hero";
import Techstack from "@/components/main/Techstack/Techstack";
import Projects from '@/components/main/Projects/Projects'
import Certification from "@/components/main/Certification/Certification";
import Work from "@/components/main/Work/Work";
import Contact from "@/components/main/Contact/Contact";
export default function page() {
  return (
    <main>
      <Hero />
      <About/>
      <Techstack/>
      <Projects/>
      <Certification/>
      <Work/>
      <Contact/>
    </main>
  );
}
