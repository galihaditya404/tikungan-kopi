import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fore: {
          primary: "#006041",    // Fore Green (Deep)
          secondary: "#357B49",  // Fore Nature (Light)
          accent: "#D4E9D7",     // Soft Green/Mint
          bg: "#FFFFFF",
          surface: "#F6F7F9",    // Light Grey
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          800: "#1F2937",
          900: "#111827",
        }
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
};
export default config;
