<template>
  <div class="bg-navy-700 p-8 rounded-2xl">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h1>
    <p class="text-xl text-gray-300 mb-8">Our team will get back to you within 8 business hours or less.</p>

    <div class="mb-6">
      <a href="https://calendar.app.google/5rdLGhWiZpbBrPeS7" class="inline-flex items-center text-yellow-400 hover:text-yellow-500 transition-colors">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
        Book a Free Consultation
      </a>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid md:grid-cols-2 gap-6">
        <FormInput
          v-model="form.fullName"
          label="Full Name"
          type="text"
          placeholder="Enter Your Full Name"
          required
        />
        <FormInput
          v-model="form.email"
          label="Email Address"
          type="email"
          placeholder="Enter Your Email Address"
          required
        />
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <FormInput
          v-model="form.country"
          label="Country"
          type="text"
          placeholder="Enter Your Country"
          required
        />
        <FormInput
          v-model="form.company"
          label="Company Name"
          type="text"
          placeholder="Enter Your Company Name"
          required
        />
      </div>

      <FormSelect
        v-model="form.service"
        label="Select a Service"
        :options="serviceOptions"
        required
      />

      <FormTextarea
        v-model="form.message"
        label="How Can We Help?"
        placeholder="Tell us about your project..."
        required
      />

      <button 
        type="submit"
        class="w-full bg-yellow-400 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
      >
        Send Your Query
      </button>
    </form>

    <Notivue v-slot="item">
        <Notification :item="item" />
      </Notivue>
  </div>
</template>

<script setup>

import { Notivue, Notification, push } from 'notivue';
import axios from 'axios';

const submissionUrl =
  'https://app.formester.com/forms/23ef1589-ef44-4f4a-ac70-069e6aa29638/submissions.json';

const form = ref({
  fullName: '',
  email: '',
  country: '',
  company: '',
  service: '',
  message: ''
})

const serviceOptions = [
  { label: 'Software Development', value: 'Software-Development' },
  { label: 'Staff Augmentation', value: 'Staff-Augmentation' },
  { label: 'Dedicated Teams', value: 'Dedicated-Teams' },
  { label: 'Design', value: 'Design' },
  { label: 'Software Outsourcing', value: 'Software-Outsourcing' },
  { label: 'IT Consulting', value: 'IT-Consulting' },
  { label: 'Cloud Solutions', value: 'Cloud-Solutions' },
  { label: 'Support & Maintenance', value: 'Support-and-Maintenance' },
  { label: 'DevOps Services', value: 'DevOps-Services' },
  { label: 'QA & Testing Services', value: 'QA-and-Testing' },
  { label: 'Mobile App Development', value: 'Mobile-App-Development' },
  { label: 'Enterprise Solutions', value: 'Enterprise-Solutions' },
  { label: 'E-commerce Development', value: 'Ecommerce-Development' },
  { label: 'Custom Software Solutions', value: 'Custom-Software-Solutions' }
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