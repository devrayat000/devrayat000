"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, BookOpen } from "lucide-react";

const achievements = [
  {
    title: "Introduction to Front-End Development",
    organization: "Coursera",
    date: "Certification",
    description:
      "Comprehensive course covering HTML, CSS, JavaScript and modern React development practices.",
    icon: BookOpen,
  },
  {
    title: "Networking in Google Cloud: Fundamentals",
    organization: "Google",
    date: "Certification",
    description:
      "Deep dive into GCP networking infrastructure, VPCs, and hybrid connectivity.",
    icon: Award,
  },
  {
    title: "SQL for Data Science",
    organization: "Coursera",
    date: "Certification",
    description:
      "Advanced SQL queries, data analysis, and database management specifically for data science applications.",
    icon: BookOpen,
  },
  {
    title: "President",
    organization: "BUET Animata - Animation & VFX Club",
    date: "Mar 2025 – Present",
    description:
      "Leading the club, organizing workshops on animation/3D modeling. Previously Founding Assistant General Secretary.",
    icon: Star,
  },
  {
    title: "Web Master",
    organization: "Team Interplanetar - BUET Mars Rover Team",
    date: "Oct 2022 – Oct 2024",
    description:
      "Developed and maintained the team's official website. Implemented a new certification system for engineering achievements.",
    icon: Trophy,
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-muted/20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Achievements & Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Certifications, awards, and leadership roles that define my
            professional journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/30 transition-colors text-center">
                  <CardHeader className="flex flex-col items-center pb-4">
                    <div className="p-3 rounded-full bg-primary/10 mb-4 text-primary">
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <div className="text-sm font-medium text-muted-foreground mt-1">
                      {item.organization}
                    </div>
                    <Badge
                      variant="outline"
                      className="mt-2 text-xs font-normal"
                    >
                      {item.date}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
