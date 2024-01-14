/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}, ./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      titles: ["Serif", "serif"],
    },
    boxShadow: {
      center: "0 0 20px 0 #e5e5e58a",
    },
  },
  plugins: [],
};
