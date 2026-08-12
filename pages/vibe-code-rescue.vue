<template>
  <div>
    <!-- HERO -->
    <section class="hero" style="padding-bottom: 80px;">
      <div class="container-redesign">
        <div style="max-width: 780px;">
          <div class="hero-eyebrow"><span>AI App Rescue &middot; Vibe-Code to Production</span></div>
          <h1 class="text-display-lg" style="margin-bottom: 20px;">You Built It With AI. We'll Get It to Production.</h1>
          <p class="text-body-lg">Your Lovable, Bubble, or vibe-coded app got you 80% there — then it started breaking every time you add a feature, and you're not sure it's secure. We take AI-built apps to real, production-grade products: we keep what works, fix what's fragile, and ship it. We're the team that knows how to code and how to drive AI.</p>
          <div style="margin-top: 32px;">
            <a href="https://calendar.app.google/gbT42VeCDd7ioXh79" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 18px; padding: 18px 40px;">Book a free rescue assessment</a>
            <p class="text-body" style="margin-top: 14px; color: var(--text-secondary);">Prefer to send a message? <NuxtLink to="/contact/" style="color: var(--brand-blue); font-weight: 500;">Contact us</NuxtLink></p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI MADE BUILDING EASY (pain / throughline) -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div style="max-width: 720px;">
          <h2 class="text-display-sm">AI made building easy. It made shipping hard.</h2>
          <p class="text-body-lg" style="margin-top: 20px;">You're not wrong to have used AI. It genuinely got you most of the way there — a working prototype, fast, without a team. That's real, and it's a good thing.</p>
          <p class="text-body-lg" style="margin-top: 16px;">The trouble is the last 20%. Auth, payments, database performance, error handling, state, security — the unglamorous parts that don't show up in a demo but decide whether real users can trust your app. That's exactly where AI-built apps break, because that's the part the AI didn't really understand. It's also exactly what we do for a living.</p>
          <p class="text-body-lg" style="margin-top: 16px;">This isn't a hypothetical for us. Founders already come to us with this — an AI-built app that got them started and then hit the wall. It's become a real, recurring part of what we're asked to do.</p>
        </div>
      </div>
    </section>

    <!-- THE 6 PLACES AI-BUILT APPS ALWAYS BREAK -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header" style="max-width: 720px;">
          <h2 class="text-display-sm">The 6 places AI-built apps always break</h2>
          <p class="text-body-lg" style="margin-top: 16px;">We see the same failure points again and again. If you recognize two or three of these, you're at the wall.</p>
        </div>
        <div class="break-grid">
          <div class="break-card">
            <div class="break-num">01</div>
            <h3>Authentication</h3>
            <p>Login, sessions, roles, and permissions that seem fine in a demo but leak access or break when real users and edge cases arrive.</p>
          </div>
          <div class="break-card">
            <div class="break-num">02</div>
            <h3>Payments</h3>
            <p>Billing, subscriptions, and webhooks are unforgiving. AI-built payment flows often miss the failure cases that cost you real money.</p>
          </div>
          <div class="break-card">
            <div class="break-num">03</div>
            <h3>Database Performance</h3>
            <p>Queries that work on ten rows crawl on ten thousand. Missing indexes and N+1 patterns surface exactly when you start getting traction.</p>
          </div>
          <div class="break-card">
            <div class="break-num">04</div>
            <h3>Error Handling</h3>
            <p>Happy-path code with no real handling of failures, timeouts, or bad input — so the app falls over in ways you can't reproduce.</p>
          </div>
          <div class="break-card">
            <div class="break-num">05</div>
            <h3>State Management</h3>
            <p>As features pile up, tangled state causes bugs that multiply every time you add something new. This is why "it breaks whenever I add a feature."</p>
          </div>
          <div class="break-card">
            <div class="break-num">06</div>
            <h3>Mobile Responsiveness</h3>
            <p>Layouts that look right on the screen they were built for and fall apart everywhere else your actual users are.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECURITY (the risk you can't see) -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div style="max-width: 720px;">
          <h2 class="text-display-sm">The risk you can't see: security</h2>
          <p class="text-body-lg" style="margin-top: 20px;">The break-points above you eventually notice. Security you don't — until someone else does. AI-built apps routinely ship with real, exploitable holes, most commonly missing access controls that leave your data readable by people who shouldn't see it.</p>
          <p class="text-body-lg" style="margin-top: 16px;">It's not rare. In one security review of AI-built (Lovable) apps, roughly 10% were found to have data-exposure vulnerabilities — typically missing row-level security. If you're not sure your app is safe, that uncertainty is itself the signal: an assessment costs you nothing and tells you exactly where you stand.</p>
        </div>
      </div>
    </section>

    <!-- WHAT A RESCUE LOOKS LIKE (process) -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header" style="max-width: 720px;">
          <h2 class="text-display-sm">What a rescue actually looks like</h2>
          <p class="text-body-lg" style="margin-top: 16px;">We don't start by telling you to throw it all away. We keep what works, and fix or rebuild only what needs it.</p>
        </div>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <div>
              <h3>Free assessment</h3>
              <p>We review your app — code, architecture, and the break-points above — and tell you honestly what's solid, what's fragile, and what's a real risk.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">2</div>
            <div>
              <h3>Keep / fix / rebuild call</h3>
              <p>A clear recommendation for each part: keep what works, fix what's fragile, rebuild only what truly has to be. No blanket rewrite pitch.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">3</div>
            <div>
              <h3>Hardening</h3>
              <p>We fix the things that break real apps — security and access controls, database performance, error handling, and state — in priority order.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">4</div>
            <div>
              <h3>Production hardening &amp; tests</h3>
              <p>Tests, monitoring, and the infrastructure to run reliably under real users — so the next feature doesn't take the whole thing down.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">5</div>
            <div>
              <h3>Handoff or ongoing</h3>
              <p>We hand it back clean with documentation, or keep building with you. Your code, your call — zero lock-in.</p>
            </div>
          </div>
        </div>
        <div class="pull-quote" style="margin-top: 48px;">
          <p>The person who knows how to code and how to drive AI has the upper hand here. That's the team you want fixing an AI-built app.</p>
        </div>
      </div>
    </section>

    <!-- WHEN YOU DON'T NEED A RESCUE (honesty) -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div class="honesty-block">
          <h2 class="text-display-sm">When you DON'T need a rescue</h2>
          <ul class="honesty-list" style="margin-top: 24px;">
            <li>It's a weekend prototype. If you're still testing whether anyone wants this, keep iterating cheaply in your AI tool — don't harden something you might throw away.</li>
            <li>You have no users yet. Production-grade engineering is for when real people depend on it. Before that, speed of learning beats robustness.</li>
            <li>The fix is one afternoon. If it's a single bug or a small change, we'll tell you that in the free assessment instead of scoping a project.</li>
          </ul>
          <p class="text-body" style="margin-top: 24px; color: var(--text-secondary);">We'll tell you honestly, for free, if you don't need us yet. That candor is the whole point.</p>
        </div>
      </div>
    </section>

    <!-- WHY US / PROOF (build+fix capability, no rescue client claims) -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header" style="max-width: 720px;">
          <h2 class="text-display-sm">Why we're the team for this</h2>
          <p class="text-body-lg" style="margin-top: 16px;">Rescuing an AI-built app takes both skills: real production engineering, and a genuine understanding of what the AI was trying to do. We have both.</p>
        </div>
        <div class="feature-cards-grid" style="margin-top: 48px;">
          <div class="feature-card">
            <h3>We build production software</h3>
            <p>20+ engineers, 7+ years, 80%+ client retention. We ship real, production-grade products end-to-end and maintain them — the exact discipline AI-built apps are missing. See <NuxtLink to="/services/full-project-delivery/" style="color: var(--brand-blue); font-weight: 600; text-decoration: none;">full project delivery</NuxtLink>.</p>
          </div>
          <div class="feature-card">
            <h3>We build AND drive AI</h3>
            <p>We build AI ourselves — our SaaS <NuxtLink to="/case-studies/formester/" style="color: var(--brand-blue); font-weight: 600; text-decoration: none;">Formester</NuxtLink> has an AI form builder, agentic workflows, and RAG in production, and we run our own AI agents. So we understand what an AI-built app was reaching for, not just how to patch it.</p>
          </div>
          <div class="feature-card">
            <h3>We keep what works</h3>
            <p>We're not a rip-and-replace shop. We assess, then fix or rebuild only what needs it — because starting over throws away the 80% the AI got right.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div class="section-header">
          <h2 class="text-display-sm">Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">
          <details v-for="(faq, index) in faqs" :key="index">
            <summary>{{ faq.question }}</summary>
            <div class="faq-answer">{{ faq.answer }}</div>
          </details>
        </div>
      </div>
    </section>

    <!-- EXPLORE MORE / CROSS-LINKS -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header" style="max-width: 720px;">
          <h2 class="text-display-sm">Explore More</h2>
        </div>
        <div class="feature-cards-grid" style="margin-top: 48px;">
          <NuxtLink to="/ai-development-services/" class="feature-card" style="text-decoration: none;">
            <h3>AI Development Services</h3>
            <p>Need to build new AI, not just fix it? Agents, generative AI, LLM & RAG, and AI in your product.</p>
          </NuxtLink>
          <NuxtLink to="/services/mvp-development/" class="feature-card" style="text-decoration: none;">
            <h3>MVP Development</h3>
            <p>Taking a prototype to a real first product, built to last from day one.</p>
          </NuxtLink>
          <NuxtLink to="/guides/mvp-development/" class="feature-card" style="text-decoration: none;">
            <h3>MVP Development Guide</h3>
            <p>Costs, timelines, and the process behind turning an idea into a production product.</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-banner">
      <div class="container-redesign" style="text-align: center;">
        <h2 class="text-display-sm">Built it with AI and hit the wall?</h2>
        <p class="text-body-lg" style="max-width: 680px; margin: 16px auto 0;">Send us your app. We'll do a free assessment and tell you honestly what's solid, what's at risk, and what it would take to get it to production. If the fix is an afternoon — or you don't need us yet — we'll say so.</p>
        <div style="margin-top: 36px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <a href="https://calendar.app.google/gbT42VeCDd7ioXh79" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 18px; padding: 18px 40px;">Book a free rescue assessment</a>
          <p class="text-body" style="color: var(--text-secondary);">Prefer to send a message? <NuxtLink to="/contact/" style="color: var(--brand-blue); font-weight: 500;">Contact us</NuxtLink></p>
          <p class="text-body" style="color: var(--text-secondary);">Or email us at <a href="mailto:business@acornglobus.com" style="color: var(--brand-blue); font-weight: 500;">business@acornglobus.com</a></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const faqs = [
  {
    question: 'Can you fix an app I built with Lovable, Bubble, or Cursor?',
    answer: "Yes — that's exactly what AI App Rescue is for. Whether it came out of Lovable, Bubble, Cursor, v0, or general vibe coding, we assess what you have, identify the fragile and risky parts, and take it to production. We keep the parts that work rather than forcing you to start over."
  },
  {
    question: 'Do I have to rewrite everything?',
    answer: "No, and we'll push back if someone tells you that you do. AI usually gets you a genuine 80% — throwing it all away wastes that. We assess each part and give you a keep / fix / rebuild call, then rebuild only what truly has to be. Most rescues are far less than a full rewrite."
  },
  {
    question: 'How do you know if my vibe-coded app is secure?',
    answer: "We review it specifically for the security holes AI-built apps commonly ship with — most often missing access controls (like row-level security) that leave data exposed. Security review is part of the free assessment, so you'll get an honest read on where you stand before committing to anything."
  },
  {
    question: 'How much does it cost to fix AI-generated code?',
    answer: "It depends entirely on what's fragile — a security fix and some hardening is very different from a partial rebuild. That's why the assessment is free and comes first: we scope the actual work and price it transparently, and if the fix is small or you don't need us yet, we'll tell you rather than sell you a project."
  },
  {
    question: 'How long does a rescue take?',
    answer: "Anywhere from a few days for targeted hardening to several weeks for a larger stabilization or partial rebuild. After the free assessment we give you a realistic timeline tied to the specific issues in your app, prioritized so the riskiest problems (usually security and data) get fixed first."
  },
  {
    question: "What's the difference between a rescue and just hiring developers?",
    answer: "A rescue starts with an honest assessment of AI-built code and a keep/fix/rebuild plan, rather than assuming a clean-slate build. If what you actually need is ongoing engineering after that, we can continue with dedicated developers — but we start by figuring out what's really wrong, not by scoping the biggest possible project."
  }
]

useSeoMeta({
  title: 'AI App Rescue | Take Your Vibe-Coded App to Production | AcornGlobus',
  description: 'Built an app with AI (Lovable, Bubble, Cursor, vibe coding) and it started breaking? AI App Rescue takes AI-built apps to production — we keep what works, fix what\'s fragile (auth, payments, DB, security), and ship it. Free assessment. Serving US, UK, Canada & Australia.',
  ogTitle: 'AI App Rescue | Take Your Vibe-Coded App to Production | AcornGlobus',
  ogDescription: 'Built an app with AI and it started breaking? AI App Rescue takes AI-built apps to production — we keep what works, fix what\'s fragile, and ship it. Free assessment.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/vibe-code-rescue/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'AI App Rescue | Take Your Vibe-Coded App to Production | AcornGlobus',
  twitterDescription: 'Built an app with AI and it started breaking? We take AI-built apps to production — keep what works, fix what\'s fragile, ship it. Free assessment.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://acornglobus.com/vibe-code-rescue/' },
  ],
})

useServiceSchema({
  name: 'AI App Rescue',
  description: 'AI App Rescue — take AI-built and vibe-coded apps (Lovable, Bubble, Cursor) to production. We keep what works, fix what\'s fragile (auth, payments, database, security, error handling, state), and ship it, with a free assessment first.',
  url: '/vibe-code-rescue',
})

useFaqSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))

useBreadcrumbSchema([
  { name: 'AI App Rescue', path: '/vibe-code-rescue/' },
])
</script>

<style scoped>
/* ===== BREAK GRID (6 places AI apps break) ===== */
.break-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}
.break-card {
  background: var(--surface-container-lowest);
  border: 1px solid var(--outline-variant);
  border-radius: var(--radius-card);
  padding: 32px;
  transition: all var(--duration-normal) var(--ease-premium);
}
.break-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}
.break-num {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--brand-blue);
  margin-bottom: 12px;
}
.break-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 10px;
}
.break-card p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--on-surface-variant);
}

/* ===== HONESTY BLOCK ===== */
.honesty-block {
  max-width: 780px;
}
.honesty-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.honesty-list li {
  font-size: 17px;
  line-height: 1.6;
  color: var(--on-surface-variant);
  padding-left: 28px;
  position: relative;
  margin-bottom: 18px;
}
.honesty-list li:last-child {
  margin-bottom: 0;
}
.honesty-list li::before {
  content: '\2713';
  position: absolute;
  left: 0;
  color: var(--brand-blue);
  font-weight: 700;
}

/* ===== FAQ ===== */
.faq-list {
  max-width: 780px;
  margin-top: 48px;
}
.faq-list details {
  border-bottom: 1px solid rgba(194, 198, 213, 0.2);
}
.faq-list details:first-child {
  border-top: 1px solid rgba(194, 198, 213, 0.2);
}
.faq-list summary {
  font-size: 18px;
  font-weight: 600;
  color: var(--on-surface);
  padding: 20px 0;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.faq-list summary::-webkit-details-marker {
  display: none;
}
.faq-list summary::after {
  content: '+';
  font-size: 24px;
  font-weight: 400;
  color: var(--text-secondary);
  flex-shrink: 0;
  transition: transform var(--duration-fast) var(--ease-premium);
}
.faq-list details[open] summary::after {
  content: '\2212';
}
.faq-list .faq-answer {
  font-size: 16px;
  line-height: 1.65;
  color: var(--on-surface-variant);
  padding-bottom: 20px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .break-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .break-grid { grid-template-columns: 1fr; }
}
</style>
