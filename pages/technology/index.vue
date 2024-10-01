<template>
  <TechnologyHero />
  <Testimonials />
  <DevelopmentServices />
  <Technology.Benefits />
  <!-- <Technology.OtherRelatedServices /> -->
  <div class="bg-[#fafbff] wrapper my-4 md:my-8">
    <div class="container__wrapper flex flex-col gap-16 py-4 md:py-8">
      <h2 class="section__heading">
        Expedite your Business Goals with the Best ReactJS Web Development
        Company
      </h2>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16">
        <img
          src="~/assets/images/people-working-office.png"
          alt="people working if office image"
        />
        <div class="flex flex-col gap-8">
          <div class="flex items-start gap-3">
            <img src="~/assets/images/icons/check.svg" alt="check" />
            <div>
              <h3 class="text-xl font-bold">Certified ReactJS Professionals</h3>
              <p class="mt-2">
                Our team consists of highly skilled and certified ReactJS
                developers who possess in-depth knowledge of the framework and
                its best practices. They stay up-to-date with the latest
                advancements in ReactJS to ensure your project leverages the
                most cutting-edge features and delivers exceptional performance.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <img src="~/assets/images/icons/check.svg" alt="check" />
            <div>
              <h3 class="text-xl font-bold">
                Experience with Various Technologies and Frameworks
              </h3>
              <p class="mt-2">
                Building a successful web application often involves integrating
                various technologies and frameworks. Our developers have a broad
                range of expertise that extends beyond ReactJS. This allows us
                to integrate your ReactJS application with other essential tools
                and frameworks, ensuring a cohesive and feature-rich final
                product.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <img src="~/assets/images/icons/check.svg" alt="check" />
            <div>
              <h3 class="text-xl font-bold">Proven Track Record of Success</h3>
              <p class="mt-2">
                We have a wealth of experience delivering successful ReactJS
                projects for clients across diverse industries. Our portfolio
                showcases our ability to translate complex requirements into
                user-friendly and high-performing web applications. We can
                leverage our experience to ensure your project runs smoothly and
                meets your specific business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Expertise />
</template>

<script setup>
import DevelopmentServices from '~/components/services/DevelopmentServices.vue';

useHead({
  title: 'Best ReactJS Development Company | Acorn Globus',
  meta: [
    {
      name: 'description',
      content:
        'Looking for the Best ReactJS development company? We offer end-to-end reactjs services, from concept to deployment, ensuring optimal performance.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://www.acronglobus.com/technology' }],
});
</script>

<style scoped></style>
