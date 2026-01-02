export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      noscript: [
        {
          // Only the noscript iframe for body
          innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5ZKLMW4G" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          tagPosition: 'bodyOpen'
        },
      ]
    },
  },

  css: [
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "vue-slick-carousel/dist/vue-slick-carousel-theme.css",
    'notivue/notification.css',
    'notivue/animations.css',
    "~/assets/css/main.css",
  ],

  modules: ["@nuxt/content", "vue3-carousel-nuxt", "@nuxtjs/tailwindcss", "notivue/nuxt"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },

  content: {},

  // hooks: {
  //     'content:file:beforeInsert': (document) => {
  //         if (document.extension === '.md') {
  //             const stats = require('reading-time')(document.text)
  //             document.readingStats = stats
  //         }
  //     },
  // },
  // content: {
  //     liveEdit: false,
  // },

  plugins: [
    '~/plugins/crisp.client.js',
    '~/plugins/clarity.client.js',
    '~/plugins/gtm.client.js',
  ],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        return false
      }
    }
  },

  compatibilityDate: '2025-12-29',
});