/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: "#1E3A8A", // Deep Blue
          hover: "#162C6B",   // Darker shade for hover
          light: "#4C6BB5",   // Lighter shade for highlights
        },
        secondary: {
          DEFAULT: "#9B1B61", // Rich Magenta
          hover: "#7A154C",   // Darker shade for hover
          light: "#C54B8C",   // Lighter shade for highlights
        },
        background: {
          DEFAULT: "#F3F6FB", // Very Light Blue Gray
          darker: "#E1E7F5",  // Slightly darker for contrast
          card: "#FFFFFF",    // White for cards
        },
        text: {
          primary: "#0B1A3F",   // Dark Navy
          secondary: "#637394", // Medium Gray Blue
          light: "#FFFFFF",     // White text
        },
        accent: {
          light: "#E99AB7",     // Soft Pink
          dark: "#6A2C6F",      // Plum Purple
          hover: "#562459",     // Darker plum for hover
        },
        error: {
          DEFAULT: "#D7263D",   // Crimson Red
          light: "#FF3B55",     // Lighter shade for highlights
          dark: "#B01F32",      // Darker shade for hover
        },
        border: {
          DEFAULT: "#E2E8F0",
          active: "#1E3A8A",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      boxShadow: {
        'primary': '0 4px 14px 0 rgba(30, 58, 138, 0.25)',
        'secondary': '0 4px 14px 0 rgba(155, 27, 97, 0.25)',
        'accent': '0 4px 14px 0 rgba(106, 44, 111, 0.25)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} 