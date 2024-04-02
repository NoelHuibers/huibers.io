import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        redN: "#ff3e55",
        blueN: "#021d45",
        lightBlueN: "#217aff",
      },
    },
  },
  plugins: [],
} satisfies Config;
