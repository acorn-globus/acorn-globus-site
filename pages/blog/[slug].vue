<template>
  <div class="bg__primary">
    <Nav />
  </div>
  <div class="nuxt-content container__wrapper">
    <template v-if="doc">
      <article
        class="max-w-4xl mt-32 mx-auto"
        :class="{ 'mb-12': !(doc.cta && doc.cta.hidden) }"
      >
        <NuxtLink
          :to="`/blog/`"
          class="blog__back"
          :class="doc.toc && doc.toc.length ? 'blog__back__margin' : ''"
        >
          <span>← Back</span>
        </NuxtLink>
        <h1 class="mb-1 article__heading">{{ doc.title }}</h1>
        <div class="flex sm-text my-2 datentimeToRead">
          <span>{{ formatDate(doc.createdAt) }}</span>
        </div>
        <div class="sm-text mt-1">
          by
          <span class="article__author">{{ doc.author }}</span>
        </div>
        <p class="article__desc mt-4">{{ doc.description }}</p>
        <ContentRenderer :value="doc" />
      </article>
    </template>
    <div v-else-if="status === 'pending'">Loading...</div>
    <div v-else>Post not found</div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: doc, status } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryCollection("blog").path(route.path).first()
);

const formatDate = (date) => {
  if (!date) return "";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};

useHead({
  link: [
    {
      rel: "canonical",
      href: `https://www.acronglobus.com/blog/${route.params.slug}`,
    },
  ],
});
</script>

<style>
.article__heading {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 44px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content h1,
.nuxt-content h2,
.nuxt-content h3 {
  margin-block: 16px 8px;
}

.nuxt-content h1 {
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 40px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 36px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 24px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content a {
  color: var(--clr-primary);
  text-decoration: underline;
}

.nuxt-content p,
.nuxt-content ul,
.article__desc {
  font-size: 17px;
  line-height: 28px;
  letter-spacing: 0.2px;
  color: hsla(0, 0%, 31%, 1);
}

.nuxt-content tr,
.nuxt-content th {
  padding: 10px;
}

.nuxt-content img {
  margin-block: 16px;
  border-radius: 4px;
  height: auto;
  width: 100%;
}

.nuxt-content pre code {
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 3px solid var(--clr-primary);
  color: #666;
  page-break-inside: avoid;
  font-size: 14px;
  line-height: 1.5;
  margin-block: 8px 20px;
  max-width: 100%;
  overflow: auto;
  padding: 16px 20px;
  display: block;
  word-wrap: break-word;
  border-radius: 4px;
}

.sm-text {
  font-size: 14px;
  line-height: 21px;
  color: hsla(0, 0%, 31%, 1);
}

.article__author {
  font-weight: 600;
}

.datentimeToRead {
  color: #8c8c8c;
  gap: 0.75rem;
}

.timeToRead {
  gap: 0.5rem;
}

.blog__back {
  margin-top: -4rem;
  position: absolute;
  color: #777;
  text-decoration: none;
}

.blog__back__margin {
  margin-top: -3rem;
}

#tocMenuLink {
  color: #777;
  font-size: 16px;
}

.dropdown-menu {
  border: 0 solid #e4e4e7;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.8);
  max-height: 450px;
  overflow-y: auto;
  overflow-x: hidden;
}

.dropdown-link {
  padding: 0.5em;
  min-width: 750px;
  width: 100%;
  display: block;
}

@media only screen and (max-width: 992px) {
  .dropdown-link {
    min-width: 680px;
  }
}

@media only screen and (max-width: 768px) {
  .dropdown-link {
    min-width: 480px;
  }
}

@media only screen and (max-width: 576px) {
  .dropdown-link {
    min-width: 370px;
  }
}

@media only screen and (max-width: 432px) {
  .dropdown-link {
    min-width: 320px;
  }
}

@media only screen and (max-width: 360px) {
  .dropdown-link {
    min-width: 250px;
  }
}
</style>
