<template>
  <div class="min-h-screen bg-primary p-4 md:p-6">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8 items-start">
      <!-- Contact Form Card -->
      <div class="lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-4">
            <div class="bg-gray-100 p-2 rounded-lg hidden md:block">
              <img
                src="~/assets/images/acorn-watermark.png"
                alt="Logo"
                class="w-10 h-10"
              />
            </div>

            <div>
              <h1 class="text-primary text-2xl font-bold">Get In Touch</h1>
              <p class="text-gray-600 text-sm">
                Our team will get back to you within 8 business hours or less.
              </p>
            </div>
          </div>

          <div class="gap-4 hidden md:flex">
            <img
              src="~/assets/images/same-day-response.svg"
              alt="Same Day Response"
              class="h-16"
            />
            <img
              src="~/assets/images/confidential.svg"
              alt="NDA"
              class="h-16"
            />
          </div>
        </div>

        <!-- Contact Options -->
        <div class="flex flex-wrap gap-6 mb-8">
          <button
            class="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <PhoneIcon class="w-4 h-4" />
            <span class="text-sm underline">Book A Call</span>
          </button>

          <button
            class="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <MessageCircleIcon class="w-4 h-4" />
            <span class="text-sm underline">WhatsApp</span>
          </button>

          <button
            class="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <MailIcon class="w-4 h-4" />
            <span class="text-sm underline">Email us</span>
          </button>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block">
                <span class="text-gray-700">
                  Full Name
                  <span class="text-red-500">*</span>
                </span>

                <input
                  v-model="form.fullName"
                  type="text"
                  class="mt-1 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  :class="{
                    'placeholder:text-red-400 border-red-200 focus:border-red-500 hover:border-red-300':
                      errors.fullName,
                  }"
                  placeholder="Enter Your Full Name"
                />
              </label>

              <p v-if="errors.fullName" class="mt-1 text-sm text-red-500">
                {{ errors.fullName }}
              </p>
            </div>

            <div>
              <label class="block">
                <span class="text-gray-700">
                  Email Address
                  <span class="text-red-500">*</span>
                </span>

                <input
                  v-model="form.email"
                  type="email"
                  class="mt-1 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  :class="{
                    'placeholder:text-red-400 border-red-200 focus:border-red-500 hover:border-red-300':
                      errors.email,
                  }"
                  placeholder="Enter Your Email Address"
                />
              </label>

              <p v-if="errors.email" class="mt-1 text-sm text-red-500">
                {{ errors.email }}
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block">
                <span class="text-gray-700">
                  Country
                  <span class="text-red-500">*</span>
                </span>

                <input
                  v-model="form.country"
                  type="text"
                  class="mt-1 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  :class="{
                    'placeholder:text-red-400 border-red-200 focus:border-red-500 hover:border-red-300':
                      errors.country,
                  }"
                  placeholder="Enter Your Country"
                />
              </label>

              <p v-if="errors.country" class="mt-1 text-sm text-red-500">
                Please Fill Country
              </p>
            </div>

            <div>
              <label class="block">
                <span class="text-gray-700">
                  Company Name
                  <span class="text-red-500">*</span>
                </span>

                <input
                  v-model="form.company"
                  type="text"
                  class="mt-1 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  :class="{
                    'placeholder:text-red-400 border-red-200 focus:border-red-500 hover:border-red-300':
                      errors.company,
                  }"
                  placeholder="Enter Your Company Name"
                />
              </label>

              <p v-if="errors.company" class="mt-1 text-sm text-red-500">
                {{ errors.company }}
              </p>
            </div>
          </div>

          <div>
            <label class="block">
              <span class="text-gray-700">
                Select a Service
                <span class="text-red-500">*</span>
              </span>

              <div class="relative">
                <select
                  v-model="form.service"
                  class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                >
                  <option value="">Please select a service</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="consulting">Consulting</option>
                  <option value="design-and-development">
                    Design & Development
                  </option>
                </select>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="currentColor"
                  class="h-5 w-5 ml-1 absolute top-3.5 right-2.5 text-slate-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </div>
            </label>

            <p v-if="errors.service" class="mt-1 text-sm text-red-500">
              {{ errors.service }}
            </p>
          </div>

          <div>
            <label class="block">
              <span class="text-gray-700">
                How Can We Help?
                <span class="text-red-500">*</span>
              </span>

              <textarea
                v-model="form.message"
                rows="4"
                class="mt-1 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              />
            </label>

            <p v-if="errors.message" class="mt-1 text-sm text-red-500">
              {{ errors.message }}
            </p>
          </div>

          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-[#75b935] text-white px-6 py-3 rounded-lg hover:bg-[#669e2d] transition-colors"
            >
              Send Your Query
            </button>
          </div>
        </form>
      </div>

      <div class="lg:col-span-2 text-white space-y-12 pt-8">
        <h2 class="text-xl font-semibold mb-8">
          Trusted by startups and Fortune 500 companies
        </h2>

        <div class="space-y-8">
          <div class="flex items-center gap-4">
            <TrophyIcon class="w-12 h-12 text-white/80" />
            <div>
              <h3 class="text-xl font-semibold">5+ years of experience</h3>
              <p class="text-white/60">
                We can handle projects of all complexities.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <AwardIcon class="w-12 h-12 text-white/80" />
            <div>
              <h3 class="text-xl font-semibold">25+ satisfied customers</h3>
              <p class="text-white/60">
                Startups to Fortune 500, we have worked with all.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <UsersIcon class="w-12 h-12 text-white/80" />
            <div>
              <h3 class="text-xl font-semibold">20+ in-house team</h3>
              <p class="text-white/60">
                Top 1% industry talent to ensure your digital success.
              </p>
            </div>
          </div>
        </div>

        <!-- Clients -->
        <div class="grid grid-cols-3 gap-8 mt-12 opacity-60">
          <div
            v-for="client in clients"
            :key="client.id"
            class="flex items-center justify-center"
          >
            <img
              :src="client.img"
              :alt="client.name"
              class="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  PhoneIcon,
  MessageCircleIcon,
  MailIcon,
  TrophyIcon,
  AwardIcon,
  UsersIcon,
} from 'lucide-vue-next';

const clients = ref([]);

const form = ref({
  fullName: '',
  email: '',
  country: '',
  company: '',
  service: '',
  message: '',
});

const errors = ref({});

const handleSubmit = () => {
  errors.value = {};

  if (!form.value.fullName) errors.value.fullName = 'Please fill full name';
  if (!form.value.email) errors.value.email = 'Please fill email';
  if (!form.value.country) errors.value.country = 'Please fill country name';
  if (!form.value.company) errors.value.company = 'Please fill company name';
  if (!form.value.service) errors.value.service = 'Please select a service';
  if (!form.value.message) errors.value.message = 'Please provide a message';

  if (Object.keys(errors.value).length === 0) {
    // Submit form
    console.log('Form submitted:', form.value);
  }
};
</script>
