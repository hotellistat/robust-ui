module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './docs/**/*.{vue,md}',
  ].filter((item) => item),
  theme: {
    spacing: {
      0: '0px',
      px: '1px',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    extend: {
      minWidth: (theme) => theme('spacing'),
      colors: {
        primary: {
          50: '#eaf2fe',
          100: '#cadcfc',
          200: '#b1c7f9',
          300: '#90acf7',
          400: '#6b89ef',
          500: '#3e6ce5',
          600: '#3050c5',
          700: '#213a9f',
          800: '#1a2b73',
          900: '#0d2162',
        },
        gray: {
          50: '#fbfcfd',
          100: '#f3f5f8',
          200: '#e1e6ec',
          300: '#c1cbd5',
          400: '#8d98a6',
          500: '#575e67',
          600: '#343a42',
          700: '#23282f',
          800: '#191e25',
          900: '#12171d',
        },
        'hs-green': {
          DEFAULT: '#16B27A',
          0: '#149063',
          10: '#14A370',
          20: '#16B27A',
          30: '#1FC187',
          40: '#4ED0A1',
        },

        'hs-yellow': {
          DEFAULT: '#EBB11F',
          0: '#C4900C',
          10: '#D8A114',
          20: '#EBB11F',
          30: '#F8C84F',
          40: '#FFDD84',
        },

        'hs-red': {
          DEFAULT: '#e12669',
          0: '#AD1149',
          10: '#C81A59',
          20: '#e12669',
          30: '#F14B87',
          40: '#FC76A6',
        },

        'hs-violette': {
          DEFAULT: '#BA26FF',
          0: '#830EAD',
          10: '#9F19D6',
          20: '#BA26FF',
          30: '#CC46FF',
          40: '#DC6CFF',
        },

        'hs-cyan': {
          DEFAULT: '#17B5BF',
          0: '#07838B',
          10: '#0E9DA6',
          20: '#17B5BF',
          30: '#3DCCD5',
          40: '#67DEE6',
        },
      },
      boxShadow: {
        widget: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      },
      fontFamily: {
        courier: ['Courier Prime', 'monospace'],
      },
    },
  },
}
