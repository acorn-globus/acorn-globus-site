<template>
  <main class="min-h-screen bg-navy-900 text-white">
    <div class="container mx-auto px-4 py-20">
      <!-- Hero Section -->
      <div class="max-w-4xl mx-auto mb-20">
        <h1 class="text-5xl md:text-6xl font-bold mb-8">
          Our Story: From Two Dreamers to a Family of Builders
        </h1>
        <p class="text-xl text-gray-300">
          Building more than software - we're crafting a culture of care, empathy, and excellence
        </p>
      </div>

      <!-- Origin Story -->
      <div class="grid lg:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 class="text-3xl font-bold mb-6">The Beginning</h2>
          <div class="prose prose-lg prose-invert">
            <p>
              It all started with Ankit Singhania and a vision for Formester. In the early days of his career, 
              what began as a solo project soon found its perfect complement when Tarun Bhukya joined the journey. 
              Together, they didn't just build a product - they laid the foundation for something bigger.
            </p>
            <p class="mt-4">
              As people joined and the team grew, we realized we weren't just building Formester anymore. 
              We were building AcornGlobus - a company founded on the belief that great software comes from 
              people who truly care.
            </p>
          </div>
        </div>
        <div class="bg-navy-700 p-8 rounded-2xl">
          <h3 class="text-xl font-bold mb-8">Our Journey in Numbers</h3>
          <div class="grid grid-cols-2 gap-8">
            <div class="relative group">
              <div class="absolute inset-0 bg-yellow-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div class="relative p-6 text-center">
                <div class="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform">6+</div>
                <div class="text-sm uppercase tracking-wider text-gray-300">Years of<br/>Excellence</div>
              </div>
            </div>
            <div class="relative group">
              <div class="absolute inset-0 bg-yellow-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div class="relative p-6 text-center">
                <div class="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform">16+</div>
                <div class="text-sm uppercase tracking-wider text-gray-300">Team<br/>Members</div>
              </div>
            </div>
            <div class="relative group">
              <div class="absolute inset-0 bg-yellow-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div class="relative p-6 text-center">
                <div class="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform">25+</div>
                <div class="text-sm uppercase tracking-wider text-gray-300">Projects<br/>Delivered</div>
              </div>
            </div>
            <div class="relative group">
              <div class="absolute inset-0 bg-yellow-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div class="relative p-6 text-center">
                <div class="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform">98%</div>
                <div class="text-sm uppercase tracking-wider text-gray-300">Client<br/>Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Values -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">What We Stand For</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Culture First, Skills Second</h3>
            <p class="text-gray-300">
              We believe in hiring for heart and training for skills. Our culture of care and empathy is our foundation.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Growing Together</h3>
            <p class="text-gray-300">
              No titles, no boundaries. Just a team of passionate individuals supporting each other's growth.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Client Success First</h3>
            <p class="text-gray-300">
              We treat every project as our own, going the extra mile to ensure excellence in everything we deliver.
            </p>
          </div>
        </div>
      </div>

      <!-- Our Approach -->
      <div class="bg-navy-700 rounded-2xl p-12">
        <h2 class="text-3xl font-bold mb-8">The AcornGlobus Way</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="text-yellow-400">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <p class="text-gray-300">We don't just write code - we solve problems and build relationships</p>
            </div>
            <div class="flex items-start gap-4">
              <div class="text-yellow-400">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <p class="text-gray-300">Every team member is empowered to learn, grow, and excel in their chosen path</p>
            </div>
            <div class="flex items-start gap-4">
              <div class="text-yellow-400">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <p class="text-gray-300">We look for passion and potential, not just degrees and experience</p>
            </div>
          </div>
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="text-yellow-400">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <p class="text-gray-300">Quality code is our standard, exceptional service is our promise</p>
            </div>
            <div class="flex items-start gap-4">
              <div class="text-yellow-400">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <p class="text-gray-300">We build more than products - we build lasting partnerships</p>
            </div>
            <div class="flex items-start gap-4">
              <div class="text-yellow-400">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <p class="text-gray-300">Our strength lies in our unity and shared commitment to excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>