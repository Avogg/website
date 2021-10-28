module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'avogg': '#97A6F0'
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
