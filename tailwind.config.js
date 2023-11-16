/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'darkblue': '#111827',
      },
      textColor: {
        'darkblue': '#111827',
      },
      maxWidth: {
        '1/2': '50%',
        '1/4': '25%',
        '1/3': '33.33%',
        '3/4': '75%',
        '0/9': '90%',

      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio', '@tailwindcss/forms'),
  ],
}

