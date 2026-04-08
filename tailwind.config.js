/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        // Legacy (keep for existing pages until they are migrated)
        "primary-light": "#F0F4FF",
        'navy': {
          700: '#2A4078',
          800: '#1B2A4A',
          900: '#1B2A4A',
        },

        // New design system tokens
        primary: {
          DEFAULT: '#0058bd',
          container: '#2771df',
          'fixed-dim': '#d4e3ff',
        },
        'brand-blue': '#4285F4',
        surface: {
          DEFAULT: '#f8f9fa',
          bright: '#ffffff',
          'container-lowest': '#ffffff',
          'container-low': '#f3f4f5',
          container: '#edeeef',
          'container-high': '#e7e8e9',
        },
        'on-surface': {
          DEFAULT: '#191c1d',
          variant: '#424753',
        },
        'text-secondary': '#5F6368',
        'text-tertiary': '#80868b',
        success: '#34A853',
        amber: '#FBBC05',
        'outline-variant': '#c2c6d5',
      },
      borderRadius: {
        card: '16px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        hover: '0px 12px 32px rgba(66, 133, 244, 0.12)',
        float: '0px 8px 64px rgba(25, 28, 29, 0.06)',
        'primary-sm': '0 4px 16px rgba(0, 88, 189, 0.25)',
        'primary-lg': '0 8px 32px rgba(0, 88, 189, 0.35)',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        'section': '160px',
        'section-tablet': '100px',
        'section-mobile': '64px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      },
      fontSize: {
        'display-lg': ['72px', { lineHeight: '1.05', fontWeight: '800', letterSpacing: '-0.03em' }],
        'display-sm': ['48px', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.02em' }],
        headline: ['32px', { lineHeight: '1.25', fontWeight: '700', letterSpacing: '-0.01em' }],
        'title-lg': ['24px', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.65' }],
        body: ['18px', { lineHeight: '1.6' }],
        label: ['14px', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.04em' }],
      },
    },
  },
};
