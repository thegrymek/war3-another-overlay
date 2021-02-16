const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './**/*.js',
    './**/*.jsx',
    './**/*.ts',
    './**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      white: colors.white,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      purple: colors.purple,
      yellow: colors.yellow,
      orange: colors.orange,
      gray: colors.gray,
      pink: colors.pink,
      brown: colors.brown,
      teal: colors.teal,
      lime: colors.lime,
      emerald: colors.emerald,
    },
  },
  variants: {},
  plugins: [],
};
