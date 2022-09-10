/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        maroon: "#ff254d ",
        maroonDark: "#a91340",
        greenDark: "#00dab2",
        green: "#56ecbf",
        blue: "#0072ff",
        orange: "#ff512f",
        green: "#38ef7d",
        purple: "#e100ff",
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('daisyui'),
  ],
}
