/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#12101A",
        surface: "#0F0D16",
        panel: "#17131F",
        line: "#2A2436",
        muted: "#8C87A0",
        brand: {
          orange: "#FF7A45",
          pink: "#FF3D8A",
          violet: "#7C3AED",
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(90deg, #FF7A45 0%, #FF3D8A 50%, #7C3AED 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
