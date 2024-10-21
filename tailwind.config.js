/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {colors: {
      robson:"var(--background)"
    }},
  },
  plugins: [],
}