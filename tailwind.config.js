/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        ac1: "#579DFF",
        bc1: "#181818",
        bc2: "#2F2F2F",
      }
    },
  },
  plugins: [],
}

