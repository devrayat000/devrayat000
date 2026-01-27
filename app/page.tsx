import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Achievements } from "@/components/achievements";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
    </main>
  );
}
