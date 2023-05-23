/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'futura': ['futura-pt-bold', 'sans-serif'],
        'proxima': ['proxima-nova', 'sans-serif']
      },
      colors: {
        background: '#FAFAFA',
        accent: '#EFE9D6',
        blackText: '#030302',
        whiteText: '#E3E3E3',
        footer: '#2D2D2D'

        // #eceae1
        // #528e62
        // #e9b86b
        // #a4c9cb
      }
    },
    screens: {
      handheld: { 'max': '1024px' },
      mobile: { 'max': '640px' },
      thin: { 'max': '340px' }
    },
  },
  plugins: [],
}
