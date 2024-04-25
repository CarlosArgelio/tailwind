/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "azul-claro": "#285b85",
      },
      width: {
        42: "170px",
      },
      screens: {
        tablet: "900px",
      },
    },
  },
  plugins: [],
};
