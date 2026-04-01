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
            Angular Development
          </h1>

          <p class="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
            Angular for teams that need structure at scale. TypeScript-first, well-tested, and built to grow
            with your product. Our engineers have worked on complex Angular applications across fintech,
            healthcare, and enterprise SaaS.
          </p>

          <div class="grid sm:grid-cols-2 gap-6 max-w-xl">
            <div class="bg-white rounded-2xl p-6 shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">6+ Years of Experience</h3>
              <p class="text-gray-600 text-sm">Deep expertise in the Angular ecosystem</p>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Enterprise-Grade Delivery</h3>
              <p class="text-gray-600 text-sm">Complex applications across multiple industries</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Expertise -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Our Angular Expertise</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Building class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Enterprise Apps</h3>
            <p class="text-gray-600">Large-scale applications with Angular 12+.</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Layers class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Micro Frontends</h3>
            <p class="text-gray-600">Scalable architecture with Module Federation.</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Zap class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Performance</h3>
            <p class="text-gray-600">Optimized Angular applications at scale.</p>
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
                <span class="text-gray-700">Angular (12.x to 17.x)</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">TypeScript</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">RxJS</span>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Additional Skills</h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">Jasmine / Karma</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">NgRx / NGXS</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">Angular Material / PrimeNG</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us for Angular</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Building class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Enterprise Focus</h3>
            <p class="text-gray-600">
              We've built and maintained large-scale Angular applications for enterprise clients across multiple industries.
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Shield class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Clean Architecture</h3>
            <p class="text-gray-600">
              Proper structure and patterns so your team can maintain the codebase long after we're done.
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <FileText class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Built for Your Independence</h3>
            <p class="text-gray-600">
              Your code, your product, full documentation. We build so you're never locked in.
            </p>
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
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Need Angular engineers?</h2>
        <p class="text-xl text-gray-600 mb-8">
          Whether you're building something new or scaling an existing Angular application, we can help.
          Our engineers embed with your team or deliver end-to-end.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Let's Talk
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-blue-200"
          >
            See Our Services
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ArrowRight, CheckCircle, Code, Layers, Building, Zap, Shield, FileText
} from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Angular Development Services | AcornGlobus',
  description: 'Angular development for enterprise and complex web applications. TypeScript-first, well-tested, built to scale. Our engineers embed with your team or deliver end-to-end.',
  keywords: 'Angular development, Angular, TypeScript, enterprise applications, Angular developers, front-end development',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'Angular Development Services | AcornGlobus',
  ogDescription: 'Angular development for enterprise and complex web applications. TypeScript-first, well-tested, built to scale.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/technologies/angular',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Angular Development Services | AcornGlobus',
  twitterDescription: 'Angular development for enterprise and complex web applications.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useBreadcrumbSchema([
  { name: 'Technologies', path: '/technologies/angular' },
  { name: 'Angular', path: '/technologies/angular' },
])

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://acornglobus.com/technologies/angular'
    }
  ]
})
</script>
