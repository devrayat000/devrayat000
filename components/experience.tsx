"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experienceList = [
  {
    role: "Software Engineer - L1 (Part-time)",
    company: "RubizCode IT",
    date: "May 2025 – Sept 2025",
    description:
      "Leading development of scalable Ed-Tech and AI-integrated software. Architected cloud-based microservices using NestJS, Prisma, PostgreSQL, and Redis. Incorporated real-time features with WebSockets and contributed to DevOps pipeline with Docker and Traefik.",
    skills: ["NestJS", "Prisma", "PostgreSQL", "Redis", "Docker", "WebSockets"],
  },
  {
    role: "Software Engineer - Web (Part-time)",
    company: "Biology Haters",
    date: "Dec 2023 - Jul 2024",
    description:
      "Built Taalaash, a Bangla academic search engine with OCR + ML. Enhanced UI/UX with Next.js, React, and Tailwind. Tuned Tesseract for 98% Bangla OCR accuracy and optimized system efficiency by 95% using caching.",
    skills: ["Next.js", "FastAPI", "Tesseract OCR", "Algolia", "PostgreSQL"],
  },
  {
    role: "Junior Software Engineer (Part-time)",
    company: "Ronon (ACS EdTech)",
    date: "Dec 2021 - Dec 2023",
    description:
      "Designed core engine for Ronon, growing to 80k users. Founded and led development of Matrahin, an interactive physics simulation tool. Collaborated on scalable solutions using Django, Node.js, and React.",
    skills: ["Django", "React", "Python", "Physics Simulations"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background mesh for visuals */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-b from-primary/5 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="container px-4 mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:pl-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Career Path
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Over 4 years of building production-grade software.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-px bg-border/50 hidden md:block" />
          <div className="absolute left-4 top-4 bottom-0 w-px bg-border/50 md:hidden" />

          <div className="space-y-12">
            {experienceList.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 relative items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-20 mt-1.5 shadow-[0_0_0_4px_rgba(var(--background))]"></div>

                {/* Date (for Desktop) */}
                <div
                  className={`hidden md:block w-1/2 text-right ${index % 2 === 0 ? "text-left pl-12" : "pr-12"}`}
                >
                  <span className="text-2xl font-mono text-muted-foreground/40 font-bold">
                    {job.date}
                  </span>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 pl-12 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/50 hover:bg-background/80 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Mobile Date */}
                    <div className="md:hidden px-6 pt-6 -mb-4">
                      <Badge variant="secondary" className="font-mono text-xs">
                        {job.date}
                      </Badge>
                    </div>

                    <div className="p-6 md:p-8 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {job.role}
                        </h3>
                        <p className="text-base font-medium text-muted-foreground">
                          {job.company}
                        </p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 rounded-md bg-secondary/30 text-secondary-foreground text-xs font-medium border border-secondary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
