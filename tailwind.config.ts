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
        saffron: {
          50: "#FFFAF0",
          100: "#FFF8ED",
          200: "#FFF4E3",
          300: "#FFEFD4",
          400: "#FFE4B8",
          500: "#DAA520",
          600: "#B8860B",
          700: "#8B6914",
          800: "#5C4510",
          900: "#2E220A",
        },
        crimson: {
          50: "#FFF5F6",
          100: "#FFE0E4",
          200: "#FFB3BC",
          300: "#FF8090",
          400: "#E8334D",
          500: "#C41E3A",
          600: "#A01530",
          700: "#8B0000",
          800: "#660018",
          900: "#40000F",
        },
        warm: {
          50: "#FDFBF7",
          100: "#FAF6EF",
          200: "#F5EDE0",
          800: "#2a1810",
          900: "#1a0f08",
        },
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "serif"],
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        devanagari: ["var(--font-noto-devanagari)", "sans-serif"],
        stat: ["var(--font-fraunces)", "serif"],
      },
      borderRadius: {
        pill: "100px",
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "slide-reveal": "slideReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "orb-float": "orbFloat 10s ease-in-out infinite",
        "line-grow": "lineGrow 2s cubic-bezier(0.16, 1, 0.3, 1) infinite",
      },
      keyframes: {
        slideReveal: {
          from: { transform: "translateY(40px)", opacity: "0", filter: "blur(8px)" },
          to: { transform: "translateY(0)", opacity: "1", filter: "blur(0)" },
        },
        orbFloat: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.7" },
          "50%": { transform: "translate(-10px, -8px) scale(1.05)", opacity: "1" },
        },
        lineGrow: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
