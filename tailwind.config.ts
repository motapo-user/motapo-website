import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        motapo: {
          black: "#0A0A0A",
          gold: "#C9A227",
          green: "#1E7A4D",
          soft: "#E9E4D8"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.25)"
      }
    }
  },
  plugins: []
};

export default config;
