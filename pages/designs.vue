<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-6">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Design Portfolio
          </span>
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Where Creativity Meets
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block mt-2">
              Functionality
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our diverse collection of design projects that have helped businesses
            create memorable digital experiences and drive meaningful results.
          </p>
        </div>

        <!-- Stats Row -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-3xl font-bold text-gray-900">50+</div>
            <div class="text-sm text-gray-600">Designs</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-gray-900">15+</div>
            <div class="text-sm text-gray-600">Industries</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-gray-900">6+</div>
            <div class="text-sm text-gray-600">Years</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-gray-900">100%</div>
            <div class="text-sm text-gray-600">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-12 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            :class="[
              'px-6 py-3 rounded-full font-medium transition-all duration-300',
              activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="design in filteredDesigns"
            :key="design.id"
            class="group cursor-pointer"
            @click="openModal(design)"
          >
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div class="aspect-w-16 aspect-h-12 relative">
                <img
                  :src="design.image"
                  :alt="design.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  @error="handleImageError"
                  @load="handleImageLoad"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <Eye class="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {{ design.category }}
                  </span>
                  <div class="flex items-center text-yellow-400">
                    <Star class="h-4 w-4 fill-current" />
                    <span class="text-sm text-gray-600 ml-1">{{ design.rating }}</span>
                  </div>
                </div>

                <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {{ design.title }}
                </h3>

                <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                  {{ design.description }}
                </p>

                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span class="text-sm text-gray-500">{{ design.timeline }}</span>
                  </div>
                  <ArrowUpRight class="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12" v-if="hasMoreDesigns">
          <button
            @click="loadMore"
            class="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Load More Designs
            <ChevronDown class="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ready to Bring Your Vision to Life?
        </h2>
        <p class="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Let's create something extraordinary together. From concept to launch,
          we'll craft designs that captivate your audience and drive results.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            Start Your Design Project
            <ArrowRight class="ml-2 h-5 w-5" />
          </NuxtLink>
          <NuxtLink
            to="/portfolio"
            class="inline-flex items-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
          >
            View Case Studies
            <ExternalLink class="ml-2 h-5 w-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div
      v-if="selectedDesign"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      @click="closeModal"
    >
      <div
        class="relative bg-white rounded-3xl max-w-4xl mx-4 max-h-[90vh] overflow-auto"
        @click.stop
      >
        <button
          @click="closeModal"
          class="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
        >
          <X class="h-6 w-6 text-gray-600" />
        </button>

        <div class="p-8">
          <div class="aspect-w-16 aspect-h-10 mb-6 rounded-2xl overflow-hidden">
            <img
              :src="selectedDesign.image"
              :alt="selectedDesign.title"
              class="w-full h-80 object-cover"
              @error="handleImageError"
              @load="handleImageLoad"
            />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div class="flex items-center space-x-3 mb-4">
                <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {{ selectedDesign.category }}
                </span>
                <div class="flex items-center text-yellow-400">
                  <Star class="h-4 w-4 fill-current" />
                  <span class="text-sm text-gray-600 ml-1">{{ selectedDesign.rating }}</span>
                </div>
              </div>

              <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ selectedDesign.title }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ selectedDesign.description }}</p>

              <div class="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Client</h4>
                  <p class="text-gray-600">{{ selectedDesign.client }}</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Timeline</h4>
                  <p class="text-gray-600">{{ selectedDesign.timeline }}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 class="font-semibold text-gray-900 mb-4">Technologies Used</h4>
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tech in selectedDesign.technologies"
                  :key="tech"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {{ tech }}
                </span>
              </div>

              <h4 class="font-semibold text-gray-900 mb-4">Key Features</h4>
              <ul class="space-y-2 mb-6">
                <li
                  v-for="feature in selectedDesign.features"
                  :key="feature"
                  class="flex items-start space-x-2"
                >
                  <CheckCircle class="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-600">{{ feature }}</span>
                </li>
              </ul>

              <div class="flex gap-4">
                <button
                  v-if="selectedDesign.liveUrl"
                  class="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Live Site
                  <ExternalLink class="ml-2 h-4 w-4" />
                </button>
                <button
                  v-if="selectedDesign.caseStudyUrl"
                  class="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  Case Study
                  <ArrowUpRight class="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  Eye, Star, ArrowUpRight, ChevronDown, ArrowRight, ExternalLink,
  X, CheckCircle
} from 'lucide-vue-next'

// Page metadata
definePageMeta({
  layout: 'default'
})

// SEO Meta Tags
useSeoMeta({
  title: 'Design Portfolio - Acorn Globus Creative Gallery',
  description: 'Explore our diverse collection of web design, mobile app interfaces, branding projects, and UI/UX solutions. See how we create memorable digital experiences.',
  keywords: 'design portfolio, web design, mobile app design, UI/UX, branding, graphic design, creative services',
  author: 'Acorn Globus',
  robots: 'index, follow',
  ogTitle: 'Design Portfolio - Acorn Globus Creative Gallery',
  ogDescription: 'Explore our diverse collection of web design, mobile app interfaces, branding projects, and UI/UX solutions.',
  ogImage: 'https://acornglobus.com/acorn-globus-designs.png',
  ogUrl: 'https://acornglobus.com/designs',
  ogType: 'website'
})

const activeCategory = ref('all')
const selectedDesign = ref(null)
const hasMoreDesigns = ref(true)

const categories = [
  { id: 'all', name: 'All Designs' },
  { id: 'web', name: 'Web Design' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'uiux', name: 'UI/UX' },
  { id: 'branding', name: 'Branding' },
  { id: 'graphics', name: 'Graphics' }
]

const designs = [
  {
    id: 1,
    title: 'Travel and Hospitality App',
    description: 'Here’s a sneak peek of our travel and hospitality app design. It allows users to book trips, view real-time availability, and get instant updates about their stay.',
    category: 'Mobile Apps',
    categoryId: 'mobile',
    image: '/images/designs/travel.jpg',
    client: 'TechCommerce Ltd',
    timeline: '6 weeks',
    rating: 4.9,
    technologies: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Responsive mobile-first design',
      'Advanced product filtering system',
      'Optimized checkout flow',
      'Accessibility compliant (WCAG 2.1)'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    description: 'Here’s a glimpse of our custom financial software design. It simplifies secure transactions, real-time reporting.',
    category: 'Web Design',
    categoryId: 'web',
    image: '/images/designs/finance-dashboard.jpg',
    client: 'SecureBank',
    timeline: '8 weeks',
    rating: 4.8,
    technologies: ['Sketch', 'React Native', 'TypeScript', 'Lottie'],
    features: [
      'Biometric authentication',
      'Real-time transaction tracking',
      'Budget management tools',
      'Multi-currency support'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 3,
    title: 'Logistics Dashboard',
    description: 'Check out the design of this logistics app! It helps users schedule deliveries, track shipments in real-time, and get quick customer support all in one place.',
    category: 'Web Design',
    categoryId: 'web',
    image: '/images/designs/logistics.jpg',
    client: 'ProjectFlow Inc',
    timeline: '4 weeks',
    rating: 4.9,
    technologies: ['Adobe XD', 'Vue.js', 'Chart.js', 'CSS Grid'],
    features: [
      'Interactive data visualizations',
      'Customizable widget system',
      'Dark/light theme toggle',
      'Real-time collaboration tools'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 4,
    title: 'Custom Financial App',
    description: 'Here’s a glimpse of our custom financial software design. It simplifies secure transactions, real-time reporting.',
    category: 'Mobile Apps',
    categoryId: 'mobile',
    image: '/images/designs/finance-app.jpg',
    client: 'EcoTech Solutions',
    timeline: '5 weeks',
    rating: 5.0,
    technologies: ['Illustrator', 'Photoshop', 'InDesign', 'After Effects'],
    features: [
      'Logo design and variations',
      'Brand color system',
      'Typography guidelines',
      'Marketing collateral templates'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 5,
    title: 'Logistics Mobile App',
    description: 'Check out the design of this logistics app! It helps users schedule deliveries, track shipments in real-time, and get quick customer support all in one place.',
    category: 'Mobile Apps',
    categoryId: 'mobile',
    image: '/images/designs/logistics-app.jpg',
    client: 'EventMaster Pro',
    timeline: '10 weeks',
    rating: 4.7,
    technologies: ['Figma', 'Next.js', 'Stripe API', 'Google Maps'],
    features: [
      'Multi-vendor ticket system',
      'Interactive venue maps',
      'Social media integration',
      'Advanced analytics dashboard'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 6,
    title: 'HR Software',
    description: 'Here’s a look at our new HR software. It streamlines employee management, performance tracking, and payroll processing with a clean, easy-to-use design.',
    category: 'Web Design',
    categoryId: 'web',
    image: '/images/designs/hr.jpg',
    client: 'HealthConnect',
    timeline: '7 weeks',
    rating: 4.9,
    technologies: ['Figma', 'Flutter', 'Firebase', 'WebRTC'],
    features: [
      'HIPAA compliant design',
      'Video consultation interface',
      'Health metrics tracking',
      'Prescription management'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 7,
    title: 'Healthcare App',
    description: 'Take a look at our healthcare app design! It makes scheduling appointments, accessing medical records, and communicating with doctors simple and secure.',
    category: 'Mobile Apps',
    categoryId: 'mobile',
    image: '/images/designs/healthcare.jpg',
    client: 'HealthConnect',
    timeline: '7 weeks',
    rating: 4.9,
    technologies: ['Figma', 'Flutter', 'Firebase', 'WebRTC'],
    features: [
      'HIPAA compliant design',
      'Video consultation interface',
      'Health metrics tracking',
      'Prescription management'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 8,
    title: 'Travel & Hospitality Dashboard',
    description: 'Here’s a sneak peek of our travel and hospitality app design. It allows users to book trips, view real-time availability, and get instant updates about their stay.',
    category: 'Web Design',
    categoryId: 'web',
    image: '/images/designs/hospitality-web.jpg',
    client: 'TechCommerce Ltd',
    timeline: '6 weeks',
    rating: 4.9,
    technologies: ['Figma', 'Flutter', 'Firebase', 'WebRTC'],
    features: [
      'HIPAA compliant design',
      'Video consultation interface',
      'Health metrics tracking',
      'Prescription management'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 9,
    title: 'Job Search App',
    description: 'Here’s a look at our new HR software. It streamlines employee management, performance tracking, and payroll processing with a clean, easy-to-use design.',
    category: 'Mobile Apps',
    categoryId: 'mobile',
    image: '/images/designs/job-app.jpg',
    client: 'TechCommerce Ltd',
    timeline: '6 weeks',
    rating: 4.9,
    technologies: ['Figma', 'Flutter', 'Firebase', 'WebRTC'],
    features: [
      'HIPAA compliant design',
      'Video consultation interface',
      'Health metrics tracking',
      'Prescription management'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 10,
    title: 'Healthcare App',
    description: 'ake a look at our healthcare app design! It makes scheduling appointments, accessing medical records, and communicating with doctors simple and secure.',
    category: 'Web Design',
    categoryId: 'web',
    image: '/images/designs/health-app.jpg',
    client: 'TechCommerce Ltd',
    timeline: '6 weeks',
    rating: 4.9,
    technologies: ['Figma', 'Flutter', 'Firebase', 'WebRTC'],
    features: [
      'HIPAA compliant design',
      'Video consultation interface',
      'Health metrics tracking',
      'Prescription management'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  }
]

const filteredDesigns = computed(() => {
  if (activeCategory.value === 'all') {
    return designs
  }
  return designs.filter(design => design.categoryId === activeCategory.value)
})

const openModal = (design) => {
  selectedDesign.value = design
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedDesign.value = null
  document.body.style.overflow = 'auto'
}

const loadMore = () => {
  // In a real app, this would load more designs from an API
  hasMoreDesigns.value = false
}

const handleImageError = (event) => {
  console.warn('Failed to load image:', event.target.src)
  // You can set a fallback image here
  // event.target.src = '/images/design-placeholder.jpg'
}

const handleImageLoad = (event) => {
  console.log('Image loaded successfully:', event.target.src)
}

// Cleanup on unmount
onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.aspect-w-16 {
  position: relative;
  padding-bottom: 75%; /* 16:12 aspect ratio */
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>