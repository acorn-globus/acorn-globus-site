<template>
  <footer class="bg-gray-100 text-gray-600 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="mb-6">
            <img
              src="/images/acorn-globus-logo-dark.svg"
              alt="Acorn Globus"
              class="h-10 w-auto"
            >
          </div>
          <p class="text-sm mb-4">
            Crafting digital experiences with passion and innovation. Your trusted partner for transformative solutions.
          </p>
          <div class="flex space-x-4">
            <a href="https://www.linkedin.com/company/acornglobus" target="_blank" class="text-gray-400 hover:text-purple-600 transition-colors">
              <Linkedin class="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/acornglobus/?hl=en" target="_blank" class="text-gray-400 hover:text-purple-600 transition-colors">
              <Instagram class="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-gray-900 font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/about" class="hover:text-purple-600 transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-purple-600 transition-colors">Services</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="hover:text-purple-600 transition-colors">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-purple-600 transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-gray-900 font-semibold mb-4">Services</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/services/resource-augmentation" class="hover:text-purple-600 transition-colors">Resource Augmentation</NuxtLink></li>
            <li><NuxtLink to="/services/long-term-projects" class="hover:text-purple-600 transition-colors">Long-Term Projects</NuxtLink></li>
            <li><NuxtLink to="/services/maintenance-support" class="hover:text-purple-600 transition-colors">Maintenance & Support</NuxtLink></li>
            <li><NuxtLink to="/services/mvp-development" class="hover:text-purple-600 transition-colors">MVP Development</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-gray-900 font-semibold mb-4">Contact Info</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start space-x-3">
              <MapPin class="h-4 w-4 mt-1 flex-shrink-0" />
              <span>Nagpur, Maharashtra, India</span>
            </li>
            <li class="flex items-center space-x-3">
              <Mail class="h-4 w-4 flex-shrink-0" />
              <span>business@acornglobus.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-300 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center text-sm">
          <p class="text-gray-600">&copy; 2025 Acorn Globus. All rights reserved.</p>
          <div class="mt-4 md:mt-0">
            <NuxtLink to="/privacy-policy" class="text-gray-600 hover:text-purple-600 transition-colors">
              Privacy Policy
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPin, Mail, Linkedin, Instagram } from 'lucide-vue-next'
</script>