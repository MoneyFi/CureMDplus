/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'primary-blue': '#283E94',
      'primary-skyblue': '#4AB0C4',
      'secondary-blue': '#1655A4',
      'secondary-skyblue': '#239FD8',
      'alternate': '#4D4D4D',
    },
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'varela': ['Varela Round', 'sans-serif'],
    }
  },
  plugins: [],
}

