/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#5542F6",
        // highlight: "#eae8fb",
        // bgGray: "#fbfafd",
        primary: "#dc2626",
        highlight: "#1e1b4b",
        bgGray: "#111827",
      },
    },
  },
  plugins: [],
};
