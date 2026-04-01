<template>
  <div class="min-h-screen bg-white"><!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Settings class="h-4 w-4 mr-2" />
            Our Services
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            How We Work
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block mt-2">
              With You
            </span>
          </h1>

          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Whether you need a team to build your MVP, engineers who embed with yours,
            or a partner for the long haul -- here's how we can help.
          </p>
        </div>
      </div>
    </section>

    <!-- Tab Navigation -->
    <section class="sticky top-20 bg-white border-b border-gray-100 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center space-x-8 py-4">
          <button
            @click="activeTab = 'services'"
            :class="[
              'px-6 py-2 font-medium transition-all duration-300',
              activeTab === 'services'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            ]"
          >
            Services
          </button>
          <button
            @click="activeTab = 'process'"
            :class="[
              'px-6 py-2 font-medium transition-all duration-300',
              activeTab === 'process'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            ]"
          >
            Our Process
          </button>
          <button
            @click="activeTab = 'technologies'"
            :class="[
              'px-6 py-2 font-medium transition-all duration-300',
              activeTab === 'technologies'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            ]"
          >
            Technologies
          </button>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section v-if="activeTab === 'services'" class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Buyer-path sections -->
        <div v-for="(section, sIdx) in serviceSections" :key="sIdx" class="mb-20">
          <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-gray-900 mb-3">{{ section.title }}</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">{{ section.intro }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              v-for="service in section.cards"
              :key="service.id"
              class="group relative bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1"
              @mouseenter="hoveredService = service.id"
              @mouseleave="hoveredService = null"
              :style="{
                boxShadow: hoveredService === service.id
                  ? '0 20px 40px -10px rgba(147, 51, 234, 0.3)'
                  : '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
              }"
            >
              <div :class="[
                'inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r text-white mb-6 group-hover:scale-110 transition-transform',
                service.gradient
              ]">
                <component :is="service.icon" class="h-8 w-8" />
              </div>

              <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {{ service.headline }}
              </h3>

              <p class="text-gray-600 mb-6 leading-relaxed">
                {{ service.description }}
              </p>

              <ul class="space-y-3 mb-6">
                <li v-for="(feature, idx) in service.features" :key="idx" class="flex items-start">
                  <CheckCircle class="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>

              <p class="text-sm text-gray-500 italic mb-6">{{ service.proof }}</p>

              <div class="flex items-center justify-between">
                <NuxtLink
                  :to="service.ctaLink"
                  class="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {{ service.ctaText }}
                  <ArrowRight class="h-4 w-4 ml-2" />
                </NuxtLink>
                <NuxtLink
                  :to="service.link"
                  class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                >
                  Learn more
                  <ChevronRight class="h-4 w-4 ml-1" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Differentiators -->
        <div class="mt-20">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">What Sets Us Apart</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(item, idx) in differentiators" :key="idx" class="text-center">
              <div class="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl mb-4">
                <component :is="item.icon" class="h-6 w-6" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">{{ item.title }}</h4>
              <p class="text-sm text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section v-if="activeTab === 'process'" class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(phase, index) in process" :key="phase.id" class="relative">
            <!-- Connection Line -->
            <div
              v-if="index < process.length - 1"
              class="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent z-0"
            ></div>

            <div class="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 z-10">
              <div :class="[
                'inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4',
                `bg-${phase.color}-100 text-${phase.color}-600`
              ]">
                <component :is="phase.icon" class="h-6 w-6" />
              </div>

              <div class="text-sm font-semibold text-blue-600 mb-2">Phase {{ phase.id }}</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ phase.title }}</h3>
              <p class="text-gray-600 mb-4 text-sm">{{ phase.description }}</p>

              <ul class="space-y-2">
                <li v-for="(activity, idx) in phase.activities" :key="idx" class="flex items-center text-sm text-gray-700">
                  <ChevronRight class="h-4 w-4 text-blue-400 mr-2" />
                  {{ activity }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Process Benefits -->
        <div class="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">How We Work Together</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              We don't just work for you -- we work with you. Same tools, same standups,
              shared responsibility for the outcome.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-white text-blue-600 rounded-2xl mb-4 shadow-lg">
                <Users class="h-8 w-8" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Daily Communication</h4>
              <p class="text-gray-600">Stand-ups and updates so you always know where your product stands</p>
            </div>
            <div class="text-center">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-white text-blue-600 rounded-2xl mb-4 shadow-lg">
                <GitBranch class="h-8 w-8" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Iterative Delivery</h4>
              <p class="text-gray-600">2-week sprints with demos at the end of each. You see progress, not just hear about it.</p>
            </div>
            <div class="text-center">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-white text-blue-600 rounded-2xl mb-4 shadow-lg">
                <Target class="h-8 w-8" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Your Outcome Is Our Outcome</h4>
              <p class="text-gray-600">We make decisions based on what's right for your product, not what's easiest to build.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section v-if="activeTab === 'technologies'" class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
          <p class="text-lg text-gray-600">
            We're stack-agnostic -- we pick the right technology for your problem, not the other way around. Here's what we work with daily.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="(tech, idx) in technologies"
            :key="idx"
            class="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div class="text-4xl mb-3">{{ tech.icon }}</div>
            <h4 class="font-semibold text-gray-900 mb-1">{{ tech.name }}</h4>
            <span class="text-sm text-gray-500">{{ tech.category }}</span>
          </div>
        </div>

        <!-- Technology Benefits -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <Cpu class="h-10 w-10 text-blue-600 mb-4" />
            <h3 class="text-xl font-bold text-gray-900 mb-3">Production-Proven</h3>
            <p class="text-gray-600">
              Every technology in our stack has been used to ship real products -- including Formester, our own SaaS.
            </p>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <Layers class="h-10 w-10 text-blue-600 mb-4" />
            <h3 class="text-xl font-bold text-gray-900 mb-3">Built to Hand Over</h3>
            <p class="text-gray-600">
              Your code, your product, your freedom. Clean code, full documentation, zero lock-in.
            </p>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <Shield class="h-10 w-10 text-blue-600 mb-4" />
            <h3 class="text-xl font-bold text-gray-900 mb-3">Security by Default</h3>
            <p class="text-gray-600">
              Security practices baked into every project from the start -- not bolted on at the end.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Have a Product in Mind?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Tell us about it. We'll share how we'd approach it -- honestly.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Let's Talk
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/portfolio"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-blue-200"
          >
            See Our Work
            <ChevronRight class="h-5 w-5 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  ArrowRight, Users, Clock, Shield, Rocket, Building, CheckCircle,
  Cpu, Layers, GitBranch, Search, Lightbulb, Target, Zap, Heart,
  ChevronRight, Star, Award, TrendingUp, Settings, Package, Globe
} from 'lucide-vue-next'

// Use the v3 layout
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Services | Product Engineering, MVP Development & Team Augmentation | AcornGlobus',
  description: 'Resource augmentation, MVP development, full project delivery, and maintenance support. We build with you, not just for you. 20+ engineers, 80%+ client retention.',
  keywords: 'software development services, resource augmentation, MVP development, full project delivery, maintenance support, AcornGlobus',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'Services | Product Engineering & MVP Development | AcornGlobus',
  ogDescription: 'Resource augmentation, MVP development, full project delivery, and maintenance support. We build with you, not just for you.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/services',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Services | Product Engineering & MVP Development | AcornGlobus',
  twitterDescription: 'Resource augmentation, MVP development, full project delivery, and maintenance support. We build with you, not just for you.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useBreadcrumbSchema([
  { name: 'Services', path: '/services' },
])

const hoveredService = ref(null)
const activeTab = ref('services')

const serviceSections = [
  {
    title: 'For Startups',
    intro: "You've got the vision and the funding. You need a team that ships real products -- not prototypes you'll rewrite in six months.",
    cards: [
      {
        id: 'startup-mvp',
        icon: Rocket,
        headline: 'Ship a real product in 6-12 weeks',
        description: 'We take your product idea and build it with you -- from concept to a working, deployable MVP. Production-quality from day one, with clean code and proper architecture. We\'ve been through this ourselves with Formester.',
        features: [
          'Production-ready code, not a throwaway prototype',
          '100% code ownership from day one',
          'Post-launch support included'
        ],
        proof: 'Eitoss: MVP shipped in 3 months. They raised funding. We\'re still building together 2 years later.',
        gradient: 'from-orange-500 to-red-600',
        ctaText: "Let's talk about your product",
        ctaLink: '/contact',
        link: '/services/mvp-development'
      },
      {
        id: 'startup-fpd',
        icon: Clock,
        headline: 'Your product, built end-to-end by a team that cares',
        description: 'From architecture to launch -- one team, one relationship, no surprises. We walk with you through every decision and build it like it\'s our own.',
        features: [
          'Milestone transparency -- you see progress, not just reports',
          'Built to hand over -- zero lock-in',
          '4-week post-launch warranty'
        ],
        proof: 'We built Formester end-to-end -- our own SaaS product, live and growing with real users.',
        gradient: 'from-blue-500 to-pink-600',
        ctaText: "Tell us what you're building",
        ctaLink: '/contact',
        link: '/services/full-project-delivery'
      }
    ]
  },
  {
    title: 'For Non-Technical Founders',
    intro: "You don't need a CTO yet. You need a team that translates your vision into a technical plan and walks you through every decision.",
    cards: [
      {
        id: 'founder-mvp',
        icon: Rocket,
        headline: 'From idea to working product -- with a team that explains every step',
        description: "We'll help you define what to build first, guide you through the trade-offs, and ship something real. Milestone-based pricing so you know exactly what you're getting.",
        features: [
          'We scope the product with you -- honest about what to build first and what can wait',
          'Weekly demos so you see progress, not just hear about it',
          'Clean handoff -- your code, ready for your future in-house team'
        ],
        proof: 'We built Formester ourselves. We know what it\'s like to care deeply about a product -- and we bring that same care to yours.',
        gradient: 'from-orange-500 to-red-600',
        ctaText: "Let's figure this out together",
        ctaLink: '/contact',
        link: '/services/mvp-development'
      },
      {
        id: 'founder-fpd',
        icon: Clock,
        headline: 'A product engineering team that feels like co-founders',
        description: 'You define the what. We walk with you through the how. Every milestone is visible, every decision is explained in terms that make sense.',
        features: [
          'One team, one relationship -- people you know by name',
          'Milestone-based pricing for budget predictability',
          'Full documentation and knowledge transfer'
        ],
        proof: "We guide, not just execute. We'll tell you honestly what you need -- and what can wait.",
        gradient: 'from-blue-500 to-pink-600',
        ctaText: 'Start a conversation',
        ctaLink: '/contact',
        link: '/services/full-project-delivery'
      }
    ]
  },
  {
    title: 'For Engineering Leaders',
    intro: "Your team is great. We make it bigger without making it harder to manage.",
    cards: [
      {
        id: 'leader-ra',
        icon: Users,
        headline: "Engineers who embed with your team -- not outsiders filling seats",
        description: "Same tools, same standups, same codebase. Our engineers become part of your team because that's how we think about it. You'll know them by name.",
        features: [
          '2-week trial before any commitment',
          'Engineers ramp on your codebase in 1-2 weeks',
          'Scale up or down with 2-week notice'
        ],
        proof: 'PerformLine started with 1 engineer. Two years later, we\'re 8+ deep -- full-stack, DevOps, QA, frontend.',
        gradient: 'from-blue-500 to-cyan-600',
        ctaText: 'Tell us what your team needs',
        ctaLink: '/contact',
        link: '/services/resource-augmentation'
      },
      {
        id: 'leader-ms',
        icon: Shield,
        headline: 'We stay with your product after launch',
        description: 'Bug fixes, security updates, performance monitoring, and incremental improvements. When possible, the same team that built it maintains it -- because they know your product deeply.',
        features: [
          'Proactive monitoring -- we fix before you notice',
          'Transparent hours -- you see exactly what we spend time on',
          'No lock-in -- full documentation means you can leave anytime'
        ],
        proof: '80%+ client retention. Most of our maintenance relationships started as MVP or project delivery. Same team, same trust.',
        gradient: 'from-green-500 to-emerald-600',
        ctaText: "Let's keep your product healthy",
        ctaLink: '/contact',
        link: '/services/maintenance-support'
      }
    ]
  }
]

const process = [
  {
    id: 1,
    phase: 'Discovery',
    title: 'Understanding Your Vision',
    description: 'We begin with in-depth problem analysis and market research to understand your goals and challenges.',
    activities: [
      'Problem Analysis',
      'Market Research',
      'Resource Assessment',
      'Team Structure Planning'
    ],
    icon: Search,
    color: 'purple'
  },
  {
    id: 2,
    phase: 'Strategy',
    title: 'Planning for Success',
    description: 'We develop a clear strategy that aligns with your business objectives and technical requirements.',
    activities: [
      'Architecture Design',
      'Technology Selection',
      'Roadmap Creation',
      'Risk Assessment'
    ],
    icon: Lightbulb,
    color: 'indigo'
  },
  {
    id: 3,
    phase: 'Development',
    title: 'Building Your Product',
    description: 'Our team executes the plan with agile methodology, ensuring quality and timely delivery.',
    activities: [
      'Agile Development',
      'Code Reviews',
      'Testing & QA',
      'Documentation'
    ],
    color: 'blue'
  },
  {
    id: 4,
    phase: 'Delivery',
    title: 'Launch & Beyond',
    description: 'We ensure smooth deployment and provide ongoing support to guarantee long-term success.',
    activities: [
      'Deployment',
      'Training',
      'Monitoring',
      'Continuous Support'
    ],
    icon: Rocket,
    color: 'green'
  }
]

const technologies = [
  { name: 'Ruby on Rails', category: 'Backend', icon: '💎' },
  { name: 'React.js', category: 'Frontend', icon: '⚛️' },
  { name: 'Vue.js', category: 'Frontend', icon: '🟢' },
  { name: 'Angular', category: 'Frontend', icon: '🔺' },
  { name: '.NET', category: 'Backend', icon: '🟦' },
  { name: 'Node.js', category: 'Backend', icon: '🟩' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
  { name: 'AWS', category: 'Cloud', icon: '☁️' }
]

const differentiators = [
  {
    title: 'We Build It Like It\'s Ours',
    description: 'We built Formester, our own SaaS. We bring that same ownership to every product we touch.',
    icon: Heart
  },
  {
    title: 'You\'ll Know Us By Name',
    description: '20+ engineers. No bench, no rotating juniors. The people you meet are the people who build.',
    icon: Users
  },
  {
    title: 'We Guide, Not Just Execute',
    description: "We'll tell you honestly what you need -- and what can wait.",
    icon: Award
  },
  {
    title: 'We Stay',
    description: "PerformLine: 1 engineer to 8+ in 2 years. We don't just deliver -- we grow with you.",
    icon: TrendingUp
  }
]
</script>
