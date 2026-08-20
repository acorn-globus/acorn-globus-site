<template>
  <div>
    <!-- HERO -->
    <section class="hero" style="padding-bottom: 80px;">
      <div class="container-redesign">
        <div style="max-width: 780px;">
          <div class="hero-eyebrow"><span>AI Agent Development</span></div>
          <h1 class="text-display-lg" style="margin-bottom: 20px;">We Build AI Agents. We Also Run Our Own.</h1>
          <p class="text-body-lg">Agents that take real actions like generating and sending emails, scoring and analyzing data, creating invoices, fixing bugs, and reviewing code. Not chatbots that just talk. We build agentic workflows for products, and we run three of our own to operate this company. Here's what we've shipped.</p>
          <div style="margin-top: 32px;">
            <a href="https://calendar.app.google/gbT42VeCDd7ioXh79" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 18px; padding: 18px 40px;">Book an AI agent consult</a>
            <p class="text-body" style="margin-top: 14px; color: var(--text-secondary);">Prefer to send a message? <NuxtLink to="/contact/" style="color: var(--brand-blue); font-weight: 500;">Contact us</NuxtLink></p>
          </div>
        </div>
        <div class="hero-banner">
          <img src="/images/ai-agent-development-hero.webp" alt="AI agents automating real work across email, data, invoices, and code in a dashboard" width="1376" height="768" loading="eager" fetchpriority="high">
        </div>
        <div class="stats-row" style="margin-top: 56px;">
          <div class="stat"><span class="stat-value">3</span><span class="stat-label">Agents We Run In-House</span></div>
          <div class="stat"><span class="stat-value">4.7/5</span><span class="stat-label">Formester on G2</span></div>
          <div class="stat"><span class="stat-value">20+</span><span class="stat-label">Engineers</span></div>
          <div class="stat"><span class="stat-value">2-Week</span><span class="stat-label">Embedded Trial</span></div>
        </div>
      </div>
    </section>

    <!-- AGENTS THAT DO WORK, NOT CHAT (reframe) -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div style="max-width: 720px;">
          <h2 class="text-display-sm">Agents that do work, not agents that chat</h2>
          <p class="text-body-lg" style="margin-top: 20px;">The line between a demo and a real agent is whether it <em>takes actions with consequences.</em> A chatbot answers a question. An agent sends the email, updates the record, moves the money, and opens the pull request, and it's trusted to do it correctly.</p>
          <p class="text-body-lg" style="margin-top: 16px;">That's a much higher bar. It means tool-calling that actually works, error handling for when a step fails, guardrails so the agent can't do the wrong thing, and evaluation to prove it does the right thing. We know that bar because we cleared it for our own operations: our agents send real emails, touch real money, and change real code.</p>
        </div>
      </div>
    </section>

    <!-- AGENTS WE'VE BUILT AND RUN (proof) -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header" style="max-width: 720px;">
          <h2 class="text-display-sm">Agents we've built and run</h2>
          <p class="text-body-lg" style="margin-top: 16px;">This is our strongest proof: we don't just build agents for clients. We bet our own company on them.</p>
        </div>
        <div class="feature-cards-grid" style="margin-top: 48px;">
          <div class="feature-card">
            <h3>Formester: Agentic Post-Submission Workflows</h3>
            <p>When a form submission arrives, Formester runs agentic actions: generate emails, score and analyze the submission data, and any custom action you configure. A real workflow-based system, live in a production SaaS rated 4.7/5 on G2.</p>
          </div>
          <div class="feature-card">
            <h3>Freddy: Our Finance Agent</h3>
            <p>Freddy runs parts of our own finance operation. It creates invoices, sends emails, and runs the numbers. A multi-action agent that touches money and communication, built on openclaw/nanoclaw.</p>
          </div>
          <div class="feature-card">
            <h3>Dev Agent</h3>
            <p>We run a dev agent that fixes bugs in our own engineering workflow. It's how we know what it takes to make an agent reliable enough to touch a real codebase.</p>
          </div>
          <div class="feature-card">
            <h3>Code-Review Agent</h3>
            <p>A code-review agent that reviews code as part of our own engineering process. An agent doing real, consequential work on our production systems.</p>
          </div>
          <div class="feature-card">
            <h3>Formester: RAG Grounding</h3>
            <p>Our agents can be grounded in a fed knowledge base via a RAG system, so they answer and act from specific data. Architected to scale to larger datasets.</p>
          </div>
          <div class="feature-card">
            <h3>PerformLine: Client AI Delivery</h3>
            <p>PerformLine builds AI solutions for compliance monitoring, flagging content that breaks the rules. We've been their engineering partner for 2+ years: proof we deliver AI for paying clients, not just ourselves.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- YOU MIGHT NOT NEED AN AGENT (honesty) -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div class="honesty-block">
          <h2 class="text-display-sm">You might not need an agent</h2>
          <ul class="honesty-list" style="margin-top: 24px;">
            <li>A single prompt or a simple automation already does the job. If a Zapier step or one LLM call covers it, a full agent is overkill. Build the simple thing.</li>
            <li>The task has no real actions or consequences. If nothing needs to be <em>done</em> and it just needs to be answered, you may want a chatbot or a search feature, not an agent.</li>
            <li>You can't yet describe the steps a human takes. Agents automate a real workflow. If the workflow isn't clear, automating it just makes the confusion faster.</li>
          </ul>
          <p class="text-body" style="margin-top: 24px; color: var(--text-secondary);">We'll tell you honestly when a full agent is the wrong tool. Building the overkill version helps no one.</p>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="section-header" style="max-width: 720px;">
          <h2 class="text-display-sm">How we build agents</h2>
        </div>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <div>
              <h3>Map the workflow</h3>
              <p>We break down the real steps a human takes today, including the edge cases. The agent automates a workflow, so the workflow has to be understood first.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">2</div>
            <div>
              <h3>Define the actions &amp; tools</h3>
              <p>What the agent is allowed to <em>do</em>: the tool calls, the systems it touches, the boundaries. This is where trust is engineered.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">3</div>
            <div>
              <h3>Ground it</h3>
              <p>RAG and context so the agent acts on your data and rules, not generic assumptions.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">4</div>
            <div>
              <h3>Guardrails &amp; eval</h3>
              <p>Limits on what can go wrong, and evaluation to prove the agent does the right thing before it's trusted with consequences.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">5</div>
            <div>
              <h3>Ship &amp; monitor</h3>
              <p>Into production, watched closely. An agent that takes actions needs observability so you catch problems before they compound.</p>
            </div>
          </div>
        </div>
        <div class="pull-quote" style="margin-top: 48px;">
          <p>An agent you can't trust with consequences is just a demo. Ours touch real money and real code.</p>
        </div>
      </div>
    </section>

    <!-- TECH -->
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div class="section-header">
          <h2 class="text-display-sm">Tech We Build Agents With</h2>
        </div>
        <div class="tech-stack-grid">
          <div class="tech-group">
            <h3>Agent Frameworks</h3>
            <div class="tech-tags">
              <span class="tech-tag">openclaw</span>
              <span class="tech-tag">nanoclaw</span>
              <span class="tech-tag">Tool calling</span>
            </div>
          </div>
          <div class="tech-group">
            <h3>Models</h3>
            <div class="tech-tags">
              <span class="tech-tag">Claude</span>
              <span class="tech-tag">GPT</span>
              <span class="tech-tag">Open models</span>
            </div>
          </div>
          <div class="tech-group">
            <h3>Grounding</h3>
            <div class="tech-tags">
              <span class="tech-tag">RAG</span>
              <span class="tech-tag">Vector databases</span>
              <span class="tech-tag">Knowledge bases</span>
            </div>
          </div>
          <div class="tech-group">
            <h3>Reliability</h3>
            <div class="tech-tags">
              <span class="tech-tag">Evaluation</span>
              <span class="tech-tag">Guardrails</span>
              <span class="tech-tag">Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-redesign">
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
    <section class="section-redesign" style="background: var(--surface);">
      <div class="container-redesign">
        <div class="section-header" style="max-width: 720px;">
          <h2 class="text-display-sm">Explore More</h2>
        </div>
        <div class="feature-cards-grid" style="margin-top: 48px;">
          <NuxtLink to="/services/ai-development/" class="feature-card" style="text-decoration: none;">
            <h3>AI Development Services</h3>
            <p>The full picture: agents, generative AI, LLM & RAG, and AI wired into your product.</p>
          </NuxtLink>
          <NuxtLink to="/hire-ai-developers/" class="feature-card" style="text-decoration: none;">
            <h3>Hire AI Developers</h3>
            <p>Dedicated AI engineers who've shipped agents in production, embedded in your team.</p>
          </NuxtLink>
          <NuxtLink to="/blog/ai-agent-invoicing-freddy/" class="feature-card" style="text-decoration: none;">
            <h3>How We Built Freddy</h3>
            <p>The story of the finance agent that cut our invoicing to five minutes.</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-banner">
      <div class="container-redesign" style="text-align: center;">
        <h2 class="text-display-sm">Want an agent that actually does the work?</h2>
        <p class="text-body-lg" style="max-width: 680px; margin: 16px auto 0;">Tell us the workflow you want to automate. We'll tell you honestly whether an agent is the right tool, and if it is, how we'd build one you can trust with real actions.</p>
        <div style="margin-top: 36px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <a href="https://calendar.app.google/gbT42VeCDd7ioXh79" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 18px; padding: 18px 40px;">Book an AI agent consult</a>
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
    question: 'How do I choose an AI agent development company?',
    answer: "Pick an AI agent development company that runs its own agents in production, not one that only demos them. Ask what agents they operate day to day, how those agents take real actions safely, and how they handle tools, data access, evaluation, and guardrails. We build and run our own: Freddy handles finance and invoicing, a dev agent fixes bugs, and a code-review agent reviews code, alongside agentic workflows live in Formester. You can hire us to build your agent end to end or embed our engineers with your team."
  },
  {
    question: 'What is an AI agent, and how is it different from a chatbot?',
    answer: "A chatbot answers questions. An AI agent takes actions with consequences. It sends emails, updates records, creates invoices, opens pull requests, or triggers other systems, and it's trusted to do so correctly. Building an agent means engineering reliable tool-calling, error handling, guardrails, and evaluation, not just wiring up a conversation. That gap is exactly what separates a demo from a production agent."
  },
  {
    question: 'What does an AI agent actually cost?',
    answer: "It depends on how many actions the agent takes and how many systems it touches. A single-step agent is far cheaper than a multi-step one that spans several tools with money or code on the line. We scope the workflow first and price transparently, and if a simple automation or one prompt would do the job, we'll tell you rather than sell you an agent you don't need."
  },
  {
    question: 'Have you actually built and run AI agents, or just talked about it?',
    answer: "We run three agents to operate our own company: Freddy (finance: invoices, emails, running the numbers), a dev agent that fixes bugs, and a code-review agent. Our SaaS, Formester, runs agentic post-submission workflows in production. And we've delivered AI for a paying client, PerformLine. We bet our own operations on agents, and that's the proof."
  },
  {
    question: 'Can an agent work with my existing tools and data?',
    answer: "Yes. Agents earn their keep by acting inside your real systems, like your CRM, email, database, code repo, or internal tools, and by being grounded in your data through RAG. Most of the engineering is exactly this: safe, reliable tool-calling and grounding so the agent acts on your reality, not generic assumptions."
  },
  {
    question: 'How do you keep an agent from doing the wrong thing?',
    answer: "Guardrails and evaluation. We define exactly what actions the agent is allowed to take and where the boundaries are, add error handling for failed steps, evaluate whether it does the right thing before trusting it with consequences, and monitor it in production. Because our own agents touch real money and real code, we treat this as non-negotiable."
  },
  {
    question: 'What frameworks and models do you use to build agents?',
    answer: "We build on agent frameworks including openclaw and nanoclaw with tool-calling, and we're model-agnostic, using Claude, GPT, or open models, chosen for the accuracy, cost, latency, and privacy the task needs. Grounding is typically RAG over a knowledge base, with evaluation and monitoring around it."
  }
]

useSeoMeta({
  title: 'AI Agent Development Company | Agentic Workflows | AcornGlobus',
  description: 'AI agent development from a team that builds and runs its own agents: agentic workflows that take real actions, not chatbots. Formester agentic workflows in production plus three internal agents (finance, dev, code review). Serving the US, UK, Canada & Australia.',
  ogTitle: 'AI Agent Development Company | Agentic Workflows | AcornGlobus',
  ogDescription: 'AI agent development from a team that builds and runs its own agents: agentic workflows that take real actions, not chatbots.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/services/ai-agent-development/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'AI Agent Development Company | Agentic Workflows | AcornGlobus',
  twitterDescription: 'AI agent development from a team that builds and runs its own agents: agentic workflows that take real actions, not chatbots.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://acornglobus.com/services/ai-agent-development/' },
  ],
})

useServiceSchema({
  name: 'AI Agent Development',
  description: 'AI agent development and agentic workflows: agents that take real actions (generate emails, score data, create invoices, fix bugs, review code). Built by a team that runs its own agents in production.',
  url: '/services/ai-agent-development',
})

useFaqSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))

useBreadcrumbSchema([
  { name: 'Services', path: '/services/' },
  { name: 'AI Agent Development', path: '/services/ai-agent-development/' },
])
</script>

<style scoped>
/* ===== HERO BANNER ===== */
.hero-banner {
  margin-top: 56px;
}
.hero-banner img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 16px;
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

/* ===== TECH STACK ===== */
.tech-stack-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 48px;
}
.tech-group h3 {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--brand-blue);
  margin-bottom: 12px;
}
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tech-tag {
  background: var(--surface-container-lowest);
  border: 1px solid var(--outline-variant);
  border-radius: var(--radius-pill);
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--on-surface);
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
  .tech-stack-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .tech-stack-grid { grid-template-columns: 1fr; }
}
</style>
