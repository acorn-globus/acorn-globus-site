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
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/v3/portfolio"
          class="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft class="h-4 w-4 mr-2" />
          Back to Portfolio
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
              <Heart class="h-4 w-4 mr-2" />
              Non-Profit EdTech
            </div>

            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Rumie
            </h1>
            <p class="text-2xl text-orange-600 font-semibold mb-4">
              {{ projectOverview.tagline }}
            </p>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Empowering learners worldwide through accessible, bite-sized education.
              Our 4+ year partnership has transformed how Rumie delivers learning to
              underserved communities across 176 countries.
            </p>

            <div class="flex flex-wrap gap-4 mb-8">
              <a
                :href="`https://${projectOverview.website}`"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Visit Rumie.org
                <ExternalLink class="h-4 w-4 ml-2" />
              </a>
              <div class="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full font-semibold">
                <Globe class="h-4 w-4 mr-2" />
                176 Countries
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
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                alt="Rumie Platform"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent"></div>
            </div>
            <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <School class="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <div class="text-sm font-semibold text-gray-900">Global Impact</div>
                  <div class="text-xs text-gray-600">Transforming Education</div>
                </div>
              </div>
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
            <div class="inline-flex items-center justify-center w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl mb-4">
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
            Innovative solutions enabling education access for everyone, everywhere
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, idx) in features"
            :key="idx"
            :class="`bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 ${
              activeFeature === idx
                ? 'shadow-2xl scale-105 border-2 border-orange-500'
                : 'shadow-lg hover:shadow-xl'
            }`"
            @click="activeFeature = idx"
          >
            <div class="inline-flex items-center justify-center w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl mb-6">
              <component :is="feature.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 mb-6">{{ feature.description }}</p>
            <ul class="space-y-2">
              <li v-for="(detail, detailIdx) in feature.details" :key="detailIdx" class="flex items-center text-sm text-gray-700">
                <CheckCircle class="h-4 w-4 text-orange-500 mr-2" />
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Transformation Comparison -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Platform Evolution</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            4+ years of continuous improvement and global expansion
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Before Partnership</h3>
            <div class="space-y-4">
              <div v-for="[key, value] in Object.entries(stats.before)" :key="key" class="flex items-center justify-between">
                <span class="text-gray-600 capitalize">{{ key.replace('_', ' ') }}</span>
                <span class="font-semibold text-red-600">{{ value }}</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-6">After Transformation</h3>
            <div class="space-y-4">
              <div v-for="[key, value] in Object.entries(stats.after)" :key="key" class="flex items-center justify-between">
                <span class="text-gray-600 capitalize">{{ key.replace('_', ' ') }}</span>
                <span class="font-semibold text-green-600">{{ value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Impact -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ impact.title }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ impact.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(achievement, idx) in impact.achievements" :key="idx" class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                  <component :is="achievement.icon" class="h-5 w-5" />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">{{ achievement.title }}</h3>
                <p class="text-gray-600">{{ achievement.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Timeline -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Partnership Journey</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Building lasting impact through continuous innovation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(milestone, idx) in milestones" :key="idx" class="relative">
            <div v-if="idx < milestones.length - 1" class="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-transparent z-0"></div>
            <div class="bg-white rounded-2xl p-6 shadow-lg relative z-10">
              <div class="text-orange-600 font-bold text-sm mb-2">{{ milestone.year }}</div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ milestone.title }}</h3>
              <p class="text-sm text-gray-600">{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p class="text-lg text-gray-600">
            Modern technologies enabling global education access
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <span
            v-for="(tech, idx) in technologies"
            :key="idx"
            class="px-6 py-3 bg-gradient-to-br from-orange-50 to-red-50 text-orange-700 rounded-full font-semibold hover:shadow-md transition-all duration-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <BookOpen class="h-16 w-16 text-orange-600 mx-auto mb-6" />
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Making Education Accessible to All
        </h2>
        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
          Through our partnership with Rumie, we're proud to contribute to a mission that
          transforms lives through education. Together, we've built technology that breaks
          down barriers and brings learning opportunities to communities worldwide.
        </p>
        <div class="inline-flex items-center px-6 py-3 bg-white rounded-full text-orange-600 font-semibold shadow-lg">
          <Heart class="h-5 w-5 mr-2" />
          Proud Technology Partner
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-white">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Ready to Create Meaningful Impact?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Let's build technology solutions that make a difference
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/v3/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Start Your Project
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/v3/portfolio"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-orange-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-orange-200"
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
  ArrowRight, Code2, Globe, BookOpen, Heart, Rocket,
  CheckCircle, Star, ChevronRight, Smartphone, Wifi, WifiOff,
  ArrowLeft, ExternalLink, Clock, Target, Award, Sparkles,
  Users, TrendingUp, Zap, School, MapPin, Download
} from 'lucide-vue-next'

// Use the v3 layout
definePageMeta({
  layout: 'v3'
})

const activeFeature = ref(0)

const projectOverview = {
  client: 'Rumie',
  industry: 'Non-Profit / EdTech',
  type: 'Platform Modernization',
  duration: '4+ Years',
  status: 'Ongoing Partnership',
  website: 'rumie.org',
  tagline: 'Democratizing Education Globally'
}

const challenge = {
  title: 'The Challenge',
  description: 'Rumie needed to modernize their platform to reach learners in underserved communities worldwide, facing challenges with legacy systems and limited mobile accessibility.',
  points: [
    'Legacy technology infrastructure limiting scalability',
    'Lack of mobile-first learning solution',
    'Need for offline functionality in low-connectivity areas',
    'Platform performance issues affecting user experience'
  ]
}

const solution = {
  title: 'Our Solution',
  description: 'We transformed Rumie\'s platform with modern architecture, developed a cross-platform mobile app, and implemented offline capabilities to ensure education reaches everyone, everywhere.',
  points: [
    'Complete platform modernization with scalable architecture',
    'Cross-platform mobile app with offline functionality',
    '60% performance improvement for faster learning',
    'SEO optimization expanding global reach to 176 countries'
  ]
}

const features = [
  {
    icon: Smartphone,
    title: 'Mobile Learning Platform',
    description: 'Cross-platform mobile application enabling learning on any device, reaching communities with limited computer access.',
    details: [
      'Native iOS & Android apps',
      'Progressive Web App (PWA)',
      'Responsive design',
      'Touch-optimized interface'
    ]
  },
  {
    icon: WifiOff,
    title: 'Offline Learning',
    description: 'Revolutionary offline functionality allowing learners to access content without internet connectivity.',
    details: [
      'Content caching system',
      'Offline progress tracking',
      'Smart sync when online',
      'Minimal data usage'
    ]
  },
  {
    icon: Globe,
    title: 'Global Accessibility',
    description: 'Platform optimized for global reach with multi-language support and accessibility features.',
    details: [
      'Multi-language interface',
      'Accessibility compliance',
      'Low-bandwidth optimization',
      'Cultural localization'
    ]
  }
]

const results = [
  { metric: '176', label: 'Countries Reached', icon: Globe },
  { metric: '45%', label: 'Mobile Engagement Increase', icon: Smartphone },
  { metric: '60%', label: 'Speed Improvement', icon: Zap },
  { metric: '4+', label: 'Years Partnership', icon: Heart }
]

const impact = {
  title: 'Social Impact',
  description: 'Transforming lives through accessible education worldwide',
  achievements: [
    {
      title: 'Global Reach',
      description: 'Education now accessible in 176 countries, including remote areas',
      icon: MapPin
    },
    {
      title: 'Inclusive Learning',
      description: 'Bite-sized content accessible to learners with varying literacy levels',
      icon: Users
    },
    {
      title: 'Offline Access',
      description: 'Learning continues even without internet connectivity',
      icon: WifiOff
    },
    {
      title: 'Mobile First',
      description: '45% increase in mobile engagement democratizing access',
      icon: Smartphone
    }
  ]
}

const technologies = [
  'React Native',
  'Node.js',
  'MongoDB',
  'AWS',
  'Progressive Web App',
  'Service Workers',
  'CDN',
  'ElasticSearch',
  'Redis Cache'
]

const milestones = [
  {
    year: 'Year 1',
    title: 'Platform Assessment',
    description: 'Comprehensive audit and modernization strategy'
  },
  {
    year: 'Year 2',
    title: 'Infrastructure Overhaul',
    description: 'Migration to modern, scalable architecture'
  },
  {
    year: 'Year 3',
    title: 'Mobile Development',
    description: 'Launch of cross-platform mobile applications'
  },
  {
    year: 'Year 4+',
    title: 'Continuous Innovation',
    description: 'Ongoing enhancements and global expansion'
  }
]

const stats = {
  before: {
    reach: 'Limited regions',
    mobile: 'No mobile app',
    speed: 'Slow loading',
    offline: 'Online only'
  },
  after: {
    reach: '176 countries',
    mobile: 'Full mobile suite',
    speed: '60% faster',
    offline: 'Full offline mode'
  }
}
</script>