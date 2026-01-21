"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Download } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    company: "Infobeans Technologies",
    companyLogo: "/images/infobeans_logo.jpg",
    location: "Pune, India",
    period: "Aug 2025 - Present",
    role: "Senior Software Engineer",
    description:
      "Leading development of an innovative EdTech platform revolutionizing student engagement through AI-driven learning, real-time quizzes, and gamification.",
    highlights: [
      "Built real-time battle quiz system for peer competition",
      "Integrated AI-powered doubt-solving for personalized learning",
      "Designed dynamic leaderboard with rewards system",
    ],
    technologies: ["Node.js", "TypeScript", "AI/ML", "Real-time Systems", "PostgreSQL"],
  },
  {
    company: "VT Netzwelt",
    companyLogo: "/images/vt_netzwelt_logo.jpg",
    location: "Mohali, India",
    period: "Dec 2024 - Jul 2025",
    role: "Software Engineer",
    description:
      "Developed high-scale e-commerce platform for GfK (German client) with microservices architecture serving thousands of users across four core services.",
    highlights: [
      "Achieved 90%+ code coverage across all modules",
      "Built serverless Lambda functions using AWS SAM",
      "Developed responsive UI components with SvelteJS",
    ],
    technologies: ["SvelteJS", "AWS Lambda", "AWS SAM", "Microservices", "Testing"],
  },
  {
    company: "Antier Solutions",
    companyLogo: "/images/antiersolutions_logo.jpg",
    location: "Mohali, India",
    period: "Feb 2021 - Nov 2024",
    role: "Software Engineer",
    description:
      "Led teams building scalable blockchain and Web3 applications with microservices architecture, mentored juniors, and delivered high-performance solutions.",
    highlights: [
      "Built Web3-based blockchain apps with smart contracts",
      "Optimized databases with Redis caching for performance",
    ],
    technologies: ["Node.js", "NestJS", "Web3.js", "Redis", "Docker", "MySQL"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              Career Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mt-3 mb-4"
            >
              Professional Experience
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
              5+ years building scalable solutions across EdTech, E-commerce, Blockchain, and Cloud platforms
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2"></div>

            {/* Experience Cards */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
                >
                  {/* Company Logo - Center */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className="relative w-16 h-16 md:w-20 md:h-20">
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
                      {/* Logo Container */}
                      <div className="relative w-full h-full rounded-full bg-white dark:bg-card border-4 border-primary shadow-xl overflow-hidden p-2 flex items-center justify-center">
                        <Image
                          src={exp.companyLogo}
                          alt={exp.company}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                      className="group relative p-6 md:p-8 rounded-2xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500"
                    >
                      {/* Gradient Background on Hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        {/* Period Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/30">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-primary">{exp.period}</span>
                        </div>

                        {/* Company Name */}
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {exp.company}
                        </h3>

                        {/* Role */}
                        <div className="text-xl font-bold text-foreground mb-3">
                          {exp.role}
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>

                        {/* Description */}
                        <p className="text-foreground/70 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <div className="mb-6">
                          <div className="space-y-2">
                            {exp.highlights.map((item, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-3 text-sm text-foreground/70"
                              >
                                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternate side on desktop */}
                  <div className="hidden md:block w-[calc(50%-4rem)]"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-center mt-20"
          >
            <p className="text-lg text-foreground/70 mb-6">
              Interested in my full professional journey?
            </p>
            <a
              href="/documents/praveen_yadav.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
