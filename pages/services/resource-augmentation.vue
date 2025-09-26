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
              <div class="text-xs text-gray-500 uppercase tracking-wider">Resource Augmentation</div>
            </div>
          </div>

          <div class="hidden lg:flex items-center space-x-8">
            <NuxtLink to="/" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">Home</NuxtLink>
            <NuxtLink to="//about" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">About</NuxtLink>
            <NuxtLink to="//services" class="text-purple-600 font-medium">Services</NuxtLink>
            <NuxtLink to="//portfolio" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">Portfolio</NuxtLink>
            <NuxtLink to="//contact" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">Contact</NuxtLink>
            <NuxtLink
              to="//contact"
              class="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="//services"
          class="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft class="h-4 w-4 mr-2" />
          Back to Services
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              <Users class="h-4 w-4 mr-2" />
              Team Augmentation
            </div>

            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Scale Your Team with
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 block mt-2">
                Top-Tier Talent
              </span>
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Access skilled professionals who seamlessly integrate into your team,
              bringing expertise across various technologies and domains to accelerate
              your project delivery.
            </p>

            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="//contact"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Build Your Team
                <ArrowRight class="h-5 w-5 ml-2" />
              </NuxtLink>
              <button class="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200">
                <Clock class="h-5 w-5 mr-2" />
                Quick Integration
              </button>
            </div>
          </div>

          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Users class="h-8 w-8 text-purple-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">50+</div>
                <p class="text-sm text-gray-600">Expert Developers</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Globe class="h-8 w-8 text-indigo-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">15+</div>
                <p class="text-sm text-gray-600">Technologies</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <TrendingUp class="h-8 w-8 text-green-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">98%</div>
                <p class="text-sm text-gray-600">Client Retention</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Clock class="h-8 w-8 text-blue-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">48hr</div>
                <p class="text-sm text-gray-600">Quick Start</p>
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
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Resource Augmentation?</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Get the right talent at the right time to accelerate your projects
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(benefit, idx) in benefits" :key="idx" class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-white text-purple-600 rounded-xl mb-4 shadow-sm">
              <component :is="benefit.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Technical Expertise</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Deep expertise across modern technology stacks
          </p>
        </div>

        <!-- Tabs -->
        <div class="flex justify-center space-x-4 mb-12">
          <button
            v-for="(exp, key) in expertise"
            :key="key"
            @click="activeTab = key"
            :class="[
              'px-6 py-3 rounded-full font-medium transition-all duration-300',
              activeTab === key
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            ]"
          >
            <span class="flex items-center">
              <component :is="exp.icon" class="h-6 w-6" />
              <span class="ml-2">{{ exp.title }}</span>
            </span>
          </button>
        </div>

        <!-- Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(tech, idx) in expertise[activeTab].technologies" :key="idx" class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex justify-between items-start mb-3">
              <h4 class="text-lg font-bold text-gray-900">{{ tech.name }}</h4>
              <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                {{ tech.level }}
              </span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <Sparkles class="h-4 w-4 text-purple-500 mr-2" />
              {{ tech.projects }} Projects Delivered
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Engagement Process</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple, transparent, and efficient process to get you started quickly
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(step, idx) in process" :key="idx" class="relative">
            <div v-if="idx < process.length - 1" class="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent z-0"></div>
            <div class="bg-white rounded-2xl p-6 shadow-lg relative z-10 hover:shadow-xl transition-shadow">
              <div class="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-xl mb-4">
                <component :is="step.icon" class="h-5 w-5" />
              </div>
              <div class="text-sm text-purple-600 font-semibold mb-2">Step {{ step.step }}</div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-sm text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagement Models -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Flexible Engagement Models</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the model that best fits your project needs
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div v-for="(model, idx) in engagementModels" :key="idx" class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ model.title }}</h3>
            <p class="text-gray-600 mb-6">{{ model.description }}</p>
            <ul class="space-y-3 mb-6">
              <li v-for="(feature, featureIdx) in model.features" :key="featureIdx" class="flex items-center text-gray-700">
                <CheckCircle class="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                {{ feature }}
              </li>
            </ul>
            <div class="pt-6 border-t border-gray-100">
              <p class="text-sm text-purple-600 font-medium">{{ model.ideal }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from companies that have scaled successfully with our talent
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, idx) in testimonials" :key="idx" class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
            <div class="flex items-start mb-6">
              <Star v-for="i in 5" :key="i" class="h-5 w-5 text-yellow-400 fill-yellow-400" />
            </div>
            <blockquote class="text-gray-700 mb-6 italic">
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
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Ready to Scale Your Team?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Get access to pre-vetted talent and start building within 48 hours
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="//contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Get Started Now
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="//portfolio"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200"
          >
            View Success Stories
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
  ArrowRight, Code2, Users, Zap, Shield, CheckCircle,
  Clock, TrendingUp, Layers, Globe, Award, Star,
  ChevronRight, ArrowLeft, Sparkles, Settings, GitBranch,
  Rocket, Target, Brain, Package, Database, Cloud
} from 'lucide-vue-next'

// Use the v3 layout without default header/footer
definePageMeta({
  layout: 'default'
})

const activeTab = ref('frontend')

const benefits = [
  {
    icon: Zap,
    title: 'Flexible Scaling',
    description: 'Scale your team up or down based on project requirements with minimal notice period.'
  },
  {
    icon: Users,
    title: 'Seamless Integration',
    description: 'Our professionals adapt to your workflows and culture, becoming true extensions of your team.'
  },
  {
    icon: Shield,
    title: 'Vetted Talent',
    description: 'Rigorously screened professionals with proven expertise and technical excellence.'
  },
  {
    icon: TrendingUp,
    title: 'Cost Effective',
    description: 'Access top-tier talent without the overhead of full-time hiring and training.'
  },
  {
    icon: Clock,
    title: 'Quick Onboarding',
    description: 'Get skilled professionals integrated into your team within days, not months.'
  },
  {
    icon: Award,
    title: 'Domain Expertise',
    description: 'Specialists across various technologies and industries at your disposal.'
  }
]

const expertise = {
  frontend: {
    title: 'Frontend Development',
    icon: Package,
    technologies: [
      { name: 'React.js', level: 'Expert', projects: '50+' },
      { name: 'Vue.js', level: 'Expert', projects: '30+' },
      { name: 'Next.js', level: 'Advanced', projects: '25+' },
      { name: 'Angular', level: 'Advanced', projects: '20+' },
      { name: 'TypeScript', level: 'Expert', projects: '40+' },
      { name: 'Nuxt.js', level: 'Advanced', projects: '15+' }
    ]
  },
  backend: {
    title: 'Backend Development',
    icon: Database,
    technologies: [
      { name: 'Node.js', level: 'Expert', projects: '45+' },
      { name: 'Ruby on Rails', level: 'Expert', projects: '60+' },
      { name: 'Python/Django', level: 'Advanced', projects: '35+' },
      { name: 'Java Spring', level: 'Advanced', projects: '25+' },
      { name: 'PHP/Laravel', level: 'Advanced', projects: '20+' },
      { name: '.NET Core', level: 'Intermediate', projects: '15+' }
    ]
  },
  cloud: {
    title: 'Cloud & DevOps',
    icon: Cloud,
    technologies: [
      { name: 'AWS', level: 'Expert', projects: '50+' },
      { name: 'Google Cloud', level: 'Advanced', projects: '30+' },
      { name: 'Azure', level: 'Advanced', projects: '20+' },
      { name: 'Docker', level: 'Expert', projects: '60+' },
      { name: 'Kubernetes', level: 'Advanced', projects: '35+' },
      { name: 'CI/CD', level: 'Expert', projects: '70+' }
    ]
  },
  other: {
    title: 'Other Skills',
    icon: Layers,
    technologies: [
      { name: 'UI/UX Design', level: 'Advanced', projects: '40+' },
      { name: 'Mobile Development', level: 'Advanced', projects: '25+' },
      { name: 'QA & Testing', level: 'Expert', projects: '50+' },
      { name: 'Project Management', level: 'Expert', projects: '60+' },
      { name: 'Technical Writing', level: 'Advanced', projects: '30+' },
      { name: 'Data Science', level: 'Intermediate', projects: '15+' }
    ]
  }
}

const process = [
  {
    step: 1,
    title: 'Requirement Analysis',
    description: 'We understand your project needs, team dynamics, and technical requirements.',
    icon: Target
  },
  {
    step: 2,
    title: 'Talent Matching',
    description: 'We identify the perfect professionals from our pre-vetted talent pool.',
    icon: Users
  },
  {
    step: 3,
    title: 'Technical Assessment',
    description: 'Candidates undergo rigorous technical evaluation specific to your needs.',
    icon: Brain
  },
  {
    step: 4,
    title: 'Client Interview',
    description: 'You interview shortlisted candidates to ensure the perfect fit.',
    icon: CheckCircle
  },
  {
    step: 5,
    title: 'Quick Onboarding',
    description: 'Selected professionals integrate seamlessly into your team.',
    icon: Rocket
  },
  {
    step: 6,
    title: 'Ongoing Support',
    description: 'Continuous monitoring and support to ensure project success.',
    icon: Shield
  }
]

const engagementModels = [
  {
    title: 'Dedicated Team',
    description: 'Full-time professionals working exclusively on your projects.',
    features: ['100% dedicated resources', 'Direct team management', 'Long-term engagement', 'Scalable team size'],
    ideal: 'Ideal for long-term projects and product development'
  },
  {
    title: 'Part-Time Resources',
    description: 'Skilled professionals for specific hours or days per week.',
    features: ['Flexible hours', 'Cost-effective', 'Multiple skill sets', 'Quick scaling'],
    ideal: 'Perfect for specific tasks and ongoing support'
  },
  {
    title: 'Project-Based',
    description: 'Resources allocated for the duration of specific projects.',
    features: ['Fixed timeline', 'Clear deliverables', 'Milestone-based', 'Result-oriented'],
    ideal: 'Best for well-defined projects with clear scope'
  }
]

const testimonials = [
  {
    content: "Acorn Globus is a very proficient team, quick to learn new technologies and concepts. They quickly dove in deep and generated impressive results of high quality that are still operational to this day.",
    author: "Alon Diamant",
    role: "CTO",
    company: "Mayple",
    avatar: "/images/testimonials/alon.jpeg"
  },
  {
    content: "Acorn Globus is a gifted team with a rare combination of attention to detail and an overall sense for the big picture. They are very passionate about what they do and come up proactively with improvement ideas.",
    author: "Enzo Zadrima",
    role: "Chief Technology Officer",
    company: "Viewber",
    avatar: "/images/testimonials/enzo.jpeg"
  },
  {
    content: "Acorn Globus is my go-to team when I need a trusted partner to execute any front-end project. They are super attentive, communicate effectively, and accurately manage your expectations for their time and involvement.",
    author: "Bogdan Arsenie",
    role: "CTO",
    company: "PerformLine & Social Impact Advocate",
    avatar: "/images/testimonials/bogdan.jpeg"
  }
]
</script>