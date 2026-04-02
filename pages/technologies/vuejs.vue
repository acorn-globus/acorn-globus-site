<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Code class="h-4 w-4 mr-2" />
            Technology Expertise
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Vue.js Development
          </h1>

          <p class="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
            Vue.js and Nuxt are at the heart of products we've built - including Formester, our own SaaS,
            and the site you're reading right now. We know this ecosystem deeply because we use it daily.
          </p>

          <div class="grid sm:grid-cols-2 gap-6 max-w-xl">
            <div class="bg-white rounded-2xl p-6 shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">6+ Years of Experience</h3>
              <p class="text-gray-600 text-sm">Deep expertise in the Vue ecosystem</p>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Powers Our Own Products</h3>
              <p class="text-gray-600 text-sm">Formester and this website are built with Vue/Nuxt</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Expertise -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Our Vue.js Expertise</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Layers class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Single Page Apps</h3>
            <p class="text-gray-600">Modern SPAs with Vue 3 and Composition API.</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Globe class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Nuxt.js Applications</h3>
            <p class="text-gray-600">SSR and static site generation with Nuxt 3.</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Zap class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
            <p class="text-gray-600">Building fast, optimized Vue applications.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Skills -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Technical Proficiency</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Core Competencies</h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">Vue.js (2.x & 3.x)</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">Nuxt.js</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">Vuex / Pinia</span>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Additional Skills</h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">Vue Test Utils / Vitest</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">TypeScript</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">Vite / Webpack</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Formester</h3>
            <p class="text-gray-600 mb-6">
              Built a modern form builder platform using Vue.js and Nuxt, featuring AI-powered form generation.
            </p>
            <NuxtLink
              to="/case-studies/formester"
              class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View Case Study
              <ArrowRight class="h-4 w-4 ml-2" />
            </NuxtLink>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Invoice Falcon</h3>
            <p class="text-gray-600 mb-6">
              Developed a comprehensive Shopify invoicing solution with Vue.js frontend.
            </p>
            <NuxtLink
              to="/case-studies/invoice-falcon"
              class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View Case Study
              <ArrowRight class="h-4 w-4 ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Building with Vue?</h2>
        <p class="text-xl text-gray-600 mb-8">
          We've shipped Vue products for ourselves and our clients. Tell us about your product - we'd love to help.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
        >
          Let's Talk
          <ArrowRight class="h-5 w-5 ml-2" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ArrowRight, CheckCircle, Code, Layers, Globe, Zap
} from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Vue.js Development Services | AcornGlobus',
  description: 'Vue.js and Nuxt.js development from the team that built Formester (our own SaaS) and this website. Vue 3, Nuxt 4, TypeScript. We build with you, not just for you.',
  keywords: 'Vue.js development, Vue 3, Nuxt.js, Vue developers, front-end development, Vue consulting',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'Vue.js Development Services | AcornGlobus',
  ogDescription: 'Vue.js and Nuxt.js development from the team that built Formester and this website.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/technologies/vuejs',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Vue.js Development Services | AcornGlobus',
  twitterDescription: 'Vue.js and Nuxt.js development from the team that built Formester.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useBreadcrumbSchema([
  { name: 'Technologies', path: '/technologies/vuejs' },
  { name: 'Vue.js', path: '/technologies/vuejs' },
])
</script>
