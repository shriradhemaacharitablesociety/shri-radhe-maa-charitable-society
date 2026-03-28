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
        cream: {
          DEFAULT: "#FAF7F2",
          dark: "#F3EDE4",
        },
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
          50: "#FFF0F2",
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
          100: "#F5EDE0",
          200: "#E8DDD0",
          300: "#D4C8B8",
          400: "#B8A892",
          500: "#9C8B74",
          600: "#8B7355",
          700: "#6B563F",
          800: "#3D2E1F",
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
        "slide-reveal": "slideReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "line-grow": "lineGrow 2s cubic-bezier(0.16, 1, 0.3, 1) infinite",
      },
      keyframes: {
        slideReveal: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
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
