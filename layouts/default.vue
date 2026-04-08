<template>
  <div>
    <V3Header />
    <main>
      <slot />
    </main>
    <V3Footer />
  </div>
</template>

<script setup>
// V3 layout with common header and footer
// Organization JSON-LD schema injected site-wide
useOrganizationSchema()
</script>