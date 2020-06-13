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
      extend: {},
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
