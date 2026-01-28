import { Introduction } from "@/components/introduction";
import { AboutDetailed } from "@/components/about-detailed";
import { Experience } from "@/components/experience";
import { Highlights } from "@/components/highlights";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background selection:bg-primary/20">
      <Introduction />
      <AboutDetailed />
      <Experience />
      <Highlights />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}
