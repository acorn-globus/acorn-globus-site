<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/services"
          class="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft class="h-4 w-4 mr-2" />
          Back to Services
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
              <Rocket class="h-4 w-4 mr-2" />
              MVP Development
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ship a real product. Not a prototype you'll rewrite in six months.
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              We build MVPs that are production-ready from day one — clean code, proper architecture,
              ready for users and investors. We've done it for ourselves with Formester. We'll do it with you.
            </p>

            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Tell us about your product idea
                <ArrowRight class="h-5 w-5 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Clock class="h-8 w-8 text-amber-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">6-12</div>
                <p class="text-sm text-gray-600">Weeks to Launch</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Package class="h-8 w-8 text-amber-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">25+</div>
                <p class="text-sm text-gray-600">Products Shipped</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <TrendingUp class="h-8 w-8 text-green-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">80%+</div>
                <p class="text-sm text-gray-600">Client Retention</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Shield class="h-8 w-8 text-amber-600 mb-3" />
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
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Your runway is ticking. You need builders, not promises.</h2>
        <div class="text-lg text-gray-600 space-y-4 leading-relaxed">
          <p>
            You've got the vision. Maybe the funding too. What you don't have is six months to
            hire a team, three months to onboard them, and patience for a prototype that falls
            apart under real users.
          </p>
          <p>
            You need a team that can start now, ship something real in weeks, and stick around
            after launch — not disappear when the invoice clears.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Approach Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">We build it like it's ours. Because we've built our own.</h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            We created Formester — our own SaaS product, live and growing with real users and a
            4.8 rating. That taught us what it actually feels like to ship something you care about.
            The anxiety of launch day. The trade-offs between speed and quality. The difference
            between a demo and a product.
          </p>
          <p class="text-lg text-gray-600 mt-4 leading-relaxed">We bring that same ownership to your MVP:</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div v-for="(item, idx) in approach" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-xl mb-4">
              <component :is="item.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Proof Story Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 md:p-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Eitoss: MVP in 3 months. Raised funding. Still building together.</h2>
          <div class="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>
              Eitoss came to us with a product vision and a timeline. We scoped the MVP together,
              had a demoable product in 8 weeks, and launched into production in 3 months.
            </p>
            <p>
              They used that product to raise funding. And then they kept building with us — not
              because they had to, but because the partnership worked. Two years later, we're still
              growing the product together.
            </p>
            <p>That's not a vendor relationship. That's what partnership looks like.</p>
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
              <div class="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-amber-100 text-amber-700 rounded-xl mr-4 font-bold text-sm">
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
            <CheckCircle class="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
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

    <!-- Audience-Specific Messaging -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">For funded startups</h3>
            <p class="text-gray-700 leading-relaxed">
              You've got the vision and the funding. We'll be the team that brings it to life.
              Fixed-price and milestone-based options keep your budget predictable while your
              product takes shape.
            </p>
          </div>
          <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">For non-technical founders</h3>
            <p class="text-gray-700 leading-relaxed">
              You don't need a CTO yet. You need a team that feels like co-founders. We'll
              translate your vision into a technical plan, guide you through every decision, and
              build it with you. Milestone-based pricing so you know exactly what you're getting
              at every step.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Products we've shipped</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Eitoss</h3>
            <p class="text-sm font-semibold text-green-600 mb-4">MVP in 3 months. Raised funding. Still building together.</p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Demoable product in 8 weeks. Live in production in 3 months. They raised funding
              and we're still their engineering team 2+ years later.
            </p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Formester</h3>
            <p class="text-sm font-semibold text-purple-600 mb-4">Our own SaaS. 1,000+ users. 4.8 rating.</p>
            <p class="text-gray-600 text-sm leading-relaxed">
              We built our own product from scratch -- it taught us what real ownership feels like.
              We bring that same care to every MVP we build.
            </p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <p class="text-sm font-semibold text-blue-600 mb-3">They don't wait to be asked.</p>
            <blockquote class="text-gray-700 italic mb-6 text-sm leading-relaxed">
              "Acorn Globus is a gifted team with a rare combination of attention to detail and an
              overall sense for the big picture. They are very passionate about what they do and
              come up proactively with improvement ideas."
            </blockquote>
            <div class="flex items-center">
              <img
                src="/images/testimonials/enzo.jpeg"
                alt="Enzo Zadrima"
                class="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div class="font-semibold text-gray-900 text-sm">Enzo Zadrima</div>
                <div class="text-xs text-gray-600">CTO, Viewber</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-amber-50 to-yellow-50 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Your idea deserves a real product, not a throwaway prototype.
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Tell us what you're building. We'll have an honest conversation about scope, timeline,
          and what your MVP actually needs — no sales pitch, no inflated estimates. If we're the
          right fit, we'll scope it together.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Let's talk about your product
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/case-studies/eitoss"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-amber-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-amber-200"
          >
            See how we built Eitoss's MVP
            <ChevronRight class="h-5 w-5 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <ClientOnly>
      <LeadCaptureSmartCta
        text="Ready to turn your idea into a product? We'd love to hear about it."
        cta-label="Book a 15-minute call"
        cta-link="/contact"
        dismiss-key="smart_cta_mvp"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import {
  ArrowRight, ArrowLeft, Rocket, Clock, Package, TrendingUp, Shield,
  CheckCircle, ChevronRight, Zap, Heart, Target, FileCode
} from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'MVP Development | Ship a Real Product, Not a Throwaway Prototype | AcornGlobus',
  description: 'We build MVPs that launch, raise funding, and keep growing. Eitoss shipped in 3 months, raised funding, and we\'re still building together 2 years later. 6-12 week timelines.',
  keywords: 'MVP development, minimum viable product, startup MVP, product development, rapid prototyping, AcornGlobus',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'MVP Development | Ship a Real Product, Not a Throwaway Prototype | AcornGlobus',
  ogDescription: 'We build MVPs that launch, raise funding, and keep growing. Eitoss shipped in 3 months, raised funding. 6-12 week timelines.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/services/mvp-development',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'MVP Development | Ship a Real Product | AcornGlobus',
  twitterDescription: 'We build MVPs that launch, raise funding, and keep growing. 6-12 week timelines.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useServiceSchema({
  name: 'MVP Development',
  description: 'We build MVPs that launch, raise funding, and keep growing. Production-quality from day one, with clean code and proper architecture. 6-12 week timelines.',
  url: '/services/mvp-development',
})

useBreadcrumbSchema([
  { name: 'Services', path: '/services' },
  { name: 'MVP Development', path: '/services/mvp-development' },
])

const approach = [
  {
    icon: Shield,
    title: 'Production-quality from day one.',
    description: 'Clean code, proper architecture, CI/CD pipeline. Built to grow, not to be thrown away.'
  },
  {
    icon: Target,
    title: 'Honest guidance on scope.',
    description: "We'll tell you what to build first and what can wait. Not to bill less — because we want you to succeed faster."
  },
  {
    icon: FileCode,
    title: 'You own everything.',
    description: 'Your code, your product, your freedom. Full ownership from day one, documented and ready for your future in-house team.'
  },
  {
    icon: Heart,
    title: "We don't disappear after launch.",
    description: "Eitoss started as an MVP we shipped in 3 months. They raised funding. Two years later, we're still building together."
  }
]

const steps = [
  {
    title: 'Discovery and scoping (1-2 weeks)',
    description: 'We understand your vision, define what the MVP actually needs, and create a technical plan with a realistic timeline and budget. No guesswork.'
  },
  {
    title: 'Design and architecture (1 week)',
    description: 'UI/UX wireframes, technical architecture, stack selection. The foundation matters.'
  },
  {
    title: 'Build sprints (4-8 weeks)',
    description: 'Two-week sprints with a working demo at the end of each one. You see real progress every two weeks, not just status updates.'
  },
  {
    title: 'Launch prep (1 week)',
    description: 'Deployment, monitoring, documentation, handoff. Ready for real users.'
  },
  {
    title: 'Post-launch support (2 weeks included)',
    description: 'Bug fixes and critical issues after launch, because launching is just the beginning.'
  }
]

const included = [
  'Product scoping and feature prioritization — what to build first, what to skip',
  'Technical architecture and stack selection',
  'UI/UX wireframes (we recommend a dedicated designer for pixel-perfect design)',
  'Full-stack development',
  'Testing and QA',
  'Cloud deployment (AWS, GCP, or Azure)',
  'CI/CD pipeline setup',
  '2 weeks of post-launch support',
  "Complete documentation and code handoff — it's your product"
]

const engagementDetails = [
  { label: 'Timeline', value: '6-12 weeks typical' },
  { label: 'Team', value: '2-4 engineers + 1 project lead' },
  { label: 'Pricing', value: 'Fixed-price or capped time-and-materials' },
  { label: 'Code ownership', value: '100% yours from day one' }
]

</script>
