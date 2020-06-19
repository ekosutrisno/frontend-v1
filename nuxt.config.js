export default {
   mode: 'universal',
   /*
    ** Headers of the page
    */
   head: {
      title: process.env.npm_package_name || '',
      meta: [
         {
            charset: 'utf-8'
         },
         {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
         },
         {
            hid: 'description',
            name: 'description',
            content: process.env.npm_package_description || ''
         }
      ],
      link: [
         {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
         },
         {
            rel: 'stylesheet',
            href:
               'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;515;600;700&display=swap'
         }
      ],
      script: [
         {
            src: 'https://kit.fontawesome.com/c4c4a7fc05.js'
         }
      ]
   },
   /*
    ** Customize the progress-bar color
    */
   loading: {
      color: '#fff'
   },
   /*
    ** Global CSS
    */
   css: ['@/assets/css/main.css'],
   /*
    ** Plugins to load before mounting the App
    */
   plugins: [
      {
         src: '~/plugins/vue-glide-js.js',
         ssr: false
      },
      {
         src: '~/plugins/v-tooltip.js',
         ssr: false
      },
      {
         src: '~/plugins/vue-formulate.js',
         ssr: true
      },
      {
         src: '~/plugins/vue-toasted.js',
         ssr: false
      }
   ],
   /*
    ** Nuxt.js dev-modules
    */
   buildModules: [
      // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
      '@nuxtjs/tailwindcss',
      '@nuxtjs/svg',
      '@nuxtjs/color-mode'
   ],
   /*
    ** Nuxt.js modules
    */
   modules: [
      // Doc: https://axios.nuxtjs.org/usage
      '@nuxtjs/axios',
      '@nuxtjs/pwa'
   ],
   /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
   axios: {
      // baseURL: `http://localhost:8088/xsisapp/api/v1`,s
      baseURL: `http://localhost:8088/xsis-app`,
   },
   /*
    ** Build configuration
    */
   build: {
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {}
   }
};
