<template>
    <section id="development-services" class="wrapper md:mb-8">
      <div
        class="container__wrapper flex flex-col gap-10 lg:flex-row lg:gap-24 text-center lg:text-start"
      >
        <div class="lg:w-1/2">
          <h2 class="section__heading mx-auto max-w-lg sticky top-8 left-0">
            {{ props.title }}
          </h2>
          <h4 class="mx-auto max-w-lg sticky left-0">
            {{ props.subTitle }}
          </h4>
          <!-- <h4>{{ props.subTitle }}</h4> -->
        </div>
        <div class="flex flex-col gap-8 lg:w-1/2">
          <Views.Sticky.Row
            v-for="card in props.services"
            :key="card.title"
            v-bind="card"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
      title: String,
      subTitle: String,
      services: Object,
    });
  </script>
  
  <style scoped></style>
  