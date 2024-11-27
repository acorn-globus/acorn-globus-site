<template>
  <main class="min-h-screen bg-navy-900 text-white">
    <div class="container mx-auto px-4 py-20">
      <!-- Hero Section -->
      <div class="max-w-4xl mx-auto mb-20">
        <div class="inline-block bg-navy-700 px-4 py-2 rounded-full text-yellow-400 text-sm font-semibold mb-6">
          Maintenance & Support Services
        </div>
        <h1 class="text-5xl md:text-6xl font-bold mb-8">
          Keep Your Systems Running at Peak Performance
        </h1>
        <p class="text-xl text-gray-300 mb-8">
          Our comprehensive maintenance and support services ensure your applications stay secure, efficient, and up-to-date. From routine updates to emergency support, we provide the ongoing care your systems need to thrive.
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-navy-700 p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-2">Proactive Maintenance</h3>
            <p class="text-gray-300">Regular updates, security patches, and performance optimization to prevent issues before they occur.</p>
          </div>
          <div class="bg-navy-700 p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-2">Responsive Support</h3>
            <p class="text-gray-300">24/7 technical support with guaranteed response times for critical issues.</p>
          </div>
        </div>
      </div>

      <!-- Service Levels -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">Comprehensive Support Levels</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Basic Maintenance</h3>
            <ul class="space-y-3 text-gray-300">
              <li>Regular updates and patches</li>
              <li>Security monitoring</li>
              <li>Performance optimization</li>
              <li>Standard response times</li>
            </ul>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Premium Support</h3>
            <ul class="space-y-3 text-gray-300">
              <li>24/7 emergency support</li>
              <li>Priority response times</li>
              <li>Dedicated support team</li>
              <li>Monthly reporting</li>
            </ul>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Enterprise Care</h3>
            <ul class="space-y-3 text-gray-300">
              <li>Custom SLA agreements</li>
              <li>On-site support options</li>
              <li>Proactive monitoring</li>
              <li>Strategic consulting</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Features -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Support Features</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Bug Fixes</h3>
            <p class="text-gray-300">
              Quick resolution of software issues and bugs.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Security Updates</h3>
            <p class="text-gray-300">
              Regular security patches and vulnerability fixes.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Performance</h3>
            <p class="text-gray-300">
              System optimization and performance tuning.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Monitoring</h3>
            <p class="text-gray-300">
              24/7 system monitoring and alerts.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-navy-700 rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-bold mb-6">Need Reliable Support?</h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how our maintenance and support services can help keep your systems running smoothly.
        </p>
        <NuxtLink 
          to="/contact" 
          class="inline-block bg-yellow-400 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
        >
          Get Support
        </NuxtLink>
      </div>
    </div>
  </main>
</template>