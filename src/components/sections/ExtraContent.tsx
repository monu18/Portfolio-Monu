"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  BookOpen,
  Heart,
  Calendar,
  ArrowUpRight,
  Youtube,
} from "lucide-react";
import {
  EXTRA_PROJECTS,
  PUBLICATIONS,
  VOLUNTEERING,
  type ExtraProject,
  type Publication,
  type VolunteerEntry,
} from "@/lib/data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-primary tracking-widest uppercase mb-4">
      <span className="w-8 h-px bg-primary" />
      {children}
      <span className="w-8 h-px bg-primary" />
    </span>
  );
}

const COLOR_BORDER: Record<string, string> = {
  primary: "border-primary/25 hover:border-primary/50",
  cyan: "border-cyan/25 hover:border-cyan/50",
  green: "border-green/25 hover:border-green/50",
};
const COLOR_TAG: Record<string, string> = {
  primary: "tag-primary",
  cyan: "tag-cyan",
  green: "tag-green",
};
const COLOR_TEXT: Record<string, string> = {
  primary: "text-primary",
  cyan: "text-cyan",
  green: "text-green",
};

// ── Extra Projects ────────────────────────────────────────────
function ExtraProjectCard({ proj, index }: { proj: ExtraProject; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`group bg-surface border ${COLOR_BORDER[proj.color]} rounded-xl p-5 transition-all duration-200`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors mb-0.5">
            {proj.title}
          </h4>
          <p className={`text-xs font-medium ${COLOR_TEXT[proj.color]} mb-1`}>{proj.subtitle}</p>
          {proj.period && (
            <span className="flex items-center gap-1 text-[11px] text-text-muted font-mono">
              <Calendar size={10} />
              {proj.period}
            </span>
          )}
        </div>
        <div className="flex gap-1.5 shrink-0">
          {proj.github && (
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-border hover:border-border-light text-text-muted hover:text-text-primary transition-all"
            >
              <ArrowUpRight size={14} />
            </a>
          )}
          {proj.link && (
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-border hover:border-border-light text-text-muted hover:text-text-primary transition-all"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
      <p className="text-xs text-text-secondary leading-relaxed mb-3">{proj.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {proj.technologies.map((t) => (
          <span key={t} className={`tag ${COLOR_TAG[proj.color]} text-[10px]`}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ── Publications ──────────────────────────────────────────────
function PublicationCard({ pub, index }: { pub: Publication; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group flex items-start gap-4 bg-surface border border-border hover:border-cyan/30 rounded-xl p-5 transition-all duration-200"
    >
      <div className="p-2.5 rounded-xl bg-cyan-glow border border-cyan/20 shrink-0">
        <BookOpen size={16} className="text-cyan" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="text-sm font-bold text-text-primary group-hover:text-cyan transition-colors leading-snug">
            {pub.title}
          </h4>
          {(pub.link || pub.doi) && (
            <a
              href={pub.link ?? `https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-text-muted hover:text-cyan transition-colors"
            >
              <ExternalLink size={13} />
            </a>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="tag tag-cyan text-[10px]">{pub.journal}</span>
          <span className="flex items-center gap-1 text-[11px] text-text-muted font-mono">
            <Calendar size={10} />
            {pub.date}
          </span>
        </div>
        <p className="text-xs text-text-secondary leading-relaxed">{pub.description}</p>
      </div>
    </motion.div>
  );
}

// ── Volunteering ──────────────────────────────────────────────
function VolunteerCard({ entry, index }: { entry: VolunteerEntry; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group bg-surface border border-border hover:border-green/30 rounded-xl p-5 transition-all duration-200"
    >
      <div className="flex items-start gap-3 mb-2">
        <div className="p-2 rounded-lg bg-green-glow border border-green/20 shrink-0">
          <Heart size={13} className="text-green" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h4 className="text-sm font-bold text-text-primary group-hover:text-green transition-colors">
              {entry.role}
            </h4>
            {entry.link && (
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-green transition-colors shrink-0"
              >
                <ExternalLink size={12} />
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-0.5">
            <span className="tag tag-green text-[10px]">{entry.org}</span>
            <span className="flex items-center gap-1 text-[11px] text-text-muted font-mono">
              <Calendar size={10} />
              {entry.period}
            </span>
          </div>
        </div>
      </div>
      <p className="text-xs text-text-secondary leading-relaxed pl-10">{entry.description}</p>
    </motion.div>
  );
}

// ── Main component — renders nothing if all arrays are empty ──
export default function ExtraContent() {
  const hasProjects = EXTRA_PROJECTS.length > 0;
  const hasPubs = PUBLICATIONS.length > 0;
  const hasVol = VOLUNTEERING.length > 0;

  if (!hasProjects && !hasPubs && !hasVol) return null;

  return (
    <section id="more" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="container-width space-y-20">
        {/* Extra Projects */}
        {hasProjects && (
          <div>
            <div className="text-center mb-10">
              <SectionLabel>More Projects</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
                More Things I&apos;ve Built
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto text-sm">
                Side projects, experiments, and open-source contributions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {EXTRA_PROJECTS.map((proj, i) => (
                <ExtraProjectCard key={proj.id} proj={proj} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Publications */}
        {hasPubs && (
          <div>
            <div className="text-center mb-10">
              <SectionLabel>Research</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
                Publications
              </h2>
            </div>
            <div className="space-y-4 max-w-4xl mx-auto">
              {PUBLICATIONS.map((pub, i) => (
                <PublicationCard key={pub.title} pub={pub} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Volunteering */}
        {hasVol && (
          <div>
            <div className="text-center mb-10">
              <SectionLabel>Community</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
                Volunteering
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto text-sm">
                Giving back through education, mentorship, and community initiatives.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {VOLUNTEERING.map((v, i) => (
                <VolunteerCard key={v.org + v.role} entry={v} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
