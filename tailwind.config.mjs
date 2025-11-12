// tailwind.config.js (or .mjs)
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // Ensure these paths correctly point to your files
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // This is the correct place for all theme extensions
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily: {
        Outfit: ['var(--font-outfit)', 'sans-serif'],
        Ovo: ['var(--font-ovo)', 'serif']
      }
    }
  },
  plugins: [], // Optional: add any custom Tailwind plugins here
};

export default config;