/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#146356",
        secondary: "#ffa17a",
        tertiary: "#a3da8d",
        body: "#575757",
        heading: "#0e0e0e",
        border: "#f3eada",
        "white-100": "#fafafa",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bghero.jpeg')",
      },
    },
  },
  plugins: [],
}

