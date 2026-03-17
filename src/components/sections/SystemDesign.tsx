"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, GitBranch, Shield, ChevronRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-primary tracking-widest uppercase mb-4">
      <span className="w-8 h-px bg-primary" />
      {children}
      <span className="w-8 h-px bg-primary" />
    </span>
  );
}

const PRINCIPLE_ICONS = [GitBranch, Database, Shield];

export default function SystemDesign() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-50px" });

  const study = CASE_STUDIES[0]; // Featured case study

  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });

  return (
    <section id="system-design" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container-width relative">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
          >
            <SectionLabel>System Design</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
          >
            Deep Dives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-text-secondary max-w-2xl mx-auto"
          >
            How I think about designing systems at scale — the trade-offs, key decisions, and
            lessons learned from production.
          </motion.p>
        </div>

        {/* Featured Case Study */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 40 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-surface border border-border rounded-2xl overflow-hidden">
            {/* Case study header */}
            <div className="bg-gradient-to-r from-primary/10 to-cyan/10 border-b border-border p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="tag tag-primary text-[10px]">Case Study</span>
                <span className="tag tag-cyan text-[10px]">Production</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                {study.title}
              </h3>
              <p className="text-text-secondary">{study.subtitle}</p>
            </div>

            <div className="p-8 space-y-10">
              {/* The Challenge */}
              <div>
                <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-4 h-px bg-primary" />
                  The Challenge
                </h4>
                <p className="text-text-secondary leading-relaxed">{study.challenge}</p>
              </div>

              {/* Design Principles */}
              <div>
                <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-4 h-px bg-primary" />
                  Design Principles
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.designPrinciples.map((principle, i) => {
                    const Icon = PRINCIPLE_ICONS[i % PRINCIPLE_ICONS.length];
                    return (
                      <motion.div
                        key={principle.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={contentInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="bg-surface-2 border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="p-1.5 rounded-lg bg-primary-glow">
                            <Icon size={15} className="text-primary" />
                          </div>
                          <h5 className="font-semibold text-text-primary text-sm">
                            {principle.title}
                          </h5>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {principle.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Key Decisions */}
              <div>
                <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-4 h-px bg-primary" />
                  Key Technical Decisions
                </h4>
                <div className="space-y-3">
                  {study.keyDecisions.map((decision, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={contentInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="group border border-border hover:border-primary/30 rounded-xl p-5 transition-all bg-surface-2"
                    >
                      <div className="flex items-start gap-3">
                        <ChevronRight
                          size={15}
                          className="text-primary shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform"
                        />
                        <div>
                          <p className="font-semibold text-text-primary text-sm mb-2">
                            {decision.decision}
                          </p>
                          <p className="text-sm text-text-secondary mb-2">
                            <span className="text-green font-mono text-xs">Why: </span>
                            {decision.rationale}
                          </p>
                          <p className="text-sm text-text-secondary">
                            <span className="text-yellow-400 font-mono text-xs">Trade-off: </span>
                            {decision.tradeoff}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Scale Numbers */}
              <div>
                <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-4 h-px bg-primary" />
                  Scale Numbers
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {study.scaleNumbers.map((item, i) => (
                    <motion.div
                      key={item.metric}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      className="bg-surface-2 border border-border rounded-xl p-3 text-center"
                    >
                      <div className="text-base font-bold font-mono text-gradient-primary mb-1">
                        {item.value}
                      </div>
                      <div className="text-[10px] text-text-muted leading-tight">{item.metric}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Lessons Learned */}
              <div>
                <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-4 h-px bg-primary" />
                  Lessons Learned
                </h4>
                <div className="space-y-3">
                  {study.lessonsLearned.map((lesson, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="font-mono text-xs text-primary shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}.
                      </span>
                      <p className="text-sm text-text-secondary leading-relaxed">{lesson}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="pt-4 border-t border-border">
                <div className="flex flex-wrap gap-1.5">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="tag tag-primary text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
