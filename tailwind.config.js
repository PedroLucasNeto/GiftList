/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hurricane: ['Hurricane', 'cursive'],
      },
      important: true,
      backgroundColor: {
        darkblue: '#101720',
        darknude: '#DEBCB0',
        lightnude: '#FFF4EF',
        darkbrown: '#BF573F'
      },
      textColor: {
        darkblue: '#101720',
        darknude: '#DEBCB0',
        lightnude: '#FFF4EF',
        darkbrown: '#BF573F'
      },
      maxWidth: {
        '1/2': '50%',
        '1/4': '25%',
        '1/3': '33.33%',
        '3/4': '75%',
        '0/9': '90%',
         
      },
      // backgroundImage: {
      //   'hero-pattern': "url('')",
      //   'footer-texture': "url('')",
      //   'diagnóstico': 'url(./assets/images/diagnostico-organizacional.jpg)',
      // },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio', '@tailwindcss/forms')],
};
