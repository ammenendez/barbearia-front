import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f6efe7",
        ink: "#171312",
        copper: "#b66a3c",
        olive: "#5d6b53",
        cream: "#fffaf3",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23, 19, 18, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
