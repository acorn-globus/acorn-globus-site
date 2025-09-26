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
              <div class="text-xs text-gray-500 uppercase tracking-wider">Case Study</div>
            </div>
          </div>

          <div class="hidden lg:flex items-center space-x-8">
            <NuxtLink to="/v3" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">Home</NuxtLink>
            <NuxtLink to="/v3/about" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">About</NuxtLink>
            <NuxtLink to="/v3/services" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">Services</NuxtLink>
            <NuxtLink to="/v3/portfolio" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">Portfolio</NuxtLink>
            <NuxtLink to="/v3/contact" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">Contact</NuxtLink>
            <NuxtLink
              to="/v3/contact"
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
        <NuxtLink
          to="/v3/portfolio"
          class="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft class="h-4 w-4 mr-2" />
          Back to Portfolio
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              <Sparkles class="h-4 w-4 mr-2" />
              SaaS Product
            </div>

            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Formester
            </h1>
            <p class="text-2xl text-purple-600 font-semibold mb-4">
              {{ projectOverview.tagline }}
            </p>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Our flagship SaaS product showcasing our expertise in building scalable,
              user-centric applications. Formester demonstrates our ability to identify market
              opportunities and deliver innovative solutions.
            </p>

            <div class="flex flex-wrap gap-4 mb-8">
              <a
                :href="`https://${projectOverview.website}`"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Visit Live Site
                <ExternalLink class="h-4 w-4 ml-2" />
              </a>
              <button class="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200">
                Try Formester Free
                <ArrowRight class="h-4 w-4 ml-2" />
              </button>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div v-for="[key, value] in Object.entries({
                Product: projectOverview.product,
                Type: projectOverview.type,
                Status: projectOverview.status,
                Launched: projectOverview.launched
              })" :key="key">
                <p class="text-sm text-gray-500 mb-1">{{ key }}</p>
                <p class="font-semibold text-gray-900">{{ value }}</p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="aspect-w-16 aspect-h-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt="Formester Dashboard"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(result, idx) in results" :key="idx" class="text-center">
            <div class="inline-flex items-center justify-center w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl mb-4">
              <component :is="result.icon" class="h-6 w-6" />
            </div>
            <div class="text-3xl font-bold text-gray-900 mb-1">{{ result.metric }}</div>
            <div class="text-gray-600">{{ result.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenge & Solution -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Challenge -->
          <div>
            <div class="bg-white rounded-3xl p-8 shadow-lg h-full">
              <div class="inline-flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-2xl mb-6">
                <Target class="h-7 w-7" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ challenge.title }}</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ challenge.description }}</p>
              <ul class="space-y-3">
                <li v-for="(point, idx) in challenge.points" :key="idx" class="flex items-start">
                  <ChevronRight class="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700">{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Solution -->
          <div>
            <div class="bg-white rounded-3xl p-8 shadow-lg h-full">
              <div class="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-2xl mb-6">
                <CheckCircle class="h-7 w-7" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ solution.title }}</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ solution.description }}</p>
              <ul class="space-y-3">
                <li v-for="(point, idx) in solution.points" :key="idx" class="flex items-start">
                  <CheckCircle class="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700">{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Key Features Delivered</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            We built comprehensive features that set Formester apart from the competition
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, idx) in features"
            :key="idx"
            :class="[
              'bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300',
              activeFeature === idx
                ? 'shadow-2xl scale-105 border-2 border-purple-500'
                : 'shadow-lg hover:shadow-xl'
            ]"
            @click="activeFeature = idx"
          >
            <div class="inline-flex items-center justify-center w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl mb-6">
              <component :is="feature.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 mb-6">{{ feature.description }}</p>
            <ul class="space-y-2">
              <li v-for="(detail, detailIdx) in feature.details" :key="detailIdx" class="flex items-center text-sm text-gray-700">
                <CheckCircle class="h-4 w-4 text-purple-500 mr-2" />
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Principles -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Product Philosophy</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Formester embodies our approach to product development - user-focused, iterative, and built to last
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(principle, idx) in principles" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                  <Rocket class="h-5 w-5" />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">{{ principle.title }}</h3>
                <p class="text-gray-600">{{ principle.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Used -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p class="text-lg text-gray-600">
            Built with modern, scalable technologies
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <span
            v-for="(tech, idx) in technologies"
            :key="idx"
            class="px-6 py-3 bg-gradient-to-br from-purple-50 to-indigo-50 text-purple-700 rounded-full font-semibold hover:shadow-md transition-all duration-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl p-12 shadow-xl relative">
          <div class="absolute top-8 left-8">
            <MessageSquare class="h-8 w-8 text-purple-200" />
          </div>

          <blockquote class="text-xl text-gray-700 italic leading-relaxed mb-8">
            "{{ testimonial.content }}"
          </blockquote>

          <div class="flex items-center">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.author"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div class="font-semibold text-gray-900">{{ testimonial.author }}</div>
              <div class="text-sm text-gray-600">{{ testimonial.role }}, {{ testimonial.company }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-white">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Build Your Own Success Story
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Just like Formester, we can help transform your ideas into successful products
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/v3/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Start Your Project
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/v3/portfolio"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200"
          >
            View More Projects
            <ChevronRight class="h-5 w-5 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center space-x-3 mb-4 md:mb-0">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Code2 class="h-6 w-6 text-white" />
            </div>
            <div>
              <div class="text-xl font-bold text-gray-900">Acorn Globus</div>
              <div class="text-xs text-gray-500">Digital Solutions Partner</div>
            </div>
          </div>

          <div class="flex items-center space-x-6">
            <a href="mailto:business@acornglobus.com" class="text-gray-600 hover:text-purple-600 transition-colors">
              business@acornglobus.com
            </a>
            <span class="text-gray-400">|</span>
            <span class="text-gray-600">© 2024 Acorn Globus</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  ArrowRight, Code2, Sparkles, Zap, Users, TrendingUp, Rocket,
  CheckCircle, Star, ChevronRight, Brain, BarChart3, Layout,
  MessageSquare, ArrowLeft, ExternalLink, Clock, Target, Award
} from 'lucide-vue-next'

// Use the v3 layout
definePageMeta({
  layout: 'v3'
})

const activeFeature = ref(0)

const projectOverview = {
  product: 'Formester',
  industry: 'SaaS / Software',
  type: 'Our Own Product',
  status: 'Live & Growing',
  launched: '2023',
  website: 'formester.com',
  tagline: 'AI-Powered No-Code Form Builder'
}

const challenge = {
  title: 'Why We Built Formester',
  description: 'We saw an opportunity in the form builder market. Most solutions were either too complex for non-technical users or too limited for advanced needs. We wanted to create something different - a platform that combines simplicity with power.',
  points: [
    'Most form builders required coding knowledge',
    'Lack of AI-powered form generation',
    'Limited insights and analytics',
    'Poor user experience for non-technical users'
  ]
}

const solution = {
  title: 'What We Built',
  description: 'We created Formester as a bootstrapped SaaS product, demonstrating our ability to conceptualize, build, and scale a complete product. Every feature was carefully crafted based on real user needs.',
  points: [
    'Intuitive no-code builder anyone can use',
    'First-to-market AI form generation',
    'Comprehensive analytics dashboard',
    'Enterprise-grade integrations'
  ]
}

const features = [
  {
    icon: Brain,
    title: 'AI Form Generation',
    description: 'Describe your form in plain English and watch AI create it instantly. No templates, no restrictions - just pure creativity.',
    details: [
      'Natural language processing',
      'Smart field suggestions',
      'Automatic validation rules',
      'Multi-language support'
    ]
  },
  {
    icon: Layout,
    title: 'No-Code Builder',
    description: 'Build complex, multi-step forms with conditional logic without writing a single line of code.',
    details: [
      'Drag-and-drop interface',
      'Conditional logic builder',
      'Custom styling options',
      'Responsive design'
    ]
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Get deep insights into form performance, user behavior, and conversion rates with our intelligent analytics.',
    details: [
      'Real-time data tracking',
      'Conversion funnel analysis',
      'A/B testing capabilities',
      'Custom report generation'
    ]
  }
]

const results = [
  { metric: '1000+', label: 'Active Users', icon: Users },
  { metric: '50K+', label: 'Forms Created', icon: Layout },
  { metric: '95%', label: 'User Satisfaction', icon: Star },
  { metric: '3x', label: 'Faster Form Creation', icon: Zap }
]

const technologies = [
  'Ruby on Rails',
  'Vue.js',
  'PostgreSQL',
  'Redis',
  'AWS',
  'OpenAI API',
  'Stripe',
  'SendGrid'
]

const principles = [
  {
    title: 'Ship Fast, Learn Faster',
    description: 'We believe in rapid iteration and continuous deployment to quickly validate ideas.'
  },
  {
    title: 'User Feedback Drives Our Roadmap',
    description: 'Every feature is built based on real user needs and feedback.'
  },
  {
    title: 'Embrace Mistakes as Learning',
    description: 'We view failures as opportunities to improve and innovate.'
  },
  {
    title: 'Focus on User Happiness',
    description: 'Without investor pressure, we can focus solely on making users successful.'
  }
]

const testimonial = {
  content: "Formester has completely transformed how we collect customer feedback. The AI form generation saves us hours every week, and the analytics help us understand our users better than ever before.",
  author: "Sarah Mitchell",
  role: "Product Manager",
  company: "TechStart Inc.",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
}
</script>