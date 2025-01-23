/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#61DBFB'
        },
        orange: {
          50: '#fea632',
          350: '#ff3a12'

        }
      },

      gridTemplateColumns: {
        'grid-3': '1fr 1fr'
      }
    },
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
    },
  },
  plugins: [],
})

