<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation Header -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Code2 class="h-6 w-6 text-white" />
            </div>
            <div>
              <div class="text-xl font-bold text-gray-900">Acorn Globus</div>
              <div class="text-xs text-gray-500">Project Partnerships</div>
            </div>
          </div>

          <div class="hidden lg:flex items-center space-x-8">
            <NuxtLink to="/v3" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</NuxtLink>
            <NuxtLink to="/v3/about" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</NuxtLink>
            <NuxtLink to="/v3/services" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</NuxtLink>
            <NuxtLink to="/v3/portfolio" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Portfolio</NuxtLink>
            <NuxtLink to="/v3/contact" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</NuxtLink>
          </div>

          <NuxtLink
            to="/v3/contact"
            class="hidden lg:inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Start a Project
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
    <section class="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30" />
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
            <Clock class="w-4 h-4 mr-2" />
            Flexible Project Engagements
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Short & Long-Term
            <span class="block text-blue-600 mt-2">Development Partnerships</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            From quick wins to strategic partnerships, we adapt to your project needs
            with flexible engagement models and dedicated expertise.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/v3/contact"
              class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Discuss Your Project
              <ArrowRight class="ml-2 w-5 h-5" />
            </NuxtLink>
            <button class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:bg-blue-50 transition-all">
              View Success Stories
              <ChevronRight class="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Metrics -->
    <section class="py-16 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(metric, index) in successMetrics" :key="index" class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {{ metric.value }}
            </div>
            <div class="text-gray-600">{{ metric.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Types Tabs -->
    <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Engagement Model
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you need a quick solution or a long-term partnership, we have the right approach
          </p>
        </div>

        <!-- Tab Navigation -->
        <div class="flex justify-center mb-12">
          <div class="inline-flex rounded-xl bg-white shadow-lg p-1">
            <button
              @click="activeTab = 'short'"
              :class="`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'short'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`"
            >
              Short-Term Projects
            </button>
            <button
              @click="activeTab = 'long'"
              :class="`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'long'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`"
            >
              Long-Term Partnerships
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
                <Calendar class="w-4 h-4 mr-2" />
                {{ projectTypes[activeTab].duration }}
              </div>
              <h3 class="text-3xl font-bold text-gray-900 mb-4">
                {{ projectTypes[activeTab].title }}
              </h3>
              <p class="text-lg text-gray-600 mb-6">
                {{ projectTypes[activeTab].description }}
              </p>

              <div class="space-y-3 mb-8">
                <div v-for="(feature, index) in projectTypes[activeTab].features" :key="index" class="flex items-start">
                  <CheckCircle class="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>

              <NuxtLink
                to="/v3/contact"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Get Started
                <ArrowRight class="ml-2 w-5 h-5" />
              </NuxtLink>
            </div>

            <div class="grid gap-6">
              <div v-for="(benefit, index) in projectTypes[activeTab].benefits" :key="index" class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <component :is="benefit.icon" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-gray-900 mb-2">
                      {{ benefit.title }}
                    </h4>
                    <p class="text-gray-600">
                      {{ benefit.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Our Engagement Process
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach to ensure successful project delivery
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(phase, index) in process" :key="index" class="relative">
            <div v-if="index < process.length - 1" class="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0" />
            <div class="bg-white border-2 border-blue-100 rounded-2xl p-6 hover:border-blue-300 transition-colors relative z-10">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <component :is="phase.icon" class="w-6 h-6 text-blue-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                {{ phase.phase }}
              </h3>
              <p class="text-sm text-gray-600 mb-4">
                {{ phase.description }}
              </p>
              <ul class="space-y-1">
                <li v-for="(activity, i) in phase.activities" :key="i" class="text-sm text-gray-500">
                  • {{ activity }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagement Models -->
    <section class="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Flexible Pricing Models
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the pricing model that best fits your project requirements
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div v-for="(model, index) in engagementModels" :key="index" class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
            <div class="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-6">
              <component :is="model.icon" class="w-7 h-7 text-blue-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {{ model.title }}
            </h3>
            <p class="text-gray-600 mb-6">
              {{ model.description }}
            </p>
            <ul class="space-y-3 mb-6">
              <li v-for="(feature, i) in model.features" :key="i" class="flex items-start">
                <CheckCircle class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm text-gray-700">{{ feature }}</span>
              </li>
            </ul>
            <div class="pt-6 border-t">
              <span class="text-sm text-gray-500">Recommended for:</span>
              <div class="text-sm font-semibold text-blue-600 mt-1">
                {{ model.recommended }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Deliverables -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            What You Can Expect
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive deliverables for successful project outcomes
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(item, index) in deliverables" :key="index" class="group">
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <component :is="item.icon" class="w-6 h-6 text-blue-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-3">
                {{ item.title }}
              </h3>
              <p class="text-gray-600">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Technologies We Excel In
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across modern tech stack
          </p>
        </div>

        <div class="flex flex-wrap gap-3 justify-center">
          <span
            v-for="(tech, index) in technologies"
            :key="index"
            class="px-4 py-2 bg-white text-blue-700 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-blue-600 to-indigo-600 relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-10" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether it's a short sprint or a long journey, we're ready to be your technology partner
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <NuxtLink
              to="/v3/contact"
              class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Start a Conversation
              <ArrowRight class="ml-2 w-5 h-5" />
            </NuxtLink>
            <button class="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all">
              Download Portfolio
              <FileText class="ml-2 w-5 h-5" />
            </button>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
            <div class="flex items-center">
              <Mail class="w-5 h-5 mr-3 text-blue-200" />
              <span>business@acornglobus.com</span>
            </div>
            <div class="flex items-center">
              <MapPin class="w-5 h-5 mr-3 text-blue-200" />
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
  Clock,
  Code2,
  Users,
  Target,
  TrendingUp,
  Shield,
  Zap,
  BarChart,
  CheckCircle,
  Calendar,
  Layers,
  GitBranch,
  Package,
  Settings,
  Award,
  Building2,
  Briefcase,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Lightbulb,
  Rocket,
  DollarSign,
  FileText
} from 'lucide-vue-next'

// Use the v3 layout
definePageMeta({
  layout: 'v3'
})

const activeTab = ref('short')

const projectTypes = {
  short: {
    title: 'Short-Term Projects',
    duration: '1-6 months',
    description: 'Quick wins and rapid deployments for immediate business needs',
    features: [
      'MVP Development',
      'Feature Enhancements',
      'Bug Fixes & Optimization',
      'Proof of Concepts',
      'System Integrations',
      'Migration Projects'
    ],
    benefits: [
      {
        icon: Zap,
        title: 'Quick Turnaround',
        description: 'Fast delivery with focused execution on specific objectives'
      },
      {
        icon: DollarSign,
        title: 'Fixed Budget',
        description: 'Clear cost structure with defined deliverables and timelines'
      },
      {
        icon: Target,
        title: 'Focused Scope',
        description: 'Well-defined objectives with measurable outcomes'
      }
    ]
  },
  long: {
    title: 'Long-Term Partnerships',
    duration: '6+ months',
    description: 'Strategic partnerships for continuous development and growth',
    features: [
      'Enterprise Applications',
      'Digital Transformation',
      'Product Development',
      'Platform Building',
      'Continuous Innovation',
      'Strategic Consulting'
    ],
    benefits: [
      {
        icon: Users,
        title: 'Dedicated Team',
        description: 'Fully integrated team that understands your business deeply'
      },
      {
        icon: TrendingUp,
        title: 'Strategic Growth',
        description: 'Long-term planning aligned with your business objectives'
      },
      {
        icon: Shield,
        title: 'Reduced Risk',
        description: 'Consistent team with accumulated knowledge and expertise'
      }
    ]
  }
}

const process = [
  {
    phase: 'Initial Assessment',
    icon: Lightbulb,
    description: 'Understanding your needs, goals, and technology stack',
    activities: [
      'Requirements gathering',
      'Technical audit',
      'Resource planning',
      'Timeline estimation'
    ]
  },
  {
    phase: 'Team Formation',
    icon: Users,
    description: 'Building a team with the required expertise',
    activities: [
      'Skill matching',
      'Team composition',
      'Role definition',
      'Onboarding process'
    ]
  },
  {
    phase: 'Integration',
    icon: GitBranch,
    description: 'Seamless alignment with your processes',
    activities: [
      'Workflow integration',
      'Tool setup',
      'Communication channels',
      'Collaboration protocols'
    ]
  },
  {
    phase: 'Continuous Delivery',
    icon: Rocket,
    description: 'Ongoing development and optimization',
    activities: [
      'Sprint planning',
      'Regular deliveries',
      'Performance monitoring',
      'Continuous improvement'
    ]
  }
]

const engagementModels = [
  {
    title: 'Fixed Price',
    icon: DollarSign,
    description: 'Best for well-defined projects with clear requirements',
    features: [
      'Predetermined budget',
      'Fixed timeline',
      'Defined deliverables',
      'Minimal risk'
    ],
    recommended: 'Short-term projects'
  },
  {
    title: 'Time & Material',
    icon: Clock,
    description: 'Flexible approach for evolving requirements',
    features: [
      'Pay as you go',
      'Flexible scope',
      'Adaptable timeline',
      'Full transparency'
    ],
    recommended: 'Medium-term projects'
  },
  {
    title: 'Dedicated Team',
    icon: Users,
    description: 'Full-time resources working exclusively on your project',
    features: [
      'Full-time commitment',
      'Direct management',
      'Scalable team size',
      'Long-term focus'
    ],
    recommended: 'Long-term partnerships'
  }
]

const deliverables = [
  {
    icon: Package,
    title: 'Dedicated Team',
    description: 'Full-time professionals committed to your success'
  },
  {
    icon: FileText,
    title: 'Technical Roadmap',
    description: 'Strategic planning for long-term technology goals'
  },
  {
    icon: BarChart,
    title: 'Regular Reports',
    description: 'Performance metrics and progress updates'
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Organized codebase with proper documentation'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Comprehensive testing and quality control'
  },
  {
    icon: Settings,
    title: 'Knowledge Transfer',
    description: 'Documentation and training for your team'
  }
]

const successMetrics = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Long-term Partners' },
  { value: '95%', label: 'Client Retention' },
  { value: '4.8', label: 'Average Rating' }
]

const technologies = [
  'React.js', 'Vue.js', 'Angular', 'Next.js', 'Node.js',
  'Ruby on Rails', 'Python', 'Django', '.NET', 'Java',
  'AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes',
  'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'GraphQL'
]
</script>