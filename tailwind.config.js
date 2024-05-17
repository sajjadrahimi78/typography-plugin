/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/js/theme.js"],
  theme: {
    extend: {
      width: {
        22: "5.5rem",
      },
      inset: {
        18: "4.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
