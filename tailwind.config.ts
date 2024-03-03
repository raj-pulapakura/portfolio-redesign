import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "super-bounce": {
          "0%": { transform: "scale(1, 1) translateY(0)" },
          "10%": { transform: "scale(1.1, 0.9) translateY(0)" },
          "30%": { transform: "scale(0.9, 1.1) translateY(-100px)" },
          "50%": { transform: "scale(1, 1) translateY(0)" },
          "57%": { transform: "scale(1, 1) translateY(-7px)" },
          "64%": { transform: "scale(1, 1) translateY(0)" },
          "100%": { transform: "scale(1, 1) translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "super-bounce": "bounce 2s ease infinite",
        "fade-in": "fade-in 2s",
      },
    },
  },
  plugins: [],
};
export default config;
