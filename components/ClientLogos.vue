<template>
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p class="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
        Trusted by teams building real products
      </p>
      <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        <a
          v-for="client in clients"
          :key="client.name"
          :href="client.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-center"
          :title="client.name"
        >
          <img
            v-if="client.logo"
            :src="client.logo"
            :alt="`${client.name} logo`"
            class="h-8 md:h-10 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          />
          <span
            v-else
            class="text-lg font-bold text-gray-300 group-hover:text-gray-700 transition-colors duration-300"
          >
            {{ client.name }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import maypleLogo from '~/assets/images/companies/mayple.png'
import eitossLogo from '~/assets/images/companies/cayzen.png'
import rumieLogo from '~/assets/images/companies/rumie.png'
import formesterLogo from '~/assets/images/companies/formester.png'

const clients = [
  {
    name: 'PerformLine',
    url: 'https://performline.com',
    logo: null
  },
  {
    name: 'Mayple',
    url: 'https://www.mayple.com',
    logo: maypleLogo
  },
  {
    name: 'Viewber',
    url: 'https://www.viewber.co.uk',
    logo: null
  },
  {
    name: 'Eitoss',
    url: 'https://eitoss.com',
    logo: eitossLogo
  },
  {
    name: 'Rumie',
    url: 'https://about.rumie.org',
    logo: rumieLogo
  },
  {
    name: 'Formester',
    url: 'https://formester.com',
    logo: formesterLogo
  }
]
</script>
