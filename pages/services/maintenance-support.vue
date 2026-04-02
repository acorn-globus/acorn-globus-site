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

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We built it. We keep it running. And we make it better.
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Launching is just the beginning. We stay with your product - monitoring, fixing,
              updating, and improving it with the same team that built it in the first place.
            </p>

            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Let's talk about your product
                <ArrowRight class="h-5 w-5 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Users class="h-8 w-8 text-green-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">20+</div>
                <p class="text-sm text-gray-600">Engineers</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <TrendingUp class="h-8 w-8 text-green-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">80%+</div>
                <p class="text-sm text-gray-600">Client Retention</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Clock class="h-8 w-8 text-green-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">7+</div>
                <p class="text-sm text-gray-600">Years in Business</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Heart class="h-8 w-8 text-green-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">Same</div>
                <p class="text-sm text-gray-600">Team That Built It</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pain Point Section -->
    <section class="py-20 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Your product is live. Now what?</h2>
        <div class="text-lg text-gray-600 space-y-4 leading-relaxed">
          <p>
            The launch went well. Users are coming in. But things break. Dependencies get outdated.
            Security patches pile up. Performance degrades. And the team that built it? They moved
            on to the next project.
          </p>
          <p>
            You need someone who knows your codebase, who cares about keeping it healthy, and who
            treats maintenance as more than just keeping the lights on.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Approach Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Same team. Same care. Continuing the journey.</h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Most of our maintenance relationships started as MVP or full project delivery. The
            engineers who maintain your product are the same ones who built it. They know every
            line of code because they wrote it - and they care about it because they've been
            invested in it from the start.
          </p>
          <p class="text-lg text-gray-600 mt-4 leading-relaxed">Here's what makes our maintenance different:</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div v-for="(item, idx) in approach" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mb-4">
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
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">The natural next step.</h2>
          <div class="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>
              This service exists because our clients asked for it. After we built their products,
              they didn't want to hand maintenance to a team that had never seen the code.
            </p>
            <p>
              PerformLine's engagement grew from 1 engineer to 8+ over 2 years. Eitoss is still
              with us more than 2 years after we shipped their MVP. These aren't maintenance
              contracts - they're ongoing partnerships where we keep building, keep improving,
              and keep caring about the product.
            </p>
            <p>
              When you've invested in building something right, you want the people who built it
              to keep it running right.
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

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, idx) in steps" :key="idx" class="relative">
            <div v-if="idx < steps.length - 1" class="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-transparent z-0"></div>
            <div class="bg-white rounded-2xl p-6 shadow-lg relative z-10 hover:shadow-xl transition-shadow">
              <div class="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mb-4">
                <component :is="step.icon" class="h-5 w-5" />
              </div>
              <div class="text-sm text-green-600 font-semibold mb-2">Step {{ idx + 1 }}</div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-sm text-gray-600">{{ step.description }}</p>
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
            <CheckCircle class="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span class="text-gray-700">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SLA Tiers -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Support plans that fit how you work</h2>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gradient-to-r from-green-50 to-emerald-50">
                  <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900"></th>
                  <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">Standard</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">Priority</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">Emergency</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr>
                  <td class="px-6 py-4 text-sm font-medium text-gray-900">Response time</td>
                  <td class="px-6 py-4 text-sm text-gray-600 text-center">24 hours</td>
                  <td class="px-6 py-4 text-sm text-gray-600 text-center">4 hours</td>
                  <td class="px-6 py-4 text-sm text-gray-600 text-center">1 hour (critical)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm font-medium text-gray-900">Critical resolution</td>
                  <td class="px-6 py-4 text-sm text-gray-600 text-center">72 hours</td>
                  <td class="px-6 py-4 text-sm text-gray-600 text-center">24 hours</td>
                  <td class="px-6 py-4 text-sm text-gray-600 text-center">Same day</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm font-medium text-gray-900">Best for</td>
                  <td class="px-6 py-4 text-sm text-gray-600 text-center">Stable products with low urgency</td>
                  <td class="px-6 py-4 text-sm text-gray-600 text-center">Active products with regular users</td>
                  <td class="px-6 py-4 text-sm text-gray-600 text-center">Mission-critical systems</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- What Goes Into Pricing -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What goes into pricing</h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            We'd rather be honest about what drives cost than give you a number that doesn't mean anything yet.
          </p>
          <p class="text-lg text-gray-600 mt-4 leading-relaxed">
            Maintenance retainers typically range from <span class="font-semibold text-gray-900">$1,500 to $5,000+ per month</span>, depending on four things:
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div v-for="(factor, idx) in pricingFactors" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mb-4">
              <component :is="factor.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ factor.title }}</h3>
            <p class="text-gray-600">{{ factor.description }}</p>
          </div>
        </div>

        <div class="max-w-3xl mx-auto mt-12">
          <p class="text-lg text-gray-600 leading-relaxed">
            Every maintenance plan starts with a conversation about your product - what it does,
            how it's used, and what kind of care it needs. We'll give you a specific number once
            we understand the scope. No surprises.
          </p>
        </div>
      </div>
    </section>

    <!-- Engagement Details -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">The details</h2>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div class="divide-y divide-gray-100">
            <div v-for="(detail, idx) in engagementDetails" :key="idx" class="flex items-center px-6 py-4">
              <div class="w-1/3 font-semibold text-gray-900">{{ detail.label }}</div>
              <div class="w-2/3 text-gray-600">{{ detail.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who This Is For -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">This is for you if...</h2>
        <div class="space-y-6">
          <div v-for="(audience, idx) in audiences" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ audience.title }}</h3>
            <p class="text-gray-600">{{ audience.description }}</p>
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
          Your product deserves the same care after launch as it got during build.
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Tell us about your product - what it does, who built it, and what kind of support you need.
          We'll put together a maintenance plan that keeps it healthy and improving, not just alive.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Let's talk about your product
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-green-200"
          >
            Already our client? Let's discuss ongoing support.
            <ChevronRight class="h-5 w-5 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <ClientOnly>
      <LeadCaptureSmartCta
        text="Need a team that keeps your product healthy and improving? Let's talk."
        cta-label="Book a 15-minute call"
        cta-link="/contact"
        dismiss-key="smart_cta_maintenance"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import {
  ArrowRight, ArrowLeft, Shield, Clock, Users, TrendingUp,
  CheckCircle, ChevronRight, Heart, Activity, RefreshCw, Eye,
  Search, Settings, BarChart3, Layers, UserCheck, DollarSign
} from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Maintenance & Support | We Built It, We Keep It Running | AcornGlobus',
  description: 'Ongoing maintenance from the team that knows your product inside out. Bug fixes, security updates, performance monitoring, and improvements. Same engineers, same relationship.',
  keywords: 'software maintenance, application support, bug fixes, security updates, performance monitoring, AcornGlobus',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'Maintenance & Support | We Built It, We Keep It Running | AcornGlobus',
  ogDescription: 'Ongoing maintenance from the team that knows your product inside out. Bug fixes, security updates, performance monitoring.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/services/maintenance-support',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Maintenance & Support | We Built It, We Keep It Running',
  twitterDescription: 'Ongoing maintenance from the team that knows your product inside out. Same engineers, same relationship.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useServiceSchema({
  name: 'Maintenance & Support',
  description: 'Ongoing maintenance from the team that knows your product inside out. Bug fixes, security updates, performance monitoring, and improvements.',
  url: '/services/maintenance-support',
})

useBreadcrumbSchema([
  { name: 'Services', path: '/services' },
  { name: 'Maintenance & Support', path: '/services/maintenance-support' },
])

const approach = [
  {
    icon: Users,
    title: 'Same engineers, same relationship.',
    description: 'When possible, the team that built it maintains it. No re-learning your codebase with strangers. No lost context.'
  },
  {
    icon: Activity,
    title: 'Proactive, not just reactive.',
    description: "We monitor and fix before you notice. We treat your product like our own - because that's how we've always worked."
  },
  {
    icon: RefreshCw,
    title: 'Improvement mindset.',
    description: "We don't just keep the lights on. Quarterly improvement sprints let us make your product better over time, not just stable."
  },
  {
    icon: Eye,
    title: 'Transparent hours.',
    description: 'You see exactly what we spent time on each month. Monthly health reports. No mystery invoices.'
  },
  {
    icon: Shield,
    title: 'No lock-in.',
    description: "Full documentation means you can leave anytime. But most clients don't - because the partnership works."
  }
]

const steps = [
  {
    title: 'Onboarding (1-2 weeks)',
    description: 'We audit the codebase, set up monitoring, document the system, and establish SLAs. If we built it, this step is already half done.',
    icon: Search
  },
  {
    title: 'Ongoing support',
    description: 'Monthly retainer with defined SLAs for response and resolution. You know exactly what to expect.',
    icon: Settings
  },
  {
    title: 'Improvement sprints (optional)',
    description: 'Quarterly sprints for feature additions, refactoring, or performance improvements. Your product keeps getting better.',
    icon: RefreshCw
  },
  {
    title: 'Monthly reporting',
    description: 'Uptime, issues resolved, improvements made. Full transparency on where your retainer hours go.',
    icon: BarChart3
  }
]

const included = [
  'Bug fixing and incident response',
  'Security patching and dependency updates',
  'Performance monitoring and optimization',
  'Database maintenance',
  'Infrastructure monitoring (if we manage your cloud)',
  'Minor feature additions within retainer hours',
  'Monthly health report with full hour breakdown'
]

const pricingFactors = [
  {
    icon: Layers,
    title: 'Project complexity',
    description: 'A stable app with a small user base needs less than a growing platform handling payments and integrations. We size the retainer to what your product actually needs.'
  },
  {
    icon: UserCheck,
    title: 'Engineer experience',
    description: "Senior engineers cost more per hour - but they resolve things faster and catch problems earlier. We'll recommend the right fit for your product's complexity."
  },
  {
    icon: Clock,
    title: 'Hours commitment',
    description: "More hours per month means a lower effective rate. We'll help you figure out the right number based on your product's age, user base, and pace of change."
  },
  {
    icon: Users,
    title: 'Availability model',
    description: 'Dedicated engineers (assigned only to your product) vs. shared support (part of a rotation). Dedicated costs more but gives you faster response and deeper context.'
  }
]

const engagementDetails = [
  { label: 'Model', value: 'Monthly retainer, scoped to your product' },
  { label: 'Minimum commitment', value: '3 months - enough time to learn your product and prove the value' },
  { label: 'Team', value: '1-2 dedicated engineers who know your codebase' },
  { label: 'Scaling', value: 'Need more? Add improvement sprints or expand the team as your product grows' }
]

const audiences = [
  {
    title: 'We built your product',
    description: 'And you want the same team to maintain it. This is the natural continuation of our MVP or full project delivery work.'
  },
  {
    title: 'You acquired a product',
    description: "And need a team to take ownership of a codebase they didn't write."
  },
  {
    title: 'Your original dev team left',
    description: 'And you need engineers who can learn the codebase and keep it healthy.'
  },
  {
    title: 'You want to keep a product alive',
    description: 'Without hiring a full-time in-house team.'
  }
]
</script>
