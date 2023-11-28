/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      keyframes: {
        fromRight: {
          "0%": { transform: "translateX(250%)" },
          "100%": { transform: "translateX(0)" },
        },
        fromLeft: {
          "0%": { transform: "translateX(-250%)" },
          "100%": { transform: "translateX(0)" },
        },
        fromDown: {
          "0%": { transform: "translateY(250%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fromRight: "fromRight 1s ease-in-out 1",
        fromLeft: "fromLeft 1s ease-in-out 1",
        fromDown: "fromDown 1s ease-in-out 1",
      },
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "light-coral": "#fbc8c3",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
        "shadow-down": "0 4px 8px rgba(0, 0, 0, 0.5);",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
