<template>
  <!-- Navigation -->
  <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/images/acorn-globus-logo-dark.svg"
            alt="Acorn Globus"
            class="h-12 w-auto"
          >
        </NuxtLink>

        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink
            to="/"
            :class="['font-medium transition-colors', currentPath === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600']"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            :class="['font-medium transition-colors', currentPath === '/about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600']"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/services"
            :class="['font-medium transition-colors', currentPath.startsWith('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600']"
          >
            Services
          </NuxtLink>
          <NuxtLink
            to="/portfolio"
            :class="['font-medium transition-colors', currentPath === '/portfolio' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600']"
          >
            Portfolio
          </NuxtLink>
          <NuxtLink
            to="/contact"
            :class="['font-medium transition-colors', currentPath === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600']"
          >
            Contact
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Start Project
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            <Menu v-if="!isMobileMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="isMobileMenuOpen" class="lg:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
          <NuxtLink
            to="/"
            :class="['block px-3 py-2 rounded-md font-medium transition-colors', currentPath === '/' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100']"
            @click="isMobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            :class="['block px-3 py-2 rounded-md font-medium transition-colors', currentPath === '/about' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100']"
            @click="isMobileMenuOpen = false"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/services"
            :class="['block px-3 py-2 rounded-md font-medium transition-colors', currentPath.startsWith('/services') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100']"
            @click="isMobileMenuOpen = false"
          >
            Services
          </NuxtLink>
          <NuxtLink
            to="/portfolio"
            :class="['block px-3 py-2 rounded-md font-medium transition-colors', currentPath === '/portfolio' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100']"
            @click="isMobileMenuOpen = false"
          >
            Portfolio
          </NuxtLink>
          <NuxtLink
            to="/contact"
            :class="['block px-3 py-2 rounded-md font-medium transition-colors', currentPath === '/contact' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100']"
            @click="isMobileMenuOpen = false"
          >
            Contact
          </NuxtLink>
          <div class="pt-4">
            <NuxtLink
              to="/contact"
              class="block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 text-center"
              @click="isMobileMenuOpen = false"
            >
              Start Project
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Menu, X } from 'lucide-vue-next'

// Props
const props = defineProps({
  subtitle: {
    type: String,
    default: 'Digital Solutions'
  }
})

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Get current path for active state
const route = useRoute()
const currentPath = computed(() => route.path)

// Close mobile menu when route changes
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})
</script>