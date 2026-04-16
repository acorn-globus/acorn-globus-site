<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="container-redesign">
        <div class="hero-eyebrow"><span>Our Portfolio</span></div>
        <h1 class="text-display-lg" style="max-width: 800px;">Products We've Built And Stories Behind Them</h1>
        <p class="text-body-lg" style="max-width: 640px; margin-top: 24px;">From our own SaaS product to funded startups and global nonprofits, here's the work we're proud of — and the partnerships that made it happen.</p>
        <NuxtLink to="/contact/" class="btn btn-primary" style="margin-top: 40px;">Let's build together</NuxtLink>
      </div>
    </section>

    <!-- ===== STATS BAR ===== -->
    <section style="padding: 48px 0; background: var(--surface);">
      <div class="container-redesign">
        <div class="stats-row" style="border-top: none; margin-top: 0; padding-top: 0;">
          <div><div class="stat-value">25+</div><div class="stat-label">Products Shipped</div></div>
          <div><div class="stat-value">80%+</div><div class="stat-label">Client Retention</div></div>
          <div><div class="stat-value">7+</div><div class="stat-label">Years Building Together</div></div>
          <div><div class="stat-value">20+</div><div class="stat-label">Engineers</div></div>
        </div>
      </div>
    </section>

    <!-- ===== FEATURED SUCCESS STORY ===== -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header centered">
          <span class="text-label">Featured Success Story</span>
          <p class="text-title-lg" style="color: var(--on-surface-variant); margin-top: 8px;">Our Flagship Product</p>
        </div>
        <div class="featured-grid">
          <div class="featured-image">
            <img src="/images/formester.webp" alt="Formester Platform" style="width:100%;border-radius:16px;" loading="lazy">
          </div>
          <div class="featured-content">
            <h2>Formester</h2>
            <p class="text-title-lg">AI-Powered No-Code Form Builder</p>
            <p class="text-body" style="margin-top: 16px;">We built Formester ourselves — it's proof that we know what it takes to ship and grow a real product. 1000+ users, 50K+ forms created, 4.7 on G2. It empowers businesses to create intelligent forms with conditional logic, AI-powered generation, and seamless integrations.</p>
            <div class="featured-stats">
              <div><div class="featured-stat-value">1000+</div><div class="featured-stat-label">Active Users</div></div>
              <div><div class="featured-stat-value">50K+</div><div class="featured-stat-label">Forms Created</div></div>
              <div><div class="featured-stat-value">4.7</div><div class="featured-stat-label">Rating on G2</div></div>
            </div>
            <div class="tech-tags">
              <span class="tech-tag">Ruby on Rails</span>
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">PostgreSQL</span>
              <span class="tech-tag">AI Integration</span>
              <span class="tech-tag">AWS</span>
            </div>
            <a href="https://formester.com" target="_blank" rel="noopener noreferrer" class="btn-text">Visit Formester <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PROJECT CARDS ===== -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div class="section-header centered">
          <h2 class="text-display-sm">Our Work</h2>
        </div>
        <div class="filter-tabs" style="justify-content: center;">
          <button
            v-for="filter in filters"
            :key="filter.value"
            class="tab-btn"
            :class="{ active: activeFilter === filter.value }"
            @click="activeFilter = filter.value"
          >{{ filter.label }}</button>
        </div>
        <div class="projects-grid">
          <NuxtLink
            v-for="project in filteredProjects"
            :key="project.name"
            :to="project.link"
            class="project-card"
          >
            <span class="project-category">{{ project.category }}</span>
            <h3>{{ project.name }}</h3>
            <p class="project-subtitle">{{ project.subtitle }}</p>
            <p>{{ project.description }}</p>
            <div class="tech-tags">
              <span v-for="tag in project.tags" :key="tag" class="tech-tag">{{ tag }}</span>
            </div>
            <div class="project-stats">
              <div v-for="stat in project.stats" :key="stat.label">
                <div class="project-stat-value">{{ stat.value }}</div>
                <div class="project-stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header centered">
          <span class="text-label">From the people we build with</span>
          <h2 class="text-display-sm" style="margin-top: 16px;">Success is best measured by client satisfaction</h2>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-context">Built to last.</div>
            <blockquote>"Acorn Globus is a very proficient team, quick to learn new technologies and concepts. They quickly dove in deep and generated impressive results of high quality that are still operational to this day."</blockquote>
            <div class="testimonial-author-row">
              <img src="/images/testimonials/alon.jpeg" alt="Alon Diamant" loading="lazy">
              <div>
                <div class="testimonial-author">Alon Diamant</div>
                <div class="testimonial-role">CTO, Mayple</div>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-context">They don't wait to be asked.</div>
            <blockquote>"Acorn Globus is a gifted team with a rare combination of attention to detail and an overall sense for the big picture. They are very passionate about what they do and come up proactively with improvement ideas."</blockquote>
            <div class="testimonial-author-row">
              <img src="/images/testimonials/enzo.jpeg" alt="Enzo Zadrima" loading="lazy">
              <div>
                <div class="testimonial-author">Enzo Zadrima</div>
                <div class="testimonial-role">CTO, Viewber</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-banner">
      <div class="container-redesign" style="text-align: center; max-width: 640px;">
        <h2 class="text-display-sm">Want to build something like this?</h2>
        <p class="text-body-lg" style="margin-top: 16px;">We'd love to hear what you're working on. No pitch decks — just a conversation about your product.</p>
        <div class="cta-actions" style="justify-content: center;">
          <NuxtLink to="/contact/" class="btn btn-primary">Start a conversation</NuxtLink>
          <NuxtLink to="/services/" class="btn btn-secondary">View Services</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'Portfolio | Products We\'ve Built & Stories Behind Them | AcornGlobus',
  description: 'From our own SaaS product to funded startups and global nonprofits, here\'s the work we\'re proud of — and the partnerships that made it happen.',
  ogTitle: 'Portfolio | Products We\'ve Built & Stories Behind Them | AcornGlobus',
  ogDescription: 'From our own SaaS product to funded startups and global nonprofits, here\'s the work we\'re proud of — and the partnerships that made it happen.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/portfolio/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Portfolio | Products We\'ve Built & Stories Behind Them | AcornGlobus',
  twitterDescription: 'From our own SaaS product to funded startups and global nonprofits, here\'s the work we\'re proud of — and the partnerships that made it happen.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})
useHead({ link: [{ rel: 'canonical', href: 'https://acornglobus.com/portfolio/' }] })

useBreadcrumbSchema([
  { name: 'Portfolio', path: '/portfolio/' },
])

const filters = [
  { value: 'all', label: 'All Projects' },
  { value: 'saas', label: 'SaaS' },
  { value: 'enterprise', label: 'Enterprise' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'nonprofit', label: 'Non-Profit' },
]
const activeFilter = ref('all')

const projects = [
  {
    name: 'Eitoss',
    subtitle: 'Bridging Management & Frontline Workers',
    description: 'A platform implementing Kaizen principles to bridge the communication gap between management and frontline workers, driving continuous improvement.',
    category: 'Enterprise',
    filterKey: 'enterprise',
    tags: ['Ruby on Rails', 'React', 'PostgreSQL'],
    stats: [{ value: '+40%', label: 'efficiency' }, { value: '95%', label: 'adoption' }],
    link: '/case-studies/eitoss/',
  },
  {
    name: 'PerformLine',
    subtitle: 'Regulatory Compliance at Scale',
    description: 'A regulatory technology platform that monitors marketing content across channels for compliance. We started with 1 engineer and grew to 8+ over 2 years.',
    category: 'Enterprise',
    filterKey: 'enterprise',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    stats: [{ value: '8+', label: 'team' }, { value: '2+', label: 'years duration' }],
    link: '/case-studies/performline/',
  },
  {
    name: 'Invoice Falcon',
    subtitle: 'Shopify Invoicing Made Simple',
    description: 'A full-featured invoicing app for Shopify merchants — automated generation, multi-currency support, and tax compliance across 30+ countries.',
    category: 'E-Commerce',
    filterKey: 'ecommerce',
    tags: ['Ruby on Rails', 'React', 'Shopify API'],
    stats: [{ value: '500+', label: 'merchants' }, { value: '100K+', label: 'invoices' }],
    link: '/case-studies/invoice-falcon/',
  },
  {
    name: 'Rumie',
    subtitle: 'Democratizing Education Globally',
    description: 'Democratizing education through bite-sized learning experiences, reaching learners across 176 countries with accessible, quality content.',
    category: 'Non-Profit',
    filterKey: 'nonprofit',
    tags: ['Nuxt', 'Vue.js', 'Flutter'],
    stats: [{ value: '176', label: 'countries' }, { value: '1M+', label: 'learners' }],
    link: '/case-studies/rumie/',
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => p.filterKey === activeFilter.value)
})
</script>

<style scoped>
.hero { padding-top: 140px; }

/* Featured story */
.featured-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; margin-top: 48px; }
.featured-content h2 { font-size: 40px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 8px; }
.featured-stats { display: flex; gap: 32px; margin: 24px 0; }
.featured-stat-value { font-size: 24px; font-weight: 800; color: var(--on-surface); letter-spacing: -0.01em; }
.featured-stat-label { font-size: 13px; color: var(--text-secondary); margin-top: 2px; }

/* Tech tags */
.tech-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; }
.tech-tag { padding: 6px 14px; font-size: 13px; font-weight: 600; color: var(--on-surface-variant); background: var(--surface-container-high); border-radius: var(--radius-pill); }

/* Filter tabs */
.filter-tabs { display: flex; gap: 8px; margin-top: 32px; margin-bottom: 40px; }
.tab-btn { padding: 10px 24px; font-size: 15px; font-weight: 600; font-family: inherit; border: none; border-radius: var(--radius-pill); cursor: pointer; background: var(--surface-container-high); color: var(--on-surface-variant); transition: all var(--duration-normal) var(--ease-premium); }
.tab-btn.active { background: linear-gradient(135deg, var(--primary), var(--primary-container)); color: white; box-shadow: 0 4px 16px rgba(0, 88, 189, 0.25); }
.tab-btn:hover:not(.active) { background: var(--surface-container); color: var(--on-surface); }

/* Project cards */
.projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.project-card { display: block; color: inherit; text-decoration: none; background: var(--surface-container-lowest); border-radius: var(--radius-card); padding: 40px; transition: all var(--duration-normal) var(--ease-premium); }
.project-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-2px); }
.project-category { font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--brand-blue); margin-bottom: 12px; display: inline-block; }
.project-card h3 { font-size: 24px; font-weight: 700; color: var(--on-surface); margin-bottom: 4px; }
.project-subtitle { font-size: 16px; font-weight: 500; color: var(--text-secondary); margin-bottom: 12px; }
.project-card > p { font-size: 16px; line-height: 1.6; color: var(--on-surface-variant); margin-bottom: 16px; }
.project-stats { display: flex; gap: 24px; margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(194, 198, 213, 0.15); }
.project-stat-value { font-size: 20px; font-weight: 800; color: var(--on-surface); letter-spacing: -0.01em; }
.project-stat-label { font-size: 12px; color: var(--text-secondary); margin-top: 2px; }

/* Testimonials */
.testimonials-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 48px; }
.testimonial-card { background: var(--surface-container-lowest); border-radius: var(--radius-card); padding: 36px; transition: all var(--duration-normal) var(--ease-premium); }
.testimonial-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-2px); }
.testimonial-context { font-size: 14px; font-weight: 600; color: var(--brand-blue); margin-bottom: 16px; }
.testimonial-card blockquote { font-size: 17px; line-height: 1.65; color: var(--on-surface-variant); font-style: italic; margin-bottom: 20px; }
.testimonial-author-row { display: flex; align-items: center; gap: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(194, 198, 213, 0.15); }
.testimonial-author-row img { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; }
.testimonial-author { font-size: 15px; font-weight: 600; color: var(--on-surface); }
.testimonial-role { font-size: 13px; color: var(--text-secondary); }

/* CTA */
.cta-actions { display: flex; gap: 16px; margin-top: 32px; }

@media (max-width: 1024px) {
  .featured-grid { grid-template-columns: 1fr; gap: 40px; }
  .testimonials-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .hero { padding-top: 100px; }
  .featured-content h2 { font-size: 28px; }
  .featured-stats { flex-wrap: wrap; gap: 20px; }
  .filter-tabs { flex-wrap: wrap; }
  .projects-grid { grid-template-columns: 1fr; }
  .cta-actions { flex-direction: column; align-items: flex-start; }
  .project-stats { flex-wrap: wrap; gap: 16px; }
}
</style>
