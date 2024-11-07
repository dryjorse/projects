/** @type {import('tailwindcss').Config} */
const twColors = require("tailwindcss/colors");

const colors = {
  black: "rgba(51, 51, 51, 1)",
  purple: "rgba(149, 109, 132, 1)",
  transparent: twColors.transparent,
  white: twColors.white,
  gray: "rgba(130, 130, 130, 1)",
  "light-gray": "rgba(251, 249, 250, 1)",
  "gray-2": "rgba(189, 189, 189, 1)",
  red: "rgba(231, 34, 34, 1)",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    extend: {
      borderRadius: {
        circle: "50%",
      },
      padding: {
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
        100: "100px",
      },
      margin: {
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
      },
      fontSize: {
        14: "14px",
        16: "16px",
        18: "18px",
        24: "24px",
      },
      fontFamily: {
        nunito: "Nunito",
      },
    },
  },
  plugins: [],
};
