/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red-color": "var(--primary-red-color)",
        "primary-white-color": "var(--primary-white-color)",
        "primary-black-color": "var(--primary-black-color)",
      },
      rotate: {
        348: "348deg",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      minHeight: {
        4: "500px",
      },
    },
  },
  plugins: [],
};
