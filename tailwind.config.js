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
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio', '@tailwindcss/forms'),
  ],
}

