<template>
  <div class="min-h-screen bg-white">

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/portfolio"
          class="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft class="h-4 w-4 mr-2" />
          Back to Portfolio
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              <Sparkles class="h-4 w-4 mr-2" />
              Our Own SaaS Product
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We Built Our Own SaaS. Here's What It Taught Us About Building Yours.
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Formester is our SaaS product -- a no-code, AI-powered form builder used by real
              businesses every day. Building it changed how we work with every client.
            </p>

            <div class="flex flex-wrap gap-4 mb-8">
              <a
                href="https://formester.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Visit Formester
                <ExternalLink class="h-4 w-4 ml-2" />
              </a>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200"
              >
                Let's Talk
                <ArrowRight class="h-4 w-4 ml-2" />
              </NuxtLink>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div v-for="(item, idx) in heroMeta" :key="idx">
                <p class="text-sm text-gray-500 mb-1">{{ item.label }}</p>
                <p class="font-semibold text-gray-900">{{ item.value }}</p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="aspect-w-16 aspect-h-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="~/assets/images/projects/formester-main.png"
                alt="Formester - AI-powered no-code form builder dashboard"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ratings Bar -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(rating, idx) in ratings" :key="idx" class="text-center">
            <div class="inline-flex items-center justify-center w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl mb-4">
              <component :is="rating.icon" class="h-6 w-6" />
            </div>
            <div class="text-3xl font-bold text-gray-900 mb-1">{{ rating.metric }}</div>
            <div class="text-gray-600">{{ rating.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Story: It Started With a Question -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">It Started With a Question</h2>
        <div class="prose prose-lg prose-gray max-w-none">
          <p class="text-gray-600 leading-relaxed mb-6">
            Here's what we noticed after years of building products for clients: we were good at
            executing on requirements. Really good. But there was a gap between executing on a spec
            and truly owning the outcome.
          </p>
          <p class="text-gray-600 leading-relaxed mb-6">
            When a client asked us to build a feature, we built it. When they asked us to fix a bug,
            we fixed it. But we wanted to know what it feels like on the other side -- to be the ones
            deciding what gets built, the ones losing sleep over churn, the ones watching real users
            struggle with something you designed.
          </p>
          <p class="text-gray-700 leading-relaxed font-medium">
            So we built Formester. Not as a side project. Not as a tech demo. As a real product, with
            real users, real revenue goals, and real consequences for every decision.
          </p>
        </div>
      </div>
    </section>

    <!-- What We Built -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What We Built</h2>
          <p class="text-lg text-gray-600">
            Formester is a form builder -- but that understates it. The surface is simple. What's
            underneath is not.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, idx) in features"
            :key="idx"
            class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="inline-flex items-center justify-center w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl mb-6">
              <component :is="feature.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>

        <div class="max-w-3xl mx-auto mt-12">
          <p class="text-gray-500 text-sm">
            Under the hood: Ruby on Rails, Vue.js, PostgreSQL, Redis, AWS, and OpenAI API. Each
            chosen for a specific reason -- Rails for iteration speed, PostgreSQL for data integrity
            at scale.
          </p>
        </div>
      </div>
    </section>

    <!-- Five Lessons -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Five Things Building Formester Taught Us</h2>
        <p class="text-lg text-gray-600 mb-12">
          These aren't abstract lessons. They're things we learned the hard way, and they've changed
          how we approach every client engagement.
        </p>

        <div class="space-y-16">
          <div v-for="(lesson, idx) in lessons" :key="idx">
            <div class="flex items-start gap-4 mb-4">
              <span class="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center font-bold text-lg">
                {{ idx + 1 }}
              </span>
              <h3 class="text-2xl font-bold text-gray-900 pt-1">{{ lesson.title }}</h3>
            </div>
            <p class="text-gray-600 leading-relaxed mb-4 ml-14">{{ lesson.story }}</p>
            <div class="ml-14 bg-purple-50 rounded-2xl p-6">
              <p class="text-sm font-semibold text-purple-700 mb-2">How this shows up in client work</p>
              <p class="text-gray-700">{{ lesson.clientImpact }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Numbers -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">The Numbers</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            These aren't projections. They're the result of years of building, listening to users, and
            making the product better every week.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(stat, idx) in stats"
            :key="idx"
            class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 text-center"
          >
            <div class="text-2xl font-bold text-gray-900 mb-2">{{ stat.value }}</div>
            <div class="text-gray-600 text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why This Matters For You -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Why This Matters for You</h2>
        <div class="prose prose-lg prose-gray max-w-none mb-12">
          <p class="text-gray-600 leading-relaxed mb-6">
            Formester is our proof. It's proof that we understand what it means to own a product, not
            just deliver one. It's proof that we know the difference between shipping a feature and
            solving a user's problem. And it's proof that we think about long-term maintainability
            because we live with the consequences of every decision we make.
          </p>
          <p class="text-gray-700 leading-relaxed font-medium">
            When we say "we build it like it's ours," that's not a tagline. It's literally what we do.
            We've been doing it with Formester since we started, and we bring that same ownership
            mindset to every product we touch.
          </p>
        </div>

        <div class="space-y-6">
          <div v-for="(audience, idx) in audiences" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ audience.title }}</h3>
            <p class="text-gray-600">{{ audience.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div class="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p class="text-gray-600 italic mb-4">
          Formester is live at
          <a href="https://formester.com" target="_blank" rel="noopener noreferrer" class="text-purple-600 hover:text-purple-700 underline">formester.com</a>.
          We built it. We maintain it. We use what we learn from it every single day.
        </p>
        <h2 class="text-3xl font-bold text-gray-900 mb-6">
          Want a team that builds your product with the same care we put into ours?
        </h2>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Let's Talk
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/portfolio"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200"
          >
            View More Projects
            <ChevronRight class="h-5 w-5 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRight, Sparkles, Users, Star, ChevronRight, Brain, BarChart3, Layout,
  ArrowLeft, ExternalLink, Award, Zap, CreditCard, GitBranch
} from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'We Built Our Own SaaS. Here\'s What It Taught Us About Building Yours.',
  description: 'Formester is our own SaaS product -- a live form builder with real users and a 4.7-star G2 rating. Building it taught us what true product ownership feels like.',
  keywords: 'product engineering team that builds its own products, Formester case study, AcornGlobus SaaS, form builder, product ownership',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'We Built Our Own SaaS. Here\'s What It Taught Us About Building Yours.',
  ogDescription: 'Formester is our own SaaS product -- a live form builder with real users and a 4.7-star G2 rating. Building it taught us what true product ownership feels like.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/case-studies/formester',
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: 'We Built Our Own SaaS. Here\'s What It Taught Us About Building Yours.',
  twitterDescription: 'Formester is our own SaaS product -- a live form builder with real users and a 4.7-star G2 rating. Building it taught us what true product ownership feels like.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

const heroMeta = [
  { label: 'Product', value: 'Formester' },
  { label: 'Type', value: 'Our Own SaaS' },
  { label: 'Status', value: 'Live & Growing' },
  { label: 'Stack', value: 'Rails + Vue.js' },
]

const ratings = [
  { metric: '4.7/5', label: 'G2 (33 reviews)', icon: Star },
  { metric: '4.4/5', label: 'Trustpilot', icon: Star },
  { metric: '5/5', label: 'Product Hunt & Capterra', icon: Award },
  { metric: '1,000+', label: 'Zapier Integrations', icon: Zap },
]

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Form Creation',
    description: 'Users describe what they need in plain language. The AI generates a complete form with logic, validation, and structure. No dragging, no dropping, no template hunting.',
  },
  {
    icon: GitBranch,
    title: 'Conditional Logic for Everyone',
    description: 'Branch paths, skip logic, calculated fields -- all configured visually. Built because we watched users struggle with tools that required code for anything beyond a basic contact form.',
  },
  {
    icon: CreditCard,
    title: 'Payment Processing Baked In',
    description: 'Stripe and PayPal integration for subscriptions, one-time payments, donations, and product orders. Not a bolt-on -- a core part of the product.',
  },
  {
    icon: Users,
    title: 'Real-Time Collaboration',
    description: 'Teams can co-edit forms, set granular permissions, and submit collaboratively. We built this because our own team needed it.',
  },
  {
    icon: BarChart3,
    title: 'Analytics That Answer "So What?"',
    description: 'Drop-off analysis, funnel tracking, GA4 integration. Not just "you got 500 responses" but "42% of users abandon at question 7."',
  },
  {
    icon: Layout,
    title: 'No-Code Builder',
    description: 'Build complex, multi-step forms with drag-and-drop. Custom styling, responsive design, and 1,000+ integrations via Zapier plus native Slack, Sheets, Salesforce, and HubSpot.',
  },
]

const lessons = [
  {
    title: 'The spec is never the product',
    story: 'When we wrote Formester\'s initial requirements, we thought we knew what users wanted. We were wrong about a lot of it. The feature we were most excited about got almost no usage. The feature we added as an afterthought became one of the most-used parts of the product.',
    clientImpact: 'We don\'t just build what\'s in the spec. We ask why each feature exists, who it\'s for, and what outcome it should drive. When we see a feature that might not land with users, we say so -- honestly and early.',
  },
  {
    title: 'Technical debt is personal when it\'s your product',
    story: 'When you\'re building for someone else, shortcuts feel like trade-offs. When you\'re building for yourself, shortcuts feel like setting a trap for future-you. We\'ve lived with every architectural decision we made on Formester -- the good ones and the ones we wish we could take back.',
    clientImpact: 'We build for the team that comes after us. Clean code, clear documentation, no lock-in. Because we know what it\'s like to inherit your own mess six months later.',
  },
  {
    title: 'Shipping is the beginning, not the end',
    story: 'Formester\'s launch was the easiest part. What came after -- monitoring, user support, performance tuning, iterating based on feedback, deciding what not to build -- that\'s where the real work lives.',
    clientImpact: 'We think about Day 2 from Day 1. How will this be monitored? How will the team debug this at 2 AM? What happens when traffic spikes? We plan for the product\'s life, not just its launch.',
  },
  {
    title: 'Users don\'t care about your architecture',
    story: 'Nobody signs up for Formester because we use PostgreSQL. They sign up because they can build a payment form in three minutes. We learned to measure every technical decision by its impact on the user, not its elegance.',
    clientImpact: 'When we recommend a technology or architecture, we explain it in terms of what it means for the user and the business. "We chose PostgreSQL for ACID compliance at scale" is something we say to CTOs. To founders, we say "your data will be consistent and safe, even when thousands of people are using your product at the same time."',
  },
  {
    title: 'Ownership means staying',
    story: 'We didn\'t ship Formester and move on. We\'re still building it. Still improving it. Still fixing the things that break. That\'s what ownership actually means -- not a mindset you put on for a meeting, but a commitment you live with every day.',
    clientImpact: 'PerformLine started with 1 engineer and grew to 8+ over 2 years. Eitoss started as an MVP we shipped in 3 months -- they raised funding, and we\'re still building together more than 2 years later. We stay because that\'s what partners do.',
  },
]

const stats = [
  { value: '4.7/5 stars', label: 'G2 (33 reviews)' },
  { value: '4.4/5 stars', label: 'Trustpilot' },
  { value: '5/5 stars', label: 'Product Hunt and Capterra' },
  { value: 'Rising Star Award', label: 'FinancesOnline' },
  { value: 'Top Form Builder', label: 'Recognized by Research.com' },
  { value: '1,000+ Integrations', label: 'Zapier, Slack, Sheets, Salesforce, HubSpot' },
]

const audiences = [
  {
    title: 'For funded startups',
    description: 'You need a team that cares about your runway as much as you do. Because we\'ve built our own product on limited resources, we know the difference between "nice to have" and "need to ship." We\'ll help you scope ruthlessly and build what actually moves your metrics.',
  },
  {
    title: 'For non-technical founders',
    description: 'You need a team that explains what they\'re building and why. Because we\'ve been on both sides -- the builders and the product owners -- we translate technical decisions into business impact. You\'ll always understand what you\'re paying for.',
  },
  {
    title: 'For growing companies',
    description: 'You need engineers who think beyond the ticket. Because we\'ve maintained our own product for years, we build with operations, scale, and future development in mind. Your code will be something your next hire can understand on day one.',
  },
]
</script>
