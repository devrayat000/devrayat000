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
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my passion for building clean,
            efficient, and scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 h-full flex flex-col group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-secondary/50 font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
