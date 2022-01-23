const colors = require('tailwindcss/colors')


module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './docs/**/*.{vue,md}'],
  theme: {
    extend: {
      minWidth: theme => theme('spacing'),
      colors: {
        primary: {
          50: '#EDF0FD',
          100: '#DFE4FA',
          200: '#BDC9F4',
          300: '#A4B5F2',
          400: '#7F97EE',
          500: '#4C6DE6',
          600: '#3B5DDC',
          700: '#314EBB',
          800: '#2540A3',
          900: '#253A82'
        },
        gray: colors.gray,

      },
      fontFamily: {
        "courier": ['Courier Prime', 'monospace']
      }
    }
  },
  plugins: [],
}
