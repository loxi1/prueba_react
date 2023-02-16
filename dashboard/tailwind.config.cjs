/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      primary: "#EE6C4D",
      secundary: {
        100: "#1E1F25",
        900: "#131517" 
      }
    },
  },
  plugins: [],
}