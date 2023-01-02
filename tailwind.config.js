/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",

        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },

      colors: {
        "web-red": "#BC1A45",
        "web-melon": "#FFD369",
        "web-grey": "#DDDDDD",
        "web-white": "#F7F7F7",
      },

      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
