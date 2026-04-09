<template>
  <Transition name="smart-cta-slide">
    <div
      v-if="visible && !dismissed"
      class="smart-cta"
      role="complementary"
      aria-label="Call to action"
    >
      <div class="smart-cta__inner">
        <p class="smart-cta__text">
          {{ text }}
        </p>
        <div class="smart-cta__actions">
          <NuxtLink :to="ctaLink" class="smart-cta__button">
            {{ ctaLabel }}
            <ArrowRight class="smart-cta__button-icon" />
          </NuxtLink>
          <button
            class="smart-cta__dismiss"
            @click="dismiss"
            aria-label="Dismiss"
          >
            <X class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ArrowRight, X } from 'lucide-vue-next'

const props = defineProps({
  text: {
    type: String,
    default: "Like what you're reading? Let's talk about your product.",
  },
  ctaLabel: {
    type: String,
    default: 'Book a 15-minute call',
  },
  ctaLink: {
    type: String,
    default: '/contact',
  },
  scrollThreshold: {
    type: Number,
    default: 0.6,
  },
  dismissKey: {
    type: String,
    default: 'smart_cta_default',
  },
})

const visible = ref(false)
const dismissed = ref(false)

onMounted(() => {
  // Check if user previously dismissed this CTA
  const dismissedAt = localStorage.getItem(`ag_cta_dismissed_${props.dismissKey}`)
  if (dismissedAt) {
    // Re-show after 7 days
    const daysSince = (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60 * 24)
    if (daysSince < 7) {
      dismissed.value = true
      return
    }
  }

  // Set up scroll listener
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    if (scrollHeight <= 0) return
    const scrollPercent = window.scrollY / scrollHeight
    visible.value = scrollPercent >= props.scrollThreshold
  }

  window.addEventListener('scroll', handleScroll, { passive: true })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

const dismiss = () => {
  dismissed.value = true
  localStorage.setItem(`ag_cta_dismissed_${props.dismissKey}`, String(Date.now()))
}
</script>

<style scoped>
.smart-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  border-top: 1px solid #e2e8f0;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.06);
}

.smart-cta__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.smart-cta__text {
  font-size: 15px;
  color: #334155;
  margin: 0;
  line-height: 22px;
}

.smart-cta__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.smart-cta__button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: linear-gradient(135deg, #3b82f6, #4f46e5);
  color: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.smart-cta__button:hover {
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.smart-cta__button-icon {
  width: 16px;
  height: 16px;
}

.smart-cta__dismiss {
  background: none;
  border: none;
  cursor: pointer;
  color: #94a3b8;
  padding: 6px;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.smart-cta__dismiss:hover {
  color: #475569;
  background: #f1f5f9;
}

/* Slide-up transition */
.smart-cta-slide-enter-active,
.smart-cta-slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.smart-cta-slide-enter-from,
.smart-cta-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media screen and (max-width: 640px) {
  .smart-cta__inner {
    flex-direction: column;
    text-align: center;
    padding: 16px 20px;
    gap: 12px;
  }

  .smart-cta__button {
    width: 100%;
    justify-content: center;
  }

  .smart-cta__actions {
    width: 100%;
    flex-direction: column;
  }

  .smart-cta__dismiss {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .smart-cta {
    position: fixed;
  }
}
</style>
