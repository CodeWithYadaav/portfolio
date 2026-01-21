"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Users,
  Shield,
  Brain,
  Coins,
  Palette,
  BarChart,
  Server,
  Sparkles,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    year: "2025-Present",
    title: "Uprio EdTech Platform",
    company: "Infobeans Technologies",
    description:
      "AI-powered platform with real-time battle quizzes, dynamic leaderboards, and gamified learning experiences for students.",
    icon: Sparkles,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/20",
    bgGradient: "from-emerald-500/10 via-teal-500/10 to-emerald-500/10",
    technologies: ["Node.js", "TypeScript", "AI/ML", "Real-time", "MongoDB"],
    image: "/images/uprio.png",
    position: "right",
    link: "https://play.google.com/store/apps/dev?id=8684879134151004846&hl=en",
  },
  {
    year: "2024-25",
    title: "GfK Market Intelligence",
    company: "VT Netzwelt",
    description:
      "Enterprise e-commerce platform for German client serving 2M+ users with microservices architecture and 99.9% uptime.",
    icon: BarChart,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/20",
    bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
    technologies: ["SvelteJS", "AWS Lambda", "SAM", "Microservices"],
    image: "/images/Gfk.png",
    position: "left",
    link: "https://shopper.yougov.com/join/de-de/home",
  },
  {
    year: "2024-25",
    title: "Hydro Utility Manager",
    company: "Antier Solutions",
    description:
      "Automated billing system processing 1M+ daily transactions with enterprise security and multi-tenant architecture.",
    icon: Server,
    iconColor: "text-green-500",
    iconBg: "bg-green-500/20",
    bgGradient: "from-green-500/10 via-emerald-500/10 to-green-500/10",
    technologies: ["NestJS", "PostgreSQL", "TypeORM", "AWS", "Docker"],
    image: "/images/Hydro.png",
    position: "right",
    link: null,
  },
  {
    year: "2022-23",
    title: "NFT Marketplace",
    company: "Antier Solutions",
    description:
      "Full-stack blockchain marketplace with smart contracts, wallet integration, and real-time bidding for NFT trading.",
    icon: Palette,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-500/20",
    bgGradient: "from-purple-500/10 via-pink-500/10 to-purple-500/10",
    technologies: ["React", "Web3.js", "Solidity", "IPFS", "Node.js"],
    image: "/images/Cupchairs.png",
    position: "left",
    link: "https://www.cupchairs.com/",
  },
  {
    year: "2022",
    title: "EQ8 Brainchain",
    company: "Antier Solutions",
    description:
      "Revolutionary survey platform where questions exist as NFTs with blockchain-verified transparency and token rewards.",
    icon: Brain,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/20",
    bgGradient: "from-violet-500/10 via-purple-500/10 to-indigo-500/10",
    technologies: ["Express.js", "TypeScript", "Web3.js", "MySQL", "Docker"],
    image: null,
    position: "right",
    link: null,
  },
  {
    year: "2021",
    title: "ICO Fundraising Platform",
    company: "Antier Solutions",
    description:
      "Multi-chain ICO platform supporting ETH, BTC, TRON, and USDT with automated token distribution system.",
    icon: Coins,
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-500/20",
    bgGradient: "from-indigo-500/10 via-blue-500/10 to-indigo-500/10",
    technologies: ["Express.js", "Web3.js", "TypeScript", "MySQL", "Docker"],
    image: null,
    position: "left",
    link: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Project Timeline
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Project Chronology
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
              className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto"
            >
              A journey through impactful projects that shaped my career
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 hidden md:block"></div>

            {/* Projects */}
            <div className="space-y-12 md:space-y-16">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: project.position === "right" ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: project.position === "right" ? 50 : -50 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  className={`relative flex items-center ${project.position === "right" ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col gap-8`}
                >
                  {/* Timeline Icon - Center */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
                      className="relative"
                    >
                      {/* Pulse Ring */}
                      <div className={`absolute inset-0 ${project.iconBg} rounded-full animate-ping`}></div>
                      {/* Icon Container */}
                      <div className={`relative w-16 h-16 ${project.iconBg} rounded-full border-4 border-background shadow-xl flex items-center justify-center backdrop-blur-sm`}>
                        <project.icon className={`w-8 h-8 ${project.iconColor}`} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${project.position === "right" ? "md:text-left" : "md:text-right"}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                      className="group relative"
                    >
                      {/* Card */}
                      <div className={`relative p-6 md:p-8 rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl overflow-hidden`}>
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                        <div className="relative z-10">
                          {/* Year Badge */}
                          <div className={`inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full ${project.iconBg} border border-${project.iconColor.replace('text-', '')}/30`}>
                            <Calendar className={`w-4 h-4 ${project.iconColor}`} />
                            <span className={`text-sm font-bold ${project.iconColor}`}>{project.year}</span>
                          </div>

                          {/* Mobile Icon */}
                          <div className="md:hidden mb-4">
                            <div className={`w-14 h-14 ${project.iconBg} rounded-full flex items-center justify-center ${project.position === "right" ? "" : "ml-auto"}`}>
                              <project.icon className={`w-7 h-7 ${project.iconColor}`} />
                            </div>
                          </div>

                          {/* Image or Icon Placeholder */}
                          {project.image ? (
                            <div className="mb-4 overflow-hidden rounded-xl">
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          ) : (
                            <div className={`mb-4 overflow-hidden rounded-xl bg-gradient-to-br ${project.bgGradient} border-2 border-border h-48 flex flex-col items-center justify-center backdrop-blur-sm`}>
                              <motion.div
                                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                              >
                                <project.icon className={`w-20 h-20 ${project.iconColor} mb-3`} />
                              </motion.div>
                              <div className="text-center px-4">
                                <div className={`text-lg font-bold ${project.iconColor} mb-1`}>
                                  {project.title}
                                </div>
                                <div className="text-xs font-semibold text-foreground/70">
                                  {project.company}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Title with Link */}
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 text-primary dark:text-white hover:text-secondary hover:scale-110 transition-all"
                                title="Visit Project"
                              >
                                <ExternalLink className="w-5 h-5" />
                              </a>
                            )}
                          </div>

                          {/* Company */}
                          <div className="text-sm font-semibold text-foreground/60 mb-3">
                            {project.company}
                          </div>

                          {/* Description */}
                          <p className="text-foreground/70 leading-relaxed mb-4 text-sm md:text-base">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className={`flex flex-wrap gap-2 ${project.position === "right" ? "" : "md:justify-end"}`}>
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className={`px-3 py-1 text-xs font-semibold rounded-full ${project.iconBg} ${project.iconColor} border border-${project.iconColor.replace('text-', '')}/20`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Connecting Line to Timeline (hidden on mobile) */}
                        <div
                          className={`hidden md:block absolute top-1/2 ${project.position === "right" ? "-left-8" : "-right-8"
                            } w-8 h-0.5 bg-gradient-to-${project.position === "right" ? "r" : "l"} from-border to-transparent`}
                        ></div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Space (other side) */}
                  <div className="hidden md:block w-[calc(50%-3rem)]"></div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Cap */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="hidden md:flex items-center justify-center mt-12"
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
