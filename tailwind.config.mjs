/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["var(--font-outfit)", "sans-serif"],
        Ovo: ["var(--font-ovo)", "serif"],
      }
    },
  },
  plugins: [],
};

export default config;
