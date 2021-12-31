module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'avogg': '#97A6F0',
        'avogg-heavy': '#7A87C6'
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
