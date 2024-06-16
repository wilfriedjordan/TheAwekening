/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      montserat:['Shrikhand','serif'],
      ptserif:['PT+Serif','sans-serif'],
    },
    extend: {
      fontSize:{
        '10xl': '10rem',
      },
      width:{
        '99':'500px',
        '100':'550px',
        '97':'27rem'

      }
    },
  },
  plugins: [],
}

