<template>
  <div class="min-h-screen bg-white"><!-- Hero Section -->
    <section class="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-6">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Legal Information
          </span>
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Privacy
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Policy
            </span>
          </h1>
          <p class="text-xl text-gray-600">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gray-50 rounded-2xl p-8 mb-8">
          <p class="text-gray-600 text-sm">
            Last updated: January 1, 2025
          </p>
        </div>

        <div class="prose prose-lg max-w-none">
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <Shield class="h-5 w-5 text-white" />
              </div>
              Introduction
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed">
              At Acorn Globus, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <Database class="h-5 w-5 text-white" />
              </div>
              Information We Collect
            </h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">We collect information that you provide directly to us, including:</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-blue-50 rounded-lg p-6">
                <h4 class="font-semibold text-gray-900 mb-3">Contact Information</h4>
                <ul class="text-gray-600 space-y-2">
                  <li class="flex items-center"><Check class="h-4 w-4 text-blue-600 mr-2" />Name and email address</li>
                  <li class="flex items-center"><Check class="h-4 w-4 text-blue-600 mr-2" />Phone number</li>
                  <li class="flex items-center"><Check class="h-4 w-4 text-blue-600 mr-2" />Company information</li>
                </ul>
              </div>
              <div class="bg-indigo-50 rounded-lg p-6">
                <h4 class="font-semibold text-gray-900 mb-3">Project Information</h4>
                <ul class="text-gray-600 space-y-2">
                  <li class="flex items-center"><Check class="h-4 w-4 text-indigo-600 mr-2" />Project requirements</li>
                  <li class="flex items-center"><Check class="h-4 w-4 text-indigo-600 mr-2" />Technical specifications</li>
                  <li class="flex items-center"><Check class="h-4 w-4 text-indigo-600 mr-2" />Communication preferences</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <Settings class="h-5 w-5 text-white" />
              </div>
              How We Use Your Information
            </h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">We use the information we collect to:</p>
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check class="h-3 w-3 text-white" />
                    </div>
                    <span class="text-gray-700">Provide and maintain our services</span>
                  </div>
                  <div class="flex items-start">
                    <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check class="h-3 w-3 text-white" />
                    </div>
                    <span class="text-gray-700">Respond to your inquiries and requests</span>
                  </div>
                  <div class="flex items-start">
                    <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check class="h-3 w-3 text-white" />
                    </div>
                    <span class="text-gray-700">Send you updates and communications</span>
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check class="h-3 w-3 text-white" />
                    </div>
                    <span class="text-gray-700">Improve our website and services</span>
                  </div>
                  <div class="flex items-start">
                    <div class="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check class="h-3 w-3 text-white" />
                    </div>
                    <span class="text-gray-700">Comply with legal obligations</span>
                  </div>
                  <div class="flex items-start">
                    <div class="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check class="h-3 w-3 text-white" />
                    </div>
                    <span class="text-gray-700">Analyze usage patterns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <Users class="h-5 w-5 text-white" />
              </div>
              Information Sharing
            </h2>
            <div class="bg-red-50 border-l-4 border-red-400 rounded-lg p-6">
              <p class="text-gray-700 text-lg leading-relaxed">
                <strong class="text-red-700">We do not sell, trade, or rent your personal information to third parties.</strong>
                We may share your information with trusted partners who assist us in operating our website and conducting our business,
                provided they agree to keep this information confidential.
              </p>
            </div>
          </div>

          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <Lock class="h-5 w-5 text-white" />
              </div>
              Security
            </h2>
            <div class="bg-green-50 rounded-xl p-8">
              <p class="text-gray-700 text-lg leading-relaxed">
                We implement appropriate technical and organizational measures to maintain the security of your
                personal information and protect it against unauthorized or unlawful processing and accidental loss,
                destruction, or damage. Our security measures include encryption, secure servers, and regular security audits.
              </p>
            </div>
          </div>

          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <Mail class="h-5 w-5 text-white" />
              </div>
              Contact Us
            </h2>
            <div class="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-8">
              <p class="text-gray-700 text-lg leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Mail class="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <a
                    href="mailto:business@acornglobus.com"
                    class="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
                  >
                    business@acornglobus.com
                  </a>
                  <p class="text-gray-600 text-sm">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Shield, Database, Settings, Users, Lock, Mail, Check } from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Privacy Policy - Acorn Globus',
  description: 'Learn how Acorn Globus collects, uses, and protects your personal information. Our comprehensive privacy policy ensures transparency and security.',
})
</script>