/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        clrLightGrey:"#DFDFDF",
        clrpricingBg:"#F5F5F5",
        clrFrom:"#FFC593",
        clrVia:"#BC7198",
        clrTo:"#5A77FF",
      }
    },
  },
  plugins: [],
}

