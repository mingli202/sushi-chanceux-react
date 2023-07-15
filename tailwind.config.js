/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#081c15",
      c1: "#1b4332",
      c2: "#2d6a4f",
      c3: "#40916c",
      c4: "#52b788",
      c5: "#74c69d",
      c6: "#95d5b2",
      c7: "#b7e4c7",
      c8: "#d8f3dc",
    },
    fontFamily: {
      sans: ["Montserrat Alternates", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
