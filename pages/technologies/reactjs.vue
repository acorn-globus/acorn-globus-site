<template>
  <main class="min-h-screen bg-navy-900 text-white">
    <div class="container mx-auto px-4 py-20">
      <!-- Hero Section -->
      <div class="max-w-4xl mx-auto mb-20">
        <div class="inline-block bg-navy-700 px-4 py-2 rounded-full text-yellow-400 text-sm font-semibold mb-6">
          Technology Expertise
        </div>
        <h1 class="text-5xl md:text-6xl font-bold mb-8">
          React.js Development
        </h1>
        <p class="text-xl text-gray-300 mb-8">
          Building powerful, scalable web applications with React.js. Our expert React developers excel in creating modern, component-driven solutions that deliver exceptional user experiences.
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-navy-700 p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-2">7+ Years Experience</h3>
            <p class="text-gray-300">Deep expertise in React ecosystem</p>
          </div>
          <div class="bg-navy-700 p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-2">40+ React Projects</h3>
            <p class="text-gray-300">Successful project deliveries</p>
          </div>
        </div>
      </div>

      <!-- Our Expertise -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">Our React.js Expertise</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.469zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.578l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Modern React Apps</h3>
            <p class="text-gray-300">
              Building with React 18 and modern patterns.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.64-.676a.75.75 0 01.89.891c-.822 4.482-2.553 8.513-4.78 11.546-.632.865-1.469 1.614-2.163 2.36-.228.245-.456.489-.68.728a.75.75 0 01-1.064.004c-.224-.24-.452-.484-.68-.729-.694-.746-1.531-1.495-2.163-2.36-2.227-3.033-3.958-7.064-4.78-11.546a.75.75 0 01.89-.891c1.85.334 3.73.562 5.64.676.332.02.61-.246.61-.578z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Next.js Applications</h3>
            <p class="text-gray-300">
              SSR and static site generation with Next.js 13+.
            </p>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <div class="text-yellow-400 mb-6">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Performance Optimization</h3>
            <p class="text-gray-300">
              Building fast, optimized React applications.
            </p>
          </div>
        </div>
      </div>

      <!-- Technical Skills -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">Technical Proficiency</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-navy-700 p-8 rounded-2xl">
            <h3 class="text-xl font-bold mb-6">Core Competencies</h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">React.js (16.x to 18.x)</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">Next.js</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">Redux / Redux Toolkit</span>
              </li>
            </ul>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <h3 class="text-xl font-bold mb-6">Additional Skills</h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">React Testing Library / Jest</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">TypeScript</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span class="text-gray-300">Webpack / Vite</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Success Stories -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">Success Stories</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-navy-700 p-8 rounded-2xl">
            <h3 class="text-xl font-bold mb-4">Rumie</h3>
            <p class="text-gray-300 mb-6">
              Built a cross-platform educational platform reaching learners in 176 countries.
            </p>
            <NuxtLink 
              to="/case-studies/rumie"
              class="text-yellow-400 hover:text-yellow-500 font-semibold"
            >
              View Case Study →
            </NuxtLink>
          </div>

          <div class="bg-navy-700 p-8 rounded-2xl">
            <h3 class="text-xl font-bold mb-4">Invoice Falcon</h3>
            <p class="text-gray-300 mb-6">
              Developed a comprehensive Shopify invoicing solution with React frontend.
            </p>
            <NuxtLink 
              to="/case-studies/invoice-falcon"
              class="text-yellow-400 hover:text-yellow-500 font-semibold"
            >
              View Case Study →
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-navy-700 rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-bold mb-6">Need React.js Expertise?</h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how our React.js development expertise can help accelerate your project.
        </p>
        <NuxtLink 
          to="/contact" 
          class="inline-block bg-yellow-400 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
        >
          Get Started
        </NuxtLink>
      </div>
    </div>
  </main>
</template>