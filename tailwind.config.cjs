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
        primary: "#1A9DEB", // legacy values (kept for compatibility)
        secondary: "#F2D23C",
        background: "#FFF6CC",
        navy: "#0B4FA0",
        brand: {
          blue: "#2457c6",
          light: "#63dcc9",
          yellow: "#d7f5ee",
          navy: "#222222",
        },
        ink: {
          base: "#222222",
          muted: "#666666",
          subtle: "#999999",
        },
        surface: {
          base: "#ffffff",
          soft: "#f7f7f7",
          subtle: "#f0f0f0",
        },
        sw: {
          bg: "#f7f7f7",
          card: "#ffffff",
          primary: "#2457c6",
          primaryDark: "#59b78b",
          text: "#000000",
          muted: "#666666",
          border: "#e4e4e4",
          contrast: "#ffffff1a",
          contrastHover: "#00000026",
        },
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        luckiest: ["'Luckiest Guy'", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
      },
      borderRadius: {
        lg: "12px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.06)",
      },
      spacing: {
        section: "4.5rem",
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
