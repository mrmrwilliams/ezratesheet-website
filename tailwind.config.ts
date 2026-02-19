import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f0f7',
          100: '#ebe0ef',
          200: '#d6c1df',
          300: '#b994c4',
          400: '#9d6fa8',
          500: '#85588f',
          600: '#735076',
          700: '#604464',
          800: '#503a53',
          900: '#433147',
        },
      },
    },
  },
  plugins: [],
};

export default config;
