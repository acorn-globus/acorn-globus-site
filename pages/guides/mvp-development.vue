<template>
  <div class="min-h-screen bg-white">
    <!-- Hero -->
    <section class="pt-32 pb-12 bg-gradient-to-b from-slate-50 to-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center text-sm text-gray-500 mb-8">
          <NuxtLink to="/" class="hover:text-blue-600 transition-colors">Home</NuxtLink>
          <ChevronRight class="h-3.5 w-3.5 mx-2 text-gray-400" />
          <span class="text-gray-900 font-medium">MVP Development Guide</span>
        </nav>

        <div class="mb-4">
          <span class="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            <BookOpen class="h-3.5 w-3.5 mr-1.5" />
            Comprehensive Guide
          </span>
        </div>

        <h1 class="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight mb-6">
          MVP Development: From Idea to Product - The Complete Guide (2026)
        </h1>

        <p class="text-lg text-gray-600 leading-relaxed mb-6">
          A practical guide to MVP development: scoping, costs, timelines, tech choices, and what
          to do after launch. Written by a team that built its own product.
        </p>

        <div class="flex items-center gap-4 text-sm text-gray-500">
          <span class="flex items-center gap-1.5">
            <Clock class="h-4 w-4" />
            16 min read
          </span>
          <span>Updated April 2026</span>
          <span>By AcornGlobus</span>
        </div>
      </div>
    </section>

    <!-- Content with ToC -->
    <section class="pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex gap-12">
          <!-- Sticky Table of Contents (desktop) -->
          <aside class="hidden lg:block w-64 shrink-0">
            <nav class="sticky top-28">
              <h2 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">On this page</h2>
              <ul class="space-y-2 text-sm border-l border-gray-200">
                <li v-for="item in tocItems" :key="item.id">
                  <a
                    :href="`#${item.id}`"
                    class="block pl-4 py-1 text-gray-500 hover:text-blue-600 hover:border-l-2 hover:border-blue-600 -ml-px transition-colors"
                    :class="{ 'pl-8 text-xs': item.depth === 3 }"
                  >
                    {{ item.label }}
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <!-- Main Article Content -->
          <article class="guide-content min-w-0 max-w-3xl">
            <!-- Opening -->
            <p>
              90% of startups fail (Failory). The most common reason? They build something nobody wants.
            </p>
            <p>
              The minimum viable product exists to prevent that. An MVP lets you put a real product
              in front of real users as quickly as possible - not to impress them with features, but
              to learn whether you're solving a problem worth solving.
            </p>
            <p>
              But "minimum" doesn't mean "broken," and "viable" means it actually works. Getting this
              balance right is the difference between a product that teaches you something and a
              prototype that collects dust.
            </p>
            <p>
              We wrote this guide from experience. We built Formester - our own SaaS product, live
              and growing with real users. We also shipped Eitoss's MVP in 3 months; they raised
              funding on the back of it, and we're still building together two years later. So when
              we talk about MVP development, we're not theorizing. We've been the builders and the
              founders.
            </p>
            <p>
              This guide covers what an MVP is, how to scope and build one, what it costs, and what
              to do after you launch.
            </p>

            <!-- Section: What Is an MVP -->
            <h2 id="what-is-mvp">What Is an MVP (And What It's Not)?</h2>
            <p>
              A minimum viable product is the smallest version of your product that delivers real
              value to real users. It's not a sketch. It's not a clickable prototype. It's a working
              product - small, focused, and functional enough that someone can use it to solve a
              real problem.
            </p>
            <p><strong>What an MVP is:</strong></p>
            <ul>
              <li>A product with one core value proposition, built well enough to use</li>
              <li>A learning tool - it exists to validate (or invalidate) your assumptions</li>
              <li>A foundation you can build on when you know what works</li>
            </ul>
            <p><strong>What an MVP is NOT:</strong></p>
            <ul>
              <li>A broken or half-finished product you're embarrassed by</li>
              <li>A demo with no real functionality behind the screens</li>
              <li>A landing page that says "coming soon"</li>
              <li>A product with every feature you've ever imagined</li>
            </ul>
            <p>An MVP is a product. It's small, but it works.</p>

            <h3 id="mvp-vs-prototype">MVP vs. Prototype vs. Proof of Concept</h3>
            <p>These three terms get confused constantly. Here's the difference:</p>
            <div class="overflow-x-auto">
              <table>
                <thead>
                  <tr><th></th><th>MVP</th><th>Prototype</th><th>Proof of Concept (PoC)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-medium">Purpose</td>
                    <td>Validate market demand with real users</td>
                    <td>Test UX and design with stakeholders</td>
                    <td>Prove a technical approach is feasible</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Audience</td>
                    <td>Real end users</td>
                    <td>Internal team, investors, test groups</td>
                    <td>Technical team, stakeholders</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Fidelity</td>
                    <td>Production-quality, deployed</td>
                    <td>Medium-to-high fidelity mockup</td>
                    <td>Low fidelity, technical demo</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Outcome</td>
                    <td>User data, retention metrics, revenue signals</td>
                    <td>Design feedback, UX improvements</td>
                    <td>"Yes, this can be built"</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Code quality</td>
                    <td>Production-ready, maintainable</td>
                    <td>Throwaway or partially reusable</td>
                    <td>Throwaway</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              If you're trying to figure out whether users will pay for your solution, you need an
              MVP. If you're testing whether your interface makes sense, you need a prototype. If
              you're checking whether a specific technology can handle your use case, you need a
              proof of concept.
            </p>
            <p>Know which one you need before you start building.</p>

            <!-- Section: Why Build an MVP -->
            <h2 id="why-build-mvp">Why Build an MVP? The Case for Starting Small</h2>
            <p>
              Building a full product before testing the market is one of the most expensive mistakes
              a founder can make. Here's why starting small pays off:
            </p>
            <p>
              <strong>Validate before you invest.</strong> Research from CB Insights shows that 35%
              of startups fail because there's no market need. An MVP lets you test demand with real
              users before committing six figures and twelve months to a full build.
            </p>
            <p>
              <strong>Learn from real users, not assumptions.</strong> The gap between what you think
              users want and what they actually need is almost always larger than you expect. An MVP
              closes that gap with data, not guesswork.
            </p>
            <p>
              <strong>Raise with proof.</strong> Investors in 2026 want to see traction - active
              users, retention metrics, early revenue - not just slide decks. An MVP gives you
              something tangible to demo and data to back your pitch. Eitoss raised funding on the
              back of an MVP we built together in 3 months.
            </p>
            <p>
              <strong>Ship faster, iterate based on evidence.</strong> Every feature you add before
              launch is a feature you designed without user feedback. Ship the core, watch how people
              use it, and let their behavior guide what you build next.
            </p>
            <p>
              We learned this building Formester. We started with a focused set of features - form
              building and submission management. We launched, listened to users, and grew from there.
              That experience taught us what real product ownership feels like, and we bring that same
              thinking to every product we touch.
            </p>

            <!-- Section: Process Step by Step -->
            <h2 id="process">The MVP Development Process: Step by Step</h2>
            <p>
              Here's how we think about building an MVP. Not a theoretical framework - this is the
              process we use with our clients and used ourselves with Formester.
            </p>

            <h3 id="step-1">Step 1 - Define the Problem (Not the Solution)</h3>
            <p>
              Before you write a line of code, you need to be clear about one thing: what problem
              are you solving, and for whom?
            </p>
            <p>
              A useful framework: "For [specific person], the problem is [specific pain point], and
              today they solve it by [current workaround that's slow, expensive, or frustrating]."
            </p>
            <p>
              If you can fill in that sentence clearly, you have a starting point. If you can't,
              spend more time talking to potential users before building anything.
            </p>

            <h3 id="step-2">Step 2 - Scope Ruthlessly (The Art of Saying No)</h3>
            <p>
              This is where most MVPs go wrong. Founders add features because they're afraid the
              product won't be "enough." But every feature you add is a week you delay learning from
              real users.
            </p>
            <p>Separate your feature list into three buckets:</p>
            <ul>
              <li><strong>Must-have:</strong> Without these, the product doesn't deliver its core value. These ship in the MVP.</li>
              <li><strong>Nice-to-have:</strong> These would improve the experience but aren't essential for learning. These go in version 2.</li>
              <li><strong>Not-now:</strong> Features that address edge cases, secondary audiences, or future scale. Park them.</li>
            </ul>
            <p>
              A simple test: if a feature doesn't directly help a user accomplish the one thing your
              MVP is built for, it's not a must-have.
            </p>
            <p>
              We'll tell you what to build first and what can wait. Not to bill less, but because we
              want you to succeed faster.
            </p>

            <h3 id="step-3">Step 3 - Choose Your Tech Stack</h3>
            <p>
              The right tech stack depends on what you're building, not on what's trendy. Here's how
              we think about it:
            </p>
            <ul>
              <li><strong>Web app (SaaS):</strong> React or Next.js frontend, Node.js or Python backend, PostgreSQL database. Battle-tested, large talent pool, easy to hire for later.</li>
              <li><strong>Mobile app:</strong> React Native or Flutter for cross-platform. Native (Swift/Kotlin) if performance is critical or you're targeting a single platform.</li>
              <li><strong>Real-time features:</strong> Add WebSockets or a service like Pusher. Don't architect your entire app around real-time unless that's the core feature.</li>
              <li><strong>AI-integrated product:</strong> Python backend with relevant ML frameworks. Wrap APIs (OpenAI, Anthropic) rather than training custom models for the MVP.</li>
            </ul>
            <p>
              The cardinal rule: don't over-engineer. You're building to learn, not to scale to 10
              million users yet. A monolithic application with clean code is better than a
              microservices architecture that takes three months longer to build and serves 100 users.
            </p>

            <h3 id="step-4">Step 4 - Design and Build in Sprints</h3>
            <p>
              We work in 2-week sprints. At the end of each sprint, you see a working demo - not a
              progress report, not a slide deck, but the actual product running.
            </p>
            <p>
              This cadence does two things: it lets you course-correct early (before three months of
              work goes in the wrong direction), and it gives you something to show investors,
              advisors, and early users along the way.
            </p>
            <p>
              <strong>Wireframes first, pixel-perfect later.</strong> For the MVP, functional design
              with a proven UI component library (Material UI, Shadcn, Tailwind) gets you 80% of the
              visual quality at 20% of the design cost. You can invest in a custom design system when
              you know the product is working.
            </p>

            <h3 id="step-5">Step 5 - Launch, Measure, Learn</h3>
            <p>
              Launch doesn't mean a press release and a Product Hunt campaign. For most MVPs, launch
              means getting the product in front of 20-50 real users and watching what happens.
            </p>
            <p>The metrics that matter at this stage:</p>
            <ul>
              <li><strong>Activation rate:</strong> What percentage of signups complete the core action? (If it's below 40%, your onboarding or core flow has a problem.)</li>
              <li><strong>Retention (D1/D7/D30):</strong> Are people coming back? Retention is the single most important metric for an early product.</li>
              <li><strong>Time-to-value:</strong> How long does it take a new user to experience the core benefit? Shorter is better.</li>
              <li><strong>NPS or qualitative feedback:</strong> Are users telling you what they like and what's missing?</li>
            </ul>
            <p>
              Don't optimize for vanity metrics (total signups, page views). Optimize for retention.
              If people keep coming back, you're on to something.
            </p>

            <h3 id="step-6">Step 6 - Iterate or Pivot</h3>
            <p>
              The MVP is the beginning, not the end. Once you have real user data, you face one of
              three paths:
            </p>
            <ol>
              <li><strong>Iterate:</strong> The core value proposition is right, but the execution needs improvement. Build the next set of features based on what users are asking for and struggling with.</li>
              <li><strong>Pivot:</strong> Users aren't engaging with the core value proposition, but you've learned something about what they actually need. Adjust your product direction based on that learning.</li>
              <li><strong>Stop:</strong> The data shows there's no demand for what you're building. This is painful, but it's better to learn this with a $30,000 MVP than a $300,000 full product.</li>
            </ol>
            <p>
              All three outcomes are valid. The MVP did its job if it gave you the clarity to make
              the right decision.
            </p>

            <!-- Section: Timeline -->
            <h2 id="timeline">How Long Does MVP Development Take?</h2>
            <p>Timelines depend on complexity. Here are realistic ranges:</p>
            <div class="overflow-x-auto">
              <table>
                <thead>
                  <tr><th>Complexity</th><th>Examples</th><th>Timeline</th><th>Team Size</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-medium">Simple</td>
                    <td>Single-platform SaaS, core features only</td>
                    <td>6-8 weeks</td>
                    <td>2 engineers</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Medium</td>
                    <td>Web + mobile, third-party integrations, auth flows</td>
                    <td>10-14 weeks</td>
                    <td>2-3 engineers</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Complex</td>
                    <td>Real-time features, ML components, multi-service architecture</td>
                    <td>14-20 weeks</td>
                    <td>3-4 engineers</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p><strong>What affects the timeline:</strong></p>
            <ul>
              <li><strong>Scope clarity:</strong> The more defined your requirements, the faster the build. Ambiguity adds weeks.</li>
              <li><strong>Design needs:</strong> Using a UI library saves 2-3 weeks compared to custom design.</li>
              <li><strong>Third-party integrations:</strong> Each payment gateway, API, or data source adds complexity.</li>
              <li><strong>Team size:</strong> Two senior engineers move faster than four mid-level engineers. More people doesn't always mean faster delivery.</li>
            </ul>
            <p>
              Our reference point: we built Eitoss's working demo in 8 weeks and had it
              production-ready in 3 months. That included discovery, architecture, development,
              and deployment.
            </p>
            <p>
              For a detailed cost and timeline breakdown, see our
              <NuxtLink to="/blog/mvp-development-cost" class="guide-link">MVP development cost guide</NuxtLink>.
            </p>

            <!-- Section: Cost -->
            <h2 id="cost">What Does MVP Development Cost?</h2>
            <p>
              Money matters, and we'd rather give you honest ranges than vague "it depends" answers.
            </p>

            <h3 id="cost-ranges">Cost Ranges by Product Type</h3>
            <div class="overflow-x-auto">
              <table>
                <thead>
                  <tr><th>Product Type</th><th class="text-right">Typical Cost Range</th><th>What's Included</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-medium">Simple SaaS MVP</td>
                    <td class="text-right">$15,000-$40,000</td>
                    <td>One platform, core features, standard auth, basic dashboard</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Mobile App MVP</td>
                    <td class="text-right">$25,000-$60,000</td>
                    <td>Cross-platform (React Native/Flutter), API backend, push notifications</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Marketplace MVP</td>
                    <td class="text-right">$30,000-$80,000</td>
                    <td>Two-sided platform, payments, search, messaging</td>
                  </tr>
                  <tr>
                    <td class="font-medium">AI-Integrated MVP</td>
                    <td class="text-right">$40,000-$100,000+</td>
                    <td>ML model integration, data pipelines, API wrappers, custom UI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 id="cost-drivers">What Drives the Cost</h3>
            <ul>
              <li><strong>Feature count:</strong> Each feature adds design, development, and testing time. Scope ruthlessly (see Step 2).</li>
              <li><strong>Platform count:</strong> Web only is cheaper than web + iOS + Android.</li>
              <li><strong>Design complexity:</strong> Custom design system vs. UI library.</li>
              <li><strong>Integrations:</strong> Payment processing, third-party APIs, data imports.</li>
              <li><strong>Compliance:</strong> Healthcare (HIPAA), finance (SOC 2), or data privacy (GDPR) requirements add security and audit work.</li>
            </ul>

            <h3 id="regional-rates">Regional Rate Differences</h3>
            <div class="overflow-x-auto">
              <table>
                <thead>
                  <tr><th>Region</th><th class="text-right">Typical Hourly Rate</th><th class="text-right">Monthly Full-Time Equivalent</th></tr>
                </thead>
                <tbody>
                  <tr><td class="font-medium">US/Canada</td><td class="text-right">$100-200/hr</td><td class="text-right">$16,000-$32,000</td></tr>
                  <tr><td class="font-medium">Western Europe</td><td class="text-right">$70-140/hr</td><td class="text-right">$11,200-$22,400</td></tr>
                  <tr><td class="font-medium">Eastern Europe</td><td class="text-right">$50-80/hr</td><td class="text-right">$8,000-$12,800</td></tr>
                  <tr><td class="font-medium">India</td><td class="text-right">$25-55/hr</td><td class="text-right">$4,000-$8,800</td></tr>
                  <tr><td class="font-medium">Latin America</td><td class="text-right">$40-70/hr</td><td class="text-right">$6,400-$11,200</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              A note on price: the cheapest option isn't always the cheapest in the long run. A
              poorly built MVP costs more to fix than to build right. We've seen founders pay $15,000
              for an MVP that needed a $40,000 rebuild six months later. Quality foundations save money.
            </p>

            <!-- Section: What You Don't Need -->
            <h2 id="what-you-dont-need">What Your MVP Doesn't Need (Honest Advice)</h2>
            <p>Most guides tell you what to build. Here's what you can skip:</p>
            <p>
              <strong>You don't need a custom design system.</strong> A well-configured component
              library (Material UI, Shadcn, Chakra) gives you a polished, consistent look at a
              fraction of the cost. Custom design systems are for products with thousands of users
              and a dedicated design team.
            </p>
            <p>
              <strong>You don't need to support 10 languages on day one.</strong> Launch in your
              primary market language. Add localization when you've validated demand.
            </p>
            <p>
              <strong>You don't need microservices architecture.</strong> A well-structured monolith
              handles thousands of users just fine. Microservices add complexity to builds, debugging,
              and deployments. You can decompose later when you actually have scale problems.
            </p>
            <p>
              <strong>You don't need every feature your competitor has.</strong> Your competitor has
              had years and millions of dollars. You're trying to find out if your specific angle
              resonates. Build for your unique value, not feature parity.
            </p>
            <p>
              <strong>You don't need perfection.</strong> You need learning. Ship something good
              enough that users can experience the core value, and iterate from there.
            </p>
            <p>
              The hardest part of MVP development isn't building - it's cutting. Every feature you
              say "yes" to delays the moment you learn whether your idea works. That delay has a
              cost, and it's measured in runway, not dollars.
            </p>

            <!-- Section: Non-Technical Founders -->
            <h2 id="non-technical-founders">For Non-Technical Founders: What You Need to Know</h2>
            <p>
              If you're a founder with deep domain expertise but no engineering background, this
              section is for you.
            </p>
            <p>
              <strong>You don't need a CTO to build an MVP.</strong> What you need is a development
              partner who explains the "why" behind every technical decision in language that makes
              sense to you. Someone who translates your vision into a technical plan, not someone who
              hides behind jargon.
            </p>
            <p><strong>How to write a product brief (even if you're not technical):</strong></p>
            <ul>
              <li>Describe the problem your users face in your own words</li>
              <li>List what a user should be able to do with your product (use "As a user, I want to..." format)</li>
              <li>Show examples of products you admire and explain what you like about them</li>
              <li>Be honest about what you don't know - that's what your development partner is for</li>
            </ul>
            <p><strong>What to look for in a development partner:</strong></p>
            <ul>
              <li>They ask about your users and your business before they ask about features</li>
              <li>They help you cut scope, not add to it</li>
              <li>They show you working software every 2 weeks, not status reports</li>
              <li>They explain technical trade-offs in business terms ("This saves 3 weeks now but limits us later" rather than "We should use a microservices architecture")</li>
              <li>Their past clients stayed beyond the first project</li>
            </ul>
            <p>
              <strong>Budget predictability matters.</strong> Milestone-based pricing means you know
              exactly what you're getting at each stage: "Pay X, get a working demo with these
              features." No open-ended hourly billing that runs away from you.
            </p>
            <p>
              You stay in control of the product. A good partner handles the engineering and walks
              you through every decision. You don't need to understand React to build a great
              product. You need to understand your users - and you already do.
            </p>

            <!-- Section: Choosing a Partner -->
            <h2 id="choose-partner">How to Choose an MVP Development Partner</h2>
            <p>
              The partner you choose will shape your product's architecture, your timeline, and often
              your fundraising prospects. Choose carefully.
            </p>

            <h3 id="questions-to-ask">6 Questions to Ask</h3>
            <ol>
              <li><strong>"Have you built your own product?"</strong> This one matters. A partner who's shipped their own product understands the anxiety of launching, the pressure of limited runway, and the trade-offs that don't show up in a requirements document. If they've only built for clients, they may be skilled engineers - but they haven't walked in your shoes.</li>
              <li><strong>"Can I see the code and deploy independently?"</strong> You should own 100% of the code from day one. If the partner hosts it on their infrastructure or uses proprietary frameworks, you're locked in.</li>
              <li><strong>"What's your process for helping me cut scope?"</strong> If they say "yes" to everything you ask for, be cautious. A good partner pushes back on scope because they care about your outcome, not just the invoice.</li>
              <li><strong>"What happens after launch? Do you stay or disappear?"</strong> The weeks after launch are when you need the most support - bug fixes, user feedback, quick iterations. A partner who disappears after delivery isn't a partner.</li>
              <li><strong>"Can I talk to a founder you've worked with?"</strong> Not a testimonial on a website. A real conversation with someone who's been through the MVP journey with them.</li>
              <li><strong>"What's included in post-launch support?"</strong> Get specifics: how many weeks, what's covered, what costs extra.</li>
            </ol>

            <h3 id="red-flags">Red Flags</h3>
            <ul>
              <li><strong>"We can build anything."</strong> If they don't push back on scope, timeline, or technical approach, they may not be giving you the full picture. You want a partner who tells you what you need to hear, not what you want to hear.</li>
              <li><strong>No trial sprint or milestone-based pricing.</strong> If they want full payment upfront for a 3-month project, the risk is entirely on you.</li>
              <li><strong>Won't show portfolio or connect you with past clients.</strong> Either they don't have relevant experience, or the experience wasn't good. Both are problems.</li>
              <li><strong>Insists on a specific tech stack regardless of your needs.</strong> "We only build in [framework X]" means they're optimizing for their efficiency, not your product.</li>
            </ul>

            <h3 id="green-flags">Green Flags</h3>
            <ul>
              <li>They've built their own product and can show it to you.</li>
              <li>They suggest cutting features, not adding them.</li>
              <li>They can explain technical decisions in plain English.</li>
              <li>Their past clients stayed beyond the MVP phase.</li>
              <li>They offer a trial sprint so both sides can evaluate the fit.</li>
            </ul>

            <!-- Section: After the MVP -->
            <h2 id="after-mvp">After the MVP: What Comes Next</h2>
            <p>Launching the MVP is a milestone, not a finish line. Here's what the next phase looks like.</p>
            <p>
              <strong>How to know if you have product-market fit:</strong> The simplest signal is
              retention. If users come back without you asking them to, you're on to something. Sean
              Ellis' test is also useful: ask users "How would you feel if you could no longer use
              this product?" If 40%+ say "very disappointed," you likely have product-market fit.
            </p>
            <p>
              <strong>When to raise funding with your MVP:</strong> Investors in 2026 expect to see
              a working product, early users, and retention data. A live MVP with 50 active users and
              30% weekly retention is more compelling than a polished pitch deck. Time your raise for
              when you have traction, not when you need money.
            </p>
            <p>
              <strong>Scaling from MVP to full product:</strong> Not everything in your MVP needs to
              be rewritten. If it was built with clean code and proper architecture, much of the
              foundation carries forward. What typically changes: you add features based on user
              feedback, improve performance under load, and invest in design polish. This is an
              evolution, not a restart.
            </p>
            <p>
              <strong>The partnership continues.</strong> Eitoss started as an MVP we built together.
              They raised funding on the back of it. Two years later, we're still building together
              - adding features, scaling infrastructure, growing the product. The MVP was the
              beginning of a partnership, not a transaction.
            </p>

            <!-- Section: Real Stories -->
            <h2 id="real-stories">Real Stories: How We Build MVPs</h2>

            <h3 id="eitoss-story">Eitoss - From Idea to Funded Product</h3>
            <p>
              Eitoss came to us with an idea and a timeline. They needed a working demo fast enough
              to show investors, and a production-ready product soon after.
            </p>
            <p>
              We scoped the MVP together, cutting features until we had the core value proposition
              and nothing else. Eight weeks later, they had a working demo. Three months from
              kickoff, the product was in production with real users.
            </p>
            <p>
              They raised funding on the strength of that MVP. Two years later, we're still building
              together - adding features, scaling the platform, growing the team.
            </p>
            <p>That's what the right MVP engagement looks like. Not a handoff, but a beginning.</p>
            <p>
              <NuxtLink to="/case-studies/eitoss" class="guide-link">Read the full Eitoss story</NuxtLink>
            </p>

            <h3 id="formester-story">Formester - Our Own MVP Journey</h3>
            <p>
              We didn't just build MVPs for clients - we built our own. Formester is a form-building
              SaaS product we created from scratch. We went through every stage ourselves: scoping,
              building, launching, watching real users struggle, iterating, and growing.
            </p>
            <p>
              That experience changed how we work with clients. We know what it feels like to obsess
              over a feature nobody uses. We know the anxiety of launching something that feels
              incomplete. And we know that the MVP is never really "done" - it's the foundation for
              everything that comes after.
            </p>
            <p>
              Formester is live, growing, and rated 4.7 on G2. We bring the ownership mindset we
              developed building it to every product we touch.
            </p>
            <p>
              <NuxtLink to="/case-studies/formester" class="guide-link">Learn about Formester</NuxtLink>
            </p>

            <!-- Section: Getting Started -->
            <h2 id="getting-started">Getting Started</h2>
            <p>
              If you have a product idea and you're trying to figure out how to make it real, here's
              where to start:
            </p>
            <ol>
              <li><strong>Clarify the problem.</strong> Can you describe - in one sentence - what problem your product solves and for whom? If not, spend more time with potential users.</li>
              <li><strong>Scope ruthlessly.</strong> What's the one thing your MVP must do? Start there.</li>
              <li><strong>Find a partner, not a vendor.</strong> Someone who'll help you cut scope, explain trade-offs, and stay beyond launch.</li>
              <li><strong>Budget for learning, not perfection.</strong> The MVP's job is to teach you what to build next.</li>
              <li><strong>Launch before you're ready.</strong> You'll never feel ready. That's okay. Real user feedback is worth more than another month of polishing.</li>
            </ol>
            <p>
              We've built our own product and helped founders build theirs. If you want to talk
              through your idea - what to build, what to skip, what it might cost - we're happy
              to have that conversation.
            </p>
            <div class="flex flex-wrap gap-4 my-8">
              <NuxtLink
                to="/services/mvp-development"
                class="guide-link font-medium"
              >
                Learn more about our MVP development service
              </NuxtLink>
              <span class="text-gray-300">|</span>
              <NuxtLink to="/contact" class="guide-link font-medium">Let's talk about your idea</NuxtLink>
            </div>

            <!-- FAQ Section -->
            <h2 id="faq">Frequently Asked Questions</h2>
            <div class="space-y-4 mt-6">
              <div
                v-for="(faq, index) in faqs"
                :key="index"
                class="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  class="w-full text-left px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                  @click="toggleFaq(index)"
                >
                  <span class="font-semibold text-gray-900 pr-4">{{ faq.question }}</span>
                  <ChevronDown
                    class="h-5 w-5 text-gray-500 shrink-0 transition-transform duration-200"
                    :class="{ 'rotate-180': openFaqs.includes(index) }"
                  />
                </button>
                <div
                  v-show="openFaqs.includes(index)"
                  class="px-6 py-4 text-gray-600 leading-relaxed border-t border-gray-200"
                >
                  <p v-html="faq.answer"></p>
                </div>
              </div>
            </div>

            <!-- Bottom CTA -->
            <div class="mt-16 p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                Have a product idea?
              </h3>
              <p class="text-gray-600 mb-6">
                We've built our own SaaS (Formester) and helped founders like Eitoss go from idea to
                funded product. Let's talk about what you're building - no commitment, just an
                honest conversation.
              </p>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Let's talk about your idea
                <ArrowRight class="h-5 w-5 ml-2" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ChevronRight, ChevronDown, Clock, BookOpen, ArrowRight
} from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})

const openFaqs = ref([])

const toggleFaq = (index) => {
  const idx = openFaqs.value.indexOf(index)
  if (idx > -1) {
    openFaqs.value.splice(idx, 1)
  } else {
    openFaqs.value.push(index)
  }
}

const tocItems = [
  { id: 'what-is-mvp', label: 'What Is an MVP?', depth: 2 },
  { id: 'mvp-vs-prototype', label: 'MVP vs. Prototype vs. PoC', depth: 3 },
  { id: 'why-build-mvp', label: 'Why Build an MVP?', depth: 2 },
  { id: 'process', label: 'The Process: Step by Step', depth: 2 },
  { id: 'timeline', label: 'How Long Does It Take?', depth: 2 },
  { id: 'cost', label: 'What Does It Cost?', depth: 2 },
  { id: 'what-you-dont-need', label: 'What You Don\'t Need', depth: 2 },
  { id: 'non-technical-founders', label: 'For Non-Technical Founders', depth: 2 },
  { id: 'choose-partner', label: 'Choosing a Partner', depth: 2 },
  { id: 'after-mvp', label: 'After the MVP', depth: 2 },
  { id: 'real-stories', label: 'Real Stories', depth: 2 },
  { id: 'getting-started', label: 'Getting Started', depth: 2 },
  { id: 'faq', label: 'FAQ', depth: 2 },
]

const faqs = [
  {
    question: "How long does it take to build an MVP?",
    answer: "Most MVPs take 6-14 weeks, depending on complexity. A simple single-platform SaaS with core features can be demo-ready in 6-8 weeks. Adding mobile, integrations, or real-time features pushes the timeline to 10-14 weeks. We built Eitoss's demo in 8 weeks and had it production-ready in 3 months."
  },
  {
    question: "How much does MVP development cost?",
    answer: 'Depending on the product type and team location, MVP costs typically range from $15,000 to $80,000. A simple SaaS MVP is $15,000-$40,000; a marketplace or AI-integrated product can reach $80,000-$100,000+. The biggest cost driver is scope - fewer features means lower cost and faster learning. See our <a href="/blog/mvp-development-cost" class="guide-link">detailed cost breakdown</a>.'
  },
  {
    question: "What's the difference between an MVP and a prototype?",
    answer: "A prototype tests design and usability - it's often a clickable mockup shown to stakeholders for feedback. An MVP is a real, working product deployed to real users. Prototypes generate design feedback. MVPs generate market validation data: are people using it, coming back, and paying for it?"
  },
  {
    question: "Do I need a technical co-founder to build an MVP?",
    answer: "No. You need a development partner who explains technical decisions in plain English and helps you make product decisions with confidence. Many successful products were built by non-technical founders working with the right engineering partner. What matters is that you deeply understand your users - the technical execution can be partnered on."
  },
  {
    question: "What happens after the MVP launches?",
    answer: "You measure, learn, and iterate. Watch how users interact with the product. Identify what's working, what's confusing, and what's missing. Build the next set of features based on data, not assumptions. If the product resonates, this is also when many founders raise their first round of funding - investors want to see traction, and a live MVP with real users provides that."
  },
  {
    question: "Can I own the code?",
    answer: "Yes - and you should insist on it. Any reputable development partner gives you 100% code ownership from day one. The code lives in your repositories, you control deployment, and you can take it to another team at any time. If a partner won't agree to this, that's a red flag. Your product is yours."
  }
]

// SEO Meta
useSeoMeta({
  title: 'MVP Development: From Idea to Product - The Complete Guide (2026) | AcornGlobus',
  description: 'A practical guide to MVP development: scoping, costs, timelines, tech choices, and what to do after launch. Written by a team that built its own product.',
  keywords: 'MVP development, how to build an MVP, minimum viable product, MVP development cost, MVP for startups, MVP development process, MVP development company',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'MVP Development: From Idea to Product - The Complete Guide (2026)',
  ogDescription: 'A practical guide to MVP development: scoping, costs, timelines, tech choices, and what to do after launch.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/guides/mvp-development',
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: 'MVP Development: From Idea to Product (2026)',
  twitterDescription: 'A practical guide to MVP development with real costs, timelines, and stories from a team that built its own product.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://acornglobus.com/guides/mvp-development' },
  ],
})

// Article JSON-LD schema
useArticleSchema({
  title: 'MVP Development: From Idea to Product - The Complete Guide (2026)',
  description: 'A practical guide to MVP development: scoping, costs, timelines, tech choices, and what to do after launch. Written by a team that built its own product.',
  url: '/guides/mvp-development',
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
  author: 'AcornGlobus',
  wordCount: 3900,
})

// FAQ JSON-LD schema
useFaqSchema(faqs.map(f => ({ question: f.question, answer: f.answer.replace(/<[^>]*>/g, '') })))

// Breadcrumb JSON-LD schema
useBreadcrumbSchema([
  { name: 'Guides', path: '/guides' },
  { name: 'MVP Development', path: '/guides/mvp-development' },
])
</script>

<style scoped>
/* Guide article typography */
.guide-content h2 {
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1.3;
  color: #111827;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.guide-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  color: #1f2937;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.guide-content p {
  font-size: 1.0625rem;
  line-height: 1.75;
  color: #374151;
  margin-bottom: 1.25rem;
}

.guide-content ul,
.guide-content ol {
  font-size: 1.0625rem;
  line-height: 1.75;
  color: #374151;
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}

.guide-content ul {
  list-style-type: disc;
}

.guide-content ol {
  list-style-type: decimal;
}

.guide-content li {
  margin-bottom: 0.5rem;
}

.guide-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.9375rem;
}

.guide-content thead {
  background: #f8fafc;
}

.guide-content th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #1f2937;
  border-bottom: 2px solid #e2e8f0;
  white-space: nowrap;
}

.guide-content td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f1f5f9;
  color: #374151;
  vertical-align: top;
}

.guide-content tbody tr:hover {
  background: #f8fafc;
}

.guide-link {
  color: #2563eb;
  text-decoration: underline;
  text-decoration-color: #93c5fd;
  text-underline-offset: 3px;
  transition: text-decoration-color 0.2s;
}

.guide-link:hover {
  text-decoration-color: #2563eb;
}
</style>
