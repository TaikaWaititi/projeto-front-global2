
module.exports = {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.css"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f6f3ff',
          100: '#efe8ff',
          200: '#e6d9ff',
          300: '#d8bfff',
          400: '#c495ff',
          500: '#a36bff',
          600: '#955cffff',
          700: '#9167e6ff',
          800: '#8f69dbff',
          900: '#8a62d4ff'
        }
      }
    }
  },
  plugins: [],
};
