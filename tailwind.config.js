/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'whiteColor': '#FFFFFF',
        'greyColor' : '#D2D2D2',
        'blueColor' : '#4363D6',
        
      }
    },
  },
  plugins: [],
}

