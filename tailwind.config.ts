import type { Config } from "tailwindcss";

// Макет сделан на холсте 1440px, контент 1200px — размеры в компонентах взяты оттуда 1 в 1.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#e83d07", dark: "#c93405" },
        ink: "#101d23",
        soft: "#f2f6f9",
        line: "#e5e9ee",
        muted: "#6f7a80",
      },
      fontFamily: { sans: ["var(--font-montserrat)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
