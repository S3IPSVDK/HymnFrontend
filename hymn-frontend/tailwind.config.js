module.exports = {
  content: [
    // Define paths to your source files
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./assets/fonts/Roboto/**/*/{css,woff,woff2,tff}"
  ],
  theme: {
    extend: {
      colors: {
        'SCGreen': '#C4D1CE',
        'TestBlue': '#06293D',
        'SCPink': '#DCC8C2',
      },
      fontFamily: {
        'roboto': ['Roboto-Regular', 'sans-serif'],
        'roboto-italic': ['Roboto-italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};