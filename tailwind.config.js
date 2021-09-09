const colors = require('tailwindcss/colors');

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '375px',
      'xl': '1440px'
    },
    colors:{
      'pale-blue': 'hsl(225, 100%, 94%)',
      'bright-blue': 'hsl(245, 75%, 52%)',
      'very-pale-blue': 'hsl(225, 100%, 98%)',
      'desaturated-blue': 'hsl(224, 23%, 55%)',
      'dark-blue': 'hsl(223, 47%, 23%)',
      white: colors.white
    },
    fontFamily:{
      sans: ['Red Hat Display', 'sans-serif'] 
    },
    fontSize:{
      'sm': '13px',
      'base': '16px',
      'xl': '24px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
