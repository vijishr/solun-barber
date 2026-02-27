/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#050509',
          DEFAULT: '#0b0b15',
          light: '#151521',
          gold: '#f5c26b',
        },
      },
      fontFamily: {
        display: ['system-ui', 'sans-serif'],
        body: ['system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(0, 0, 0, 0.55)',
      },
    },
  },
  plugins: [],
}
