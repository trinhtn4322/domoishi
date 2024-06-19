/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './public/index.hml'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      width: {
        '1100': '1100px'
      },
      backgroundColor: {
        primary: '#040031'
      },
      maxWidth:{
        '600': '600px'
      }, 
      screens: {
        'desktop_max' : "1920px"
      },
    },
  },
  
  plugins: [],
}