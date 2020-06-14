module.exports = {
   purge: [
      {
         whitelist: ['dark-mode']
      }
   ],
   theme: {
      fontFamily: {
         sans: [
            'Quicksand',
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"'
         ],
         serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
         mono: [
            'Menlo',
            'Monaco',
            'Consolas',
            '"Liberation Mono"',
            '"Courier New"',
            'monospace'
         ]
      },
      extend: {
         colors: {
            'covid-gray': '#FCFCFD',
            'covid-black': '#404B53',
            'covid-green': '#01B075',
            'green-primary': '#3b8070',
            'green-secondary': '#00C58E',
            'green-light': '#00E0A1',
            'gray-font': '#F5F7FA',
            'gray-hover': '#E2E8F0',
            'gray-hover-dark': '#2D3748',
            'gray-background': '#2F495E',
            'gray-secondary': '#F8FAFC',
            'gray-primary': '#35495e',
            'gray-dark': '#2C3E50',
            xsis: {
               'light-base': '#243746',
               'light-primary': '#158876',
               'light-secondary': '#0e2233',
               'bg-light-primary': '#f3f5f4',
               'bg-light-secondary': '#fff',
               'bd-light-primary': '#ddd',
               'dark-base': '#ebf4f1',
               'dark-primary': '#41b38a',
               'dark-secondary': '#fdf9f3',
               'bg-dark-primary': '#091a28',
               'bg-dark-secondary': '#071521',
               'bd-dark-primary': '#0d2538',
               'sepia-primary': '#433422',
               'sepia-secondary': '#504231',
               'bg-sepia-primary': '#f1e7d0',
               'bg-sepia-secondary': '#eae0c9',
               'bd-sepia-primary': '#ded0bf'
            }
         },
         spacing: {
            '36': '9rem',
            '70': '18rem',
            '71': '19rem',
            '72': '20rem',
            fixed: '63.75rem',
            main: '31rem'
         }
      }
   },
   variants: {
      transform: ['responsive', 'group-hover'],
      transformOrigin: ['responsive', 'group-hover'],
      scale: ['responsive', 'hover', 'focus', 'group-hover'],
      rotate: ['responsive', 'hover', 'focus', 'group-hover'],
      translate: ['responsive', 'hover', 'focus', 'group-hover'],
      skew: ['responsive', 'hover', 'focus', 'group-hover'],
      textColor: ['responsive', 'hover', 'focus', 'group-focus', 'group-hover'],
      backgroundColor: [
         'dark',
         'dark-hover',
         'dark-group-hover',
         'dark-even',
         'dark-odd',
         'hover',
         'responsive',
         'focus',
         'group-focus',
         'group-hover'
      ],
      borderColor: [
         'dark',
         'dark-focus',
         'dark-focus-within',
         'hover',
         'responsive',
         'focus',
         'group-focus',
         'group-hover'
      ],
      textColor: [
         'dark',
         'dark-hover',
         'dark-active',
         'hover',
         'responsive',
         'focus',
         'group-focus',
         'group-hover'
      ]
   },
   plugins: [require('tailwindcss-dark-mode')()]
};
