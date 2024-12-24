/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/components/**/*.{jsx,tsx}'
  ],
  theme: {
    screens: {
      'md-apl': '834px',
      // => @media (min-width: 640px) { ... }

      'lg-apl': '1068px',
      // => @media (min-width: 1024px) { ... }

      'xl-apl': '1442px',
      // => @media (min-width: 1280px) { ... }
      ...defaultTheme.screens,
    },
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      hovAnimation: {
        pop: 'hover:scale-[1.02] 1s ease',
        shadow: 'hover:shadow-xl 1s ease',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

