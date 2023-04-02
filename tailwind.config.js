/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ['index.html', './**/*.jsx'],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        900: '#121216',
        800: '#191919',
        700: '#191922',
        600: '#23232d',
        500: '#32323d',
        400: '#42424c',
        300: '#52525d',
        200: '#60606c'
      },
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia
    }
  },
  plugins: [],
}

