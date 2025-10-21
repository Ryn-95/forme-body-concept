/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'nav-black': '#111111',
        'text-gray-light': '#C4C4C4',
        'text-gray-ultra-light': '#B3B3B3',
        'card-bg': '#FAFAFA',
        'divider-gray': '#D3D3D3',
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'extra-wide': '0.3em',
      },
      borderRadius: {
        'card': '24px',
        'nav': '50px',
      },
      boxShadow: {
        'soft': '0 20px 50px rgba(0, 0, 0, 0.1)',
        'nav': '0 10px 40px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        'xl': '24px',
      },
    },
  },
  plugins: [],
}


