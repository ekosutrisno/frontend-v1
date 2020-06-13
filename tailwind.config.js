module.exports = {
   purge: [{
      whitelist: ['dark-mode']
   }],
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
            '"Noto Color Emoji"',
         ],
         serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
         mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      extend: {
         colors: {
            'covid-gray': '#FCFCFD',
            'covid-gray-01': '#FBF9FC',
            'covid-gray-bg0': '#8dc1c1',
            'covid-gray-bg1': '#a6bebd',
            'covid-gray-bg2': '#75a9a8',
            'covid-black': '#404B53',
            'covid-green': '#01B075',
         },
         spacing: {
            '36': '9rem',
            '70': '18rem',
            '72': '22rem',

         },
      },
   },
   variants: {
      transform: ['responsive', 'group-hover'],
      transformOrigin: ['responsive', 'group-hover'],
      scale: ['responsive', 'hover', 'focus', 'group-hover'],
      rotate: ['responsive', 'hover', 'focus', 'group-hover'],
      translate: ['responsive', 'hover', 'focus', 'group-hover'],
      skew: ['responsive', 'hover', 'focus', 'group-hover'],
      textColor: ['responsive', 'hover', 'focus', 'group-focus', 'group-hover'],
      backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive', 'focus', 'group-focus', 'group-hover'],
      borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive', 'focus', 'group-focus', 'group-hover'],
      textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive', 'focus', 'group-focus', 'group-hover']
   },
   plugins: [
      require('tailwindcss-dark-mode')()
   ],
}
