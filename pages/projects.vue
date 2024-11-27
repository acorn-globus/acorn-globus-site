<template>
  <main class="min-h-screen bg-navy-900 text-white">
    <div class="container mx-auto px-4 py-20">
      <!-- Hero Section -->
      <div class="max-w-4xl mx-auto mb-20">
        <div class="inline-block bg-navy-700 px-4 py-2 rounded-full text-yellow-400 text-sm font-semibold mb-6">
          Our Success Stories
        </div>
        <h1 class="text-5xl md:text-6xl font-bold mb-8">
          Transforming Ideas into Digital Excellence
        </h1>
        <p class="text-xl text-gray-300 mb-8">
          From innovative SaaS platforms to enterprise solutions, discover how we've helped businesses transform their digital presence and operations through cutting-edge technology and thoughtful design.
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-navy-700 p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-2">25+ Successful Projects</h3>
            <p class="text-gray-300">Delivered across various industries and technologies.</p>
          </div>
          <div class="bg-navy-700 p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-2">98% Client Satisfaction</h3>
            <p class="text-gray-300">Long-term partnerships built on trust and quality.</p>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Formester -->
        <div class="bg-navy-700 rounded-2xl overflow-hidden group">
          <div class="aspect-video bg-gradient-to-br from-navy-600 to-navy-800 relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-2xl font-bold text-navy-400">Formester</span>
            </div>
          </div>
          <div class="p-8">
            <div class="flex justify-between items-start mb-4">
              <h2 class="text-3xl font-bold">Formester</h2>
              <span class="bg-yellow-400 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold">SaaS</span>
            </div>
            <p class="text-gray-300 mb-6">
              A powerful no-code form builder with AI capabilities, revolutionizing how businesses collect and process data.
            </p>
            <div class="flex flex-wrap gap-2 mb-8">
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">React</span>
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">AI Integration</span>
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
            </div>
            <NuxtLink 
              to="/case-studies/formester"
              class="inline-block bg-yellow-400 text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              View Case Study
            </NuxtLink>
          </div>
        </div>

        <!-- Eitoss -->
        <div class="bg-navy-700 rounded-2xl overflow-hidden group">
          <div class="aspect-video bg-gradient-to-br from-navy-600 to-navy-800 relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-2xl font-bold text-navy-400">Eitoss</span>
            </div>
          </div>
          <div class="p-8">
            <div class="flex justify-between items-start mb-4">
              <h2 class="text-3xl font-bold">Eitoss</h2>
              <span class="bg-yellow-400 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold">Enterprise</span>
            </div>
            <p class="text-gray-300 mb-6">
              An innovative platform bridging the communication gap between management and frontline workers through Kaizen principles.
            </p>
            <div class="flex flex-wrap gap-2 mb-8">
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">Ruby on Rails</span>
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">React</span>
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">AI Integration</span>
            </div>
            <NuxtLink 
              to="/case-studies/eitoss"
              class="inline-block bg-yellow-400 text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              View Case Study
            </NuxtLink>
          </div>
        </div>

        <!-- Invoice Falcon -->
        <div class="bg-navy-700 rounded-2xl overflow-hidden group">
          <div class="aspect-video bg-gradient-to-br from-navy-600 to-navy-800 relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-2xl font-bold text-navy-400">Invoice Falcon</span>
            </div>
          </div>
          <div class="p-8">
            <div class="flex justify-between items-start mb-4">
              <h2 class="text-3xl font-bold">Invoice Falcon</h2>
              <span class="bg-yellow-400 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold">Shopify App</span>
            </div>
            <p class="text-gray-300 mb-6">
              A comprehensive invoicing solution for Shopify merchants, transforming how businesses handle their billing and compliance needs globally.
            </p>
            <div class="flex flex-wrap gap-2 mb-8">
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">Ruby on Rails</span>
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">React</span>
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">Shopify API</span>
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">AWS</span>
            </div>
            <NuxtLink 
              to="/case-studies/invoice-falcon"
              class="inline-block bg-yellow-400 text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              View Case Study
            </NuxtLink>
          </div>
        </div>

        <!-- Rumie -->
        <div class="bg-navy-700 rounded-2xl overflow-hidden group">
          <div class="aspect-video bg-gradient-to-br from-navy-600 to-navy-800 relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-2xl font-bold text-navy-400">Rumie</span>
            </div>
          </div>
          <div class="p-8">
            <div class="flex justify-between items-start mb-4">
              <h2 class="text-3xl font-bold">Rumie</h2>
              <span class="bg-yellow-400 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold">Non-Profit</span>
            </div>
            <p class="text-gray-300 mb-6">
              Democratizing education through bite-sized learning experiences, reaching learners across 176 countries with innovative mobile and web solutions.
            </p>
            <div class="flex flex-wrap gap-2 mb-8">
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">React Native</span>
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
              <span class="bg-navy-800 px-3 py-1 rounded-full text-sm">AWS</span>
            </div>
            <NuxtLink 
              to="/case-studies/rumie"
              class="inline-block bg-yellow-400 text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              View Case Study
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <div class="mt-20">
        <ReviewsSection />
      </div>
    </div>
  </main>
</template>

<script setup>
import ReviewsSection from '../components/ReviewsSection.vue'

useHead({
  title: 'Our Projects & Case Studies | Acorn Globus',
  meta: [
    {
      name: 'description',
      content: 'Discover our portfolio of successful digital projects. From SaaS platforms to enterprise solutions, explore how we help businesses transform through technology.'
    },
    {
      name: 'keywords',
      content: 'software projects, case studies, digital transformation, web development, mobile apps, enterprise solutions'
    },
    {
      property: 'og:title',
      content: 'Our Projects & Case Studies | Acorn Globus'
    },
    {
      property: 'og:description',
      content: 'Explore our portfolio of successful digital transformations and innovative solutions that help businesses thrive in the digital age.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://acornglobus.com/projects'
    }
  ]
})
</script>
