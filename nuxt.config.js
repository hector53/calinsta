const pkg = require('./package')
const webpack = require('webpack')

const i18nConfig = require('./config/i18n')
const defaultLocale = i18nConfig.defaultLocale
const fallbackLocale = i18nConfig.fallbackLocale
const dateTimeFormats = i18nConfig.dateTimeFormats
const numberFormats = i18nConfig.numberFormats
const locales = i18nConfig.locales

module.exports = {
  target: 'static',
 
  /*
  ** Headers of the page
  */
  head() {
    return {
      title: 'Luma',
      htmlAttrs: {
        dir: `${this.$store && this.$store.getters.settings.layout.rtl ? 'rtl' : 'ltr'}`
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Luma Vue - Nuxt & Vue.js Learning Management System Admin Template' },
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { href: 'https://fonts.googleapis.com/css?family=Lato:400,700%7CRoboto:400,500%7CExo+2:600&amp;display=swap', rel: 'stylesheet' }
      ],
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#5567FF',
    height: '3px',
    continuous: true,
    throttle: 0
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/vendor/material-icons.scss',
    '~/assets/scss/vendor/fontawesome.scss',
    '~/assets/scss/app.scss',
    '~/assets/scss/vendor/quill.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/app',
    '~/plugins/vue-luma',
    '~/plugins/fmv-avatar',
    '~/plugins/fmv-layout',
    '~/plugins/fmv-charts',
    '~/plugins/fmv-highlight',
    '~/plugins/fmv-input-group-merge',
    '~/plugins/bv-form-image-group',
    '~/plugins/vue-quill-editor.client',

    // Settings client middleware (handles dynamic layout route settings client side)
    '~/plugins/settings.client',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', { css: false }],
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    ['nuxt-i18n', {
      lazy: true,
      vueI18nLoader: true,
      langDir: 'locales/',
      locales,
      defaultLocale,
      vueI18n: {
        fallbackLocale,
        dateTimeFormats,
        numberFormats,
        silentTranslationWarn: true
      }
    }]
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  render: {
    resourceHints: false
  },

  router: {
    base: '/calinstaweb/',
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    middleware: [
      // DEMO: handles dynamic layout route settings server side
      'settings'
    ]
  },

  generate: {
    routes(callback) {
      const routes = [
        '/app/home',
        '/sticky/home',
        '/boxed/home',
        '/fixed/home'
      ]
      callback(null, routes)
    }
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,

    postcss: {
      plugins: {
        'postcss-rtl': {}
      }
    },

    babel: {
      sourceType: 'unambiguous',
      plugins: [
        '@babel/plugin-syntax-export-default-from',
        ['@babel/plugin-transform-runtime', {
          'helpers': true,
          'forceAllTransforms': false
        }]
      ],
      presets: [
        ['@babel/preset-env', {
          'debug': false,
          'useBuiltIns': 'usage',
          'corejs': '3.6',
          'modules': 'auto',
          'targets': {
            'browsers': [
              'last 2 versions',
              'ie >= 11'
            ]
          }
        }]
      ],
      compact: true
    },

    loaders: {
      scss: {
        implementation: require('sass'),
        sassOptions: {
          includePaths: ['node_modules']
        }
      }
    },

    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery', // used by ui-icons page demo
        'domFactory': 'dom-factory'
      })
    ],

    extend(config, { isDev, isClient }) {
      // do not resolve symlinks
      if (isDev) config.resolve.symlinks = false
    }
  }
}