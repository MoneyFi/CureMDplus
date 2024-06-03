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
  plugins: [
    function ({ addComponents }) {
      const layout = {
        ".background": {
          background: "#F7F7F7",
          width: "100%",
          minHeight: "100vh",
          padding: 0,
        },
      };
      addComponents(layout);
    },
    function ({ addComponents }) {
      const formLabel = {
        ".label": {
          display: 'flex',
          padding: '.3em',
          width: '100%'
        },
        ".input":{
          border: '1px solid #c7c7c7',
          paddingRight: '1em',
          paddingLeft: '1em',
          paddingTop: ".3em", 
          paddingBottom: ".3em",
          borderRadius: '5px'
        }
      };
      addComponents(formLabel);
    },
  ],
}

