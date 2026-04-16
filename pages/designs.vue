<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="container-redesign">
        <div class="hero-eyebrow"><span>Design Portfolio</span></div>
        <h1 class="text-display-lg" style="max-width: 800px;">Where Creativity Meets Functionality</h1>
        <p class="text-body-lg" style="max-width: 640px; margin-top: 24px;">Explore our diverse collection of design projects that have helped businesses create memorable digital experiences and drive meaningful results.</p>
      </div>
    </section>

    <!-- ===== STATS BAR ===== -->
    <section style="padding: 48px 0; background: var(--surface);">
      <div class="container-redesign">
        <div class="stats-row" style="border-top: none; margin-top: 0; padding-top: 0;">
          <div><div class="stat-value">25+</div><div class="stat-label">Projects Delivered</div></div>
          <div><div class="stat-value">15+</div><div class="stat-label">Industries</div></div>
          <div><div class="stat-value">7+</div><div class="stat-label">Years</div></div>
          <div><div class="stat-value">80%+</div><div class="stat-label">Client Retention</div></div>
        </div>
      </div>
    </section>

    <!-- ===== FILTER SECTION ===== -->
    <section class="section-redesign" style="background: var(--surface-bright); padding-bottom: 0;">
      <div class="container-redesign">
        <div class="filter-tabs" style="justify-content: center;">
          <button
            v-for="category in categories"
            :key="category.id"
            class="tab-btn"
            :class="{ active: activeCategory === category.id }"
            @click="activeCategory = category.id"
          >{{ category.name }}</button>
        </div>
      </div>
    </section>

    <!-- ===== GALLERY SECTION ===== -->
    <section class="section-redesign">
      <div class="container-redesign">
        <h2 class="sr-only">Design Projects Gallery</h2>
        <div class="designs-grid">
          <div
            v-for="design in filteredDesigns"
            :key="design.id"
            class="design-card"
            @click="openModal(design)"
          >
            <div class="design-card-image">
              <img
                :src="design.image"
                :alt="design.title"
                loading="lazy"
                @error="handleImageError"
              />
              <div class="design-card-overlay">
                <div class="design-card-eye">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
              </div>
            </div>

            <div class="design-card-body">
              <div class="design-card-meta">
                <span class="design-category-tag">{{ design.category }}</span>
              </div>

              <h3>{{ design.title }}</h3>

              <p class="design-card-desc">{{ design.description }}</p>

              <div class="design-card-footer">
                <div class="design-timeline">
                  <span class="timeline-dot"></span>
                  <span>{{ design.timeline }}</span>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="load-more" v-if="hasMoreDesigns">
          <button class="btn btn-primary" @click="loadMore">
            Load More Designs
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-banner">
      <div class="container-redesign" style="text-align: center; max-width: 640px;">
        <h2 class="text-display-sm">Like what you see? Let's talk.</h2>
        <p class="text-body-lg" style="margin-top: 16px;">Whether you need a full product design or a refresh of what you have -- we'd love to hear what you're working on.</p>
        <div class="cta-actions" style="justify-content: center;">
          <NuxtLink to="/contact/" class="btn btn-primary">Start a conversation</NuxtLink>
          <NuxtLink to="/portfolio/" class="btn btn-secondary">View Case Studies</NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===== MODAL ===== -->
    <Teleport to="body">
      <div
        v-if="selectedDesign"
        class="modal-backdrop"
        @click="closeModal"
      >
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>

          <div class="modal-body">
            <div class="modal-image">
              <img
                :src="selectedDesign.image"
                :alt="selectedDesign.title"
                @error="handleImageError"
              />
            </div>

            <div class="modal-details">
              <div class="modal-left">
                <div class="design-card-meta" style="margin-bottom: 16px;">
                  <span class="design-category-tag">{{ selectedDesign.category }}</span>
                </div>

                <h3 class="text-headline">{{ selectedDesign.title }}</h3>
                <p class="text-body" style="margin-top: 16px;">{{ selectedDesign.description }}</p>

                <div class="modal-info-grid">
                  <div>
                    <h4>Client</h4>
                    <p>{{ selectedDesign.client }}</p>
                  </div>
                  <div>
                    <h4>Timeline</h4>
                    <p>{{ selectedDesign.timeline }}</p>
                  </div>
                </div>
              </div>

              <div class="modal-right">
                <h4>Technologies Used</h4>
                <div class="tech-tags">
                  <span
                    v-for="tech in selectedDesign.technologies"
                    :key="tech"
                    class="tech-tag"
                  >{{ tech }}</span>
                </div>

                <h4 style="margin-top: 24px;">Key Features</h4>
                <ul class="check-list">
                  <li
                    v-for="feature in selectedDesign.features"
                    :key="feature"
                  >{{ feature }}</li>
                </ul>

                <div class="modal-actions">
                  <a
                    v-if="selectedDesign.liveUrl"
                    :href="selectedDesign.liveUrl"
                    class="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Site
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                  <a
                    v-if="selectedDesign.caseStudyUrl"
                    :href="selectedDesign.caseStudyUrl"
                    class="btn btn-secondary"
                  >
                    Case Study
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'Design Portfolio | Creative Gallery | AcornGlobus',
  description: 'Explore our diverse collection of web design, mobile app interfaces, branding projects, and UI/UX solutions. See how we create memorable digital experiences.',
  ogTitle: 'Design Portfolio | Creative Gallery | AcornGlobus',
  ogDescription: 'Explore our diverse collection of web design, mobile app interfaces, branding projects, and UI/UX solutions.',
  ogImage: 'https://acornglobus.com/acorn-globus-designs.png',
  ogUrl: 'https://acornglobus.com/designs/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Design Portfolio | Creative Gallery | AcornGlobus',
  twitterDescription: 'Explore our diverse collection of web design, mobile app interfaces, branding projects, and UI/UX solutions.',
  twitterImage: 'https://acornglobus.com/acorn-globus-designs.png',
})

useHead({ link: [{ rel: 'canonical', href: 'https://acornglobus.com/designs/' }] })

useBreadcrumbSchema([
  { name: 'Designs', path: '/designs/' },
])

const activeCategory = ref('all')
const selectedDesign = ref(null)
const hasMoreDesigns = ref(true)

const categories = [
  { id: 'all', name: 'All Designs' },
  { id: 'web', name: 'Web Design' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'uiux', name: 'UI/UX' },
  { id: 'branding', name: 'Branding' },
  { id: 'graphics', name: 'Graphics' }
]

const designs = [
  {
    id: 1,
    title: 'Travel and Hospitality App',
    description: 'Here\'s a sneak peek of our travel and hospitality app design. It allows users to book trips, view real-time availability, and get instant updates about their stay.',
    category: 'Mobile Apps',
    categoryId: 'mobile',
    image: '/images/designs/travel.jpg',
    client: 'TechCommerce Ltd',
    timeline: '6 weeks',
    rating: 4.9,
    technologies: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Responsive mobile-first design',
      'Advanced product filtering system',
      'Optimized checkout flow',
      'Accessibility compliant (WCAG 2.1)'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    description: 'Here\'s a glimpse of our custom financial software design. It simplifies secure transactions, real-time reporting.',
    category: 'Web Design',
    categoryId: 'web',
    image: '/images/designs/finance-dashboard.jpg',
    client: 'SecureBank',
    timeline: '8 weeks',
    rating: 4.8,
    technologies: ['Sketch', 'React Native', 'TypeScript', 'Lottie'],
    features: [
      'Biometric authentication',
      'Real-time transaction tracking',
      'Budget management tools',
      'Multi-currency support'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 3,
    title: 'Logistics Dashboard',
    description: 'Check out the design of this logistics app! It helps users schedule deliveries, track shipments in real-time, and get quick customer support all in one place.',
    category: 'Web Design',
    categoryId: 'web',
    image: '/images/designs/logistics.jpg',
    client: 'ProjectFlow Inc',
    timeline: '4 weeks',
    rating: 4.9,
    technologies: ['Adobe XD', 'Vue.js', 'Chart.js', 'CSS Grid'],
    features: [
      'Interactive data visualizations',
      'Customizable widget system',
      'Dark/light theme toggle',
      'Real-time collaboration tools'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 4,
    title: 'Custom Financial App',
    description: 'Here\'s a glimpse of our custom financial software design. It simplifies secure transactions, real-time reporting.',
    category: 'Mobile Apps',
    categoryId: 'mobile',
    image: '/images/designs/finance-app.jpg',
    client: 'EcoTech Solutions',
    timeline: '5 weeks',
    rating: 5.0,
    technologies: ['Illustrator', 'Photoshop', 'InDesign', 'After Effects'],
    features: [
      'Logo design and variations',
      'Brand color system',
      'Typography guidelines',
      'Marketing collateral templates'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 5,
    title: 'Logistics Mobile App',
    description: 'Check out the design of this logistics app! It helps users schedule deliveries, track shipments in real-time, and get quick customer support all in one place.',
    category: 'Mobile Apps',
    categoryId: 'mobile',
    image: '/images/designs/logistics-app.jpg',
    client: 'EventMaster Pro',
    timeline: '10 weeks',
    rating: 4.7,
    technologies: ['Figma', 'Next.js', 'Stripe API', 'Google Maps'],
    features: [
      'Multi-vendor ticket system',
      'Interactive venue maps',
      'Social media integration',
      'Advanced analytics dashboard'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 6,
    title: 'HR Software',
    description: 'Here\'s a look at our new HR software. It streamlines employee management, performance tracking, and payroll processing with a clean, easy-to-use design.',
    category: 'Web Design',
    categoryId: 'web',
    image: '/images/designs/hr.jpg',
    client: 'HealthConnect',
    timeline: '7 weeks',
    rating: 4.9,
    technologies: ['Figma', 'Flutter', 'Firebase', 'WebRTC'],
    features: [
      'HIPAA compliant design',
      'Video consultation interface',
      'Health metrics tracking',
      'Prescription management'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 7,
    title: 'Healthcare App',
    description: 'Take a look at our healthcare app design! It makes scheduling appointments, accessing medical records, and communicating with doctors simple and secure.',
    category: 'Mobile Apps',
    categoryId: 'mobile',
    image: '/images/designs/healthcare.jpg',
    client: 'HealthConnect',
    timeline: '7 weeks',
    rating: 4.9,
    technologies: ['Figma', 'Flutter', 'Firebase', 'WebRTC'],
    features: [
      'HIPAA compliant design',
      'Video consultation interface',
      'Health metrics tracking',
      'Prescription management'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 8,
    title: 'Travel & Hospitality Dashboard',
    description: 'Here\'s a sneak peek of our travel and hospitality app design. It allows users to book trips, view real-time availability, and get instant updates about their stay.',
    category: 'Web Design',
    categoryId: 'web',
    image: '/images/designs/hospitality-web.jpg',
    client: 'TechCommerce Ltd',
    timeline: '6 weeks',
    rating: 4.9,
    technologies: ['Figma', 'Flutter', 'Firebase', 'WebRTC'],
    features: [
      'HIPAA compliant design',
      'Video consultation interface',
      'Health metrics tracking',
      'Prescription management'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 9,
    title: 'Job Search App',
    description: 'Here\'s a look at our new HR software. It streamlines employee management, performance tracking, and payroll processing with a clean, easy-to-use design.',
    category: 'Mobile Apps',
    categoryId: 'mobile',
    image: '/images/designs/job-app.jpg',
    client: 'TechCommerce Ltd',
    timeline: '6 weeks',
    rating: 4.9,
    technologies: ['Figma', 'Flutter', 'Firebase', 'WebRTC'],
    features: [
      'HIPAA compliant design',
      'Video consultation interface',
      'Health metrics tracking',
      'Prescription management'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 10,
    title: 'Healthcare App',
    description: 'Take a look at our healthcare app design! It makes scheduling appointments, accessing medical records, and communicating with doctors simple and secure.',
    category: 'Web Design',
    categoryId: 'web',
    image: '/images/designs/health-app.jpg',
    client: 'TechCommerce Ltd',
    timeline: '6 weeks',
    rating: 4.9,
    technologies: ['Figma', 'Flutter', 'Firebase', 'WebRTC'],
    features: [
      'HIPAA compliant design',
      'Video consultation interface',
      'Health metrics tracking',
      'Prescription management'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  }
]

const filteredDesigns = computed(() => {
  if (activeCategory.value === 'all') {
    return designs
  }
  return designs.filter(design => design.categoryId === activeCategory.value)
})

const openModal = (design) => {
  selectedDesign.value = design
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedDesign.value = null
  document.body.style.overflow = 'auto'
}

const loadMore = () => {
  hasMoreDesigns.value = false
}

const handleImageError = (event) => {
  event.target.style.display = 'none'
}

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
.hero { padding-top: 140px; }

/* Filter tabs (reuse portfolio pattern) */
.filter-tabs { display: flex; gap: 8px; margin-bottom: 40px; flex-wrap: wrap; }
.tab-btn { padding: 10px 24px; font-size: 15px; font-weight: 600; font-family: inherit; border: none; border-radius: var(--radius-pill); cursor: pointer; background: var(--surface-container-high); color: var(--on-surface-variant); transition: all var(--duration-normal) var(--ease-premium); }
.tab-btn.active { background: linear-gradient(135deg, var(--primary), var(--primary-container)); color: white; box-shadow: 0 4px 16px rgba(0, 88, 189, 0.25); }
.tab-btn:hover:not(.active) { background: var(--surface-container); color: var(--on-surface); }

/* Designs grid */
.designs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

/* Design card */
.design-card {
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-premium);
}
.design-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
}

.design-card-image {
  position: relative;
  width: 100%;
  padding-bottom: 75%;
  overflow: hidden;
}
.design-card-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-premium);
}
.design-card:hover .design-card-image img {
  transform: scale(1.06);
}

.design-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-premium);
  display: flex;
  align-items: center;
  justify-content: center;
}
.design-card:hover .design-card-overlay { opacity: 1; }

.design-card-eye {
  width: 48px;
  height: 48px;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.design-card-body { padding: 24px; }

.design-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.design-category-tag {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brand-blue);
  background: var(--primary-fixed-dim);
  padding: 4px 12px;
  border-radius: var(--radius-pill);
}

.design-card-body h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 8px;
  transition: color var(--duration-fast) var(--ease-premium);
}
.design-card:hover .design-card-body h3 { color: var(--primary); }

.design-card-desc {
  font-size: 15px;
  line-height: 1.6;
  color: var(--on-surface-variant);
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.design-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid rgba(194, 198, 213, 0.15);
}

.design-timeline {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-secondary);
}

.timeline-dot {
  width: 8px;
  height: 8px;
  background: var(--success);
  border-radius: 50%;
}

.arrow-icon {
  color: var(--text-tertiary);
  transition: color var(--duration-fast) var(--ease-premium);
}
.design-card:hover .arrow-icon { color: var(--primary); }

/* Load more */
.load-more { text-align: center; margin-top: 56px; }

/* CTA actions */
.cta-actions { display: flex; gap: 16px; margin-top: 32px; }

/* Tech tags (reuse from portfolio) */
.tech-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0; }
.tech-tag { padding: 6px 14px; font-size: 13px; font-weight: 600; color: var(--on-surface-variant); background: var(--surface-container-high); border-radius: var(--radius-pill); }

/* ===== MODAL ===== */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  padding: 20px;
}

.modal-content {
  position: relative;
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--on-surface-variant);
  transition: all var(--duration-fast) var(--ease-premium);
}
.modal-close:hover { background: white; color: var(--on-surface); }

.modal-body { padding: 32px; }

.modal-image {
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 32px;
}
.modal-image img {
  width: 100%;
  height: 320px;
  object-fit: cover;
}

.modal-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.modal-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 24px;
}
.modal-info-grid h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--on-surface);
  margin-bottom: 4px;
}
.modal-info-grid p {
  font-size: 15px;
  color: var(--on-surface-variant);
}

.modal-right h4 {
  font-size: 16px;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 12px;
}

.modal-actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}
.modal-actions .btn { flex: 1; padding: 12px 20px; font-size: 15px; }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .hero { padding-top: 120px; }
  .designs-grid { grid-template-columns: repeat(2, 1fr); }
  .modal-details { grid-template-columns: 1fr; gap: 32px; }
}

@media (max-width: 640px) {
  .hero { padding-top: 100px; }
  .designs-grid { grid-template-columns: 1fr; }
  .filter-tabs { justify-content: flex-start; }
  .cta-actions { flex-direction: column; align-items: flex-start; }
  .modal-body { padding: 20px; }
  .modal-image img { height: 200px; }
  .modal-actions { flex-direction: column; }
  .modal-actions .btn { flex: none; width: 100%; }
}
</style>
