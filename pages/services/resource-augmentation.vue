<template>
  <main class="min-h-screen bg-navy-900 text-white">
    <div class="container mx-auto px-4 py-20">
      <!-- Hero Section -->
      <div class="max-w-4xl mx-auto mb-20">
        <div class="inline-block bg-navy-700 px-4 py-2 rounded-full text-yellow-400 text-sm font-semibold mb-6">
          Resource Augmentation Services
        </div>
        <h1 class="text-5xl md:text-6xl font-bold mb-8">
          Strengthen Your Team with Expert Talent
        </h1>
        <p class="text-xl text-gray-300 mb-8">
          Scale your development capabilities with our skilled professionals who seamlessly integrate into your team. From frontend specialists to full-stack developers, we provide the expertise you need to accelerate your projects.
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-navy-700 p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-2">Flexible Scaling</h3>
            <p class="text-gray-300">Scale your team up or down based on project needs.</p>
          </div>
          <div class="bg-navy-700 p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-2">Seamless Integration</h3>
            <p class="text-gray-300">Our experts adapt to your workflows and culture.</p>
          </div>
        </div>
      </div>

      <!-- Technology Stack Section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Technology Expertise</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <!-- Frontend -->
          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434 12 19.928l5.51-1.494L18.812 4H5.188z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Frontend</h3>
            <ul class="space-y-2 text-gray-300">
              <li>React.js</li>
              <li>Vue.js</li>
              <li>Next.js</li>
              <li>Nuxt.js</li>
              <li>Angular</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <!-- Backend -->
          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Backend</h3>
            <ul class="space-y-2 text-gray-300">
              <li>Node.js</li>
              <li>Python/Django</li>
              <li>Ruby on Rails</li>
              <li>Java Spring</li>
              <li>PHP/Laravel</li>
              <li>.NET Core</li>
            </ul>
          </div>

          <!-- Cloud & DevOps -->
          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Cloud & DevOps</h3>
            <ul class="space-y-2 text-gray-300">
              <li>AWS</li>
              <li>Google Cloud</li>
              <li>Azure</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>CI/CD</li>
            </ul>
          </div>

          <!-- Additional Skills -->
          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Additional Skills</h3>
            <ul class="space-y-2 text-gray-300">
              <li>UI/UX Design</li>
              <li>Mobile Development</li>
              <li>QA & Testing</li>
              <li>Project Management</li>
              <li>Technical Writing</li>
              <li>Data Science</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Benefits Section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">Why Choose Our Resource Augmentation</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Vetted Talent</h3>
            <p class="text-gray-300">
              All our professionals go through rigorous technical assessments and background checks.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Flexible Engagement</h3>
            <p class="text-gray-300">
              Scale your team up or down based on project requirements with minimal notice period.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Cost Effective</h3>
            <p class="text-gray-300">
              Reduce hiring costs and overhead while maintaining high quality output.
            </p>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <ReviewsSection />

      <!-- CTA Section -->
      <div class="bg-navy-700 rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Strengthen Your Team?</h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how our talent augmentation services can help accelerate your development goals.
        </p>
        <NuxtLink 
          to="/contact" 
          class="inline-block bg-yellow-400 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
        >
          Get Started
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import ReviewsSection from '../../components/ReviewsSection.vue'
</script>