<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/services"
          class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft class="h-4 w-4 mr-2" />
          Back to Services
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Layers class="h-4 w-4 mr-2" />
              Full Project Delivery
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your product, built end-to-end by a team that treats it like their own.
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              You define the what. We walk with you through the how. From architecture to launch,
              you get a product engineering team that's genuinely invested in your success - not
              just your deadline.
            </p>

            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Let's talk about your project
                <ArrowRight class="h-5 w-5 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Package class="h-8 w-8 text-blue-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">25+</div>
                <p class="text-sm text-gray-600">Products Shipped</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Users class="h-8 w-8 text-indigo-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">20+</div>
                <p class="text-sm text-gray-600">Engineers</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <TrendingUp class="h-8 w-8 text-green-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">80%+</div>
                <p class="text-sm text-gray-600">Client Retention</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Shield class="h-8 w-8 text-blue-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">100%</div>
                <p class="text-sm text-gray-600">Code Ownership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pain Point Section -->
    <section class="py-20 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">You need a product built right. Not just built.</h2>
        <div class="text-lg text-gray-600 space-y-4 leading-relaxed">
          <p>
            Maybe you don't have the engineering team to take this on. Maybe your team is stretched
            thin and this project needs dedicated focus. Either way, you need more than code - you
            need a team that understands your product, makes smart technical decisions, and delivers
            something that works in production, not just in a demo.
          </p>
          <p>
            You've heard the horror stories. Missed deadlines. Surprise invoices. A codebase you
            can't maintain. You need a partner who builds for your independence, not your dependence.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Approach Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">One team. One relationship. No surprises.</h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            We don't hand you off between departments. You get one PM, one Slack channel, and
            engineers you know by name. The same people who architect your system are the ones
            who build it, test it, and launch it.
          </p>
          <p class="text-lg text-gray-600 mt-4 leading-relaxed">Here's how we think about full project delivery:</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div v-for="(item, idx) in approach" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
              <component :is="item.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Proof Stories Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">We've done this before. Here's how it went.</h2>

        <div class="space-y-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Eitoss</h3>
            <p class="text-gray-700 leading-relaxed">
              Eitoss came to us needing an MVP built from scratch. We had a demoable product in 8 weeks
              and shipped it into production in 3 months. They raised funding. Two years later, we're still
              building together - the project became a partnership.
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-3">PerformLine</h3>
            <p class="text-gray-700 leading-relaxed">
              PerformLine started with resource augmentation and grew to 8+ engineers over 2 years -
              full-stack, DevOps, data, QA, and frontend. What started as extra hands became a core
              part of their engineering operation.
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Formester</h3>
            <p class="text-gray-700 leading-relaxed">
              Formester is our own SaaS product - live, growing, with real users and a 4.8 rating.
              We built it ourselves, which means we understand what it takes to ship a product that
              has to work in the real world. We bring that same standard to every project we deliver.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div v-for="(step, idx) in steps" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-start">
              <div class="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-700 rounded-xl mr-4 font-bold text-sm">
                {{ idx + 1 }}
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">{{ step.title }}</h3>
                <p class="text-gray-600">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What You Get Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">What you get</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(item, idx) in included" :key="idx" class="flex items-start">
            <CheckCircle class="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
            <span class="text-gray-700">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagement Details -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">The details</h2>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="divide-y divide-gray-100">
            <div v-for="(detail, idx) in engagementDetails" :key="idx" class="flex items-center px-6 py-4">
              <div class="w-1/3 font-semibold text-gray-900">{{ detail.label }}</div>
              <div class="w-2/3 text-gray-600">{{ detail.value }}</div>
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
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          You have the vision. Let's build it together.
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Tell us about your project - what you're building, who it's for, and where you are today.
          We'll have an honest conversation about scope, timeline, and approach. No generic proposals.
          Just a real plan for your product.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Let's talk about your project
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/case-studies/eitoss"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-blue-200"
          >
            See our work with Eitoss and PerformLine
            <ChevronRight class="h-5 w-5 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <ClientOnly>
      <LeadCaptureSmartCta
        text="Have a product idea? We'd love to hear about it."
        cta-label="Book a 15-minute call"
        cta-link="/contact"
        dismiss-key="smart_cta_full_project"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import {
  ArrowRight, ArrowLeft, Users, Package, TrendingUp, Shield, Layers,
  CheckCircle, ChevronRight, Target, Heart, Eye, DollarSign
} from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Full Project Delivery | End-to-End Product Engineering | AcornGlobus',
  description: 'We build your product end-to-end with the same care we put into our own. One team, one relationship, milestone transparency. From architecture to launch and beyond.',
  keywords: 'full project delivery, end-to-end development, product engineering, software development, fixed price project, AcornGlobus',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'Full Project Delivery | End-to-End Product Engineering | AcornGlobus',
  ogDescription: 'We build your product end-to-end with the same care we put into our own. One team, one relationship, milestone transparency.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/services/full-project-delivery',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Full Project Delivery | End-to-End Product Engineering',
  twitterDescription: 'We build your product end-to-end with the same care we put into our own. One team, one relationship, milestone transparency.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useServiceSchema({
  name: 'Full Project Delivery',
  description: 'Your product, built end-to-end by a team that treats it like their own. From architecture to launch, one team, one relationship, no surprises.',
  url: '/services/full-project-delivery',
})

useBreadcrumbSchema([
  { name: 'Services', path: '/services' },
  { name: 'Full Project Delivery', path: '/services/full-project-delivery' },
])

const approach = [
  {
    icon: Layers,
    title: 'Architecture first.',
    description: 'We design for scale before writing a line of code. The foundation matters more than the speed of the first sprint.'
  },
  {
    icon: Eye,
    title: 'Milestone transparency.',
    description: 'You see working software at every milestone, not just at the end. We walk you through every decision so there are no surprises.'
  },
  {
    icon: Shield,
    title: 'Built to hand over.',
    description: "Your code, your product, clean documentation. We build for your independence - zero lock-in. If you want to bring it in-house someday, we'll help you do that."
  },
  {
    icon: DollarSign,
    title: 'Honest pricing.',
    description: 'Milestone-based pricing means budget predictability. No surprise invoices, no scope creep without a conversation first.'
  },
  {
    icon: Heart,
    title: 'Partnerships, not projects.',
    description: "Many of our project delivery clients grow into long-term partnerships. We're here for the journey, not just the launch."
  }
]

const steps = [
  {
    title: 'Requirements and planning (2-4 weeks)',
    description: "Deep-dive into requirements, architecture design, project plan, and risk identification. We don't start building until we understand what we're building and why."
  },
  {
    title: 'Development phases (8-24+ weeks)',
    description: 'Phased delivery with milestone demos. Agile sprints internally, milestone-based checkpoints with you. You see working software regularly.'
  },
  {
    title: 'QA and testing',
    description: 'Continuous testing throughout. Unit, integration, and end-to-end tests. UAT cycles with your team before launch.'
  },
  {
    title: 'Deployment and launch',
    description: "Production deployment, monitoring setup, performance tuning. We don't launch and leave."
  },
  {
    title: 'Warranty period (4 weeks)',
    description: 'Bug fixes and stability issues post-launch. We stand behind what we build.'
  },
  {
    title: 'Handoff',
    description: 'Documentation, training, knowledge transfer. Your team walks away fully equipped to own the product.'
  }
]

const included = [
  'Product and project management',
  'System architecture and technical design',
  'Full-stack development',
  'UI/UX implementation (from your designs, or we provide wireframes)',
  'QA and testing - unit, integration, end-to-end',
  'DevOps and infrastructure setup',
  'Deployment and go-live support',
  'Technical and user-facing documentation',
  'Knowledge transfer to your team',
  '4-week post-launch warranty'
]

const engagementDetails = [
  { label: 'Timeline', value: '3-12+ months depending on scope' },
  { label: 'Team', value: '3-8 engineers + project manager + QA' },
  { label: 'Pricing', value: 'Milestone-based fixed price or capped T&M' },
  { label: 'Code ownership', value: '100% yours - code and IP' },
  { label: 'Communication', value: 'Weekly status reports, bi-weekly demos, dedicated Slack channel' }
]
</script>
