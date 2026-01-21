"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Server,
  Database,
  Cloud,
  Code,
  Boxes,
  Workflow,
} from "lucide-react";

const techCategories = [
  {
    icon: Server,
    title: "Backend Technologies",
    color: "from-green-400 to-emerald-600",
    technologies: ["Node.js", "TypeScript", "Express.js", "NestJS"],
  },
  {
    icon: Code,
    title: "Frontend Technologies",
    color: "from-blue-400 to-cyan-600",
    technologies: ["React.js", "SvelteJS", "TypeScript"],
  },
  {
    icon: Database,
    title: "Databases & Caching",
    color: "from-purple-400 to-violet-600",
    technologies: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "from-orange-400 to-red-600",
    technologies: ["AWS Lambda", "S3", "RDS", "API Gateway", "Docker", "Cognito"],
  },
  {
    icon: Boxes,
    title: "Architecture & Messaging",
    color: "from-pink-400 to-rose-600",
    technologies: ["Microservices", "Event-Driven", "Kafka", "RabbitMQ", "Serverless"],
  },
  {
    icon: Workflow,
    title: "Blockchain & Web3",
    color: "from-indigo-400 to-blue-600",
    technologies: ["Web3.js", "Wallet Integration", "NFT Marketplaces", "Smart Contracts"],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              Technical Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mt-3 mb-4"
            >
              Technology Stack
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto"
            >
              A comprehensive toolkit for building modern, scalable applications
            </motion.p>
          </div>

          {/* Tech Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <div className="relative mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 relative">
                    {category.title}
                  </h3>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 relative">
                    {category.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.7 + index * 0.1 + i * 0.05,
                        }}
                        className="px-3 py-1 text-sm font-medium rounded-lg bg-muted text-foreground/80 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-foreground/70">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-foreground/70">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-foreground/70">Commitment</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

