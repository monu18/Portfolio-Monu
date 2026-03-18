"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TECH_CATEGORIES } from "@/lib/data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-primary tracking-widest uppercase mb-4">
      <span className="w-8 h-px bg-primary" />
      {children}
      <span className="w-8 h-px bg-primary" />
    </span>
  );
}

const LEVEL_CONFIG = {
  expert: { label: "Expert", bars: 5, color: "bg-primary" },
  proficient: { label: "Proficient", bars: 4, color: "bg-cyan" },
  familiar: { label: "Familiar", bars: 2, color: "bg-text-muted" },
};

function TechItem({
  item,
  index,
  inView,
}: {
  item: { name: string; level: string; color: string };
  index: number;
  inView: boolean;
}) {
  const levelConfig = LEVEL_CONFIG[item.level as keyof typeof LEVEL_CONFIG];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex items-center justify-between p-3 rounded-xl bg-surface border border-border hover:border-primary/30 transition-all duration-200"
    >
      <div className="flex items-center gap-3">
        {/* Color dot */}
        <div
          className="w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: item.color }}
        />
        <span className="text-sm font-medium text-text-primary">{item.name}</span>
      </div>

      {/* Skill bars */}
      <div className="flex items-center gap-1.5">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 + i * 0.05 }}
              className={`h-1.5 w-4 rounded-full origin-left ${
                i < levelConfig.bars ? levelConfig.color : "bg-border"
              }`}
            />
          ))}
        </div>
        <span className="text-[10px] font-mono text-text-muted ml-1 min-w-[52px]">
          {levelConfig.label}
        </span>
      </div>
    </motion.div>
  );
}

function CategoryBlock({
  category,
  catIndex,
}: {
  category: (typeof TECH_CATEGORIES)[0];
  catIndex: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: catIndex * 0.08 }}
    >
      <h3 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-3 flex items-center gap-2">
        <span className="w-3 h-px bg-primary/50" />
        {category.label}
      </h3>
      <div className="space-y-2">
        {category.items.map((item, i) => (
          <TechItem
            key={item.name}
            item={item}
            index={i}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="stack" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      {/* Left decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan/5 blur-3xl pointer-events-none" />

      <div className="container-width relative">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
          >
            <SectionLabel>Tech Stack</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold text-text-primary mb-4"
          >
            Tools of the Trade
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-text-secondary max-w-xl mx-auto mb-8"
          >
            A full-stack view of my engineering toolkit — from distributed systems primitives to
            cloud infrastructure.
          </motion.p>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-6"
          >
            {Object.entries(LEVEL_CONFIG).map(([level, config]) => (
              <div key={level} className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-3 rounded-full ${
                        i < config.bars ? config.color : "bg-border"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-text-muted font-mono">{config.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((category, i) => (
            <CategoryBlock key={category.label} category={category} catIndex={i} />
          ))}
        </div>

        {/* Bottom highlight — currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-6 bg-surface border border-border rounded-2xl text-center max-w-2xl mx-auto"
        >
          <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
            Currently exploring
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["ClickHouse", "Flink", "Go", "LLM Infrastructure", "Ray"].map((tech) => (
              <span key={tech} className="tag tag-primary text-[10px]">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
