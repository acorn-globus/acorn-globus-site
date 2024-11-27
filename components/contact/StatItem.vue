<template>
  <div class="flex items-center gap-6">
    <div class="text-yellow-400">
      <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path :d="icon"/>
      </svg>
    </div>
    <div>
      <h3 class="text-2xl font-bold text-white mb-2">{{ title }}</h3>
      <p class="text-gray-300">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>