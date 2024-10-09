<template>
    <section id="benefits" class="wrapper">
      <div class="container__wrapper flex flex-col gap-8 md:gap-16">
        <h2 class="section__heading">{{ props.title }}</h2>
        <h4>{{ props.subTitle }}</h4>
        <div class="flex flex-col gap-4 lg:flex-row xl:gap-8">
          {{ props.iconPath }}
          <img
            v-show="props.iconPath != null"
            :src="props.iconPath"
            alt="Content"
            class="lg:order-last"
          />
          <div class="flex flex-col gap-4">
            <Views.Accordion.Row
              v-for="accordion in props.accordions"
              :key="accordion.id"
              v-bind="accordion"
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
    const props = defineProps({
      iconPath: String, // Define data type for each prop
      title: String,
      subTitle: String,
      accordions: Object,
    });
  </script>
  
  <style scoped></style>
  