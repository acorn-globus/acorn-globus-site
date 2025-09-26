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
            <Building2 class="h-4 w-4 mr-2" />
            About Acorn Globus
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            We Build More Than
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block mt-2">
              Software, We Build Partnerships
            </span>
          </h1>

          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            From a solo project to a thriving team of passionate innovators, we're on a mission to
            transform ideas into exceptional digital experiences that drive real business value.
          </p>

          <div class="flex flex-wrap gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight class="ml-2 h-5 w-5" />
            </NuxtLink>
            <NuxtLink
              to="/portfolio"
              class="inline-flex items-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              View Our Work
              <ArrowUpRight class="ml-2 h-5 w-5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section id="stats" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center"
            :style="{
              animation: countersVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
            }"
          >
            <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-4">
              <component :is="stat.icon" class="h-6 w-6" />
            </div>
            <div class="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              {{ stat.value }}{{ stat.suffix }}
            </div>
            <div class="text-gray-600 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              What started as a solo venture with Formester has evolved into something much greater.
              When Ankit Singhania and Tarun Bhukya joined forces, they didn't just create a company –
              they built a culture.
            </p>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Today, Acorn Globus stands as a testament to what happens when passion meets purpose.
              We're not just developers; we're problem solvers, innovators, and partners in our
              clients' success stories.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              With over 6 years of experience and a team of 16+ talented individuals, we've delivered
              25+ successful projects while maintaining a 98% client satisfaction rate. But numbers
              only tell part of our story – the real magic lies in our approach.
            </p>
          </div>

          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl opacity-10 blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Acorn Globus Team"
              class="relative rounded-3xl shadow-2xl"
            >
            <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <Quote class="h-8 w-8 text-blue-200 mb-2" />
              <p class="text-sm font-medium text-gray-900 italic">
                "Culture First, Skills Second"
              </p>
              <p class="text-xs text-gray-600 mt-1">- Our Hiring Philosophy</p>
            </div>
          </div>
        </div>

        <!-- Founders Section -->
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">Meet Our Founders</h3>
          <p class="text-lg text-gray-600">The visionaries behind Acorn Globus</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div v-for="(founder, index) in founders" :key="index" class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="flex items-center space-x-6">
              <img
                :src="founder.image"
                :alt="founder.name"
                class="w-24 h-24 rounded-full border-4 border-blue-100"
              >
              <div>
                <h4 class="text-xl font-bold text-gray-900">{{ founder.name }}</h4>
                <p class="text-blue-600 font-medium">{{ founder.role }}</p>
                <p class="text-gray-600 mt-2">{{ founder.bio }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Journey Timeline -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to global impact
          </p>
        </div>

        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 to-indigo-200"></div>

          <!-- Timeline Items -->
          <div class="space-y-12">
            <div
              v-for="(item, index) in timeline"
              :key="index"
              :class="[
                'relative flex items-center',
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              ]"
            >
              <div :class="['w-5/12', index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8']">
                <div :class="[
                  'inline-block p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100',
                  index % 2 === 0 ? 'text-right' : 'text-left'
                ]">
                  <div :class="[
                    'flex items-center space-x-3 mb-3',
                    index % 2 === 0 ? 'justify-end' : 'justify-start'
                  ]">
                    <div class="p-2 bg-blue-100 rounded-lg text-blue-600">
                      <component :is="item.icon" class="h-5 w-5" />
                    </div>
                    <span class="text-2xl font-bold text-blue-600">{{ item.year }}</span>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.title }}</h3>
                  <p class="text-gray-600">{{ item.description }}</p>
                </div>
              </div>

              <!-- Center Dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-white shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100"
            @click="activeValue = index"
          >
            <div class="flex items-start space-x-6">
              <div :class="[
                'p-4 bg-gradient-to-br rounded-2xl group-hover:scale-110 transition-transform duration-300',
                value.color,
                value.iconColor
              ]">
                <component :is="value.icon" class="h-6 w-6" />
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ value.title }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Acorn Globus?
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            What sets us apart in the digital landscape
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
            <Handshake class="h-12 w-12 text-blue-600 mb-6" />
            <h3 class="text-xl font-bold text-gray-900 mb-3">True Partnership</h3>
            <p class="text-gray-600">
              We don't just deliver code; we become an extension of your team, invested in your success.
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
            <Lightbulb class="h-12 w-12 text-blue-600 mb-6" />
            <h3 class="text-xl font-bold text-gray-900 mb-3">Innovation First</h3>
            <p class="text-gray-600">
              We stay ahead of the curve, bringing cutting-edge solutions to solve your business challenges.
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
            <Shield class="h-12 w-12 text-green-600 mb-6" />
            <h3 class="text-xl font-bold text-gray-900 mb-3">Quality Assured</h3>
            <p class="text-gray-600">
              With a 98% client satisfaction rate, our commitment to excellence speaks for itself.
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

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p class="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Let's transform your ideas into reality with passion, innovation, and a team that truly cares.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
            <ArrowRight class="ml-2 h-5 w-5" />
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="inline-flex items-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
          >
            Explore Services
            <ChevronRight class="ml-2 h-5 w-5" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  ArrowRight, Users, Target, Heart, Sparkles, TrendingUp,
  Award, Globe, Zap, BookOpen, Coffee, Rocket, Building2,
  CheckCircle, Star, Quote, ArrowUpRight, MapPin, Calendar,
  Lightbulb, Handshake, Shield, Clock, ChevronRight
} from 'lucide-vue-next'

// Use the v3 layout without default header/footer
definePageMeta({
  layout: 'default'
})

// SEO Meta Tags
useSeoMeta({
  title: 'About Us - Acorn Globus | Our Story, Team & Values',
  description: 'Learn about Acorn Globus journey from a solo project to a thriving team of 16+ passionate innovators. Meet our founders Ankit Singhania and Tarun Bhukya and discover our culture-first approach.',
  keywords: 'about acorn globus, software development team, founders, company history, tech team, startup story, culture first hiring',
  author: 'Acorn Globus',
  robots: 'index, follow',
  ogTitle: 'About Us - Acorn Globus | Our Story, Team & Values',
  ogDescription: 'Learn about Acorn Globus journey from a solo project to a thriving team of 16+ passionate innovators. Meet our founders Ankit Singhania and Tarun Bhukya and discover our culture-first approach.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/about',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'About Us - Acorn Globus | Our Story, Team & Values',
  twitterDescription: 'Learn about Acorn Globus journey from a solo project to a thriving team of 16+ passionate innovators. Meet our founders and discover our culture-first approach.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

const activeValue = ref(0)
const countersVisible = ref(false)

const stats = [
  { value: 6, suffix: '+', label: 'Years of Excellence', icon: Award },
  { value: 25, suffix: '+', label: 'Projects Delivered', icon: Rocket },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: Heart },
  { value: 16, suffix: '+', label: 'Team Members', icon: Users }
]

const values = [
  {
    icon: Heart,
    title: 'Culture First, Skills Second',
    description: 'We hire for passion and potential. Technical skills can be taught, but empathy, dedication, and the drive to excel come from within.',
    color: 'from-pink-50 to-red-50',
    iconColor: 'text-pink-600'
  },
  {
    icon: Users,
    title: 'Team Unity',
    description: 'No rigid hierarchies here. We work as one team, where every voice matters and everyone contributes to our collective success.',
    color: 'from-blue-50 to-indigo-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'We empower our team to grow, learn, and evolve. Every project is an opportunity to expand our horizons and master new technologies.',
    color: 'from-blue-50 to-cyan-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Handshake,
    title: 'Client Partnership',
    description: 'We treat every project as our own, building lasting relationships that go beyond code to create true business value.',
    color: 'from-green-50 to-emerald-50',
    iconColor: 'text-green-600'
  }
]

const timeline = [
  {
    year: '2018',
    title: 'The Beginning',
    description: 'Started as a solo project with Formester, laying the foundation for what would become Acorn Globus.',
    icon: Sparkles
  },
  {
    year: '2019',
    title: 'Team Formation',
    description: 'Ankit Singhania and Tarun Bhukya joined forces, transforming a solo venture into a collaborative powerhouse.',
    icon: Users
  },
  {
    year: '2020',
    title: 'Scaling Up',
    description: 'Expanded our team and services, taking on more complex projects and building our reputation.',
    icon: TrendingUp
  },
  {
    year: '2021',
    title: 'Product Success',
    description: 'Launched Formester as a full SaaS product, proving our capability to build and scale successful products.',
    icon: Rocket
  },
  {
    year: '2023',
    title: 'Global Reach',
    description: 'Expanded our client base globally, working with startups and enterprises across continents.',
    icon: Globe
  },
  {
    year: '2024',
    title: 'Innovation Leader',
    description: 'Continue to push boundaries with AI-powered solutions and cutting-edge technologies.',
    icon: Zap
  }
]

const founders = [
  {
    name: 'Ankit Singhania',
    role: 'Co-Founder',
    bio: 'Visionary leader with a passion for building innovative solutions that make a real impact.',
    image: '/images/ankit.jpeg',
    linkedin: '#'
  },
  {
    name: 'Tarun Bhukya',
    role: 'Co-Founder',
    bio: 'Technical architect who believes in the power of clean code and exceptional user experiences.',
    image: '/images/tarun.jpeg',
    linkedin: '#'
  }
]

onMounted(() => {
  const handleScroll = () => {
    const countersSection = document.getElementById('stats')
    if (countersSection) {
      const rect = countersSection.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        countersVisible.value = true
      }
    }
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>