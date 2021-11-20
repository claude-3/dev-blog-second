module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', '"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        myBlack: '#362316',
        // myBlack: '#261C15',
        myBrown: '#492C1D',
        myBrownLight: '#8C7051',
        myGray: '#F7F7F2',
        myOrange: '#F05D23',
        myNavy: '#005E7C',
        myBlue: '#0094C6',
      },
      gridTemplateColumns: {
        base: '1fr 300px',
        top: '540px 1fr',
      },
      transform: ['hover', 'focus'],
      fontSize: {
        tsm: '15.625vw',
        tmd: '17.708vw',
        tlg: '12rem',
        txl: '14rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
