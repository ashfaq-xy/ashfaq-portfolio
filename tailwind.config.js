/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0A0A0F",
        "bg-surface": "#12121A",
        "bg-elevated": "#1A1A24",
        accent: {
          DEFAULT: "#6C8EF5",
          dim: "rgba(108, 142, 245, 0.10)",
        },
        "tag-green": {
          DEFAULT: "#3ECF8E",
          dim: "rgba(62, 207, 142, 0.10)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'SF Mono'", "'Fira Code'", "monospace"],
      },
    },
  },
  plugins: [],
};
