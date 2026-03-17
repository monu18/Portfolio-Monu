"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Mail, ArrowDown, ExternalLink, Terminal, Cpu, Zap } from "lucide-react";
import { PERSONAL_INFO, STATS } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const TYPING_PHRASES = [
  "Distributed Systems",
  "Real-Time Pipelines",
  "High-Scale Infrastructure",
  "Event-Driven Architecture",
];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_PHRASES[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % TYPING_PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="text-gradient-primary">
      {displayed}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}

export default function Hero() {
  const scrollToNext = () => {
    const el = document.getElementById("experience");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan/10 blur-3xl pointer-events-none"
      />

      <div className="container-width relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border-light mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            <span className="text-xs font-mono text-text-secondary">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary mb-4 leading-[1.1]"
          >
            Building{" "}
            <br className="hidden sm:block" />
            <TypingText />
          </motion.h1>

          {/* Name + role */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="mt-6 mb-4"
          >
            <span className="font-mono text-text-muted text-sm tracking-widest uppercase">
              &mdash;&nbsp; {PERSONAL_INFO.name} &nbsp;&mdash;
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-surface border border-border-light hover:border-primary/50 text-text-primary text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-glow-primary group"
            >
              <Github size={16} className="group-hover:text-primary transition-colors" />
              GitHub
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-6 py-3 bg-surface border border-border-light hover:border-cyan/50 text-text-primary text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-glow-cyan group"
            >
              <Mail size={16} className="group-hover:text-cyan transition-colors" />
              Contact
            </a>
            <a
              href={PERSONAL_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-glow-primary"
            >
              Resume
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                className="metric-card text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gradient-primary font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-text-muted font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech pills */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.7}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {[
              { icon: Terminal, label: "Java / Scala" },
              { icon: Zap, label: "Apache Kafka" },
              { icon: Cpu, label: "Distributed Systems" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border rounded-full text-xs text-text-secondary font-mono"
              >
                <Icon size={11} className="text-primary" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mx-auto text-text-muted hover:text-text-secondary transition-colors"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
