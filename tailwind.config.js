module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '1/100': '480px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
