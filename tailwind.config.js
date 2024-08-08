/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        primary: "#0916ff",
        secondary: "#000",
      },
      text: {
        primary: "#0916ff",
        secondary: "#000",
      },
      animation: {
        shake: "shake 0.2s ease-in-out 0s 2",
      },
      keyframes: {
        shake: {
          "0%": { marginLeft: "0rem" },
          "25%": { marginLeft: "1rem" },
          "75%": { marginLeft: "-1rem" },
          "100%": { marginLeft: "0rem" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // other plugins...
  ],
};
