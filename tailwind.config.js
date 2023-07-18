/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mars-pattern': "url('/images/mars.jpg')",
      },
    },
  },
  plugins: [],
}
