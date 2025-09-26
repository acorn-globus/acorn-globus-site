<template>
  <main>
    <section class="py-20 text-center text-white">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Crafting Digital<br>Experiences with Passion<br>and Innovation
        </h1>
        <p class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
          We don't just build software. We create transformative solutions that empower businesses and delight users.
        </p>
        <div class="flex justify-center gap-4">
          <NuxtLink 
            to="/contact"
            class="bg-yellow-400 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            Start Your Journey
          </NuxtLink>
          <NuxtLink 
            to="/projects"
            class="bg-white text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Our Creations
          </NuxtLink>
        </div>
      </div>
    </section>

    <FormesterSection />
    <EitossSection />
    <PlatformsSection />
    <ServicesSection />
    <ReviewsSection />
  </main>
</template>

<script setup>
useHead({
  title: 'Acorn Globus - Digital Experiences with Passion and Innovation',
  meta: [
    {
      name: 'description',
      content: 'Acorn Globus is a software development company specializing in building transformative digital solutions. From innovative SaaS platforms to enterprise solutions, we help businesses thrive in the digital age.'
    },
    {
      name: 'keywords',
      content: 'software development, web development, mobile apps, digital transformation, SaaS, enterprise solutions, React, Vue.js, Ruby on Rails, .NET'
    },
    // Open Graph / Social Media
    {
      property: 'og:title',
      content: 'Acorn Globus - Digital Experiences with Passion and Innovation'
    },
    {
      property: 'og:description',
      content: 'Building transformative digital solutions that empower businesses and delight users. Expert software development services for web, mobile, and enterprise applications.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    // Twitter
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Acorn Globus - Digital Experiences with Passion and Innovation'
    },
    {
      name: 'twitter:description',
      content: 'Building transformative digital solutions that empower businesses and delight users. Expert software development services for web, mobile, and enterprise applications.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://acornglobus.com'
    }
  ]
})
</script>

<style scoped></style>
