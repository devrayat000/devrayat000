"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Introduction() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-background flex flex-col justify-center py-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none opacity-30" />

      <div className="container px-4 mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <div className="h-[1px] w-12 bg-primary/50" />
                <span className="text-sm font-medium tracking-widest text-primary uppercase">
                  &lt; Engineer / Developer / Leader /&gt;
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-foreground">
                Zul Ikram <br />
                <span className="text-muted-foreground/40">Musaddik</span>{" "}
                <br />
                Rayat<span className="text-primary">.</span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Aspiring Software Engineer and final-semester Mechanical
              Engineering student at BUET. I blend engineering precision with
              deep technical expertise to build scalable systems, AI-driven
              applications, and robust backend architectures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 pt-4 border-l-2 border-primary/20 pl-6"
            >
              <p className="text-muted-foreground">
                My journey combines the analytical rigor of mechanical
                engineering with a passion for code. From optimizing search
                algorithms to designing intuitive UIs, I bring a holistic
                problem-solving mindset. Expert in building cloud-native
                microservices and intelligent production-ready software.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                className="rounded-none border-b-2 border-primary hover:border-primary/50 bg-transparent text-foreground hover:bg-primary/5 shadow-none px-0  h-auto py-2 group transition-all"
                onClick={scrollToContact}
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex gap-4 items-center ml-auto md:ml-6">
                <a
                  href="https://github.com/devrayat000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/zim-rayat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:rayathossain49@gmail.com"
                  className="p-2 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual/Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[800px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] md:max-w-lg lg:max-w-none lg:h-[700px] lg:w-auto overflow-hidden rounded-sm md:rounded-none">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
              <img
                src="/me.jpg"
                alt="Zul Ikram Musaddik Rayat"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 hover:scale-100"
              />

              {/* Floating details */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-12 right-0 md:-right-12 z-20 bg-background/80 backdrop-blur-md border border-border/50 p-6 max-w-xs shadow-2xl"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      Experience
                    </p>
                    <p className="text-2xl font-bold">4+ Years</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      Current Focus
                    </p>
                    <p className="text-sm font-medium">Scalable Systems & AI</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      Education
                    </p>
                    <p className="text-sm font-medium">
                      B.Sc ME @ BUET (Final Sem)
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
