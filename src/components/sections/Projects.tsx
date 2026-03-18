"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { ArrowUpRight, Server, Zap, BarChart3, Brain, ChevronDown, ChevronUp, Calendar, Youtube } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";

const CATEGORY_FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "distributed", label: "Distributed" },
  { id: "ml", label: "ML / AI" },
  { id: "systems", label: "Systems" },
  { id: "infra", label: "Infra" },
];

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  distributed: Server,
  realtime: Zap,
  ml: Brain,
  infra: BarChart3,
  systems: Server,
};

const COLOR_MAP = {
  primary: {
    border: "border-primary/30",
    hoverBorder: "hover:border-primary/60",
    badge: "tag-primary",
    glow: "shadow-glow-primary",
    metric: "text-primary",
    metricBg: "bg-primary-glow border-primary/20",
    icon: "text-primary bg-primary-glow",
    bar: "bg-primary",
    dot: "bg-primary",
  },
  cyan: {
    border: "border-cyan/30",
    hoverBorder: "hover:border-cyan/60",
    badge: "tag-cyan",
    glow: "shadow-glow-cyan",
    metric: "text-cyan",
    metricBg: "bg-cyan-glow border-cyan/20",
    icon: "text-cyan bg-cyan-glow",
    bar: "bg-cyan",
    dot: "bg-cyan",
  },
  green: {
    border: "border-green/30",
    hoverBorder: "hover:border-green/60",
    badge: "tag-green",
    glow: "shadow-glow-green",
    metric: "text-green",
    metricBg: "bg-green-glow border-green/20",
    icon: "text-green bg-green-glow",
    bar: "bg-green",
    dot: "bg-green",
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-sm text-primary tracking-widest uppercase mb-4">
      <span className="w-8 h-px bg-primary" />
      {children}
      <span className="w-8 h-px bg-primary" />
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);

  const colors = COLOR_MAP[project.color as keyof typeof COLOR_MAP] || COLOR_MAP.primary;
  const Icon = CATEGORY_ICONS[project.category] || Server;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative bg-surface border ${colors.border} ${colors.hoverBorder} rounded-2xl overflow-hidden transition-all duration-300 hover:${colors.glow}`}
    >
      {/* Top accent bar */}
      <div className={`h-0.5 w-full ${colors.bar} opacity-60`} />

      <div className="p-6 sm:p-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-start gap-4">
            <div className={`p-2.5 rounded-xl ${colors.icon} shrink-0`}>
              <Icon size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="text-lg font-bold text-text-primary">{project.title}</h3>
                <span
                  className={`tag ${
                    project.status === "production"
                      ? "tag-green"
                      : project.status === "open-source"
                      ? "tag-cyan"
                      : "tag-primary"
                  } text-[10px]`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-text-secondary mb-1.5">{project.subtitle}</p>
              {project.period && (
                <span className="flex items-center gap-1 text-[11px] text-text-muted font-mono">
                  <Calendar size={10} />
                  {project.period}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {project.youtube && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-border hover:border-red-500/50 text-text-muted hover:text-red-400 transition-all"
                title="Watch Demo"
              >
                <Youtube size={14} />
              </a>
            )}
            {project.youtube2 && (
              <a
                href={project.youtube2}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-border hover:border-red-500/50 text-text-muted hover:text-red-400 transition-all"
                title={project.youtube2Label ?? "Watch Demo 2"}
              >
                <Youtube size={14} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-border hover:border-border-light text-text-muted hover:text-text-primary transition-all"
                title="GitHub"
              >
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.github2 && (
              <a
                href={project.github2}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-border hover:border-border-light text-text-muted hover:text-text-primary transition-all"
                title="GitHub (LLMSpark)"
              >
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className={`border ${colors.metricBg} rounded-xl px-3 py-2.5 text-center`}
            >
              <div className={`text-lg font-bold font-mono ${colors.metric} leading-none mb-0.5`}>
                {m.value}
              </div>
              <div className="text-[10px] text-text-muted">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Case Study content */}
        <div className="space-y-4">
          {/* Problem */}
          <div>
            <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
              Problem
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">{project.problem}</p>
          </div>

          {/* Expandable section */}
          <AnimatedExpand expanded={expanded}>
            {/* Solution */}
            <div className="pt-2">
              <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                Solution
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">{project.solution}</p>
            </div>

            {/* Architecture */}
            <div>
              <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                Architecture
              </h4>
              <div className="bg-surface-2 border border-border rounded-xl p-4 font-mono text-xs text-text-secondary overflow-x-auto">
                {project.architecture}
              </div>
            </div>

            {/* Impact */}
            <div>
              <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                Impact
              </h4>
              <ul className="space-y-1.5">
                {project.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className={`${colors.metric} shrink-0 mt-0.5`}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedExpand>

          {/* Expand toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className={`flex items-center gap-1.5 text-xs font-mono ${colors.metric} hover:opacity-80 transition-opacity`}
          >
            {expanded ? (
              <>
                <ChevronUp size={13} /> Collapse
              </>
            ) : (
              <>
                <ChevronDown size={13} /> View Case Study
              </>
            )}
          </button>
        </div>

        {/* Tech stack */}
        <div className="mt-5 pt-5 border-t border-border">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className={`tag ${colors.badge} text-[10px]`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function AnimatedExpand({
  expanded,
  children,
}: {
  expanded: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={false}
      animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="space-y-4 pb-2">{children}</div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-50px" });

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="container-width">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
          >
            <SectionLabel>Projects</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
          >
            What I&apos;ve Built
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-text-secondary max-w-xl mx-auto mb-8"
          >
            Case studies in distributed systems, real-time data pipelines, and high-scale
            infrastructure. Not just code — engineered for impact.
          </motion.p>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {CATEGORY_FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border ${
                  activeFilter === f.id
                    ? "bg-primary border-primary text-white"
                    : "bg-surface border-border text-text-secondary hover:border-border-light hover:text-text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
