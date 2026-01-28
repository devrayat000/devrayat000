"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Hammer, Users, Lightbulb } from "lucide-react";

export function AboutDetailed() {
  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-4 md:justify-center">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              My Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Beyond the Code
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I don&apos;t just write code; I bridge the gap between mechanical
            precision and digital innovation. Here is the story behind the
            engineer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: The Engineer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <div className="h-full p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Hammer className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="p-3 bg-primary/10 w-fit rounded-xl mb-6">
                  <Hammer className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">The Engineer</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Final-semester Mechanical Engineering student at{" "}
                  <strong>BUET</strong>. My academic background instills a
                  rigorous analytical approach to problem-solving. I apply
                  engineering first principles to software architecture,
                  ensuring robustness and scalability in every system I design.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: The Developer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="h-full p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="p-3 bg-primary/10 w-fit rounded-xl mb-6">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">The Builder</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Self-taught Software Engineer with 4+ years of experience.
                  From building <strong>AI-powered</strong> ed-tech platforms to
                  optimizing <strong>cloud infrastructure</strong>, I love
                  turning complex requirements into elegant code. I specialize
                  in the Modern Stack (Next.js, Python, Cloud).
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: The Leader/Creative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group"
          >
            <div className="h-full p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="p-3 bg-primary/10 w-fit rounded-xl mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">The Creative</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  President of <strong>BUET Animata</strong> and Web Master for{" "}
                  <strong>Team Interplanetar</strong>. I thrive in collaborative
                  environments, leading teams to bridge technology with
                  creativity. Whether it is organizing workshops or designing
                  visual assets, I am always creating.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
