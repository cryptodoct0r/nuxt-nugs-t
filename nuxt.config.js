import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nugs-Ternopil',
    htmlAttrs: {
      class: 'has-navbar-fixed-top',
      lang: 'en',
      amp: true
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'National Union Of Ghana Students Ternopil comprises of Ghanaian students, with the primary aim of protecting and safeguarding the rights and interests of Ghanaian students in Ternopil.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Nugs-Ternopil, nugs-ternopil, Nugs Ternopil, Nugs ternopil Ukraine, National Union Of Ghana Students Ternopil, National Union Of Ghana Students Ternopil Ukraine, nugs ternopil, nugsternopil, nugs ternopil'
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Nugs-Ternopil'
      },
      {
        hid: 'application-name',
        name: 'application-name',
        content: 'Nugs-Ternopil'
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#da532c'
      },
      // {
      //   hid: 'msapplication-config',
      //   name: 'msapplication-config',
      //   content: '/browserconfig.xml'
      // },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#fcd116'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'Nugs-Ternopil'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        property: 'og:site_name',
        content: 'Nugs-Ternopil'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        property: 'og:url',
        content: 'https://nugsternopil.com/'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        property: 'og:locale',
        content: 'en_UA'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: 'National Union Of Ghana Students Ternopil comprises of Ghanaian students, with the primary aim of protecting and safeguarding the rights and interests of Ghanaian students in Ternopil.'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: '/nugst-new-logo.png'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/png',
        size: '96x96',
        href: '/img/icons/icon-96x96.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        size: '128x128',
        href: '/img/icons/icon-128x128.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '144x144',
        href: '/img/icons/icon-144x144.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        size: '512x512',
        href: '/img/icons/icon-512x512.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '384x384',
        href: '/img/icons/icon-384x384.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        size: '192x192',
        href: '/img/icons/icon-192x192.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        size: '152x152',
        href: '/img/icons/icon-152x152.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '72x72',
        href: '/img/icons/icon-72x72.png'
      }

    ],
    script: []
  },

  manifest: {
    "name": "Nugs-Ternopil",
    "short_name": "Nugs-Ternopil",
    "icons": [{
        "src": "/img/icons/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      },
      {
        "src": "/img/icons/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "/img/icons/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "/img/icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "/img/icons/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png"
      },
      {
        "src": "/img/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/img/icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/img/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "start_url": "/",
    "display": "standalone",
    "background_color": "#FFFFFF",
    "theme_color": "#fcd116",
    "lang": "English",
    "orientation": "any",
    "description": "National Union Of Ghana Students Ternopil comprises of Ghanaian students, with the primary aim of protecting and safeguarding the rights and interests of Ghanaian students in Ternopil."
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#006b3f'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/icons.js',
      ssr: false
    },
    '~/plugins/lightGallery.client.js',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-fontawesome',
      {
        imports: [{
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          },
        ]
      }
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {

    theme: {
      primary: '#fcd116',
      success: '#006b3f',
      error: '#ce1126',
      accent: colors.grey.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base
    }
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
}
