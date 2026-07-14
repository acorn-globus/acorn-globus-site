<template>
  <div class="error-page">
    <div class="error-inner">
      <p class="error-code">{{ error?.statusCode || 404 }}</p>
      <h1 class="error-title">
        {{ isNotFound ? 'This page took a different path.' : 'Something went wrong.' }}
      </h1>
      <p class="error-message">
        {{ isNotFound
          ? "The page you're looking for doesn't exist or may have moved. Let's get you back on track."
          : "An unexpected error occurred on our end. Please try again, or head back home." }}
      </p>

      <div class="error-actions">
        <button class="btn btn-primary" @click="goHome">Back to home</button>
        <NuxtLink to="/contact/" class="btn btn-ghost" @click="clearError">Talk to us</NuxtLink>
      </div>

      <div class="error-links">
        <span class="error-links-label">Popular pages</span>
        <ul>
          <li v-for="link in quickLinks" :key="link.to">
            <NuxtLink :to="link.to" @click="clearError">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// Custom Nuxt error page (error.vue at project root).
// Renders outside the default layout, so it is intentionally self-contained
// and on-brand, with clear routes back into the site.
const props = defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
})

const isNotFound = computed(() => (props.error?.statusCode || 404) === 404)

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services/', label: 'Services' },
  { to: '/how-we-work/', label: 'How We Work' },
  { to: '/portfolio/', label: 'Portfolio' },
  { to: '/blog/', label: 'Blog' },
]

// clearError resets Nuxt's error state; pass redirect for the primary CTA.
const goHome = () => clearError({ redirect: '/' })

useHead({
  title: isNotFound.value ? 'Page not found | Acorn Globus' : 'Error | Acorn Globus',
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: radial-gradient(circle at 50% 0%, #f0f4ff 0%, #f8f9fa 60%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #191c1d;
}

.error-inner {
  max-width: 640px;
  width: 100%;
  text-align: center;
}

.error-code {
  font-size: clamp(4rem, 14vw, 8rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #0058bd;
  margin: 0;
}

.error-title {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0.5rem 0 0.75rem;
}

.error-message {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #5f6368;
  margin: 0 auto 2rem;
  max-width: 480px;
}

.error-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
}

.btn-primary {
  background: #0058bd;
  color: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 88, 189, 0.25);
}

.btn-primary:hover {
  background: #2771df;
  transform: translateY(-1px);
  box-shadow: 0 8px 32px rgba(0, 88, 189, 0.35);
}

.btn-ghost {
  background: transparent;
  color: #0058bd;
  border-color: #c2c6d5;
}

.btn-ghost:hover {
  background: #f0f4ff;
}

.error-links-label {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #80868b;
  margin-bottom: 0.75rem;
}

.error-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  justify-content: center;
}

.error-links a {
  color: #424753;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.error-links a:hover {
  color: #0058bd;
  border-bottom-color: #0058bd;
}
</style>
