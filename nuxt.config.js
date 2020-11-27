export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'The Movie Front',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/snotify.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: './plugins/snotify',
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
      common: {
        'Accept': 'application/json',
      },
    },
    params: {
      't': 'a',
    }
  },

  env: {
    apiKey: process.env.API_KEY || 'no-key'
  },

  auth: {
    plugins: ['~/plugins/auth.js'],
    strategies: {
      themoviedb: {
        _scheme: '~/schemes/theMovieDb',
        endpoints: {
          requestToken: {
            url: '/authentication/token/new',
            method: 'get'
          },
          validateTokenWithLogin: {
            url: '/authentication/token/validate_with_login',
            method: 'post',
            propertyName: 'request_token'
          },
          login: {
            url: '/authentication/session/new',
            method: 'post',
            propertyName: 'session_id',
          },
          logout: {url: '/authentication/session', method: 'delete'},
          user: {url: '/account', method: 'get'}
        },
        tokenRequired: true,
        tokenType: null,
        globalToken: true,
        autoFetchUser: true
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['@nuxtjs/auth']
  }
}
