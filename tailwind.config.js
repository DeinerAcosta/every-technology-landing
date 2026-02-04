/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'every-blue': '#153542',    // Azul Petróleo oficial
        'every-gold': '#E0A458',    // Dorado oficial
        'every-gray': '#D7DFE2',    // Gris oficial
        'every-dark': '#174351',    // Contraste
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}