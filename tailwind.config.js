module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', '"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        primary: '#0e344d',
        secondary: '#ebbd9e',
        tertiary: '#C16200',
        quaternary: '#6B9080',
        myPink: '#ED254E',
        // primary: '#0e344d',
        // secondary: '#ebbd9e',
        // tertiary: '#083D77',
        // quaternary: '#FFE19C',
      },
      gridTemplateColumns: {
        base: '1fr 300px',
      },
      transform: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
