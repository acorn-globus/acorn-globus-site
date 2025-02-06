<template>
  <div class="min-h-screen bg-navy-900">
    <!-- Navigation -->
    <nav class="bg-navy-900 p-4 sticky top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-white text-xl font-bold">
          <img
            src="@/assets/images/acorn-globus-logo.svg"
            alt="Company Logo"
            width="150px"
          />
        </NuxtLink>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="md:hidden text-white focus:outline-none"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isMenuOpen" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-6">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path" 
            class="text-white hover:text-yellow-400 transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="isMenuOpen" 
        class="md:hidden absolute top-full left-0 right-0 bg-navy-800 border-t border-navy-700"
      >
        <div class="container mx-auto py-4">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path" 
            class="block py-2 px-4 text-white hover:text-yellow-400 transition-colors"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <slot />

    <!-- Footer -->
    <footer class="bg-navy-800 text-white pt-16 pb-8">
      <div class="container mx-auto px-4">
        <!-- Get in Touch Section -->
        <div class="bg-navy-700 rounded-2xl p-8 mb-12">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 class="text-2xl font-bold mb-2">Ready to Start Your Project?</h3>
              <p class="text-gray-300">Let's discuss how we can help bring your ideas to life.</p>
            </div>
            <NuxtLink 
              to="/contact"
              class="mt-4 md:mt-0 inline-block bg-yellow-400 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Get in Touch
            </NuxtLink>
          </div>
        </div>

        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <!-- Company Info -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold mb-4">Acorn Globus</h3>
            <p class="text-gray-400">Building digital experiences with passion and innovation.</p>
            <div class="space-y-2">
              <p class="flex items-center text-gray-400">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:business@acornglobus.com" class="hover:text-yellow-400">
                  business@acornglobus.com
                </a>
              </p>
              <p class="flex items-center text-gray-400">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                Gachibowli, Hyderabad
              </p>
            </div>

            <!-- Social Links -->
            <div class="flex space-x-4 pt-4">
              <a 
                href="https://www.linkedin.com/company/acornglobus" 
                target="_blank"
                rel="noopener noreferrer" 
                class="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/acornglobus/?hl=en" 
                target="_blank"
                rel="noopener noreferrer" 
                class="text-gray-400 hover:text-yellow-400 transition-colors"
              >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
              </svg>
              </a>
              <!-- <a 
                href="https://github.com/acornglobus" 
                target="_blank"
                rel="noopener noreferrer" 
                class="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a> -->
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/" class="text-gray-400 hover:text-yellow-400">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="text-gray-400 hover:text-yellow-400">About Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/projects" class="text-gray-400 hover:text-yellow-400">Projects</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/process" class="text-gray-400 hover:text-yellow-400">Our Process</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/pdf-tool" class="text-yellow-400 hover:text-yellow-400">PDF Tool Try Now</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="text-xl font-bold mb-4">Services</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/services/resource-augmentation" class="text-gray-400 hover:text-yellow-400">
                  Resource Augmentation
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/maintenance-support" class="text-gray-400 hover:text-yellow-400">
                  Maintenance Support
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/mvp-development" class="text-gray-400 hover:text-yellow-400">
                  MVP Development
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/long-term-projects" class="text-gray-400 hover:text-yellow-400">
                  Long-term Projects
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Technologies -->
          <div>
            <h3 class="text-xl font-bold mb-4">Technologies</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/technologies/ruby-on-rails" class="text-gray-400 hover:text-yellow-400">
                  Ruby on Rails
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/technologies/vuejs" class="text-gray-400 hover:text-yellow-400">
                  Vue.js
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/technologies/reactjs" class="text-gray-400 hover:text-yellow-400">
                  React.js
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/technologies/angular" class="text-gray-400 hover:text-yellow-400">
                  Angular
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/technologies/dotnet" class="text-gray-400 hover:text-yellow-400">
                  .NET
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="border-t border-navy-700 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm">
              © 2024 Acorn Globus. All rights reserved.
            </p>
            <div class="flex space-x-4 mt-4 md:mt-0">
              <NuxtLink to="/privacy-policy" class="text-gray-400 hover:text-yellow-400 text-sm">
                Privacy Policy
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Our Process', path: '/process' },
  { name: 'Projects', path: '/projects' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
</script>