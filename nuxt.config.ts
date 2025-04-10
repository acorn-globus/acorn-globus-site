export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
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

  modules: ["@nuxt/content", "vue3-carousel-nuxt", "@nuxtjs/tailwindcss", "notivue/nuxt"],

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
      src: "~/plugins/pdfbox.js", // Replace "~/plugins/crisp.js" with the actual path to your file
      mode: 'client', // Ensure the script is loaded on the client side
    },
    {
      src: "~/plugins/crisp.js", // Replace "~/plugins/crisp.js" with the actual path to your file
      mode: 'client', // Ensure the script is loaded on the client side
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
        return tag === 'pdf-box' || tag === 'pdf-pandora'
      }
    }
  },

  compatibilityDate: '2025-02-06',
});