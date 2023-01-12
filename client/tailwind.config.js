/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DEB6AB",
        secondary: "#BB6185",
        accent1: "#ECCCB2",
        accent2: "#FDFAF2",
        accent3: "#FDF6E4",
      },
      boxShadow: {
        hover: "inset 0 2px 4px 0 rgb(0 0 0 / 0.25)",
      },
    },
  },
  plugins: [],
};
