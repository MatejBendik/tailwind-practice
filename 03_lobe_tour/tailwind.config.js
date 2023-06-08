/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        green: '#04ddb2',
        lightBlack: '#333',
        lightGray: '#767676'
      }
    },
  },
  plugins: [],
}
