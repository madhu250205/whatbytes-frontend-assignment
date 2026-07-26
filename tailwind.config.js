/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1e4976",
          dark: "#14304f",
          darker: "#0e2440",
          light: "#2563a8",
        },
      },
    },
  },
  plugins: [],
};
