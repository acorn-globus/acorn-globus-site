<template>
  <div>
    <label class="block text-white mb-2">{{ label }} <span class="text-red-500">*</span></label>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      rows="4"
      class="w-full px-4 py-3 rounded-lg bg-navy-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
      :placeholder="placeholder"
      :required="required"
    ></textarea>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])
</script>