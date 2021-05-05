export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // Set ssr to false to see the loading indicator - https://nuxtjs.org/docs/2.x/features/rendering-modes
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  // Head Property - https://nuxtjs.org/docs/2.x/features/meta-tags-seo
  head: {
    title: 'nuxt-js-study',
    titleTemplate: 'Nuxt | %s',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'The amazing Nuxt application that teaches me all the cool features of Nuxt'
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://nuxtjs.org'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'My amazing Nuxt application'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'The amazing Nuxt application that teaches me all the cool features of Nuxt'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://nuxtjs.org/nuxt-card.png'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://nuxtjs.org'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'My amazing Nuxt application'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'The amazing Nuxt application that teaches me all the cool features of Nuxt'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://nuxtjs.org/nuxt-card.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://nuxtjs.org/nuxt-card.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'NuxtJS'
      }
    ],
    // canonical
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://nuxtjs.org/examples`
      }
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
