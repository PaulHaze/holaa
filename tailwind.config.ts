import type { Config } from 'tailwindcss';
// import typographyPlugin from '@tailwindcss/typography';
import daisyui from 'daisyui';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,json}'],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      sans: ['var(--body-font)'],
      body: ['var(--body-font)'],
      heading: ['var(--heading-font)'],
      lowball: ['var(--heading-font)'],
      secondary: ['var(--jost-font)'],
      narrow: ['var(--bigShoulder-font)'],
    },
    screens: {
      xs: '431px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      mxs: { max: '431px' },
      smmobile: { max: '479px' },
      lgmobile: { max: '575px' },
      msm: { max: '640px' },
      mmd: { max: '768px' },
      mlg: { max: '1024px' },
      mxl: { max: '1280px' },
      m2xl: { max: '1536px' },
      xsm: { min: '431px' },
      smm: { min: '640px' },
      mdm: { min: '768px' },
      lgm: { min: '1024px' },
      xlm: { min: '1280px' },
      '2xlm': { min: '1536px' },
    },
    container: {
      center: true,
    },
    extend: {
      lineHeight: {
        one: '1',
        '1': '1',
      },
      colors: {
        'menu-active': '#ff6f3f',
        orange: '#ff6f3f',
        paragraph: '#a9a9a9',
      },
      fontSize: {
        banner: '9rem',
      },
      width: {
        '15': '3.75rem',
      },

      minWidth: {
        xs: '431px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        xs: '431px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      backgroundSize: {
        half: '50%',
        full: '100%',
      },
      spacing: {
        '18': '4.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '16rem',
        '4xl': '32rem',
      },
      padding: {
        '18:': '4.5rem',
      },
      borderRadius: {
        half: '50%',
      },
      zIndex: {
        '99': '99',
        '999': '999',
        '9999': '9999',
      },
      transitionDuration: {
        '400': '400ms',
      },
      boxShadow: {
        'nav-inner':
          '2px 4px 5px 0px rgba(31, 31, 31, 0.05) inset, -4px -5px 5px 0px rgba(31, 31, 31, 0.05) inset, inset 0 0 0 1.2px rgba(240, 240, 240, 0.1)',
        profile: 'inset 0 0 0 1.2px #f0f0f066',
        menu: 'inset 0 0 0 1.2px #ffffff66',
        search: '0px 1px 30px rgba(17, 17, 17, 0.1)',
        inner:
          '5px 2px 10px 0px rgba(45, 23, 70, 0.2) inset, -5px -3px 8px 0px rgba(71, 23, 11, 0.2) inset',
      },

      backgroundImage: {
        'sidebar-text':
          'linear-gradient(92deg, #5a0dff 0%, #ff29b8 14.6%, #ff581c 97.73%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-bg': 'linear-gradient(95deg, #181818 7.27%, #151515 99.21%)',
        'gradient-mobile':
          'linear-gradient(95deg, #181818 7.27%, #151515 99.21%)',
        'gradient-header':
          'linear-gradient(180deg, rgba(44, 44, 44, 0.8) 0%,rgba(52, 51, 51, 0) 100%)',
        'gradient-btn':
          'linear-gradient(to right, #5a0dff -5%, #ff29b8 31%, #ff581c, #ff29b8, #5a0dff)',
        'gradient-color':
          'linear-gradient(to right, #5A0dFF -5%, #FF29B8 31.0%, #FF581C)',
        'gradient-other':
          'linear-gradient(92deg, #5A0dFF 0%, #FF29B8 38.6%, #FF581C 97.73%)',
        'gradient-primary':
          'linear-gradient(180deg,rgba(255, 255, 255, 0.49) -0.89%,rgba(255, 255, 255, 0.1) 0.12%,rgba(255, 255, 255, 0.11) 99.89%);',
        'gradient-sidenav':
          'linear-gradient(92deg, #5a0dff 0%, #ff29b8 38.6%, #ff581c 97.73%) border-box',
        pillinfo:
          'linear-gradient(133deg, rgba(255, 255, 255, 0.27) 12.14%, rgba(255, 255, 255, 0.09) 86.99%)',
        'feature-card': 'linear-gradient(136deg, #1b1b1b 2.27%, #101010 100%)',
      },
    },
  },
  plugins: [
    // typographyPlugin,
    daisyui,
    plugin(({ addUtilities, matchUtilities, theme }) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
        '.bb': {
          borderWidth: '1px',
          'border-color': 'rgb(220, 38, 38)',
          '@media (min-width: 431px)': {
            'border-color': '#64D267',
          },
          '@media (min-width: 640px)': {
            'border-color': '#F5BD4F',
          },
          '@media (min-width: 768px)': {
            'border-color': 'rgb(81, 142, 227)',
          },
          '@media (min-width: 1024px)': {
            'border-color': 'rgb(220, 38, 38)',
          },
          '@media (min-width: 1280px)': {
            'border-color': 'rgb(37, 99, 235)',
          },
        },
        '.bb2': {
          borderWidth: '2px',
          'border-color': '#3b82f6',

          '@media (min-width: 431px)': {
            'border-color': '#d946ef',
          },
          '@media (min-width: 640px)': {
            'border-color': '#84cc16',
          },
          '@media (min-width: 768px)': {
            'border-color': '#ef4444',
          },
          '@media (min-width: 1024px)': {
            'border-color': '#64748b',
          },
          '@media (min-width: 1280px)': {
            'border-color': '#087a0c',
          },
        },
      });
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#71c4ef',
          secondary: '#d4eaf7',
          accent: '#00668c',
          neutral: '#454b4e',
          'base-100': '#fffefb',
          'base-200': '#f5f4f1',
          'base-300': '#edede9',
          '--primary-muted-oklch': '83.24% 0.029 231.52',
          '--base-100-oklch': '99.7% 0.004 91.45',
          // '--base-200-oklch': '96.71% 0.004 91.45',
          // '--base-300-oklch': '84.2% 0.004 91.45',
          /* 
					*EXAMPLE - ESSENTIAL
					"primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",

					*EXAMPLE - FULL SET
					* These extra colours are set automatically based on the colours chosen above
					* But they can be overriden
					primary: '#a991f7',
					"primary-content": "#d0e3ff", - Colour of text in 'Primary'
					secondary: '#f6d860'
					"secondary-content": "#0a0900", - Colour of text in 'Secondary'
					accent: '#37cdbe'
					"accent-content": "#00050d",- Colour of text in 'Accent'
					neutral: '#828282'
					"neutral-content": "#d2cdd2", - Colour of text in 'Neutral
					'base-100': '#fefefe'
					"base-200": "#dbdbdb", - Slightly darker shade of base-100
					"base-300": "#bbbbbb", - Even darker shade of base-100
					"base-content": "#161616", - Contrasting colour for text on base-100

					* Additional colours to be added if needed
					"info": "#00b1ff",
					"info-content": "#000c16",
					"success": "#85ee00",
					"success-content": "#061400",
					"warning": "#c28700",
					"warning-content": "#0e0600",
					"error": "#ff768e",
					"error-content": "#160507",


					* Additional CSS variables used
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs */
        },
      },
      {
        dark: {
          primary: '#4d648d',
          secondary: '#1F3A5F',
          accent: '#cee8ff',
          neutral: '#454b4e',
          'base-100': '#101010',
          'base-200': '#1f2b3e',
          'base-300': '#374357',
          '--primary-muted-oklch': '81.3% 0.068 264.49',
          '--base-100-oklch': '22.45% 0.04 256.74',
          //* Custom colour variables can also be added.
          //* Use the OKLCH colour space
          //* Add the variable to Tailwind
          // '--primary-muted-oklch': '83.24% 0.029 231.52',
        },
      },
    ],
    // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"],
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
} satisfies Config;
