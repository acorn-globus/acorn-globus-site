<template>
  <div>
    <!-- HERO -->
    <section class="hero">
      <div class="container-redesign">
        <div class="formester-breadcrumb">
          <NuxtLink to="/portfolio">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          </NuxtLink>
          <NuxtLink to="/portfolio">Back to Portfolio</NuxtLink>
        </div>
        <div class="hero-eyebrow"><span>Our Own SaaS Product</span></div>
        <div class="hero-grid">
          <div>
            <h1 class="text-display-lg">We Built Our Own SaaS. Here's What It Taught Us About Building Yours.</h1>
            <p class="text-body-lg" style="margin-top: 24px; max-width: 560px;">Formester is our SaaS product — a no-code, AI-powered form builder used by real businesses every day. Building it changed how we work with every client.</p>
            <div style="display: flex; gap: 16px; margin-top: 40px;">
              <a href="https://formester.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Visit Formester</a>
              <NuxtLink to="/contact" class="btn btn-secondary">Let's Talk</NuxtLink>
            </div>
          </div>
          <div class="hero-image">
            <img src="/images/formester.webp" alt="Formester Platform" style="width:100%;border-radius:16px;" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECT META -->
    <section style="background: var(--surface);">
      <div class="container-redesign">
        <div class="meta-bar">
          <div>
            <div class="meta-item-label">Product</div>
            <div class="meta-item-value">Formester</div>
          </div>
          <div>
            <div class="meta-item-label">Type</div>
            <div class="meta-item-value">Our Own SaaS</div>
          </div>
          <div>
            <div class="meta-item-label">Status</div>
            <div class="meta-item-value">Live &amp; Growing</div>
          </div>
          <div>
            <div class="meta-item-label">Stack</div>
            <div class="meta-item-value">Rails + Vue.js</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SOCIAL PROOF STATS -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="proof-stats">
          <div class="proof-stat">
            <div class="proof-stat-value">4.7/5</div>
            <div class="proof-stat-label">G2 Rating (33 Reviews)</div>
          </div>
          <div class="proof-stat">
            <div class="proof-stat-value">4.4/5</div>
            <div class="proof-stat-label">Trustpilot</div>
          </div>
          <div class="proof-stat">
            <div class="proof-stat-value">5/5</div>
            <div class="proof-stat-label">Product Hunt &amp; Capterra</div>
          </div>
          <div class="proof-stat">
            <div class="proof-stat-value">1,000+</div>
            <div class="proof-stat-label">Zapier Integrations</div>
          </div>
        </div>
      </div>
    </section>

    <!-- IT STARTED WITH A QUESTION -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign" style="max-width: 760px;">
        <div class="section-header">
          <span class="text-label">The Origin</span>
          <h2 class="text-display-sm" style="margin-top: 16px;">It Started With a Question</h2>
        </div>
        <div style="margin-top: 32px;">
          <p class="text-body" style="margin-bottom: 20px; line-height: 1.75;">We'd been building products for clients for years. Good products. Products we were proud of. But there was always a gap between executing someone else's spec and truly owning the outcome. We wanted to know what it feels like on the other side — to be the ones who lose sleep when something breaks at 2am, who feel the weight of a user churning, who celebrate when the metrics move in the right direction.</p>
          <p class="text-body" style="margin-bottom: 20px; line-height: 1.75;">So we built Formester. Not as a side project. Not as a demo. As a real product, with real users, real revenue, and real consequences. We wanted to experience every part of the product lifecycle ourselves — from the first commit to the first paying customer, from the support ticket that reveals a blind spot to the feature request that changes your roadmap.</p>
          <p class="text-body" style="line-height: 1.75;">It changed everything about how we work with clients. When you've been the founder staring at your own dashboard wondering why users drop off at step three, you approach someone else's product differently. You stop building to spec and start building to outcome.</p>
        </div>
      </div>
    </section>

    <!-- WHAT WE BUILT -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header centered">
          <span class="text-label">The Product</span>
          <h2 class="text-display-sm" style="margin-top: 16px;">What We Built</h2>
          <p class="text-body-lg" style="margin-top: 16px; max-width: 640px; margin-left: auto; margin-right: auto;">Formester is a form builder — but that understates it. The surface is simple. What's underneath is not.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <h3>AI-Powered Form Creation</h3>
            <p>Describe what you need in plain English and Formester generates a complete, styled form — fields, validation, logic, and all. Built on OpenAI's API, tuned with thousands of real form patterns.</p>
          </div>
          <div class="feature-card">
            <h3>Conditional Logic for Everyone</h3>
            <p>Show, hide, and route based on user responses. Complex branching logic that non-technical users can set up in minutes — no code, no compromise.</p>
          </div>
          <div class="feature-card">
            <h3>Payment Processing Baked In</h3>
            <p>Accept payments directly through forms with Stripe and PayPal integrations. Order forms, donation pages, registration with fees — all without a separate checkout flow.</p>
          </div>
          <div class="feature-card">
            <h3>Real-Time Collaboration</h3>
            <p>Teams build forms together. Share, comment, iterate. No more emailing screenshots of form drafts back and forth.</p>
          </div>
          <div class="feature-card">
            <h3>Analytics That Answer "So What?"</h3>
            <p>Completion rates, drop-off points, field-level analytics. Not just data — insights that tell you what to fix and what's working.</p>
          </div>
          <div class="feature-card">
            <h3>No-Code Builder</h3>
            <p>Drag, drop, configure, publish. The builder is designed for people who have better things to do than learn another tool. Simple on the surface, powerful underneath.</p>
          </div>
        </div>
        <div class="tech-note">
          <strong>Under the hood:</strong> Ruby on Rails, Vue.js, PostgreSQL, Redis, AWS, and OpenAI API.
        </div>
      </div>
    </section>

    <!-- FIVE THINGS BUILDING FORMESTER TAUGHT US -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign" style="max-width: 820px;">
        <div class="section-header centered">
          <span class="text-label">Lessons Learned</span>
          <h2 class="text-display-sm" style="margin-top: 16px;">Five Things Building Formester Taught Us</h2>
          <p class="text-body-lg" style="margin-top: 16px; max-width: 640px; margin-left: auto; margin-right: auto;">These aren't abstract lessons. They're things we learned the hard way.</p>
        </div>
        <div class="lessons-list">
          <div class="lesson-card">
            <div class="lesson-number">Lesson 01</div>
            <h3>The spec is never the product</h3>
            <p>When we wrote the spec for Formester's conditional logic, it was clean: "If field A equals X, show field B." Simple. Then real users got involved. They needed nested conditions, conditions based on partial matches, conditions that triggered across pages. The spec covered maybe 30% of what the product actually needed. We learned that the real product lives in the gaps between spec lines — in the edge cases, the "what ifs," the things users do that you never imagined. Now when we build for clients, we don't just implement the spec. We stress-test it against reality before writing a line of code.</p>
            <div class="lesson-client">
              <div class="lesson-client-label">How this shows up in client work</div>
              <p>We challenge specs early. We ask "what happens when a user does X?" before we build, not after. We prototype the risky parts first. We've saved clients months of rework by catching spec gaps in week one.</p>
            </div>
          </div>
          <div class="lesson-card">
            <div class="lesson-number">Lesson 02</div>
            <h3>Technical debt is personal when it's your product</h3>
            <p>Every engineering team talks about technical debt. But when it's your product — when that shortcut you took six months ago is now causing a bug that's making users leave — it hits differently. With Formester, we've lived with every shortcut we ever took. We've felt the cost of "we'll fix it later" in real churn numbers. That changed our relationship with code quality forever. Not in a "let's over-engineer everything" way, but in a "let's be honest about what we're trading off" way.</p>
            <div class="lesson-client">
              <div class="lesson-client-label">How this shows up in client work</div>
              <p>We flag technical debt explicitly and help clients make informed tradeoffs. "This shortcut saves two weeks now but will cost a month later. Here's when it'll hurt." Clients deserve to make that call with full information.</p>
            </div>
          </div>
          <div class="lesson-card">
            <div class="lesson-number">Lesson 03</div>
            <h3>Shipping is the beginning, not the end</h3>
            <p>The day we launched Formester, we thought we were done with the hard part. We were wrong. Launch day is when the real work starts. Support tickets reveal what your testing missed. Analytics show where users actually struggle (hint: it's never where you expected). Feature requests reshape your roadmap. The product you launched is version 0.1 of what it needs to become. We've been shipping updates to Formester every week for years. That rhythm — build, ship, learn, repeat — is now core to how we work.</p>
            <div class="lesson-client">
              <div class="lesson-client-label">How this shows up in client work</div>
              <p>We plan for post-launch from day one. We build analytics in early. We set up feedback loops. We don't disappear after delivery — 80%+ of our clients stay with us long after launch because the real partnership starts when users show up.</p>
            </div>
          </div>
          <div class="lesson-card">
            <div class="lesson-number">Lesson 04</div>
            <h3>Users don't care about your architecture</h3>
            <p>We rebuilt Formester's rendering engine twice. The first time, it was architecturally elegant — clean abstractions, beautiful separation of concerns. Users hated it. Forms loaded 200ms slower. Nobody cared that the code was pretty. The second rebuild was uglier but faster. Users loved it. That experience killed any remaining attachment we had to architecture for architecture's sake. Good architecture serves the user. If it doesn't make the product faster, more reliable, or easier to change, it's vanity.</p>
            <div class="lesson-client">
              <div class="lesson-client-label">How this shows up in client work</div>
              <p>We make architecture decisions based on user impact, not engineering elegance. When we recommend a tech stack or approach, the first question is "how does this affect the person using the product?" — not "how clean is the code?"</p>
            </div>
          </div>
          <div class="lesson-card">
            <div class="lesson-number">Lesson 05</div>
            <h3>Ownership means staying</h3>
            <p>Anyone can build a feature and move on. Ownership means being there when it breaks at 3am. It means watching your error logs on weekends. It means caring about that one user who filed a bug report at midnight because their payment form stopped working during a fundraiser. We've been maintaining Formester for years. We know what it means to truly own a product — not just the code, but the outcome. The uptime. The user experience. The business result.</p>
            <div class="lesson-client">
              <div class="lesson-client-label">How this shows up in client work</div>
              <p>We don't build and disappear. PerformLine started with 1 engineer and grew to 8+ over 2 years. Eitoss went from MVP to funding to 2+ years of continued partnership. We stay because we care about what happens after we ship.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- THE NUMBERS -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header centered">
          <span class="text-label">By the Numbers</span>
          <h2 class="text-display-sm" style="margin-top: 16px;">The Numbers</h2>
          <p class="text-body-lg" style="margin-top: 16px; max-width: 640px; margin-left: auto; margin-right: auto;">These aren't projections. They're the result of years of building, listening to users, and making the product better every week.</p>
        </div>
        <div class="numbers-grid">
          <div class="number-card">
            <div class="number-card-value">4.7/5</div>
            <div class="number-card-title">G2 Rating</div>
            <div class="number-card-desc">33 verified reviews from real users</div>
          </div>
          <div class="number-card">
            <div class="number-card-value">4.4/5</div>
            <div class="number-card-title">Trustpilot</div>
            <div class="number-card-desc">Trusted by businesses worldwide</div>
          </div>
          <div class="number-card">
            <div class="number-card-value">5/5</div>
            <div class="number-card-title">Product Hunt &amp; Capterra</div>
            <div class="number-card-desc">Perfect scores on both platforms</div>
          </div>
          <div class="number-card">
            <div class="number-card-value">Rising Star</div>
            <div class="number-card-title">Rising Star Award</div>
            <div class="number-card-desc">Recognized by G2 for rapid growth and high satisfaction</div>
          </div>
          <div class="number-card">
            <div class="number-card-value">Top Builder</div>
            <div class="number-card-title">Top Form Builder</div>
            <div class="number-card-desc">Consistently ranked among the best form builders on review platforms</div>
          </div>
          <div class="number-card">
            <div class="number-card-value">1,000+</div>
            <div class="number-card-title">Integrations via Zapier</div>
            <div class="number-card-desc">Connect Formester to the tools you already use</div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY THIS MATTERS FOR YOU -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div class="section-header centered">
          <span class="text-label">For You</span>
          <h2 class="text-display-sm" style="margin-top: 16px;">Why This Matters for You</h2>
        </div>
        <div style="max-width: 720px; margin: 32px auto 0;">
          <p class="text-body" style="margin-bottom: 20px; line-height: 1.75;">Formester isn't just a product we built. It's proof that we know what ownership means. We've felt the weight of a production outage. We've stayed up debugging a payment integration the night before a client's fundraiser. We've watched users struggle with something we thought was intuitive and gone back to the drawing board.</p>
          <p class="text-body" style="line-height: 1.75;">When we say "we build it like it's ours," Formester is what makes that real. It's not a tagline. It's a product you can visit, use, and judge for yourself.</p>
        </div>
        <div class="audience-grid">
          <div class="audience-card">
            <h3>For funded startups</h3>
            <p>You need a team that understands product thinking, not just feature tickets. We've built and scaled our own SaaS — we know what it takes to go from zero to real users and revenue. We bring that product instinct to your build.</p>
          </div>
          <div class="audience-card">
            <h3>For non-technical founders</h3>
            <p>You need a team that can translate vision into product without losing what makes it yours. We've been the founders too. We'll guide you through every technical decision the way we wish someone had guided us.</p>
          </div>
          <div class="audience-card">
            <h3>For growing companies</h3>
            <p>You need engineers who think beyond the sprint. We maintain Formester every day — we know what it means to build for the long run, not just the launch. That perspective shapes every line of code we write for you.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-banner">
      <div class="container-redesign" style="text-align: center; max-width: 700px;">
        <p class="text-body-lg" style="margin-bottom: 24px; opacity: 0.9;">Formester is live at formester.com. We built it. We maintain it. We use what we learn from it every single day.</p>
        <h2 class="text-display-sm">Want a team that builds your product with the same care we put into ours?</h2>
        <div class="cta-actions" style="justify-content: center;">
          <NuxtLink to="/contact" class="btn btn-primary">Let's Talk</NuxtLink>
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
  title: 'Formester Case Study | We Built Our Own SaaS | AcornGlobus',
  description: 'Formester is our SaaS product — a no-code, AI-powered form builder. Building it changed how we work with every client. Here\'s the full story.',
  ogTitle: 'Formester Case Study | We Built Our Own SaaS | AcornGlobus',
  ogDescription: 'Formester is our SaaS product — a no-code, AI-powered form builder. Building it changed how we work with every client. Here\'s the full story.',
  ogImage: 'https://acornglobus.com/images/formester.webp',
  ogUrl: 'https://acornglobus.com/case-studies/formester',
  ogType: 'article',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://acornglobus.com/case-studies/formester' }],
})

useBreadcrumbSchema([
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Formester', path: '/case-studies/formester' },
])
</script>

<style scoped>
/* Breadcrumb for formester page */
.formester-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 24px;
}
.formester-breadcrumb a {
  color: var(--brand-blue);
  text-decoration: none;
  transition: color var(--duration-normal) var(--ease-premium);
}
.formester-breadcrumb a:hover {
  color: var(--primary);
}
.formester-breadcrumb svg {
  width: 14px;
  height: 14px;
}

/* Hero layout */
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  margin-top: 40px;
}
.hero-image img {
  width: 100%;
  border-radius: 16px;
}

/* Project meta bar */
.meta-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 40px 0;
}
.meta-item-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 6px;
}
.meta-item-value {
  font-size: 17px;
  font-weight: 700;
  color: var(--on-surface);
}

/* Social proof stats row */
.proof-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 48px;
}
.proof-stat {
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  padding: 32px;
  text-align: center;
  transition: all var(--duration-normal) var(--ease-premium);
}
.proof-stat:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}
.proof-stat-value {
  font-size: 28px;
  font-weight: 800;
  color: var(--on-surface);
  letter-spacing: -0.02em;
}
.proof-stat-label {
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 4px;
}

/* Feature cards */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}
.feature-card {
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  padding: 36px;
  transition: all var(--duration-normal) var(--ease-premium);
}
.feature-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}
.feature-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 12px;
}
.feature-card p {
  font-size: 15px;
  line-height: 1.65;
  color: var(--on-surface-variant);
}

/* Tech note */
.tech-note {
  margin-top: 32px;
  padding: 24px 32px;
  background: var(--surface-container-high);
  border-radius: var(--radius-card);
  font-size: 15px;
  color: var(--on-surface-variant);
  line-height: 1.6;
}
.tech-note strong {
  color: var(--on-surface);
}

/* Lesson cards */
.lessons-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
}
.lesson-card {
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  padding: 40px;
  transition: all var(--duration-normal) var(--ease-premium);
}
.lesson-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}
.lesson-number {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brand-blue);
  margin-bottom: 12px;
}
.lesson-card h3 {
  font-size: 24px;
  font-weight: 800;
  color: var(--on-surface);
  margin-bottom: 16px;
  letter-spacing: -0.01em;
}
.lesson-card > p {
  font-size: 16px;
  line-height: 1.7;
  color: var(--on-surface-variant);
  margin-bottom: 20px;
}
.lesson-client {
  padding: 20px 24px;
  background: var(--surface-container-high);
  border-radius: 12px;
  border-left: 3px solid var(--brand-blue);
}
.lesson-client-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brand-blue);
  margin-bottom: 8px;
}
.lesson-client p {
  font-size: 15px;
  line-height: 1.65;
  color: var(--on-surface-variant);
}

/* Numbers grid */
.numbers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}
.number-card {
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  padding: 36px;
  text-align: center;
  transition: all var(--duration-normal) var(--ease-premium);
}
.number-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}
.number-card-value {
  font-size: 32px;
  font-weight: 800;
  color: var(--on-surface);
  letter-spacing: -0.02em;
}
.number-card-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--on-surface);
  margin-top: 8px;
}
.number-card-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 6px;
  line-height: 1.5;
}

/* Audience cards */
.audience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}
.audience-card {
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  padding: 36px;
  transition: all var(--duration-normal) var(--ease-premium);
}
.audience-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}
.audience-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 12px;
}
.audience-card p {
  font-size: 15px;
  line-height: 1.65;
  color: var(--on-surface-variant);
}

/* CTA actions */
.cta-actions {
  display: flex;
  gap: 16px;
  margin-top: 32px;
}

/* Responsive -- Tablet */
@media (max-width: 1024px) {
  .hero-grid { grid-template-columns: 1fr; gap: 40px; }
  .meta-bar { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .proof-stats { grid-template-columns: repeat(2, 1fr); }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .numbers-grid { grid-template-columns: repeat(2, 1fr); }
  .audience-grid { grid-template-columns: 1fr; }
}

/* Responsive -- Mobile */
@media (max-width: 640px) {
  .hero-grid { grid-template-columns: 1fr; gap: 32px; }
  .meta-bar { grid-template-columns: 1fr; gap: 20px; }
  .proof-stats { grid-template-columns: 1fr; }
  .features-grid { grid-template-columns: 1fr; }
  .numbers-grid { grid-template-columns: 1fr; }
  .audience-grid { grid-template-columns: 1fr; }
  .lesson-card { padding: 28px; }
  .lesson-card h3 { font-size: 20px; }
  .cta-actions { flex-direction: column; align-items: flex-start; }
}
</style>
