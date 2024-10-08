/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pink: "#E09796",
        grey: "#8d8d8d",
        light: "#F9F9F9",
        'pink-hover': "rgb(237 150 149)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        playball: ["Playball", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      backgroundImage: {
        'banner': "url(../assets/Background.png)"
      },
      height: {
        'screen-75': '75vh',
      },
      width: {
        'screen-75': '75vw',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}