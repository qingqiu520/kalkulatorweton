import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#120d08",
        panel: "#1d1610",
        edge: "#33281c",
        accent: "#e8b84b",
        accent2: "#c98a2d",
      },
    },
  },
  plugins: [],
};
export default config;
