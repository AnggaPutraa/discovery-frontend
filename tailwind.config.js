/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#171717',
        'dark-secondary': '#1F1F1F'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
