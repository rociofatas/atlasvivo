/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f5f4f1',
        iris: '#6b73ff',
        mint: '#00b894',
        lemon: '#ffd93d',
        ink: '#1f2630'
      },
    },
  },
  plugins: [],
}