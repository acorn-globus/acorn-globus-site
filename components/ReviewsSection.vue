<template>
  <section class="py-20 bg-navy-900 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-6">
        What Our Clients Say
      </h2>
      <p class="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
        Don't just take our word for it. Here's what industry leaders have to say about working with us.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Review 1 -->
        <div class="bg-navy-700 p-8 rounded-2xl">
          <div class="flex text-yellow-400 mb-4">
            <svg v-for="i in 5" :key="i" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-4">"Proficient and Innovative Development Team"</h3>
          <p class="text-gray-300 mb-8">
            Acorn Globus is a very proficient team, quick to learn new technologies and concepts. They quickly dove in deep and generated impressive results of high quality that are still operational to this day.
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-yellow-400">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-bold">Alon Diamant</h4>
              <p class="text-gray-400">CTO at Mayple</p>
            </div>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="bg-navy-700 p-8 rounded-2xl">
          <div class="flex text-yellow-400 mb-4">
            <svg v-for="i in 5" :key="i" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-4">"Exceptional Development and Vision"</h3>
          <p class="text-gray-300 mb-8">
            Acorn Globus is a gifted team with a rare combination of attention to detail and an overall sense for the big picture. They are very passionate about what they do and come up proactively with improvement ideas.
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-yellow-400">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-bold">Enzo Zadrima</h4>
              <p class="text-gray-400">Chief Technology Officer at Viewber</p>
            </div>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="bg-navy-700 p-8 rounded-2xl">
          <div class="flex text-yellow-400 mb-4">
            <svg v-for="i in 5" :key="i" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-4">"Reliable Front-End Solutions"</h3>
          <p class="text-gray-300 mb-8">
            Acorn Globus is my go-to team when I need a trusted partner to execute any front-end project. They are super attentive, communicate effectively, and accurately manage your expectations for their time and involvement.
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-yellow-400">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-bold">Bogdan Arsenie</h4>
              <p class="text-gray-400">CTO at PerformLine & Social Impact Advocate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>