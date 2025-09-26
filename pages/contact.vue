<template>
  <div class="min-h-screen bg-white"><!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            <MessageSquare class="h-4 w-4 mr-2" />
            Get In Touch
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Build Something
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 block mt-2">
              Amazing Together
            </span>
          </h1>

          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help
            bring your ideas to life.
          </p>

          <div class="flex justify-center gap-4">
            <a
              href="#contact-form"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Send Message
              <Send class="h-5 w-5 ml-2" />
            </a>
            <a
              href="https://calendar.app.google/5rdLGhWiZpbBrPeS7"
              target="_blank"
              class="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200"
            >
              <Calendar class="h-5 w-5 mr-2" />
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div v-for="(info, idx) in contactInfo" :key="idx" class="text-center group">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <component :is="info.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ info.title }}</h3>
            <p class="text-lg text-purple-600 font-semibold mb-1">{{ info.details }}</p>
            <p class="text-sm text-gray-600">{{ info.description }}</p>
          </div>
        </div>

        <!-- Main Contact Form and Info -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Contact Form - 2 columns -->
          <div id="contact-form" class="lg:col-span-2">
            <div class="bg-white rounded-3xl shadow-xl p-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="fullName" class="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      v-model="formData.fullName"
                      class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      v-model="formData.email"
                      class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="country" class="block text-sm font-semibold text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      id="country"
                      required
                      v-model="formData.country"
                      class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select Country</option>
                      <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
                    </select>
                  </div>

                  <div>
                    <label for="company" class="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      v-model="formData.company"
                      class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    Services Required *
                  </label>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <label
                      v-for="service in services"
                      :key="service"
                      :class="[
                        'flex items-center justify-center px-4 py-2 rounded-xl cursor-pointer transition-all',
                        formData.services.includes(service)
                          ? 'bg-purple-100 text-purple-700 border-2 border-purple-400'
                          : 'bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-purple-200'
                      ]"
                    >
                      <input
                        type="checkbox"
                        :checked="formData.services.includes(service)"
                        @change="handleServiceToggle(service)"
                        class="sr-only"
                      />
                      <span class="text-sm font-medium">{{ service }}</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                    Message / Query *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    v-model="formData.message"
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting || submitSuccess"
                  :class="[
                    'w-full py-4 rounded-xl font-semibold transition-all duration-300',
                    submitSuccess
                      ? 'bg-green-500 text-white'
                      : isSubmitting
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg'
                  ]"
                >
                  <span v-if="submitSuccess" class="inline-flex items-center">
                    <CheckCircle class="h-5 w-5 mr-2" />
                    Message Sent Successfully!
                  </span>
                  <span v-else-if="isSubmitting">Sending...</span>
                  <span v-else class="inline-flex items-center">
                    Send Message
                    <Send class="h-5 w-5 ml-2" />
                  </span>
                </button>

                <p class="text-center text-sm text-gray-600 mt-4">
                  We'll get back to you within 8 business hours
                </p>
              </form>
            </div>
          </div>

          <!-- Right Sidebar - 1 column -->
          <div class="lg:col-span-1 space-y-8">
            <!-- Quick Actions -->
            <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div class="space-y-3">
                <a
                  href="https://calendar.app.google/5rdLGhWiZpbBrPeS7"
                  target="_blank"
                  class="w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl hover:shadow-md transition-all"
                >
                  <span class="flex items-center">
                    <Calendar class="h-5 w-5 text-purple-600 mr-3" />
                    <span class="font-medium text-gray-700">Book Free Consultation</span>
                  </span>
                  <ChevronRight class="h-4 w-4 text-gray-400" />
                </a>
                <button class="w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl hover:shadow-md transition-all">
                  <span class="flex items-center">
                    <Users class="h-5 w-5 text-purple-600 mr-3" />
                    <span class="font-medium text-gray-700">View Our Team</span>
                  </span>
                  <ChevronRight class="h-4 w-4 text-gray-400" />
                </button>
                <button class="w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl hover:shadow-md transition-all">
                  <span class="flex items-center">
                    <Rocket class="h-5 w-5 text-purple-600 mr-3" />
                    <span class="font-medium text-gray-700">Start a Project</span>
                  </span>
                  <ChevronRight class="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>

            <!-- Social Links -->
            <div class="bg-white rounded-3xl shadow-lg p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
              <div class="space-y-3">
                <a
                  href="https://www.linkedin.com/company/acornglobus"
                  target="_blank"
                  class="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-all group"
                >
                  <span class="flex items-center">
                    <Linkedin class="h-5 w-5 text-purple-600 mr-3" />
                    <span class="font-medium text-gray-700">LinkedIn</span>
                  </span>
                  <ArrowRight class="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/acornglobus/?hl=en"
                  target="_blank"
                  class="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-all group"
                >
                  <span class="flex items-center">
                    <Instagram class="h-5 w-5 text-purple-600 mr-3" />
                    <span class="font-medium text-gray-700">@acornglobus</span>
                  </span>
                  <ArrowRight class="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <!-- Office Hours -->
            <div class="bg-white rounded-3xl shadow-lg p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">Monday - Friday</span>
                  <span class="font-semibold text-gray-900">9:00 AM - 6:00 PM IST</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Saturday</span>
                  <span class="font-semibold text-gray-900">10:00 AM - 4:00 PM IST</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Sunday</span>
                  <span class="font-semibold text-gray-900">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p class="text-lg text-gray-600">Quick answers to common questions</p>
        </div>

        <div class="space-y-6">
          <div v-for="(faq, idx) in faqs" :key="idx" class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
            <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-start">
              <Sparkles class="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
              {{ faq.question }}
            </h3>
            <p class="text-gray-600 ml-8">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-12 text-center">
          <MapPin class="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
          <p class="text-lg text-gray-600 mb-2">Nagpur, Maharashtra</p>
          <p class="text-gray-600 mb-8">India</p>
          <button class="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200">
            <Globe class="h-5 w-5 mr-2" />
            View on Map
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  ArrowRight, Mail, MapPin, Clock, Send, CheckCircle,
  Calendar, MessageSquare, Globe, Building, User, Phone,
  Linkedin, Instagram, ChevronRight, Sparkles, Users, Rocket
} from 'lucide-vue-next'
import axios from 'axios'

// Use the default layout
definePageMeta({
  layout: 'default'
})

// SEO Meta Tags
useSeoMeta({
  title: 'Contact Us - Acorn Globus | Get In Touch for Your Next Project',
  description: 'Ready to transform your ideas into reality? Contact Acorn Globus for software development, resource augmentation, and IT solutions. Free consultation available.',
  keywords: 'contact acorn globus, software development inquiry, IT consultation, project quote, business inquiry, tech partner',
  author: 'Acorn Globus',
  robots: 'index, follow',
  ogTitle: 'Contact Us - Acorn Globus | Get In Touch for Your Next Project',
  ogDescription: 'Ready to transform your ideas into reality? Contact Acorn Globus for software development, resource augmentation, and IT solutions. Free consultation available.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/contact',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact Us - Acorn Globus | Get In Touch for Your Next Project',
  twitterDescription: 'Ready to transform your ideas into reality? Contact Acorn Globus for software development, resource augmentation, and IT solutions.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

const formData = ref({
  fullName: '',
  email: '',
  country: '',
  company: '',
  services: [],
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const services = [
  'Software Development',
  'Staff Augmentation',
  'Dedicated Teams',
  'Design',
  'Software Outsourcing',
  'IT Consulting',
  'Cloud Solutions',
  'Support & Maintenance',
  'DevOps Services',
  'QA & Testing',
  'Mobile App Development',
  'Enterprise Solutions',
  'E-commerce Development',
  'Custom Software Solutions'
]

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Germany',
  'France',
  'India',
  'Australia',
  'Singapore',
  'Japan',
  'Other'
]

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'business@acornglobus.com',
    description: 'For business inquiries and partnerships'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'Nagpur, Maharashtra',
    description: 'India'
  },
  {
    icon: Clock,
    title: 'Response Time',
    details: 'Within 8 hours',
    description: 'Business hours response guarantee'
  }
]

const faqs = [
  {
    question: 'How quickly can we start a project?',
    answer: 'We can typically begin within 1-2 weeks after initial consultation, depending on project scope and resource availability.'
  },
  {
    question: 'What engagement models do you offer?',
    answer: 'We offer flexible engagement models including dedicated teams, fixed-price projects, and time & material arrangements.'
  },
  {
    question: 'Do you provide support after project completion?',
    answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally.'
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Absolutely! Our resource augmentation service is designed to seamlessly integrate with your existing workflows and team.'
  }
]

const handleServiceToggle = (service) => {
  const index = formData.value.services.indexOf(service)
  if (index > -1) {
    formData.value.services.splice(index, 1)
  } else {
    formData.value.services.push(service)
  }
}

const submissionUrl = 'https://app.formester.com/forms/23ef1589-ef44-4f4a-ac70-069e6aa29638/submissions.json'

const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    // Format data for submission
    const submissionData = {
      fullName: formData.value.fullName,
      email: formData.value.email,
      country: formData.value.country,
      company: formData.value.company,
      service: formData.value.services.join(', '), // Join multiple services
      message: formData.value.message
    }

    await axios.post(submissionUrl, submissionData)
    isSubmitting.value = false
    submitSuccess.value = true

    // Reset form after 3 seconds
    setTimeout(() => {
      submitSuccess.value = false
      formData.value = {
        fullName: '',
        email: '',
        country: '',
        company: '',
        services: [],
        message: ''
      }
    }, 3000)
  } catch (error) {
    console.error('Form submission error:', error)
    isSubmitting.value = false
    // You might want to show an error message here
    alert('Something went wrong! Please reach out to us at business@acornglobus.com')
  }
}
</script>