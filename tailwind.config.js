/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          20: "#F8F4EB",
          50: "#EFE6E6",
          100: "#DFCCCC",
          500: "#5E0000",
        },
        primary: {
          100: "#FFE1E0",
          300: "#FFA6A3",
          500: "#FF6B66",
        },
        secondary: {
          400: "#FFCD5B",
          500: "#FFC132",
        },
        yellow: {
          500: "#FFC837",
        },
        red: {
          500: "#FF616A",
        },
      },
      backgroundImage: {
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      },
      // backgroundImage: (theme) => ({

      // }),
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
