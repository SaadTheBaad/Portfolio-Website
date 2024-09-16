const { transform } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F7F7F7",
        secondary: "black",
        tertiary: "#1E1E2E",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {       
        "hero-pattern": "url('/src/assets/herobg/herobg2.jpg')",
      },
      animation: {
        'move-left': 'move-left 30s linear infinite',
      },
      keyframes: {
        "move-left": {
          '0%': {
            transform: 'translateX(60%)'
          },
          '100%': {
            transform: 'translateX(-100%)',
          }
        }
      }
    },
  },
  plugins: [],
};