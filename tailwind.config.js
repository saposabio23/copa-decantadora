/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      titles: ["EB Garamond", "serif"],
    },
    boxShadow: {
      center: "0 0 10px 0 #e5e5e58a",
    },
  },
  plugins: [],
};
