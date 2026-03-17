"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-primary tracking-widest uppercase mb-4">
      <span className="w-8 h-px bg-primary" />
      {children}
      <span className="w-8 h-px bg-primary" />
    </span>
  );
}

const LINKS = [
  {
    icon: Mail,
    label: "UIC Email",
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    color: "text-primary",
    bg: "bg-primary-glow border-primary/20",
    hoverBorder: "hover:border-primary/50",
  },
  {
    icon: Mail,
    label: "Personal Email",
    value: PERSONAL_INFO.emailPersonal,
    href: `mailto:${PERSONAL_INFO.emailPersonal}`,
    color: "text-cyan",
    bg: "bg-cyan-glow border-cyan/20",
    hoverBorder: "hover:border-cyan/50",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/monu18",
    href: PERSONAL_INFO.github,
    color: "text-text-primary",
    bg: "bg-surface border-border",
    hoverBorder: "hover:border-border-light",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/monu18",
    href: PERSONAL_INFO.linkedin,
    color: "text-[#0A66C2]",
    bg: "bg-surface border-border",
    hoverBorder: "hover:border-border-light",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/8 blur-3xl pointer-events-none" />

      <div className="container-width relative">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <SectionLabel>Contact</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
          >
            Let&apos;s Build Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg mb-4 leading-relaxed"
          >
            I&apos;m open to senior/staff backend roles focused on distributed systems, platform
            engineering, or data infrastructure. If you&apos;re building something hard — I&apos;d
            love to hear about it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-12 text-sm text-text-muted"
          >
            <MapPin size={14} />
            <span>{PERSONAL_INFO.location}</span>
            <span className="text-border">·</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            <span className="text-green">Open to opportunities</span>
          </motion.div>

          {/* Contact links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {LINKS.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`group flex items-center gap-3 p-4 border ${link.bg} ${link.hoverBorder} rounded-xl transition-all duration-200 text-left`}
                >
                  <div className={`p-2 rounded-lg bg-surface-2 ${link.color}`}>
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-text-muted font-mono mb-0.5">{link.label}</div>
                    <div className="text-xs text-text-primary font-medium break-all leading-snug">
                      {link.value}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-text-muted group-hover:text-text-primary shrink-0 transition-colors"
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <a
              href={PERSONAL_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-glow-primary text-sm"
            >
              Download Resume
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container-width">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-cyan flex items-center justify-center text-white font-mono font-bold text-xs">
                M
              </div>
              <span className="font-mono text-sm text-text-muted">
                monu<span className="text-primary">.</span>dev
              </span>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
              <Terminal size={12} className="text-primary" />
              <span>Built with Next.js · Tailwind · Framer Motion</span>
            </div>

            <div className="text-xs text-text-muted font-mono">
              © {new Date().getFullYear()} Monu Kumar
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
