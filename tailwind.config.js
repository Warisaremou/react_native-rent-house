/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        error: "#cd0707",
        yellow: "#ffe925",
        secondary: {
          50: "#ededee",
          100: "#c7c8cc",
          200: "#acaeb3",
          300: "#868990",
          400: "#6e727a",
          500: "#4a4f59",
          600: "#434851",
          700: "#35383f",
          800: "#292b31",
          900: "#1f2125",
        },
        primary: {
          50: "#eef4fc",
          100: "#cbdcf5",
          200: "#b2cbf0",
          300: "#8fb3e9",
          400: "#79a4e5",
          500: "#588dde",
          600: "#5080ca",
          700: "#3e649e",
          800: "#304e7a",
          900: "#253b5d",
        },
      },
      fontFamily: {
        poppins: ["PoppinsRegular", "sans-serif"],
        poppinsBold: ["PoppinsBold", "sans-serif"],
      },
      container: {
        center: true,
        padding: "0.05rem",
      },
    },
  },
  plugins: [],
};
