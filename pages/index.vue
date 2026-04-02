<template>
  <div class="min-h-screen bg-white"><!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content Section -->
          <div class="order-2 lg:order-1">
            <div class="mb-6">
              <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Product Engineering Team
              </span>
              <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                We build it
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block mt-2">
                  like it's ours.
                </span>
              </h1>
              <p class="text-xl text-gray-600 mb-8">
                We're a product engineering team that built our own SaaS (Formester) - and we bring that same ownership to every product we touch. Not a vendor. Not a body shop. A team that cares about your outcome as much as you do.
              </p>
            </div>

            <!-- Stats Row -->
            <div class="grid grid-cols-4 gap-6 mb-8">
              <div class="text-center lg:text-left">
                <div class="text-3xl font-bold text-gray-900">20+</div>
                <div class="text-sm text-gray-600">Engineers</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-3xl font-bold text-gray-900">25+</div>
                <div class="text-sm text-gray-600">Products Shipped</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-3xl font-bold text-gray-900">80%+</div>
                <div class="text-sm text-gray-600">Client Retention</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-3xl font-bold text-gray-900">7+</div>
                <div class="text-sm text-gray-600">Years Building Together</div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/contact"
                class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                Let's talk about your product
                <ArrowRight class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
              <NuxtLink
                to="/portfolio"
                class="inline-flex items-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                <Sparkles class="mr-2 h-5 w-5" />
                See our work
              </NuxtLink>
            </div>
          </div>

          <!-- Image Section -->
          <div class="order-1 lg:order-2 relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <div class="relative h-[400px] lg:h-[600px]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
                  alt="AcornGlobus team collaborating on product engineering"
                  class="w-full h-full object-cover"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>

              <!-- Overlay Info Cards -->
              <div class="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                <div class="bg-white/90 backdrop-blur-md rounded-lg p-4">
                  <div class="flex items-center space-x-3">
                    <div class="p-2 bg-blue-100 rounded-lg">
                      <Rocket class="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-900">Our Own SaaS</div>
                      <div class="text-xs text-gray-600">Formester</div>
                    </div>
                  </div>
                </div>
                <div class="bg-white/90 backdrop-blur-md rounded-lg p-4">
                  <div class="flex items-center space-x-3">
                    <div class="p-2 bg-green-100 rounded-lg">
                      <Heart class="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-900">80%+ Retention</div>
                      <div class="text-xs text-gray-600">Clients stay</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>
            <div class="absolute -z-10 -bottom-4 -left-4 w-72 h-72 bg-indigo-100 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Logos -->
    <ClientLogos />

    <!-- Formester Proof Section -->
    <section class="py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Built from experience
          </span>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We built our own SaaS. We build yours the same way.
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Formester is our AI-powered form builder - live, growing, used by thousands. Building our own product taught us what real ownership feels like: the late-night bug fixes, the user feedback loops, the decisions that keep you up at night.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              We bring that same care to your product. Not because a contract says to. Because that's how we're wired.
            </p>

            <div class="flex items-center space-x-8 mb-8">
              <div>
                <div class="text-3xl font-bold text-blue-600">1,000+</div>
                <div class="text-sm text-gray-600">Active Users</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-blue-600">50K+</div>
                <div class="text-sm text-gray-600">Forms Created</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-blue-600">4.8</div>
                <div class="text-sm text-gray-600">Star Rating</div>
              </div>
            </div>

            <a
              href="https://formester.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Learn more about Formester
              <ArrowUpRight class="ml-1 h-4 w-4" />
            </a>
          </div>

          <div class="order-1 lg:order-2 relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-400 rounded-3xl opacity-10 blur-2xl"></div>
            <div class="relative bg-gradient-to-br from-blue-50 to-blue-50 rounded-3xl p-8">
              <img
                src="/images/formester-mockup.png"
                alt="Formester Platform - AI Form Builder Interface"
                class="rounded-2xl shadow-xl"
              >
              <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Rocket class="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-gray-900">Our Product</div>
                    <div class="text-xs text-gray-600">Live & Growing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Proof Stories Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Partnerships, not projects
          </span>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We don't just deliver. We stay.
          </h2>
        </div>

        <!-- PerformLine Story -->
        <div class="mb-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Users class="h-4 w-4 mr-2" />
                Resource Augmentation
              </div>
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                PerformLine
                <span class="block text-xl text-gray-600 mt-2">From 1 engineer to 8+. Two years and counting.</span>
              </h3>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                PerformLine needed a frontend engineer. We sent one. That was two years ago. Today, we're 8+ engineers deep - full-stack, DevOps, data, QA - embedded in their team like we've always been there. Same tools, same standups, same standards.
              </p>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                That's not a contract scaling up. That's trust being earned, sprint by sprint.
              </p>

              <div class="flex items-center space-x-8">
                <div>
                  <div class="text-3xl font-bold text-blue-600">1 to 8+</div>
                  <div class="text-sm text-gray-600">Engineers</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-blue-600">2+</div>
                  <div class="text-sm text-gray-600">Years Together</div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl opacity-10 blur-2xl"></div>
              <div class="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <TrendingUp class="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div class="text-lg font-semibold text-gray-900">PerformLine</div>
                      <div class="text-sm text-gray-600">Compliance Technology</div>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="flex items-center space-x-3">
                      <CheckCircle class="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span class="text-gray-700">Full-stack, DevOps, data, QA</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <CheckCircle class="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span class="text-gray-700">Same tools, same standups</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <CheckCircle class="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span class="text-gray-700">Embedded in their team</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Eitoss Story -->
        <div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative order-2 lg:order-1">
              <div class="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl opacity-10 blur-2xl"></div>
              <div class="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
                <img
                  src="/images/eitoss-mockup.png"
                  alt="Eitoss Platform - Analytics Dashboard"
                  class="rounded-2xl shadow-xl"
                >
                <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Target class="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div class="text-sm font-semibold text-gray-900">MVP Success</div>
                      <div class="text-xs text-gray-600">Secured Funding</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                <Award class="h-4 w-4 mr-2" />
                MVP Development
              </div>
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Eitoss
                <span class="block text-xl text-gray-600 mt-2">Demoable MVP in 8 weeks. Live in 3 months. Raised funding. Still building together.</span>
              </h3>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                Eitoss came to us with a vision and a timeline. We shipped a demoable MVP in 8 weeks and had the product live in production in 3 months. They raised funding. Two years later, we're still their engineering team - not because they're locked in, but because the partnership works.
              </p>

              <div class="flex items-center space-x-8 mb-8">
                <div>
                  <div class="text-3xl font-bold text-green-600">8 Weeks</div>
                  <div class="text-sm text-gray-600">To Demoable MVP</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-green-600">3 Months</div>
                  <div class="text-sm text-gray-600">To Production</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-green-600">2+</div>
                  <div class="text-sm text-gray-600">Years Together</div>
                </div>
              </div>

              <NuxtLink
                to="/portfolio"
                class="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                See how we work with teams like yours
                <ArrowRight class="ml-2 h-4 w-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Your product, your way
          </span>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Four ways to build together
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group relative"
          >
            <div class="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div class="mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <component :is="service.icon" class="h-8 w-8 text-blue-600" />
                </div>
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-2">
                {{ service.title }}
              </h3>

              <p class="text-blue-600 font-semibold text-sm mb-3">
                {{ service.hook }}
              </p>

              <p class="text-gray-600 text-sm mb-6 leading-relaxed">
                {{ service.description }}
              </p>

              <NuxtLink
                :to="service.link"
                class="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
              >
                Learn more
                <ArrowUpRight class="ml-1 h-3 w-3" />
              </NuxtLink>
            </div>

            <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- What Makes Us Different Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Why teams choose us
          </span>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The people you meet are the people who build.
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(diff, index) in differentiators"
            :key="index"
            class="bg-gradient-to-br rounded-3xl p-8"
            :class="diff.bgClass"
          >
            <component :is="diff.icon" class="h-12 w-12 mb-6" :class="diff.iconClass" />
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ diff.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ diff.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            From the people we build with
          </span>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Don't take our word for it.
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Featured Testimonial (Bogdan first) -->
          <div class="order-2 lg:order-1">
            <div class="relative">
              <div class="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-2xl opacity-60"></div>
              <div class="relative bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-10 border border-blue-100">
                <Quote class="h-12 w-12 text-blue-200 mb-4" />

                <p v-if="testimonials[0].framing" class="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
                  {{ testimonials[0].framing }}
                </p>

                <p class="text-2xl text-gray-800 leading-relaxed mb-8 font-light">
                  "{{ testimonials[0].content }}"
                </p>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img
                      :src="testimonials[0].avatar"
                      :alt="testimonials[0].name"
                      class="w-16 h-16 rounded-full mr-4 border-3 border-blue-200"
                    >
                    <div>
                      <h4 class="text-lg font-bold text-gray-900">{{ testimonials[0].name }}</h4>
                      <p class="text-gray-600">{{ testimonials[0].role }}, {{ testimonials[0].company }}</p>
                    </div>
                  </div>
                  <div class="flex">
                    <Star v-for="i in testimonials[0].rating" :key="i" class="h-6 w-6 fill-blue-400 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Other Testimonials Grid -->
          <div class="order-1 lg:order-2 space-y-4">
            <div
              v-for="(testimonial, index) in testimonials.slice(1)"
              :key="index"
              class="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div class="flex items-start space-x-4">
                <img
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  class="w-10 h-10 rounded-full flex-shrink-0"
                >
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-2">
                    <div>
                      <h5 class="font-semibold text-gray-900">{{ testimonial.name }}</h5>
                      <p class="text-xs text-gray-600">{{ testimonial.role }}, {{ testimonial.company }}</p>
                    </div>
                    <div class="flex">
                      <Star v-for="i in testimonial.rating" :key="i" class="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <p v-if="testimonial.framing" class="text-xs font-semibold text-blue-600 mb-1">
                    {{ testimonial.framing }}
                  </p>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    "{{ testimonial.content }}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Let's build something together.
        </h2>
        <p class="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
          Whether you need one engineer or a full product team, whether you're launching an MVP or scaling an existing product - we'd love to hear what you're working on.
        </p>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          No pitch decks. No sales pressure. Just a conversation about your product and how we might help.
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
          Or email us at <a href="mailto:business@acornglobus.com" class="text-blue-600 hover:text-blue-700 font-medium">business@acornglobus.com</a>
        </p>
      </div>
    </section>

  </div>
</template>

<script setup>
import {
  ArrowRight, Users, Award, Sparkles,
  Rocket, Target, CheckCircle, ArrowUpRight, Quote, Star,
  Heart, TrendingUp, Clock, Shield, Handshake, Lightbulb, Code
} from 'lucide-vue-next'

// Use the default layout
definePageMeta({
  layout: 'default'
})

// SEO Meta Tags
useSeoMeta({
  title: 'AcornGlobus - Product Engineering Team That Builds It Like It\'s Ours',
  description: 'We\'re a 20+ person product engineering team that treats your product like our own. We built Formester, our own SaaS. We bring that same care to everything we build with you.',
  keywords: 'product engineering, software development, resource augmentation, MVP development, web development, mobile app development, SaaS development, AcornGlobus',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'AcornGlobus - Product Engineering Team That Builds It Like It\'s Ours',
  ogDescription: 'We\'re a 20+ person product engineering team that treats your product like our own. We built Formester, our own SaaS. We bring that same care to everything we build with you.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com',
  ogType: 'website',
  ogSiteName: 'AcornGlobus',
  twitterCard: 'summary_large_image',
  twitterSite: '@acornglobus',
  twitterCreator: '@acornglobus',
  twitterTitle: 'AcornGlobus - Product Engineering Team That Builds It Like It\'s Ours',
  twitterDescription: 'We\'re a 20+ person product engineering team that treats your product like our own. We built Formester, our own SaaS. We bring that same care to everything we build with you.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

const services = [
  {
    icon: Users,
    title: 'Resource Augmentation',
    hook: 'Your team, plus ours.',
    description: 'Our engineers embed with your team - same tools, same standups, same codebase. You\'ll forget we\'re external. Scale from 1 engineer to 8+ as your product grows.',
    link: '/services/resource-augmentation'
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    hook: 'From idea to launch in 8-12 weeks.',
    description: 'We scope it honestly, build it in sprints, and ship an MVP that\'s production-ready - not a prototype you\'ll rewrite in 6 months. You own the code from day one.',
    link: '/services/mvp-development'
  },
  {
    icon: Target,
    title: 'Full Project Delivery',
    hook: 'One team, one relationship, start to finish.',
    description: 'We take on your project end-to-end with milestone-based delivery. You see progress every two weeks. Clean code, full documentation, zero lock-in.',
    link: '/services/full-project-delivery'
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    hook: 'We stay after launch.',
    description: 'Launching is just the beginning. We monitor, fix, and improve - with the same engineers who built it. Because they know your product and they care about it.',
    link: '/services/maintenance-support'
  }
]

const differentiators = [
  {
    icon: Users,
    title: 'You\'ll Know Us By Name',
    description: '20+ engineers. No bench. No rotating juniors. The engineer you meet in the intro call is the engineer who writes your code. Real relationships, real accountability.',
    bgClass: 'from-blue-50 to-indigo-50',
    iconClass: 'text-blue-600'
  },
  {
    icon: Handshake,
    title: 'We Guide, Not Just Execute',
    description: 'We\'ll tell you honestly what you need - and what can wait. Not to bill less, but because your success matters more than our invoice.',
    bgClass: 'from-green-50 to-emerald-50',
    iconClass: 'text-green-600'
  },
  {
    icon: Lightbulb,
    title: 'Built to Hand Over',
    description: 'Your code. Your product. Your freedom. We build clean, documented, ready for your in-house team. Zero lock-in. Though most clients choose to stay.',
    bgClass: 'from-purple-50 to-violet-50',
    iconClass: 'text-purple-600'
  },
  {
    icon: Code,
    title: 'Stack-Agnostic',
    description: 'React, Node, Python, Flutter, AWS, Azure - we pick the right tool for the problem, not the one we\'re most comfortable with. What matters is the outcome.',
    bgClass: 'from-orange-50 to-amber-50',
    iconClass: 'text-orange-600'
  }
]

const testimonials = [
  {
    name: 'Bogdan Arsenie',
    role: 'CTO',
    company: 'PerformLine',
    framing: 'Started with 1 engineer. Now 8+ deep.',
    content: 'Acorn Globus is my go-to team when I need a trusted partner to execute any front-end project. They are super attentive, communicate effectively, and accurately manage your expectations for their time and involvement.',
    avatar: '/images/testimonials/bogdan.jpeg',
    rating: 5
  },
  {
    name: 'Enzo Zadrima',
    role: 'CTO',
    company: 'Viewber',
    framing: 'They don\'t wait to be asked.',
    content: 'Acorn Globus is a gifted team with a rare combination of attention to detail and an overall sense for the big picture. They are very passionate about what they do and come up proactively with improvement ideas.',
    avatar: '/images/testimonials/enzo.jpeg',
    rating: 5
  },
  {
    name: 'Alon Diamant',
    role: 'CTO',
    company: 'Mayple',
    framing: 'Built to last.',
    content: 'Acorn Globus is a very proficient team, quick to learn new technologies and concepts. They quickly dove in deep and generated impressive results of high quality that are still operational to this day.',
    avatar: '/images/testimonials/alon.jpeg',
    rating: 5
  }
]
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
