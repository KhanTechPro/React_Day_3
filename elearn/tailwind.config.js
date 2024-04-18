/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightPink: '#FAE7EA',
        pink: '#EA5972',
      },

      fontFamily: {
        title: 'Poppins',
        text: 'Nunito'
      },

    },
  },
  plugins: [],
}

