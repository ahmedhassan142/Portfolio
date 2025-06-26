module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        border: 'rgb(var(--border))',
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          light: 'rgb(59 130 246)',
          dark: 'rgb(29 78 216)'
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          light: 'rgb(16 185 129)',
          dark: 'rgb(5 150 105)'
        }
      },
      // Your animations and other config...
    }
  },
  plugins: []
}