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
            .NET Development
          </h1>

          <p class="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
            Production-grade .NET applications - from web APIs to microservices to Azure-native cloud solutions.
            Our team has shipped .NET across enterprise and SaaS contexts, with a focus on clean architecture
            and long-term maintainability.
          </p>

          <div class="grid sm:grid-cols-2 gap-6 max-w-xl">
            <div class="bg-white rounded-2xl p-6 shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">6+ Years of Experience</h3>
              <p class="text-gray-600 text-sm">Deep expertise in the .NET ecosystem</p>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Enterprise & SaaS</h3>
              <p class="text-gray-600 text-sm">Real products shipped with real users</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Expertise -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Our .NET Expertise</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Globe class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Web Applications</h3>
            <p class="text-gray-600">Modern web apps with ASP.NET Core and Blazor.</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Layers class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Microservices</h3>
            <p class="text-gray-600">Distributed systems with .NET microservices.</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Cloud class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Cloud Solutions</h3>
            <p class="text-gray-600">Azure-native applications and cloud services.</p>
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
                <span class="text-gray-700">.NET 6/7/8</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">ASP.NET Core</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">Entity Framework Core</span>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Additional Skills</h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">Azure Cloud Services</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">Blazor (Server/WASM)</span>
              </li>
              <li class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span class="text-gray-700">gRPC / GraphQL</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us for .NET</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Shield class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Production Experience</h3>
            <p class="text-gray-600">
              We've shipped .NET applications in enterprise and SaaS environments - real products with real users.
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <Building class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Clean Architecture</h3>
            <p class="text-gray-600">
              .NET 8, ASP.NET Core, Entity Framework - built with proper structure so your team can maintain it long after we're done.
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
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Need .NET engineers?</h2>
        <p class="text-xl text-gray-600 mb-8">
          Whether you're building something new or maintaining an existing .NET application, we can help.
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
  ArrowRight, CheckCircle, Code, Layers, Globe, Cloud, Shield, Building, FileText
} from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: '.NET Development Services | AcornGlobus',
  description: '.NET development for web APIs, microservices, and enterprise applications. ASP.NET Core, Azure, Entity Framework. Clean architecture, full documentation, zero lock-in.',
  keywords: '.NET development, C#, ASP.NET Core, .NET Core, Azure, enterprise applications, .NET developers',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: '.NET Development Services | AcornGlobus',
  ogDescription: '.NET development for web APIs, microservices, and enterprise applications. Clean architecture, zero lock-in.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/technologies/dotnet',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: '.NET Development Services | AcornGlobus',
  twitterDescription: '.NET development for web APIs, microservices, and enterprise applications.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useHead({ link: [{ rel: 'canonical', href: 'https://acornglobus.com/technologies/dotnet' }] })

useBreadcrumbSchema([
  { name: 'Technologies', path: '/technologies/dotnet' },
  { name: '.NET', path: '/technologies/dotnet' },
])
</script>
