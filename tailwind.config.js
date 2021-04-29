const { colors } = require('tailwindcss/defaultTheme')

const BASE_FONT_SIZE = 16

const pxToRem = (px, base) => `${px / base}rem`

module.exports = {
  purge: {
    content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    options: {
      blocklist: ['test.tsx']
    }
  },
  darkMode: false,
  theme: {
    spacing: {
      px: '1px',
      0: '0',
      1: pxToRem(5, BASE_FONT_SIZE),
      2: pxToRem(10, BASE_FONT_SIZE),
      3: pxToRem(15, BASE_FONT_SIZE),
      4: pxToRem(20, BASE_FONT_SIZE),
      5: pxToRem(25, BASE_FONT_SIZE),
      6: pxToRem(30, BASE_FONT_SIZE),
      7: pxToRem(35, BASE_FONT_SIZE),
      8: pxToRem(40, BASE_FONT_SIZE),
      9: pxToRem(45, BASE_FONT_SIZE),
      10: pxToRem(50, BASE_FONT_SIZE),
      11: pxToRem(55, BASE_FONT_SIZE),
      12: pxToRem(60, BASE_FONT_SIZE),
      13: pxToRem(65, BASE_FONT_SIZE),
      14: pxToRem(70, BASE_FONT_SIZE),
      15: pxToRem(75, BASE_FONT_SIZE),
      16: pxToRem(80, BASE_FONT_SIZE),
      17: pxToRem(85, BASE_FONT_SIZE),
      18: pxToRem(90, BASE_FONT_SIZE),
      19: pxToRem(95, BASE_FONT_SIZE),
      20: pxToRem(100, BASE_FONT_SIZE),
      21: pxToRem(105, BASE_FONT_SIZE),
      22: pxToRem(110, BASE_FONT_SIZE),
      23: pxToRem(115, BASE_FONT_SIZE),
      24: pxToRem(120, BASE_FONT_SIZE),
      25: pxToRem(125, BASE_FONT_SIZE),
      26: pxToRem(130, BASE_FONT_SIZE),
      27: pxToRem(135, BASE_FONT_SIZE),
      28: pxToRem(140, BASE_FONT_SIZE),
      29: pxToRem(145, BASE_FONT_SIZE),
      30: pxToRem(150, BASE_FONT_SIZE),
      32: pxToRem(160, BASE_FONT_SIZE),
      33: pxToRem(165, BASE_FONT_SIZE),
      34: pxToRem(170, BASE_FONT_SIZE),
      36: pxToRem(180, BASE_FONT_SIZE),
      37: pxToRem(185, BASE_FONT_SIZE),
      38: pxToRem(190, BASE_FONT_SIZE),
      39: pxToRem(195, BASE_FONT_SIZE),
      40: pxToRem(200, BASE_FONT_SIZE),
      42: pxToRem(210, BASE_FONT_SIZE),
      44: pxToRem(220, BASE_FONT_SIZE),
      45: pxToRem(225, BASE_FONT_SIZE),
      46: pxToRem(230, BASE_FONT_SIZE),
      47: pxToRem(235, BASE_FONT_SIZE),
      48: pxToRem(240, BASE_FONT_SIZE),
      50: pxToRem(250, BASE_FONT_SIZE),
      51: pxToRem(255, BASE_FONT_SIZE),
      52: pxToRem(260, BASE_FONT_SIZE),
      53: pxToRem(265, BASE_FONT_SIZE),
      54: pxToRem(270, BASE_FONT_SIZE),
      55: pxToRem(275, BASE_FONT_SIZE),
      57: pxToRem(285, BASE_FONT_SIZE),
      59: pxToRem(295, BASE_FONT_SIZE),
      60: pxToRem(300, BASE_FONT_SIZE),
      62: pxToRem(310, BASE_FONT_SIZE),
      66: pxToRem(330, BASE_FONT_SIZE),
      68: pxToRem(340, BASE_FONT_SIZE),
      69: pxToRem(345, BASE_FONT_SIZE),
      70: pxToRem(350, BASE_FONT_SIZE),
      73: pxToRem(365, BASE_FONT_SIZE),
      75: pxToRem(375, BASE_FONT_SIZE),
      80: pxToRem(400, BASE_FONT_SIZE),
      81: pxToRem(405, BASE_FONT_SIZE),
      84: pxToRem(420, BASE_FONT_SIZE),
      88: pxToRem(440, BASE_FONT_SIZE),
      90: pxToRem(450, BASE_FONT_SIZE),
      100: pxToRem(500, BASE_FONT_SIZE),
      107: pxToRem(535, BASE_FONT_SIZE),
      160: pxToRem(800, BASE_FONT_SIZE)
    },
    fontFamily: {
      sans: ['Lars', 'sans-serif'],
      serif: ['Domaine Text', 'serif'],
      display: ['Domaine Text', 'serif'],
      body: ['Lars', 'sans-serif']
    },
    colors: {
      primary: {
        lighter: '#a2c0b7',
        default: '#83ac9f',
        dark: '#659787'
      },
      secondary: '#1f2837',
      thirdly: '#f8faff',
      quaternary: '#f4f3f2',
      quinary: '#6a6a6a',
      senary: '#d0a86e',
      septenary: '#5a6679',
      octonary: '#979797',
      denary: '#c4c4c4',
      danger: '#dc3545',
      black: colors.black,
      white: colors.white,
      brown: '#1a100f',
      blue: '#c3daff',
      yellow: '#ffeac6',
      transparent: 'transparent',
      gray: {
        100: '#fafafa',
        200: '#e0e0e0',
        300: '#c7c7c7',
        400: '#adadad',
        500: '#949494',
        600: '#7a7a7a',
        700: '#616161',
        800: '#474747',
        900: '#2e2e2e'
      }
    },
    fill: (theme) => ({
      white: theme('colors.white'),
      black: theme('colors.black'),
      brown: theme('colors.brown'),
      yellow: theme('colors.yellow'),
      primary: theme('colors.primary.default'),
      secondary: theme('colors.secondary'),
      thirdly: theme('colors.thirdly')
    }),
    borderRadius: {
      none: '0',
      sm: pxToRem(5, BASE_FONT_SIZE),
      DEFAULT: pxToRem(10, BASE_FONT_SIZE),
      md: pxToRem(15, BASE_FONT_SIZE),
      lg: pxToRem(20, BASE_FONT_SIZE),
      xl: pxToRem(25, BASE_FONT_SIZE),
      '2xl': pxToRem(30, BASE_FONT_SIZE),
      full: '50%'
    },
    extend: {
      fontSize: {
        '3.5xl': '2rem'
      },
      keyframes: {
        'flip-in-x': {
          '0%': {
            transform: 'perspective(1000px) rotate3d(1, 0, 0, 90deg)',
            opacity: 0
          },
          '50%': {
            opacity: 1
          },
          '100%': {
            transform: 'perspective(1000px)'
          }
        },
        'slide-in-left': {
          from: {
            transform: 'translateX(-100%)'
          },
          to: {
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'flip-in-x': 'flip-in-x .3s ease-in-out',
        'slide-in-left': 'slide-in-left .5s ease-in-out'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['last', 'first'],
      margin: ['last'],
      opacity: ['hover'],
      transitionProperty: ['hover'],
      fill: ['group-hover'],
      translate: ['focus-within']
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
