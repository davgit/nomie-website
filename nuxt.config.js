import RouteGenerator from './src/routes'
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  srcDir: 'src/',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Open Source Life Tracker | Nomie',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Completely private and open life tracker by Brandon Corbin',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        defer: true,
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/device-plugin',
    {
      src: '@/plugins/simple-analytics',
      ssr: false,
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  generate: {
    async routes() {
      console.log('🚀 generating routes')
      return RouteGenerator()
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/markdownit',
  ],

  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: false,
    use: ['markdown-it-div', 'markdown-it-attrs'],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    dir: '../content',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
