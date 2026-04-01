<script setup>
// 301 redirect: old URL /services/long-term-projects -> new URL /services/full-project-delivery
definePageMeta({
  layout: false
})

await navigateTo('/services/full-project-delivery', { redirectCode: 301 })
</script>
