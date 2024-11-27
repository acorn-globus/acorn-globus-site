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
  title: "Software Development Agency | Acorn Globus",
  meta: [
    {
      name: "description",
      content:
        "We do more than just develop software for our partners - we help build their businesses. Fortune 500 experience. Get results faster!",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.acronglobus.com" }],
});
</script>

<style scoped></style>
