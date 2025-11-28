/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",      // Deepest black
          dark: "#0A0A0A",       // Slightly lighter black for cards
          pink: "#EC4899",       // Main Pink
          rose: "#E11D48",       // Darker Rose for gradients
          muted: "#94A3B8",      // Muted text color
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};