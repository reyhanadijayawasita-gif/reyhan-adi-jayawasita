import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0b0f14",
          50: "#f5f6f7",
          100: "#e7e9ec",
          200: "#cfd3d9",
          300: "#a9b0ba",
          400: "#7c8695",
          500: "#5c6674",
          600: "#47505c",
          700: "#39404a",
          800: "#20242b",
          900: "#14171c",
          950: "#0b0f14",
        },
        gold: {
          DEFAULT: "#a9822f",
          50: "#faf6ec",
          100: "#f3e9cc",
          200: "#e6d19c",
          300: "#d7b667",
          400: "#c69f45",
          500: "#a9822f",
          600: "#8a6725",
          700: "#6c4f1f",
          800: "#57411d",
          900: "#49371c",
        },
        paper: "#fbfaf7",
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "72ch",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(11,15,20,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,15,20,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
