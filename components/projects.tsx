"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "TopperOn Doubts AI",
    description:
      "AI-powered student doubt solver with a full RAG pipeline, reducing query latency by 35% and improving context relevance.",
    tags: ["FastAPI", "Next.js", "RAG", "Pinecone", "Redis"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop",
    link: "#",
    github: "#",
  },
  {
    title: "Taalaash Search Engine",
    description:
      "Bangla academic search engine indexing 20,000+ pages with OCR + ML. Custom-tuned Tesseract models achieving 98% accuracy.",
    tags: ["Next.js", "Python", "OCR", "Algolia"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2667&auto=format&fit=crop",
    link: "#",
    github: "#",
  },
  {
    title: "Ronon EdTech Platform",
    description:
      "Real-time doubt-solving platform scaling to 80,000+ users. Integrated LaTeX rendering and optimized Django queries.",
    tags: ["Django", "React", "PostgreSQL", "Real-time"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    github: "#",
  },
  {
    title: "Video Transcoding Pipeline",
    description:
      "Scalable video processing system using Go and Redis Streams. Handles failure modes and distributed processing with FFmpeg.",
    tags: ["Go", "Redis Streams", "FFmpeg", "React"],
    image:
      "https://images.unsplash.com/photo-1547027072-332eed9f9998?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            A selection of projects where I've architected scalable solutions
            and solved complex engineering problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9] mb-6 border border-border/50 bg-muted">
                <div className="absolute inset-0 z-10 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <Button variant="default" className="rounded-full" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Visit
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full bg-background/20 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </Button>
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground/80 border border-border px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
