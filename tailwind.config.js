/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,ts,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,mdx}",
      "./components/**/*.{js,ts,jsx,mdx}"
  ],
  theme: {
    container: {
      padding: "2rem",
      center: true,
      screens: {
        "2xl": "1400px"
      },
    },
    extend: {
      backgroundImage: {
        background: "url('kimmo-deals/public/housebg.jpg')"
      }
    },
  },
  plugins: [],
}

