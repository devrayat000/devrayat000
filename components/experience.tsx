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
    <section id="experience" className="py-24 bg-muted/10">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 4 years of professional experience in full-stack development
            and software engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceList.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
                  <div className="space-y-1">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {job.role}
                    </CardTitle>
                    <p className="text-base font-medium text-primary/80">
                      {job.company}
                    </p>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {job.date}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-secondary/50"
                      >
                        {skill}
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
