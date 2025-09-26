<template>
  <div class="min-h-screen bg-white"><!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/services"
          class="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft class="h-4 w-4 mr-2" />
          Back to Services
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              <Shield class="h-4 w-4 mr-2" />
              Maintenance & Support
            </div>

            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Keep Your Systems
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 block mt-2">
                Running at Peak Performance
              </span>
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive maintenance and support services to ensure your applications
              remain secure, efficient, and up-to-date with 24/7 monitoring and rapid
              issue resolution.
            </p>

            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Started
                <ArrowRight class="h-5 w-5 ml-2" />
              </NuxtLink>
              <button class="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-green-200">
                <Headphones class="h-5 w-5 mr-2" />
                24/7 Support
              </button>
            </div>
          </div>

          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(stat, idx) in stats" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg">
                <div class="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mb-3">
                  <component :is="stat.icon" />
                </div>
                <div class="text-2xl font-bold text-gray-900">{{ stat.value }}</div>
                <p class="text-sm text-gray-600">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Maintenance Services?</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Proactive maintenance to prevent issues before they impact your business
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(benefit, idx) in benefits" :key="idx" class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-white text-green-600 rounded-xl mb-4 shadow-sm">
              <component :is="benefit.icon" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Plans -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Support Plans</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your needs
          </p>
        </div>

        <!-- Plan Tabs -->
        <div class="flex justify-center space-x-4 mb-12">
          <button
            v-for="key in Object.keys(supportPlans)"
            :key="key"
            @click="activeTab = key"
            :class="`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
              activeTab === key
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`"
          >
            {{ supportPlans[key].title }}
          </button>
        </div>

        <!-- Plan Details -->
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div v-if="supportPlans[activeTab].recommended" class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-2 text-sm font-semibold">
              RECOMMENDED
            </div>

            <div class="p-8">
              <div class="text-center mb-8">
                <h3 class="text-3xl font-bold text-gray-900 mb-2">
                  {{ supportPlans[activeTab].title }}
                </h3>
                <p class="text-gray-600 mb-4">
                  {{ supportPlans[activeTab].description }}
                </p>
                <div class="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {{ supportPlans[activeTab].price }}
                </div>
              </div>

              <div class="space-y-4">
                <div v-for="(feature, idx) in supportPlans[activeTab].features" :key="idx" class="flex items-center">
                  <CheckCircle v-if="feature.included" class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <div v-else class="h-5 w-5 rounded-full border-2 border-gray-300 mr-3 flex-shrink-0"></div>
                  <span :class="feature.included ? 'text-gray-700' : 'text-gray-400'">
                    {{ feature.text }}
                  </span>
                </div>
              </div>

              <div class="mt-8 text-center">
                <NuxtLink
                  to="/contact"
                  :class="`inline-flex items-center px-8 py-3 bg-gradient-to-r ${supportPlans[activeTab].gradient} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300`"
                >
                  Get Started
                  <ArrowRight class="h-5 w-5 ml-2" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Maintenance Services</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive services to keep your applications running smoothly
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(service, idx) in services" :key="idx" class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-start mb-6">
              <div class="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mr-4">
                <component :is="service.icon" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ service.title }}</h3>
                <p class="text-gray-600">{{ service.description }}</p>
              </div>
            </div>

            <ul class="grid grid-cols-2 gap-3">
              <li v-for="(item, itemIdx) in service.items" :key="itemIdx" class="flex items-center text-sm text-gray-700">
                <Sparkles class="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Maintenance Process</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            A systematic approach to ensure optimal performance and reliability
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(step, idx) in process" :key="idx" class="relative">
            <div v-if="idx < process.length - 1" class="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-transparent z-0"></div>
            <div class="bg-white rounded-2xl p-6 shadow-lg relative z-10 hover:shadow-xl transition-shadow">
              <div class="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mb-4">
                <component :is="step.icon" />
              </div>
              <div class="text-sm text-green-600 font-semibold mb-2">Step {{ step.step }}</div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-sm text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Technologies We Support</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert maintenance across all major technologies and platforms
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <span
            v-for="(tech, idx) in technologies"
            :key="idx"
            class="px-6 py-3 bg-gradient-to-br from-green-50 to-emerald-50 text-green-700 rounded-full font-semibold hover:shadow-md transition-all duration-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- Emergency Support -->
    <section class="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <AlertCircle class="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Emergency Support Available</h2>
          <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Critical issues? Our emergency support team is available 24/7 to help resolve
            urgent problems and minimize downtime.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Bell class="h-5 w-5 mr-2" />
              Get Emergency Support
            </NuxtLink>
            <button class="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-red-200">
              <Headphones class="h-5 w-5 mr-2" />
              Talk to Support
            </button>
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
          Keep Your Systems Running Smoothly
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Let us handle the maintenance while you focus on growing your business
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Get Started Today
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-green-200"
          >
            View All Services
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
  ArrowRight,
  Shield,
  Clock,
  AlertCircle,
  CheckCircle,
  Activity,
  Bug,
  Lock,
  TrendingUp,
  Headphones,
  Monitor,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Settings,
  Zap,
  BarChart3,
  Bell,
  RefreshCw,
  Users,
  Award,
  Star,
  Package,
  Cloud,
  Database,
  Search
} from 'lucide-vue-next'

definePageMeta({ layout: 'default' })

const activeTab = ref('basic')

const benefits = [
  {
    icon: Shield,
    title: 'Proactive Monitoring',
    description: '24/7 system monitoring to identify and resolve issues before they impact your business.'
  },
  {
    icon: Clock,
    title: 'Rapid Response',
    description: 'Quick resolution of critical issues with guaranteed response times based on priority levels.'
  },
  {
    icon: Lock,
    title: 'Security Updates',
    description: 'Regular security patches and updates to protect against vulnerabilities and threats.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Continuous performance tuning to ensure your applications run at peak efficiency.'
  },
  {
    icon: Bug,
    title: 'Bug Resolution',
    description: 'Swift identification and fixing of bugs to maintain seamless user experience.'
  },
  {
    icon: RefreshCw,
    title: 'Regular Backups',
    description: 'Automated backup systems to ensure your data is always safe and recoverable.'
  }
]

const supportPlans = {
  basic: {
    title: 'Basic Maintenance',
    price: 'Starting at $999/month',
    description: 'Essential maintenance for small to medium applications',
    features: [
      { text: 'Regular updates and patches', included: true },
      { text: 'Security monitoring', included: true },
      { text: 'Monthly health reports', included: true },
      { text: 'Business hours support (9-6 PM)', included: true },
      { text: 'Response time: 24 hours', included: true },
      { text: 'Bug fixes', included: true },
      { text: '24/7 emergency support', included: false },
      { text: 'Dedicated support team', included: false },
      { text: 'On-site support', included: false }
    ],
    gradient: 'from-green-500 to-emerald-600',
    recommended: false
  },
  premium: {
    title: 'Premium Support',
    price: 'Starting at $2,499/month',
    description: 'Comprehensive support for mission-critical applications',
    features: [
      { text: 'All Basic features', included: true },
      { text: '24/7 emergency support', included: true },
      { text: 'Priority response times', included: true },
      { text: 'Response time: 4 hours', included: true },
      { text: 'Dedicated support team', included: true },
      { text: 'Weekly health reports', included: true },
      { text: 'Performance optimization', included: true },
      { text: 'Database maintenance', included: true },
      { text: 'On-site support', included: false }
    ],
    gradient: 'from-blue-500 to-indigo-600',
    recommended: true
  },
  enterprise: {
    title: 'Enterprise Care',
    price: 'Custom Pricing',
    description: 'Tailored solutions for large-scale enterprise applications',
    features: [
      { text: 'All Premium features', included: true },
      { text: 'Custom SLA agreements', included: true },
      { text: 'Response time: 1 hour', included: true },
      { text: 'On-site support options', included: true },
      { text: 'Proactive monitoring', included: true },
      { text: 'Strategic consulting', included: true },
      { text: 'Disaster recovery planning', included: true },
      { text: 'Compliance management', included: true },
      { text: 'Dedicated account manager', included: true }
    ],
    gradient: 'from-orange-500 to-red-600',
    recommended: false
  }
}

const services = [
  {
    icon: Bug,
    title: 'Bug Fixes',
    description: 'Quick identification and resolution of software bugs',
    items: ['Critical bug fixes', 'Regression testing', 'Code debugging', 'Error tracking']
  },
  {
    icon: Lock,
    title: 'Security Updates',
    description: 'Regular security patches and vulnerability assessments',
    items: ['Security patches', 'Vulnerability scanning', 'SSL certificates', 'Compliance updates']
  },
  {
    icon: Activity,
    title: 'Performance Tuning',
    description: 'Optimization for speed and efficiency',
    items: ['Database optimization', 'Code refactoring', 'Caching strategies', 'Load balancing']
  },
  {
    icon: Monitor,
    title: 'System Monitoring',
    description: '24/7 monitoring of your applications and infrastructure',
    items: ['Uptime monitoring', 'Error tracking', 'Performance metrics', 'Automated alerts']
  }
]

const process = [
  {
    step: 1,
    title: 'System Assessment',
    description: 'Comprehensive evaluation of your current infrastructure and applications.',
    icon: Search
  },
  {
    step: 2,
    title: 'Maintenance Plan',
    description: 'Custom maintenance strategy tailored to your specific needs.',
    icon: Settings
  },
  {
    step: 3,
    title: 'Implementation',
    description: 'Set up monitoring tools, establish procedures, and integrate with your team.',
    icon: Package
  },
  {
    step: 4,
    title: 'Continuous Monitoring',
    description: '24/7 system monitoring with automated alerts and issue detection.',
    icon: Activity
  },
  {
    step: 5,
    title: 'Regular Maintenance',
    description: 'Scheduled updates, patches, and performance optimization.',
    icon: RefreshCw
  },
  {
    step: 6,
    title: 'Reporting & Review',
    description: 'Regular reports on system health, performance, and recommendations.',
    icon: BarChart3
  }
]

const stats = [
  { value: '99.9%', label: 'Uptime SLA', icon: TrendingUp },
  { value: '24/7', label: 'Support Available', icon: Clock },
  { value: '<4hr', label: 'Avg Response Time', icon: Zap },
  { value: '500+', label: 'Systems Maintained', icon: Shield }
]

const technologies = [
  'Ruby on Rails', 'Node.js', 'React', 'Vue.js', 'Angular',
  'Python', 'PHP', '.NET', 'Java', 'PostgreSQL',
  'MySQL', 'MongoDB', 'Redis', 'AWS', 'Azure',
  'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab'
]
</script>