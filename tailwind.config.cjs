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
        red: "#DD0000",
        white: "#FBFBFB",
        bgwhite: "#f5f5f5",
        black: "#111111",
      },
    },
  },
  plugins: [],
}
