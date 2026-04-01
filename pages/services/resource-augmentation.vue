<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
              <Users class="h-4 w-4 mr-2" />
              Resource Augmentation
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your team, plus engineers who actually care about your product.
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              We don't send resumes and disappear. We embed dedicated engineers into your
              team — same tools, same standups, same codebase. They'll know your product
              because they'll care about it.
            </p>

            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Let's talk about your team needs
                <ArrowRight class="h-5 w-5 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Users class="h-8 w-8 text-blue-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">20+</div>
                <p class="text-sm text-gray-600">Engineers</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Globe class="h-8 w-8 text-indigo-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">15+</div>
                <p class="text-sm text-gray-600">Technologies</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <TrendingUp class="h-8 w-8 text-green-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">80%+</div>
                <p class="text-sm text-gray-600">Client Retention</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <Clock class="h-8 w-8 text-blue-600 mb-3" />
                <div class="text-2xl font-bold text-gray-900">7+</div>
                <p class="text-sm text-gray-600">Years in Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pain Point Section -->
    <section class="py-20 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">You've tried scaling before. It didn't feel right.</h2>
        <div class="text-lg text-gray-600 space-y-4 leading-relaxed">
          <p>
            You posted the req six months ago. The pipeline is thin. The contractors you tried
            lasted a sprint before context-switching to another client. The agency sent someone
            who needed more hand-holding than your junior devs.
          </p>
          <p>
            You don't need more bodies. You need engineers who show up, ramp fast, and build
            like they belong — because they do.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Approach Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Engineers who join your team, not just your Slack.</h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Our engineers work inside your workflows. Your Jira, your Git, your standups. They're
            not external — they're teammates who happen to sit in a different office.
          </p>
          <p class="text-lg text-gray-600 mt-4 leading-relaxed">Here's what makes this work:</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

    <!-- Proof Story Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">PerformLine: 1 engineer to 8+ in 2 years.</h2>
          <div class="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>
              PerformLine started with a single engineer from our team. They needed someone who
              could integrate with their existing team and contribute from week one.
            </p>
            <p>
              That one engineer earned trust. Then they needed a second. Then a third. Over two
              years, the engagement grew to 8+ engineers — full-stack developers, DevOps, data
              engineers, QA, and frontend specialists.
            </p>
            <p>
              They didn't grow because we pushed for it. They grew because the partnership worked.
            </p>
          </div>
          <blockquote class="mt-8 border-l-4 border-blue-600 pl-6 italic text-xl text-gray-800">
            "The people you meet are the people who build."
          </blockquote>
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

    <!-- Engagement Details Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Flexible by design</h2>
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

    <!-- Testimonials -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What our clients say</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, idx) in testimonials" :key="idx" class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="flex items-start mb-6">
              <Star v-for="i in 5" :key="i" class="h-5 w-5 text-yellow-400 fill-yellow-400" />
            </div>
            <blockquote class="text-gray-700 mb-6 italic">
              "{{ testimonial.content }}"
            </blockquote>
            <div class="flex items-center">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.author"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div class="font-semibold text-gray-900">{{ testimonial.author }}</div>
                <div class="text-sm text-gray-600">{{ testimonial.role }}, {{ testimonial.company }}</div>
              </div>
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
          Your team is great. Let's make it bigger without making it harder to manage.
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Tell us what roles you need and how your team works. We'll propose specific engineers
          and let you meet them before anything starts. If the fit isn't right in the first two
          weeks, you walk away — no cost, no commitment.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Let's talk about your team
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/case-studies/eitoss"
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-blue-200"
          >
            See how PerformLine scaled with us
            <ChevronRight class="h-5 w-5 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <ClientOnly>
      <LeadCaptureSmartCta
        text="Looking for engineers who feel like your own team? Let's talk."
        cta-label="Book a 15-minute call"
        cta-link="/contact"
        dismiss-key="smart_cta_resource_aug"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import {
  ArrowRight, ArrowLeft, Users, Globe, TrendingUp, Clock,
  CheckCircle, ChevronRight, Star, Shield, Zap, Heart, Target
} from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Resource Augmentation | Engineers Who Become Part of Your Team | AcornGlobus',
  description: 'Embed dedicated engineers into your team — same tools, same standups, same codebase. 20+ engineers, no rotating pool. PerformLine grew from 1 to 8+ engineers over 2 years with us.',
  keywords: 'resource augmentation, dedicated developers, team augmentation, staff augmentation, hire developers, AcornGlobus',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'Resource Augmentation | Engineers Who Become Part of Your Team | AcornGlobus',
  ogDescription: 'Embed dedicated engineers into your team — same tools, same standups, same codebase. 20+ engineers, no rotating pool.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/services/resource-augmentation',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Resource Augmentation | Engineers Who Become Part of Your Team',
  twitterDescription: 'Embed dedicated engineers into your team — same tools, same standups, same codebase. 20+ engineers, no rotating pool.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useServiceSchema({
  name: 'Resource Augmentation',
  description: 'Embed dedicated engineers into your team — same tools, same standups, same codebase. Named engineers, not a talent pool. PerformLine grew from 1 to 8+ engineers over 2 years with us.',
  url: '/services/resource-augmentation',
})

useBreadcrumbSchema([
  { name: 'Services', path: '/services' },
  { name: 'Resource Augmentation', path: '/services/resource-augmentation' },
])

const approach = [
  {
    icon: Users,
    title: 'Named engineers, not a talent pool.',
    description: "You'll know them by name. They'll know your codebase like their own. No rotating contractors, no surprise substitutions."
  },
  {
    icon: Zap,
    title: 'Fast ramp, real output.',
    description: 'Our engineers ship their first PR within 1-2 weeks. We track time-to-first-PR because we take ramp-up seriously.'
  },
  {
    icon: Heart,
    title: 'We stay.',
    description: "This isn't project work with an end date. It's a partnership that grows with your needs. Scale up for a launch, scale down after. We flex with you."
  },
  {
    icon: Target,
    title: 'Technical leadership built in.',
    description: 'For engagements of 3+ engineers, we include a team lead who bridges communication and keeps quality high.'
  }
]

const steps = [
  {
    title: 'Discovery call',
    description: 'We learn your stack, your team culture, and exactly what roles you need. No generic proposals.',
    icon: Target
  },
  {
    title: 'Engineer matching',
    description: "We propose specific engineers with relevant experience. You'll meet them before anything starts.",
    icon: Users
  },
  {
    title: '2-week trial',
    description: 'Our engineers join your team. You evaluate fit and productivity with zero commitment.',
    icon: CheckCircle
  },
  {
    title: 'Ongoing partnership',
    description: "Monthly rolling engagement. Scale up or down with 2 weeks' notice. No long-term lock-in after the initial 3-month commitment.",
    icon: Heart
  }
]

const included = [
  'Dedicated senior and mid-level engineers matched to your stack',
  'Team lead for engagements of 3+ engineers',
  'Weekly sync with your AcornGlobus account manager',
  'Engineer replacement guarantee if someone isn\'t the right fit',
  'Minimum 4 hours of timezone overlap, guaranteed',
  'Knowledge transfer documentation when the engagement wraps'
]

const engagementDetails = [
  { label: 'Minimum', value: '1 engineer' },
  { label: 'Typical', value: '2-5 engineers per client' },
  { label: 'Duration', value: '3-12+ months' },
  { label: 'Model', value: 'Dedicated — full-time on your project, not shared' },
  { label: 'Pricing', value: 'Monthly per-engineer rate, volume discounts for 3+' }
]

const testimonials = [
  {
    content: "Acorn Globus is a very proficient team, quick to learn new technologies and concepts. They quickly dove in deep and generated impressive results of high quality that are still operational to this day.",
    author: "Alon Diamant",
    role: "CTO",
    company: "Mayple",
    avatar: "/images/testimonials/alon.jpeg"
  },
  {
    content: "Acorn Globus is a gifted team with a rare combination of attention to detail and an overall sense for the big picture. They are very passionate about what they do and come up proactively with improvement ideas.",
    author: "Enzo Zadrima",
    role: "Chief Technology Officer",
    company: "Viewber",
    avatar: "/images/testimonials/enzo.jpeg"
  },
  {
    content: "Acorn Globus is my go-to team when I need a trusted partner to execute any front-end project. They are super attentive, communicate effectively, and accurately manage your expectations for their time and involvement.",
    author: "Bogdan Arsenie",
    role: "CTO",
    company: "PerformLine & Social Impact Advocate",
    avatar: "/images/testimonials/bogdan.jpeg"
  }
]
</script>
