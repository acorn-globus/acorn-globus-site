<template>
  <main class="min-h-screen bg-navy-900 text-white">
    <div class="container mx-auto px-4 py-20">
      <!-- Hero Section -->
      <div class="max-w-4xl mx-auto mb-20">
        <div class="inline-block bg-navy-700 px-4 py-2 rounded-full text-yellow-400 text-sm font-semibold mb-6">
          Our First Product
        </div>
        <h1 class="text-5xl md:text-6xl font-bold mb-8">
          Formester: Born from a Simple Vision
        </h1>
        <p class="text-xl text-gray-300">
          A bootstrapped journey of building a no-code form builder that puts user happiness first
        </p>
      </div>

      <!-- Our Story -->
      <div class="grid lg:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 class="text-3xl font-bold mb-6">Our Story</h2>
          <div class="prose prose-lg prose-invert">
            <p>
              We didn't start Formester because we saw a gap in the market or because we wanted to compete with funded companies. We started it because we believed we could make users' lives easier through thoughtful, well-crafted forms.
            </p>
            <p class="mt-4">
              Being bootstrapped isn't just our financial status—it's our strength. It gives us the freedom to focus solely on what matters: making our users happy. No investor pressure, no growth-at-all-costs mentality. Just pure, user-focused development.
            </p>
          </div>
        </div>
        <div class="bg-navy-700 p-8 rounded-2xl">
          <h3 class="text-xl font-bold mb-6">The Formester Way</h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-7.208a2.5 2.5 0 111.023-4.89l.977.204v6.173l-2-1.487z"/>
              </svg>
              <span>Ship fast, learn faster</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"/>
              </svg>
              <span>Embrace mistakes as learning opportunities</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-5-7h10v2H7v-2zm0-4h10v2H7V9z"/>
              </svg>
              <span>User feedback drives our roadmap</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1.95-9H15v2H10.05l2.223 2.223-1.414 1.414L6.92 12.7l3.94-3.94 1.414 1.414L10.05 11z"/>
              </svg>
              <span>Continuous iteration and improvement</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Key Features -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12">Built for User Happiness</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2V7h-4v2h2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">True No-Code Experience</h3>
            <p class="text-gray-300">
              Build complex forms without touching a single line of code. Just as we promised.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-3h9v2H5z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">AI Form Generation</h3>
            <p class="text-gray-300">
              Describe your form in plain English, watch AI create it instantly.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4h-4v-2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H9v2h4v2h-2c-1.1 0-2 .9-2 2v4h6v-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Smart Analytics</h3>
            <p class="text-gray-300">
              Understand your form performance and user behavior in real-time.
            </p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="bg-navy-700 rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-bold mb-6">Experience Formester Today</h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are creating better forms and collecting data more efficiently with Formester.
        </p>
        <a 
          href="https://formester.com" 
          target="_blank" 
          class="inline-block bg-yellow-400 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
        >
          Try Formester Free
        </a>
      </div>
    </div>
  </main>
</template>