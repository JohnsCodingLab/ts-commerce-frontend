import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        testcolor: "#00ff00",
        // ✅ Custom Dark Palette
        dark: {
          900: "#050505",
          800: "#0f111a",
          700: "#1b1e2e",
        },

        neon: {
          purple: "#9D00FF",
          blue: "#00F0FF",
          orange: "#FF5C00",
          pink: "#FF00E5",
        },

        primary: "#9D00FF",
        secondary: "#00F0FF",
        accent: "#FF5C00",
        surface: "#1b1e2e",
      },

      boxShadow: {
        "neon-purple": "0 0 15px rgba(157, 0, 255, 0.3)",
        "neon-blue": "0 0 15px rgba(0, 240, 255, 0.3)",
        glass:
          "inset 0 1px 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.8)",
      },

      fontFamily: {
        lato: ["Lato", "sans-serif"],
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
