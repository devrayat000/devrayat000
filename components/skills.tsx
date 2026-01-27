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
      "C/C++",
      "C#",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Redux",
      "Svelte",
      "Tailwind CSS",
      "Framer Motion",
      "React-Query",
      "Zustand",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "Hono",
      "FastAPI",
      "Django",
      ".NET Core",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "RAG",
      "LangChain",
      "Pinecone",
      "OpenAI API",
      "Tesseract OCR",
      "TensorFlow",
      "Pandas",
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Cloud Firestore",
      "Pinecone (Vector DB)",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Traefik",
      "AWS",
      "GCP",
      "GitHub Actions",
      "RabbitMQ",
      "Celery",
      "FFmpeg",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and tools I use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
