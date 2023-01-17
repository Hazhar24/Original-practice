/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url(https://www.zarinpal.com/assets/images/wave.svg?4a663924967723420f5c4cb59d15959e)",
      },
    },
  },
  plugins: [],
}