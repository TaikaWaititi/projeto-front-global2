
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
          600: '#7e3bff',
          700: '#5b2db8',
          800: '#3d1f7a',
          900: '#1f0f3d'
        }
      }
    }
  },
  plugins: [],
};
