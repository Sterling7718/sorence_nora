import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgba(0, 14, 16, 1)",
        foregroundlightcyan: "rgba(210, 239, 239, 1)",
        foregroundparchment: "rgba(239, 232, 210, 1)",
        forbentobg: "rgba(0, 40, 46, 1)",
        bgimage: "rgba(0, 14, 16, 1)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "rgba(239, 232, 210, 1)",
            fontFamily: "cursive, sans-serif", // Apply Poppins globally in typography
          },
        },
      },
      fontSize: {
        heroheadingpoppins7rem: "7rem",
        headingedu2_5rem: "2.5rem",
        subheadingpoppins3rem: "3rem",
        subheadingpoppins2rem: "2rem",
        poppins1_5rem: "1.5rem",
        headingpoppins4rem: "4rem",
        poppins1rem: "1rem",
        footerpoppins0_5rem: "0.5rem",
        subheadingpoppins2_5rem: "2.5rem",
      },
      fontWeight: {
        heroheadingpoppins7rem: "700",
        headingedu2_5rem: "700",
        subheadingpoppins3rem: "700",
        subheadingpoppins2rem: "700",
        poppins1_5rem: "700",
        headingpoppins4rem: "700",
        poppins1rem: "700",
        footerpoppins0_5rem: "700",
        subheadingpoppins2_5rem: "700",
      },
      fontFamily: {
        edu: ["cursive", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
