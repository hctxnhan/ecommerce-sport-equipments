/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        navbar: 'var(--navbar-height)',
        remainScreen: 'calc(100vh - var(--navbar-height))',
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
      gridTemplateColumns: {
        shop: '300px 1fr',
      },
      minHeight: {
        remainScreen: 'calc(100vh - var(--navbar-height))',
      },
    },
    fontFamily: {
      archivo: ['Archivo', 'sans-serif'],
    },
    screens: {
      '2xl': '1536px',
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      xs: { max: '450px' },
    },
  },
  plugins: [],
};
