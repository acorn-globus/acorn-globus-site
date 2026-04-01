<template>
  <div class="min-h-screen bg-white"><!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Building2 class="h-4 w-4 mr-2" />
            About AcornGlobus
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            We built something of our own first.
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block mt-2">
              That changed everything.
            </span>
          </h1>

          <div class="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed space-y-4">
            <p>
              Before we built for anyone else, we built Formester -- our own SaaS product. Live, growing, used by thousands of people to create forms with AI.
            </p>
            <p>
              That experience taught us something most agencies never learn: what it feels like when the product is yours. The weight of every decision. The 2 AM alerts. The feedback from real users who depend on what you built.
            </p>
            <p>
              We bring that same care to every product we touch. Not because a contract requires it. Because we don't know how to build any other way.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section id="stats" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center"
            :style="{
              animation: countersVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
            }"
          >
            <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-4">
              <component :is="stat.icon" class="h-6 w-6" />
            </div>
            <div class="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              {{ stat.value }}{{ stat.suffix }}
            </div>
            <div class="text-gray-600 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Logos -->
    <ClientLogos />

    <!-- Our Story Section -->
    <section class="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              How we got here
            </span>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              From a side project to a team of 20+
            </h2>
            <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                AcornGlobus started the way most real things do -- small, scrappy, and driven by curiosity.
              </p>
              <p>
                In 2018, Ankit started building Formester from scratch -- an AI-powered form builder. Something he wanted to exist in the world. That project became the foundation for everything that followed.
              </p>
              <p>
                By 2019, Tarun landed a project from Eitoss, a Japanese client, and called Ankit. They shipped it together, and AcornGlobus took seed. Not from a business plan, but from two friends who'd always wanted to build something of their own. The care we put into Formester, the ownership mindset, the obsession with getting it right -- that's what we wanted to bring to every product we touched.
              </p>
              <p>
                So we started doing exactly that. One client at a time. One relationship at a time.
              </p>
              <p>
                Seven years later, we're a 20+ person team. We've shipped 25+ products across SaaS, fintech, healthtech, e-commerce, and more. Formester is still live, still growing -- 1,000+ users, 50,000+ forms created, 4.8-star rating. It keeps us honest. It reminds us every day what ownership feels like.
              </p>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl opacity-10 blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="AcornGlobus Team"
              class="relative rounded-3xl shadow-2xl"
            >
            <!-- Note: Replace stock photo with real team photo when available -->
          </div>
        </div>

        <!-- Who You'll Work With -->
        <div class="mb-12">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            The people behind the code
          </span>
          <h3 class="text-3xl font-bold text-gray-900 mb-4">You'll know us by name.</h3>
          <div class="text-lg text-gray-600 max-w-3xl leading-relaxed space-y-4 mb-12">
            <p>
              We're a team of 20+ engineers. No bench. No rotating juniors. No account managers standing between you and the people doing the work.
            </p>
            <p>
              The engineer you meet in the first call is the engineer who writes your code. When you message us on Slack, a real person who knows your codebase answers. We're small enough that every relationship matters -- and experienced enough to build what you need.
            </p>
          </div>
        </div>

        <!-- Founders Section -->
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">Meet Our Founders</h3>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div v-for="(founder, index) in founders" :key="index" class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="flex items-start space-x-6">
              <img
                :src="founder.image"
                :alt="founder.name"
                class="w-24 h-24 rounded-full border-4 border-blue-100 flex-shrink-0"
              >
              <div>
                <h4 class="text-xl font-bold text-gray-900">{{ founder.name }}</h4>
                <p class="text-blue-600 font-medium mb-3">{{ founder.role }}</p>
                <p class="text-gray-600 leading-relaxed text-sm">{{ founder.bio }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Proof Stories -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Partnerships, not projects
          </span>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We don't just deliver and disappear. We stay.
          </h2>
        </div>

        <!-- PerformLine Story -->
        <div class="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">PerformLine</h3>
          <p class="text-lg font-semibold text-blue-600 mb-6">1 engineer. Then 8+. Two years and counting.</p>
          <div class="grid lg:grid-cols-2 gap-8">
            <div class="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                PerformLine needed a frontend engineer to plug into their existing team. We sent one. That was two years ago.
              </p>
              <p>
                Today, we're 8+ engineers deep -- full-stack, DevOps, data engineering, QA, frontend. Same tools. Same standups. Same Slack channels. Our team is so embedded that new PerformLine hires sometimes don't realize we're a separate company.
              </p>
              <p>
                That didn't happen because of a contract expansion clause. It happened because sprint after sprint, we earned their trust.
              </p>
            </div>
            <div class="flex items-center justify-center">
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div class="text-3xl font-bold text-blue-600">1 to 8+</div>
                  <div class="text-sm text-gray-600 mt-1">Engineers</div>
                </div>
                <div class="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div class="text-3xl font-bold text-blue-600">2+</div>
                  <div class="text-sm text-gray-600 mt-1">Years Together</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Eitoss Story -->
        <div class="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Eitoss</h3>
          <p class="text-lg font-semibold text-green-600 mb-6">Demoable MVP in 8 weeks. Live in 3 months. Raised funding. Still building together.</p>
          <div class="grid lg:grid-cols-2 gap-8">
            <div class="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Eitoss came to us with a product vision and a tight timeline. We scoped it honestly, built it in sprints, and shipped a demoable MVP in 8 weeks. The product was live in production in 3 months.
              </p>
              <p>
                They took that MVP and raised funding. That was over two years ago. We're still their engineering team -- not because they're locked in (they own 100% of the code), but because the partnership works.
              </p>
            </div>
            <div class="flex items-center justify-center">
              <div class="grid grid-cols-3 gap-4">
                <div class="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div class="text-3xl font-bold text-green-600">8 Wks</div>
                  <div class="text-sm text-gray-600 mt-1">To Demoable MVP</div>
                </div>
                <div class="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div class="text-3xl font-bold text-green-600">3 Mo</div>
                  <div class="text-sm text-gray-600 mt-1">To Production</div>
                </div>
                <div class="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div class="text-3xl font-bold text-green-600">2+</div>
                  <div class="text-sm text-gray-600 mt-1">Years Together</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          In an industry where most agencies finish the work and move on, we walk together. That's not a strategy. That's who we are.
        </p>
      </div>
    </section>

    <!-- How We Think / Principles Section -->
    <section class="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            What we believe
          </span>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Principles, not just processes.
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(principle, index) in principles"
            :key="index"
            class="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
          >
            <div class="flex items-start space-x-6">
              <div :class="[
                'p-4 bg-gradient-to-br rounded-2xl group-hover:scale-110 transition-transform duration-300',
                principle.color,
                principle.iconColor
              ]">
                <component :is="principle.icon" class="h-6 w-6" />
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ principle.title }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ principle.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Closing CTA Section -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Let's talk about what you're building.
        </h2>
        <p class="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
          Whether you're a founder with an idea, a CTO who needs more hands, or a team looking for a long-term engineering partner -- we'd love to hear what you're working on.
        </p>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          No pitch decks. No pressure. Just a conversation about your product and whether we're the right fit.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            Start a conversation
            <ArrowRight class="ml-2 h-5 w-5" />
          </NuxtLink>
        </div>
        <p class="text-gray-500 mt-6">
          Or reach out directly at <a href="mailto:business@acornglobus.com" class="text-blue-600 hover:text-blue-700 font-medium">business@acornglobus.com</a>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  ArrowRight, Users, Heart, Sparkles, TrendingUp,
  Award, Globe, Zap, Rocket, Building2,
  Star, Quote, ArrowUpRight, Calendar,
  Lightbulb, Handshake, Shield, Clock, ChevronRight, Code
} from 'lucide-vue-next'

// Use the default layout
definePageMeta({
  layout: 'default'
})

// SEO Meta Tags
useSeoMeta({
  title: 'About AcornGlobus -- The Team That Builds It Like It\'s Ours',
  description: 'We built Formester, our own SaaS product. That taught us what real ownership feels like. Meet the 20+ person team behind AcornGlobus and the partnerships we\'ve built over 7+ years.',
  keywords: 'about AcornGlobus, product engineering team, founders, Ankit Singhania, Tarun Bhukya, Formester, company story, partnership engineering',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'About AcornGlobus -- The Team That Builds It Like It\'s Ours',
  ogDescription: 'We built Formester, our own SaaS product. That taught us what real ownership feels like. Meet the 20+ person team behind AcornGlobus and the partnerships we\'ve built over 7+ years.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/about',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'About AcornGlobus -- The Team That Builds It Like It\'s Ours',
  twitterDescription: 'We built Formester, our own SaaS product. That taught us what real ownership feels like. Meet the 20+ person team and the partnerships we\'ve built over 7+ years.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useBreadcrumbSchema([
  { name: 'About', path: '/about' },
])

const countersVisible = ref(false)

const stats = [
  { value: 7, suffix: '+', label: 'Years Building Together', icon: Award },
  { value: 25, suffix: '+', label: 'Products Shipped', icon: Rocket },
  { value: 80, suffix: '%+', label: 'Client Retention', icon: Heart },
  { value: 20, suffix: '+', label: 'Engineers', icon: Users }
]

const principles = [
  {
    icon: Heart,
    title: 'Every product is someone\'s whole world',
    description: 'Whether it\'s a startup founder\'s first MVP or an enterprise team\'s critical platform -- someone is counting on this. We build with that weight in mind.',
    color: 'from-pink-50 to-red-50',
    iconColor: 'text-pink-600'
  },
  {
    icon: Handshake,
    title: 'Honest guidance over easy agreements',
    description: 'We\'ll tell you what you need to hear, not what you want to hear. If your timeline is aggressive, we\'ll say so. If a feature can wait, we\'ll recommend waiting. Your success matters more than our invoice.',
    color: 'from-blue-50 to-indigo-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Lightbulb,
    title: 'Built to hand over, built to last',
    description: 'Your code. Your product. Your freedom. We write clean, documented code that your future in-house team can pick up and run with. Zero lock-in. Though most clients choose to stay.',
    color: 'from-blue-50 to-cyan-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Code,
    title: 'The right tool, not the familiar one',
    description: 'React, Node, Python, Flutter, Go, AWS, Azure, GCP -- we\'re stack-agnostic because we\'re outcome-focused. We pick the technology that solves your problem best, not the one we used last time.',
    color: 'from-green-50 to-emerald-50',
    iconColor: 'text-green-600'
  }
]

const founders = [
  {
    name: 'Ankit Singhania',
    role: 'Co-Founder',
    bio: 'While Tarun was still in startups, Ankit went out on his own -- freelancing and building Formester from scratch as a one-man army. When Tarun called about Eitoss, their visions clicked. Both had always wanted to build a company of their own. Ankit is as technical as he is relationship-driven. He codes, he builds, and he\'s also the reason partnerships last years. If you\'re working with us, you\'ll probably hear from Ankit first.',
    image: '/images/ankit.jpeg',
    linkedin: '#'
  },
  {
    name: 'Tarun Bhukya',
    role: 'Co-Founder',
    bio: 'Tarun and Ankit met at a startup, worked together for a year, and became close friends. When Tarun landed a project from a Japanese client -- Eitoss -- he joined hands with Ankit. They shipped it together, and that\'s where AcornGlobus started. Not from a business plan, but from two friends building something side by side. Tarun\'s the kind of engineer who thinks the best code is the code the next person can understand.',
    image: '/images/tarun.jpeg',
    linkedin: '#'
  }
]

onMounted(() => {
  const handleScroll = () => {
    const countersSection = document.getElementById('stats')
    if (countersSection) {
      const rect = countersSection.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        countersVisible.value = true
      }
    }
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
