<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="container-redesign">
        <div style="max-width: 720px;">
          <NuxtLink to="/services/mvp-development/" class="breadcrumb">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
            Back to MVP Development
          </NuxtLink>
          <div class="hero-eyebrow"><span>MVP Development for Startups</span></div>
          <h1 class="text-display-lg" style="margin-bottom: 20px;">Every week of runway counts. Get one workflow live in two weeks.</h1>
          <p class="text-body-lg">MVP development for startups who need evidence before they need a full product. We put one core workflow into production in two weeks, you put it in front of real users, and what they do with it decides what gets built next.</p>
          <div style="margin-top: 36px;">
            <a href="https://calendar.app.google/gbT42VeCDd7ioXh79" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Book a call about your product</a>
            <p class="text-body" style="margin-top: 14px; color: var(--text-secondary);">Prefer to send a message? <NuxtLink to="/contact/" style="color: var(--brand-blue); font-weight: 500;">Contact us</NuxtLink></p>
          </div>
        </div>
        <div class="stats-row">
          <div>
            <div class="stat-value">2</div>
            <div class="stat-label">Weeks to First Workflow Live</div>
          </div>
          <div>
            <div class="stat-value">$25-80</div>
            <div class="stat-label">Per Hour, Scope Agreed Upfront</div>
          </div>
          <div>
            <div class="stat-value">100%</div>
            <div class="stat-label">Code Ownership From Day One</div>
          </div>
          <div>
            <div class="stat-value">25+</div>
            <div class="stat-label">Products Shipped</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== THE PROBLEM ===== -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div style="max-width: 720px;">
          <h2 class="text-display-sm" style="margin-bottom: 20px;">Building everything before you learn anything is the expensive way</h2>
          <p class="text-body-lg" style="margin-bottom: 16px;">Plenty of startups build every feature on the roadmap and still don't grow. Then the usage data comes in and it turns out people only ever touched three of the twenty things that got built. All that budget went into features nobody asked for.</p>
          <p class="text-body-lg">The startups that get somewhere do it the other way round. They ship one workflow, watch how people actually use it, and decide the next step from what they see. That is cheaper, faster, and a lot less painful than finding out at the end.</p>
        </div>
      </div>
    </section>

    <!-- ===== HOW IT WORKS ===== -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header">
          <h2 class="text-display-sm">How the two-week sprint works</h2>
        </div>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <div>
              <h3>We agree the scope before anyone writes code</h3>
              <p>Which workflow gets built, what "done" means, how many people it takes, and what it will cost. A complex workflow needs more people to land in two weeks. That is settled upfront, so nothing turns up on the invoice that you did not agree to.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">2</div>
            <div>
              <h3>Two weeks. One core workflow. In production.</h3>
              <p>Real authentication, real data, deployed. Not a prototype and not a clickable mockup. Something your users can actually use.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">3</div>
            <div>
              <h3>You put it in front of real users</h3>
              <p>This is the step that matters and the one that usually gets skipped. Watch what people do with it. Where they stop. What they ignore.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">4</div>
            <div>
              <h3>We scope the next milestone from what happened</h3>
              <p>The next set of features and the next timeline come from the evidence, not from the original feature list. We have built and run our own products, so we can help you read what comes back.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SCOPE ENVELOPE ===== -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div class="section-header">
          <h2 class="text-display-sm">What actually fits in two weeks</h2>
        </div>
        <div class="feature-cards-grid" style="margin-top: 32px;">
          <div class="feature-card">
            <h3>Fits</h3>
            <p>One core workflow end to end, with real authentication, real data and a production deployment. For Eitoss we built an industrial data analysis workflow across 40+ parameters, including comparison over time periods, tables, graphs, and comparison against other custom flows. That was two weeks.</p>
          </div>
          <div class="feature-card">
            <h3>Doesn't fit</h3>
            <p>Your whole product. Multi-role permission systems, payments combined with compliance work, native mobile alongside web, or anything waiting on a long third-party integration. If that is what you need, we will say so before you commit.</p>
          </div>
          <div class="feature-card">
            <h3>What it costs</h3>
            <p>$25 to $80 per hour depending on complexity and dependencies. A two-week sprint is roughly 80 hours at a team size of one, and more when a complex workflow needs more people. This prices one workflow, not an entire product. A full MVP is usually 6 to 12 weeks.</p>
          </div>
          <div class="feature-card">
            <h3>What you own</h3>
            <p>Everything, from day one. Code, infrastructure, accounts. Not handed over at the end if things go well.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PROOF ===== -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header">
          <h2 class="text-display-sm">This is the pace we already work at</h2>
        </div>
        <div class="feature-cards-grid" style="margin-top: 32px;">
          <div class="feature-card">
            <h3>AI form builder in 5 days</h3>
            <p>In Formester, building a form meant dragging and dropping every element, and how long that took depended on the size of the form and the UI work involved. We added AI so you describe what you need in plain language, including the logic and the layout, and the form is built in 15 seconds. That feature took 5 days.</p>
          </div>
          <div class="feature-card">
            <h3>Eitoss analytics workflow in 2 weeks</h3>
            <p>An industrial data analysis workflow across 40+ parameters, with time-period comparison, tables and graphs. Two weeks, in production.</p>
          </div>
          <div class="feature-card">
            <h3>Payment gateways in under a week</h3>
            <p>Payment gateway integration in Formester, live in less than a week.</p>
          </div>
          <div class="feature-card">
            <h3>Google Sheets integration in under 3 days</h3>
            <p>Connecting Formester to external apps like Google Sheets took less than three days.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== WHEN NOT TO USE US ===== -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div style="max-width: 720px;">
          <h2 class="text-display-sm" style="margin-bottom: 20px;">When a two-week sprint is the wrong thing to buy</h2>
          <p class="text-body-lg" style="margin-bottom: 16px;">If you already have clear evidence that people want what you are building and you just need it built, skip the sprint and go straight to a full MVP. The sprint exists to buy you information. If you already have the information, you are paying for something you do not need.</p>
          <p class="text-body-lg">Same if your product only makes sense once several workflows exist together, which is true of some marketplaces and most regulated products. In that case we would rather scope a longer build honestly than sell you two weeks that cannot prove anything.</p>
        </div>
      </div>
    </section>

    <!-- ===== FAQ ===== -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header">
          <h2 class="text-display-sm">Questions founders ask</h2>
        </div>
        <div class="faq-list">
          <details v-for="(faq, index) in faqs" :key="index">
            <summary>{{ faq.question }}</summary>
            <div class="faq-answer">{{ faq.answer }}</div>
          </details>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign" style="text-align: center;">
        <h2 class="text-display-sm" style="margin-bottom: 16px;">Tell us the one workflow that matters most</h2>
        <p class="text-body-lg" style="max-width: 620px; margin: 0 auto 28px;">We will tell you honestly whether it fits in two weeks, and what it would take if it doesn't.</p>
        <a href="https://calendar.app.google/gbT42VeCDd7ioXh79" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Book a call</a>
        <p class="text-body" style="margin-top: 24px;">
          Related: <NuxtLink to="/services/mvp-development/" style="color: var(--brand-blue);">MVP development services</NuxtLink> ·
          <NuxtLink to="/guides/mvp-development/" style="color: var(--brand-blue);">MVP cost and timeline guide</NuxtLink> ·
          <NuxtLink to="/case-studies/eitoss/" style="color: var(--brand-blue);">Eitoss case study</NuxtLink>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const faqs = [
  {
    question: 'What is MVP development for startups?',
    answer: "MVP development for startups means building the smallest working version of your product that real users can use, so you can learn whether the idea holds up before committing the rest of your budget. For early-stage startups the constraint is usually runway, not ambition. The practical version is a two-week sprint on one core workflow, put in front of users, with the next step decided from what they actually do."
  },
  {
    question: 'How much does MVP development for a startup cost?',
    answer: "Our rate is $25 to $80 per hour depending on the complexity of the project and its dependencies. A two-week workflow sprint is roughly 80 hours at a team size of one, and more when a complex workflow needs more people. Scope and team size are agreed before development starts, so the number does not move underneath you. This prices one workflow. A full MVP with every workflow typically runs 6 to 12 weeks."
  },
  {
    question: 'Can you really build a startup MVP in 2 weeks?',
    answer: "We can put one core workflow into production in two weeks. A complete MVP with every workflow takes longer, usually 6 to 12 weeks. The distinction matters and we would rather be clear about it upfront. As an example of what fits, we built an industrial data analysis workflow for Eitoss covering 40+ parameters with time-period comparison, tables and graphs, in two weeks."
  },
  {
    question: 'Do I need a technical co-founder before starting?',
    answer: "No. You need technical judgement, but it does not have to come from a co-founder. During the MVP phase a development partner can fill that role, helping you choose the stack, scope the workflow and make architecture decisions. The advantage is that you get a team rather than one person, and you keep your equity for the people you will need after you have validated the idea."
  },
  {
    question: 'Who owns the code?',
    answer: "You do, from day one. Code, infrastructure and accounts, all yours from the first commit rather than handed over at the end. If you want to bring development in-house, switch partners or sell the company, nothing is locked up on our side."
  },
  {
    question: 'What happens after the first two weeks?',
    answer: "You put the workflow in front of real users and we look at what happens. Which parts get used, where people stop, what they ignore. That evidence decides the next set of features and the next timeline, rather than the feature list you wrote before anyone had touched the product. Some founders run several sprints back to back; others take the first one and go raise on it."
  }
]

useSeoMeta({
  title: 'MVP Development for Startups | First Workflow Live in 2 Weeks | AcornGlobus',
  description: 'MVP development services for startups. We put one core workflow into production in 2 weeks, then help you test it with real users. $25-80/hr, scope agreed upfront, you own the code from day one.',
  ogTitle: 'MVP Development for Startups | First Workflow Live in 2 Weeks | AcornGlobus',
  ogDescription: 'MVP development services for startups. We put one core workflow into production in 2 weeks, then help you test it with real users. $25-80/hr, scope agreed upfront, you own the code from day one.',
  ogImage: 'https://acornglobus.com/images/og/og-mvp-development.webp',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogUrl: 'https://acornglobus.com/mvp-development-for-startups/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'MVP Development for Startups | First Workflow Live in 2 Weeks | AcornGlobus',
  twitterDescription: 'MVP development services for startups. We put one core workflow into production in 2 weeks, then help you test it with real users. $25-80/hr, scope agreed upfront, you own the code from day one.',
  twitterImage: 'https://acornglobus.com/images/og/og-mvp-development.webp',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://acornglobus.com/mvp-development-for-startups/' }],
})

useFaqSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))

useBreadcrumbSchema([
  { name: 'Services', path: '/services/' },
  { name: 'MVP Development', path: '/services/mvp-development/' },
  { name: 'MVP Development for Startups', path: '/mvp-development-for-startups/' },
])
</script>

<style scoped>
.faq-list { max-width: 800px; margin: 32px auto 0; }
.faq-list details { border-bottom: 1px solid var(--border); padding: 20px 0; }
.faq-list details:first-child { border-top: 1px solid var(--border); }
.faq-list summary {
  cursor: pointer; font-weight: 600; font-size: 17px; color: var(--on-surface);
  list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 16px;
}
.faq-list summary::-webkit-details-marker { display: none; }
.faq-list summary::after { content: '+'; font-size: 22px; color: var(--text-secondary); flex-shrink: 0; }
.faq-list details[open] summary::after { content: '\2212'; }
.faq-list .faq-answer { margin-top: 12px; color: var(--text-secondary); line-height: 1.7; }
</style>
