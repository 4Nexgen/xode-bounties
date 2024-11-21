import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "theme-blue-dark": "#000a3a",
        "theme-default": "#D2146E",
        "theme-accent": "#f73164",
        "theme-border": "#161e48",
      },
    },
  },
  plugins: [],
} satisfies Config;
