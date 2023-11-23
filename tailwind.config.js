/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "sky": "#4472C4",
        "earth": "#843C0C",
        "light":"#FFFFFF",
        "dark":"#000000",
        "card-white":"#d9d9d9"
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },

}
