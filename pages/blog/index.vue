<template>
  <div>
    <div class="container__wrapper relative overflow-hidden mb-5 pb-5">
      <h1 class="big__heading my-20 text-center">Our Blog</h1>

      <!-- Category filter -->
      <div class="flex flex-wrap gap-3 justify-center mb-12">
        <button
          v-for="cat in allCategories"
          :key="cat"
          class="category-pill"
          :class="{ 'category-pill--active': selectedCategory === cat }"
          @click="selectedCategory = selectedCategory === cat ? null : cat"
        >
          {{ cat }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
        <BlogCard
          v-for="article in filteredArticles"
          :key="article.title"
          :article="article"
        />
      </div>

      <!-- Email signup after posts -->
      <div class="max-w-2xl mx-auto mt-16">
        <LeadCaptureBlogEmailSignup :compact="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BlogCard from "~/components/blog/BlogCard.vue";

const selectedCategory = ref(null);

let { data: articles } = await useAsyncData("articles-list", () =>
  queryContent("blog").find()
);
articles = articles.value;

articles.forEach((article) => {
  article.slug = article._path.replace("/blog/", "");
  // Normalize category from the 'topic' frontmatter field
  if (!article.category) {
    article.category = article.topic || 'General';
  }
});

// Extract unique categories
const allCategories = computed(() => {
  const cats = new Set(articles.map((a) => a.category || 'General'));
  return ['All', ...Array.from(cats).sort()];
});

// Filter articles by selected category
const filteredArticles = computed(() => {
  if (!selectedCategory.value || selectedCategory.value === 'All') {
    return articles;
  }
  return articles.filter((a) => a.category === selectedCategory.value);
});

useSeoMeta({
  title: 'Blog | AcornGlobus',
  description: 'Explore articles on technology, product engineering, and building software partnerships. Insights from the team behind Formester and 25+ client products.',
  keywords: 'software development blog, product engineering, tech articles, AcornGlobus blog',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'Blog | AcornGlobus',
  ogDescription: 'Explore articles on technology, product engineering, and building software partnerships.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/blog',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Blog | AcornGlobus',
  twitterDescription: 'Articles on technology, product engineering, and building software partnerships.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://acornglobus.com/blog',
    },
  ],
})

useBreadcrumbSchema([
  { name: 'Blog', path: '/blog' },
]);
</script>

<style>
.big__heading {
  font-size: 4.5rem;
  line-height: 86px;
  font-weight: 900;
  text-transform: capitalize;
}

.my-20 {
  margin-block: 80px;
}

.gap-16 {
  gap: 64px;
}

.category-pill {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  background: white;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-pill:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.category-pill--active {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

@media screen and (max-width: 768px) {
  .big__heading {
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
  }
}
</style>
