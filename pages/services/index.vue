<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="hero" style="padding-bottom: 80px;">
      <div class="container-redesign">
        <div style="max-width: 720px;">
          <div class="hero-eyebrow"><span>Our Services</span></div>
          <h1 class="text-display-lg" style="margin-bottom: 20px;">How We Work With You</h1>
          <p class="text-body-lg" ref="heroDesc">{{ activeTabDesc }}</p>
          <div class="tabs">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              class="tab-btn"
              :class="{ active: activeTab === tab.id }"
              @click="switchTab(tab)"
            >{{ tab.label }}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TAB: SERVICES ===== -->
    <div v-show="activeTab === 'services'">
      <!-- FOR STARTUPS -->
      <section style="padding-top: 0;">
        <div class="container-redesign">
          <div class="audience-header">
            <span class="text-label">For Startups</span>
            <p class="text-body-lg" style="margin-top: 12px; max-width: 640px;">You've got the vision and the funding. You need a team that ships real products — not prototypes you'll rewrite in six months.</p>
          </div>
          <div class="service-offerings-grid">
            <!-- MVP Development -->
            <div class="service-offering-card">
              <div class="service-icon-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 class="text-title-lg">Ship a real product in 8-12 weeks</h3>
              <p class="text-body" style="margin-top: 12px;">We take your product idea and build it with you — from concept to a working, deployable MVP. Production-quality from day one, with clean code and proper architecture. We've been through this ourselves with Formester.</p>
              <ul class="check-list">
                <li>Production-ready code, not a throwaway prototype</li>
                <li>100% code ownership from day one</li>
                <li>Post-launch support included</li>
              </ul>
              <div class="proof-point">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34A853" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Eitoss: MVP shipped in 3 months. They raised funding. We're still building together 2 years later.</span>
              </div>
              <div class="card-ctas">
                <NuxtLink to="/contact" class="btn btn-primary" style="padding: 12px 24px; font-size: 15px;">Let's talk about your product</NuxtLink>
                <NuxtLink to="/services/mvp-development" class="btn-text">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg></NuxtLink>
              </div>
            </div>

            <!-- Full Project Delivery -->
            <div class="service-offering-card">
              <div class="service-icon-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3 class="text-title-lg">Your product, built end-to-end by a team that cares</h3>
              <p class="text-body" style="margin-top: 12px;">From architecture to launch — one team, one relationship, no surprises. We walk with you through every decision and build it like it's our own.</p>
              <ul class="check-list">
                <li>Milestone transparency — you see progress, not just reports</li>
                <li>Built to hand over — zero lock-in</li>
                <li>4-week post-launch warranty</li>
              </ul>
              <div class="proof-point">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34A853" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>We built Formester end-to-end — our own SaaS product, live and growing with real users.</span>
              </div>
              <div class="card-ctas">
                <NuxtLink to="/contact" class="btn btn-primary" style="padding: 12px 24px; font-size: 15px;">Tell us what you're building</NuxtLink>
                <NuxtLink to="/services/full-project-delivery" class="btn-text">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FOR NON-TECHNICAL FOUNDERS -->
      <section class="section-redesign" style="background: var(--surface);">
        <div class="container-redesign">
          <div class="audience-header">
            <span class="text-label">For Non-Technical Founders</span>
            <p class="text-body-lg" style="margin-top: 12px; max-width: 640px;">You don't need a CTO yet. You need a team that translates your vision into a technical plan and walks you through every decision.</p>
          </div>
          <div class="service-offerings-grid">
            <div class="service-offering-card">
              <div class="service-icon-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h3 class="text-title-lg">From idea to working product — with a team that explains every step</h3>
              <p class="text-body" style="margin-top: 12px;">We'll help you define what to build first, guide you through the trade-offs, and ship something real. Milestone-based pricing so you know exactly what you're getting.</p>
              <ul class="check-list">
                <li>We scope the product with you — honest about what to build first and what can wait</li>
                <li>Weekly demos so you see progress, not just hear about it</li>
                <li>Clean handoff — your code, ready for your future in-house team</li>
              </ul>
              <div class="proof-point">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34A853" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>We built Formester ourselves. We know what it's like to care deeply about a product — and we bring that same care to yours.</span>
              </div>
              <div class="card-ctas">
                <NuxtLink to="/contact" class="btn btn-primary" style="padding: 12px 24px; font-size: 15px;">Let's figure this out together</NuxtLink>
                <NuxtLink to="/services/mvp-development" class="btn-text">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg></NuxtLink>
              </div>
            </div>
            <div class="service-offering-card">
              <div class="service-icon-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 class="text-title-lg">A product engineering team that feels like co-founders</h3>
              <p class="text-body" style="margin-top: 12px;">You define the what. We walk with you through the how. Every milestone is visible, every decision is explained in terms that make sense.</p>
              <ul class="check-list">
                <li>One team, one relationship — people you know by name</li>
                <li>Milestone-based pricing for budget predictability</li>
                <li>Full documentation and knowledge transfer</li>
              </ul>
              <div class="proof-point">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34A853" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>We guide, not just execute. We'll tell you honestly what you need — and what can wait.</span>
              </div>
              <div class="card-ctas">
                <NuxtLink to="/contact" class="btn btn-primary" style="padding: 12px 24px; font-size: 15px;">Start a conversation</NuxtLink>
                <NuxtLink to="/services/full-project-delivery" class="btn-text">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FOR ENGINEERING LEADERS -->
      <section class="section-redesign">
        <div class="container-redesign">
          <div class="audience-header">
            <span class="text-label">For Engineering Leaders</span>
            <p class="text-body-lg" style="margin-top: 12px; max-width: 640px;">Your team is great. We make it bigger without making it harder to manage.</p>
          </div>
          <div class="service-offerings-grid">
            <div class="service-offering-card">
              <div class="service-icon-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
              </div>
              <h3 class="text-title-lg">Engineers who embed with your team — not outsiders filling seats</h3>
              <p class="text-body" style="margin-top: 12px;">Same tools, same standups, same codebase. Our engineers become part of your team because that's how we think about it. You'll know them by name.</p>
              <ul class="check-list">
                <li>2-week trial before any commitment</li>
                <li>Engineers ramp on your codebase in 1-2 weeks</li>
                <li>Scale up or down with 2-week notice</li>
              </ul>
              <div class="proof-point">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34A853" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>PerformLine started with 1 engineer. Two years later, we're 8+ deep — full-stack, DevOps, QA, frontend.</span>
              </div>
              <div class="card-ctas">
                <NuxtLink to="/contact" class="btn btn-primary" style="padding: 12px 24px; font-size: 15px;">Tell us what your team needs</NuxtLink>
                <NuxtLink to="/services/resource-augmentation" class="btn-text">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg></NuxtLink>
              </div>
            </div>
            <div class="service-offering-card">
              <div class="service-icon-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 class="text-title-lg">We stay with your product after launch</h3>
              <p class="text-body" style="margin-top: 12px;">Bug fixes, security updates, performance monitoring, and incremental improvements. When possible, the same team that built it maintains it — because they know your product deeply.</p>
              <ul class="check-list">
                <li>Proactive monitoring — we fix before you notice</li>
                <li>Transparent hours — you see exactly what we spend time on</li>
                <li>No lock-in — full documentation means you can leave anytime</li>
              </ul>
              <div class="proof-point">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34A853" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>80%+ client retention. Most of our maintenance relationships started as MVP or project delivery. Same team, same trust.</span>
              </div>
              <div class="card-ctas">
                <NuxtLink to="/contact" class="btn btn-primary" style="padding: 12px 24px; font-size: 15px;">Let's keep your product healthy</NuxtLink>
                <NuxtLink to="/services/maintenance-support" class="btn-text">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- GUIDES -->
      <section class="section-redesign" style="background: var(--surface);">
        <div class="container-redesign">
          <div class="section-header">
            <span class="text-label">Resources</span>
            <h2 class="text-display-sm" style="margin-top: 16px;">Go Deeper</h2>
            <p class="text-body-lg" style="margin-top: 12px;">Explore our comprehensive guides to make informed decisions about your next project.</p>
          </div>
          <div class="guides-grid">
            <div class="guide-card">
              <div class="guide-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <h3 class="text-title-lg">The Complete Guide to IT Staff Augmentation</h3>
              <p class="text-body" style="margin-top: 8px;">Everything you need to know about scaling your engineering team — models, costs, when to use it, and how to make it work.</p>
              <NuxtLink to="/guides/it-staff-augmentation" class="btn-text" style="margin-top: 16px;">Read the guide <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg></NuxtLink>
            </div>
            <div class="guide-card">
              <div class="guide-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <h3 class="text-title-lg">The Complete Guide to MVP Development</h3>
              <p class="text-body" style="margin-top: 8px;">From idea to working product — costs, timelines, frameworks, and the process we use to ship MVPs that raise funding.</p>
              <NuxtLink to="/guides/mvp-development" class="btn-text" style="margin-top: 16px;">Read the guide <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg></NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- ===== TAB: OUR PROCESS ===== -->
    <div v-show="activeTab === 'process'">
      <section class="section-redesign">
        <div class="container-redesign">
          <div class="process-phases">
            <div class="phase-card">
              <div class="phase-number">1</div>
              <h3>Understanding Your Vision</h3>
              <p>We begin with in-depth problem analysis and market research to understand your goals and challenges.</p>
              <ul class="phase-activities">
                <li>Problem Analysis</li>
                <li>Market Research</li>
                <li>Resource Assessment</li>
                <li>Team Structure Planning</li>
              </ul>
            </div>
            <div class="phase-card">
              <div class="phase-number">2</div>
              <h3>Planning for Success</h3>
              <p>We develop a clear strategy that aligns with your business objectives and technical requirements.</p>
              <ul class="phase-activities">
                <li>Architecture Design</li>
                <li>Technology Selection</li>
                <li>Roadmap Creation</li>
                <li>Risk Assessment</li>
              </ul>
            </div>
            <div class="phase-card">
              <div class="phase-number">3</div>
              <h3>Building Your Product</h3>
              <p>Our team executes the plan with agile methodology, ensuring quality and timely delivery.</p>
              <ul class="phase-activities">
                <li>Agile Development</li>
                <li>Code Reviews</li>
                <li>Testing &amp; QA</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div class="phase-card">
              <div class="phase-number">4</div>
              <h3>Launch &amp; Beyond</h3>
              <p>We ensure smooth deployment and provide ongoing support to guarantee long-term success.</p>
              <ul class="phase-activities">
                <li>Deployment</li>
                <li>Training</li>
                <li>Monitoring</li>
                <li>Continuous Support</li>
              </ul>
            </div>
          </div>

          <div class="benefits-row">
            <div class="benefit-card">
              <h3>Daily Communication</h3>
              <p>Stand-ups and updates so you always know where your product stands.</p>
            </div>
            <div class="benefit-card">
              <h3>Iterative Delivery</h3>
              <p>2-week sprints with demos at the end of each. You see progress, not just hear about it.</p>
            </div>
            <div class="benefit-card">
              <h3>Your Outcome Is Our Outcome</h3>
              <p>We make decisions based on what's right for your product, not what's easiest to build.</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- ===== TAB: TECHNOLOGIES ===== -->
    <div v-show="activeTab === 'technologies'">
      <section class="section-redesign">
        <div class="container-redesign">
          <div class="tech-grid">
            <div v-for="tech in technologies" :key="tech.name" class="tech-card">
              <div class="tech-emoji">{{ tech.emoji }}</div>
              <h3>{{ tech.name }}</h3>
              <span class="tech-type">{{ tech.type }}</span>
            </div>
          </div>

          <div class="benefits-row">
            <div class="benefit-card">
              <h3>Production-Proven</h3>
              <p>Every technology in our stack has been used to ship real products — including Formester, our own SaaS.</p>
            </div>
            <div class="benefit-card">
              <h3>Built to Hand Over</h3>
              <p>Your code, your product, your freedom. Clean code, full documentation, zero lock-in.</p>
            </div>
            <div class="benefit-card">
              <h3>Security by Default</h3>
              <p>Security practices baked into every project from the start — not bolted on at the end.</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- ===== WHAT SETS US APART (always visible) ===== -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header centered">
          <h2 class="text-display-sm">What Sets Us Apart</h2>
        </div>
        <div class="differentiators-grid">
          <div class="diff-card">
            <div class="diff-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <h3>We Build It Like It's Ours</h3>
            <p>We built Formester, our own SaaS. We bring that same ownership to every product we touch.</p>
          </div>
          <div class="diff-card">
            <div class="diff-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h3>You'll Know Us By Name</h3>
            <p>20+ engineers. No bench, no rotating juniors. The people you meet are the people who build.</p>
          </div>
          <div class="diff-card">
            <div class="diff-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <h3>We Guide, Not Just Execute</h3>
            <p>We'll tell you honestly what you need — and what can wait.</p>
          </div>
          <div class="diff-card">
            <div class="diff-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0058bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>We Stay</h3>
            <p>PerformLine: 1 engineer to 8+ in 2 years. We don't just deliver — we grow with you.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-banner">
      <div class="container-redesign" style="text-align: center;">
        <h2 class="text-display-sm">Have a Product in Mind?</h2>
        <p class="text-body-lg" style="max-width: 520px; margin: 16px auto 0;">Tell us about it. We'll share how we'd approach it — honestly.</p>
        <div style="margin-top: 36px;">
          <NuxtLink to="/contact" class="btn btn-primary" style="font-size: 18px; padding: 18px 40px;">Let's Talk</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Services | Product Engineering, MVP Development & Team Augmentation | AcornGlobus',
  description: 'Whether you need a team to build your MVP, engineers who embed with yours, or a partner for the long haul — here\'s how we can help.',
  ogTitle: 'Services | Product Engineering, MVP Development & Team Augmentation | AcornGlobus',
  ogDescription: 'Whether you need a team to build your MVP, engineers who embed with yours, or a partner for the long haul — here\'s how we can help.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/services',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://acornglobus.com/services' }],
})

useBreadcrumbSchema([
  { name: 'Services', path: '/services' },
])

const tabs = [
  { id: 'services', label: 'Services', heading: 'How We Work With You', desc: "Whether you need a team to build your MVP, engineers who embed with yours, or a partner for the long haul — here's how we can help." },
  { id: 'process', label: 'Our Process', heading: 'How We Work Together', desc: "We don't just work for you — we work with you. Same tools, same standups, shared responsibility for the outcome." },
  { id: 'technologies', label: 'Technologies', heading: 'Our Technology Stack', desc: "We're stack-agnostic — we pick the right technology for your problem, not the other way around. Here's what we work with daily." },
]

const activeTab = ref('services')
const activeTabHeading = ref(tabs[0].heading)
const activeTabDesc = ref(tabs[0].desc)

const switchTab = (tab) => {
  activeTab.value = tab.id
  activeTabHeading.value = tab.heading
  activeTabDesc.value = tab.desc
}

const technologies = [
  { emoji: '\u{1F48E}', name: 'Ruby on Rails', type: 'Backend' },
  { emoji: '\u269B\uFE0F', name: 'React.js', type: 'Frontend' },
  { emoji: '\u{1F7E2}', name: 'Vue.js', type: 'Frontend' },
  { emoji: '\u{1F53A}', name: 'Angular', type: 'Frontend' },
  { emoji: '\u{1F7E6}', name: '.NET', type: 'Backend' },
  { emoji: '\u{1F7E9}', name: 'Node.js', type: 'Backend' },
  { emoji: '\u{1F418}', name: 'PostgreSQL', type: 'Database' },
  { emoji: '\u2601\uFE0F', name: 'AWS', type: 'Cloud' },
]
</script>

<style scoped>
/* ===== HERO ===== */
.hero {
  padding-top: 140px;
  padding-bottom: 80px;
}

/* ===== TABS ===== */
.tabs {
  display: flex;
  gap: 8px;
  margin-top: 32px;
}
.tab-btn {
  padding: 10px 24px;
  font-size: 15px;
  font-weight: 600;
  font-family: inherit;
  border: none;
  border-radius: var(--radius-pill);
  cursor: pointer;
  background: var(--surface-container-high);
  color: var(--on-surface-variant);
  transition: all var(--duration-normal) var(--ease-premium);
}
.tab-btn.active {
  background: linear-gradient(135deg, var(--primary), var(--primary-container));
  color: white;
  box-shadow: 0 4px 16px rgba(0, 88, 189, 0.25);
}
.tab-btn:hover:not(.active) {
  background: var(--surface-container);
  color: var(--on-surface);
}

/* ===== PROCESS PHASES ===== */
.process-phases {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 48px;
}
.phase-card {
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  padding: 32px;
  transition: all var(--duration-normal) var(--ease-premium);
}
.phase-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}
.phase-number {
  width: 36px;
  height: 36px;
  background: var(--primary-fixed-dim);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 16px;
}
.phase-card h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--on-surface);
}
.phase-card > p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--on-surface-variant);
  margin-bottom: 16px;
}
.phase-activities {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.phase-activities li {
  font-size: 14px;
  color: var(--text-secondary);
  padding-left: 20px;
  position: relative;
}
.phase-activities li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 7px;
  width: 6px;
  height: 6px;
  background: var(--brand-blue);
  border-radius: 50%;
}

/* ===== BENEFITS ROW ===== */
.benefits-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}
.benefit-card {
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  padding: 28px;
  text-align: center;
  transition: all var(--duration-normal) var(--ease-premium);
}
.benefit-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}
.benefit-card h3 {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--on-surface);
}
.benefit-card p {
  font-size: 15px;
  line-height: 1.5;
  color: var(--on-surface-variant);
}

/* ===== TECH GRID ===== */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 48px;
}
.tech-card {
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  padding: 28px;
  text-align: center;
  transition: all var(--duration-normal) var(--ease-premium);
}
.tech-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}
.tech-emoji {
  font-size: 36px;
  margin-bottom: 12px;
}
.tech-card h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 4px;
}
.tech-type {
  font-size: 13px;
  color: var(--text-secondary);
}

/* ===== RESPONSIVE - Tablet ===== */
@media (max-width: 1024px) {
  .process-phases {
    grid-template-columns: repeat(2, 1fr);
  }
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ===== RESPONSIVE - Mobile ===== */
@media (max-width: 640px) {
  .hero {
    padding-top: 100px;
  }
  .process-phases {
    grid-template-columns: 1fr;
  }
  .benefits-row {
    grid-template-columns: 1fr;
  }
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .tabs {
    flex-wrap: wrap;
  }
}
</style>
