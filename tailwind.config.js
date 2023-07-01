/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./node_modules/flowbite/**/*.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

