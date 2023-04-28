/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layout/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    extend: {
      colors: {
        light: "rgba(var(--colors-light), var(--tw-bg-opacity, 1))",
        dark: "rgba(var(--colors-dark), var(--tw-bg-opacity, 1))",
        light1: "rgba(var(--colors-light1), var(--tw-bg-opacity, 1))",
        dark1: "rgba(var(--colors-dark1), var(--tw-bg-opacity, 1))",
        primary: "rgba(var(--colors-primary), var(--tw-bg-opacity, 1))",
        secondary: "rgba(var(--colors-secondary), var(--tw-bg-opacity, 1))",
        active1: "rgba(var(--colors-active1), var(--tw-bg-opacity, 1))",
        positive: "rgba(var(--colors-positive), var(--tw-bg-opacity, 1))",
        negative: "rgba(var(--colors-negative), var(--tw-bg-opacity, 1))",
        active: "rgba(var(--colors-active), var(--tw-bg-opacity, 1))",
      },
      textColor: {
        primary: "rgba(var(--colors-primary), var(--tw-text-opacity, 1))",
        base: "rgba(var(--colors-text-base), var(--tw-text-opacity, 1))",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
