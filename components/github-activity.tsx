"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { Github, Activity, ExternalLink, GitCommit, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GithubActivity() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="activity" className="py-24 bg-background relative overflow-hidden">
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
                Activity & Consistency
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Engineering Cadence
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              Real-world commits, architecture builds, and continuous system shipping
              tracked directly from GitHub.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-border/60 hover:bg-muted/50 gap-2"
            >
              <a
                href="https://github.com/devrayat000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                <span>devrayat000</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground ml-1" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border/50 bg-muted/20 p-6 md:p-8 backdrop-blur-sm shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/40 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  GitHub Contribution Activity
                </h3>
                <p className="text-xs text-muted-foreground font-mono">
                  Continuous development across distributed systems, AI pipelines & tools
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/50 border border-border/40">
                <Flame className="w-3.5 h-3.5 text-amber-500" /> Daily Active
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/50 border border-border/40">
                <GitCommit className="w-3.5 h-3.5 text-emerald-500" /> Public & Private
              </span>
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-2 flex justify-center">
            {mounted ? (
              <div className="min-w-fit flex justify-center py-2">
                <GitHubCalendar
                  username="devrayat000"
                  fontSize={13}
                  blockSize={12}
                  blockMargin={4}
                  colorScheme="dark"
                  theme={{
                    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                  }}
                  labels={{
                    totalCount: "{{count}} contributions in the last year",
                  }}
                />
              </div>
            ) : (
              <div className="h-36 w-full flex items-center justify-center text-muted-foreground text-sm font-mono animate-pulse">
                Loading GitHub activity...
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
