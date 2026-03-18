"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  BookOpen,
  Heart,
  Calendar,
  ArrowUpRight,
  Play,
  Github,
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
    <span className="inline-flex items-center gap-2 font-mono text-sm text-primary tracking-widest uppercase mb-4">
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
const COLOR_ACCENT: Record<string, string> = {
  primary: "text-primary bg-primary-glow border-primary/20",
  cyan: "text-cyan bg-cyan-glow border-cyan/20",
  green: "text-green bg-green-glow border-green/20",
};
const COLOR_TEXT: Record<string, string> = {
  primary: "text-primary",
  cyan: "text-cyan",
  green: "text-green",
};
const COLOR_TOP_BAR: Record<string, string> = {
  primary: "bg-primary",
  cyan: "bg-cyan",
  green: "bg-green",
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
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className={`group relative bg-surface border ${COLOR_BORDER[proj.color]} rounded-2xl overflow-hidden transition-all duration-300`}
    >
      {/* Top accent */}
      <div className={`h-0.5 w-full ${COLOR_TOP_BAR[proj.color]} opacity-50`} />

      <div className="p-5">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h4 className={`text-sm font-bold text-text-primary group-hover:${COLOR_TEXT[proj.color]} transition-colors mb-0.5 leading-snug`}>
              {proj.title}
            </h4>
            <p className={`text-xs font-medium ${COLOR_TEXT[proj.color]} leading-snug`}>
              {proj.subtitle}
            </p>
            {proj.period && (
              <span className="inline-flex items-center gap-1 text-[10px] text-text-muted font-mono mt-1">
                <Calendar size={9} />
                {proj.period}
              </span>
            )}
          </div>

          {/* Action links */}
          <div className="flex items-center gap-1.5 shrink-0">
            {proj.youtube && (
              <a
                href={proj.youtube}
                target="_blank"
                rel="noopener noreferrer"
                title="Watch Demo (Model Training)"
                className={`p-1.5 rounded-lg border ${COLOR_ACCENT[proj.color]} transition-all hover:opacity-80`}
              >
                <Play size={13} />
              </a>
            )}
            {proj.youtube2 && (
              <a
                href={proj.youtube2}
                target="_blank"
                rel="noopener noreferrer"
                title={proj.youtube2Label ?? "Watch Demo 2"}
                className="p-1.5 rounded-lg border border-border text-text-muted hover:text-text-primary transition-all"
              >
                <Play size={13} />
              </a>
            )}
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-1.5 rounded-lg border border-border text-text-muted hover:text-text-primary transition-all"
              >
                <Github size={13} />
              </a>
            )}
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-border text-text-muted hover:text-text-primary transition-all"
              >
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-text-secondary leading-relaxed mb-3">{proj.description}</p>

        {/* YouTube label chips */}
        {(proj.youtube || proj.youtube2) && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {proj.youtube && (
              <a
                href={proj.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full border text-[10px] font-mono ${COLOR_ACCENT[proj.color]} hover:opacity-80 transition-opacity`}
              >
                <Play size={9} /> Model Training Demo
              </a>
            )}
            {proj.youtube2 && (
              <a
                href={proj.youtube2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 rounded-full border border-border text-text-muted text-[10px] font-mono hover:border-border-light transition-colors"
              >
                <Play size={9} /> {proj.youtube2Label ?? "Demo 2"}
              </a>
            )}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1">
          {proj.technologies.map((t) => (
            <span key={t} className={`tag ${COLOR_TAG[proj.color]} text-[10px]`}>
              {t}
            </span>
          ))}
        </div>
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-surface border border-border hover:border-cyan/40 rounded-2xl p-6 transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="p-3 rounded-xl bg-cyan-glow border border-cyan/20 shrink-0">
          <BookOpen size={18} className="text-cyan" />
        </div>

        <div className="flex-1 min-w-0">
          {/* Title + link */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h4 className="text-sm font-bold text-text-primary group-hover:text-cyan transition-colors leading-snug">
              {pub.title}
            </h4>
            {(pub.link || pub.doi) && (
              <a
                href={pub.link ?? `https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-1 text-[10px] font-mono text-cyan border border-cyan/30 px-2 py-1 rounded-full hover:bg-cyan-glow transition-all"
              >
                <ArrowUpRight size={10} /> View Paper
              </a>
            )}
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="tag tag-cyan text-[10px]">{pub.journal}</span>
            <span className="flex items-center gap-1 text-[11px] text-text-muted font-mono">
              <Calendar size={10} />
              {pub.date}
            </span>
            {pub.doi && (
              <span className="text-[10px] text-text-muted font-mono">
                DOI: {pub.doi}
              </span>
            )}
          </div>

          <p className="text-sm text-text-secondary leading-relaxed">{pub.description}</p>

          {/* Highlight badge */}
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="tag tag-green text-[10px]">InceptionV3: 99.95% Accuracy</span>
            <span className="tag tag-cyan text-[10px]">13,980 CT Scan Images</span>
            <span className="tag tag-primary text-[10px]">Peer Reviewed</span>
          </div>
        </div>
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
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group bg-surface border border-border hover:border-green/40 rounded-2xl p-5 transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        {/* Heart icon */}
        <div className="p-2.5 rounded-xl bg-green-glow border border-green/20 shrink-0">
          <Heart size={16} className="text-green" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className="text-sm font-bold text-text-primary group-hover:text-green transition-colors">
              {entry.role}
            </h4>
            {entry.link && (
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-1 text-[10px] font-mono text-green border border-green/30 px-2 py-1 rounded-full hover:bg-green-glow transition-all"
              >
                <ExternalLink size={10} /> Website
              </a>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="tag tag-green text-[10px]">{entry.org}</span>
            <span className="flex items-center gap-1 text-[11px] text-text-muted font-mono">
              <Calendar size={10} />
              {entry.period}
            </span>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed">{entry.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────
export default function ExtraContent() {
  const hasProjects = EXTRA_PROJECTS.length > 0;
  const hasPubs = PUBLICATIONS.length > 0;
  const hasVol = VOLUNTEERING.length > 0;

  if (!hasProjects && !hasPubs && !hasVol) return null;

  return (
    <section id="more" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-cyan/5 blur-3xl pointer-events-none" />

      <div className="container-width relative space-y-20">

        {/* ── More Projects ── */}
        {hasProjects && (
          <ExtraSection
            label="More Projects"
            heading="More Things I've Built"
            sub="Distributed systems, GenAI tools, and open-source experiments."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {EXTRA_PROJECTS.map((proj, i) => (
                <ExtraProjectCard key={proj.id} proj={proj} index={i} />
              ))}
            </div>
          </ExtraSection>
        )}

        {/* ── Publications ── */}
        {hasPubs && (
          <ExtraSection
            label="Research"
            heading="Publication"
            sub="Peer-reviewed research on deep learning applied to medical imaging."
          >
            <div className="space-y-4 max-w-4xl mx-auto">
              {PUBLICATIONS.map((pub, i) => (
                <PublicationCard key={pub.title} pub={pub} index={i} />
              ))}
            </div>
          </ExtraSection>
        )}

        {/* ── Volunteering ── */}
        {hasVol && (
          <ExtraSection
            label="Community"
            heading="Giving Back"
            sub="Co-founding an NGO, building for social impact, and teaching digital skills to underserved communities."
          >
            <div className="space-y-4 max-w-4xl mx-auto">
              {VOLUNTEERING.map((v, i) => (
                <VolunteerCard key={v.org + v.role} entry={v} index={i} />
              ))}
            </div>
          </ExtraSection>
        )}

      </div>
    </section>
  );
}

// ── Reusable section wrapper ──────────────────────────────────
function ExtraSection({
  label,
  heading,
  sub,
  children,
}: {
  label: string;
  heading: string;
  sub: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div>
      <div ref={ref} className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <SectionLabel>{label}</SectionLabel>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-text-primary mb-3"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="text-text-secondary max-w-xl mx-auto text-sm"
        >
          {sub}
        </motion.p>
      </div>
      {children}
    </div>
  );
}
