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
              Hire Rails Developers
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Hire Ruby on Rails Developers Who Respect the Framework
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Rails is about convention, speed, and getting things done. So are we. Whether you're
              building something new or maintaining a codebase that's been running for years, our
              Rails developers understand the framework's philosophy -- not just its syntax.
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
                <Clock class="h-8 w-8 text-blue-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">6+</div>
                <p class="text-sm text-gray-600">Years in Business</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <TrendingUp class="h-8 w-8 text-green-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">80%+</div>
                <p class="text-sm text-gray-600">Client Retention</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Users class="h-8 w-8 text-indigo-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">20+</div>
                <p class="text-sm text-gray-600">Engineers</p>
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

    <!-- Why AcornGlobus Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Rails Developers Who Ship, Not Just Code</h2>
          <p class="text-lg text-gray-600">
            The Rails community values craftsmanship, convention, and shipping products that work. We share those values.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(card, idx) in whyCards" :key="idx" class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <component :is="card.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ card.title }}</h3>
            <p class="text-gray-600">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Expertise Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What Our Rails Developers Build</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <div class="text-center mt-8">
          <NuxtLink
            to="/technologies/ruby-on-rails"
            class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            See our full Ruby on Rails capabilities
            <ArrowRight class="h-4 w-4 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Is Rails Still Worth It Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Is Ruby on Rails Still Worth It in 2026?</h2>
        <p class="text-lg text-gray-600 mb-8">
          We get asked this a lot. Here's our honest take.
        </p>

        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
          <p class="text-lg text-gray-800 font-medium mb-4">
            Yes, Rails is alive and well.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Rails 7+ with Hotwire has answered the "modern frontend" question. The framework is
            actively maintained, the community is engaged, and Rails continues to be one of the
            most productive frameworks for building web applications.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle class="h-6 w-6 text-green-600 mr-3" />
              Rails shines when
            </h3>
            <ul class="space-y-4">
              <li v-for="(item, idx) in railsGoodFit" :key="idx">
                <p class="font-semibold text-gray-900 text-sm">{{ item.title }}</p>
                <p class="text-gray-600 text-sm">{{ item.description }}</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle class="h-6 w-6 text-amber-500 mr-3" />
              Consider alternatives when
            </h3>
            <ul class="space-y-4">
              <li v-for="(item, idx) in railsAlternatives" :key="idx">
                <p class="font-semibold text-gray-900 text-sm">{{ item.title }}</p>
                <p class="text-gray-600 text-sm">{{ item.description }}</p>
              </li>
            </ul>
          </div>
        </div>

        <p class="text-gray-600 mt-8 italic">
          We'll recommend Rails when it's the right tool. And if your project genuinely needs
          something else, we'll tell you that too.
        </p>
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
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Rails Projects We've Delivered</h2>

        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Partnership Track Record</h3>
          <div class="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>
              We've built long-term engineering partnerships across multiple technology stacks.
              PerformLine started with one engineer and grew to eight over two years -- full-stack,
              DevOps, data engineering, and QA. Eitoss started as an MVP we shipped in three months;
              they raised funding, and we're still building together.
            </p>
            <p>
              These stories demonstrate something more important: we stay. We grow with your product.
              Whether the stack is Rails, React, or Node.js, the partnership model is the same.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-4 mt-8">
            <div class="bg-white/80 rounded-xl p-4 text-center">
              <div class="text-lg font-bold text-gray-900">1 to 8+</div>
              <p class="text-sm text-gray-600">PerformLine (2 years)</p>
            </div>
            <div class="bg-white/80 rounded-xl p-4 text-center">
              <div class="text-lg font-bold text-gray-900">3 months</div>
              <p class="text-sm text-gray-600">Eitoss MVP to funding</p>
            </div>
            <div class="bg-white/80 rounded-xl p-4 text-center">
              <div class="text-lg font-bold text-gray-900">80%+</div>
              <p class="text-sm text-gray-600">Client retention</p>
            </div>
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
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Ready to Build With Rails?</h2>
        <p class="text-xl text-gray-600 mb-4">
          Whether you're starting a new Rails project or modernizing a codebase that's been
          running for years, we'd like to hear about it.
        </p>
        <p class="text-lg text-gray-600 mb-8">
          Start with a conversation. If we're the right fit, your Rails developer begins with a two-week trial.
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
        text="Building with Rails? We'd like to hear about your project."
        cta-label="Book a 15-minute call"
        cta-link="/contact"
        dismiss-key="smart_cta_hire_rails"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import {
  ArrowRight, Users, TrendingUp, Clock, Shield, Code, Heart,
  CheckCircle, ChevronDown, Layers, Zap, Target, UserCheck,
  AlertCircle, Wrench
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

const whyCards = [
  {
    icon: UserCheck,
    title: 'Named Engineers, Not Rotating Contractors',
    description: "You'll know your Rails developer by name. They'll learn your domain, your conventions, and your codebase's history. When someone understands why a migration was structured a certain way, they make better decisions about the next one."
  },
  {
    icon: Code,
    title: 'Deep Rails Knowledge',
    description: "ActiveRecord patterns, ActionCable for real-time features, Hotwire and Turbo for modern frontends, Stimulus for JavaScript sprinkles. Our Rails developers know the framework's opinions and work with them, not against them."
  },
  {
    icon: Wrench,
    title: 'Legacy Rails Expertise',
    description: "Running a Rails 5 or 6 application that needs upgrading? We've handled Rails upgrade paths -- navigating deprecations, updating gems, and modernizing codebases without breaking what works."
  },
  {
    icon: Layers,
    title: 'Full-Stack Rails Thinking',
    description: "Our developers understand the \"Rails way\" -- models, views, controllers, background jobs, mailers, tests. Not just backend API work, but the full-stack productivity that makes Rails powerful."
  },
  {
    icon: Heart,
    title: 'Partnership Model',
    description: "PerformLine started with one of our engineers and grew to eight over two years. We don't disappear after delivery. We stay and grow with your product."
  }
]

const expertiseGroups = [
  {
    title: 'Web Applications',
    items: [
      'Rails 7+ with Hotwire, Turbo, and Stimulus',
      'Full-stack Rails with server-rendered views',
      'Admin panels and internal tools'
    ]
  },
  {
    title: 'APIs',
    items: [
      'REST APIs with Rails API mode',
      'GraphQL APIs with graphql-ruby',
      'API versioning and documentation'
    ]
  },
  {
    title: 'Background Processing',
    items: [
      'Sidekiq and ActiveJob',
      'Scheduled tasks and cron workflows',
      'Queue management and monitoring'
    ]
  },
  {
    title: 'Databases',
    items: [
      'PostgreSQL with ActiveRecord',
      'Complex migrations and schema design',
      'Query optimization and N+1 detection'
    ]
  },
  {
    title: 'Auth and Authorization',
    items: [
      'Devise, OmniAuth',
      'Pundit and CanCanCan',
      'Multi-tenancy patterns'
    ]
  },
  {
    title: 'Testing',
    items: [
      'RSpec and Minitest',
      'Capybara for integration tests',
      'FactoryBot for test data'
    ]
  },
  {
    title: 'Deployment',
    items: [
      'Heroku, AWS, Docker',
      'Kamal for container deployments',
      'Capistrano for traditional deploys'
    ]
  },
  {
    title: 'Legacy Modernization',
    items: [
      'Rails 5/6 to Rails 7+ upgrade paths',
      'Gem updates and dependency management',
      'Performance profiling and optimization'
    ]
  }
]

const railsGoodFit = [
  {
    title: "You're building a CRUD-heavy web application.",
    description: "Admin panels, content management, e-commerce backends, SaaS platforms. Rails' conventions make these fast to build and easy to maintain."
  },
  {
    title: 'Rapid development matters.',
    description: "Rails' \"convention over configuration\" philosophy means less time on boilerplate and more time on product features."
  },
  {
    title: 'You value developer happiness.',
    description: 'The Rails community cares about developer experience. Readable code, sensible defaults, and a framework that gets out of your way.'
  },
  {
    title: 'You have a legacy Rails codebase.',
    description: 'If your product runs on Rails, investing in Rails expertise is almost always the right move. Migration to another framework is rarely worth the cost and risk.'
  }
]

const railsAlternatives = [
  {
    title: 'Real-time is the core feature.',
    description: 'Heavy WebSocket workloads at scale may suit Node.js or Elixir better, though ActionCable handles many real-time use cases well.'
  },
  {
    title: 'You need ML/data processing backends.',
    description: "Python's ecosystem for machine learning is unmatched."
  },
  {
    title: 'Extreme concurrency.',
    description: 'Go or Rust may be better fits for systems handling millions of concurrent connections.'
  }
]

const steps = [
  {
    title: 'Discovery Call',
    description: "We learn about your Rails project -- new build, legacy modernization, or additional capacity.",
    icon: Target
  },
  {
    title: 'Engineer Matching',
    description: "We propose Rails developers with relevant experience. Upgrading from Rails 5? You'll meet someone who's done it.",
    icon: Users
  },
  {
    title: 'Two-Week Trial',
    description: 'Your developer joins your team. Same tools, same standups, same pull requests. Real work on your codebase.',
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
    bestFor: 'Best for: Ongoing Rails product development',
    details: 'Full integration with your team. Your Rails developer works exclusively on your project.'
  },
  {
    name: 'Part-Time',
    bestFor: 'Best for: Maintenance, bug fixes, specific features',
    details: '20 hours/week. Good for teams that need steady Rails capacity without a full seat.'
  },
  {
    name: 'Project-Based',
    bestFor: 'Best for: Rails upgrades, new builds, defined scope',
    details: 'Fixed scope and timeline. Ideal for legacy modernization or greenfield Rails applications.'
  },
  {
    name: 'Legacy Modernization',
    bestFor: 'Best for: Rails 5/6 to 7+ upgrades',
    details: 'Dedicated engagement focused on upgrading your Rails application safely.'
  }
]

const faqs = [
  {
    question: 'How much does it cost to hire a Ruby on Rails developer in India?',
    answer: "Rates depend on seniority and engagement type. Senior Rails developers are priced competitively for dedicated engagements. We'll share specifics on a discovery call."
  },
  {
    question: 'Is Ruby on Rails still a good choice for new projects in 2026?',
    answer: "For many use cases, yes. Rails 7+ with Hotwire is a mature, productive framework. It's especially strong for CRUD-heavy web applications, admin tools, and SaaS platforms. We'll give you an honest recommendation based on your specific project."
  },
  {
    question: 'Can your Rails developers upgrade legacy Rails 5/6 applications?',
    answer: 'Yes. We have experience navigating Rails upgrade paths -- handling deprecations, updating dependencies, and testing thoroughly at each step. Legacy modernization is one of our engagement types.'
  },
  {
    question: 'Do your developers work with Hotwire, Turbo, and Stimulus?',
    answer: 'Yes. Hotwire and Turbo are part of modern Rails development, and our developers use them for building reactive interfaces without heavy JavaScript frameworks.'
  },
  {
    question: 'How quickly can Rails developers start?',
    answer: 'Most engagements start within one to two weeks. We match based on availability and relevant Rails experience.'
  },
  {
    question: 'Do your Rails developers also handle frontend work?',
    answer: 'Our Rails developers are comfortable with full-stack Rails -- views, Hotwire, Stimulus, and CSS. For dedicated frontend work with React or Vue, we can also match you with frontend-specific engineers.'
  },
  {
    question: 'Ruby on Rails vs Node.js -- which should I choose?',
    answer: 'Different tools for different jobs. Rails excels at rapid development, convention-driven applications, and full-stack web apps. Node.js is stronger for real-time features and JavaScript-stack consistency. We work with both and can advise honestly.'
  },
  {
    question: 'Can you help migrate from Rails to another framework?',
    answer: "We can, but we'll always ask \"should you?\" first. Migration is expensive and risky. Often, upgrading your existing Rails application is faster, cheaper, and less disruptive. We'll walk through the trade-offs with you before recommending anything."
  }
]

// SEO Meta
useSeoMeta({
  title: 'Hire Ruby on Rails Developers India | AcornGlobus',
  description: 'Hire senior Ruby on Rails developers who respect the framework. Legacy modernization, new builds, API development. 20+ person team, 2-week trial. Talk to us.',
  keywords: 'hire ruby on rails developers, hire rails developers India, ruby on rails developer India, rails development team, ruby developer India',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'Hire Ruby on Rails Developers India | AcornGlobus',
  ogDescription: 'Hire senior Ruby on Rails developers who respect the framework. Legacy modernization, new builds, API development.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/hire-rails-developer',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Hire Ruby on Rails Developers India | AcornGlobus',
  twitterDescription: 'Hire senior Ruby on Rails developers who respect the framework.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://acornglobus.com/hire-rails-developer' },
  ],
})

useServiceSchema({
  name: 'Hire Ruby on Rails Developers',
  description: 'Hire senior Ruby on Rails developers who respect the framework. Legacy modernization, new builds, API development. 20+ person team, 2-week embedded trial.',
  url: '/hire-rails-developer',
})

useFaqSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))

useBreadcrumbSchema([
  { name: 'Hire Rails Developers', path: '/hire-rails-developer' },
])
</script>
