/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '1240/664': '1240 / 664',
        '597/262': '597 / 262',
        '597/134': '597 /134',
        '576/262': '576 / 262',
        '576/134': '576 / 134',
        '673/238': '673 / 238',
        '673/134': '673 / 134',
      },
      backgroundColor: {
        online: "var(--theme-color-bg-green)",
      },
      colors: {},
      fontSize: {
        sm: [
          "0.875rem",
          {
            lineHeight: "1.375rem",
          },
        ],
      },
      textColor: {
        secondary: "var(theme-color-text-secondary)",
      },
    },
  },
  plugins: [],
};
