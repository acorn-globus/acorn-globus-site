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
              Hire Angular Developers
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Hire Angular Developers Built for Complex Applications
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Angular is chosen for applications that need to scale, stay maintainable, and last.
              That's exactly how we think about engineering. Our Angular developers build for the
              long term - structured, tested, and ready for teams of any size to work in.
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
          <h2 class="text-3xl font-bold text-gray-900 mb-4">A Product Team, Not a Staffing Agency</h2>
          <p class="text-lg text-gray-600">
            Angular is an enterprise framework. Hiring Angular developers should feel like adding
            to your engineering organization, not ordering from a catalogue.
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
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Modern Angular. Production-Grade.</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Angular developers work with the modern framework - not legacy AngularJS patterns
            carried forward.
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
            to="/technologies/angular"
            class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            See our full Angular capabilities
            <ArrowRight class="h-4 w-4 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- What We Build Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Applications We Build With Angular</h2>
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

        <div class="mt-8 text-center">
          <p class="text-gray-600 italic">
            "Our developers integrate with your existing Angular team - same coding standards, same PR process, same architectural decisions."
          </p>
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
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Angular Projects We've Delivered</h2>

        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Partnership Track Record</h3>
          <div class="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>
              Our engineering partnerships span multiple stacks and years. PerformLine started with
              one engineer and grew to eight over two years - full-stack, DevOps, data, and QA.
              Eitoss started as an MVP; they raised funding, and we're still building together two
              years later.
            </p>
            <p>
              These partnerships demonstrate what enterprise Angular buyers care about most: team
              stability, code quality, and engineers who understand your product deeply enough to
              make good architectural decisions.
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
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Ready to Scale Your Angular Team?</h2>
        <p class="text-xl text-gray-600 mb-4">
          Whether you're building a new enterprise application, scaling your existing Angular team,
          or migrating from AngularJS, we'd like to hear about your project.
        </p>
        <p class="text-lg text-gray-600 mb-8">
          Start with a conversation. If we're the right fit, your Angular developer begins with a two-week trial.
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
        text="Building enterprise Angular apps? Let's talk about your team needs."
        cta-label="Book a 15-minute call"
        cta-link="/contact"
        dismiss-key="smart_cta_hire_angular"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import {
  ArrowRight, Users, TrendingUp, Clock, Shield, Code, Heart,
  CheckCircle, ChevronDown, Layers, Globe, Zap, Target, UserCheck,
  Building, Monitor
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
    title: 'Engineers Who Embed in Your Team',
    description: "Our Angular developers join your standups, use your Jira, push to your repository, and follow your code review process. They don't work in a separate office on a separate timeline. They work alongside your team."
  },
  {
    icon: Layers,
    title: 'Full-Stack Capability',
    description: 'Angular-only shops give you a frontend. We give you a product team. Our Angular developers work alongside backend engineers (Node.js, Python, .NET, Java) who understand the APIs they consume. One team, not two vendors.'
  },
  {
    icon: Code,
    title: 'Modern Angular Expertise',
    description: "We build with Angular 17+ - standalone components, signals, new control flow syntax, SSR with Angular Universal. Not every agency has kept up with Angular's evolution. We have, because the modern framework is significantly better than what came before."
  },
  {
    icon: Building,
    title: 'Enterprise Integration Experience',
    description: 'Large codebases, multiple teams, CI/CD pipelines, Nx monorepo tooling, testing at scale. Our Angular developers have worked in the structured environments that enterprise applications demand.'
  },
  {
    icon: Heart,
    title: 'Partnership Model',
    description: "PerformLine started with one engineer and grew to eight over two years. We build long-term relationships, not short-term contracts. Your Angular developer today is your Angular developer six months from now."
  }
]

const expertiseGroups = [
  {
    title: 'Core Angular',
    items: [
      'Angular 17+ with standalone components',
      'Signals for reactive state management',
      'New control flow syntax (@if, @for, @switch)',
      'TypeScript-first development (always)',
      'RxJS and reactive patterns'
    ]
  },
  {
    title: 'State Management',
    items: [
      'Angular Signals',
      'NgRx for complex state',
      'Component store patterns'
    ]
  },
  {
    title: 'UI and Components',
    items: [
      'Angular Material',
      'PrimeNG',
      'Tailwind CSS integration',
      'Custom design systems and component libraries'
    ]
  },
  {
    title: 'Server-Side Rendering',
    items: [
      'Angular Universal for SSR and SSG',
      'Hydration strategies',
      'SEO-optimized rendering'
    ]
  },
  {
    title: 'Tooling and Architecture',
    items: [
      'Nx monorepo management',
      'Lazy loading and code splitting',
      'Micro-frontend architectures',
      'CI/CD integration (GitHub Actions, GitLab CI, Azure DevOps)'
    ]
  },
  {
    title: 'Testing',
    items: [
      'Jest (replacing Karma)',
      'Cypress and Playwright for E2E',
      'Component testing',
      'Accessibility testing'
    ]
  }
]

const capabilities = [
  {
    icon: Monitor,
    title: 'Enterprise Dashboards and Admin Panels',
    description: 'Complex data-driven interfaces with role-based access, real-time updates, and structured workflows. The kind of applications where maintainability matters as much as features.'
  },
  {
    icon: Layers,
    title: 'Large-Scale SaaS Platforms',
    description: 'Multi-tenant applications with complex routing, lazy-loaded modules, and hundreds of components that need to stay organized as the codebase grows.'
  },
  {
    icon: Code,
    title: 'Form-Heavy Business Applications',
    description: "Insurance portals, healthcare intake systems, financial tools - applications where forms are the product and validation logic is complex. Angular's reactive forms were built for this."
  },
  {
    icon: Zap,
    title: 'Data Visualization and Reporting',
    description: 'Interactive charts, filterable tables, real-time data feeds. Admin tools that help teams make decisions based on live data.'
  },
  {
    icon: Globe,
    title: 'AngularJS to Angular Migrations',
    description: "Still running AngularJS? We help companies migrate to modern Angular - incrementally, safely, without rewriting everything at once. This is an underserved need, and we've seen the patterns that make migrations succeed."
  }
]

const steps = [
  {
    title: 'Discovery Call',
    description: "We learn about your Angular application, your team structure, and what you need. Whether you're building from scratch, scaling, or migrating from AngularJS.",
    icon: Target
  },
  {
    title: 'Engineer Matching',
    description: "We propose Angular developers with relevant experience. Building an Nx monorepo? You'll meet someone who's worked in one. Need NgRx expertise? Same thing.",
    icon: Users
  },
  {
    title: 'Two-Week Trial',
    description: 'Your developer joins your team. Same tools, same standups, same code reviews. You evaluate the fit with real work on your codebase.',
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
    bestFor: 'Best for: Ongoing Angular product development',
    details: 'Full integration with your team. Your Angular developer works exclusively on your project.'
  },
  {
    name: 'Part-Time',
    bestFor: 'Best for: Specific features or maintenance',
    details: '20 hours/week. Good for teams that need Angular expertise without a full-time seat.'
  },
  {
    name: 'Project-Based',
    bestFor: 'Best for: New Angular apps or AngularJS migrations',
    details: 'Fixed scope, fixed timeline. Ideal for greenfield builds or modernization projects.'
  },
  {
    name: 'Team Augmentation',
    bestFor: 'Best for: Scaling your existing Angular squad',
    details: "Multiple developers who integrate with your team's workflow and standards."
  }
]

const faqs = [
  {
    question: 'How much does it cost to hire an Angular developer in India?',
    answer: "Rates depend on seniority and engagement model. Senior Angular developers are priced competitively for dedicated, long-term engagements. We'll share specifics on a discovery call."
  },
  {
    question: 'Do your developers work with the latest Angular version?',
    answer: "Yes. We build with Angular 17+ - standalone components, signals, new control flow, and Angular Universal for SSR. We keep up with Angular's evolution because the modern framework is meaningfully better."
  },
  {
    question: 'Can your Angular developers help migrate from AngularJS?',
    answer: "Yes. AngularJS to Angular migration is a common need, and we've seen the patterns that work: incremental migration with ngUpgrade, running both frameworks side by side, and converting components progressively. We won't push you to rewrite everything at once."
  },
  {
    question: 'Angular vs React - which should I choose for my enterprise application?',
    answer: "Angular's opinionated structure, built-in dependency injection, and TypeScript-first approach make it a strong fit for large teams and complex applications. React offers more flexibility and a larger ecosystem. We work with both and can recommend based on your team, project, and existing codebase."
  },
  {
    question: 'How quickly can Angular developers start?',
    answer: 'Most engagements start within one to two weeks. We match based on availability and relevant Angular experience.'
  },
  {
    question: 'Do your Angular developers use TypeScript?',
    answer: "Always. Angular is TypeScript-first, and our developers leverage TypeScript's type system fully - strict mode, interfaces, generics, and type guards. It's not optional for serious Angular development."
  },
  {
    question: 'Can you provide a full Angular team (frontend + backend)?',
    answer: "Yes. That's one of our strengths over Angular-only shops. We can match you with Angular frontend developers alongside Node.js, Python, .NET, or Java backend engineers. One team, one relationship."
  },
  {
    question: 'How do your developers integrate with our existing Angular team?',
    answer: "Same tools, same processes. Our developers join your standups, follow your coding standards, use your CI/CD pipeline, and participate in your code review process. The goal is that they feel like part of your team, not an external addition."
  }
]

// SEO Meta
useSeoMeta({
  title: 'Hire Angular Developers in India | AcornGlobus',
  description: 'Hire senior Angular developers from a 20+ person product team. Enterprise apps, complex UIs, full-stack capability. Named engineers, 2-week trial. Talk to us.',
  keywords: 'hire angular developers, hire angular developers India, angular developer India, dedicated angular developer, angular development team, angularjs migration',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'Hire Angular Developers in India | AcornGlobus',
  ogDescription: 'Hire senior Angular developers from a 20+ person product team. Enterprise apps, complex UIs, full-stack capability. Named engineers, 2-week trial.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/hire-angular-developer',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Hire Angular Developers in India | AcornGlobus',
  twitterDescription: 'Hire senior Angular developers from a 20+ person product team. Enterprise apps, complex UIs, full-stack capability.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://acornglobus.com/hire-angular-developer' },
  ],
})

useServiceSchema({
  name: 'Hire Angular Developers',
  description: 'Hire senior Angular developers from a 20+ person product team. Enterprise applications, complex UIs, AngularJS migrations. Named engineers, 2-week embedded trial.',
  url: '/hire-angular-developer',
})

useFaqSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))

useBreadcrumbSchema([
  { name: 'Hire Angular Developers', path: '/hire-angular-developer' },
])
</script>
