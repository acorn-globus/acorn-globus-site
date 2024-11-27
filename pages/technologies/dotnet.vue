<template>
  <main class="min-h-screen bg-navy-900 text-white">
    <div class="container mx-auto px-4 py-20">
      <!-- Hero Section -->
      <div class="max-w-4xl mx-auto mb-20">
        <div class="inline-block bg-navy-700 px-4 py-2 rounded-full text-yellow-400 text-sm font-semibold mb-6">
          Technology Expertise
        </div>
        <h1 class="text-5xl md:text-6xl font-bold mb-8">
          .NET Development
        </h1>
        <p class="text-xl text-gray-300 mb-8">
          Building robust, enterprise-grade applications with .NET. Our expert .NET developers specialize in creating scalable, secure, and high-performance solutions using Microsoft's cutting-edge technology stack.
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-navy-700 p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-2">7+ Years Experience</h3>
            <p class="text-gray-300">Deep expertise in .NET ecosystem</p>
          </div>
          <div class="bg-navy-700 p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-2">30+ .NET Projects</h3>
            <p class="text-gray-300">Enterprise-level deliveries</p>
          </div>
        </div>
      </div>

      <!-- Our Expertise -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">Our .NET Expertise</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Web Applications</h3>
            <p class="text-gray-300">
              Modern web apps with ASP.NET Core and Blazor.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Microservices</h3>
            <p class="text-gray-300">
              Distributed systems with .NET microservices.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Cloud Solutions</h3>
            <p class="text-gray-300">
              Azure-native applications and cloud services.
            </p>
          </div>
        </div>
      </div>

      <!-- Technical Skills -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">Technical Proficiency</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-navy-700 p-8 rounded-2xl">
            <h3 class="text-xl font-bold mb-6">Core Competencies</h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">.NET 6/7/8</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">ASP.NET Core</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">Entity Framework Core</span>
              </li>
            </ul>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <h3 class="text-xl font-bold mb-6">Additional Skills</h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">Azure Cloud Services</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">Blazor (Server/WASM)</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">gRPC / GraphQL</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Why Choose Us -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">Why Choose Us for .NET Development</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Proven Expertise</h3>
            <p class="text-gray-300">
              Our team brings years of experience in building enterprise-grade .NET applications with modern best practices.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Modern Stack</h3>
            <p class="text-gray-300">
              We stay current with the latest .NET technologies and best practices to deliver future-proof solutions.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Scalable Solutions</h3>
            <p class="text-gray-300">
              We architect solutions that grow with your business, from startups to enterprise-scale applications.
            </p>
          </div>
        </div>
      </div>

      <!-- Start Your Project Section -->
      <div class="bg-navy-700 rounded-2xl p-12">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Ready to Build Your .NET Solution?</h2>
          <p class="text-xl text-gray-300 mb-8">
            Whether you're starting a new project or need to scale your existing .NET application, our team is ready to help. Let's discuss how we can bring your vision to life with modern .NET development.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/contact" 
              class="inline-block bg-yellow-400 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Start Your Project
            </NuxtLink>
            <NuxtLink 
              to="/services/resource-augmentation" 
              class="inline-block bg-navy-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-600 transition-colors"
            >
              Explore Our Services
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>