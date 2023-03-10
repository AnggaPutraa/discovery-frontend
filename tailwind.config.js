/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-primary': '#F4F4F4',
        'light-secondary': '#FFFFFF',
        'dark-primary': '#171717',
        'dark-secondary': '#1F1F1F',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
