<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="container-redesign">
        <div style="max-width: 720px;">
          <div class="hero-eyebrow"><span>Get In Touch</span></div>
          <h1 class="text-display-lg" style="margin-top: 24px;">Let's talk about what you're building.</h1>
          <p class="text-body-lg" style="margin-top: 24px; max-width: 600px;">Whether you're launching something new or growing something that's working — we'd love to hear what you're building.</p>
        </div>
      </div>
    </section>

    <!-- ===== CONTACT METHODS ===== -->
    <section style="padding-top: 0; padding-bottom: 0;">
      <div class="container-redesign">
        <div class="contact-methods">
          <a href="https://calendar.app.google/gbT42VeCDd7ioXh79" target="_blank" rel="noopener noreferrer" class="contact-method-card">
            <div class="contact-method-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <h2 class="contact-method-title">Schedule a Call</h2>
            <p>Start a conversation</p>
          </a>
          <div class="contact-method-card">
            <div class="contact-method-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <h2 class="contact-method-title">Email Us</h2>
            <p>business@acornglobus.com</p>
            <small>For partnerships and project conversations</small>
          </div>
          <div class="contact-method-card">
            <div class="contact-method-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h2 class="contact-method-title">Visit Us</h2>
            <p>Nagpur, Maharashtra</p>
            <small>India</small>
          </div>
          <div class="contact-method-card">
            <div class="contact-method-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h2 class="contact-method-title">Response Time</h2>
            <p>Within 8 hours</p>
            <small>During business hours — we won't keep you waiting</small>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TRUST STRIP ===== -->
    <section class="trust-strip">
      <div class="container-redesign">
        <div class="trust-stats">
          <div>
            <div class="stat-value">20+</div>
            <div class="stat-label">Engineers</div>
          </div>
          <div>
            <div class="stat-value">80%+</div>
            <div class="stat-label">Client Retention</div>
          </div>
          <div>
            <div class="stat-value">7+</div>
            <div class="stat-label">Years Building Together</div>
          </div>
          <div>
            <div class="stat-value">25+</div>
            <div class="stat-label">Products Shipped</div>
          </div>
        </div>
        <p class="trust-strip-text">We built our own SaaS product (Formester) and bring that same ownership to everything we build. No pitch decks ahead — just an honest conversation about your product.</p>
      </div>
    </section>

    <!-- ===== MAIN CONTENT: FORM + SIDEBAR ===== -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="contact-grid">
          <!-- LEFT: Contact Form -->
          <div class="contact-form-section">
            <h2>Tell us what you're building</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="full-name">Full Name <span class="required">*</span></label>
                <input type="text" id="full-name" v-model="formData.fullName" class="form-input" placeholder="John Doe" required>
              </div>
              <div class="form-group">
                <label for="email">Email Address <span class="required">*</span></label>
                <input type="email" id="email" v-model="formData.email" class="form-input" placeholder="john@company.com" required>
              </div>
              <div class="form-group">
                <label for="country">Country <span class="required">*</span></label>
                <select id="country" v-model="formData.country" class="form-select" required>
                  <option value="" disabled selected>Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="IN">India</option>
                  <option value="AU">Australia</option>
                  <option value="SG">Singapore</option>
                  <option value="JP">Japan</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="company">Company Name <span class="required">*</span></label>
                <input type="text" id="company" v-model="formData.company" class="form-input" placeholder="Acme Inc." required>
              </div>
              <div class="form-group">
                <label>Services Required <span class="required">*</span></label>
                <div class="checkbox-group">
                  <label class="checkbox-item">
                    <input type="checkbox" v-model="formData.services" value="mvp-development">
                    <span>MVP Development</span>
                  </label>
                  <label class="checkbox-item">
                    <input type="checkbox" v-model="formData.services" value="full-project-delivery">
                    <span>Full Project Delivery</span>
                  </label>
                  <label class="checkbox-item">
                    <input type="checkbox" v-model="formData.services" value="resource-augmentation">
                    <span>Resource Augmentation</span>
                  </label>
                  <label class="checkbox-item">
                    <input type="checkbox" v-model="formData.services" value="maintenance-support">
                    <span>Maintenance &amp; Support</span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label for="message">Message / Query <span class="required">*</span></label>
                <textarea id="message" v-model="formData.message" class="form-textarea" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-submit" :disabled="isSubmitting || submitSuccess">
                <span v-if="submitSuccess">Thanks! We'll be in touch soon.</span>
                <span v-else-if="isSubmitting">Sending...</span>
                <span v-else>Start the conversation</span>
              </button>
              <p class="form-note">We typically respond within 8 business hours</p>
            </form>
          </div>

          <!-- RIGHT: Sidebar -->
          <div class="contact-sidebar">
            <div class="sidebar-section">
              <h3>Quick Actions</h3>
              <a href="https://calendar.app.google/gbT42VeCDd7ioXh79" target="_blank" rel="noopener noreferrer" class="sidebar-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Schedule a call
              </a>
              <NuxtLink to="/about" class="sidebar-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Meet Our Team
              </NuxtLink>
              <NuxtLink to="/portfolio" class="sidebar-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                See Our Work
              </NuxtLink>
            </div>
            <div class="sidebar-section">
              <h3>Connect With Us</h3>
              <a href="https://www.linkedin.com/company/acornglobus" target="_blank" rel="noopener noreferrer" class="sidebar-social">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--brand-blue)"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://x.com/AcornGlobus" target="_blank" rel="noopener noreferrer" class="sidebar-social">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--brand-blue)"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>X (Twitter)</span>
              </a>
            </div>
            <div class="sidebar-section">
              <h3>Office Hours</h3>
              <div class="office-hours-row">
                <span class="day">Monday - Friday</span>
                <span class="time">9:00 AM - 6:00 PM IST</span>
              </div>
              <div class="office-hours-row">
                <span class="day">Saturday</span>
                <span class="time">10:00 AM - 4:00 PM IST</span>
              </div>
              <div class="office-hours-row">
                <span class="day">Sunday</span>
                <span class="closed">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FAQ SECTION ===== -->
    <section class="faq-section section-redesign">
      <div class="container-redesign">
        <div class="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Honest answers to the questions we hear most</p>
        </div>
        <div class="faq-list">
          <details v-for="(faq, idx) in faqs" :key="idx" class="faq-item" :open="idx === 0">
            <summary>{{ faq.question }}</summary>
            <div class="faq-answer">{{ faq.answer }}</div>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'Contact AcornGlobus - Let\'s Talk About What You\'re Building',
  description: 'Get in touch with AcornGlobus. Whether you\'re launching something new or growing something that\'s working, we\'d love to hear what you\'re building.',
  ogTitle: 'Contact AcornGlobus - Let\'s Talk About What You\'re Building',
  ogDescription: 'Get in touch with AcornGlobus. Whether you\'re launching something new or growing something that\'s working, we\'d love to hear what you\'re building.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/contact',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact AcornGlobus - Let\'s Talk About What You\'re Building',
  twitterDescription: 'Get in touch with AcornGlobus. Whether you\'re launching something new or growing something that\'s working, we\'d love to hear what you\'re building.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})
useHead({ link: [{ rel: 'canonical', href: 'https://acornglobus.com/contact' }] })

useBreadcrumbSchema([
  { name: 'Contact', path: '/contact' },
])

const formData = ref({
  fullName: '',
  email: '',
  country: '',
  company: '',
  services: [],
  message: ''
})
const isSubmitting = ref(false)
const submitSuccess = ref(false)

const faqs = [
  { question: 'What services does AcornGlobus offer?', answer: 'We offer four core services: Resource Augmentation (dedicated engineers who embed with your team), MVP Development (ship a real product in 8-12 weeks), Full Project Delivery (end-to-end product engineering), and Maintenance & Support (ongoing care from the team that built it).' },
  { question: 'How quickly can you start on a project?', answer: 'For resource augmentation, we can typically match engineers and begin within 1-2 weeks. For MVP and full project delivery, we start with a discovery phase within the first week of engagement.' },
  { question: 'Do you offer a trial period?', answer: 'Yes. For resource augmentation, we offer a 2-week trial period where our engineers join your team with zero commitment. You evaluate fit and productivity before making any long-term decisions.' },
  { question: 'Who owns the code?', answer: 'You do. 100% code ownership from day one. We build for your independence with clean code, full documentation, and zero lock-in. If you want to bring development in-house later, we\'ll help you do that.' },
  { question: 'What technologies do you work with?', answer: 'We\'re stack-agnostic -- we pick the right technology for your problem. Our team has experience with React, Vue.js, Angular, Node.js, Ruby on Rails, Python, .NET, and more. We work with AWS, Azure, and GCP for cloud infrastructure.' },
  { question: 'What is your minimum engagement?', answer: 'For resource augmentation, the minimum is 1 engineer with a 3-month initial commitment. For MVP development, typical engagements are 8-12 weeks. For maintenance, the minimum retainer is 3 months.' },
]

useFaqSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))

const submissionUrl = 'https://app.formester.com/forms/23ef1589-ef44-4f4a-ac70-069e6aa29638/submissions.json'

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    const submissionData = {
      fullName: formData.value.fullName,
      email: formData.value.email,
      country: formData.value.country,
      company: formData.value.company,
      service: formData.value.services.join(', '),
      message: formData.value.message
    }
    await axios.post(submissionUrl, submissionData)
    isSubmitting.value = false
    submitSuccess.value = true
    setTimeout(() => {
      submitSuccess.value = false
      formData.value = { fullName: '', email: '', country: '', company: '', services: [], message: '' }
    }, 3000)
  } catch (error) {
    isSubmitting.value = false
    alert('Something went wrong! Please reach out to us at business@acornglobus.com')
  }
}
</script>

<style scoped>
/* Trust strip */
.trust-strip { padding: 56px 0; background: var(--surface); }
.trust-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; max-width: 720px; margin: 0 auto; text-align: center; }
.trust-stats .stat-value { font-size: 32px; font-weight: 800; color: var(--on-surface); letter-spacing: -0.02em; }
.trust-stats .stat-label { font-size: 14px; color: var(--text-secondary); margin-top: 4px; }
.trust-strip-text { text-align: center; max-width: 640px; margin: 32px auto 0; font-size: 16px; line-height: 1.6; color: var(--on-surface-variant); }
.contact-methods { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 56px; }
.contact-method-card { background: var(--surface); border-radius: var(--radius-card); padding: 32px 24px; text-align: center; transition: all var(--duration-normal) var(--ease-premium); text-decoration: none; display: block; color: inherit; }
.contact-method-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-2px); }
.contact-method-icon { width: 56px; height: 56px; background: var(--primary-fixed-dim); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
.contact-method-title { font-size: 18px; font-weight: 700; color: var(--on-surface); margin-bottom: 8px; }
.contact-method-card p { font-size: 15px; color: var(--on-surface-variant); line-height: 1.5; }
.contact-method-card small { font-size: 13px; color: var(--text-tertiary); display: block; margin-top: 4px; }
.contact-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 56px; align-items: flex-start; }
.contact-form-section h2 { font-size: 32px; font-weight: 700; letter-spacing: -0.01em; line-height: 1.25; margin-bottom: 32px; }
.form-group { margin-bottom: 20px; }
.form-group label { display: block; font-size: 14px; font-weight: 600; color: var(--on-surface); margin-bottom: 8px; }
.required { color: #e53935; margin-left: 2px; }
.form-input, .form-select, .form-textarea { width: 100%; padding: 14px 16px; font-size: 16px; font-family: inherit; color: var(--on-surface); background: var(--surface-container-low); border: 2px solid transparent; border-radius: 14px; outline: none; transition: all var(--duration-fast) var(--ease-premium); }
.form-input::placeholder, .form-textarea::placeholder { color: var(--text-tertiary); }
.form-input:focus, .form-select:focus, .form-textarea:focus { border-color: var(--primary); background: var(--surface-container-lowest); box-shadow: 0 0 0 4px rgba(0, 88, 189, 0.08); }
.form-select { appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23424753' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; background-size: 14px; padding-right: 40px; cursor: pointer; }
.form-textarea { min-height: 140px; resize: vertical; }
.checkbox-group { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.checkbox-item { display: flex; align-items: center; cursor: pointer; line-height: 1; }
.checkbox-item input[type="checkbox"] { width: 18px; height: 18px; min-width: 18px; flex-shrink: 0; accent-color: var(--primary); cursor: pointer; border-radius: 4px; margin: 0 10px 0 0; vertical-align: middle; position: relative; top: -1px; }
.checkbox-item span { font-size: 15px; color: var(--on-surface-variant); }
.form-note { font-size: 13px; color: var(--text-tertiary); margin-top: 16px; text-align: center; }
.btn-submit { width: 100%; padding: 18px 32px; font-size: 17px; margin-top: 8px; }
.contact-sidebar { position: sticky; top: 120px; }
.sidebar-section { padding: 28px 0; border-bottom: 1px solid var(--outline-variant); }
.sidebar-section:first-child { padding-top: 0; }
.sidebar-section:last-child { border-bottom: none; }
.sidebar-section h3 { font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--brand-blue); margin-bottom: 16px; }
.sidebar-link { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 500; color: var(--on-surface-variant); padding: 8px 0; transition: color var(--duration-fast) var(--ease-premium); }
.sidebar-link:hover { color: var(--primary); }
.sidebar-link svg { flex-shrink: 0; }
.sidebar-social { display: flex; align-items: center; gap: 10px; font-size: 15px; color: var(--on-surface-variant); padding: 6px 0; text-decoration: none; transition: color var(--duration-fast) var(--ease-premium); }
.sidebar-social:hover { color: var(--primary); }
.sidebar-social svg { flex-shrink: 0; }
.office-hours-row { display: flex; justify-content: space-between; font-size: 15px; padding: 6px 0; }
.day { color: var(--on-surface); font-weight: 500; }
.time { color: var(--on-surface-variant); }
.closed { color: var(--text-tertiary); }
.faq-section { background: var(--surface); }
.faq-header { text-align: center; max-width: 640px; margin: 0 auto 48px; }
.faq-header h2 { font-size: 32px; font-weight: 700; letter-spacing: -0.01em; line-height: 1.25; margin-bottom: 12px; }
.faq-header p { font-size: 18px; color: var(--on-surface-variant); }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
.faq-item { background: var(--surface-container-lowest); border-radius: var(--radius-card); overflow: hidden; }
.faq-item summary { padding: 24px 28px; font-size: 17px; font-weight: 600; color: var(--on-surface); cursor: pointer; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; transition: background var(--duration-fast) var(--ease-premium); }
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary::after { content: ''; width: 20px; height: 20px; flex-shrink: 0; background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23424753' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: center; transition: transform var(--duration-fast) var(--ease-premium); }
.faq-item[open] summary::after { transform: rotate(180deg); }
.faq-item summary:hover { background: var(--surface-container-low); }
.faq-answer { padding: 0 28px 24px; font-size: 16px; line-height: 1.65; color: var(--on-surface-variant); }

@media (max-width: 1024px) {
  .contact-methods { grid-template-columns: repeat(2, 1fr); }
  .contact-grid { grid-template-columns: 1fr; gap: 48px; }
  .contact-sidebar { position: static; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .sidebar-section { padding: 0; border-bottom: none; border-right: 1px solid var(--outline-variant); padding-right: 24px; }
  .sidebar-section:last-child { border-right: none; padding-right: 0; }
}
@media (max-width: 640px) {
  .contact-methods { grid-template-columns: 1fr; }
  .checkbox-group { grid-template-columns: 1fr; }
  .contact-sidebar { grid-template-columns: 1fr; }
  .sidebar-section { border-right: none; padding-right: 0; padding-bottom: 24px; border-bottom: 1px solid var(--outline-variant); }
  .sidebar-section:last-child { border-bottom: none; padding-bottom: 0; }
}
</style>
