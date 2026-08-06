"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Go",
      "Rust",
      "Dart",
      "C/C++",
      "C#",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      "React",
      "Next.js",
      "Svelte",
      "SvelteKit",
      "React Native",
      "Expo",
      "Flutter",
      "Tauri",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "Zustand",
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "FastAPI",
      "Django",
      "Hono",
      "Motia",
      "WebSockets",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "RAG Pipelines",
      "LangChain",
      "Pinecone Vector DB",
      "Llama 3.2 (On-Device LLM)",
      "OpenCV",
      "Tesseract OCR",
      "TensorFlow",
      "Deep Learning",
      "Algolia",
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis / Redis Streams",
      "Cloud Firestore",
      "Prisma ORM",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Traefik",
      "FFmpeg",
      "AWS",
      "GCP",
      "GitHub Actions",
      "RabbitMQ",
      "Celery",
      "Git / GitHub",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/10">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:pl-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold border-b border-border/50 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1.5 bg-background border border-border/50 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
