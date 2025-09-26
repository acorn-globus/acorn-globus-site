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
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/v3/portfolio"
          class="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft class="h-4 w-4 mr-2" />
          Back to Portfolio
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              <Building2 class="h-4 w-4 mr-2" />
              Enterprise Solution
            </div>

            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Eitoss
            </h1>
            <p class="text-2xl text-green-600 font-semibold mb-4">
              {{ projectOverview.tagline }}
            </p>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              A revolutionary platform implementing Kaizen principles to transform workplace
              communication, creating seamless channels between management and frontline workers.
            </p>

            <div class="flex flex-wrap gap-4 mb-8">
              <a
                :href="`https://${projectOverview.website}`"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Visit Live Site
                <ExternalLink class="h-4 w-4 ml-2" />
              </a>
              <div class="inline-flex items-center px-6 py-3 bg-yellow-100 text-yellow-800 rounded-full font-semibold">
                <DollarSign class="h-4 w-4 mr-2" />
                ¥60M Funded
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Eitoss Platform"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent"></div>
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
            <div class="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-2xl mb-4">
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
            We built a comprehensive platform that revolutionizes workplace communication
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, idx) in features"
            :key="idx"
            :class="`bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 ${
              activeFeature === idx
                ? 'shadow-2xl scale-105 border-2 border-green-500'
                : 'shadow-lg hover:shadow-xl'
            }`"
            @click="activeFeature = idx"
          >
            <div class="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-2xl mb-6">
              <component :is="feature.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 mb-6">{{ feature.description }}</p>
            <ul class="space-y-2">
              <li v-for="(detail, detailIdx) in feature.details" :key="detailIdx" class="flex items-center text-sm text-gray-700">
                <CheckCircle class="h-4 w-4 text-green-500 mr-2" />
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">12-Week Journey</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            From concept to funded startup in just 12 weeks
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(phase, idx) in timeline" :key="idx" class="relative">
            <div v-if="idx < timeline.length - 1" class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-transparent z-0"></div>
            <div class="bg-white rounded-2xl p-6 shadow-lg relative z-10">
              <div class="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mb-4">
                <span class="font-bold">{{ idx + 1 }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ phase.phase }}</h3>
              <p class="text-sm text-green-600 font-semibold mb-3">{{ phase.duration }}</p>
              <ul class="space-y-1">
                <li v-for="(activity, actIdx) in phase.activities" :key="actIdx" class="text-sm text-gray-600">• {{ activity }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p class="text-lg text-gray-600">
            Built with modern, scalable technologies
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="[category, techs] in Object.entries(technologies)" :key="category" class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4 capitalize">{{ category }}</h3>
            <ul class="space-y-2">
              <li v-for="(tech, idx) in techs" :key="idx" class="flex items-center text-gray-700">
                <Zap class="h-4 w-4 text-green-600 mr-2" />
                {{ tech }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Impact -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ impact.title }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ impact.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(achievement, idx) in impact.achievements" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
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

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Vision Into Reality?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Just like Eitoss, we can help you build and launch your MVP in weeks, not months
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/v3/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Start Your Project
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/v3/portfolio"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-green-200"
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
  ArrowRight, Code2, Users, MessageSquare, TrendingUp, Rocket,
  CheckCircle, Star, ChevronRight, Brain, BarChart3, Zap,
  ArrowLeft, ExternalLink, Clock, Target, Award, Sparkles,
  Building2, Lightbulb, GitBranch, Shield, Globe, DollarSign
} from 'lucide-vue-next'

// Use the v3 layout
definePageMeta({
  layout: 'v3'
})

const activeFeature = ref(0)

const projectOverview = {
  client: 'Eitoss',
  industry: 'Enterprise Software',
  type: 'MVP to Full Product',
  duration: '12 weeks',
  status: 'Live & Funded',
  website: 'eitoss.com',
  tagline: 'Bridging Management & Frontline Workers'
}

const challenge = {
  title: 'The Challenge',
  description: 'Eitoss approached us with a vision to transform workplace communication. They needed to create a platform that could effectively bridge the gap between management and frontline workers, implementing Kaizen principles for continuous improvement.',
  points: [
    'Fragmented communication between management and workers',
    'Lack of structured feedback mechanisms',
    'No systematic approach to continuous improvement',
    'Difficulty in capturing and processing workplace insights'
  ]
}

const solution = {
  title: 'Our Solution',
  description: 'We developed a comprehensive communication platform that leverages AI to facilitate seamless interaction between all organizational levels, creating a culture of continuous improvement.',
  points: [
    'Kaizen-based communication channels',
    'AI-powered knowledge base for instant query resolution',
    'Intelligent document processing and analysis',
    'Real-time feedback and improvement tracking'
  ]
}

const features = [
  {
    icon: Users,
    title: 'Kaizen Communication',
    description: 'Structured channels implementing continuous improvement principles to capture and act on frontline insights.',
    details: [
      'Organized feedback channels',
      'Improvement suggestion tracking',
      'Priority-based routing',
      'Action item management'
    ]
  },
  {
    icon: Brain,
    title: 'AI Knowledge Base',
    description: 'Intelligent system powered by Gemini and ChatGPT APIs to provide instant answers and process workplace queries.',
    details: [
      'Dual AI integration',
      'Smart query processing',
      'Contextual responses',
      'Learning from interactions'
    ]
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights into communication patterns, improvement metrics, and organizational health.',
    details: [
      'Real-time metrics',
      'Improvement tracking',
      'Response time analytics',
      'Engagement reports'
    ]
  }
]

const results = [
  { metric: '95%', label: 'User Satisfaction', icon: Star },
  { metric: '¥60M', label: 'Funding Secured', icon: DollarSign },
  { metric: '40%', label: 'Faster Response Times', icon: Clock },
  { metric: '60%', label: 'More Suggestions', icon: TrendingUp }
]

const technologies = {
  frontend: ['React.js', 'TypeScript', 'TailwindCSS'],
  backend: ['Ruby on Rails', 'PostgreSQL', 'Redis'],
  ai: ['Gemini API', 'ChatGPT API'],
  devops: ['Docker', 'AWS', 'CI/CD Pipeline']
}

const timeline = [
  {
    phase: 'Discovery',
    duration: 'Week 1-2',
    activities: ['Requirements gathering', 'User research', 'Architecture planning']
  },
  {
    phase: 'Design',
    duration: 'Week 3-4',
    activities: ['UI/UX design', 'User flow mapping', 'Prototype creation']
  },
  {
    phase: 'Development',
    duration: 'Week 5-10',
    activities: ['Core platform build', 'AI integration', 'Feature implementation']
  },
  {
    phase: 'Launch',
    duration: 'Week 11-12',
    activities: ['Testing & QA', 'Deployment', 'User onboarding']
  }
]

const impact = {
  title: 'Business Impact',
  description: 'Eitoss has transformed from a concept to a funded startup, revolutionizing workplace communication',
  achievements: [
    {
      title: 'Successful Funding Round',
      description: 'Secured ¥60M in funding to scale operations',
      icon: DollarSign
    },
    {
      title: 'Market Validation',
      description: 'Validated the core concept with early adopters',
      icon: CheckCircle
    },
    {
      title: 'Industry Recognition',
      description: 'Positioned as a pioneer in workplace collaboration',
      icon: Award
    },
    {
      title: 'Rapid Growth',
      description: 'Expanding to multiple industries and regions',
      icon: Globe
    }
  ]
}
</script>