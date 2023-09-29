/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        // 'bangla' : ['SolaimanLipi','sans-serif']
        bangla : ['Noto Serif Bengali','serif']
      }
    },
  },
  plugins: [

  ],
}