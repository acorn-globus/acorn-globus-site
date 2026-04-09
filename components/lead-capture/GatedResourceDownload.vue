<template>
  <div>
    <!-- Trigger button/card -->
    <div
      v-if="!unlocked"
      class="gated-resource"
      @click="showModal = true"
    >
      <div class="gated-resource__icon-wrap">
        <FileDown class="gated-resource__icon" />
      </div>
      <div class="gated-resource__content">
        <h4 class="gated-resource__title">{{ title }}</h4>
        <p class="gated-resource__description">{{ description }}</p>
        <span class="gated-resource__action">
          Download free guide
          <ArrowRight class="gated-resource__arrow" />
        </span>
      </div>
    </div>

    <!-- Unlocked state -->
    <div v-else class="gated-resource gated-resource--unlocked">
      <div class="gated-resource__icon-wrap gated-resource__icon-wrap--success">
        <CheckCircle class="gated-resource__icon" />
      </div>
      <div class="gated-resource__content">
        <h4 class="gated-resource__title">{{ title }}</h4>
        <a
          :href="downloadUrl"
          :download="downloadFilename"
          class="gated-resource__download-link"
        >
          Download now
          <ArrowRight class="gated-resource__arrow" />
        </a>
      </div>
    </div>

    <!-- Modal overlay -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div
          v-if="showModal"
          class="gated-modal-overlay"
          @click.self="showModal = false"
        >
          <div class="gated-modal" role="dialog" aria-modal="true">
            <button
              class="gated-modal__close"
              @click="showModal = false"
              aria-label="Close"
            >
              <X class="w-5 h-5" />
            </button>

            <div class="gated-modal__header">
              <FileDown class="gated-modal__header-icon" />
              <h3 class="gated-modal__title">{{ title }}</h3>
              <p class="gated-modal__subtitle">
                Enter your details and we'll send you the guide right away.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="gated-modal__form">
              <div class="gated-modal__field">
                <label for="gated-name" class="gated-modal__label">Name</label>
                <input
                  id="gated-name"
                  v-model="name"
                  type="text"
                  placeholder="Your name"
                  required
                  class="gated-modal__input"
                  :disabled="loading"
                />
              </div>

              <div class="gated-modal__field">
                <label for="gated-email" class="gated-modal__label">Email</label>
                <input
                  id="gated-email"
                  v-model="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  class="gated-modal__input"
                  :disabled="loading"
                />
              </div>

              <p v-if="error" class="gated-modal__error">{{ error }}</p>

              <button
                type="submit"
                class="gated-modal__submit"
                :disabled="loading"
              >
                {{ loading ? 'Processing...' : 'Get the guide' }}
              </button>

              <p class="gated-modal__privacy">
                We respect your inbox. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { FileDown, ArrowRight, CheckCircle, X } from 'lucide-vue-next'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  downloadUrl: {
    type: String,
    required: true,
  },
  downloadFilename: {
    type: String,
    default: '',
  },
  resourceId: {
    type: String,
    required: true,
  },
})

const showModal = ref(false)
const name = ref('')
const email = ref('')
const loading = ref(false)
const error = ref('')
const unlocked = ref(false)

// Check if user already unlocked this resource
onMounted(() => {
  const unlockedResources = JSON.parse(localStorage.getItem('ag_unlocked_resources') || '[]')
  if (unlockedResources.includes(props.resourceId)) {
    unlocked.value = true
  }
})

// Prevent body scroll when modal is open
watch(showModal, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

const handleSubmit = async () => {
  error.value = ''

  if (!name.value.trim()) {
    error.value = 'Please enter your name.'
    return
  }

  if (!email.value || !email.value.includes('@')) {
    error.value = 'Please enter a valid email address.'
    return
  }

  loading.value = true

  try {
    // Placeholder: store download leads locally until backend integration is ready
    const leads = JSON.parse(localStorage.getItem('ag_resource_leads') || '[]')
    leads.push({
      name: name.value.trim(),
      email: email.value,
      resourceId: props.resourceId,
      timestamp: new Date().toISOString(),
    })
    localStorage.setItem('ag_resource_leads', JSON.stringify(leads))

    // Mark resource as unlocked for this user
    const unlockedResources = JSON.parse(localStorage.getItem('ag_unlocked_resources') || '[]')
    if (!unlockedResources.includes(props.resourceId)) {
      unlockedResources.push(props.resourceId)
      localStorage.setItem('ag_unlocked_resources', JSON.stringify(unlockedResources))
    }

    // TODO: Replace with real API endpoint
    // await $fetch('/api/leads/resource-download', {
    //   method: 'POST',
    //   body: {
    //     name: name.value.trim(),
    //     email: email.value,
    //     resourceId: props.resourceId,
    //   },
    // })

    unlocked.value = true
    showModal.value = false
  } catch (err) {
    error.value = 'Something went wrong. Please try again or email us at business@acornglobus.com.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Trigger card */
.gated-resource {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 24px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
}

.gated-resource:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.08);
}

.gated-resource--unlocked {
  cursor: default;
  border-color: #86efac;
  background: #f0fdf4;
}

.gated-resource--unlocked:hover {
  border-color: #86efac;
  box-shadow: none;
}

.gated-resource__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #eff6ff;
  border-radius: 10px;
  flex-shrink: 0;
}

.gated-resource__icon-wrap--success {
  background: #dcfce7;
}

.gated-resource__icon {
  width: 22px;
  height: 22px;
  color: #3b82f6;
}

.gated-resource__icon-wrap--success .gated-resource__icon {
  color: #16a34a;
}

.gated-resource__content {
  flex: 1;
  min-width: 0;
}

.gated-resource__title {
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 4px 0;
}

.gated-resource__description {
  font-size: 14px;
  color: #64748b;
  margin: 0 0 8px 0;
  line-height: 20px;
}

.gated-resource__action {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #3b82f6;
}

.gated-resource__arrow {
  width: 14px;
  height: 14px;
}

.gated-resource__download-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #16a34a;
  text-decoration: none;
}

.gated-resource__download-link:hover {
  text-decoration: underline;
}

/* Modal */
.gated-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 16px;
}

.gated-modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 440px;
  width: 100%;
  position: relative;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
}

.gated-modal__close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #94a3b8;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.2s ease;
}

.gated-modal__close:hover {
  color: #475569;
}

.gated-modal__header {
  text-align: center;
  margin-bottom: 24px;
}

.gated-modal__header-icon {
  width: 40px;
  height: 40px;
  color: #3b82f6;
  margin-bottom: 12px;
}

.gated-modal__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 8px 0;
}

.gated-modal__subtitle {
  font-size: 15px;
  color: #64748b;
  margin: 0;
  line-height: 22px;
}

.gated-modal__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.gated-modal__field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.gated-modal__label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.gated-modal__input {
  padding: 10px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 15px;
  font-family: inherit;
  color: #1e293b;
  outline: none;
  transition: border-color 0.2s ease;
}

.gated-modal__input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.gated-modal__input:disabled {
  opacity: 0.6;
}

.gated-modal__error {
  font-size: 13px;
  color: #dc2626;
  margin: 0;
}

.gated-modal__submit {
  padding: 12px;
  background: linear-gradient(135deg, #3b82f6, #4f46e5);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
}

.gated-modal__submit:hover:not(:disabled) {
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.gated-modal__submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.gated-modal__privacy {
  font-size: 12px;
  color: #94a3b8;
  text-align: center;
  margin: 0;
}

/* Modal transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-active .gated-modal,
.modal-fade-leave-active .gated-modal {
  transition: transform 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .gated-modal {
  transform: scale(0.95);
}

.modal-fade-leave-to .gated-modal {
  transform: scale(0.95);
}
</style>
