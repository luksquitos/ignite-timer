/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-dark":"var(--green-dark)",
        "green":"var(--green)",
        "green-light":"var(--green-light)",
        "red-dark":"var(--red-dark)",
        "red":"var(--red)",
        "yellow":"var(--yellow)",
        "gray1":"var(--gray1)",
        "gray2":"var(--gray2)",
        "gray3":"var(--gray3)",
        "gray4":"var(--gray4)",
        "gray5":"var(--gray5)",
        "gray6":"var(--gray6)",
        "gray7":"var(--gray7)",
      },
      fontFamily: {
        "mono-r": ["Roboto Mono", "sans-serif"]
      }
    },
  },
  plugins: [],
}