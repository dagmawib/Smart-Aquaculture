import { join } from "path";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    join(__dirname, "src/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "src/app/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "src/components/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007AFF", // Blue-800
        secondary: "#3b82f6", // Blue-500
        accent: "#2563eb", // Blue-600
        background: "#f3f4f6", // Gray-100
        textPrimary: "#111827", // Gray-900
        textSecondary: "#6b7280", // Gray-500
      },
    },
  },
  plugins: [],
};

export default config;
