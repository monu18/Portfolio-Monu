"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, ExternalLink, TrendingUp } from "lucide-react";
import { EXPERIENCES, EDUCATION } from "@/lib/data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-base font-bold text-white tracking-widest uppercase mb-4">
      <span className="w-8 h-px bg-primary" />
      {children}
      <span className="w-8 h-px bg-primary" />
    </span>
  );
}

function MetricBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center px-3 py-2 bg-primary-glow border border-primary/20 rounded-lg min-w-[72px]">
      <span className="text-sm font-bold font-mono text-primary leading-none mb-0.5">
        {value}
      </span>
      <span className="text-[10px] text-text-muted leading-tight text-center">{label}</span>
    </div>
  );
}

function ExperienceCard({
  experience,
  isStacked = false,
}: {
  experience: (typeof EXPERIENCES)[0];
  isStacked?: boolean;
}) {
  return (
    <div
      className={`group relative bg-surface border rounded-2xl p-6 transition-all duration-300 hover:shadow-card-hover ${
        isStacked
          ? "border-border hover:border-primary/30"
          : "border-border hover:border-primary/40"
      }`}
    >
      <div className="absolute inset-0 rounded-2xl bg-primary-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
            <p className="text-base font-bold text-primary">{experience.role}</p>
            <span className="tag tag-primary text-[10px] shrink-0">{experience.type}</span>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-text-muted mt-1">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-5">
          {experience.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
              <TrendingUp size={13} className="text-primary shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-5">
          {experience.metrics.map((m) => (
            <MetricBadge key={m.label} value={m.value} label={m.label} />
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <span key={tech} className="tag tag-cyan text-[10px]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompanyGroup({
  company,
  companyUrl,
  roles,
  index,
}: {
  company: string;
  companyUrl: string;
  roles: (typeof EXPERIENCES);
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isMultiRole = roles.length > 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Company header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary-glow border border-primary/30 text-primary font-bold font-mono text-sm shrink-0">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div>
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-lg font-bold text-text-primary hover:text-primary transition-colors group/link"
          >
            {company}
            <ExternalLink
              size={13}
              className="opacity-0 group-hover/link:opacity-100 transition-opacity text-primary"
            />
          </a>
          {isMultiRole && (
            <p className="text-xs text-text-muted font-mono mt-0.5">
              {roles.length} roles · {roles[roles.length - 1].period.split("–")[0].trim()} –{" "}
              {roles[0].period.split("–")[1].trim()}
            </p>
          )}
        </div>
      </div>

      {/* Role cards — stacked for multi-role companies */}
      {isMultiRole ? (
        <div className="ml-12 space-y-4">
          {roles.map((role, i) => (
            <div key={role.id} className="relative">
              {/* Connector line between stacked roles */}
              {i < roles.length - 1 && (
                <div className="absolute left-0 -bottom-4 w-px h-4 bg-border ml-6" />
              )}
              <ExperienceCard experience={role} isStacked />
            </div>
          ))}
        </div>
      ) : (
        <div className="ml-12">
          <ExperienceCard experience={roles[0]} />
        </div>
      )}
    </motion.div>
  );
}

function EducationCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <SectionLabel>Education</SectionLabel>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {EDUCATION.map((edu) => (
          <div
            key={edu.school}
            className="relative bg-surface-2 border border-cyan/25 hover:border-cyan/50 rounded-2xl p-6 transition-all duration-200 overflow-hidden"
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan rounded-l-2xl" />

            <div className="pl-1">
              <p className="text-base font-bold text-text-primary mb-1 leading-snug">{edu.school}</p>
              <p className="text-sm text-cyan font-semibold mb-3">{edu.degree}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-text-muted mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={11} />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={11} />
                  {edu.location}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green/10 border border-green/30 text-green text-xs font-mono font-semibold">
                GPA: {edu.gpa}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-50px" });

  // Group experiences by company
  const companyGroups: { company: string; companyUrl: string; roles: typeof EXPERIENCES }[] = [];
  const seen = new Map<string, number>();

  for (const exp of EXPERIENCES) {
    if (seen.has(exp.company)) {
      companyGroups[seen.get(exp.company)!].roles.push(exp);
    } else {
      seen.set(exp.company, companyGroups.length);
      companyGroups.push({
        company: exp.company,
        companyUrl: exp.companyUrl,
        roles: [exp],
      });
    }
  }

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="container-width">
        {/* Section header */}
        <div ref={headingRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>Experience</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
          >
            Where I&apos;ve Shipped
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary max-w-xl mx-auto"
          >
            3+ years building production systems at scale across India&apos;s largest matrimonial
            platform and graduate research at UIC.
          </motion.p>
        </div>

        {/* Experience list */}
        <div className="max-w-4xl mx-auto space-y-12 mb-20">
          {companyGroups.map((group, i) => (
            <CompanyGroup
              key={group.company}
              company={group.company}
              companyUrl={group.companyUrl}
              roles={group.roles}
              index={i}
            />
          ))}
        </div>

        {/* Education */}
        <div id="education" className="max-w-4xl mx-auto">
          <div className="h-px glow-line mb-12" />
          <EducationCard />
        </div>
      </div>
    </section>
  );
}
