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
              Hire React Developers
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Hire React Developers Who Stay
            </h1>

            <p class="text-xl text-gray-600 mb-4 leading-relaxed">
              You're not hiring a random developer from a pool. You're getting a team member who
              learns your codebase, joins your standups, and stays for the long run.
            </p>

            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              We're a 20+ person product engineering team. The React developers you meet are the
              ones who'll build your product. No bench. No rotating contractors. Just engineers
              who care about your code as much as you do.
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
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Teams Choose Us Over Marketplaces</h2>
          <p class="text-lg text-gray-600">Marketplaces give you a resume. We give you a teammate.</p>
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
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What Our React Developers Build</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our React developers don't just know the library - they know the ecosystem that makes
            production applications work.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div v-for="(cap, idx) in capabilities" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl mb-4">
              <component :is="cap.icon" class="h-5 w-5" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ cap.title }}</h3>
            <p class="text-sm text-gray-600">{{ cap.description }}</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Tech Stack</h3>
            <div class="space-y-3">
              <div v-for="(item, idx) in techStack" :key="idx" class="flex items-center gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <span class="font-semibold text-gray-900">{{ item.category }}:</span>
                  <span class="text-gray-600 ml-1">{{ item.tools }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 flex flex-col justify-center">
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
              Interested in our broader React.js capabilities?
            </p>
            <NuxtLink
              to="/technologies/reactjs"
              class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              See our React.js expertise page
              <ArrowRight class="h-4 w-4 ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20 bg-white">
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

        <div class="mt-8 text-center">
          <p class="text-gray-600 italic">
            "You talk to the engineers who will actually build your product. No account managers translating in between."
          </p>
        </div>
      </div>
    </section>

    <!-- Engagement Models Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Flexible Hiring, No Lock-In</h2>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="divide-y divide-gray-100">
            <div v-for="(model, idx) in engagementModels" :key="idx" class="p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-1">{{ model.name }}</h3>
              <p class="text-sm text-blue-600 font-medium mb-2">{{ model.bestFor }}</p>
              <p class="text-gray-600">{{ model.details }}</p>
            </div>
          </div>
        </div>
        <p class="text-gray-600 mt-6 text-sm">
          All models start with a two-week trial. Monthly rolling after the initial three-month commitment. No long-term lock-in.
        </p>
      </div>
    </section>

    <!-- Proof Story Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">React Projects We've Shipped</h2>
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">PerformLine</h3>
          <div class="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>
              PerformLine needed one senior engineer to help with their React frontend. That was
              two years ago. Today, we're eight engineers deep - full-stack, DevOps, data engineering,
              and QA - building across their entire product.
            </p>
            <p>
              They didn't grow the team because we asked them to. They grew it because the first
              engineer earned their trust, and the second one did too, and the pattern held.
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
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

          <div class="mt-8">
            <NuxtLink
              to="/case-studies/performline"
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
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
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
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Ready to Meet Your React Team?</h2>
        <p class="text-xl text-gray-600 mb-4">
          No pitches. No pressure. Just a conversation about your product and whether our React
          developers are the right fit.
        </p>
        <p class="text-lg text-gray-600 mb-8">
          Start with a two-week embedded trial. If it works, we keep building together. If it doesn't, no hard feelings.
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
        text="Looking for React developers who feel like your own team? Let's talk."
        cta-label="Book a 15-minute call"
        cta-link="/contact"
        dismiss-key="smart_cta_hire_react"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import {
  ArrowRight, Users, TrendingUp, Clock, Shield, Code,
  CheckCircle, ChevronDown, Layers, Globe, Zap, Heart, Target, UserCheck
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
    title: 'Named Engineers, Not a Rotating Pool',
    description: "You'll know your React developer by name. They'll know your codebase, your product decisions, and why that component was built the way it was. We don't rotate people off your project when something shinier comes along."
  },
  {
    icon: Shield,
    title: 'Two-Week Embedded Trial',
    description: 'Before any long-term commitment, your React developer joins your team for two weeks. Same Slack, same Jira, same code reviews. You see how they work before you decide.'
  },
  {
    icon: TrendingUp,
    title: 'Partnerships That Actually Grow',
    description: "PerformLine started with one of our engineers. Two years later, we're eight engineers deep - full-stack, DevOps, QA, data. That's not a staffing transaction. That's what happens when engineers care about the product they're building."
  },
  {
    icon: Heart,
    title: 'We Built Our Own Product',
    description: 'Formester is our SaaS product - live, with real users and a 4.8-star rating. Building our own product taught us what ownership feels like. We bring that same mindset to every React project we touch.'
  },
  {
    icon: Zap,
    title: 'Productive From Week One',
    description: 'Our engineers ramp on your codebase in one to two weeks. We track time-to-first-PR because we know you\'re hiring for output, not warm bodies.'
  }
]

const capabilities = [
  {
    icon: Layers,
    title: 'Single-Page Applications',
    description: 'Complex, interactive UIs with React 18+ and concurrent features.'
  },
  {
    icon: Globe,
    title: 'Server-Side Rendering',
    description: 'Next.js applications for performance and SEO.'
  },
  {
    icon: Zap,
    title: 'Real-Time Dashboards',
    description: 'Live data visualizations, admin panels, monitoring tools.'
  },
  {
    icon: Code,
    title: 'E-Commerce Frontends',
    description: 'Fast, accessible storefronts with dynamic product experiences.'
  },
  {
    icon: Target,
    title: 'Progressive Web Apps',
    description: 'Offline-capable, installable web applications.'
  }
]

const techStack = [
  { category: 'Core', tools: 'React 18+, TypeScript, Next.js' },
  { category: 'State Management', tools: 'Redux Toolkit, Zustand, React Query, Jotai' },
  { category: 'Styling', tools: 'Tailwind CSS, CSS Modules, Styled Components' },
  { category: 'Testing', tools: 'Jest, React Testing Library, Cypress, Playwright' },
  { category: 'Build Tools', tools: 'Vite, Webpack, Turborepo' },
  { category: 'APIs', tools: 'REST, GraphQL (Apollo, urql)' }
]

const steps = [
  {
    title: 'Discovery Call',
    description: "We learn about your stack, your team, and what you're building. Not a sales pitch - a conversation about your product.",
    icon: Target
  },
  {
    title: 'Engineer Matching',
    description: "We propose specific engineers with relevant experience. You'll see their work and talk to them directly.",
    icon: Users
  },
  {
    title: 'Two-Week Trial',
    description: 'Your React developer joins your team. Same tools, same standups, same pull requests. You evaluate the fit with real work.',
    icon: CheckCircle
  },
  {
    title: 'Ongoing Partnership',
    description: "Monthly rolling engagement after an initial three-month commitment. Scale up or down with two weeks' notice.",
    icon: Heart
  }
]

const engagementModels = [
  {
    name: 'Dedicated (Full-Time)',
    bestFor: 'Best for: Long-term product development',
    details: 'Your React developer works exclusively on your project. Full integration with your team.'
  },
  {
    name: 'Part-Time',
    bestFor: 'Best for: Specific features or sprints',
    details: '20 hours/week, ideal when you need React expertise but not a full seat.'
  },
  {
    name: 'Project-Based',
    bestFor: 'Best for: Defined scope with clear deliverables',
    details: 'Fixed scope, fixed timeline. Good for greenfield React applications or major refactors.'
  }
]

const faqs = [
  {
    question: 'How much does it cost to hire a React developer from India?',
    answer: "Rates depend on seniority and engagement model. Our senior React developers are priced competitively for dedicated, long-term engagements. We'll share specific numbers on a discovery call once we understand your needs - we don't believe in one-size-fits-all pricing."
  },
  {
    question: 'How quickly can React developers start on my project?',
    answer: 'Most engagements start within one to two weeks of the discovery call. We match engineers based on availability and relevant experience, then begin with a two-week embedded trial.'
  },
  {
    question: "What's the difference between hiring freelance React developers and a dedicated team?",
    answer: "A freelancer is one person. If they get sick, take another project, or aren't the right fit, you're back to square one. With us, you get a team behind your project - knowledge stays even if an individual moves. Plus, you get engineers who've worked together and can collaborate across frontend, backend, and DevOps."
  },
  {
    question: 'Do your React developers work in my timezone?',
    answer: "We guarantee a minimum of four hours of timezone overlap. Many of our engineers work US-shifted hours for US-based clients. We'll match based on your team's working schedule."
  },
  {
    question: 'Can I scale the team up or down?',
    answer: "Yes. After the initial three-month commitment, you can scale with two weeks' notice. PerformLine started with one engineer and scaled to eight over two years. We grow with what you need."
  },
  {
    question: "What happens if a developer isn't a good fit?",
    answer: "That's what the two-week trial is for. If the fit isn't right during the trial, there's no commitment. After the trial, we offer an engineer replacement guarantee - we want this to work as much as you do."
  },
  {
    question: 'Do you work with Next.js and React Native too?',
    answer: 'Yes. Our React developers have deep Next.js experience for server-rendered applications. For React Native mobile work, let us know during discovery and we\'ll match engineers with mobile-specific experience.'
  }
]

// SEO Meta
useSeoMeta({
  title: 'Hire React Developers in India | AcornGlobus',
  description: 'Hire senior React developers from a 20+ person team - not a marketplace. Named engineers who join your team, 2-week trial, no bench. Talk to us today.',
  keywords: 'hire react developers, hire react developers India, react developer India, dedicated react developer, react development team',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'Hire React Developers in India | AcornGlobus',
  ogDescription: 'Hire senior React developers from a 20+ person team - not a marketplace. Named engineers who join your team, 2-week trial, no bench.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/hire-react-developer',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Hire React Developers in India | AcornGlobus',
  twitterDescription: 'Hire senior React developers from a 20+ person team - not a marketplace. Named engineers, 2-week trial.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://acornglobus.com/hire-react-developer' },
  ],
})

// Service schema
useServiceSchema({
  name: 'Hire React Developers',
  description: 'Hire senior React developers from a 20+ person product engineering team. Named engineers who embed with your team, 2-week trial, no bench, no rotating contractors.',
  url: '/hire-react-developer',
})

// FAQ schema
useFaqSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))

// Breadcrumb schema
useBreadcrumbSchema([
  { name: 'Hire React Developers', path: '/hire-react-developer' },
])
</script>
