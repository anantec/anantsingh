/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        bg: '#0C0C0C',
        card: '#111111',
        border: '#222222',
        muted: '#555555',
        subtle: '#888888',
      },
    },
  },
  plugins: [],
}
