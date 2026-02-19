import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        farm: {
          50: '#f6f9f4',
          100: '#e8f0e4',
          200: '#d1e1c9',
          300: '#aecba1',
          400: '#86ad73',
          500: '#6b8e5e',
          600: '#4a7c59',
          700: '#3d6148',
          800: '#334e3b',
          900: '#2b4132',
        },
        barn: {
          50: '#fdf8ef',
          100: '#f9eed4',
          200: '#f2d9a5',
          300: '#d4a853',
          400: '#c99635',
          500: '#b07d1e',
          600: '#8b6914',
          700: '#6f5112',
          800: '#5c4215',
          900: '#4e3815',
        },
        egg: {
          50: '#fffbf0',
          100: '#fff4d6',
          200: '#ffe8ad',
          300: '#ffd679',
          400: '#ffc043',
          500: '#f5a623',
          600: '#db8a0f',
          700: '#b56a0c',
          800: '#935311',
          900: '#794513',
        },
      },
    },
  },
  plugins: [],
}
export default config
