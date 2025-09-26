/** @type {import(''tailwindcss'').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 12px 40px rgba(15, 23, 42, 0.08)',
        glow: '0 20px 45px rgba(236, 72, 153, 0.25)',
      },
      dropShadow: {
        dreamy: '0 18px 28px rgba(148, 163, 184, 0.25)',
      },
      backgroundImage: {
        'soft-noise': 'radial-gradient(circle at 20% 20%, rgba(255, 237, 213, 0.35), transparent 45%), radial-gradient(circle at 80% 10%, rgba(186, 230, 253, 0.35), transparent 50%), radial-gradient(circle at 50% 80%, rgba(167, 243, 208, 0.25), transparent 50%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        sparkle: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '50%': { transform: 'scale(1)', opacity: 0.8 },
          '100%': { transform: 'scale(0)', opacity: 0 },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 1 },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        glow: {
          '0%, 100%': { transform: 'scale(0.9)', opacity: 0.35 },
          '50%': { transform: 'scale(1.15)', opacity: 0.8 },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(12px) rotate(0deg)', opacity: 0 },
          '50%': { opacity: 0.6 },
          '100%': { transform: 'rotate(360deg) translateX(12px) rotate(-360deg)', opacity: 0 },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 2.4s ease-in-out infinite',
        sparkle: 'sparkle 2.2s ease-in-out infinite',
        pulseSoft: 'pulseSoft 4s ease-in-out infinite',
        tilt: 'tilt 6s ease-in-out infinite',
        glow: 'glow 6s ease-in-out infinite',
        orbit: 'orbit 9s linear infinite',
      },
    },
  },
  plugins: [],
};