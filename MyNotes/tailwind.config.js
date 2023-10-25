/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "560px",
      md: "768px",
      lg: "1060px",
      xl: "1200px",
      xxl: "1440px",
      xxxl: "1600px",
      xxxxl: "2000px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        textLight: "#f4f4f4",
        textSemiLight: "#dddddd",
        textNormal: "#707070",
        textSemiDark: "#404040",
        textDark: "#202020",
      },
    },
  },
  plugins: [],
};
