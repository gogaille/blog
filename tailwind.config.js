module.exports = {
  plugins: [require("@tailwindcss/typography")],
  purge: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#FFFFFF", // WHITE
        secondary: "#FEFCFA", // CREAM
        tertiary: "#F6F2F0", // CREAM DARK
      }),
      colors: {
        // Brand color - nominal
        "accent-1": "#10069F", // BLUE
        "accent-2": "#211747", // BLUE DARK
        "accent-3": "#E03C31", // RED
        "accent-4": "#A47F74", // BROWN
        // Brand color - roll over
        "accent-roll1": "#0D0762", // BLUE OVER
        "accent-roll2": "#C02F25", // RED OVER
        "accent-roll3": "#86665E", // BROWN OVER
        //
        "button-tertiary-hover": "rgba(255, 255, 255, 0.1)",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "0em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      borderColor: (theme) => ({
        tertiary: "#DADADA",
        "tertiary-hover": "rgba(255, 255, 255, 0.1)",
      }),
      textColor: {
        primary: "#211747", // BLUE DARK
        secondary: "#807B96", // GREY
        tertiary: "#BCB9C8", // GREY LIGHT
        "primary-inverted": "#FFFFFF", // WHITE
        "secondary-inverted": "rgba(255, 255, 255, 0.8)", // WHITE-80
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        "belly-display": "'Bely Display', serif",
        "public-sans": "'Public Sans', sans-serif",
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "'Public Sans', sans-serif",
            h1: { fontWeight: 700 },
            h2: { fontWeight: 700 },
            h3: { fontWeight: 700 },
            h4: { fontWeight: 400 },
            h5: { fontWeight: 400 },
            h6: { fontWeight: 400 },
          },
        },
      },
    },
  },
};
