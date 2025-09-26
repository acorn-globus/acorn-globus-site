<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation Header -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center">
              <Code2 class="h-6 w-6 text-white" />
            </div>
            <div>
              <div class="text-xl font-bold text-gray-900">Acorn Globus</div>
              <div class="text-xs text-gray-500">MVP Development</div>
            </div>
          </div>

          <div class="hidden lg:flex items-center space-x-8">
            <NuxtLink to="/v3" class="text-gray-700 hover:text-amber-600 font-medium transition-colors">Home</NuxtLink>
            <NuxtLink to="/v3/about" class="text-gray-700 hover:text-amber-600 font-medium transition-colors">About</NuxtLink>
            <NuxtLink to="/v3/services" class="text-gray-700 hover:text-amber-600 font-medium transition-colors">Services</NuxtLink>
            <NuxtLink to="/v3/portfolio" class="text-gray-700 hover:text-amber-600 font-medium transition-colors">Portfolio</NuxtLink>
            <NuxtLink to="/v3/contact" class="text-gray-700 hover:text-amber-600 font-medium transition-colors">Contact</NuxtLink>
          </div>

          <NuxtLink
            to="/v3/contact"
            class="hidden lg:inline-flex items-center px-6 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Start Your MVP
          </NuxtLink>

          <button class="lg:hidden p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-30" />
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-30" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-6">
            <Rocket class="w-4 h-4 mr-2" />
            MVP Development Service
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Launch Your Product
            <span class="block text-amber-600 mt-2">In Just 8-12 Weeks</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Transform your idea into a market-ready MVP. We help startups and enterprises
            validate product concepts quickly with professional-grade minimum viable products.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/v3/contact"
              class="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-all transform hover:scale-105"
            >
              Start Your MVP
              <ArrowRight class="ml-2 w-5 h-5" />
            </NuxtLink>
            <button class="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-xl border-2 border-amber-200 hover:bg-amber-50 transition-all">
              View Success Stories
              <ChevronDown class="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Stats -->
    <section class="py-16 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in keyStats"
            :key="index"
            class="text-center"
          >
            <div class="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
              {{ stat.value }}{{ stat.suffix }}
            </div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our MVP Development?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to market faster, validate your ideas, and attract investors with a professional MVP
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
          >
            <div class="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
              <component :is="benefit.icon" class="w-7 h-7 text-amber-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {{ benefit.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Process -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Our MVP Development Process
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven agile methodology that delivers results in 8-12 weeks
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-12">
          <div
            v-for="(phase, index) in phases"
            :key="index"
            @click="activePhase = index"
            :class="`cursor-pointer p-8 rounded-2xl transition-all ${
              activePhase === index
                ? 'bg-gradient-to-br from-amber-100 to-yellow-100 shadow-xl'
                : 'bg-gray-50 hover:bg-gray-100'
            }`"
          >
            <div class="flex items-start justify-between mb-4">
              <div :class="`w-14 h-14 rounded-xl flex items-center justify-center ${
                activePhase === index ? 'bg-amber-200' : 'bg-gray-200'
              }`">
                <component :is="phase.icon" :class="`w-7 h-7 ${
                  activePhase === index ? 'text-amber-700' : 'text-gray-600'
                }`" />
              </div>
              <span :class="`text-sm font-medium px-3 py-1 rounded-full ${
                activePhase === index ? 'bg-amber-200 text-amber-800' : 'bg-gray-200 text-gray-600'
              }`">
                {{ phase.duration }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Phase {{ index + 1 }}: {{ phase.title }}
            </h3>
            <ul class="space-y-2">
              <li v-for="(activity, i) in phase.activities.slice(0, 3)" :key="i" class="flex items-start">
                <CheckCircle :class="`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                  activePhase === index ? 'text-amber-600' : 'text-gray-400'
                }`" />
                <span class="text-sm text-gray-600">{{ activity }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Active Phase Details -->
        <div
          :key="activePhase"
          class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8"
        >
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            {{ phases[activePhase].title }} - Detailed Activities
          </h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div v-for="(activity, index) in phases[activePhase].activities" :key="index" class="flex items-start">
              <CheckCircle class="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">{{ activity }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Deliverables -->
    <section class="py-20 bg-gradient-to-br from-yellow-50 to-amber-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            What You'll Get
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to launch, test, and scale your product
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(deliverable, index) in deliverables"
            :key="index"
            class="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
              <component :is="deliverable.icon" class="w-6 h-6 text-amber-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-3">
              {{ deliverable.title }}
            </h3>
            <ul class="space-y-2">
              <li v-for="(item, i) in deliverable.items" :key="i" class="flex items-start">
                <ArrowRight class="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Technologies We Use
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern tech stack for scalable and maintainable MVPs
          </p>
        </div>

        <div class="flex flex-wrap gap-3 justify-center">
          <span
            v-for="(tech, index) in technologies"
            :key="index"
            class="px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-lg text-sm font-medium"
          >
            {{ tech.name }}
          </span>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from founders who launched successful MVPs with us
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div class="flex mb-4">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-5 h-5 text-amber-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-gray-700 italic mb-6 leading-relaxed">
              "{{ testimonial.quote }}"
            </p>
            <div class="border-t pt-4">
              <div class="font-semibold text-gray-900">{{ testimonial.author }}</div>
              <div class="text-sm text-gray-600">{{ testimonial.role }}</div>
              <div class="text-sm text-amber-600">{{ testimonial.company }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-amber-600 to-yellow-600 relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-10" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Launch Your MVP?
          </h2>
          <p class="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join 50+ startups who validated their ideas and secured funding with our MVP development service
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <NuxtLink
              to="/v3/contact"
              class="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-all transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight class="ml-2 w-5 h-5" />
            </NuxtLink>
            <button class="inline-flex items-center px-8 py-4 bg-amber-700 text-white font-semibold rounded-xl hover:bg-amber-800 transition-all">
              Schedule a Consultation
              <Calendar class="ml-2 w-5 h-5" />
            </button>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
            <div class="flex items-center">
              <Mail class="w-5 h-5 mr-3 text-amber-200" />
              <span>business@acornglobus.com</span>
            </div>
            <div class="flex items-center">
              <MapPin class="w-5 h-5 mr-3 text-amber-200" />
              <span>Nagpur, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  ArrowRight,
  ChevronDown,
  Rocket,
  Clock,
  Code2,
  Users,
  TrendingUp,
  Target,
  Zap,
  Shield,
  BarChart,
  FileCode,
  MessageSquare,
  CheckCircle,
  Lightbulb,
  Package,
  GitBranch,
  Repeat,
  Calendar,
  DollarSign,
  Award,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-vue-next'

definePageMeta({ layout: 'v3' })

const activePhase = ref(0)

const phases = [
  {
    title: 'Discovery & Planning',
    duration: '1-2 weeks',
    icon: Lightbulb,
    activities: [
      'Define core features',
      'Create user stories',
      'Establish success metrics',
      'Technical architecture planning',
      'Risk assessment',
      'Resource allocation'
    ]
  },
  {
    title: 'Rapid Development',
    duration: '6-8 weeks',
    icon: Code2,
    activities: [
      'Agile sprints',
      'Weekly demonstrations',
      'Continuous feedback integration',
      'Core feature implementation',
      'UI/UX development',
      'API integration'
    ]
  },
  {
    title: 'Launch & Iterate',
    duration: '1-2 weeks',
    icon: Rocket,
    activities: [
      'Quick market launch',
      'Data-driven improvements',
      'User feedback collection',
      'Performance optimization',
      'Bug fixes and refinements',
      'Analytics implementation'
    ]
  }
]

const benefits = [
  {
    icon: Clock,
    title: 'Fast Time-to-Market',
    description: '8-12 week development cycle to get your product in front of users quickly'
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Validation',
    description: 'Test your product idea without the investment of a full-scale application'
  },
  {
    icon: TrendingUp,
    title: 'Investor-Ready',
    description: 'Professional-grade MVPs designed to impress investors and secure funding'
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description: 'Focus on core features that deliver real value to your target users'
  },
  {
    icon: Shield,
    title: 'Scalable Foundation',
    description: 'Clean, production-ready codebase that can grow with your business'
  },
  {
    icon: BarChart,
    title: 'Data-Driven Insights',
    description: 'Built-in analytics to track user behavior and validate assumptions'
  }
]

const deliverables = [
  {
    icon: Package,
    title: 'Core Product Features',
    items: [
      'Essential functionality',
      'User authentication',
      'Data management',
      'Core workflows'
    ]
  },
  {
    icon: GitBranch,
    title: 'Clean Codebase',
    items: [
      'Modular architecture',
      'Version control setup',
      'CI/CD pipeline',
      'Testing framework'
    ]
  },
  {
    icon: FileCode,
    title: 'Documentation',
    items: [
      'Technical documentation',
      'API documentation',
      'User guides',
      'Deployment guides'
    ]
  },
  {
    icon: BarChart,
    title: 'Analytics & Monitoring',
    items: [
      'User tracking',
      'Performance metrics',
      'Error monitoring',
      'Usage analytics'
    ]
  }
]

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: '.NET', category: 'Backend' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Google Cloud', category: 'Cloud' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Docker', category: 'DevOps' }
]

const testimonials = [
  {
    quote: "Acorn Globus is a very proficient team, quick to learn new technologies and concepts. They quickly dove in deep and generated impressive results of high quality that are still operational to this day.",
    author: "Alon Diamant",
    role: "CTO",
    company: "Mayple"
  },
  {
    quote: "Acorn Globus is a gifted team with a rare combination of attention to detail and an overall sense for the big picture. They are very passionate about what they do and come up proactively with improvement ideas.",
    author: "Enzo Zadrima",
    role: "Chief Technology Officer",
    company: "Viewber"
  },
  {
    quote: "Acorn Globus is my go-to team when I need a trusted partner to execute any front-end project. They are super attentive, communicate effectively, and accurately manage your expectations for their time and involvement.",
    author: "Bogdan Arsenie",
    role: "CTO",
    company: "PerformLine & Social Impact Advocate"
  }
]

const keyStats = [
  { value: '8-12', label: 'Weeks to Launch', suffix: '' },
  { value: '50+', label: 'MVPs Delivered', suffix: '' },
  { value: '85', label: 'Success Rate', suffix: '%' },
  { value: '3x', label: 'Faster to Market', suffix: '' }
]
</script>