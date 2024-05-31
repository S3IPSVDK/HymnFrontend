module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/fonts/Roboto/**/*.{css,woff,woff2,ttf}"
  ],
  theme: {
    extend: {
      colors: {
        'darkPurple': '#1A1B27',
        'lightLavender': '#A89DF7',
        'deepLavender': '#7B61FF',
        'darkLavender': '#5A47BF',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-italic': ['Roboto Italic', 'sans-serif'],
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, 
        },
      },
      animation: {
        wave: 'wave 1s infinite',
      },
    },
  },
  plugins: [],
};
