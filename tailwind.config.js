/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
      },
      margin: {
        '68': '18rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
      },
      width: {
        'w-11.5/12' : '95%'
      }
    },
  },
  plugins: [],
}