<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Code2 class="h-7 w-7 text-white" />
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900">Acorn Globus</div>
              <div class="text-xs text-gray-500 uppercase tracking-wider">Digital Solutions</div>
            </div>
          </div>

          <div class="hidden lg:flex items-center space-x-8">
            <NuxtLink to="/v3" class="text-purple-600 font-medium">Home</NuxtLink>
            <NuxtLink to="/v3/about" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">About</NuxtLink>
            <NuxtLink to="/v3/services" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">Services</NuxtLink>
            <NuxtLink to="/v3/portfolio" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">Portfolio</NuxtLink>
            <NuxtLink to="/v3/contact" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">Contact</NuxtLink>
            <NuxtLink
              to="/contact"
              class="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Start Project
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content Section -->
          <div class="order-2 lg:order-1">
            <div class="mb-6">
              <span class="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Innovative IT Solutions
              </span>
              <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {{ heroSlides[currentSlide].title }}
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 block mt-2">
                  {{ heroSlides[currentSlide].subtitle }}
                </span>
              </h1>
              <p class="text-xl text-gray-600 mb-8">
                {{ heroSlides[currentSlide].description }}
              </p>
            </div>

            <!-- Stats Row -->
            <div class="grid grid-cols-3 gap-6 mb-8">
              <div class="text-center lg:text-left">
                <div class="text-3xl font-bold text-gray-900">100+</div>
                <div class="text-sm text-gray-600">Projects</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-3xl font-bold text-gray-900">50+</div>
                <div class="text-sm text-gray-600">Clients</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-3xl font-bold text-gray-900">5+</div>
                <div class="text-sm text-gray-600">Years</div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-4">
              <NuxtLink
                :to="heroSlides[currentSlide].cta.link"
                class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                {{ heroSlides[currentSlide].cta.text }}
                <ArrowRight class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
              <button class="inline-flex items-center px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300">
                <Sparkles class="mr-2 h-5 w-5" />
                View Portfolio
              </button>
            </div>

            <!-- Slide Navigation -->
            <div class="flex items-center space-x-4 mt-8">
              <button
                @click="currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length"
                class="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <ChevronDown class="h-5 w-5 text-gray-600 rotate-90" />
              </button>
              <div class="flex space-x-2">
                <button
                  v-for="(_, index) in heroSlides"
                  :key="index"
                  @click="currentSlide = index"
                  :class="[
                    'transition-all duration-300',
                    index === currentSlide
                      ? 'w-8 h-2 bg-purple-600 rounded-full'
                      : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                  ]"
                />
              </div>
              <button
                @click="currentSlide = (currentSlide + 1) % heroSlides.length"
                class="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <ChevronDown class="h-5 w-5 text-gray-600 -rotate-90" />
              </button>
            </div>
          </div>

          <!-- Image Section -->
          <div class="order-1 lg:order-2 relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <div class="relative h-[400px] lg:h-[600px]">
                <div
                  v-for="(slide, index) in heroSlides"
                  :key="index"
                  :class="[
                    'absolute inset-0 transition-all duration-700',
                    index === currentSlide
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  ]"
                >
                  <img
                    :src="slide.image"
                    :alt="slide.title"
                    class="w-full h-full object-cover"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                </div>
              </div>

              <!-- Overlay Info Cards -->
              <div class="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                <div class="bg-white/90 backdrop-blur-md rounded-lg p-4">
                  <div class="flex items-center space-x-3">
                    <div class="p-2 bg-purple-100 rounded-lg">
                      <Rocket class="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-900">Rapid MVP</div>
                      <div class="text-xs text-gray-600">2-4 Weeks</div>
                    </div>
                  </div>
                </div>
                <div class="bg-white/90 backdrop-blur-md rounded-lg p-4">
                  <div class="flex items-center space-x-3">
                    <div class="p-2 bg-green-100 rounded-lg">
                      <Shield class="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-900">Secure</div>
                      <div class="text-xs text-gray-600">Enterprise Grade</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide Counter -->
              <div class="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-full px-4 py-2">
                <span class="text-sm font-medium text-gray-900">
                  {{ String(currentSlide + 1).padStart(2, '0') }} / {{ String(heroSlides.length).padStart(2, '0') }}
                </span>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-purple-100 rounded-full opacity-20 blur-2xl"></div>
            <div class="absolute -z-10 -bottom-4 -left-4 w-72 h-72 bg-indigo-100 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories Section - Formester & Eitoss -->
    <section class="py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming ideas into successful products that make a real impact
          </p>
        </div>

        <!-- Formester Case Study -->
        <div class="mb-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Sparkles class="h-4 w-4 mr-2" />
                Our Own SaaS Product
              </div>
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Formester
                <span class="block text-xl text-gray-600 mt-2">Our AI-Powered Form Builder</span>
              </h3>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                We built Formester as our own SaaS product, demonstrating our expertise in creating
                scalable, innovative solutions. This AI-powered platform lets users create sophisticated
                forms simply by describing them in plain English - no coding required.
              </p>

              <div class="grid grid-cols-2 gap-6 mb-8">
                <div class="bg-blue-50 p-6 rounded-2xl">
                  <Terminal class="h-8 w-8 text-blue-600 mb-3" />
                  <h4 class="font-bold text-gray-900 mb-1">AI-Powered</h4>
                  <p class="text-sm text-gray-600">Smart form generation with AI</p>
                </div>
                <div class="bg-green-50 p-6 rounded-2xl">
                  <Zap class="h-8 w-8 text-green-600 mb-3" />
                  <h4 class="font-bold text-gray-900 mb-1">No-Code</h4>
                  <p class="text-sm text-gray-600">Build forms without coding</p>
                </div>
              </div>

              <div class="flex items-center space-x-8 mb-8">
                <div>
                  <div class="text-3xl font-bold text-purple-600">1000+</div>
                  <div class="text-sm text-gray-600">Active Users</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-purple-600">50K+</div>
                  <div class="text-sm text-gray-600">Forms Created</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-purple-600">4.8★</div>
                  <div class="text-sm text-gray-600">User Rating</div>
                </div>
              </div>

              <div class="flex gap-4">
                <a
                  href="https://formester.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  Visit Formester
                  <ArrowUpRight class="ml-1 h-4 w-4" />
                </a>
                <NuxtLink
                  to="/v3/case-studies/formester"
                  class="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  View Case Study
                  <ArrowRight class="ml-1 h-4 w-4" />
                </NuxtLink>
              </div>
            </div>

            <div class="order-1 lg:order-2 relative">
              <div class="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-10 blur-2xl"></div>
              <div class="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
                  alt="Formester Platform"
                  class="rounded-2xl shadow-xl"
                >
                <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Rocket class="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div class="text-sm font-semibold text-gray-900">Our Product</div>
                      <div class="text-xs text-gray-600">Live & Growing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Eitoss Case Study -->
        <div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative">
              <div class="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl opacity-10 blur-2xl"></div>
              <div class="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80"
                  alt="Eitoss Platform"
                  class="rounded-2xl shadow-xl"
                >
                <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Target class="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div class="text-sm font-semibold text-gray-900">MVP Success</div>
                      <div class="text-xs text-gray-600">Secured Funding</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                <Award class="h-4 w-4 mr-2" />
                Startup Success
              </div>
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Eitoss
                <span class="block text-xl text-gray-600 mt-2">MVP That Secured Funding</span>
              </h3>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                We partnered with Eitoss to build their MVP from scratch, transforming their innovative
                idea into a market-ready product. Our rapid development approach helped them secure
                funding and launch successfully in record time.
              </p>

              <div class="grid grid-cols-2 gap-6 mb-8">
                <div class="bg-green-50 p-6 rounded-2xl">
                  <Clock class="h-8 w-8 text-green-600 mb-3" />
                  <h4 class="font-bold text-gray-900 mb-1">8 Weeks</h4>
                  <p class="text-sm text-gray-600">From idea to MVP</p>
                </div>
                <div class="bg-emerald-50 p-6 rounded-2xl">
                  <TrendingUp class="h-8 w-8 text-emerald-600 mb-3" />
                  <h4 class="font-bold text-gray-900 mb-1">Funded</h4>
                  <p class="text-sm text-gray-600">Successfully raised capital</p>
                </div>
              </div>

              <div class="flex items-center space-x-8 mb-8">
                <div>
                  <div class="text-3xl font-bold text-green-600">100%</div>
                  <div class="text-sm text-gray-600">On-Time Delivery</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-green-600">3x</div>
                  <div class="text-sm text-gray-600">ROI in 6 months</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-green-600">✓</div>
                  <div class="text-sm text-gray-600">Funded Startup</div>
                </div>
              </div>

              <NuxtLink
                to="/v3/case-studies/eitoss"
                class="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                View Case Study
                <ArrowRight class="ml-2 h-4 w-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section - Feature Card Design -->
    <section class="py-24 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Real results from real partnerships
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Featured Testimonial -->
          <div class="order-2 lg:order-1">
            <div class="relative">
              <div class="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full blur-2xl opacity-60"></div>
              <div class="relative bg-gradient-to-br from-white to-purple-50/30 rounded-3xl p-10 border border-purple-100">
                <Quote class="h-12 w-12 text-purple-200 mb-6" />

                <p class="text-2xl text-gray-800 leading-relaxed mb-8 font-light">
                  "{{ testimonials[0].content }}"
                </p>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img
                      :src="testimonials[0].avatar"
                      :alt="testimonials[0].name"
                      class="w-16 h-16 rounded-full mr-4 border-3 border-purple-200"
                    >
                    <div>
                      <h4 class="text-lg font-bold text-gray-900">{{ testimonials[0].name }}</h4>
                      <p class="text-gray-600">{{ testimonials[0].role }}, {{ testimonials[0].company }}</p>
                    </div>
                  </div>
                  <div class="flex">
                    <Star v-for="i in testimonials[0].rating" :key="i" class="h-6 w-6 fill-purple-400 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Other Testimonials Grid -->
          <div class="order-1 lg:order-2 space-y-4">
            <div
              v-for="(testimonial, index) in testimonials.slice(1)"
              :key="index"
              class="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div class="flex items-start space-x-4">
                <img
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  class="w-10 h-10 rounded-full flex-shrink-0"
                >
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-2">
                    <div>
                      <h5 class="font-semibold text-gray-900">{{ testimonial.name }}</h5>
                      <p class="text-xs text-gray-600">{{ testimonial.role }}, {{ testimonial.company }}</p>
                    </div>
                    <div class="flex">
                      <Star v-for="i in testimonial.rating" :key="i" class="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    "{{ testimonial.content }}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section - Minimal Design -->
    <section class="py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to transform your business and accelerate growth
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group relative"
          >
            <!-- Card -->
            <div class="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <!-- Icon -->
              <div class="mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <component :is="service.icon" class="h-8 w-8 text-purple-600" />
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                {{ service.title }}
              </h3>

              <!-- Description -->
              <p class="text-gray-600 text-sm mb-6 leading-relaxed">
                {{ service.description }}
              </p>

              <!-- Features List -->
              <ul class="space-y-2 mb-6">
                <li v-for="(feature, idx) in service.features" :key="idx" class="flex items-center text-sm text-gray-600">
                  <CheckCircle class="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  {{ feature }}
                </li>
              </ul>

              <!-- CTA -->
              <NuxtLink
                :to="service.link"
                class="inline-flex items-center text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors"
              >
                Explore Service
                <ArrowUpRight class="ml-1 h-3 w-3" />
              </NuxtLink>
            </div>

            <!-- Hover Accent -->
            <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Ideas?
        </h2>
        <p class="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Partner with us to bring your vision to life with cutting-edge technology and innovative solutions.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
            <ArrowRight class="ml-2 h-5 w-5" />
          </NuxtLink>
          <NuxtLink
            to="/portfolio"
            class="inline-flex items-center px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300"
          >
            View Portfolio
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  ArrowRight, ChevronDown, Code2, Users, Globe, Award, Sparkles,
  Rocket, Target, Clock, CheckCircle, ArrowUpRight, Quote, Star,
  MapPin, Mail, Linkedin, Twitter, Github, Zap, Shield, Terminal,
  TrendingUp
} from 'lucide-vue-next'

// Use the v3 layout without default header/footer
definePageMeta({
  layout: 'v3'
})

const currentSlide = ref(0)

const heroSlides = [
  {
    title: 'Crafting Digital',
    subtitle: 'Experiences with Passion',
    description: 'Transformative solutions that empower businesses through innovative technology and user-centric design.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80',
    cta: { text: 'Start Your Project', link: '/contact' }
  },
  {
    title: 'AI-Powered',
    subtitle: 'Innovation at Scale',
    description: 'Leverage cutting-edge AI and machine learning to transform your business processes.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2000&q=80',
    cta: { text: 'Explore Solutions', link: '/services' }
  },
  {
    title: 'No-Code',
    subtitle: 'Development Platform',
    description: 'Build powerful applications without writing code. From MVP to production in weeks, not months.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=2000&q=80',
    cta: { text: 'See Our Work', link: '/portfolio' }
  }
]

const services = [
  {
    icon: Users,
    title: 'Resource Augmentation',
    description: 'Boost your team with our skilled professionals.',
    features: ['Dedicated Teams', 'Flexible Engagement', 'Expert Developers'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    link: '/v3/services/resource-augmentation'
  },
  {
    icon: Clock,
    title: 'Short & Long-Term Projects',
    description: 'Flexible engagement models for projects of any duration.',
    features: ['Fixed Price', 'Time & Material', 'Dedicated Teams'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
    link: '/v3/services/long-term-projects'
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Ongoing support to keep your systems running smoothly.',
    features: ['24/7 Support', 'Bug Fixes', 'Performance Optimization'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    link: '/v3/services/maintenance-support'
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Launch your product idea in just 8-12 weeks with our rapid MVP development.',
    features: ['8-12 Week Timeline', 'Agile Development', 'Investor-Ready'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    link: '/v3/services/mvp-development'
  }
]

const testimonials = [
  {
    name: 'Alon Diamant',
    role: 'CTO',
    company: 'Mayple',
    content: 'Acorn Globus is a very proficient team, quick to learn new technologies and concepts. They quickly dove in deep and generated impressive results of high quality that are still operational to this day.',
    avatar: '/images/testimonials/alon.jpeg',
    rating: 5
  },
  {
    name: 'Enzo Zadrima',
    role: 'Chief Technology Officer',
    company: 'Viewber',
    content: 'Acorn Globus is a gifted team with a rare combination of attention to detail and an overall sense for the big picture. They are very passionate about what they do and come up proactively with improvement ideas.',
    avatar: '/images/testimonials/enzo.jpeg',
    rating: 5
  },
  {
    name: 'Bogdan Arsenie',
    role: 'CTO',
    company: 'PerformLine & Social Impact Advocate',
    content: 'Acorn Globus is my go-to team when I need a trusted partner to execute any front-end project. They are super attentive, communicate effectively, and accurately manage your expectations for their time and involvement.',
    avatar: '/images/testimonials/bogdan.jpeg',
    rating: 5
  }
]

let slideInterval = null

onMounted(() => {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroSlides.length
  }, 6000)
})

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>