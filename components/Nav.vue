<template>
  <nav class="p-6 transition-all relative z-50">
    <div class="container__wrapper flex items-center justify-between flex-wrap">
      <div class="flex items-center flex-shrink-0 text-white mr-8">
        <NuxtLink to="/" id="logo" c lass="logo">
          <img
            src="@/assets/images/acorn-globus-logo.svg"
            alt="Company Logo"
            width="150px"
          />
        </NuxtLink>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center"
          @click="navMobileVisible = !navMobileVisible"
        >
          <img
            src="~/assets/images/icons/menu.svg"
            alt="mobile navigation toggle"
            class="h-7 w-7"
          />
        </button>
      </div>
      <div
        class="w-full lg:flex lg:items-center lg:w-auto"
        :class="navMobileVisible ? 'block' : 'hidden'"
      >
        <div class="text-md mt-6 lg:flex-grow lg:mt-0">
          <nuxt-link
            to="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-8"
          >
            Home
          </nuxt-link>
          <nuxt-link
            to="/#testimonials"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-8"
          >
            Testimonials
          </nuxt-link>
          <nuxt-link
            to="/services"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-8"
          >
            Services
          </nuxt-link>
          <nuxt-link
            to="/#projects"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-8"
          >
            Projects
          </nuxt-link>
          <nuxt-link
            to="/#expertise"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-8"
          >
            Expertise
          </nuxt-link>
          <nuxt-link
            to="/blog"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-8"
          >
            Blog
          </nuxt-link>
          <nuxt-link
            to="/contact"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-8"
          >
            Contact
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navMobileVisible = ref(false);
</script>

<style scoped></style>
