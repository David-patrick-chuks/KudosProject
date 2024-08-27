/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#1C1C1C",
        'secondary': "#1CA556",
        "tertiary": "#494949",
        "primary-dark": "#34432D",
        'primary-gray': '#F4F4F4',
        'intro-green': '#1CA556',
        'card-bg': '#5D6957'
      }
    },
  },
  plugins: [],
}