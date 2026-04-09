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
            React.js Development
          </h1>

          <p class="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
            We've shipped React applications for education platforms, e-commerce tools, and SaaS products.
            Component-driven architecture, production-ready code, and a team that sticks around for what comes after launch.
          </p>

          <div class="grid sm:grid-cols-2 gap-6 max-w-xl">
            <div class="bg-white rounded-2xl p-6 shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">6+ Years of Experience</h3>
              <p class="text-gray-600 text-sm">Deep expertise in the React ecosystem</p>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Used Across Multiple Products</h3>
              <p class="text-gray-600 text-sm">From Rumie to Invoice Falcon and beyond</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Expertise -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Our React.js Expertise</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Layers class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Modern React Apps</h3>
            <p class="text-gray-600">Building with React 18 and modern patterns.</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Globe class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Next.js Applications</h3>
            <p class="text-gray-600">SSR and static site generation with Next.js 13+.</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Zap class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
            <p class="text-gray-600">Building fast, optimized React applications.</p>
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
                <span class="text-gray-700">React.js (16.x to 18.x)</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">Next.js</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">Redux / Redux Toolkit</span>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Additional Skills</h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">React Testing Library / Jest</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">TypeScript</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">Webpack / Vite</span>
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
            <h3 class="text-xl font-bold text-gray-900 mb-4">Rumie</h3>
            <p class="text-gray-600 mb-6">
              Built a cross-platform educational platform reaching learners in 176 countries.
            </p>
            <NuxtLink
              to="/case-studies/rumie"
              class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View Case Study
              <ArrowRight class="h-4 w-4 ml-2" />
            </NuxtLink>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Invoice Falcon</h3>
            <p class="text-gray-600 mb-6">
              Developed a comprehensive Shopify invoicing solution with React frontend.
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
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Building something with React?</h2>
        <p class="text-xl text-gray-600 mb-8">
          We'd love to hear about your product. Whether you need a full team or a few React engineers to embed with yours, let's talk.
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
  title: 'React.js Development Services | AcornGlobus',
  description: 'React.js development from a team that\'s shipped real products - from educational platforms to SaaS tools. React 18, Next.js, TypeScript. We build with you, not just for you.',
  keywords: 'React development, React.js, Next.js, React developers, front-end development, React consulting',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'React.js Development Services | AcornGlobus',
  ogDescription: 'React.js development from a team that\'s shipped real products - from educational platforms to SaaS tools.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/technologies/reactjs',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'React.js Development Services | AcornGlobus',
  twitterDescription: 'React.js development from a team that\'s shipped real products.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useHead({ link: [{ rel: 'canonical', href: 'https://acornglobus.com/technologies/reactjs' }] })

useBreadcrumbSchema([
  { name: 'Technologies', path: '/technologies/reactjs' },
  { name: 'React.js', path: '/technologies/reactjs' },
])
</script>
