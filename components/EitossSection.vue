<template>
  <section class="py-20 bg-navy-900 text-white">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Eitoss: From MVP to<br>Funded Success
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            We built Eitoss from scratch, delivering a high-quality MVP that secured funding and launched a successful product.
          </p>
          
          <ul class="space-y-4 mb-8">
            <li class="flex items-center text-lg text-gray-300">
              <svg class="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              Rapid development of MVP
            </li>
            <li class="flex items-center text-lg text-gray-300">
              <svg class="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              High-quality, scalable architecture
            </li>
            <li class="flex items-center text-lg text-gray-300">
              <svg class="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              Successful funding secured
            </li>
            <li class="flex items-center text-lg text-gray-300">
              <svg class="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              Ongoing support and development
            </li>
          </ul>

          <NuxtLink 
            to="/case-studies/eitoss" 
            class="inline-block bg-yellow-400 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            View Eitoss Case Study
          </NuxtLink>
        </div>

        <!-- Image -->
        <div class="flex justify-center lg:justify-end">
          <div class="bg-white rounded-lg w-full max-w-md h-[400px] flex items-center justify-center">
            <svg class="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>