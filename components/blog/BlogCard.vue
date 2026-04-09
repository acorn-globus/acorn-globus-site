<template>
  <NuxtLink
    :to="`/blog/${article.slug}`"
    class="flex flex-col flex-md-row gap-md-4 gap-3 blog__card"
  >
    <img
      class="rounded"
      :src="article.coverImg"
      :alt="article.coverImgAlt"
      :title="article.coverImgAlt"
    />
    <div class="flex flex-col overflow-hidden">
      <div class="flex align-items-baseline gap-2">
        <span class="blog__category-badge">{{ article.topic || article.category || 'General' }}</span>
      </div>
      <h2 class="blog__heading my-2">
        {{ article.title }}
      </h2>
      <h3 class="name__text mt-2">{{ article.author || 'AcornGlobus Team' }}</h3>
      <span class="sm__text">{{ formatDate(article.createdAt) }}</span>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps(["article"]);

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};
</script>

<style scoped>
.blog__card {
  color: var(--clr-primary);
  text-decoration: none;
}

.blog__category-badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background: #eff6ff;
  color: #3b82f6;
  text-transform: capitalize;
}

.blog__heading {
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.sm__text {
  font-size: 14px;
  line-height: 21px;
  color: #495f92;
}

.name__text {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
}
</style>
