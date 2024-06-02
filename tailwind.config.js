/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: 'hsl(231, 69%, 60%)',
          red: 'hsl(0, 94%, 66%)'
        },
        neutral: {
          blue: {
            100: 'hsl(229, 8%, 60%)',
            200: 'hsl(229, 31%, 21%)'
          }
        }
      },
      fontFamily: {
        body: ['Rubik']
      }
    },
  },
  plugins: [],
}