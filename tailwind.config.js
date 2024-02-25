/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        contact: "1fr 10fr",
      },
      colors: {
        "bg-light": "#F6F8FF",
        "bg-dark": "#141D2F",
        "tx-light": "#4B6A9B",
        "tx-dark": "#FFFFFF",
        "card-light": "#FEFEFE",
        "card-dark": "#1E2A47",
        "grey-light": "#697C9A",
        "grey-dark": "#F6F8FF",
        "blue-all": "#0079FF",
        na: "#a4b5cd",
      },
    },
  },
  plugins: [],
};
