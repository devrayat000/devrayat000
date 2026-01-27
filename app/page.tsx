import { Introduction } from "@/components/introduction";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background selection:bg-primary/20">
      <Introduction />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
    </main>
  );
}
