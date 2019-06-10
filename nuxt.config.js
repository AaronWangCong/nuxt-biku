const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'keywords', name: 'keywords', content: pkg.keywords }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  loading: { color: '#fff' },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    "~assets/scss/reset.scss",
    "~static/common.css",
    "~static/font/iconfont.css",
    "~assets/scss/main.scss",
  ],

  plugins: [
    { src: "@/plugins/element-ui", ssr: true },
    { src: "@/static/font/iconfont.js", ssr: false },
  ],

  modules: [
  ],

  proxy: [
    
  ],

  build: {
    extractCSS: { allChunks: true },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
