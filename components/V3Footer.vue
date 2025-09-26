<template>
  <footer class="bg-gray-100 text-gray-600 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Code2 class="h-6 w-6 text-white" />
            </div>
            <div class="text-xl font-bold text-gray-900">Acorn Globus</div>
          </div>
          <p class="text-sm mb-4">
            Crafting digital experiences with passion and innovation. Your trusted partner for transformative solutions.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-purple-600 transition-colors">
              <Linkedin class="h-5 w-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-purple-600 transition-colors">
              <Twitter class="h-5 w-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-purple-600 transition-colors">
              <Github class="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-gray-900 font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/v3/about" class="hover:text-purple-600 transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/v3/services" class="hover:text-purple-600 transition-colors">Services</NuxtLink></li>
            <li><NuxtLink to="/v3/portfolio" class="hover:text-purple-600 transition-colors">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/v3/contact" class="hover:text-purple-600 transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-gray-900 font-semibold mb-4">Services</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/v3/services/resource-augmentation" class="hover:text-purple-600 transition-colors">Resource Augmentation</NuxtLink></li>
            <li><NuxtLink to="/v3/services/long-term-projects" class="hover:text-purple-600 transition-colors">Long-Term Projects</NuxtLink></li>
            <li><NuxtLink to="/v3/services/maintenance-support" class="hover:text-purple-600 transition-colors">Maintenance & Support</NuxtLink></li>
            <li><NuxtLink to="/v3/services/mvp-development" class="hover:text-purple-600 transition-colors">MVP Development</NuxtLink></li>
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
import { Code2, MapPin, Mail, Linkedin, Twitter, Github } from 'lucide-vue-next'
</script>