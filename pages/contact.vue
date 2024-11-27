<template>
  <main class="min-h-screen bg-navy-900">
    <div class="container mx-auto px-4 py-20">
      <div class="grid lg:grid-cols-2 gap-16">
        <ContactForm />
        <Contact.StatsSection />
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Contact Us - Let\'s Build Something Amazing | Acorn Globus',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Acorn Globus for your next digital project. Our team of experts is ready to help bring your vision to life with innovative solutions.'
    },
    {
      name: 'keywords',
      content: 'contact Acorn Globus, software development services, digital solutions, project consultation, tech partnership'
    },
    {
      property: 'og:title',
      content: 'Contact Us - Let\'s Build Something Amazing | Acorn Globus'
    },
    {
      property: 'og:description',
      content: 'Ready to start your project? Contact Acorn Globus today and let\'s discuss how we can help bring your vision to life.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://acornglobus.com/contact'
    }
  ]
})
</script>
