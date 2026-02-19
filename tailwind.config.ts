import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8f5fa',
          100: '#f0eaf4',
          200: '#e0d4e8',
          300: '#c7b1d4',
          400: '#a98aba',
          500: '#8b6b9a',
          600: '#7b6b8a',
          700: '#6b5a78',
          800: '#5a4c65',
          900: '#4a3f54',
        },
      },
    },
  },
  plugins: [],
};

export default config;
