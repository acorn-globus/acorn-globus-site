<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Compass class="h-4 w-4 mr-2" />
            Our Process
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            No Black Boxes.
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block mt-2">
              Just Building Together.
            </span>
          </h1>

          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Every partnership starts with a conversation and grows from there. Here's exactly what working with us looks like - no surprises, no fine print.
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            We've been asked this question hundreds of times: "So... how does this actually work?"
          </p>
          <p>
            Fair question. You're about to trust a team with your product - something you've been thinking about for months, maybe years. You deserve to know exactly what happens after that first handshake.
          </p>
          <p>
            So here it is. Our entire process, laid bare. The same way we'd explain it sitting across the table from you.
          </p>
        </div>
      </div>
    </section>

    <!-- Step 1: Discovery and Scoping -->
    <section class="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4">
          <div class="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl font-bold text-lg">
            1
          </div>
          <span class="text-sm font-semibold text-blue-600 uppercase tracking-wider">Discovery &amp; Scoping</span>
        </div>

        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          We Listen First. Then We Plan Honestly.
        </h2>

        <div class="grid lg:grid-cols-2 gap-12">
          <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              The first thing we do is understand your product. Not your tech stack wish list - your product. What problem does it solve? Who uses it? What does success look like in 6 months?
            </p>
            <p>
              We typically spend 1-2 weeks in discovery, depending on complexity. This isn't a sales exercise. It's the work that makes everything after it go right.
            </p>
            <p>
              By the end of discovery, you'll have a clear scope document, a realistic timeline, and an honest recommendation on what to build first. Sometimes that means building less than you think you need. We'd rather help you ship the right thing fast than the everything thing slowly.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold text-gray-900 mb-6">What a scoping conversation covers</h3>
            <ul class="space-y-4">
              <li v-for="(item, i) in scopingItems" :key="i" class="flex items-start gap-3">
                <div class="mt-1 flex-shrink-0">
                  <CheckCircle2 class="h-5 w-5 text-blue-600" />
                </div>
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- ICP Callouts -->
        <div class="grid md:grid-cols-3 gap-6 mt-12">
          <div class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
            <div class="flex items-center gap-2 mb-3">
              <User class="h-5 w-5 text-indigo-600" />
              <h4 class="font-bold text-gray-900">For non-technical founders</h4>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              You don't need to show up with a spec sheet. Show up with your vision. We'll ask the right questions, translate your ideas into a technical plan, and walk you through every decision - in plain English, not jargon.
            </p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
            <div class="flex items-center gap-2 mb-3">
              <Rocket class="h-5 w-5 text-blue-600" />
              <h4 class="font-bold text-gray-900">For funded startups</h4>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              We know runway matters. Discovery is fast and focused. We scope for your first meaningful milestone, not a 12-month roadmap you'll rewrite in 3 months anyway.
            </p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
            <div class="flex items-center gap-2 mb-3">
              <Building2 class="h-5 w-5 text-green-600" />
              <h4 class="font-bold text-gray-900">For mid-size companies</h4>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              If you have an existing codebase, we review it during discovery. We assess the architecture, identify integration points, and map out how our engineers will slot into your workflow from day one.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Step 2: Team Assembly -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4">
          <div class="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl font-bold text-lg">
            2
          </div>
          <span class="text-sm font-semibold text-blue-600 uppercase tracking-wider">Team Assembly</span>
        </div>

        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          You'll Know Us by Name.
        </h2>

        <div class="grid lg:grid-cols-2 gap-12">
          <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              We're a team of 20+ engineers. That's intentional. Small enough that you'll know every person working on your product. Experienced enough that you won't need to supervise them.
            </p>
            <p>
              <strong class="text-gray-900">We match engineers to your project, not the other way around.</strong> Need someone who's built real-time dashboards in React? We'll pair you with someone who's done exactly that. Need a backend engineer who understands healthcare compliance? We've got you.
            </p>
            <p>
              <strong class="text-gray-900">The people you meet are the people who build.</strong> No bait-and-switch. No senior engineer in the pitch meeting and a junior writing the code. Both of our founders - Ankit and Tarun - stay involved throughout. They code, they join client calls, they review pull requests.
            </p>
          </div>

          <div class="space-y-6">
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-blue-100 rounded-xl">
                  <Users class="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">No bench. No rotating contractors.</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Your team stays your team. When PerformLine started working with us, they had one engineer from our team. Two years later, that relationship has grown to 8+ engineers - and the original engineer is still on the project. That's trust earned over time.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-green-100 rounded-xl">
                  <Clock class="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Fast ramp-up</h3>
                  <p class="text-gray-600 leading-relaxed">
                    We typically need 3-5 business days to assemble your team after scoping is complete. For resource augmentation, our engineers are usually submitting their first pull request within the first week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Step 3: Build Sprints -->
    <section class="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4">
          <div class="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl font-bold text-lg">
            3
          </div>
          <span class="text-sm font-semibold text-blue-600 uppercase tracking-wider">Build Sprints</span>
        </div>

        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          You See Progress Every Week. Not Every Quarter.
        </h2>

        <div class="max-w-3xl space-y-6 text-lg text-gray-600 leading-relaxed mb-12">
          <p>
            We work in 2-week sprints. Every sprint has a clear goal, a defined set of deliverables, and a demo at the end where you see exactly what was built.
          </p>
        </div>

        <!-- Weekly rhythm -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div v-for="(day, i) in weeklyRhythm" :key="i" class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center gap-3 mb-3">
              <component :is="day.icon" :class="['h-5 w-5', day.iconColor]" />
              <span class="font-bold text-gray-900">{{ day.day }}</span>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">{{ day.description }}</p>
          </div>
        </div>

        <!-- Communication and feedback -->
        <div class="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Communication is daily, not monthly.</h3>
            <div class="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                We join your Slack (or you join ours). We use your project management tools - Jira, Linear, Notion, whatever your team runs on. We join your standups if you want us there. The goal is simple: you should never have to wonder what's happening with your product.
              </p>
              <p>
                <strong class="text-gray-900">Feedback loops are tight.</strong> When you see something in a demo that's not quite right, it goes into the next sprint. No waiting 6 weeks for a "change request process." We're building with you, not delivering to you.
              </p>
            </div>
          </div>

          <!-- Sprint cadence table -->
          <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Sprint demo cadence</h3>
            <div class="space-y-4">
              <div v-for="(sprint, i) in sprintCadence" :key="i" class="flex items-start gap-4">
                <div :class="['flex-shrink-0 w-20 text-sm font-bold rounded-lg py-1 px-2 text-center', sprint.color]">
                  {{ sprint.label }}
                </div>
                <p class="text-gray-600 text-sm leading-relaxed">{{ sprint.description }}</p>
              </div>
            </div>
            <p class="text-sm text-gray-500 mt-6 leading-relaxed">
              The exact cadence depends on your project. An MVP might be 4-6 sprints. A complex platform migration could be 12+. But the rhythm stays the same: plan, build, demo, adjust.
            </p>
          </div>
        </div>

        <!-- ICP Callouts for Step 3 -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
            <div class="flex items-center gap-2 mb-3">
              <User class="h-5 w-5 text-indigo-600" />
              <h4 class="font-bold text-gray-900">For non-technical founders</h4>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              Every demo is a chance to see your vision coming to life. We'll explain what we built, why we made certain choices, and what's coming next. No jargon - just your product, working, on screen.
            </p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
            <div class="flex items-center gap-2 mb-3">
              <Building2 class="h-5 w-5 text-green-600" />
              <h4 class="font-bold text-gray-900">For mid-size companies</h4>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              Our engineers plug into your existing sprint cadence. Same ceremonies, same tools, same Definition of Done. Your team lead manages priorities; our engineers deliver. You'll forget we're external.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Step 4: Launch Preparation -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4">
          <div class="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl font-bold text-lg">
            4
          </div>
          <span class="text-sm font-semibold text-blue-600 uppercase tracking-wider">Launch Preparation</span>
        </div>

        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          We Don't Just Ship. We Make Sure It's Ready.
        </h2>

        <p class="text-lg text-gray-600 leading-relaxed max-w-3xl mb-12">
          The weeks before launch are where discipline matters most. Eitoss shipped their MVP in 3 months and raised their round on the back of it. We know what "launch-ready" actually means - and it's more than passing QA.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div v-for="(item, i) in launchItems" :key="i" class="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div :class="['p-3 rounded-xl mb-4 inline-flex', item.bgColor]">
              <component :is="item.icon" :class="['h-6 w-6', item.iconColor]" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ item.description }}</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
          <div class="flex items-start gap-4">
            <div class="p-3 bg-blue-100 rounded-xl flex-shrink-0">
              <PlayCircle class="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">We do a launch dry run.</h3>
              <p class="text-lg text-gray-600 leading-relaxed">
                Before the real launch, we simulate it. Deploy to production, run through the critical user flows, verify monitoring is working, and make sure someone on the team knows how to roll back if needed.
              </p>
              <p class="text-lg text-gray-700 font-medium mt-4">
                Launch day should be boring. That's the goal. If we've done our job right, it's just another deploy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Step 5: Post-Launch and Partnership -->
    <section class="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4">
          <div class="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl font-bold text-lg">
            5
          </div>
          <span class="text-sm font-semibold text-blue-600 uppercase tracking-wider">Post-Launch</span>
        </div>

        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          We Stay.
        </h2>

        <div class="grid lg:grid-cols-2 gap-12 mb-12">
          <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Launching is a milestone, not an ending. Your users will find bugs you didn't catch. They'll request features you didn't plan. Your product will need to grow, adapt, and evolve. We'll be there for all of it.
            </p>
          </div>

          <div class="space-y-4">
            <div v-for="(phase, i) in postLaunchPhases" :key="i" class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <component :is="phase.icon" :class="['h-5 w-5 mt-1 flex-shrink-0', phase.iconColor]" />
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">{{ phase.title }}</h4>
                  <p class="text-gray-600 text-sm leading-relaxed">{{ phase.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Partnership proof stories -->
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
            <h3 class="text-xl font-bold text-gray-900 mb-2">PerformLine</h3>
            <p class="text-sm font-semibold text-blue-600 mb-4">1 engineer to 8+ in 2 years</p>
            <p class="text-gray-600 leading-relaxed">
              PerformLine started with one engineer from our team. That was over two years ago. Today, we have 8+ engineers embedded with their team. New hires at PerformLine sometimes forget our engineers are external - that's how deeply integrated we are.
            </p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Eitoss</h3>
            <p class="text-sm font-semibold text-green-600 mb-4">MVP in 3 months, raised funding, still partners</p>
            <p class="text-gray-600 leading-relaxed">
              Eitoss came to us with an idea. We shipped their MVP in 3 months. They raised funding on the back of what we built together. Two years later, we're still building together, still growing the product, still partners.
            </p>
          </div>
        </div>

        <p class="text-xl text-gray-700 font-medium text-center max-w-3xl mx-auto">
          80%+ of our clients continue working with us beyond the initial engagement. Not because of a contract - because the partnership works.
        </p>
      </div>
    </section>

    <!-- Handoff Checklist -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Full Transparency
          </span>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What You Get: The Handoff Checklist
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you work with us for 3 months or 3 years, everything we build is yours.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div v-for="(item, i) in handoffItems" :key="i" class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-start gap-4">
              <div :class="['p-2 rounded-lg flex-shrink-0', item.bgColor]">
                <component :is="item.icon" :class="['h-5 w-5', item.iconColor]" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">{{ item.title }}</h3>
                <p class="text-gray-600 text-sm leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <p class="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          Zero lock-in. Your product, your code, your freedom. If you want to bring everything in-house someday, we'll help you do that too. We'd rather earn your partnership every month than hold your codebase hostage.
        </p>
      </div>
    </section>

    <!-- How We Communicate -->
    <section class="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Communication
          </span>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How We Communicate
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe most project problems are communication problems in disguise. So we over-communicate.
          </p>
        </div>

        <!-- Communication channels as cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div v-for="(channel, i) in communicationChannels" :key="i" class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center gap-3 mb-3">
              <component :is="channel.icon" :class="['h-5 w-5', channel.iconColor]" />
              <h3 class="font-bold text-gray-900">{{ channel.name }}</h3>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-2">{{ channel.purpose }}</p>
            <span class="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {{ channel.cadence }}
            </span>
          </div>
        </div>

        <p class="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          You'll have a direct line to the engineers building your product - not a project manager translating messages back and forth. Questions get answered in hours, not days.
        </p>
      </div>
    </section>

    <!-- Engagement Models -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Flexible Models
          </span>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Flexible Engagement Models
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Every product and team is different. We meet you where you are.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div v-for="(model, i) in engagementModels" :key="i" class="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div class="flex items-start gap-4">
              <div :class="['p-3 rounded-xl group-hover:scale-110 transition-transform duration-300', model.bgColor]">
                <component :is="model.icon" :class="['h-6 w-6', model.iconColor]" />
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ model.title }}</h3>
                <p class="text-gray-600 leading-relaxed mb-3">{{ model.description }}</p>
                <p class="text-sm font-medium text-gray-500">
                  <strong class="text-gray-700">Best for:</strong> {{ model.bestFor }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink
            to="/services"
            class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Learn more about our services
            <ArrowRight class="h-5 w-5 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ready to Start?
        </h2>
        <p class="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
          The first step is a conversation. No pitch deck, no commitment - just a real talk about your product, your timeline, and whether we're the right fit.
        </p>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We'll be honest with you from minute one. If we're not the right team for your project, we'll tell you - and point you in the right direction if we can.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            Let's Talk
            <ArrowRight class="ml-2 h-5 w-5" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ArrowRight, Users, Compass, CheckCircle2, Clock,
  Rocket, Building2, User, PlayCircle,
  MessageSquare, CalendarDays, Monitor, Video, BarChart3,
  Code, FileText, Cloud, GraduationCap, GitBranch, Activity,
  Shield, Bug, Zap, Server, Handshake, Wrench
} from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})

// SEO Meta Tags
useSeoMeta({
  title: 'How We Work | AcornGlobus',
  description: 'See exactly what it\'s like to work with AcornGlobus - from the first conversation to long-term partnership. Transparent process, weekly demos, and a team you\'ll know by name.',
  keywords: 'how we work software development partner, software development process, agile development partner, transparent software agency process, dedicated development team process',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'How We Work | AcornGlobus',
  ogDescription: 'See exactly what it\'s like to work with AcornGlobus - from the first conversation to long-term partnership. Transparent process, weekly demos, and a team you\'ll know by name.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/how-we-work',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'How We Work | AcornGlobus',
  twitterDescription: 'See exactly what it\'s like to work with AcornGlobus - from the first conversation to long-term partnership. Transparent process, weekly demos, and a team you\'ll know by name.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useBreadcrumbSchema([
  { name: 'How We Work', path: '/how-we-work' },
])

// Data

const scopingItems = [
  'Your product vision and the problem it solves',
  'Who your users are and what they need',
  'What\'s already built (if anything) and what shape it\'s in',
  'Your timeline - and whether it\'s realistic (we\'ll be honest)',
  'Budget range, so we can design a plan that fits',
  'What "done" means for your first milestone',
]

const weeklyRhythm = [
  {
    day: 'Monday',
    description: 'Sprint planning - you\'re invited. Your priorities shape the sprint.',
    icon: CalendarDays,
    iconColor: 'text-blue-600',
  },
  {
    day: 'Daily',
    description: 'Async standups on Slack - what\'s done, what\'s in progress, any blockers.',
    icon: MessageSquare,
    iconColor: 'text-indigo-600',
  },
  {
    day: 'Mid-week',
    description: 'Mid-sprint check-in if needed, especially early on in the engagement.',
    icon: Video,
    iconColor: 'text-purple-600',
  },
  {
    day: 'Friday',
    description: 'Demo of working features on staging. You see it, you click it, you give feedback.',
    icon: Monitor,
    iconColor: 'text-green-600',
  },
]

const sprintCadence = [
  { label: 'Sprint 1', description: 'Foundation - project setup, architecture decisions, first working screens or endpoints.', color: 'bg-blue-100 text-blue-700' },
  { label: 'Sprint 2-3', description: 'Core features - the things your users will actually touch.', color: 'bg-indigo-100 text-indigo-700' },
  { label: 'Sprint 4-5', description: 'Integration and polish - connecting the pieces, handling edge cases.', color: 'bg-purple-100 text-purple-700' },
  { label: 'Sprint 6+', description: 'Iteration - refinement, performance, launch readiness.', color: 'bg-green-100 text-green-700' },
]

const launchItems = [
  {
    title: 'Testing',
    description: 'Unit tests, integration tests, and end-to-end testing. We write tests as we build, not as an afterthought.',
    icon: Bug,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Staging environment',
    description: 'A production-mirror environment where you, your team, your beta users, and your investors can test everything before it goes live.',
    icon: Server,
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
  {
    title: 'Performance review',
    description: 'Load testing, response time optimization, and database query analysis. Your product should handle real traffic from day one.',
    icon: Zap,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    title: 'Security check',
    description: 'Dependency audits, authentication review, and data handling verification. Especially important for fintech, healthtech, and any product handling user data.',
    icon: Shield,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    title: 'Deployment setup',
    description: 'CI/CD pipelines, monitoring, alerting, and rollback procedures. We set up the infrastructure so that future deploys are smooth and safe.',
    icon: GitBranch,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
]

const postLaunchPhases = [
  {
    title: 'First 2 weeks after launch',
    description: 'We\'re on standby. Bug fixes are prioritized. We monitor error rates and performance. If something breaks at 2 AM, we handle it.',
    icon: Shield,
    iconColor: 'text-blue-600',
  },
  {
    title: 'Ongoing maintenance',
    description: 'Regular dependency updates, security patches, performance monitoring, and incremental improvements. Your product stays healthy.',
    icon: Wrench,
    iconColor: 'text-indigo-600',
  },
  {
    title: 'Growth partnership',
    description: 'When you\'re ready to build the next feature, expand to a new market, or scale your infrastructure - we\'re already up to speed. No re-onboarding. No ramp-up time.',
    icon: Rocket,
    iconColor: 'text-green-600',
  },
]

const handoffItems = [
  {
    title: 'Source code',
    description: 'Full repository access from day one. Your code, your IP, always.',
    icon: Code,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Documentation',
    description: 'Architecture decisions, API documentation, setup guides, and runbooks.',
    icon: FileText,
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
  {
    title: 'Infrastructure access',
    description: 'All cloud accounts, credentials, and service configurations.',
    icon: Cloud,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Knowledge transfer',
    description: 'We walk your team through the codebase, the architecture decisions, and the why behind every trade-off.',
    icon: GraduationCap,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    title: 'CI/CD pipelines',
    description: 'Automated testing and deployment, documented and ready for your team to maintain.',
    icon: GitBranch,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    title: 'Monitoring & alerting',
    description: 'Dashboards, logs, and alerts set up and documented.',
    icon: Activity,
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600',
  },
]

const communicationChannels = [
  {
    name: 'Slack',
    purpose: 'Daily updates, quick questions, blockers. We join your workspace or you join ours.',
    cadence: 'Daily, async',
    icon: MessageSquare,
    iconColor: 'text-blue-600',
  },
  {
    name: 'Sprint planning',
    purpose: 'Prioritize the next 2 weeks together. Your priorities shape what we build.',
    cadence: 'Every 2 weeks',
    icon: CalendarDays,
    iconColor: 'text-indigo-600',
  },
  {
    name: 'Sprint demo',
    purpose: 'See working features on staging, give feedback, shape the next iteration.',
    cadence: 'Every 2 weeks',
    icon: Monitor,
    iconColor: 'text-purple-600',
  },
  {
    name: 'Weekly sync',
    purpose: 'Big-picture check-in with the project lead on progress and priorities.',
    cadence: 'Weekly',
    icon: Video,
    iconColor: 'text-green-600',
  },
  {
    name: 'Monthly review',
    purpose: 'Partnership health, roadmap alignment, team feedback, and strategic planning.',
    cadence: 'Monthly',
    icon: BarChart3,
    iconColor: 'text-orange-600',
  },
]

const engagementModels = [
  {
    title: 'Resource Augmentation',
    description: 'Your team, plus ours. Our engineers embed in your existing workflow - same tools, same standups, same Git workflow. You manage priorities; we deliver.',
    bestFor: 'Teams that need more capacity or specific skills without the hiring cycle.',
    icon: Users,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'MVP Development',
    description: 'From idea to working product in 8-16 weeks. We handle architecture, development, testing, and deployment. You handle the vision and feedback.',
    bestFor: 'Founders who need to ship fast and validate with real users.',
    icon: Rocket,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    title: 'Full Project Delivery',
    description: 'We own the entire build, end to end. Dedicated team, project lead, and a clear milestone plan. You stay involved through weekly demos and sprint planning.',
    bestFor: 'Companies with a defined product scope who want one accountable team.',
    icon: Handshake,
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
  {
    title: 'Maintenance & Support',
    description: 'Keep your product healthy, secure, and growing. Bug fixes, feature additions, performance monitoring, and regular updates.',
    bestFor: 'Any product in production that needs ongoing care.',
    icon: Wrench,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
]
</script>
