<template>
  <main class="min-h-screen bg-navy-900 text-white">
    <div class="container mx-auto px-4 py-20">
      <!-- Hero Section -->
      <div class="max-w-4xl mx-auto mb-20">
        <div class="inline-block bg-navy-700 px-4 py-2 rounded-full text-yellow-400 text-sm font-semibold mb-6">
          Technology Expertise
        </div>
        <h1 class="text-5xl md:text-6xl font-bold mb-8">
          Vue.js Development
        </h1>
        <p class="text-xl text-gray-300 mb-8">
          Creating modern, reactive web applications with Vue.js. Our expert Vue developers specialize in building performant, scalable, and maintainable front-end solutions.
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-navy-700 p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-2">6+ Years Experience</h3>
            <p class="text-gray-300">Deep expertise in Vue ecosystem</p>
          </div>
          <div class="bg-navy-700 p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-2">30+ Vue Projects</h3>
            <p class="text-gray-300">Successful project deliveries</p>
          </div>
        </div>
      </div>

      <!-- Our Expertise -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Vue.js Expertise</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Single Page Apps</h3>
            <p class="text-gray-300">
              Modern SPAs with Vue 3 and Composition API.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Nuxt.js Applications</h3>
            <p class="text-gray-300">
              SSR and static site generation with Nuxt 3.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Performance Optimization</h3>
            <p class="text-gray-300">
              Building fast, optimized Vue applications.
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
                <span class="text-gray-300">Vue.js (2.x & 3.x)</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">Nuxt.js</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">Vuex / Pinia</span>
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
                <span class="text-gray-300">Vue Test Utils / Vitest</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">TypeScript</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">Vite / Webpack</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Success Stories -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">Success Stories</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-navy-700 p-8 rounded-2xl">
            <h3 class="text-xl font-bold mb-4">Formester</h3>
            <p class="text-gray-300 mb-6">
              Built a modern form builder platform using Vue.js and Nuxt, featuring AI-powered form generation.
            </p>
            <NuxtLink 
              to="/case-studies/formester"
              class="text-yellow-400 hover:text-yellow-500 font-semibold"
            >
              View Case Study →
            </NuxtLink>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <h3 class="text-xl font-bold mb-4">Invoice Falcon</h3>
            <p class="text-gray-300 mb-6">
              Developed a comprehensive Shopify invoicing solution with Vue.js frontend.
            </p>
            <NuxtLink 
              to="/case-studies/invoice-falcon"
              class="text-yellow-400 hover:text-yellow-500 font-semibold"
            >
              View Case Study →
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-navy-700 rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-bold mb-6">Need Vue.js Expertise?</h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how our Vue.js development expertise can help accelerate your project.
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