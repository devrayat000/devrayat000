"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Briefcase, User, Layers } from "lucide-react";
import zmol from "@/assets/projects/zmol.jpeg";
import cookit from "@/assets/projects/cookit.jpeg";
import focusStream from "@/assets/projects/focus-stream.jpeg";
import scabieSense from "@/assets/projects/scabiesense.jpeg";
import matrahin from "@/assets/projects/matrahin.jpeg";
import rag from "@/assets/projects/rag.jpeg";
import aivible from "@/assets/projects/aivible.jpeg";
import topperonAi from "@/assets/projects/doubts-ai.jpeg";

export type Category = "professional" | "personal";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: Category;
  /** Optional trailer. Plays on hover; `image` acts as the thumbnail/poster. */
  video?: string;
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "TrueNews",
    description:
      "AI-powered news verification and aggregation backend platform engineered for real-time media analysis, source credibility scoring, and automated fact-checking.",
    tags: ["TypeScript", "Node.js", "AI Pipeline", "Motia", "Vite"],
    category: "professional",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop",
    link: "https://truenews.wasmer.app/",
  },
  {
    title: "ScabieSense",
    description:
      "AI-driven mobile health application for early detection and clinical assessment of scabies skin conditions, developed with custom deep learning models for BUET IAT.",
    tags: ["React Native", "Expo", "TypeScript", "Deep Learning", "Mobile App"],
    category: "professional",
    image: scabieSense.src,
    github: "https://github.com/devrayat000/scabies-net",
  },
  {
    title: "Rover Camera Feed",
    description:
      "High-performance multi-camera streaming system with low-latency WebSocket transmission and OpenCV video processing for robotics teleoperation.",
    tags: ["Python", "OpenCV", "Flask", "WebSockets", "Robotics"],
    category: "professional",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
    github: "https://github.com/devrayat000/rover_camera_feed",
  },
  {
    title: "TopperOn Doubts AI",
    description:
      "AI-powered student doubt solver with a full RAG pipeline, reducing query latency by 35% and improving context relevance.",
    tags: ["FastAPI", "Next.js", "RAG", "Pinecone", "Redis"],
    category: "professional",
    image: topperonAi.src,
    link: "https://topperon.com",
  },
  {
    title: "Taalaash Search Engine",
    description:
      "Bangla academic search engine indexing 20,000+ pages with OCR + ML. Custom-tuned Tesseract models achieving 98% accuracy.",
    tags: ["Next.js", "Python", "OCR", "Algolia"],
    category: "professional",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2667&auto=format&fit=crop",
  },
  {
    title: "Ronon EdTech Platform",
    description:
      "Real-time doubt-solving platform scaling to 80,000+ users. Integrated LaTeX rendering and optimized Django queries.",
    tags: ["Django", "React", "PostgreSQL", "Real-time"],
    category: "professional",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Video Transcoding Pipeline",
    description:
      "Scalable video processing system using Go and Redis Streams. Handles failure modes and distributed processing with FFmpeg.",
    tags: ["Go", "Redis Streams", "FFmpeg", "React"],
    category: "personal",
    image:
      "https://images.unsplash.com/photo-1547027072-332eed9f9998?q=80&w=2670&auto=format&fit=crop",
    github: "https://github.com/devrayat000/video-processing",
  },
  {
    title: "AIVIBLE",
    description:
      "An AI-visibility platform for Japan travel — pairing an AI itinerary planner (chat with Shirube) with tools that help local businesses get discovered by AI chatbots like ChatGPT and Gemini.",
    tags: ["Next.js", "AI", "LLM", "SaaS"],
    category: "professional",
    image: aivible.src,
    link: "https://ai-audit-seven.vercel.app/",
  },
  {
    title: "Matrahin",
    description:
      "Interactive physics and mathematical calculator web platform offering dynamic formula visualizers and real-time scientific computation tools.",
    tags: ["React", "TypeScript", "Vite", "GraphQL", "Tailwind CSS"],
    category: "professional",
    image: matrahin.src,
    link: "https://matrahin.com/",
    github: "https://github.com/devrayat000/matrahin",
  },
  {
    title: "World Countries Explorer",
    description:
      "Interactive global country data portal with region filtering, live search autocomplete, detailed country specs, and dark mode theme switching.",
    tags: ["SvelteKit", "TypeScript", "Tailwind CSS", "REST API"],
    category: "personal",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2670&auto=format&fit=crop",
    link: "https://world.rayat.dev/",
    github: "https://github.com/devrayat000/rest-countries",
  },
  {
    title: "YTS Movies",
    description:
      "Cross-platform mobile application to discover, search, and explore high-definition movies with ratings and torrent metadata powered by the YTS API.",
    tags: ["Flutter", "Dart", "REST API", "Mobile App"],
    category: "personal",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
    github: "https://github.com/devrayat000/yts-movies",
  },
  {
    title: "COOKit",
    description:
      "A meal-discovery app to browse and search thousands of recipes by cuisine and category, each linked to step-by-step cooking videos.",
    tags: ["SvelteKit", "TypeScript", "Tailwind CSS", "TheMealDB"],
    category: "personal",
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
    category: "personal",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2664&auto=format&fit=crop",
    link: "https://frontendaily.rayat.dev/",
    github: "https://github.com/devrayat000/frontenddaily",
  },
  {
    title: "TextBook RAG",
    description:
      "An AI assistant using a Retrieval-Augmented Generation pipeline to answer educations questions grounded in trusted textbook sources.",
    tags: ["Next.js", "RAG", "LLM", "AI"],
    category: "professional",
    image: rag.src,
    link: "https://doubts.rayat.dev/",
    github: "https://github.com/devrayat000/medbot",
  },
  {
    title: "Zmol",
    description:
      "A fast, free URL shortener that turns long links into concise, shareable ones with built-in click tracking and analytics.",
    tags: ["Next.js 15", "TypeScript", "Analytics"],
    category: "personal",
    image: zmol.src,
    link: "https://zmol.rayat.dev/",
    github: "https://github.com/devrayat000/zmol",
  },
  {
    title: "SnapShelf",
    description:
      "A lightweight, always-on-top clipboard manager for Windows that keeps your recent snippets a keystroke away. Published on the Microsoft Store.",
    tags: ["Slint", "Rust", "Windows"],
    category: "personal",
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
    category: "personal",
    image: focusStream.src,
    link: "https://apps.microsoft.com/store/detail/9P9VF2T58XGX?cid=DevShareMCLPCS",
  },
];

const filterOptions: {
  id: "professional" | "personal" | "all";
  label: string;
  icon: React.ElementType;
}[] = [
  { id: "professional", label: "Professional", icon: Briefcase },
  { id: "personal", label: "Personal", icon: User },
  { id: "all", label: "All Projects", icon: Layers },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<
    "professional" | "personal" | "all"
  >("professional");

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "all" || project.category === activeCategory,
  );

  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              A selection of projects where I&apos;ve architected scalable
              solutions and solved complex engineering problems.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex p-1.5 bg-muted/60 backdrop-blur-md rounded-full border border-border/50 self-start md:self-auto">
            {filterOptions.map((option) => {
              const Icon = option.icon;
              const isActive = activeCategory === option.id;
              const count =
                option.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === option.id).length;

              return (
                <button
                  key={option.id}
                  onClick={() => setActiveCategory(option.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full shadow-md"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {option.label}
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-mono transition-colors ${
                        isActive
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-background/50 text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
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
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group flex flex-col h-full"
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

      <div className="space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

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
