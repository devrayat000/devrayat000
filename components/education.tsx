"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap } from "lucide-react";

const educationList = [
  {
    school: "Bangladesh University of Engineering and Technology (BUET)",
    degree: "B.Sc in Mechanical Engineering",
    year: "2026",
    description:
      "CGPA: 3.10/4.00. Former Class Representative. Combining engineering principles with software development expertise.",
    tags: ["Mechanical Engineering", "Programming", "Leadership"],
  },
  {
    school: "Notre Dame College, Dhaka",
    degree: "Higher Secondary Certificate (HSC)",
    year: "2020",
    description:
      "GPA: 5.00. Built a strong foundation in science and mathematics.",
    tags: ["Science", "Mathematics"],
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-muted/20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional training.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationList.map((edu, index) => (
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
                      <GraduationCap className="w-5 h-5 text-primary" />
                      {edu.school}
                    </CardTitle>
                    <p className="text-base font-medium text-muted-foreground">
                      {edu.degree}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="w-fit flex items-center gap-1"
                  >
                    <Calendar className="w-3 h-3" />
                    {edu.year}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
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
