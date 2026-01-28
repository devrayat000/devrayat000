"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen } from "lucide-react";

const certifications = [
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
    title: "SQL (Advanced)",
    organization: "HackerRank",
    date: "Certification",
    description:
      "Complex join operations, window functions, and performance tuning.",
    icon: Award,
  },
  {
    title: "Learn RAG",
    organization: "Scrimba",
    date: "Certification",
    description:
      "In-depth training on Retrieval-Augmented Generation for AI applications.",
    icon: BookOpen,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:pl-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Validations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Continuous learning credentials from industry leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 md:px-0">
          {certifications.map((item, index) => {
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
                <Card className="h-full border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors">
                  <CardHeader className="flex flex-row items-start gap-4 pb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-lg leading-tight">
                        {item.title}
                      </CardTitle>
                      <div className="text-sm font-medium text-muted-foreground">
                        {item.organization}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className="text-xs font-normal bg-background border-border/50"
                    >
                      {item.date}
                    </Badge>
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
