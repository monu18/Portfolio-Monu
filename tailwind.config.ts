import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050508",
        surface: "#0D0D14",
        "surface-2": "#13131C",
        border: "#1E1E2E",
        "border-light": "#2A2A3F",
        primary: "#7C3AED",
        "primary-light": "#8B5CF6",
        "primary-glow": "rgba(124, 58, 237, 0.15)",
        cyan: "#06B6D4",
        "cyan-glow": "rgba(6, 182, 212, 0.15)",
        "text-primary": "#F8FAFC",
        "text-secondary": "#94A3B8",
        "text-muted": "#475569",
        green: "#10B981",
        "green-glow": "rgba(16, 185, 129, 0.15)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 58, 237, 0.3), transparent)",
        "gradient-card":
          "linear-gradient(135deg, rgba(13,13,20,0.8) 0%, rgba(19,19,28,0.8) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        glow: "glow 3s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(124, 58, 237, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glow-primary": "0 0 30px rgba(124, 58, 237, 0.3)",
        "glow-cyan": "0 0 30px rgba(6, 182, 212, 0.3)",
        "glow-green": "0 0 30px rgba(16, 185, 129, 0.3)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
