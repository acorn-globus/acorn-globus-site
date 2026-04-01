<template>
  <div>
    <div class="bg__primary">
      <Nav />
    </div>
    <div class="container__wrapper relative overflow-hidden mb-5 pb-5">
      <h1 class="big__heading my-20 text-center">Our Blog</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
        <BlogCard
          v-for="article in articles"
          :key="article.title"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BlogCard from "~/components/blog/BlogCard.vue";

let { data: articles } = await useAsyncData("articles-list", () =>
  queryContent("blog").find()
);
articles = articles.value;

articles.forEach((article) => {
  article.slug = article._path.replace("/blog/", "");
});

useHead({
  title: "Blog | Acorn Globus",
  meta: [
    {
      name: "description",
      content:
        "Explore articles on technology, innovation, and industry leadership.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://www.acornglobus.com/blog`,
    },
  ],
});
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

.acorn-light-watermark {
  top: 36px;
  z-index: -1;
}

@media screen and (max-width: 768px) {
  .big__heading {
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
  }
}
</style>
