import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Achievements } from "@/components/achievements";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
    </main>
  );
}
