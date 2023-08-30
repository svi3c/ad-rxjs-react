import { Config } from "tailwindcss/types/config";

export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      mariner: {
        DEFAULT: "#3367CC",
        50: "#FDFDFE",
        100: "#E7EDF9",
        200: "#BACBEE",
        300: "#8DAAE2",
        400: "#6088D7",
        500: "#3367CC",
        600: "#2952A3",
        700: "#1F3E7A",
        800: "#142952",
        900: "#0A1529",
        950: "#050A14",
      },
    },
  },
  plugins: [],
} satisfies Config;
