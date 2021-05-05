export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // Set ssr to false to see the loading indicator - https://nuxtjs.org/docs/2.x/features/rendering-modes
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-js-study',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // Global CSS - https://nuxtjs.org/docs/2.x/features/configuration#pre-processors
  css: [
    '~/assets/main.scss'
  ],

  // Global style resources - https://www.npmjs.com/package/@nuxtjs/style-resources
  styleResources: {
    scss: ['~/assets/variables.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // Activate components - https://nuxtjs.org/docs/2.x/directory-structure/components#components-module
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
  modules: [
    '@nuxt/http',
    '@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

   
  // modifying the default loader
  // loading: {
  //   color: 'DodgerBlue',
  //   height: '10px',
  //   continuous: true,
  //   duration: 3000
  // },

  // modifying the loading indicator for spa  - https://nuxtjs.org/docs/2.x/features/loading
  // loadingIndicator: {
  //   name: 'chasing-dots',
  //   color: 'purple',
  //   background: 'green',
  //   duration: 10000
  // }

  // importing a custom loader. this will overwrite the default loader
  loading: '~/components/LoadingBar.vue'
}
