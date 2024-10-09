<template>
    <div class="bg-[#fafbff] wrapper my-4 md:my-8">
        <div class="container__wrapper flex flex-col gap-16 py-4 md:py-8">
            <h2 class="section__heading">
                {{ props.title }}
            </h2>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16">
                <img src="~/assets/images/people-working-office.png" alt="people working if office image" />
                <div class="flex flex-col gap-8">
                    <div v-for="row in props.rows" class="flex items-start gap-3">
                        <img src="~/assets/images/icons/check.svg" alt="check" />
                        <div>
                            <h3 class="text-xl font-bold">{{ row.title }}</h3>
                            <p class="mt-2">
                                {{ row.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
  import { defineProps } from 'vue';
    const props = defineProps({
      iconPath: String, // Define data type for each prop
      title: String,
      rows: Object,
    });
  </script>
  
  <style scoped></style>