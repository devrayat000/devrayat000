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
                I am an aspiring Software Engineer and final-semester Mechanical
                Engineering student at BUET. My journey is defined by a unique
                blend of engineering precision and a deep passion for software
                development.
              </p>
              <p>
                I specialize in building scalable systems, AI-driven
                applications, and efficient backend architectures. My experience
                spans full-stack development, cloud computing with AWS and GCP,
                and machine learning.
              </p>
              <p>
                Whether it&apos;s optimizing complex algorithms or designing
                intuitive user interfaces, I bring a problem-solving mindset and
                a commitment to writing clean, maintainable code.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
