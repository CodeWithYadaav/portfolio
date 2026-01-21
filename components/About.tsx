"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Zap, Users, Award } from "lucide-react";

const stats = [
  { icon: Code, label: "Years Experience", value: "5+" },
  { icon: Zap, label: "Projects Delivered", value: "15+" },
  { icon: Users, label: "Companies Served", value: "3+" },
  { icon: Award, label: "Technologies Mastered", value: "15+" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
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
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mt-3 mb-4"
            >
              Building the Future of Web
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground/80 leading-relaxed">
                I&apos;m a <span className="font-semibold text-primary">Full Stack Engineer</span> with
                5+ years of hands-on experience architecting and building enterprise-grade systems
                that serve millions of users worldwide.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                My expertise lies in building <span className="font-semibold">scalable microservices</span>,
                designing <span className="font-semibold">distributed architectures</span>, and crafting
                high-performance APIs using <span className="font-semibold">Node.js, TypeScript, React, and AWS</span>.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                From blockchain-powered platforms to real-time data processing engines, I deliver solutions
                that combine exceptional performance with rock-solid reliability.
              </p>
            </motion.div>

            {/* Right Content - Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
                  >
                    <div className="flex flex-col items-start">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-sm text-foreground/60 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

