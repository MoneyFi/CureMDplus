/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      const layout = {
        ".bglight": {
          background: "#F7F7F7",
          color: "black",
          width: "100%",
          minHeight: "100vh",
        },
      };
      addComponents(layout);
    },
  ],
}

