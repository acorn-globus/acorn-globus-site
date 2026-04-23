export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      link: [
        // Google Fonts — preconnect + stylesheet (moved from CSS @import to avoid render-blocking)
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' },
        // Preconnect hints for external resources
        { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
        { rel: 'preconnect', href: 'https://www.google-analytics.com' },
        { rel: 'preconnect', href: 'https://client.crisp.chat' },
        { rel: 'preconnect', href: 'https://www.clarity.ms' },
      ],
      meta: [
        { property: 'og:site_name', content: 'Acorn Globus' },
        { name: 'twitter:site', content: '@acornglobus' },
        { name: 'twitter:creator', content: '@acornglobus' },
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
    // Netlify canonicalizes URLs to trailing-slash form (301 no-slash → slash).
    // Tell the sitemap module to emit matching trailing-slash URLs so Google
    // crawls land on 200s directly instead of chasing one redirect per entry.
    trailingSlash: true,
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

  // Target modern browsers to avoid legacy JS polyfills
  vite: {
    build: {
      target: 'esnext',
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  compatibilityDate: '2025-02-06',
});