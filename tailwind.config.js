/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,ts,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,mdx}",
      "./components/**/*.{js,ts,jsx,mdx}"
  ],
  theme: {
    fontFamily: {
      primary: "Inter",
      secondary: "Open-sans",
      tertiary: "Volkhov"
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    container: {
      padding: "2rem",
      center: true,
      screens: {
        "2xl": "1400px"
      },
    },
    colors: {
      primary: "#ffff",
      secondary: "#1e1e1e",
      tertiary: "#DE6F19",
    },
    extend: {
      backgroundImage: {
        background: "url('kimmo-deals/public/housebg.jpg')"
      }
    },
  },
  plugins: [],
}

