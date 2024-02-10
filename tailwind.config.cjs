/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary), 1)",
        secondary: "hsl(var(--secondary), 1)",
      },
      fontFamily: {
        mono: "'JetBrains Mono', monospace",
      },
    },
  },
  plugins: [],
}
