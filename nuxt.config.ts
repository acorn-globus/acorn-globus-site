export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      link: [
        // Preconnect hints for external resources
        { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
        { rel: 'preconnect', href: 'https://www.google-analytics.com' },
        { rel: 'preconnect', href: 'https://client.crisp.chat' },
        { rel: 'preconnect', href: 'https://www.clarity.ms' },
      ],
      noscript: [
        {
          // Only the noscript iframe for body
          children: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5ZKLMW4G" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
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

  modules: ["@nuxt/content", "vue3-carousel-nuxt", "@nuxtjs/tailwindcss", "notivue/nuxt", "@nuxtjs/sitemap"],

  site: {
    url: 'https://acornglobus.com',
  },

  sitemap: {
    excludeAppSources: true,
    sources: ['/api/__sitemap__/urls'],
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },

  content: {
    markdown: {
      anchorLinks: false,
    },
  },

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
    {
      src: "~/plugins/crisp.js",
      mode: 'client',
    },
    {
      src: '~/plugins/clarity.js',
      mode: 'client'
    },
    {
      src: '~/plugins/gtm.js',
      mode: 'client'
    }
  ],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        return false
      }
    }
  },

  compatibilityDate: '2025-02-06',
});