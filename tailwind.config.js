/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['"Geist"', 'sans-serif'],
      },
      colors: {
        sky: "#CFE9FB",
        surface: "#FFFFFF",
        brand: "#04172C",
        brandSoft: "#6CB6E8",
        textPrimary: "#0B1F33",
        textSecondary: "#5B728A",
        borderSoft: "#E1EEF7",
        success: "#16A34A",
        danger: "#DC2626",
      }
    },
  },
  plugins: [],
};
