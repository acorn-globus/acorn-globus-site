<template>
  <div class="blog-post-page">
    <ContentDoc>
      <template v-slot="{ doc }">

        <!-- ===== ARTICLE HEADER ===== -->
        <header :class="doc.toc ? 'article-hero-guide' : 'article-hero-simple'">
          <div :class="doc.toc ? 'container-redesign' : 'article-container'">
            <div :style="doc.toc ? 'max-width: 800px;' : ''">
              <NuxtLink to="/blog/" class="breadcrumb">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                <template v-if="doc.toc">
                  Blog
                </template>
                <template v-else>
                  Back to Blog
                </template>
              </NuxtLink>

              <!-- Breadcrumb trail for guide-style posts -->
              <span v-if="doc.toc" class="breadcrumb breadcrumb-trail">&nbsp;&gt;&nbsp; {{ doc.topic || 'Article' }}</span>

              <div :style="doc.toc ? 'margin-top: 16px;' : ''">
                <span class="category-pill" :class="categoryColorClass(doc.topic || doc.category)">
                  {{ doc.topic || doc.category || 'General' }}
                </span>
              </div>

              <h1 :class="doc.toc ? 'article-title-guide' : 'article-title'">{{ doc.title }}</h1>

              <!-- Description for guide-style posts -->
              <p v-if="doc.toc && doc.description" class="article-description">{{ doc.description }}</p>

              <div :class="doc.toc ? 'article-meta-guide' : 'article-meta'">
                <span v-if="doc.toc">By {{ doc.author || 'AcornGlobus Team' }}</span>
                <span v-else>{{ doc.author || 'AcornGlobus Team' }}</span>
                <span :class="doc.toc ? 'meta-divider' : 'meta-sep'">&middot;</span>
                <span>{{ formatDate(doc.createdAt) }}</span>
                <template v-if="doc.readingTime">
                  <span :class="doc.toc ? 'meta-divider' : 'meta-sep'">&middot;</span>
                  <span class="meta-reading-time">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {{ doc.readingTime }}
                  </span>
                </template>
              </div>
            </div>
          </div>
        </header>

        <!-- ===== MAIN CONTENT (Guide layout with TOC sidebar) ===== -->
        <section v-if="doc.toc" style="padding-top: 0;">
          <div class="container-redesign">
            <div class="article-layout">
              <!-- Table of Contents sidebar -->
              <aside class="toc-sidebar">
                <h4 class="toc-heading">Table of Contents</h4>
                <ol class="toc-list">
                  <li v-for="heading in doc.body?.toc?.links || []" :key="heading.id">
                    <a :href="`#${heading.id}`">{{ heading.text }}</a>
                  </li>
                </ol>
              </aside>

              <!-- Article body -->
              <div class="article-content-guide">
                <img
                  v-if="doc.coverImg"
                  :src="doc.coverImg"
                  :alt="doc.coverImgAlt || doc.title"
                  class="article-cover-img"
                />
                <ContentRenderer :value="doc" />

                <!-- Email Signup -->
                <div class="email-signup-redesign">
                  <LeadCaptureBlogEmailSignup />
                </div>

                <!-- CTA -->
                <div class="guide-cta">
                  <h2 class="cta-title">Have a project in mind?</h2>
                  <p class="cta-description">We'd love to hear what you're building. Let's talk about how we can help.</p>
                  <NuxtLink to="/contact/" class="btn btn-primary">Let's Talk</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ===== MAIN CONTENT (Simple single-column layout) ===== -->
        <article v-else class="article-body-simple">
          <div class="article-container">
            <img
              v-if="doc.coverImg"
              :src="doc.coverImg"
              :alt="doc.coverImgAlt || doc.title"
              class="article-cover-img"
            />
            <ContentRenderer :value="doc" />

            <!-- Email Signup -->
            <div class="email-signup-redesign">
              <LeadCaptureBlogEmailSignup />
            </div>
          </div>
        </article>

        <!-- CTA (only for simple layout — guide layout has inline CTA) -->
        <section v-if="!doc.toc" class="cta-section-redesign">
          <div class="container-redesign">
            <div class="cta-inner-redesign">
              <h2>Want a team that builds it like it's theirs?</h2>
              <p>We built Formester. We'll bring the same ownership to your product. Let's talk.</p>
              <NuxtLink to="/contact/" class="btn btn-primary">Let's Talk</NuxtLink>
            </div>
          </div>
        </section>

        <!-- ===== RELATED POSTS ===== -->
        <section v-if="relatedPosts && relatedPosts.length" class="related-section-redesign">
          <div class="container-redesign">
            <div class="related-inner">
              <h2 class="related-heading-redesign">More from our blog</h2>
              <div class="related-grid-redesign">
                <NuxtLink
                  v-for="post in relatedPosts"
                  :key="post._path"
                  :to="`${post._path}/`"
                  class="related-card-redesign"
                >
                  <img
                    v-if="post.coverImg"
                    :src="post.coverImg"
                    :alt="post.coverImgAlt || post.title"
                    class="related-card-redesign__img"
                  />
                  <div class="related-card-redesign__body">
                    <span v-if="post.topic" class="related-card-redesign__topic">{{ post.topic }}</span>
                    <h3 class="related-card-redesign__title">{{ post.title }}</h3>
                    <span class="related-card-redesign__meta">{{ post.author || 'AcornGlobus Team' }}</span>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>

      </template>
    </ContentDoc>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}

/**
 * Map topic/category to a color class for the category pill.
 * The redesign uses different accent colors per category.
 */
const categoryColorClass = (topic) => {
  if (!topic) return 'pill-default'
  const t = topic.toLowerCase()
  if (t.includes('thought leadership')) return 'pill-teal'
  if (t.includes('mvp')) return 'pill-blue'
  if (t.includes('resource augmentation') || t.includes('staff')) return 'pill-purple'
  if (t.includes('hiring') || t.includes('startup')) return 'pill-green'
  if (t.includes('code quality') || t.includes('handoff')) return 'pill-orange'
  if (t.includes('tech')) return 'pill-violet'
  if (t.includes('business')) return 'pill-amber'
  if (t.includes('freelanc')) return 'pill-rose'
  return 'pill-blue'
}

// Fetch the current article for SEO metadata
const { data: article } = await useAsyncData(`blog-${slug}`, () =>
  queryContent('blog')
    .where({ _path: `/blog/${slug}` })
    .findOne()
)

// Fetch related posts: same-topic first, then recent fallback
const currentTopic = article.value?.topic || null

const { data: sameTopicPosts } = currentTopic
  ? await useAsyncData(`related-topic-${slug}`, () =>
      queryContent('blog')
        .where({ topic: currentTopic, _path: { $ne: `/blog/${slug}` } })
        .limit(2)
        .find()
    )
  : { data: ref([]) }

const { data: recentPosts } = await useAsyncData(`related-recent-${slug}`, () =>
  queryContent('blog')
    .where({ _path: { $ne: `/blog/${slug}` } })
    .sort({ createdAt: -1 })
    .limit(4)
    .find()
)

const relatedPosts = computed(() => {
  const topicResults = sameTopicPosts?.value || []
  const recentResults = recentPosts?.value || []
  if (topicResults.length >= 2) return topicResults.slice(0, 2)
  const result = [...topicResults]
  const existingPaths = new Set(result.map((r) => r._path))
  for (const r of recentResults) {
    if (!existingPaths.has(r._path) && result.length < 2) {
      result.push(r)
    }
  }
  return result
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
    ogUrl: `https://acornglobus.com/blog/${slug}/`,
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
      href: `https://acornglobus.com/blog/${slug}/`,
    },
  ],
})

useBreadcrumbSchema([
  { name: 'Blog', path: '/blog/' },
  { name: article.value?.title || String(slug), path: `/blog/${slug}/` },
])
</script>

<style>
/* ===================================================================
   BLOG POST PAGE — Redesign styles
   Two layouts:
     1. Simple: .article-container (800px centered) for short/medium articles
     2. Guide:  .article-layout (TOC sidebar + article content) for long guides
   =================================================================== */

/* ===== SHARED CONTAINER ===== */
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 40px;
}

/* ===== ARTICLE HERO — Simple layout ===== */
.article-hero-simple {
  padding-top: 140px;
  padding-bottom: 48px;
}

/* ===== ARTICLE HERO — Guide layout ===== */
.article-hero-guide {
  padding-top: 140px;
  padding-bottom: 64px;
}

/* ===== BREADCRUMB (from shared.css) ===== */
.blog-post-page .breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 20px;
  transition: color var(--duration-fast) var(--ease-premium);
}
.blog-post-page .breadcrumb:hover {
  color: var(--primary);
}
.breadcrumb-trail {
  margin-left: -4px;
  cursor: default;
  color: var(--text-secondary) !important;
}

/* ===== CATEGORY PILL ===== */
.category-pill {
  display: inline-block;
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: var(--radius-pill);
  margin-bottom: 20px;
}
.pill-teal { background: rgba(13, 148, 136, 0.08); color: #0d9488; }
.pill-blue { background: rgba(37, 99, 235, 0.1); color: #2563eb; }
.pill-purple { background: rgba(147, 51, 234, 0.1); color: #9333ea; }
.pill-green { background: rgba(22, 163, 74, 0.08); color: #16a34a; }
.pill-orange { background: rgba(234, 88, 12, 0.08); color: #ea580c; }
.pill-violet { background: rgba(124, 58, 237, 0.08); color: #7c3aed; }
.pill-amber { background: rgba(217, 119, 6, 0.08); color: #d97706; }
.pill-rose { background: rgba(225, 29, 72, 0.08); color: #e11d48; }
.pill-default { background: rgba(37, 99, 235, 0.1); color: #2563eb; }

/* ===== ARTICLE TITLE — Simple layout ===== */
.article-title {
  font-size: 40px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--on-surface);
  margin-bottom: 20px;
}

/* ===== ARTICLE TITLE — Guide layout ===== */
.article-title-guide {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--on-surface);
  margin-top: 12px;
  margin-bottom: 20px;
}

/* ===== ARTICLE DESCRIPTION (guide layout) ===== */
.article-description {
  font-size: 20px;
  line-height: 1.6;
  color: var(--on-surface-variant);
  margin-bottom: 0;
}

/* ===== ARTICLE META — Simple layout ===== */
.blog-post-page .article-meta {
  font-size: 15px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
}
.meta-sep {
  color: var(--outline-variant);
}

/* ===== ARTICLE META — Guide layout ===== */
.article-meta-guide {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  font-size: 14px;
  color: var(--text-secondary);
  flex-wrap: wrap;
}
.meta-divider {
  width: 4px;
  height: 4px;
  background: var(--text-tertiary);
  border-radius: 50%;
  display: inline-block;
  font-size: 0;
  vertical-align: middle;
}
.meta-reading-time {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* ===== COVER IMAGE ===== */
.article-cover-img {
  width: 100%;
  border-radius: 16px;
  margin-bottom: 40px;
}

/* ===== ARTICLE LAYOUT — Guide (TOC sidebar + content) ===== */
.article-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 64px;
  align-items: start;
}

/* ===== TABLE OF CONTENTS SIDEBAR ===== */
.toc-sidebar {
  position: sticky;
  top: 100px;
  background: var(--surface);
  border-radius: var(--radius-card);
  padding: 28px 24px;
}
.toc-heading {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-tertiary);
  margin-bottom: 16px;
}
.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  counter-reset: toc-counter;
}
.toc-list li {
  counter-increment: toc-counter;
  margin-bottom: 8px;
}
.toc-list li a {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--on-surface-variant);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-premium);
  line-height: 1.45;
}
.toc-list li a::before {
  content: counter(toc-counter) ".";
  font-size: 12px;
  font-weight: 600;
  color: var(--text-tertiary);
  min-width: 20px;
}
.toc-list li a:hover {
  color: var(--primary);
}

/* ===== ARTICLE BODY — Simple layout ===== */
.article-body-simple {
  padding-bottom: 80px;
}

/* ===== ARTICLE CONTENT TYPOGRAPHY ===== */
/* Applied to both layouts via Nuxt Content's rendered output */
.article-body-simple p,
.article-content-guide p {
  font-size: 18px;
  line-height: 1.7;
  color: var(--on-surface-variant);
  margin-bottom: 24px;
}

.article-body-simple h2,
.article-content-guide h2 {
  font-size: 28px;
  font-weight: 700;
  color: var(--on-surface);
  margin-top: 48px;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
  line-height: 1.3;
  scroll-margin-top: 100px;
}

/* Guide layout h2 is slightly larger */
.article-content-guide h2 {
  font-size: 32px;
  margin-top: 64px;
  margin-bottom: 20px;
  line-height: 1.25;
}

.article-body-simple h3,
.article-content-guide h3 {
  font-size: 22px;
  font-weight: 700;
  color: var(--on-surface);
  margin-top: 36px;
  margin-bottom: 12px;
  line-height: 1.35;
}

.article-body-simple ul,
.article-body-simple ol,
.article-content-guide ul,
.article-content-guide ol {
  margin-bottom: 24px;
  padding-left: 24px;
}

.article-body-simple li,
.article-content-guide li {
  font-size: 18px;
  line-height: 1.7;
  color: var(--on-surface-variant);
  margin-bottom: 8px;
}

.article-body-simple strong,
.article-content-guide strong {
  color: var(--on-surface);
  font-weight: 600;
}

.article-body-simple a,
.article-content-guide a {
  color: var(--brand-blue);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.article-body-simple a:hover,
.article-content-guide a:hover {
  color: var(--primary);
}

/* ===== CODE BLOCKS ===== */
.article-body-simple pre,
.article-content-guide pre {
  background: var(--on-surface);
  color: #e2e8f0;
  border-radius: 12px;
  padding: 24px 28px;
  overflow-x: auto;
  margin-bottom: 24px;
  font-size: 15px;
  line-height: 1.6;
}

.article-body-simple code,
.article-content-guide code {
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace;
}

.article-body-simple p code,
.article-body-simple li code,
.article-content-guide p code,
.article-content-guide li code {
  background: var(--surface-container);
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 15px;
  color: var(--on-surface);
}

/* Override pre > code to not double-style */
.article-body-simple pre code,
.article-content-guide pre code {
  background: transparent;
  padding: 0;
  border-radius: 0;
  font-size: inherit;
  color: inherit;
}

/* ===== BLOCKQUOTES ===== */
.article-body-simple blockquote,
.article-content-guide blockquote {
  border-left: 4px solid var(--brand-blue);
  padding: 20px 24px;
  margin: 32px 0;
  background: rgba(66, 133, 244, 0.04);
  border-radius: 0 12px 12px 0;
}
.article-body-simple blockquote p,
.article-content-guide blockquote p {
  margin-bottom: 0;
  font-style: italic;
  color: var(--on-surface);
  font-weight: 500;
}

/* ===== TABLES ===== */
.article-body-simple table,
.article-content-guide table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 24px 0 32px;
  border-radius: var(--radius-card);
  overflow: hidden;
  border: 1px solid rgba(194, 198, 213, 0.2);
}

.article-body-simple table th,
.article-content-guide table th {
  padding: 14px 20px;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  color: var(--on-surface);
  background: var(--surface);
  border-bottom: 2px solid rgba(194, 198, 213, 0.2);
  white-space: nowrap;
}

.article-body-simple table td,
.article-content-guide table td {
  padding: 14px 20px;
  color: var(--on-surface-variant);
  border-bottom: 1px solid rgba(194, 198, 213, 0.1);
  line-height: 1.5;
  font-size: 15px;
}

.article-body-simple table tbody tr:nth-child(even),
.article-content-guide table tbody tr:nth-child(even) {
  background: var(--surface);
}

.article-body-simple table tbody tr:last-child td,
.article-content-guide table tbody tr:last-child td {
  border-bottom: none;
}

/* ===== IMAGES IN CONTENT ===== */
.article-body-simple img,
.article-content-guide img {
  width: 100%;
  border-radius: 16px;
  margin: 16px 0;
  height: auto;
}

/* ===== HORIZONTAL RULES ===== */
.article-body-simple hr,
.article-content-guide hr {
  border: none;
  border-top: 1px solid rgba(194, 198, 213, 0.2);
  margin: 48px 0;
}

/* ===== EMAIL SIGNUP (within article) ===== */
.email-signup-redesign {
  margin-top: 64px;
  margin-bottom: 0;
}

/* Override the BlogEmailSignup component styles to match redesign */
.email-signup-redesign .blog-signup {
  background: var(--surface);
  border-radius: var(--radius-card);
  padding: 56px 40px;
  text-align: center;
  margin: 0;
}

.email-signup-redesign .blog-signup__heading {
  font-size: 24px;
  font-weight: 700;
  color: var(--on-surface);
}

.email-signup-redesign .blog-signup__input-group {
  max-width: 480px;
  margin: 0 auto;
}

.email-signup-redesign .blog-signup__input {
  padding: 14px 20px;
  font-size: 16px;
  border: 1px solid var(--outline-variant);
  border-radius: var(--radius-pill);
  background: var(--surface-container-lowest);
}

.email-signup-redesign .blog-signup__input:focus {
  border-color: var(--brand-blue);
  box-shadow: none;
}

.email-signup-redesign .blog-signup__button {
  padding: 14px 28px;
  border-radius: var(--radius-pill);
}

/* ===== CTA SECTION — Simple layout ===== */
.cta-section-redesign {
  background: var(--surface);
  padding: 80px 0;
}
.cta-inner-redesign {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}
.cta-inner-redesign h2 {
  font-size: 32px;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 16px;
}
.cta-inner-redesign p {
  font-size: 18px;
  color: var(--on-surface-variant);
  margin-bottom: 32px;
  line-height: 1.6;
}

/* ===== CTA — Guide layout ===== */
.guide-cta {
  text-align: center;
  margin-top: 64px;
  padding: 64px 0;
  border-top: 1px solid rgba(194, 198, 213, 0.15);
}
.guide-cta .cta-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 16px;
}
.guide-cta .cta-description {
  font-size: 18px;
  color: var(--on-surface-variant);
  margin-bottom: 32px;
  line-height: 1.6;
}

/* ===== RELATED POSTS ===== */
.related-section-redesign {
  padding: 80px 0;
  border-top: 1px solid rgba(194, 198, 213, 0.15);
}
.related-inner {
  max-width: 800px;
  margin: 0 auto;
}
.related-heading-redesign {
  font-size: 24px;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 24px;
}
.related-grid-redesign {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.related-card-redesign {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  border-radius: var(--radius-card);
  overflow: hidden;
  border: 1px solid rgba(194, 198, 213, 0.2);
  transition: box-shadow var(--duration-normal) var(--ease-premium);
}
.related-card-redesign:hover {
  box-shadow: var(--shadow-hover);
}
.related-card-redesign__img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.related-card-redesign__body {
  padding: 20px;
}
.related-card-redesign__topic {
  font-size: 12px;
  font-weight: 700;
  color: var(--brand-blue);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.related-card-redesign__title {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--on-surface);
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.related-card-redesign__meta {
  font-size: 13px;
  color: var(--text-tertiary);
}

/* ===== RESPONSIVE — Tablet (1024px) ===== */
@media (max-width: 1024px) {
  .article-layout {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .toc-sidebar {
    position: static;
    margin-bottom: 32px;
  }
  .article-title-guide {
    font-size: 40px;
  }
}

/* ===== RESPONSIVE — Mobile (640px) ===== */
@media (max-width: 640px) {
  .article-container {
    padding: 0 20px;
  }
  .article-hero-simple {
    padding-top: 100px;
  }
  .article-hero-guide {
    padding-top: 100px;
    padding-bottom: 40px;
  }
  .article-title {
    font-size: 28px;
  }
  .article-title-guide {
    font-size: 28px;
  }
  .article-content-guide h2 {
    font-size: 26px;
    margin-top: 48px;
  }
  .email-signup-redesign .blog-signup {
    padding: 40px 24px;
  }
  .email-signup-redesign .blog-signup__input-group {
    flex-direction: column;
  }
  .email-signup-redesign .blog-signup__input {
    width: 100%;
  }
  .cta-section-redesign {
    padding: 60px 0;
  }
  .cta-inner-redesign h2,
  .guide-cta .cta-title {
    font-size: 26px;
  }
  .related-grid-redesign {
    grid-template-columns: 1fr;
  }
  .article-body-simple table th,
  .article-body-simple table td,
  .article-content-guide table th,
  .article-content-guide table td {
    padding: 10px 12px;
    font-size: 13px;
  }
}
</style>
