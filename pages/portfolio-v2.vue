<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Briefcase class="h-4 w-4 mr-2" />
            Our Portfolio
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Products We've Built
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block mt-2">
              And Stories Behind Them
            </span>
          </h1>

          <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            From our own SaaS product to funded startups and global nonprofits, here's the work
            we're proud of - and the partnerships that made it happen.
          </p>

          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 group"
          >
            Let's build together
            <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section ref="statsSection" class="py-16 bg-white" :class="{ 'reveal-visible': sectionsVisible.stats, 'reveal-hidden': !sectionsVisible.stats }">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(stat, index) in stats" :key="index" class="text-center">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-xl mb-3">
              <component :is="stat.icon" class="h-6 w-6" />
            </div>
            <div class="text-2xl font-semibold text-gray-900 mb-0.5">{{ stat.value }}</div>
            <div class="text-sm text-gray-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Project -->
    <section v-if="featuredProject" ref="featuredSection" class="py-20 bg-gradient-to-b from-white to-blue-50/30" :class="{ 'reveal-visible': sectionsVisible.featured, 'reveal-hidden': !sectionsVisible.featured }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            <Award class="h-4 w-4 mr-2" />
            Featured Success Story
          </div>
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-900">Our Flagship Product</h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Image: show first on mobile, second on desktop -->
          <div class="order-1 lg:order-2 relative">
            <img
              :src="featuredProject.image"
              :alt="featuredProject.altText"
              class="relative rounded-xl shadow-md"
            />
          </div>
          <!-- Content: show second on mobile, first on desktop -->
          <div class="order-2 lg:order-1">
            <h3 class="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              {{ featuredProject.name }}
              <span class="block text-base font-medium text-blue-600 mt-2">{{ featuredProject.tagline }}</span>
            </h3>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed max-w-xl">
              {{ featuredProject.longDescription }}
            </p>

            <div class="grid grid-cols-3 gap-3 mb-8">
              <div class="text-center p-5 bg-white rounded-xl border border-gray-100">
                <div class="text-2xl font-semibold text-blue-600">{{ featuredProject.metrics.users }}</div>
                <div class="text-sm font-normal text-gray-500 mt-1">Active Users</div>
              </div>
              <div class="text-center p-5 bg-white rounded-xl border border-gray-100">
                <div class="text-2xl font-semibold text-blue-600">{{ featuredProject.metrics.forms }}</div>
                <div class="text-sm font-normal text-gray-500 mt-1">Forms Created</div>
              </div>
              <div class="text-center p-5 bg-white rounded-xl border border-gray-100">
                <div class="text-2xl font-semibold text-blue-600">{{ featuredProject.metrics.rating }}&#9733;</div>
                <div class="text-sm font-normal text-gray-500 mt-1">User Rating</div>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-8">
              <span v-for="(tech, index) in featuredProject.technologies" :key="index" class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                {{ tech }}
              </span>
            </div>

            <a
              :href="featuredProject.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 group"
            >
              Visit Formester
              <ExternalLink class="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid (with integrated filters) -->
    <section class="pt-16 pb-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section header with filters -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 sm:mb-0">
            Our Work
          </h2>
          <div class="flex flex-nowrap gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide" role="tablist" aria-label="Filter projects by category">
            <button
              v-for="filter in filters"
              :key="filter.id"
              @click="activeFilter = filter.id"
              role="tab"
              :aria-selected="activeFilter === filter.id"
              :aria-pressed="activeFilter === filter.id"
              :class="[
                'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0',
                'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none',
                activeFilter === filter.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              ]"
            >
              <component :is="filter.icon" class="h-4 w-4 mr-1.5" />
              <span>{{ filter.label }}</span>
            </button>
          </div>
        </div>

        <!-- Grid with TransitionGroup -->
        <TransitionGroup
          name="card"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          role="tabpanel"
          aria-label="Project list"
        >
          <NuxtLink
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            :to="getProjectLink(project.id)"
            class="group relative bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none"
            :style="{
              boxShadow: hoveredProject === project.id
                ? '0 20px 40px -10px rgba(37, 99, 235, 0.12)'
                : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              transitionDelay: sectionsVisible.grid ? `${Math.min(index * 100, 400)}ms` : '0ms'
            }"
            @mouseenter="hoveredProject = project.id"
            @mouseleave="hoveredProject = null"
          >
            <!-- Image Section -->
            <div class="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
              <img
                v-if="!imageErrors[project.id]"
                :src="project.image"
                :alt="project.altText"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                @error="handleImageError(project.id)"
              />
              <div v-else class="absolute inset-0 flex flex-col items-center justify-center">
                <component :is="getCategoryIcon(project.category)" class="h-12 w-12 text-gray-300 mb-3" />
                <span class="text-sm font-medium text-gray-400">{{ project.name }}</span>
              </div>

              <!-- Category Badge on Image -->
              <div class="absolute top-3 left-3 flex gap-2">
                <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-lg text-xs font-medium capitalize inline-flex items-center">
                  <component :is="getCategoryIcon(project.category)" class="h-3 w-3 mr-1" />
                  {{ project.category }}
                </span>
                <span v-if="project.isOwnProduct" class="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white rounded-lg text-xs font-medium inline-flex items-center">
                  <Rocket class="h-3 w-3 mr-1" />
                  Our Product
                </span>
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {{ project.name }}
              </h3>
              <p class="text-sm font-medium text-blue-600 mb-3">{{ project.tagline }}</p>
              <p class="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{{ project.description }}</p>

              <!-- Technologies (gray, metadata style) -->
              <div class="flex flex-wrap gap-1.5 mb-4">
                <span v-for="(tech, idx) in project.technologies.slice(0, 3)" :key="idx" class="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg font-medium">
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3" class="text-xs px-2.5 py-1 bg-gray-100 text-gray-500 rounded-lg font-medium">
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>

              <!-- Metrics -->
              <div v-if="project.metrics" class="flex items-center justify-between pt-4 border-t border-gray-100">
                <div v-for="(value, key, idx) in Object.fromEntries(Object.entries(project.metrics).slice(0, 2))" :key="idx" class="text-center">
                  <div class="text-lg font-semibold text-gray-900">
                    {{ value }}
                  </div>
                  <div class="text-xs text-gray-500 capitalize mt-0.5">{{ key }}</div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </TransitionGroup>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section ref="testimonialsSection" class="py-20 bg-gray-50" :class="{ 'reveal-visible': sectionsVisible.testimonials, 'reveal-hidden': !sectionsVisible.testimonials }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">From the people we build with</h2>
          <p class="text-base text-gray-600">Success is best measured by client satisfaction</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white border border-gray-200 rounded-xl p-8">
            <Quote class="h-6 w-6 text-gray-300 mb-4" />
            <p v-if="testimonial.framing" class="text-sm font-semibold text-gray-900 mb-2">{{ testimonial.framing }}</p>
            <p class="text-base text-gray-600 mb-6 italic leading-relaxed">{{ testimonial.content }}</p>
            <div class="flex items-center">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 class="text-sm font-semibold text-gray-900">{{ testimonial.name }}</h4>
                <p class="text-xs text-gray-500">{{ testimonial.role }}, {{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section ref="ctaSection" class="py-20 bg-white" :class="{ 'reveal-visible': sectionsVisible.cta, 'reveal-hidden': !sectionsVisible.cta }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Want to build something like this?
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          We'd love to hear what you're working on. No pitch decks - just a conversation about your product.
        </p>
        <div class="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 group w-full sm:w-auto justify-center"
          >
            Start a conversation
            <ArrowRight class="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="px-8 py-4 text-gray-600 font-medium hover:text-gray-900 transition-colors duration-200"
          >
            View Services
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import {
  ArrowRight, Filter, ExternalLink, Award, Globe, Zap,
  BookOpen, Rocket, Target, Users, Star, Quote, ArrowUpRight,
  ShoppingCart, Briefcase, Heart, School, Package, Layers,
  CheckCircle, TrendingUp, Building2, ChevronRight, Sparkles,
  Building, Cloud
} from 'lucide-vue-next'

// Use the v3 layout without default header/footer
definePageMeta({
  layout: 'default'
})

// SEO Meta Tags
useSeoMeta({
  title: 'Portfolio - Acorn Globus | Products We\'ve Built & Case Studies',
  description: 'Explore our portfolio: Formester (our own SaaS, 1000+ users), Eitoss (MVP to funding in 8 weeks), Rumie (1M+ learners in 176 countries). Real products, real outcomes.',
  keywords: 'acorn globus portfolio, case studies, software development projects, formester, eitoss, rumie initiative, invoice falcon, success stories',
  author: 'Acorn Globus',
  robots: 'index, follow',
  ogTitle: 'Portfolio - Acorn Globus | Products We\'ve Built & Case Studies',
  ogDescription: 'Explore our portfolio: Formester (our own SaaS, 1000+ users), Eitoss (MVP to funding in 8 weeks), Rumie (1M+ learners in 176 countries). Real products, real outcomes.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/portfolio',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Portfolio - Acorn Globus | Products We\'ve Built & Case Studies',
  twitterDescription: 'Explore our portfolio: Formester (our own SaaS), Eitoss (MVP to funding), Rumie (1M+ learners). Real products, real outcomes.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useBreadcrumbSchema([
  { name: 'Portfolio', path: '/portfolio' },
])

const activeFilter = ref('all')
const hoveredProject = ref(null)
const imageErrors = ref({})

// Scroll reveal refs
const statsSection = ref(null)
const featuredSection = ref(null)
const testimonialsSection = ref(null)
const ctaSection = ref(null)

const sectionsVisible = ref({
  stats: false,
  featured: false,
  grid: false,
  testimonials: false,
  cta: false
})

// Intersection Observer for scroll-reveal
let observers = []

const setupObserver = (element, key) => {
  if (!element) return
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionsVisible.value[key] = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  observer.observe(element)
  observers.push(observer)
}

onMounted(() => {
  nextTick(() => {
    setupObserver(statsSection.value, 'stats')
    setupObserver(featuredSection.value, 'featured')
    setupObserver(testimonialsSection.value, 'testimonials')
    setupObserver(ctaSection.value, 'cta')
    // Grid visible by default after a small delay for entrance animation
    setTimeout(() => { sectionsVisible.value.grid = true }, 200)
  })
})

onUnmounted(() => {
  observers.forEach((obs) => obs.disconnect())
  observers = []
})

const handleImageError = (projectId) => {
  imageErrors.value[projectId] = true
}

const getCategoryIcon = (category) => {
  const icons = { saas: Cloud, enterprise: Building, ecommerce: ShoppingCart, nonprofit: Heart }
  return icons[category] || Building
}

const getProjectLink = (projectId) => {
  const slugMap = { 1: 'formester', 2: 'eitoss', 3: 'invoice-falcon', 4: 'rumie', 5: 'performline' }
  return `/case-studies/${slugMap[projectId] || ''}`
}

const filters = [
  { id: 'all', label: 'All Projects', icon: Layers },
  { id: 'saas', label: 'SaaS', icon: Cloud },
  { id: 'enterprise', label: 'Enterprise', icon: Building2 },
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingCart },
  { id: 'nonprofit', label: 'Non-Profit', icon: Heart }
]

const projects = [
  {
    id: 1,
    name: 'Formester',
    category: 'saas',
    tagline: 'AI-Powered No-Code Form Builder',
    description: 'Our own SaaS product - a no-code form builder with AI capabilities. Build complex forms with advanced logic without writing a single line of code.',
    longDescription: 'We built Formester ourselves - it\'s proof that we know what it takes to ship and grow a real product. 1000+ users, 50K+ forms created, 4.8 rating. It empowers businesses to create intelligent forms with conditional logic, AI-powered generation, and seamless integrations.',
    isOwnProduct: true,
    technologies: ['Ruby on Rails', 'Vue.js', 'PostgreSQL', 'AI Integration', 'AWS'],
    features: [
      'AI-powered form generation',
      'No-code drag & drop builder',
      'Advanced conditional logic',
      '100+ integrations',
      'Real-time analytics'
    ],
    metrics: {
      users: '1000+',
      forms: '50K+',
      rating: '4.8'
    },
    altText: 'Screenshot of Formester drag-and-drop form builder interface',
    image: '/images/formester-mockup.png',
    link: 'https://formester.com',
    featured: true
  },
  {
    id: 2,
    name: 'Eitoss',
    category: 'enterprise',
    tagline: 'Bridging Management & Frontline Workers',
    description: 'A platform implementing Kaizen principles to bridge the communication gap between management and frontline workers, driving continuous improvement.',
    longDescription: 'Eitoss connects decision-makers with ground-level employees through a seamless communication channel, fostering a culture of continuous improvement. We shipped the MVP in 8 weeks, they raised funding, and we\'re still building together 2+ years later.',
    technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'AI Integration', 'Real-time Analytics'],
    features: [
      'Real-time communication channels',
      'Kaizen implementation tools',
      'Performance analytics',
      'Mobile-first design',
      'Automated workflow management'
    ],
    metrics: {
      efficiency: '+40%',
      adoption: '95%',
      roi: '3x'
    },
    altText: 'Screenshot of Eitoss management-frontline communication platform',
    image: '/images/eitoss-mockup.png',
    featured: true
  },
  {
    id: 5,
    name: 'PerformLine',
    category: 'enterprise',
    tagline: 'Regulatory Compliance at Scale',
    description: 'A regulatory technology platform that monitors marketing content across channels for compliance. We started with 1 engineer and grew to 8+ over 2 years.',
    longDescription: 'PerformLine automates compliance monitoring across web, calls, emails, messages, and social media. We embedded with their team from day one - 1 engineer became 8+ across full-stack, DevOps, QA, and frontend over a 2-year partnership.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Microservices'],
    features: [
      'Multi-channel compliance monitoring',
      'Automated content scanning',
      'Real-time alerting',
      'Custom rule engine',
      'Analytics dashboards'
    ],
    metrics: {
      team: '8+',
      duration: '2+ years',
      channels: '5+'
    },
    altText: 'PerformLine regulatory compliance monitoring platform',
    image: '/images/performline-mockup.png',
    featured: true
  },
  {
    id: 3,
    name: 'Invoice Falcon',
    category: 'ecommerce',
    tagline: 'Shopify Invoicing Made Simple',
    description: 'A full-featured invoicing app for Shopify merchants - automated generation, multi-currency support, and tax compliance across 30+ countries.',
    longDescription: 'Invoice Falcon simplifies invoicing for Shopify stores with automated generation, multi-currency support, and compliance with global tax regulations, serving 500+ merchants worldwide.',
    technologies: ['Ruby on Rails', 'React', 'Shopify API', 'AWS', 'Stripe'],
    features: [
      'Automated invoice generation',
      'Multi-currency support',
      'Tax compliance automation',
      'Custom branding options',
      'Bulk operations'
    ],
    metrics: {
      merchants: '500+',
      invoices: '100K+',
      countries: '30+'
    },
    altText: 'Screenshot of Invoice Falcon Shopify invoicing dashboard',
    image: '/images/invoice-falcon-mockup.png',
    link: '#',
    featured: false
  },
  {
    id: 4,
    name: 'Rumie',
    category: 'nonprofit',
    tagline: 'Democratizing Education Globally',
    description: 'Democratizing education through bite-sized learning experiences, reaching learners across 176 countries with accessible, quality content.',
    longDescription: 'Rumie breaks down barriers to education by providing micro-learning content that works on any device, anywhere in the world, making quality education accessible to everyone.',
    technologies: ['Nuxt', 'Vue.js', 'Flutter', 'AWS', 'Firebase'],
    features: [
      'Offline-first architecture',
      'Multi-language support',
      'Bite-sized lessons',
      'Progress tracking',
      'Community features'
    ],
    metrics: {
      countries: '176',
      learners: '1M+',
      lessons: '10K+'
    },
    altText: 'Screenshot of Rumie micro-learning platform interface',
    image: '/images/rumie-mockup.png',
    link: '#',
    featured: true
  }
]

// Exclude Formester from grid (featured section handles it)
const filteredProjects = computed(() => {
  const nonFeatured = projects.filter(p => p.id !== 1)
  return activeFilter.value === 'all'
    ? nonFeatured
    : nonFeatured.filter(project => project.category === activeFilter.value)
})

const featuredProject = computed(() => projects.find(p => p.featured && p.id === 1))

const stats = [
  { value: '25+', label: 'Products Shipped', icon: Rocket },
  { value: '80%+', label: 'Client Retention', icon: Star },
  { value: '15+', label: 'Industries Served', icon: Globe },
  { value: '1M+', label: 'End Users Impacted', icon: Users }
]

const testimonials = [
  {
    name: 'Alon Diamant',
    role: 'CTO',
    company: 'Mayple',
    framing: 'Built to last.',
    content: 'Acorn Globus is a very proficient team, quick to learn new technologies and concepts. They quickly dove in deep and generated impressive results of high quality that are still operational to this day.',
    avatar: '/images/testimonials/alon.jpeg'
  },
  {
    name: 'Enzo Zadrima',
    role: 'CTO',
    company: 'Viewber',
    framing: 'They don\'t wait to be asked.',
    content: 'Acorn Globus is a gifted team with a rare combination of attention to detail and an overall sense for the big picture. They are very passionate about what they do and come up proactively with improvement ideas.',
    avatar: '/images/testimonials/enzo.jpeg'
  }
]
</script>

<style scoped>
/* Scroll reveal animations */
.reveal-hidden {
  opacity: 0;
  transform: translateY(16px);
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

/* TransitionGroup for filter transitions */
.card-enter-active {
  transition: all 0.3s ease-out;
}

.card-leave-active {
  transition: all 0.2s ease-in;
  position: absolute;
}

.card-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.card-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.card-move {
  transition: transform 0.3s ease;
}

/* Hide scrollbar for filter pills on mobile */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
