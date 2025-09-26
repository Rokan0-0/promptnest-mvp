/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode by default
  theme: {
    extend: {
      colors: {
        // Primary dark theme colors from Figma tokens
        primary: {
          background: '#0f172a',
          surface: '#1e293b',
          'secondary-surface': '#334155',
        },
        accent: {
          DEFAULT: '#3b82f6',
          secondary: '#8b5cf6',
        },
        text: {
          primary: '#f8fafc',
          muted: '#94a3b8',
        },
        border: '#334155',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        input: {
          background: '#1e293b',
        },
        switch: {
          background: '#334155',
        },
        ring: '#3b82f6',
        
        // Semantic color mappings for better usage
        background: {
          DEFAULT: '#0f172a',
          secondary: '#1e293b',
          tertiary: '#334155',
        },
        foreground: {
          DEFAULT: '#f8fafc',
          muted: '#94a3b8',
        },
        card: {
          DEFAULT: '#1e293b',
          secondary: '#334155',
        },
        muted: {
          DEFAULT: '#94a3b8',
          foreground: '#64748b',
        },
        popover: {
          DEFAULT: '#1e293b',
          foreground: '#f8fafc',
        },
        primary: {
          DEFAULT: '#3b82f6',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#334155',
          foreground: '#f8fafc',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        success: {
          DEFAULT: '#22c55e',
          foreground: '#ffffff',
        },
        warning: {
          DEFAULT: '#f59e0b',
          foreground: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        // Typography from Figma tokens
        body: ['system-ui', 'sans-serif'],
        heading: ['system-ui', 'sans-serif'],
      },
      spacing: {
        // Custom spacing values from Figma tokens (4px increments)
        '1': '4px',
        '2': '8px', 
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        
        // Component-specific spacing from Figma
        'navbar': '64px', // h-16
        'sidebar': '256px', // w-64 expanded
        'sidebar-collapsed': '64px', // w-16 collapsed
        'bottom-nav': '64px', // h-16
        'section': '24px', // mb-6
      },
      borderRadius: {
        // Custom radii from Figma tokens
        'sm': '8px',
        'md': '10px',
        'lg': '12px',
        'xl': '16px',
        'default': '12px',
      },
      boxShadow: {
        // Enhanced shadows for dark theme
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
        'none': 'none',
        
        // Custom shadows for components
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        'navbar': '0 1px 3px 0 rgba(0, 0, 0, 0.4)',
        'sidebar': '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
      },
      fontSize: {
        // Typography scale from Figma tokens
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.5' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.5' }],
        '4xl': ['2.25rem', { lineHeight: '1.5' }],
        '5xl': ['3rem', { lineHeight: '1.5' }],
        '6xl': ['3.75rem', { lineHeight: '1.5' }],
      },
      fontWeight: {
        // Font weights from Figma tokens
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      lineHeight: {
        // Line heights from Figma tokens
        'tight': '1.25',
        'normal': '1.5',
        'relaxed': '1.75',
      },
      animation: {
        // Custom animations for dark theme
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    // Add any additional plugins here
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
