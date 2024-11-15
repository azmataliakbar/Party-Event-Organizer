import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      extend: {
        fontSize: {
          'xs-sm': '0.125rem',  // Custom font size for very small text
          '15px': '15px',         // Custom size for testing
        },
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
