<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Code class="h-4 w-4 mr-2" />
              Hire Vue.js Developers
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Hire Vue.js Developers Who Build With Vue Every Day
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              We didn't just add Vue.js to a skills list. We built Formester - our own SaaS product - on it.
              Our website runs on Nuxt. When you hire our Vue developers, you're getting people who've shipped
              real Vue applications to real users.
            </p>

            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Talk to Us
                <ArrowRight class="h-5 w-5 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Heart class="h-8 w-8 text-blue-600 mb-3" />
                <div class="text-lg font-bold text-gray-900">Formester</div>
                <p class="text-sm text-gray-600">Our own SaaS, built on Vue.js</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Users class="h-8 w-8 text-indigo-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">20+</div>
                <p class="text-sm text-gray-600">Person Team</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <TrendingUp class="h-8 w-8 text-green-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">80%+</div>
                <p class="text-sm text-gray-600">Client Retention</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Shield class="h-8 w-8 text-blue-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">2-Week</div>
                <p class="text-sm text-gray-600">Embedded Trial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formester Story Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">We Built Our Own SaaS Product on Vue.js</h2>
          <div class="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>
              Formester is a form builder and data collection platform. We built it. We maintain it.
              It has real users and a 4.8-star rating.
            </p>
            <p>
              That matters because it means our Vue developers have solved the kinds of problems
              your project will face: state management at scale, component architecture decisions,
              performance optimization, server-side rendering with Nuxt, and the hundred small
              choices that separate a tutorial project from a production application.
            </p>
            <p>
              When you hire Vue developers from a marketplace, you get someone who knows the API.
              When you hire from us, you get someone who's debugged a Pinia store at 2 AM because
              real users were affected.
            </p>
          </div>
          <div class="mt-8">
            <NuxtLink
              to="/case-studies/formester"
              class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              See Formester
              <ArrowRight class="h-4 w-4 ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Vue.js Expertise Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Deep Vue.js Ecosystem Expertise</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Vue developers work across the full modern Vue ecosystem - not just the core library.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div v-for="(group, idx) in expertiseGroups" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-bold text-gray-900 mb-4">{{ group.title }}</h3>
            <ul class="space-y-2">
              <li v-for="(item, i) in group.items" :key="i" class="flex items-center gap-3">
                <CheckCircle class="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span class="text-gray-600 text-sm">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink
            to="/technologies/vuejs"
            class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            See our full Vue.js capabilities
            <ArrowRight class="h-4 w-4 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- What We Build Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Applications We Build With Vue.js</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(cap, idx) in capabilities" :key="idx" class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl mb-4">
              <component :is="cap.icon" class="h-5 w-5" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ cap.title }}</h3>
            <p class="text-sm text-gray-600">{{ cap.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">From First Call to First Commit</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, idx) in steps" :key="idx" class="relative">
            <div v-if="idx < steps.length - 1" class="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent z-0"></div>
            <div class="bg-white rounded-2xl p-6 shadow-lg relative z-10 hover:shadow-xl transition-shadow">
              <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
                <component :is="step.icon" class="h-5 w-5" />
              </div>
              <div class="text-sm text-blue-600 font-semibold mb-2">Step {{ idx + 1 }}</div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-sm text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagement Models Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Flexible Hiring, No Lock-In</h2>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div class="divide-y divide-gray-100">
            <div v-for="(model, idx) in engagementModels" :key="idx" class="p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-1">{{ model.name }}</h3>
              <p class="text-sm text-blue-600 font-medium mb-2">{{ model.bestFor }}</p>
              <p class="text-gray-600">{{ model.details }}</p>
            </div>
          </div>
        </div>
        <p class="text-gray-600 mt-6 text-sm">All models start with a two-week trial. No long-term lock-in.</p>
      </div>
    </section>

    <!-- Proof Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Vue.js Projects We've Shipped</h2>

        <div class="space-y-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Formester - Our Own SaaS Product</h3>
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
              A form builder and data collection platform, built from the ground up on Vue.js. Live,
              growing, and serving real users daily. 4.8-star rating.
            </p>
            <p class="text-gray-600 mb-6">
              This isn't a client testimonial we asked for. It's a product we built, maintain, and
              improve every day. Our Vue developers know Vue because they use it to build something
              they own.
            </p>
            <NuxtLink
              to="/case-studies/formester"
              class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              See Formester
              <ArrowRight class="h-4 w-4 ml-2" />
            </NuxtLink>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-4">AcornGlobus Website</h3>
            <p class="text-gray-600">
              The site you're on right now runs on Nuxt 4 and Vue 3. Server-side rendered for
              performance and SEO. We eat our own cooking.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              class="w-full text-left px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              @click="toggleFaq(index)"
            >
              <span class="font-semibold text-gray-900 pr-4">{{ faq.question }}</span>
              <ChevronDown
                class="h-5 w-5 text-gray-500 shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': openFaqs.includes(index) }"
              />
            </button>
            <div
              v-show="openFaqs.includes(index)"
              class="px-6 py-4 text-gray-600 leading-relaxed border-t border-gray-200"
            >
              <p>{{ faq.answer }}</p>
            </div>
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
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Ready to Work With a Team That Lives Vue.js?</h2>
        <p class="text-xl text-gray-600 mb-4">
          We don't just list Vue.js on a capabilities page. We built a product with it. We run
          our website on it. Our Vue developers solve Vue problems every day.
        </p>
        <p class="text-lg text-gray-600 mb-8">
          Start with a conversation. If we're the right fit, we'll begin with a two-week trial.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Book a Call
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <a
            href="mailto:hello@acornglobus.com"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-blue-200"
          >
            Or email us at hello@acornglobus.com
          </a>
        </div>
      </div>
    </section>

    <ClientOnly>
      <LeadCaptureSmartCta
        text="Looking for Vue.js developers who built their own SaaS? Let's talk."
        cta-label="Book a 15-minute call"
        cta-link="/contact"
        dismiss-key="smart_cta_hire_vue"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import {
  ArrowRight, Users, TrendingUp, Shield, Code, Heart,
  CheckCircle, ChevronDown, Layers, Globe, Zap, Target, UserCheck
} from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})

const openFaqs = ref([])

const toggleFaq = (index) => {
  const idx = openFaqs.value.indexOf(index)
  if (idx > -1) {
    openFaqs.value.splice(idx, 1)
  } else {
    openFaqs.value.push(index)
  }
}

const expertiseGroups = [
  {
    title: 'Core Vue',
    items: ['Vue 3 with Composition API', 'Pinia for state management', 'Vue Router', 'TypeScript integration']
  },
  {
    title: 'Nuxt',
    items: ['Nuxt 3/4 for SSR, SSG, and hybrid rendering', 'API routes and server middleware', 'SEO-optimized rendering strategies']
  },
  {
    title: 'Component Libraries',
    items: ['Vuetify, Quasar, PrimeVue', 'Custom component design systems']
  },
  {
    title: 'Testing',
    items: ['Vitest for unit tests', 'Vue Test Utils', 'Cypress and Playwright for E2E']
  },
  {
    title: 'Build and Tooling',
    items: ['Vite', 'Monorepo setups with Turborepo', 'CI/CD pipelines']
  }
]

const capabilities = [
  {
    icon: Layers,
    title: 'SaaS Dashboards and Admin Panels',
    description: "Complex, interactive interfaces with real-time data. Formester's dashboard is one example - built for daily use by thousands of users."
  },
  {
    icon: Code,
    title: 'Form Builders and Data Collection',
    description: 'We built Formester. We understand the drag-and-drop, conditional logic, and validation patterns that make form-heavy applications work well.'
  },
  {
    icon: Globe,
    title: 'E-Commerce Frontends',
    description: 'Fast, SEO-friendly storefronts built with Nuxt for server-side rendering and optimal performance scores.'
  },
  {
    icon: Zap,
    title: 'Progressive Web Applications',
    description: 'Offline-capable, installable web apps that feel native on mobile devices.'
  },
  {
    icon: Target,
    title: 'Internal Business Tools',
    description: 'Admin panels, CRM interfaces, reporting dashboards - the tools your team uses every day that need to be fast and reliable.'
  }
]

const steps = [
  {
    title: 'Discovery Call',
    description: "We learn about your Vue project, your stack, and your team. If you're deciding between Vue and React, we'll give you an honest recommendation.",
    icon: Target
  },
  {
    title: 'Engineer Matching',
    description: "We propose Vue developers with relevant experience. Building a Nuxt application? You'll meet someone who's built one.",
    icon: Users
  },
  {
    title: 'Two-Week Trial',
    description: 'Your developer joins your team. Same tools, same standups, same code reviews. Real work, not a demo project.',
    icon: CheckCircle
  },
  {
    title: 'Ongoing Partnership',
    description: "Monthly rolling after an initial three-month commitment. Scale up or down with two weeks' notice.",
    icon: Heart
  }
]

const engagementModels = [
  {
    name: 'Dedicated (Full-Time)',
    bestFor: 'Best for: Ongoing Vue.js product development',
    details: 'Full integration with your team. Your developer works exclusively on your project.'
  },
  {
    name: 'Part-Time',
    bestFor: 'Best for: Specific features or Vue migrations',
    details: '20 hours/week. Good when you need Vue expertise but not a full-time seat.'
  },
  {
    name: 'Project-Based',
    bestFor: 'Best for: New Vue/Nuxt applications',
    details: 'Defined scope and timeline. Ideal for greenfield builds or Vue 2 to Vue 3 migrations.'
  }
]

const faqs = [
  {
    question: 'How much does it cost to hire a Vue.js developer in India?',
    answer: "Rates depend on seniority and engagement type. We price competitively for dedicated, long-term engagements. We'll share specifics on a discovery call - no generic rate cards."
  },
  {
    question: 'Do your developers work with Nuxt.js?',
    answer: "Yes - extensively. Our own website runs on Nuxt 4. We have experience with SSR, SSG, hybrid rendering, API routes, and Nuxt middleware. If your project is Nuxt-based, we'll match you with engineers who've shipped Nuxt applications."
  },
  {
    question: 'What Vue.js version do your developers use?',
    answer: 'Vue 3 with Composition API and TypeScript is our standard. If you have a Vue 2 application that needs migrating to Vue 3, we can help with that too.'
  },
  {
    question: 'Vue.js vs React - which should I choose for my project?',
    answer: "It depends on your team, your project, and your preferences. Vue tends to have a gentler learning curve and excellent documentation. React has a larger ecosystem and more third-party libraries. We work with both and can give you an honest recommendation based on your specific situation. We won't push one over the other."
  },
  {
    question: 'How quickly can Vue.js developers start?',
    answer: 'Most engagements begin within one to two weeks of the discovery call. We match based on availability and relevant Vue experience.'
  },
  {
    question: 'Can I hire for a short-term Vue.js project?',
    answer: 'Yes. Our project-based model works well for defined scopes like Vue 2 to Vue 3 migrations, building a new Nuxt application, or adding specific features. The minimum engagement is typically three months.'
  },
  {
    question: 'Do your Vue developers work with TypeScript?',
    answer: "Yes. TypeScript with Vue 3 is our default. We've used TypeScript across Formester and our client projects. If your codebase uses JavaScript, we're comfortable with that too."
  }
]

// SEO Meta
useSeoMeta({
  title: 'Hire Vue.js Developers in India | AcornGlobus',
  description: 'Hire Vue.js developers from the team that built Formester - a live SaaS product running on Vue. 20+ person team, named engineers, 2-week trial. Talk to us.',
  keywords: 'hire vue.js developers, hire vuejs developers India, vue developer India, dedicated vue developer, nuxt developer, vue.js development team',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'Hire Vue.js Developers in India | AcornGlobus',
  ogDescription: 'Hire Vue.js developers from the team that built Formester - a live SaaS product running on Vue. 20+ person team, named engineers, 2-week trial.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/hire-vuejs-developer',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Hire Vue.js Developers in India | AcornGlobus',
  twitterDescription: 'Hire Vue.js developers from the team that built Formester - a live SaaS product on Vue.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://acornglobus.com/hire-vuejs-developer' },
  ],
})

useServiceSchema({
  name: 'Hire Vue.js Developers',
  description: 'Hire Vue.js developers from the team that built Formester - a live SaaS product running on Vue. Named engineers, 2-week embedded trial, Nuxt expertise.',
  url: '/hire-vuejs-developer',
})

useFaqSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))

useBreadcrumbSchema([
  { name: 'Hire Vue.js Developers', path: '/hire-vuejs-developer' },
])
</script>
