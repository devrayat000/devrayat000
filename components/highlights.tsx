"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Rocket, Video, Globe } from "lucide-react";

const highlights = [
  {
    title: "President, BUET Animata",
    category: "Leadership & Creativity",
    description:
      "Leading the Animation & VFX Club. Organizing workshops on 3D modeling and visual arts.",
    icon: Video,
    className: "md:col-span-2",
    gradient: "from-purple-500/20 to-indigo-500/20",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Team Interplanetar",
    category: "Robotics & Engineering",
    description:
      "Web Master for BUET's Mars Rover Team. Built the official portal and certification system.",
    icon: Rocket,
    className: "md:col-span-1",
    gradient: "from-orange-500/20 to-red-500/20",
    image:
      "https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?q=80&w=2800&auto=format&fit=crop",
  },
  {
    title: "Google Cloud Certified",
    category: "Professional Certification",
    description:
      "Networking in Google Cloud: Fundamentals. Validating cloud infrastructure expertise.",
    icon: Globe,
    className: "md:col-span-1",
    gradient: "from-blue-500/20 to-cyan-500/20",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=2671&auto=format&fit=crop",
  },
  {
    title: "80,000+ Students Impacted",
    category: "EdTech Impact",
    description:
      "Scaled Ronon and TopperOn platforms to serve thousands of active users daily.",
    icon: UsersIcon,
    className: "md:col-span-2",
    gradient: "from-green-500/20 to-emerald-500/20",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
  },
];

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function Highlights() {
  return (
    <section id="highlights" className="py-24 bg-muted/10 relative">
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
              Highlights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Memorable Moments
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Accomplishments, leadership roles, and community impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-3xl border border-border/50 bg-background ${item.className}`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.7] group-hover:brightness-[0.4]"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} mix-blend-overlay`}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end text-white">
                  <div className="mb-auto opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl w-fit">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Badge
                      variant="outline"
                      className="mb-3 text-white border-white/50 backdrop-blur-sm"
                    >
                      {item.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
