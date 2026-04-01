<template>

  <div class="min-h-screen bg-white">

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/portfolio"
          class="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft class="h-4 w-4 mr-2" />
          Back to Portfolio
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              <Users class="h-4 w-4 mr-2" />
              Resource Augmentation
            </div>

            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              PerformLine
            </h1>
            <p class="text-2xl text-green-600 font-semibold mb-4">
              From 1 Engineer to 8+ in 2 Years
            </p>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              One engineer. One chance to prove we belonged. Two years later, we're eight engineers deep — and still growing.
            </p>

            <div class="flex flex-wrap gap-4 mb-8">
              <a
                href="https://performline.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Visit PerformLine
                <ExternalLink class="h-4 w-4 ml-2" />
              </a>
              <div class="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full font-semibold">
                <Clock class="h-4 w-4 mr-2" />
                2+ Years &amp; Counting
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div v-for="(stat, idx) in heroStats" :key="idx">
                <p class="text-sm text-gray-500 mb-1">{{ stat.label }}</p>
                <p class="font-semibold text-gray-900">{{ stat.value }}</p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="aspect-w-16 aspect-h-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="PerformLine engineering team collaboration"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Metrics -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(result, idx) in results" :key="idx" class="text-center">
            <div class="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-2xl mb-4">
              <component :is="result.icon" class="h-6 w-6" />
            </div>
            <div class="text-3xl font-bold text-gray-900 mb-1">{{ result.metric }}</div>
            <div class="text-gray-600">{{ result.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Quick Version -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">The Quick Version</h2>
        <div class="bg-white rounded-3xl p-8 shadow-lg">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="(item, idx) in quickFacts" :key="idx" class="flex items-start">
              <div class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
              <div>
                <p class="text-sm text-gray-500">{{ item.label }}</p>
                <p class="font-semibold text-gray-900">{{ item.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who PerformLine Is -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Who PerformLine Is</h2>
        <div class="prose prose-lg text-gray-600 max-w-none">
          <p class="leading-relaxed mb-4">
            PerformLine builds compliance monitoring software trusted by major U.S. banks. Their platform helps financial institutions and other regulated organizations automatically review, monitor, and remediate marketing content across every consumer channel — web, social, email, calls, and chat.
          </p>
          <p class="leading-relaxed">
            Based in Morristown, New Jersey, with a team of around 80 people, PerformLine operates in a space where precision matters. When your customers are heavily regulated financial institutions, there's no room for "good enough."
          </p>
        </div>
      </div>
    </section>

    <!-- How It Started -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div class="bg-white rounded-3xl p-8 shadow-lg h-full">
              <div class="inline-flex items-center justify-center w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl mb-6">
                <Lightbulb class="h-7 w-7" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">How It Started</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                It started small. One engineer. A defined scope. A team on the other side that needed capacity but wasn't ready to hand over the keys.
              </p>
              <p class="text-gray-600 mb-6 leading-relaxed">
                PerformLine had a growing product and a lean engineering team. They needed developers who could ship — not just write code, but understand the codebase, adopt their workflows, and contribute from day one.
              </p>
              <ul class="space-y-3">
                <li v-for="(point, idx) in startPoints" :key="idx" class="flex items-start">
                  <ChevronRight class="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700">{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div class="bg-white rounded-3xl p-8 shadow-lg h-full">
              <div class="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-2xl mb-6">
                <TrendingUp class="h-7 w-7" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">How It Grew</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Within weeks, our engineer was shipping production code. Not because we threw someone exceptionally senior at the problem — but because that's how we work. Our engineers ramp fast because they care about the product, not just the ticket.
              </p>
              <p class="text-gray-600 mb-6 leading-relaxed">
                PerformLine needed more capacity. Not because we pitched them on it — because the work was good, the communication was clean, and the trust was real. So they asked for another engineer. Then another.
              </p>
              <ul class="space-y-3">
                <li v-for="(point, idx) in growthPoints" :key="idx" class="flex items-start">
                  <CheckCircle class="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700">{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial 1 -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 relative">
          <div class="absolute top-6 left-8 text-green-200 text-6xl font-serif leading-none">"</div>
          <blockquote class="relative z-10">
            <p class="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-6 pl-8">
              Acorn Globus is a gifted team with a rare combination of attention to detail and an overall sense for the big picture. They come up proactively with improvement ideas.
            </p>
            <footer class="pl-8">
              <p class="font-semibold text-gray-900">Bogdan Arsenie</p>
              <p class="text-green-600">CTO, PerformLine</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Disciplines Covered -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Five Disciplines, One Team</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Over two years, we grew from a single engineer to a cross-functional squad covering every layer of the stack.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(discipline, idx) in disciplines"
            :key="idx"
            class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-2xl mb-6">
              <component :is="discipline.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ discipline.title }}</h3>
            <p class="text-gray-600">{{ discipline.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What Made This Work -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What Made This Work</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Some things about this engagement are worth naming — because they're the reasons it lasted.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(factor, idx) in successFactors" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                  <component :is="factor.icon" class="h-5 w-5" />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">{{ factor.title }}</h3>
                <p class="text-gray-600">{{ factor.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial 2 -->
    <section class="py-16 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 relative">
          <div class="absolute top-6 left-8 text-green-200 text-6xl font-serif leading-none">"</div>
          <blockquote class="relative z-10">
            <p class="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-6 pl-8">
              Acorn Globus is my go-to team when I need a trusted partner to execute any front-end project. They are super attentive, communicate effectively, and accurately manage your expectations for their time and involvement.
            </p>
            <footer class="pl-8">
              <p class="font-semibold text-gray-900">Bogdan Arsenie</p>
              <p class="text-green-600">CTO, PerformLine</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Growth Timeline -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">The Growth Story</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Every addition followed the same pattern — earned through trust, not pitched through sales.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(phase, idx) in timeline" :key="idx" class="relative">
            <div v-if="idx < timeline.length - 1" class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-transparent z-0"></div>
            <div class="bg-white rounded-2xl p-6 shadow-lg relative z-10">
              <div class="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mb-4">
                <span class="font-bold">{{ idx + 1 }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ phase.title }}</h3>
              <p class="text-sm text-green-600 font-semibold mb-3">{{ phase.period }}</p>
              <p class="text-sm text-gray-600">{{ phase.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why This Story Matters -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Why This Story Matters</h2>
        <div class="prose prose-lg text-gray-600 max-w-none space-y-4">
          <p class="leading-relaxed">
            We talk a lot about partnership. But partnership isn't a tagline. It's a pattern that shows up over time.
          </p>
          <p class="leading-relaxed">
            PerformLine didn't sign a two-year contract on day one. They gave us one engineer's worth of trust, and we earned the rest. Every additional team member was a decision PerformLine made because the previous one worked out.
          </p>
          <p class="leading-relaxed">
            That's what real partnership looks like. Not a pitch deck. Not a proposal. Just consistent, reliable, high-quality work — month after month, until one day you look up and realize you've been building together for two years.
          </p>
        </div>
      </div>
    </section>

    <!-- Engagement Summary -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">The Engagement at a Glance</h2>
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="(item, idx) in engagementSummary" :key="idx" class="flex items-start">
              <CheckCircle class="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-sm text-gray-500">{{ item.label }}</p>
                <p class="font-semibold text-gray-900">{{ item.value }}</p>
              </div>
            </div>
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
          Let's Build Together
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          If you're looking for engineers who become part of your team — not names on an invoice — we'd love to hear what you're building. We start small. We prove we belong. And if the partnership is right, we stay.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Start a Conversation
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/portfolio"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-green-200"
          >
            View More Projects
            <ChevronRight class="h-5 w-5 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center space-x-3 mb-4 md:mb-0">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Code2 class="h-6 w-6 text-white" />
            </div>
            <div>
              <div class="text-xl font-bold text-gray-900">Acorn Globus</div>
              <div class="text-xs text-gray-500">Digital Solutions Partner</div>
            </div>
          </div>

          <div class="flex items-center space-x-6">
            <a href="mailto:business@acornglobus.com" class="text-gray-600 hover:text-purple-600 transition-colors">
              business@acornglobus.com
            </a>
            <span class="text-gray-400">|</span>
            <span class="text-gray-600">&copy; 2024 Acorn Globus</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import {
  ArrowRight, Users, TrendingUp,
  CheckCircle, ChevronRight, Zap,
  ArrowLeft, ExternalLink, Clock, Award,
  Building2, Lightbulb, Code2, GitBranch,
  Shield, Layers, Monitor, Database, Settings
} from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'PerformLine: From 1 Engineer to 8+ in 2 Years | AcornGlobus Case Study',
  ogTitle: 'PerformLine: From 1 Engineer to 8+ in 2 Years | AcornGlobus Case Study',
  description: 'How PerformLine grew from 1 AcornGlobus engineer to 8+ across full-stack, DevOps, data, and QA over 2 years — a resource augmentation partnership built on trust.',
  ogDescription: 'How PerformLine grew from 1 AcornGlobus engineer to 8+ across full-stack, DevOps, data, and QA over 2 years — a resource augmentation partnership built on trust.'
})

const heroStats = [
  { label: 'Client', value: 'PerformLine' },
  { label: 'Engagement', value: 'Resource Augmentation' },
  { label: 'Duration', value: '2+ Years' },
  { label: 'Status', value: 'Ongoing' }
]

const results = [
  { metric: '1 to 8+', label: 'Engineers', icon: Users },
  { metric: '2+', label: 'Years Together', icon: Clock },
  { metric: '5', label: 'Disciplines Covered', icon: Layers },
  { metric: 'Ongoing', label: 'Partnership Status', icon: TrendingUp }
]

const quickFacts = [
  { label: 'Client', value: 'PerformLine -- AI-powered compliance monitoring for regulated industries' },
  { label: 'Engagement', value: 'Resource Augmentation' },
  { label: 'Starting Point', value: '1 engineer' },
  { label: 'Today', value: '8+ engineers (full-stack, frontend, DevOps, data engineering, QA)' },
  { label: 'Duration', value: '2+ years and counting' },
  { label: 'Outcome', value: 'A partnership that grew because the work -- and the trust -- earned it' }
]

const startPoints = [
  'Growing product with a lean engineering team',
  'Needed developers who could ship from day one',
  'Same tools, same standups, same Slack channels',
  'The test: can this person actually become part of our team?'
]

const growthPoints = [
  'Full-stack development -- core platform features, API integrations',
  'Frontend engineering -- user-facing dashboards and monitoring interfaces',
  'DevOps -- infrastructure, CI/CD pipelines, deployment automation',
  'Data engineering -- data pipelines for compliance analytics',
  'Quality assurance -- test coverage across the platform'
]

const disciplines = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Core platform features and API integrations, building the backbone of PerformLine\'s compliance monitoring system.'
  },
  {
    icon: Monitor,
    title: 'Frontend Engineering',
    description: 'User-facing dashboards and monitoring interfaces that make complex compliance data accessible and actionable.'
  },
  {
    icon: Settings,
    title: 'DevOps',
    description: 'Infrastructure, CI/CD pipelines, and deployment automation -- keeping the platform reliable and deployable at speed.'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Data pipelines powering compliance analytics across web, social, email, calls, and chat channels.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Comprehensive test coverage across the platform. In compliance tech, there\'s no room for "good enough."'
  }
]

const successFactors = [
  {
    icon: Users,
    title: 'We Didn\'t Just Fill Seats',
    description: 'Every engineer was selected for fit, not just skill. Tech stack mattered, but so did communication style, work ethic, and the ability to own outcomes instead of waiting for instructions.'
  },
  {
    icon: TrendingUp,
    title: 'We Grew With Their Needs',
    description: 'The team didn\'t stay the same shape for two years. It evolved. When PerformLine needed DevOps expertise, we brought it. When they needed data engineering, we found the right person.'
  },
  {
    icon: Award,
    title: 'We Stayed',
    description: 'The same engineers. The same relationships. The same understanding of the codebase that only comes from being around long enough to have seen it evolve. At this point, it\'s their project too.'
  }
]

const timeline = [
  {
    title: 'The First Engineer',
    period: 'Day One',
    description: 'One engineer, defined scope. Same tools, same standups, same Slack channels as the PerformLine team.'
  },
  {
    title: 'Trust Earned',
    period: 'First Few Months',
    description: 'Shipping production code within weeks. PerformLine asked for a second engineer — not because we pitched it, but because the work earned it.'
  },
  {
    title: 'Team Expansion',
    period: 'Year One',
    description: 'Growing across disciplines — full-stack, frontend, DevOps, data engineering, and QA. Each addition following the same pattern of earned trust.'
  },
  {
    title: '8+ Engineers Strong',
    period: '2+ Years In',
    description: 'A full cross-functional squad, fully embedded. You can\'t tell who\'s PerformLine and who\'s AcornGlobus. Still growing.'
  }
]

const engagementSummary = [
  { label: 'Service Model', value: 'Resource Augmentation' },
  { label: 'Team Growth', value: '1 engineer to 8+ engineers over 2 years' },
  { label: 'Roles Covered', value: 'Full-stack, frontend, DevOps, data engineering, QA' },
  { label: 'Integration Model', value: 'Fully embedded -- same tools, standups, and workflows' },
  { label: 'Duration', value: '2+ years (ongoing)' },
  { label: 'Key Outcome', value: 'Organic team growth driven by trust, not contracts' }
]
</script>
