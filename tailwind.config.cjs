/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A9DEB", // brand blue
        secondary: "#F2D23C", // sunny yellow
        background: "#FFF6CC", // soft cream
        navy: "#0B4FA0", // supporting navy
        brand: {
          blue: "#1A9DEB",
          light: "#6ED0FF",
          yellow: "#F2D23C",
          navy: "#0B4FA0",
        },
        ink: {
          base: "#16314F",
          muted: "#3A5270",
          subtle: "#7C8CA5",
        },
        surface: {
          base: "#FFFFFF",
          soft: "#F5FBFF",
          subtle: "#EDF4FF",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
