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
        sky: "#E0F2FE",            // soft premium sky background
        surface: "#FFFFFF",        // clean white cards
        brand: "#0A2540",          // deep fintech navy (primary brand)
        brandSoft: "#38BDF8",      // modern sky blue accent
        textPrimary: "#0F172A",    // strong readable heading color
        textSecondary: "#475569",  // neutral secondary text
        borderSoft: "#E2E8F0",     // subtle UI borders
        success: "#16A34A",        // green success
        danger: "#DC2626",         // red danger
      }

    },
  },
  plugins: [],
};
