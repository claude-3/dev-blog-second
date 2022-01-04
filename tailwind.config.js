module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', '"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        myPrimary: '#2D3142',
        mySecondary: '#4F5D75',
        // myWhite: '#fefffa',
        // myWhite: '#fffef8',
        myWhite: '#FAFFFD',
        myBlack: '#342E37',
        myBrown: '#854D27',
        myOrange: '#fa9f42',
        myGray: '#f0f5f3',
        myRed: '#de6b48',
        myBrownGold: '#756350',

        myBrownLight: '#8C7051',
        myNavy: '#0D3B66',
        myBlue: '#E8E9EB',
      },
      gridTemplateColumns: {
        base: '1fr 300px',
        top: '540px 1fr',
      },
      transform: ['hover', 'focus'],
      fontSize: {
        // tsm: '15.625vw',
        // tmd: '17.708vw',
        // tlg: '12rem',
        // txl: '14rem',
        tsm: '15.625vw',
        tmd: '17.708vw',
        tlg: '6rem',
        txl: '4rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
