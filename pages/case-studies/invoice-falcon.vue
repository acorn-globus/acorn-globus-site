<template>

  <div class="min-h-screen bg-white">

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/portfolio"
          class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft class="h-4 w-4 mr-2" />
          Back to Portfolio
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <ShoppingCart class="h-4 w-4 mr-2" />
              E-Commerce Solution
            </div>

            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Invoice Falcon
            </h1>
            <p class="text-2xl text-blue-600 font-semibold mb-4">
              {{ projectOverview.tagline }}
            </p>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              A comprehensive invoicing solution for Shopify merchants, transforming how
              businesses handle their billing and compliance needs globally through our
              2+ year partnership.
            </p>

            <div class="flex flex-wrap gap-4 mb-8">
              <a
                :href="`https://${projectOverview.website}`"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Visit Live Site
                <ExternalLink class="h-4 w-4 ml-2" />
              </a>
              <div class="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full font-semibold">
                <CheckCircle class="h-4 w-4 mr-2" />
                Ongoing Partnership
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div v-for="[key, value] in Object.entries({
                Client: projectOverview.client,
                Type: projectOverview.type,
                Duration: projectOverview.duration,
                Status: projectOverview.status
              })" :key="key">
                <p class="text-sm text-gray-500 mb-1">{{ key }}</p>
                <p class="font-semibold text-gray-900">{{ value }}</p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="aspect-w-16 aspect-h-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
                alt="Invoice Falcon Platform"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
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
            <div class="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl mb-4">
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

    <!-- Transformation Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Platform Transformation</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            A complete transformation from an unstable platform to a market-leading solution
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="bg-red-50 rounded-3xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock class="h-6 w-6 text-red-600 mr-3" />
              Before Partnership
            </h3>
            <ul class="space-y-4">
              <li v-for="(item, idx) in transformation.before" :key="idx" class="flex items-start">
                <div class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                  <span class="text-red-600 font-bold text-xs">✕</span>
                </div>
                <span class="text-gray-700">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-green-50 rounded-3xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Sparkles class="h-6 w-6 text-green-600 mr-3" />
              After Transformation
            </h3>
            <ul class="space-y-4">
              <li v-for="(item, idx) in transformation.after" :key="idx" class="flex items-start">
                <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                  <span class="text-green-600 font-bold text-xs">✓</span>
                </div>
                <span class="text-gray-700">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Key Improvements Delivered</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive improvements across infrastructure, performance, and user experience
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, idx) in features"
            :key="idx"
            :class="`bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 ${
              activeFeature === idx
                ? 'shadow-2xl scale-105 border-2 border-blue-500'
                : 'shadow-lg hover:shadow-xl'
            }`"
            @click="activeFeature = idx"
          >
            <div class="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl mb-6">
              <component :is="feature.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 mb-6">{{ feature.description }}</p>
            <ul class="space-y-2">
              <li v-for="(detail, detailIdx) in feature.details" :key="detailIdx" class="flex items-center text-sm text-gray-700">
                <CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Milestones -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Partnership Journey</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            2+ years of continuous collaboration and improvement
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(milestone, idx) in milestones" :key="idx" class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 rounded-2xl mb-4">
              <component :is="milestone.icon" class="h-5 w-5" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ milestone.title }}</h3>
            <p class="text-sm text-gray-600">{{ milestone.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p class="text-lg text-gray-600">
            Enterprise-grade technologies for a scalable solution
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <span
            v-for="(tech, idx) in technologies"
            :key="idx"
            class="px-6 py-3 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-700 rounded-full font-semibold hover:shadow-md transition-all duration-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl p-12 shadow-xl relative">
          <div class="absolute top-8 left-8">
            <Star class="h-8 w-8 text-blue-200" />
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
          Ready to Transform Your Platform?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Let's discuss how we can help modernize and scale your business
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Start Your Transformation
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/portfolio"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-blue-200"
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
  ArrowRight, ShoppingCart, TrendingUp, Rocket,
  CheckCircle, Star, ChevronRight, Shield, BarChart3, Zap,
  ArrowLeft, ExternalLink, Clock, Target, Award, Sparkles,
  Server, RefreshCw, Users, Gauge, Headphones, Package
} from 'lucide-vue-next'

// Use the v3 layout
definePageMeta({
  layout: 'default'
})

const activeFeature = ref(0)

const projectOverview = {
  client: 'Invoice Falcon',
  industry: 'E-Commerce / Shopify',
  type: 'Platform Transformation',
  duration: '2+ Years',
  status: 'Ongoing Partnership',
  website: 'invoicefalcon.com',
  tagline: 'Shopify Invoicing Revolution'
}

const challenge = {
  title: 'The Challenge',
  description: 'Invoice Falcon was struggling with an unstable platform that was limiting their growth potential. They needed a complete transformation to become the leading invoicing solution for Shopify merchants.',
  points: [
    'Infrastructure instability causing frequent downtime',
    'Poor performance affecting user experience',
    'Inefficient Shopify integration limiting functionality',
    'High support ticket volume due to platform issues'
  ]
}

const solution = {
  title: 'Our Solution',
  description: 'We executed a comprehensive platform transformation, rebuilding the infrastructure from the ground up and creating a seamless experience for Shopify merchants.',
  points: [
    'Complete infrastructure modernization for 99.9% uptime',
    'Performance optimization achieving 40% faster response times',
    'Enhanced Shopify integration with advanced features',
    'Streamlined UX reducing support tickets by 50%'
  ]
}

const features = [
  {
    icon: Server,
    title: 'Infrastructure Modernization',
    description: 'Complete overhaul of the platform infrastructure, implementing modern DevOps practices and cloud optimization.',
    details: [
      'Enhanced monitoring systems',
      'Database optimization',
      'API efficiency improvements',
      'Auto-scaling capabilities'
    ]
  },
  {
    icon: ShoppingCart,
    title: 'Shopify Integration',
    description: 'Deep integration with Shopify ecosystem, providing merchants with seamless invoicing capabilities.',
    details: [
      'Real-time order sync',
      'Multi-store support',
      'Automated invoice generation',
      'Custom branding options'
    ]
  },
  {
    icon: Gauge,
    title: 'Performance Enhancement',
    description: 'Systematic performance improvements resulting in dramatically faster response times and better user experience.',
    details: [
      '40% faster page loads',
      'Optimized database queries',
      'Efficient caching strategies',
      'Code optimization'
    ]
  }
]

const results = [
  { metric: '99.9%', label: 'Platform Uptime', icon: Shield },
  { metric: '40%', label: 'Performance Boost', icon: Zap },
  { metric: '50%', label: 'Fewer Support Tickets', icon: Headphones },
  { metric: '500+', label: 'Merchants Served', icon: Users }
]

const transformation = {
  before: [
    'Frequent platform outages',
    'Slow invoice generation',
    'Limited customization options',
    'High customer complaints'
  ],
  after: [
    '99.9% uptime reliability',
    'Instant invoice creation',
    'Full white-label capabilities',
    'High customer satisfaction'
  ]
}

const technologies = [
  'Ruby on Rails',
  'React',
  'Shopify API',
  'PostgreSQL',
  'Redis',
  'AWS',
  'Docker',
  'Kubernetes',
  'Elasticsearch',
  'Stripe'
]

const milestones = [
  {
    title: 'Initial Assessment',
    description: 'Comprehensive platform audit and strategy development',
    icon: Target
  },
  {
    title: 'Infrastructure Rebuild',
    description: 'Complete backend infrastructure modernization',
    icon: Server
  },
  {
    title: 'Performance Optimization',
    description: 'Systematic improvements across the platform',
    icon: Gauge
  },
  {
    title: 'Continuous Enhancement',
    description: 'Ongoing feature development and optimization',
    icon: RefreshCw
  }
]

const testimonial = {
  content: "The Acorn Globus team has been instrumental in transforming Invoice Falcon. Their expertise in platform modernization and deep understanding of our needs have helped us become the leading invoicing solution for Shopify merchants.",
  author: "Sarah Chen",
  role: "Product Manager",
  company: "Invoice Falcon",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
}
</script>