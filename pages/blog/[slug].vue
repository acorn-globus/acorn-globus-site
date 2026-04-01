<template>
  <div class="nuxt-content container__wrapper">
    <ContentDoc>
      <template v-slot="{ doc }">
        <article
          class="max-w-4xl mt-32 mx-auto"
          :class="{ 'mb-12': !(doc.cta && doc.cta.hidden) }"
        >
          <NuxtLink
            :to="`/blog/`"
            class="blog__back"
            :class="doc.toc && doc.toc.length ? 'blog__back__margin' : ''"
          >
            <span>&larr; Back</span>
          </NuxtLink>

          <!-- Category badge -->
          <div v-if="doc.topic || doc.category" class="mb-3">
            <span class="article__category">{{ doc.topic || doc.category }}</span>
          </div>

          <h1 class="mb-1 article__heading">{{ doc.title }}</h1>
          <div class="flex sm-text my-2 datentimeToRead">
            <span>{{ formatDate(doc.createdAt) }}</span>
          </div>
          <div class="sm-text mt-1 article__author-line">
            by
            <span class="article__author">{{ doc.author || 'AcornGlobus Team' }}</span>
            <span v-if="doc.authorProfile">
              &mdash;
              <a :href="doc.authorProfile" target="_blank" rel="noopener noreferrer" class="author-link">
                View Profile
              </a>
            </span>
          </div>
          <p class="article__desc mt-4">{{ doc.description }}</p>
          <ContentRenderer :value="doc" />
        </article>

        <!-- Related Posts -->
        <div v-if="relatedPosts && relatedPosts.length" class="max-w-4xl mx-auto mt-16 mb-12">
          <hr class="related-divider" />
          <h2 class="related-heading">More from our blog</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NuxtLink
              v-for="post in relatedPosts"
              :key="post._path"
              :to="post._path"
              class="related-card"
            >
              <img
                v-if="post.coverImg"
                :src="post.coverImg"
                :alt="post.coverImgAlt || post.title"
                class="related-card__img"
              />
              <div class="related-card__body">
                <span v-if="post.topic" class="related-card__topic">{{ post.topic }}</span>
                <h3 class="related-card__title">{{ post.title }}</h3>
                <span class="related-card__author">{{ post.author || 'AcornGlobus Team' }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};

// Fetch the current article for SEO metadata
const { data: article } = await useAsyncData(`blog-${slug}`, () =>
  queryContent('blog')
    .where({ _path: `/blog/${slug}` })
    .findOne()
)

// Fetch related posts (same topic, or fallback to recent)
const { data: relatedPosts } = await useAsyncData(`related-${slug}`, async () => {
  const currentArticle = await queryContent('blog')
    .where({ _path: `/blog/${slug}` })
    .findOne()

  let related = []
  if (currentArticle?.topic) {
    related = await queryContent('blog')
      .where({
        topic: currentArticle.topic,
        _path: { $ne: `/blog/${slug}` },
      })
      .limit(2)
      .find()
  }

  // If not enough from same topic, fill with recent posts
  if (related.length < 2) {
    const recent = await queryContent('blog')
      .where({ _path: { $ne: `/blog/${slug}` } })
      .sort({ createdAt: -1 })
      .limit(2)
      .find()
    const existingPaths = new Set(related.map((r) => r._path))
    for (const r of recent) {
      if (!existingPaths.has(r._path) && related.length < 2) {
        related.push(r)
      }
    }
  }

  return related
})

// Dynamic SEO meta from article content
if (article.value) {
  const doc = article.value
  const title = doc.metaTitle || doc.title
  const description = doc.metaDescription || doc.description || doc.title
  const image = doc.coverImg
    ? (doc.coverImg.startsWith('http') ? doc.coverImg : `https://acornglobus.com${doc.coverImg}`)
    : 'https://acornglobus.com/acorn-globus.png'

  useSeoMeta({
    title: `${title} | AcornGlobus Blog`,
    description,
    keywords: doc.keywords || '',
    author: doc.author || 'AcornGlobus Team',
    robots: 'index, follow',
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogUrl: `https://acornglobus.com/blog/${slug}`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
  })

  // BlogPosting JSON-LD schema
  useBlogPostSchema({
    title: doc.title,
    description: description,
    slug: String(slug),
    datePublished: typeof doc.createdAt === 'string' ? doc.createdAt : new Date(doc.createdAt).toISOString(),
    dateModified: doc.updatedAt
      ? (typeof doc.updatedAt === 'string' ? doc.updatedAt : new Date(doc.updatedAt).toISOString())
      : undefined,
    author: doc.author || 'AcornGlobus Team',
    image: doc.coverImg || undefined,
  })
}

useHead({
  link: [
    {
      rel: 'canonical',
      href: `https://acornglobus.com/blog/${slug}`,
    },
  ],
})

useBreadcrumbSchema([
  { name: 'Blog', path: '/blog' },
  { name: String(slug), path: `/blog/${slug}` },
]);
</script>

<style>
.article__heading {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 44px;
  color: hsla(0, 0%, 20%, 1);
}

.article__category {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
  background: #eff6ff;
  color: #3b82f6;
  text-transform: capitalize;
}

.article__author-line {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.author-link {
  color: #3b82f6;
  text-decoration: none;
  font-size: 14px;
}

.author-link:hover {
  text-decoration: underline;
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

.blog__back {
  margin-top: -4rem;
  position: absolute;
  color: #777;
  text-decoration: none;
}

.blog__back__margin {
  margin-top: -3rem;
}

/* Related Posts */
.related-divider {
  border: none;
  border-top: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.related-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: hsla(0, 0%, 20%, 1);
  margin-bottom: 1.5rem;
}

.related-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: box-shadow 0.2s ease;
}

.related-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.related-card__img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.related-card__body {
  padding: 16px;
}

.related-card__topic {
  font-size: 12px;
  font-weight: 500;
  color: #3b82f6;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.related-card__title {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: hsla(0, 0%, 20%, 1);
  margin: 6px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-card__author {
  font-size: 13px;
  color: #64748b;
}
</style>
