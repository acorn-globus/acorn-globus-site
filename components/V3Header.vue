<template>
  <nav
    :class="['nav-header', { 'nav-scrolled': isScrolled }]"
  >
    <div class="nav-inner">
      <NuxtLink to="/" class="nav-logo">
        <img
          src="/images/acorn-globus-logo-dark.svg"
          alt="Acorn Globus"
          class="h-8 w-auto"
        >
      </NuxtLink>

      <!-- Desktop links -->
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            :class="{ 'active': isActive(link.to, link.exact) }"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact/" class="nav-cta">
            Let's Talk
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile toggle -->
      <button
        class="nav-mobile-toggle"
        aria-label="Toggle menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <svg
          v-if="!isMobileMenuOpen"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg
          v-else
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="nav-mobile-menu">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :class="['nav-mobile-link', { 'active': isActive(link.to, link.exact) }]"
          @click="isMobileMenuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <div class="nav-mobile-cta-wrapper">
          <NuxtLink
            to="/contact/"
            class="nav-cta nav-mobile-cta"
            @click="isMobileMenuOpen = false"
          >
            Let's Talk
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/about/', label: 'About', exact: true },
  { to: '/services/', label: 'Services', exact: false },
  { to: '/how-we-work/', label: 'How We Work', exact: true },
  { to: '/portfolio/', label: 'Portfolio', exact: true },
  { to: '/designs/', label: 'Designs', exact: true },
  { to: '/blog/', label: 'Blog', exact: false },
]

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const route = useRoute()
const currentPath = computed(() => route.path)

function isActive(to, exact) {
  if (exact) return currentPath.value === to
  return currentPath.value.startsWith(to)
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})
</script>

<style scoped>
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: box-shadow var(--duration-normal) var(--ease-premium);
}

.nav-scrolled {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 40px;
}

.nav-logo {
  font-size: 20px;
  font-weight: 700;
  color: var(--on-surface);
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  font-size: 16px;
  font-weight: 500;
  color: var(--on-surface-variant);
  transition: color var(--duration-fast) var(--ease-premium);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--on-surface);
}

.nav-cta {
  background: linear-gradient(135deg, var(--primary), var(--primary-container));
  color: white !important;
  padding: 10px 24px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  transition: all var(--duration-normal) var(--ease-premium);
}

.nav-cta:hover {
  transform: scale(1.04);
  box-shadow: 0 4px 16px rgba(0, 88, 189, 0.3);
}

.nav-mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: var(--on-surface);
}

/* Mobile menu */
.nav-mobile-menu {
  padding: 16px 40px 24px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(194, 198, 213, 0.15);
}

.nav-mobile-link {
  display: block;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--on-surface-variant);
  border-bottom: 1px solid rgba(194, 198, 213, 0.1);
  transition: color var(--duration-fast) var(--ease-premium);
}

.nav-mobile-link:hover,
.nav-mobile-link.active {
  color: var(--on-surface);
}

.nav-mobile-cta-wrapper {
  padding-top: 16px;
}

.nav-mobile-cta {
  display: block;
  text-align: center;
  width: 100%;
}

/* Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all var(--duration-normal) var(--ease-premium);
  overflow: hidden;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  max-height: 500px;
}

/* Responsive */
@media (max-width: 1024px) {
  .nav-inner {
    padding: 0 32px;
  }

  .nav-mobile-menu {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (max-width: 640px) {
  .nav-links {
    display: none;
  }

  .nav-mobile-toggle {
    display: block;
  }

  .nav-inner {
    padding: 0 20px;
  }

  .nav-mobile-menu {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
