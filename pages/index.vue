<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="container-redesign">
        <div class="hero-inner">
          <div class="hero-content">
            <div class="hero-eyebrow">
              <span>Product Engineering Team</span>
            </div>
            <h1 class="text-display-lg">We build it like<br>it's ours.</h1>
            <p class="hero-body">We're a product engineering team that built our own SaaS (Formester) -- and we bring that same ownership to every product we touch. A team that cares about your outcome as much as you do.</p>
            <div class="hero-stats">
              <div>
                <div class="hero-stat-value">20+</div>
                <div class="hero-stat-label">Engineers</div>
              </div>
              <div>
                <div class="hero-stat-value">25+</div>
                <div class="hero-stat-label">Products Shipped</div>
              </div>
              <div>
                <div class="hero-stat-value">80%+</div>
                <div class="hero-stat-label">Client Retention</div>
              </div>
              <div>
                <div class="hero-stat-value">7+</div>
                <div class="hero-stat-label">Years Building Together</div>
              </div>
            </div>
            <div class="hero-ctas">
              <NuxtLink to="/contact/" class="btn btn-primary">Let's talk about your product</NuxtLink>
              <NuxtLink to="/portfolio/" class="btn btn-secondary">See our work</NuxtLink>
            </div>
          </div>
          <div class="hero-illustration">
            <img src="/images/hero.webp" alt="AcornGlobus team collaborating on product engineering" class="hero-img" width="1536" height="1024" fetchpriority="high">
            <div class="floating-badge badge-formester">
              <div class="badge-dot" style="background: var(--success);"></div>
              <div>
                <div class="badge-text">Our Own SaaS</div>
                <div class="badge-sub">Formester</div>
              </div>
            </div>
            <div class="floating-badge badge-retention">
              <div class="badge-dot" style="background: var(--brand-blue);"></div>
              <div>
                <div class="badge-text">80%+ Retention</div>
                <div class="badge-sub">Clients stay</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== LOGO BAR ===== -->
    <div class="logo-bar">
      <div class="container-redesign">
        <div class="logo-bar-label">Trusted by teams building real products</div>
        <div class="logo-bar-grid">
          <span class="logo-bar-item">PerformLine</span>
          <span class="logo-bar-item">Mayple</span>
          <span class="logo-bar-item">Viewber</span>
          <span class="logo-bar-item">Eitoss</span>
          <span class="logo-bar-item">Rumie</span>
          <span class="logo-bar-item">Qualfon</span>
          <span class="logo-bar-item">Formester</span>
        </div>
      </div>
    </div>

    <!-- ===== FORMESTER ===== -->
    <section class="formester section-redesign">
      <div class="container-redesign">
        <div class="formester-inner">
          <div>
            <span class="text-label">Built from experience</span>
            <h2 class="text-display-sm" style="margin-top: 16px;">We built our own SaaS. We build yours the same way.</h2>
            <p class="text-body-lg" style="margin-top: 20px;">Formester is our AI-powered form builder — live, growing, used by thousands. Building our own product taught us what real ownership feels like: the late-night bug fixes, the user feedback loops, the decisions that keep you up at night. We bring that same care to your product. Not because a contract says to. Because that's how we're wired.</p>
            <div class="formester-stats">
              <div class="formester-stat">
                <div class="formester-stat-value">1,000+</div>
                <div class="formester-stat-label">Active Users</div>
              </div>
              <div class="formester-stat">
                <div class="formester-stat-value">50K+</div>
                <div class="formester-stat-label">Forms Created</div>
              </div>
              <div class="formester-stat">
                <div class="formester-stat-value">4.7</div>
                <div class="formester-stat-label">Rating on G2</div>
              </div>
            </div>
            <a href="https://formester.com" target="_blank" rel="noopener noreferrer" class="btn-text">
              Learn more about Formester
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>
          <div class="hero-illustration">
            <img src="/images/formester.webp" alt="Formester Platform — AI Form Builder Interface" class="hero-img" loading="lazy" width="1536" height="1024">
            <div class="floating-badge" style="bottom: 40px; right: -10px;">
              <div class="badge-dot" style="background: var(--success);"></div>
              <div>
                <div class="badge-text">Our Product</div>
                <div class="badge-sub">Live & Growing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PARTNERSHIPS ===== -->
    <section class="partnerships section-redesign">
      <div class="container-redesign">
        <div class="section-header">
          <span class="text-label">Partnerships, not projects</span>
          <h2 class="text-display-sm" style="margin-top: 16px;">We don't just deliver. We stay.</h2>
        </div>

        <!-- PerformLine -->
        <div class="partnership-story">
          <div class="partnership-story-grid">
            <div>
              <span class="partnership-label">Resource Augmentation</span>
              <h3 class="text-headline">PerformLine</h3>
              <p class="text-body" style="margin-top: 8px; color: var(--on-surface); font-weight: 500;">From 1 engineer to 8+. Two years and counting.</p>
              <p class="text-body" style="margin-top: 16px;">PerformLine needed a frontend engineer. We sent one. That was two years ago. Today, we're 8+ engineers deep — full-stack, DevOps, data, QA — embedded in their team like we've always been there. Same tools, same standups, same standards. That's not a contract scaling up. That's trust being earned, sprint by sprint.</p>
              <div class="partnership-stats">
                <div>
                  <div class="partnership-stat-value">1 to 8+</div>
                  <div class="partnership-stat-label">Engineers</div>
                </div>
                <div>
                  <div class="partnership-stat-value">2+</div>
                  <div class="partnership-stat-label">Years Together</div>
                </div>
              </div>
              <div class="partnership-tags">
                <span class="partnership-tag">Compliance Technology</span>
                <span class="partnership-tag">Full-stack, DevOps, QA</span>
                <span class="partnership-tag">Embedded in their team</span>
              </div>
              <NuxtLink to="/case-studies/performline/" class="btn-text" style="margin-top: 24px; display: inline-flex;">
                Read the full story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </NuxtLink>
            </div>
            <div class="hero-illustration">
              <img src="/images/performline.webp" alt="Engineering team scaling from 1 to 8+ engineers" class="hero-img" loading="lazy" width="1536" height="1024">
            </div>
          </div>
        </div>

        <!-- Eitoss -->
        <div class="partnership-story">
          <div class="partnership-story-grid">
            <div class="hero-illustration">
              <img src="/images/eitoss.webp" alt="Product development journey from idea to funding" class="hero-img" loading="lazy" width="1536" height="1024">
              <div class="floating-badge" style="top: 20px; left: -10px;">
                <div class="badge-dot" style="background: var(--success);"></div>
                <div>
                  <div class="badge-text">MVP Success</div>
                  <div class="badge-sub">Secured Funding</div>
                </div>
              </div>
            </div>
            <div>
              <span class="partnership-label">MVP Development</span>
              <h3 class="text-headline">Eitoss</h3>
              <p class="text-body" style="margin-top: 8px; color: var(--on-surface); font-weight: 500;">Demoable MVP in 8 weeks. Live in 3 months. Raised funding. Still building together.</p>
              <p class="text-body" style="margin-top: 16px;">Eitoss came to us with a vision and a timeline. We shipped a demoable MVP in 8 weeks and had the product live in production in 3 months. They raised funding. Two years later, we're still their engineering team — not because they're locked in, but because the partnership works.</p>
              <div class="partnership-stats">
                <div>
                  <div class="partnership-stat-value">8 Weeks</div>
                  <div class="partnership-stat-label">To Demoable MVP</div>
                </div>
                <div>
                  <div class="partnership-stat-value">3 Months</div>
                  <div class="partnership-stat-label">To Production</div>
                </div>
                <div>
                  <div class="partnership-stat-value">2+</div>
                  <div class="partnership-stat-label">Years Together</div>
                </div>
              </div>
              <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-top: 24px;">
                <NuxtLink to="/case-studies/eitoss/" class="btn-text" style="display: inline-flex;">
                  Read the full story
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </NuxtLink>
                <NuxtLink to="/how-we-work/" class="btn-text" style="display: inline-flex;">
                  See how we work
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- More Case Studies -->
        <div class="more-case-studies">
          <h3 class="text-title-lg" style="margin-bottom: 24px;">More from our portfolio</h3>
          <div class="case-study-links-grid">
            <NuxtLink to="/case-studies/formester/" class="case-study-link-card">
              <span class="case-study-link-label">Our Own SaaS</span>
              <span class="case-study-link-name">Formester</span>
              <span class="case-study-link-desc">AI-powered form builder. 1,000+ active users. 4.7 on G2.</span>
            </NuxtLink>
            <NuxtLink to="/case-studies/eitoss/" class="case-study-link-card">
              <span class="case-study-link-label">MVP Development</span>
              <span class="case-study-link-name">Eitoss</span>
              <span class="case-study-link-desc">MVP in 3 months. Raised funding. Still building 2+ years later.</span>
            </NuxtLink>
            <NuxtLink to="/case-studies/rumie/" class="case-study-link-card">
              <span class="case-study-link-label">Non-Profit EdTech</span>
              <span class="case-study-link-name">Rumie</span>
              <span class="case-study-link-desc">Bite-sized learning reaching learners across 176 countries.</span>
            </NuxtLink>
            <NuxtLink to="/case-studies/invoice-falcon/" class="case-study-link-card">
              <span class="case-study-link-label">Shopify App</span>
              <span class="case-study-link-name">Invoice Falcon</span>
              <span class="case-study-link-desc">Comprehensive invoicing for Shopify merchants worldwide.</span>
            </NuxtLink>
          </div>
          <div style="margin-top: 24px;">
            <NuxtLink to="/portfolio/" class="btn-text">
              View all case studies
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SERVICES ===== -->
    <section class="services section-redesign">
      <div class="container-redesign">
        <div class="section-header">
          <span class="text-label">Your product, your way</span>
          <h2 class="text-display-sm" style="margin-top: 16px;">Four ways to build together</h2>
        </div>
        <div class="services-grid">
          <div v-for="service in services" :key="service.title" class="service-card">
            <div class="service-icon" v-html="service.icon"></div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <NuxtLink :to="service.link" class="btn-text">
              Learn more about {{ service.title }}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== WHY US ===== -->
    <section class="why-us section-redesign">
      <div class="container-redesign">
        <div class="section-header">
          <span class="text-label">Why teams choose us</span>
          <h2 class="text-display-sm" style="margin-top: 16px;">The people you meet are the people who build.</h2>
        </div>
        <div class="why-us-grid">
          <div v-for="item in whyUs" :key="item.title" class="why-card">
            <div class="why-icon" v-html="item.icon"></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    <section class="testimonials section-redesign">
      <div class="container-redesign">
        <div class="section-header centered">
          <span class="text-label">From the people we build with</span>
          <h2 class="text-display-sm" style="margin-top: 16px;">Don't take our word for it.</h2>
        </div>
        <div class="testimonials-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
            <div class="testimonial-context">{{ testimonial.context }}</div>
            <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
            <div class="testimonial-author">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="testimonial-avatar" loading="lazy" width="44" height="44">
              <div>
                <div class="testimonial-name">{{ testimonial.name }}</div>
                <div class="testimonial-title">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-section section-redesign">
      <div class="container-redesign">
        <div class="section-header centered">
          <h2 class="text-display-sm">Let's build something together.</h2>
          <p class="text-body-lg" style="margin-top: 16px;">Whether you need one engineer or a full product team, whether you're launching an MVP or scaling an existing product — we'd love to hear what you're working on. No pitch decks. No sales pressure. Just a conversation about your product and how we might help.</p>
        </div>
        <div class="cta-actions">
          <NuxtLink to="/contact/" class="btn btn-primary cta-btn-lg">Start a conversation</NuxtLink>
          <p class="cta-alt">Or email us at <a href="mailto:business@acornglobus.com">business@acornglobus.com</a></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'AcornGlobus - Product Engineering Team That Builds It Like It\'s Ours',
  description: 'We\'re a product engineering team that built our own SaaS (Formester) — and we bring that same ownership to every product we touch.',
  keywords: 'product engineering, software development, resource augmentation, MVP development, web development, mobile app development, SaaS development, AcornGlobus',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'AcornGlobus - Product Engineering Team That Builds It Like It\'s Ours',
  ogDescription: 'We\'re a product engineering team that built our own SaaS (Formester) — and we bring that same ownership to every product we touch.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com',
  ogType: 'website',
  ogSiteName: 'AcornGlobus',
  twitterCard: 'summary_large_image',
  twitterSite: '@acornglobus',
  twitterCreator: '@acornglobus',
  twitterTitle: 'AcornGlobus - Product Engineering Team That Builds It Like It\'s Ours',
  twitterDescription: 'We\'re a product engineering team that built our own SaaS (Formester) — and we bring that same ownership to every product we touch.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

const services = [
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    title: 'Resource Augmentation',
    description: 'Your team, plus ours. Our engineers embed with your team — same tools, same standups, same codebase. You\'ll forget we\'re external. Scale from 1 engineer to 8+ as your product grows.',
    link: '/services/resource-augmentation/'
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    title: 'MVP Development',
    description: 'From idea to launch in 8-12 weeks. We scope it honestly, build it in sprints, and ship an MVP that\'s production-ready — not a prototype you\'ll rewrite in 6 months. You own the code from day one.',
    link: '/services/mvp-development/'
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    title: 'Full Project Delivery',
    description: 'One team, one relationship, start to finish. We take on your project end-to-end with milestone-based delivery. You see progress every two weeks. Clean code, full documentation, zero lock-in.',
    link: '/services/full-project-delivery/'
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    title: 'Maintenance & Support',
    description: 'We stay after launch. Launching is just the beginning. We monitor, fix, and improve — with the same engineers who built it. Because they know your product and they care about it.',
    link: '/services/maintenance-support/'
  }
]

const whyUs = [
  {
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    title: 'You\'ll Know Us By Name',
    description: '20+ engineers. No bench. No rotating juniors. The engineer you meet in the intro call is the engineer who writes your code. Real relationships, real accountability.'
  },
  {
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    title: 'We Guide, Not Just Execute',
    description: 'We\'ll tell you honestly what you need — and what can wait. Not to bill less, but because your success matters more than our invoice.'
  },
  {
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    title: 'Built to Hand Over',
    description: 'Your code. Your product. Your freedom. We build clean, documented, ready for your in-house team. Zero lock-in. Though most clients choose to stay.'
  },
  {
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    title: 'Stack-Agnostic',
    description: 'React, Node, Python, Flutter, AWS, Azure — we pick the right tool for the problem, not the one we\'re most comfortable with. What matters is the outcome.'
  }
]

useHead({
  link: [
    { rel: 'canonical', href: 'https://acornglobus.com/' },
    { rel: 'preload', as: 'image', href: '/images/hero.webp', type: 'image/webp' },
  ],
})

useBreadcrumbSchema([])

const testimonials = [
  {
    context: 'Started with 1 engineer. Now 8+ deep.',
    quote: 'Acorn Globus is my go-to team when I need a trusted partner to execute any front-end project. They are super attentive, communicate effectively, and accurately manage your expectations for their time and involvement.',
    name: 'Bogdan Arsenie',
    role: 'CTO, PerformLine',
    avatar: '/images/testimonials/bogdan.jpeg'
  },
  {
    context: 'They don\'t wait to be asked.',
    quote: 'Acorn Globus is a gifted team with a rare combination of attention to detail and an overall sense for the big picture. They are very passionate about what they do and come up proactively with improvement ideas.',
    name: 'Enzo Zadrima',
    role: 'CTO, Viewber',
    avatar: '/images/testimonials/enzo.jpeg'
  },
  {
    context: 'Built to last.',
    quote: 'Acorn Globus is a very proficient team, quick to learn new technologies and concepts. They quickly dove in deep and generated impressive results of high quality that are still operational to this day.',
    name: 'Alon Diamant',
    role: 'CTO, Mayple',
    avatar: '/images/testimonials/alon.jpeg'
  }
]
</script>

<style scoped>
/* ===== HERO ===== */
.hero {
  padding-top: 140px;
  padding-bottom: var(--section-gap);
  position: relative;
  overflow: hidden;
  background: var(--surface-bright);
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.hero-body {
  font-size: 20px;
  line-height: 1.65;
  color: var(--on-surface-variant);
  max-width: 520px;
  margin-bottom: 40px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 40px;
  padding-top: 32px;
  border-top: 1px solid rgba(194, 198, 213, 0.15);
}

.hero-stat-value {
  font-size: 28px;
  font-weight: 800;
  color: var(--on-surface);
  letter-spacing: -0.02em;
}

.hero-stat-label {
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 4px;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-illustration {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-img {
  width: 100%;
  border-radius: 16px;
}

/* Floating badges */
.floating-badge {
  position: absolute;
  background: var(--surface-container-lowest);
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: var(--shadow-float);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 2;
}

.floating-badge .badge-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.floating-badge .badge-text {
  font-size: 13px;
  font-weight: 600;
  color: var(--on-surface);
}

.floating-badge .badge-sub {
  font-size: 12px;
  color: var(--text-secondary);
}

.badge-formester {
  bottom: 40px;
  left: -20px;
}

.badge-retention {
  top: 40px;
  right: -20px;
}

/* ===== LOGO BAR ===== */
.logo-bar {
  padding: 64px 0;
  background: var(--surface);
}

.logo-bar-label {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 32px;
}

.logo-bar-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
  flex-wrap: wrap;
}

.logo-bar-item {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-secondary);
  opacity: 0.5;
  transition: opacity var(--duration-normal) var(--ease-premium);
}

.logo-bar-item:hover {
  opacity: 0.8;
}

/* ===== FORMESTER ===== */
.formester {
  background: var(--surface-bright);
}

.formester-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.formester-stats {
  display: flex;
  gap: 32px;
  margin: 32px 0;
}

.formester-stat {
  display: flex;
  flex-direction: column;
}

.formester-stat-value {
  font-size: 24px;
  font-weight: 800;
  color: var(--on-surface);
}

.formester-stat-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 2px;
}

/* ===== PARTNERSHIPS ===== */
.partnerships {
  background: var(--surface);
}

.partnership-story {
  background: var(--surface-container-lowest);
  border-radius: 20px;
  padding: 56px;
  margin-top: 48px;
  position: relative;
}

.partnership-story + .partnership-story {
  margin-top: 32px;
}

.partnership-story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.partnership-label {
  display: inline-block;
  background: var(--primary-fixed-dim);
  color: var(--primary);
  font-size: 12px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.partnership-stats {
  display: flex;
  gap: 32px;
  margin-top: 24px;
}

.partnership-stat-value {
  font-size: 32px;
  font-weight: 800;
  color: var(--brand-blue);
}

.partnership-stat-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 2px;
}

.partnership-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.partnership-tag {
  background: var(--surface);
  color: var(--on-surface-variant);
  font-size: 13px;
  padding: 6px 14px;
  border-radius: var(--radius-pill);
}

/* ===== MORE CASE STUDIES ===== */
.more-case-studies {
  margin-top: 80px;
  padding-top: 64px;
  border-top: 1px solid rgba(194, 198, 213, 0.15);
}

.case-study-links-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.case-study-link-card {
  display: flex;
  flex-direction: column;
  padding: 28px 24px;
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  text-decoration: none;
  transition: all var(--duration-normal) var(--ease-premium);
}

.case-study-link-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.case-study-link-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--brand-blue);
  margin-bottom: 8px;
}

.case-study-link-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 8px;
}

.case-study-link-desc {
  font-size: 14px;
  line-height: 1.5;
  color: var(--on-surface-variant);
}

/* ===== SERVICES ===== */
.services {
  background: var(--surface-bright);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 56px;
}

.service-card {
  background: var(--surface);
  border-radius: var(--radius-card);
  padding: 40px;
  transition: all var(--duration-normal) var(--ease-premium);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 0;
  background: linear-gradient(180deg, var(--primary), var(--primary-container));
  border-radius: 0 2px 2px 0;
  transition: height var(--duration-slow) var(--ease-premium);
}

.service-card:hover::before {
  height: 100%;
}

.service-card:hover {
  background: var(--surface-container-lowest);
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
}

.service-icon {
  width: 48px;
  height: 48px;
  background: var(--primary-fixed-dim);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--on-surface);
}

.service-card p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--on-surface-variant);
  margin-bottom: 20px;
}

/* ===== WHY US ===== */
.why-us {
  background: var(--surface);
}

.why-us-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 56px;
}

.why-card {
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  padding: 36px;
  transition: all var(--duration-normal) var(--ease-premium);
}

.why-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.why-icon {
  width: 44px;
  height: 44px;
  background: var(--primary-fixed-dim);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.why-card h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--on-surface);
}

.why-card p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--on-surface-variant);
}

/* ===== TESTIMONIALS ===== */
.testimonials {
  background: var(--surface-bright);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 56px;
}

.testimonial-card {
  background: var(--surface);
  border-radius: var(--radius-card);
  padding: 36px;
  display: flex;
  flex-direction: column;
  transition: all var(--duration-normal) var(--ease-premium);
}

.testimonial-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.testimonial-context {
  font-size: 13px;
  font-weight: 600;
  color: var(--brand-blue);
  margin-bottom: 16px;
}

.testimonial-quote {
  font-size: 17px;
  line-height: 1.6;
  color: var(--on-surface-variant);
  flex: 1;
  margin-bottom: 24px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid rgba(194, 198, 213, 0.15);
}

.testimonial-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--on-surface);
}

.testimonial-title {
  font-size: 13px;
  color: var(--text-secondary);
}

/* ===== CTA SECTION ===== */
.cta-section {
  background: var(--surface);
  text-align: center;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
}

.cta-btn-lg {
  font-size: 18px;
  padding: 18px 40px;
}

.cta-alt {
  font-size: 15px;
  color: var(--text-secondary);
}

.cta-alt a {
  color: var(--brand-blue);
  font-weight: 500;
}

/* ===== RESPONSIVE — Tablet ===== */
@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .hero-illustration {
    order: -1;
    max-width: 480px;
    margin: 0 auto;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .formester-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .partnership-story {
    padding: 40px;
  }

  .partnership-story-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .case-study-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}

/* ===== RESPONSIVE — Mobile ===== */
@media (max-width: 640px) {
  .hero {
    padding-top: 100px;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .hero-stat-value {
    font-size: 22px;
  }

  .hero-ctas {
    flex-direction: column;
  }

  .case-study-links-grid {
    grid-template-columns: 1fr;
  }

  .hero-ctas .btn {
    width: 100%;
    text-align: center;
  }

  .logo-bar-grid {
    gap: 32px;
  }

  .formester-stats {
    flex-direction: column;
    gap: 16px;
  }

  .partnership-story {
    padding: 24px;
  }

  .partnership-stats {
    flex-direction: column;
    gap: 16px;
  }

  .why-us-grid {
    grid-template-columns: 1fr;
  }

  .floating-badge {
    display: none;
  }
}
</style>
