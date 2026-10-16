/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        spider: {
          dark: '#030712',
          navy: '#060d1f',
          midnight: '#0a122c',
          red: '#e62429',
          'red-bright': '#ff1f2d',
          'red-glow': '#ff3344',
          blue: '#0070f3',
          'blue-bright': '#00d4ff',
          'blue-glow': '#0ff',
          glass: 'rgba(10, 18, 44, 0.75)',
          'glass-border': 'rgba(0, 212, 255, 0.25)',
          gold: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'Cinzel', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'spider-red': '0 0 25px -5px rgba(230, 36, 41, 0.5), 0 0 10px -2px rgba(230, 36, 41, 0.3)',
        'spider-blue': '0 0 25px -5px rgba(0, 212, 255, 0.5), 0 0 10px -2px rgba(0, 212, 255, 0.3)',
        'spider-dual': '0 0 30px -5px rgba(230, 36, 41, 0.35), 0 0 30px -5px rgba(0, 212, 255, 0.35)',
        'hud-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'web-spin': 'spin 40s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        'glow-pulse': {
          '0%': { filter: 'drop-shadow(0 0 8px rgba(230, 36, 41, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
