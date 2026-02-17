/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lux-black': '#0A0A0A',
        'lux-white': '#F5F0EB',
        'lux-red': '#E63946',
        'lux-gold': '#C9A84C',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
