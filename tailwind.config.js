import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0E0F11",
        "bg-surface": "#161719",
        "bg-elevated": "#1C1D20",
        "bg-hover": "#222326",
        accent: {
          DEFAULT: "#6C8EF5",
          dim: "rgba(108, 142, 245, 0.10)",
          glow: "rgba(108, 142, 245, 0.06)",
        },
        "tag-green": {
          DEFAULT: "#3ECF8E",
          dim: "rgba(62, 207, 142, 0.10)",
        },
        "text-primary": "#E8E9EC",
        "text-muted": "#9A9CA5",
        "text-subtle": "#5A5C66",
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.07)",
          hover: "rgba(255, 255, 255, 0.14)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
