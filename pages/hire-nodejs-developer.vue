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
              Hire Node.js Developers
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Hire Node.js Developers Who Think in Systems, Not Just Code
            </h1>

            <p class="text-xl text-gray-600 mb-4 leading-relaxed">
              Your backend needs more than someone who knows Express.js. It needs engineers who
              understand API design, database architecture, caching strategies, and how systems
              behave under load.
            </p>

            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              We're a 20+ person product engineering team. Our Node.js developers build backends
              that serve real products -- not tutorial projects. They think about the system your
              API lives in, not just the endpoints.
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
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Backend Engineers, Not Just Node.js Coders</h2>
          <p class="text-lg text-gray-600">
            Writing JavaScript on the server is the easy part. Building backends that scale, stay
            maintainable, and serve your product well -- that takes engineering judgment.
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
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What Our Node.js Developers Build</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>

    <!-- When to Choose Node.js Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">When to Choose Node.js for Your Backend</h2>
        <p class="text-lg text-gray-600 mb-8">
          We don't push Node.js on every project. Here's when it genuinely shines -- and when
          you might want to consider alternatives.
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle class="h-6 w-6 text-green-600 mr-3" />
              Node.js is a strong fit when
            </h3>
            <ul class="space-y-4">
              <li v-for="(item, idx) in nodeGoodFit" :key="idx">
                <p class="font-semibold text-gray-900 text-sm">{{ item.title }}</p>
                <p class="text-gray-600 text-sm">{{ item.description }}</p>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle class="h-6 w-6 text-amber-500 mr-3" />
              Consider alternatives when
            </h3>
            <ul class="space-y-4">
              <li v-for="(item, idx) in nodeAlternatives" :key="idx">
                <p class="font-semibold text-gray-900 text-sm">{{ item.title }}</p>
                <p class="text-gray-600 text-sm">{{ item.description }}</p>
              </li>
            </ul>
          </div>
        </div>

        <p class="text-gray-600 mt-8 italic">
          This isn't a sales pitch. It's what we'd tell you on a discovery call. We'd rather
          recommend the right tool than sell you Node.js hours.
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
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Node.js Projects We've Delivered</h2>

        <div class="space-y-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">PerformLine</h3>
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
              What started as one engineer grew to eight over two years -- full-stack, DevOps, data
              engineering, and QA. Our Node.js developers have been part of building and scaling
              PerformLine's backend services, working alongside their existing team in the same
              tools and workflows.
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div class="bg-white/80 rounded-xl p-4 text-center">
                <div class="text-lg font-bold text-gray-900">1</div>
                <p class="text-sm text-gray-600">Started with</p>
              </div>
              <div class="bg-white/80 rounded-xl p-4 text-center">
                <div class="text-lg font-bold text-gray-900">8+</div>
                <p class="text-sm text-gray-600">Grew to</p>
              </div>
              <div class="bg-white/80 rounded-xl p-4 text-center">
                <div class="text-lg font-bold text-gray-900">2+</div>
                <p class="text-sm text-gray-600">Years ongoing</p>
              </div>
              <div class="bg-white/80 rounded-xl p-4 text-center">
                <NuxtLink to="/services/resource-augmentation" class="text-sm text-blue-600 font-medium hover:text-blue-700">
                  Resource Augmentation
                </NuxtLink>
              </div>
            </div>
            <div class="mt-6">
              <NuxtLink
                to="/case-studies/performline"
                class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Read the full story
                <ArrowRight class="h-4 w-4 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Eitoss</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              We shipped the MVP in three months. They raised funding. Two years later, we're still
              building together. The backend architecture we set up from day one has scaled with the
              product -- because we designed it to.
            </p>
            <div class="flex flex-wrap gap-6 text-sm mb-4">
              <span><span class="font-semibold text-gray-900">MVP:</span> <span class="text-gray-600">Shipped in 3 months</span></span>
              <span><span class="font-semibold text-gray-900">Outcome:</span> <span class="text-gray-600">Raised funding</span></span>
              <span><span class="font-semibold text-gray-900">Duration:</span> <span class="text-gray-600">2+ years ongoing</span></span>
            </div>
            <NuxtLink
              to="/case-studies/eitoss"
              class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Read the full story
              <ArrowRight class="h-4 w-4 ml-2" />
            </NuxtLink>
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
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Ready to Scale Your Backend Team?</h2>
        <p class="text-xl text-gray-600 mb-4">
          Tell us about your backend challenges. Whether you need API development, real-time features,
          or additional Node.js capacity, we'll match you with engineers who've built systems like yours.
        </p>
        <p class="text-lg text-gray-600 mb-8">
          Start with a two-week trial. No risk, no lock-in.
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
        text="Need backend engineers who think in systems? Let's talk."
        cta-label="Book a 15-minute call"
        cta-link="/contact"
        dismiss-key="smart_cta_hire_node"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import {
  ArrowRight, Users, TrendingUp, Clock, Shield, Code, Heart,
  CheckCircle, ChevronDown, Layers, Globe, Zap, Target, UserCheck,
  AlertCircle, Database, Server
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
    icon: Layers,
    title: 'System Design Thinking',
    description: "Our Node.js developers think beyond the endpoint. API architecture, database modeling, caching layers, message queues, rate limiting -- the decisions that determine whether your backend holds up at scale."
  },
  {
    icon: UserCheck,
    title: 'Named Engineers on Your Team',
    description: "You'll meet the person who'll build your backend. They'll join your standups, review your pull requests, and understand your domain. Not an anonymous contractor from a pool."
  },
  {
    icon: Globe,
    title: 'Full-Stack Context',
    description: 'Our Node.js developers understand the frontends they serve. Because we build complete products, our backend engineers think about API contracts, response shapes, and how the data flows to the UI.'
  },
  {
    icon: Heart,
    title: 'Honest Technology Advice',
    description: "We're stack-agnostic. We'll recommend Node.js when it's the right fit and tell you honestly when Python or Go might serve you better. We'd rather lose a Node.js engagement than build you the wrong backend."
  },
  {
    icon: Zap,
    title: 'Productive From Week One',
    description: "Our engineers ramp on your codebase in one to two weeks. We track time-to-first-PR because you're hiring for output, not presence."
  }
]

const expertiseGroups = [
  {
    title: 'API Development',
    items: [
      'RESTful APIs with Express.js, Fastify, or NestJS',
      'GraphQL APIs with Apollo Server or Mercurius',
      'API versioning, documentation, and contract testing'
    ]
  },
  {
    title: 'Real-Time Applications',
    items: [
      'WebSocket servers with Socket.io',
      'Live notifications, chat, collaborative editing',
      'Event-driven architectures'
    ]
  },
  {
    title: 'Microservices',
    items: [
      'Service decomposition and inter-service communication',
      'Message queues with RabbitMQ, Bull/BullMQ',
      'gRPC for internal service communication'
    ]
  },
  {
    title: 'Databases and Data',
    items: [
      'PostgreSQL, MongoDB, Redis',
      'Database schema design and migrations',
      'Caching strategies and query optimization'
    ]
  },
  {
    title: 'Infrastructure',
    items: [
      'Docker containerization',
      'CI/CD pipelines (GitHub Actions, GitLab CI)',
      'AWS, GCP, or Azure deployment',
      'Monitoring and logging (Datadog, ELK, Prometheus)'
    ]
  },
  {
    title: 'Testing',
    items: [
      'Jest for unit and integration tests',
      'Supertest for API testing',
      'Load testing and performance profiling'
    ]
  }
]

const nodeGoodFit = [
  {
    title: 'Your stack is JavaScript-heavy.',
    description: 'React or Vue frontend, Node.js backend. One language across the stack means faster context switching and shared code.'
  },
  {
    title: 'You need real-time features.',
    description: "Chat, live notifications, collaborative editing, streaming. Node's event-driven architecture handles concurrent connections well."
  },
  {
    title: 'You\'re building APIs that serve multiple clients.',
    description: 'Mobile app, web app, third-party integrations -- Node.js with Express or NestJS is a proven choice for API-first architectures.'
  },
  {
    title: 'I/O-intensive workloads.',
    description: "Applications that spend most of their time waiting on databases, external APIs, or file systems. Node's non-blocking I/O model is built for this."
  }
]

const nodeAlternatives = [
  {
    title: 'CPU-intensive computation.',
    description: 'Heavy data processing, ML pipelines, or complex calculations -- Python or Go will serve you better.'
  },
  {
    title: 'Extreme concurrency requirements.',
    description: "If you need millions of concurrent connections, Go's goroutines or Rust's async model may be more efficient."
  },
  {
    title: 'Strong typing is critical from day one.',
    description: 'While TypeScript helps, languages like Java or C# have more mature type systems for very large codebases.'
  }
]

const steps = [
  {
    title: 'Discovery Call',
    description: "We learn about your backend needs, your current architecture, and what you're building.",
    icon: Target
  },
  {
    title: 'Engineer Matching',
    description: 'We propose Node.js developers with relevant backend experience matched to your specific needs.',
    icon: Users
  },
  {
    title: 'Two-Week Trial',
    description: 'Your developer joins your team. Same tools, same standups, same code reviews. Real production work.',
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
    bestFor: 'Best for: Ongoing backend development',
    details: 'Your Node.js developer works exclusively on your project. Full team integration.'
  },
  {
    name: 'Part-Time',
    bestFor: 'Best for: API development or specific backend features',
    details: '20 hours/week. Good for defined backend work that doesn\'t need a full seat.'
  },
  {
    name: 'Project-Based',
    bestFor: 'Best for: New API builds or backend rewrites',
    details: 'Fixed scope and timeline. Ideal for greenfield Node.js services or migrations.'
  }
]

const faqs = [
  {
    question: 'How much does it cost to hire a Node.js developer in India?',
    answer: "Rates depend on seniority and engagement model. Senior Node.js developers are priced competitively for dedicated engagements. We'll discuss specifics on a discovery call once we understand your backend needs."
  },
  {
    question: 'How quickly can Node.js developers start on my project?',
    answer: 'Most engagements start within one to two weeks. We match engineers based on availability and relevant backend experience, then begin with a two-week trial.'
  },
  {
    question: 'Do your Node.js developers work with databases like PostgreSQL and MongoDB?',
    answer: "Yes. Our backend engineers work with PostgreSQL, MongoDB, Redis, and other databases daily. Database design, migrations, query optimization, and caching strategies are part of the job -- not an add-on."
  },
  {
    question: 'Node.js vs Python -- which is better for my backend?',
    answer: 'It depends on your use case. Node.js excels at real-time features, I/O-heavy workloads, and JavaScript-stack consistency. Python is stronger for data processing, ML, and scientific computing. We work with both and can recommend honestly based on your project.'
  },
  {
    question: 'Can I hire Node.js developers for API-only projects?',
    answer: 'Absolutely. Many of our engagements are API-focused -- building RESTful or GraphQL APIs that serve web and mobile clients. We can scope a project-based engagement around your API requirements.'
  },
  {
    question: 'Do your developers work with NestJS?',
    answer: "Yes. NestJS is one of our go-to frameworks for structured Node.js applications, especially for microservices architectures. We also work with Express, Fastify, and other Node.js frameworks depending on your project's needs."
  },
  {
    question: 'How do you ensure backend code quality and security?',
    answer: "Code reviews on every pull request, automated testing (unit, integration, and API tests), CI/CD pipelines, and security best practices (input validation, authentication, rate limiting, dependency auditing). These aren't extras -- they're how we work."
  },
  {
    question: 'Can your Node.js developers handle DevOps and deployment?',
    answer: 'Many of our backend engineers are comfortable with Docker, CI/CD pipelines, and cloud deployment. For dedicated DevOps work, we can also match you with engineers who specialize in infrastructure.'
  }
]

// SEO Meta
useSeoMeta({
  title: 'Hire Node.js Developers in India | AcornGlobus',
  description: 'Hire senior Node.js developers who think in systems, not just code. API design, real-time apps, microservices. 20+ person team, 2-week trial. Book a call.',
  keywords: 'hire node.js developers, hire nodejs developers India, node developer India, backend developer India, node.js development team',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'Hire Node.js Developers in India | AcornGlobus',
  ogDescription: 'Hire senior Node.js developers who think in systems, not just code. API design, real-time apps, microservices.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/hire-nodejs-developer',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Hire Node.js Developers in India | AcornGlobus',
  twitterDescription: 'Hire senior Node.js developers who think in systems, not just code.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://acornglobus.com/hire-nodejs-developer' },
  ],
})

useServiceSchema({
  name: 'Hire Node.js Developers',
  description: 'Hire senior Node.js developers who think in systems. API design, real-time applications, microservices architecture. 20+ person team, 2-week embedded trial.',
  url: '/hire-nodejs-developer',
})

useFaqSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))

useBreadcrumbSchema([
  { name: 'Hire Node.js Developers', path: '/hire-nodejs-developer' },
])
</script>
