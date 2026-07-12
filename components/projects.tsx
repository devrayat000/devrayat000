"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import zmol from "@/assets/projects/zmol.jpeg";
import cookit from "@/assets/projects/cookit.jpeg";
import focusStream from "@/assets/projects/focus-stream.jpeg";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  /** Optional trailer. Plays on hover; `image` acts as the thumbnail/poster. */
  video?: string;
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "COOKit",
    description:
      "A meal-discovery app to browse and search thousands of recipes by cuisine and category, each linked to step-by-step cooking videos.",
    tags: ["SvelteKit", "TypeScript", "Tailwind CSS", "TheMealDB"],
    image: cookit.src,
    link: "https://cookit.rayat.dev/",
    github:
      "https://github.com/devrayat000/portfolio-projects/tree/master/apps/cookit",
  },
  {
    title: "Frontend Daily",
    description:
      "A curated platform of frontend design inspiration and development resources, with filtering across frameworks like React, Next.js, Vue and GraphQL.",
    tags: ["Next.js", "TypeScript", "GraphQL", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2664&auto=format&fit=crop",
    link: "https://frontendaily.rayat.dev/",
    github: "https://github.com/devrayat000/frontenddaily",
  },
  {
    title: "Medical RAG Chat",
    description:
      "An AI medical assistant using a Retrieval-Augmented Generation pipeline to answer health questions grounded in trusted medical sources.",
    tags: ["Next.js", "RAG", "LLM", "AI"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
    link: "https://medbot.rayat.dev/",
    github: "https://github.com/devrayat000/medbot",
  },
  {
    title: "Zmol",
    description:
      "A fast, free URL shortener that turns long links into concise, shareable ones with built-in click tracking and analytics.",
    tags: ["Next.js 15", "TypeScript", "Analytics"],
    image: zmol.src,
    link: "https://zmol.rayat.dev/",
    github: "https://github.com/devrayat000/zmol",
  },
  {
    title: "TopperOn Doubts AI",
    description:
      "AI-powered student doubt solver with a full RAG pipeline, reducing query latency by 35% and improving context relevance.",
    tags: ["FastAPI", "Next.js", "RAG", "Pinecone", "Redis"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop",
    link: "https://topperon.com",
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
    github: "https://github.com/devrayat000/video-processing",
  },
  {
    title: "AIVIBLE",
    description:
      "An AI-visibility platform for Japan travel — pairing an AI itinerary planner (chat with Shirube) with tools that help local businesses get discovered by AI chatbots like ChatGPT and Gemini.",
    tags: ["Next.js", "AI", "LLM", "SaaS"],
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2670&auto=format&fit=crop",
    link: "https://aivible.tokyo/",
  },
  {
    title: "SnapShelf",
    description:
      "A lightweight, always-on-top clipboard manager for Windows that keeps your recent snippets a keystroke away. Published on the Microsoft Store.",
    tags: ["Slint", "Rust", "Windows"],
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2670&auto=format&fit=crop",
    link: "https://apps.microsoft.com/store/detail/9N0CW4WQK8B1?cid=DevShareMCLPCS",
    github: "https://github.com/devrayat000/quick-dock",
  },
  {
    title: "Focus Stream",
    description:
      "A local-first Windows time tracker that turns your activity into a private, AI-written focus journal — powered by on-device Llama 3.2, with dashboards, weekly reports and a distraction-blocking Focus Mode.",
    tags: ["Tauri", "Rust", "React", "Llama 3.2"],
    image: focusStream.src,
    link: "https://apps.microsoft.com/store/detail/9P9VF2T58XGX?cid=DevShareMCLPCS",
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
            A selection of projects where I&apos;ve architected scalable
            solutions and solved complex engineering problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const { link, github, video, image } = project;
  const hasLink = Boolean(link) && link !== "#";
  const hasCode = Boolean(github) && github !== "#";

  // With no image, seek to an early frame so the video's own frame renders as
  // the thumbnail instead of a blank/black poster.
  const videoSrc = video && !image ? `${video}#t=0.1` : video;

  const handleMouseEnter = () => {
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-3/2 mb-6 border border-border/50 bg-muted">
        {(hasLink || hasCode) && (
          <div className="absolute inset-0 z-10 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
            {hasLink && (
              <Button variant="default" className="rounded-full" asChild>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> Visit
                </a>
              </Button>
            )}
            {hasCode && (
              <Button
                variant="outline"
                className="rounded-full bg-background/20 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              </Button>
            )}
          </div>
        )}

        {video ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={image}
            muted
            loop
            playsInline
            preload="metadata"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
        )}
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
  );
}
