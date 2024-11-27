<template>
  <main class="min-h-screen bg-navy-900 text-white">
    <!-- Hero Section -->
    <section class="py-20 relative overflow-hidden">
      <!-- Floating Icons -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-20 left-[10%] animate-float">
          <svg class="w-8 h-8 text-yellow-400/20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
          </svg>
        </div>
        <div class="absolute top-40 right-[15%] animate-float-delayed">
          <svg class="w-12 h-12 text-yellow-400/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
        <div class="absolute bottom-20 left-[20%] animate-float">
          <svg class="w-10 h-10 text-yellow-400/20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
        <div class="absolute bottom-40 right-[25%] animate-float-delayed">
          <svg class="w-6 h-6 text-yellow-400/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6z" />
          </svg>
        </div>
      </div>

      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-8">
            Transform How You<br>Create & Manage PDFs
          </h1>
          <p class="text-xl text-gray-300 mb-12">
            No-code PDF automation platform coming soon
          </p>
          <a href="#early-access"
            class="inline-block bg-yellow-400 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
            Get Early Access
          </a>
          <div class="mt-12 flex items-center justify-center gap-2">
            <div class="flex -space-x-2">
              <img v-for="i in 5" :key="i" class="w-8 h-8 rounded-full border-2 border-white"
                :src="`https://i.pravatar.cc/150?img=${i}`" alt="User avatar" />
            </div>
            <p class="text-sm text-white-600 font-medium ml-2">
              <span class="font-semibold text-white-900">90+ users</span> have already shown interest.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- What Brings You Here Section -->
    <section class="py-20 bg-navy-800">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-6">What brings you here today?</h2>
        <p class="text-xl text-gray-300 text-center mb-16">
          This information will help us recommend the perfect PDF automation solution for your needs
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Manual PDF Creation -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4']">
              <component :is="FileText" :class="['w-12 h-12 text-yellow-400']" />
            </div>
            <h3 class="text-xl font-bold mb-4">Manual PDF Creation</h3>
            <p class="text-gray-300">You are here because creating PDFs takes too much of your time</p>
          </div>

          <!-- Complex Tools -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4']">
              <component :is="Clock" :class="['w-12 h-12 text-yellow-400']" />
            </div>
            <h3 class="text-xl font-bold mb-4">Complex Tools</h3>
            <p class="text-gray-300">You need something simpler than your current PDF solution</p>
          </div>

          <!-- Limited Templates -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4']">
              <component :is="Layout" :class="['w-12 h-12 text-yellow-400']" />
            </div>
            <h3 class="text-xl font-bold mb-4">Limited Templates</h3>
            <p class="text-gray-300">You want more flexibility in how your documents look</p>
          </div>

          <!-- Manual Data Entry -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4']">
              <component :is="Copy" :class="['w-12 h-12 text-yellow-400']" />
            </div>
            <h3 class="text-xl font-bold mb-4">Manual Data Entry</h3>
            <p class="text-gray-300">You are tired of copy-pasting information into PDFs</p>
          </div>

          <!-- Format Issues -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4']">
              <component :is="Settings" :class="['w-12 h-12 text-yellow-400']" />
            </div>
            <h3 class="text-xl font-bold mb-4">Format Issues</h3>
            <p class="text-gray-300">You want your PDFs to look professional every time</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-6">Powerful Features for Your PDF Needs</h2>
        <p class="text-xl text-gray-300 text-center mb-16">
          Our platform offers a comprehensive set of tools to streamline your PDF workflow
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- No-Code PDF Builder -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4']">
              <component :is="Blocks" :class="['w-12 h-12 text-yellow-400']" />
            </div>
            <h3 class="text-xl font-bold mb-4">No-Code PDF Builder</h3>
            <p class="text-gray-300">Create professional PDFs without any coding skills</p>
          </div>

          <!-- Template Library -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4']">
              <component :is="FileStack" :class="['w-12 h-12 text-yellow-400']" />
            </div>
            <h3 class="text-xl font-bold mb-4">Template Library</h3>
            <p class="text-gray-300">Access a wide range of pre-built, customizable templates</p>
          </div>

          <!-- Dynamic Data Mapping -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4']">
              <component :is="Network" :class="['w-12 h-12 text-yellow-400']" />
            </div>
            <h3 class="text-xl font-bold mb-4">Dynamic Data Mapping</h3>
            <p class="text-gray-300">Easily connect your data sources to PDF fields</p>
          </div>

          <!-- Bulk Generation -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4']">
              <component :is="Files" :class="['w-12 h-12 text-yellow-400']" />
            </div>
            <h3 class="text-xl font-bold mb-4">Bulk Generation</h3>
            <p class="text-gray-300">Create multiple PDFs at once, saving you time and effort</p>
          </div>

          <!-- Platform Integration -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4']">
              <component :is="PuzzleIcon" :class="['w-12 h-12 text-yellow-400']" />
            </div>
            <h3 class="text-xl font-bold mb-4">Platform Integration</h3>
            <p class="text-gray-300">Seamlessly connect with your existing tools and workflows</p>
          </div>

          <!-- API Access -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4']">
              <component :is="Code" :class="['w-12 h-12 text-yellow-400']" />
            </div>
            <h3 class="text-xl font-bold mb-4">API Access</h3>
            <p class="text-gray-300">Automate PDF creation programmatically for advanced users</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Perfect for Every Team -->
    <section class="py-20 bg-navy-800">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-6">Perfect for Every Team</h2>
        <p class="text-xl text-gray-300 text-center mb-16">
          Our PDF automation platform caters to a wide range of industries and use cases
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- HR Teams -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">HR Teams</h3>
            <p class="text-gray-300">Streamline your hiring process with automated offer letters and contracts</p>
          </div>

          <!-- Education -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Education</h3>
            <p class="text-gray-300">Easily create and manage certificates, transcripts, and report cards</p>
          </div>

          <!-- Developers -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Developers</h3>
            <p class="text-gray-300">Integrate powerful PDF tools directly into your applications</p>
          </div>

          <!-- Business Teams -->
          <div class="bg-navy-700 p-8 rounded-2xl hover:bg-navy-600 transition-colors">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Business Teams</h3>
            <p class="text-gray-300">Generate professional proposals and reports with ease</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Early Access Form -->
    <section id="early-access" class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-6">Get Early Access</h2>
          <p class="text-xl text-gray-300 text-center mb-12">
            Be among the first to experience our PDF automation platform
          </p>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <FormInput v-model="form.name" label="Full Name" type="text" placeholder="Enter your full name" required />

            <FormInput v-model="form.email" label="Email Address" type="email" placeholder="Enter your email address"
              required />

            <FormSelect v-model="form.industry" label="Industry" :options="industryOptions" required />

            <div>
              <label class="block text-white mb-2">Most Used Features</label>
              <div class="space-y-2">
                <label class="flex items-center gap-2 text-gray-300">
                  <input type="checkbox" v-model="form.features" value="builder" class="rounded">
                  No-code builder
                </label>
                <label class="flex items-center gap-2 text-gray-300">
                  <input type="checkbox" v-model="form.features" value="templates" class="rounded">
                  Template library
                </label>
                <label class="flex items-center gap-2 text-gray-300">
                  <input type="checkbox" v-model="form.features" value="data-mapping" class="rounded">
                  Data Mapping
                </label>
                <label class="flex items-center gap-2 text-gray-300">
                  <input type="checkbox" v-model="form.features" value="bulk-generation" class="rounded">
                  Bulk Generation
                </label>
                <label class="flex items-center gap-2 text-gray-300">
                  <input type="checkbox" v-model="form.features" value="api" class="rounded">
                  API Access
                </label>
              </div>
            </div>


            <FormTextarea v-model="form.query" label="How can we help?"
              placeholder="Tell us about your PDF automation needs..." required />


            <div class="mt-12 flex items-center justify-center gap-2">
              <div class="flex -space-x-2">
                <img v-for="i in 5" :key="i" class="w-8 h-8 rounded-full border-2 border-white"
                  :src="`https://i.pravatar.cc/150?img=${i}`" alt="User avatar" />
              </div>
              <p class="text-sm text-white-600 font-medium ml-2">
                <span class="font-semibold text-white-900">90+ users</span> have already shown interest.
              </p>
            </div>

            <button type="submit"
              class="w-full bg-yellow-400 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              Request Early Access
            </button>
          </form>

          <Notivue v-slot="item">
            <Notification :item="item" />
          </Notivue>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { FileText, Settings, Layout, Copy, Clock, FileStack, Network, PuzzleIcon, Code, Blocks, Files } from 'lucide-vue-next';
import FormInput from '../components/form/FormInput.vue'
import FormSelect from '../components/form/FormSelect.vue'
import FormTextarea from '../components/form/FormTextarea.vue'
import { Notivue, Notification, push } from 'notivue';
import axios from 'axios';

const submissionUrl =
  'https://app.formester.com/forms/19891d49-d1c6-4d82-bc26-f2ccc7ff34ae/submissions.json';

const form = ref({
  name: '',
  email: '',
  industry: '',
  features: [],
  query: ''
})

const industryOptions = [
  { value: '', label: 'Select your industry' },
  { value: 'technology', label: 'Technology' },
  { value: 'finance', label: 'Finance' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'retail', label: 'Retail' },
  { value: 'other', label: 'Other' }

]

const handleSubmit = async () => {
  console.log('Form submitted:', form.value)

  try {
    await axios.post(submissionUrl, form.value);
    push.success('Form Submitted Successfully! We will get back to you soon.');
  } catch (error) {
    console.error(error);
    push.error(
      'Something went wrong! Please reach out to us at business@acornglobus.com'
    );
  }

}
</script>

<style>
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>