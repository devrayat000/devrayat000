"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "Framer Motion",
  "PostgreSQL",
  "Git",
  "Docker",
  "AWS",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Abstract representation of code/profile */}
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-primary/20 to-secondary/20 p-8 rotate-3 relative z-10 overflow-hidden border border-border/50 backdrop-blur-3xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 scale-95 z-0 blur-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a passionate developer who loves to create software that
                intersects beautiful design with robust engineering. With a
                strong foundation in modern web technologies, I aim to build
                applications that are fast, accessible, and user-friendly.
              </p>
              <p>
                My journey started with a curiosity for how things work on the
                web, which evolved into a career building full-stack
                applications. I advocate for clean code and pragmatic solutions.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="px-3 py-1 text-sm font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
