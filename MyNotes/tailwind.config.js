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
        bgDarkFilter: "#000000ff",
        bgNavDark: "#151515",
        bgDark: "#202020",
        bgNormal: "#282828",
        bgColorDark: "#4F5951",
        bgColorLight: "#7B8C81",
        bgColorLighter: "#637365",
        bgColorLightest: "#737065",
        bgHoverDark: "#40404050",
        textLight: "#f4f4f4",
        textGray: "#E1E1E1",
        textNormal: "#dddddd",
        textNofile: "#707070",
        textDarker: "#606060",
        textDark: "#30303060",
        primaryColor: "#A69D24",
      },
    },
  },
  plugins: [],
};
