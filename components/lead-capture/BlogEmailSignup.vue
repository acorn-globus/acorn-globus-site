<template>
  <div class="blog-signup" :class="{ 'blog-signup--compact': compact }">
    <div v-if="!submitted" class="blog-signup__inner">
      <div class="blog-signup__text">
        <h3 v-if="!compact" class="blog-signup__heading">
          Get practical engineering insights
        </h3>
        <p class="blog-signup__description">
          {{ compact ? 'Get practical engineering insights.' : 'Real lessons from building products - ours and our clients\'.' }}
          No spam. Monthly.
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="blog-signup__form">
        <div class="blog-signup__input-group">
          <input
            v-model="email"
            type="email"
            placeholder="you@company.com"
            required
            class="blog-signup__input"
            :disabled="loading"
          />
          <button
            type="submit"
            class="blog-signup__button"
            :disabled="loading"
          >
            {{ loading ? 'Subscribing...' : 'Subscribe' }}
          </button>
        </div>
        <p v-if="error" class="blog-signup__error">{{ error }}</p>
      </form>
    </div>

    <div v-else class="blog-signup__success">
      <CheckCircle class="blog-signup__success-icon" />
      <p class="blog-signup__success-text">
        You're in. We'll send you something worth reading.
      </p>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'

defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
})

const email = ref('')
const loading = ref(false)
const submitted = ref(false)
const error = ref('')

const handleSubmit = async () => {
  error.value = ''

  if (!email.value || !email.value.includes('@')) {
    error.value = 'Please enter a valid email address.'
    return
  }

  loading.value = true

  try {
    // Placeholder: store signup locally until backend integration is ready
    const signups = JSON.parse(localStorage.getItem('ag_blog_signups') || '[]')
    signups.push({
      email: email.value,
      source: 'blog',
      timestamp: new Date().toISOString(),
    })
    localStorage.setItem('ag_blog_signups', JSON.stringify(signups))

    // TODO: Replace with real API endpoint
    // await $fetch('/api/newsletter/subscribe', {
    //   method: 'POST',
    //   body: { email: email.value, source: 'blog' },
    // })

    submitted.value = true
  } catch (err) {
    error.value = 'Something went wrong. Please try again or email us at business@acornglobus.com.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.blog-signup {
  background: linear-gradient(135deg, #eff6ff 0%, #eef2ff 100%);
  border-radius: 16px;
  padding: 32px;
  margin-top: 48px;
  margin-bottom: 16px;
}

.blog-signup--compact {
  padding: 24px;
  margin-top: 32px;
}

.blog-signup__inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.blog-signup__heading {
  font-size: 1.375rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 6px 0;
}

.blog-signup__description {
  font-size: 15px;
  line-height: 24px;
  color: #475569;
  margin: 0;
}

.blog-signup__form {
  width: 100%;
}

.blog-signup__input-group {
  display: flex;
  gap: 8px;
  max-width: 480px;
}

.blog-signup__input {
  flex: 1;
  padding: 10px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
  font-family: inherit;
  color: #1e293b;
  background: white;
  outline: none;
  transition: border-color 0.2s ease;
}

.blog-signup__input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.blog-signup__input:disabled {
  opacity: 0.6;
}

.blog-signup__button {
  padding: 10px 24px;
  background: linear-gradient(135deg, #3b82f6, #4f46e5);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.blog-signup__button:hover:not(:disabled) {
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.blog-signup__button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.blog-signup__error {
  margin: 8px 0 0 0;
  font-size: 13px;
  color: #dc2626;
}

.blog-signup__success {
  display: flex;
  align-items: center;
  gap: 12px;
}

.blog-signup__success-icon {
  width: 24px;
  height: 24px;
  color: #16a34a;
  flex-shrink: 0;
}

.blog-signup__success-text {
  font-size: 16px;
  font-weight: 500;
  color: #1e293b;
  margin: 0;
}

@media screen and (max-width: 576px) {
  .blog-signup {
    padding: 24px 20px;
  }

  .blog-signup__input-group {
    flex-direction: column;
  }

  .blog-signup__button {
    width: 100%;
  }
}
</style>
