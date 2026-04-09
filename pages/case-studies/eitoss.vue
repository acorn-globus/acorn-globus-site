<template>
  <div>
    <!-- HERO -->
    <section class="hero">
      <div class="container-redesign">
        <div style="max-width: 720px;">
          <NuxtLink to="/portfolio" class="breadcrumb">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Portfolio
          </NuxtLink>
          <div class="hero-eyebrow"><span>MVP Development</span></div>
          <h1 class="text-display-lg" style="margin-bottom: 20px;">Eitoss</h1>
          <p class="text-headline" style="margin-bottom: 16px; color: var(--on-surface-variant);">From an Idea to a Funded Product in 12 Weeks</p>
          <p class="text-body-lg">Eitoss came to us with a vision for better workplace communication. We shipped a demoable MVP in 8 weeks and had the product live in 3 months. They raised 60 million yen in funding. Two years later, we're still building together.</p>
          <div style="margin-top: 36px; display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
            <a href="https://eitoss.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Visit Live Site</a>
            <span class="badge-floating">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
              Funded &amp; Growing
            </span>
          </div>
        </div>

        <img src="/images/case-study-eitoss.webp" alt="Eitoss -- Kaizen communication platform connecting management and frontline workers" style="width: 100%; border-radius: 16px; margin-top: 32px;">
      </div>
    </section>

    <!-- PROJECT META -->
    <section style="background: var(--surface); padding: 48px 0;">
      <div class="container-redesign">
        <div class="project-meta">
          <div class="meta-item">
            <span class="meta-label">Client</span>
            <span class="meta-value">Eitoss</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Type</span>
            <span class="meta-value">MVP to Full Product</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Duration</span>
            <span class="meta-value">2+ Years &amp; Counting</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Status</span>
            <span class="meta-value">Live &amp; Funded</span>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="stats-row" style="border-top: none; padding-top: 0; margin-top: 0;">
          <div>
            <div class="stat-value">8 Weeks</div>
            <div class="stat-label">To Demoable MVP</div>
          </div>
          <div>
            <div class="stat-value">&#165;60M</div>
            <div class="stat-label">Funding Raised</div>
          </div>
          <div>
            <div class="stat-value">3 Months</div>
            <div class="stat-label">To Production</div>
          </div>
          <div>
            <div class="stat-value">2+</div>
            <div class="stat-label">Years Together</div>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT STARTED -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div style="max-width: 720px;">
          <h2 class="text-display-sm">How It Started</h2>
          <p class="text-body" style="margin-top: 20px;">Eitoss had a clear problem to solve: frontline workers and management weren't communicating well. Important feedback got lost. Good ideas never reached the people who could act on them. The gap between the factory floor and the leadership team was costing real money and real morale.</p>
          <p class="text-body" style="margin-top: 16px;">They came to us with a vision rooted in Kaizen -- the Japanese philosophy of continuous improvement. The idea was simple: give every worker a voice, and give management the tools to actually listen.</p>
          <p class="text-body" style="margin-top: 16px;">This was personal for us too. Eitoss was one of AcornGlobus's first projects -- the engagement that helped spark the company. We didn't treat it like a client brief. We treated it like building something of our own.</p>
        </div>
      </div>
    </section>

    <!-- WHAT WE BUILT TOGETHER -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div style="max-width: 720px;">
          <h2 class="text-display-sm">What We Built Together</h2>
          <p class="text-body" style="margin-top: 20px;">We didn't just write code to a spec. We worked with the Eitoss team to shape the product -- questioning assumptions, trimming scope to what mattered most, and making sure every feature earned its place in the MVP.</p>
        </div>
        <div class="feature-cards-3">
          <div class="feature-card-full">
            <h3>Kaizen Communication Channels</h3>
            <p>Structured feedback channels that let frontline workers submit improvement ideas, report issues, and communicate directly with management. Every suggestion gets tracked and routed to the right person.</p>
            <ul class="feature-sub-list">
              <li>Organized feedback with priority routing</li>
              <li>Improvement suggestion tracking</li>
              <li>Action item management so nothing gets lost</li>
              <li>Clear accountability for every submission</li>
            </ul>
          </div>
          <div class="feature-card-full">
            <h3>AI-Powered Knowledge Base</h3>
            <p>Workers ask questions in plain language and get instant answers, powered by Gemini and ChatGPT APIs. The system learns from interactions and gets smarter over time.</p>
            <ul class="feature-sub-list">
              <li>Dual AI integration for better responses</li>
              <li>Contextual answers based on company knowledge</li>
              <li>Handles queries in natural language</li>
              <li>Learns from every interaction</li>
            </ul>
          </div>
          <div class="feature-card-full">
            <h3>Analytics That Actually Help</h3>
            <p>A dashboard that shows managers what's working and what isn't -- response times, engagement rates, improvement trends. Not vanity metrics. Actionable insights that help teams get better.</p>
            <ul class="feature-sub-list">
              <li>Response time tracking</li>
              <li>Engagement and adoption metrics</li>
              <li>Improvement trend reports</li>
              <li>Team-level and org-level views</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- THE 12-WEEK JOURNEY -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div class="section-header centered">
          <h2 class="text-display-sm">The 12-Week Journey</h2>
          <p class="text-body-lg" style="margin-top: 12px;">From first conversation to a funded product.</p>
        </div>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <div>
              <h3>Discovery <span style="font-weight: 400; color: var(--text-secondary); font-size: 16px;">(Week 1-2)</span></h3>
              <p>We spent two weeks understanding the problem deeply -- talking to stakeholders, mapping out user flows, and scoping the MVP to what would actually prove the concept. We cut three features that sounded important but weren't essential for validation.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">2</div>
            <div>
              <h3>Design <span style="font-weight: 400; color: var(--text-secondary); font-size: 16px;">(Week 3-4)</span></h3>
              <p>UI/UX design focused on simplicity. The platform needed to be usable by frontline workers who might not be tech-savvy. We prototyped, tested, and iterated until the flows felt effortless.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">3</div>
            <div>
              <h3>Build <span style="font-weight: 400; color: var(--text-secondary); font-size: 16px;">(Week 5-10)</span></h3>
              <p>Six weeks of focused development. Sprint demos every two weeks so the Eitoss team could see progress, give feedback, and course-correct in real time. By week 8, we had a demoable product.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">4</div>
            <div>
              <h3>Launch <span style="font-weight: 400; color: var(--text-secondary); font-size: 16px;">(Week 11-12)</span></h3>
              <p>Testing, deployment, and onboarding real users. The product went live. Early adopters started using it. The data started coming in.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TECH STACK -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header centered">
          <h2 class="text-display-sm">Technology Stack</h2>
          <p class="text-body-lg" style="margin-top: 12px;">We chose each technology for a reason -- scalability, developer velocity, and long-term maintainability.</p>
        </div>
        <div class="tech-tags" style="justify-content: center;">
          <span class="tech-tag">React.js</span>
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">TailwindCSS</span>
          <span class="tech-tag">Ruby on Rails</span>
          <span class="tech-tag">PostgreSQL</span>
          <span class="tech-tag">Redis</span>
          <span class="tech-tag">Gemini API</span>
          <span class="tech-tag">ChatGPT API</span>
          <span class="tech-tag">Docker</span>
          <span class="tech-tag">AWS</span>
          <span class="tech-tag">CI/CD Pipeline</span>
        </div>
      </div>
    </section>

    <!-- WHAT HAPPENED NEXT -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div class="section-header centered">
          <h2 class="text-display-sm">What Happened Next</h2>
          <p class="text-body-lg" style="margin-top: 12px;">The MVP was just the beginning.</p>
        </div>
        <div class="impact-cards">
          <div class="impact-card">
            <h3>Raised 60 Million Yen</h3>
            <p>Eitoss used the working product to raise funding. Investors could see real users, real data, and a real product -- not a slide deck.</p>
          </div>
          <div class="impact-card">
            <h3>Early Adopters Validated the Concept</h3>
            <p>Real companies started using the platform. The feedback loop we'd built into the product proved its value from day one.</p>
          </div>
          <div class="impact-card">
            <h3>We Kept Building Together</h3>
            <p>After funding, Eitoss didn't go hire a new team. They stayed with us. Two years later, we're still growing the product together -- not because of a contract, but because the partnership works.</p>
          </div>
          <div class="impact-card">
            <h3>The Product Keeps Growing</h3>
            <p>New features, new integrations, expanding to new industries. The code we wrote in those first 12 weeks was built to last -- and it has.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-banner">
      <div class="container-redesign" style="text-align: center;">
        <h2 class="text-display-sm">Have a product idea you want to bring to life?</h2>
        <p class="text-body-lg" style="max-width: 640px; margin: 16px auto 0;">We shipped Eitoss's MVP in 12 weeks and we're still building together 2 years later. If you're looking for a team that builds with you for the long run, we'd love to hear what you're working on.</p>
        <div style="margin-top: 36px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <NuxtLink to="/contact" class="btn btn-primary" style="font-size: 18px; padding: 18px 40px;">Start a conversation</NuxtLink>
          <NuxtLink to="/portfolio" class="btn-text">See our work <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg></NuxtLink>
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
  title: 'Eitoss Case Study | From Idea to Funded Product in 12 Weeks | AcornGlobus',
  description: 'How we built Eitoss from idea to funded product in 12 weeks -- a Kaizen-based workplace communication platform that raised 60M yen. Two years later, we\'re still building together.',
  ogTitle: 'Eitoss Case Study | From Idea to Funded Product in 12 Weeks | AcornGlobus',
  ogDescription: 'How we built Eitoss from idea to funded product in 12 weeks -- a Kaizen-based workplace communication platform that raised 60M yen. Two years later, we\'re still building together.',
  ogImage: 'https://acornglobus.com/images/case-study-eitoss.webp',
  ogUrl: 'https://acornglobus.com/case-studies/eitoss',
  ogType: 'article',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://acornglobus.com/case-studies/eitoss' }],
})

useArticleSchema({
  title: 'Eitoss Case Study | From Idea to Funded Product in 12 Weeks',
  description: "How we built Eitoss from idea to funded product in 12 weeks -- a Kaizen-based workplace communication platform that raised 60M yen. Two years later, we're still building together.",
  url: '/case-studies/eitoss',
  datePublished: '2025-01-01',
  dateModified: '2025-01-01',
  image: 'https://acornglobus.com/images/case-study-eitoss.webp',
})

useBreadcrumbSchema([
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Eitoss', path: '/case-studies/eitoss' },
])
</script>

<style scoped>
/* ===== PROJECT META ===== */
.project-meta {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 32px 0;
}
.meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.meta-label {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-tertiary);
}
.meta-value {
  font-size: 17px;
  font-weight: 600;
  color: var(--on-surface);
}

/* ===== BADGE FLOATING ===== */
.badge-floating {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, rgba(52, 168, 83, 0.1), rgba(52, 168, 83, 0.05));
  border: 1px solid rgba(52, 168, 83, 0.2);
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  font-size: 14px;
  font-weight: 700;
  color: var(--success);
  margin-top: 24px;
}

/* ===== TECH TAGS ===== */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}
.tech-tag {
  background: var(--surface-container-lowest);
  border: 1px solid var(--outline-variant);
  padding: 10px 20px;
  border-radius: var(--radius-pill);
  font-size: 15px;
  font-weight: 500;
  color: var(--on-surface);
  transition: all var(--duration-fast) var(--ease-premium);
}
.tech-tag:hover {
  background: var(--primary-fixed-dim);
  border-color: var(--primary);
  color: var(--primary);
}

/* ===== FEATURE CARDS (3-col) ===== */
.feature-cards-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}
.feature-card-full {
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  padding: 32px;
  transition: all var(--duration-normal) var(--ease-premium);
}
.feature-card-full:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}
.feature-card-full h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 10px;
}
.feature-card-full > p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--on-surface-variant);
  margin-bottom: 16px;
}
.feature-sub-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.feature-sub-list li {
  font-size: 14px;
  color: var(--text-secondary);
  padding-left: 22px;
  position: relative;
  line-height: 1.5;
}
.feature-sub-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  width: 14px;
  height: 14px;
  background: var(--primary-fixed-dim);
  border-radius: 50%;
  background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 24 24' fill='none' stroke='%230058bd' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 8px;
}

/* ===== IMPACT CARDS ===== */
.impact-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;
}
.impact-card {
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  padding: 28px;
  transition: all var(--duration-normal) var(--ease-premium);
}
.impact-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}
.impact-card h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 8px;
}
.impact-card p {
  font-size: 14px;
  line-height: 1.55;
  color: var(--on-surface-variant);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .project-meta { grid-template-columns: repeat(2, 1fr); }
  .feature-cards-3 { grid-template-columns: 1fr; }
  .impact-cards { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .project-meta { grid-template-columns: 1fr; gap: 20px; }
  .impact-cards { grid-template-columns: 1fr; }
  .tech-tags { gap: 8px; }
  .tech-tag { padding: 8px 16px; font-size: 14px; }
}
</style>
