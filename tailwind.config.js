/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    fontSize: {
      sm: "14px",
      md: "15px",
      base: "18px",
      lg: "22px",
      title: ["34px", "1.09"],
      titleLg: ["72px", "1.09"],
    },
    backgroundImage: {
      shortMobile: "url('/assets/bg-shorten-mobile.svg')",
      shortDesktop: "url('/assets/bg-shorten-desktop.svg')",
      boostMobile: "url('/assets/bg-boost-mobile.svg')",
      boostDesktop: "url('/assets/bg-boost-desktop.svg')",
    },
    extend: {
      colors: {
        primary1: "hsl(180, 66%, 49%)",
        primary2: "hsl(257, 27%, 26%)",
        secondary: "hsl(0, 87%, 67%)",
        neutral1: "hsl(0, 0%, 75%)",
        neutral2: "hsl(257, 7%, 63%)",
        neutral3: "hsl(255, 11%, 22%)",
        neutral4: "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
