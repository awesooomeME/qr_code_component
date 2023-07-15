/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      white : 'hsl(0, 0%, 100%)',
      light_gray : 'hsl(212, 45%, 89%)',
      grayish_blue : 'hsl(220, 15%, 55%)',
      dark_blue : 'hsl(218, 44%, 22%)'
    }
  },
  plugins: [],
}
