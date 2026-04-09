<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="container-redesign">
        <div style="max-width: 720px;">
          <div class="hero-eyebrow"><span>Our Blog</span></div>
          <h1 class="text-display-lg" style="margin-bottom: 20px;">Our Blog</h1>
          <p class="text-body-lg">Practical engineering insights, product thinking, and lessons from building real products.</p>

          <!-- CATEGORY FILTERS -->
          <div class="category-filters">
            <button
              v-for="cat in allCategories"
              :key="cat"
              class="filter-btn"
              :class="{ active: selectedCategory === cat }"
              @click="selectedCategory = cat"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== BLOG GRID ===== -->
    <section style="padding-top: 0;">
      <div class="container-redesign">
        <div class="blog-grid">
          <NuxtLink
            v-for="article in filteredArticles"
            :key="article._path"
            :to="article._path"
            class="blog-card"
          >
            <div class="blog-card-image">
              <img
                v-if="article.coverImg"
                :src="article.coverImg"
                :alt="article.coverImgAlt || article.title"
              />
              <span v-else>{{ article.title }}</span>
            </div>
            <div class="blog-card-body">
              <span
                class="blog-card-category"
                :class="categoryClass(article.topic || article.category)"
              >{{ article.topic || article.category || 'General' }}</span>
              <h2 class="blog-card-title">{{ article.title }}</h2>
              <div class="blog-card-meta">
                <span>{{ article.author || 'AcornGlobus' }}</span>
                <span class="sep">&middot;</span>
                <span>{{ formatDate(article.createdAt) }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===== EMAIL SIGNUP ===== -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="email-signup">
          <h3>Get practical engineering insights. No spam. Monthly.</h3>
          <form class="email-form" @submit.prevent="handleSubscribe">
            <input
              v-model="email"
              type="email"
              placeholder="you@company.com"
              required
              :disabled="subscribeLoading"
            />
            <button type="submit" class="btn btn-primary" :disabled="subscribeLoading">
              {{ subscribeLoading ? 'Subscribing...' : 'Subscribe' }}
            </button>
          </form>
          <p v-if="subscribeSuccess" class="email-signup-success">You're in. We'll send you something worth reading.</p>
          <p v-if="subscribeError" class="email-signup-error">{{ subscribeError }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const selectedCategory = ref('All');
const email = ref('');
const subscribeLoading = ref(false);
const subscribeSuccess = ref(false);
const subscribeError = ref('');

let { data: articles } = await useAsyncData('articles-list', () =>
  queryContent('blog').sort({ createdAt: -1 }).find()
);

const articlesList = computed(() => {
  if (!articles.value) return [];
  return articles.value.map((article) => ({
    ...article,
    slug: article._path.replace('/blog/', ''),
    category: article.category || article.topic || 'General',
  }));
});

const allCategories = computed(() => {
  const cats = new Set(articlesList.value.map((a) => a.topic || a.category || 'General'));
  return ['All', ...Array.from(cats).sort()];
});

const filteredArticles = computed(() => {
  if (selectedCategory.value === 'All') {
    return articlesList.value;
  }
  return articlesList.value.filter(
    (a) => (a.topic || a.category) === selectedCategory.value
  );
});

const categoryClass = (category) => {
  if (!category) return '';
  const slug = category.toLowerCase().replace(/\s+/g, '-');
  return `cat-${slug}`;
};

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en', options);
};

const handleSubscribe = async () => {
  subscribeError.value = '';
  subscribeSuccess.value = false;

  if (!email.value || !email.value.includes('@')) {
    subscribeError.value = 'Please enter a valid email address.';
    return;
  }

  subscribeLoading.value = true;

  try {
    const signups = JSON.parse(localStorage.getItem('ag_blog_signups') || '[]');
    signups.push({
      email: email.value,
      source: 'blog',
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('ag_blog_signups', JSON.stringify(signups));
    subscribeSuccess.value = true;
    email.value = '';
  } catch (err) {
    subscribeError.value = 'Something went wrong. Please try again.';
  } finally {
    subscribeLoading.value = false;
  }
};

useSeoMeta({
  title: 'Blog | Engineering Insights & Product Thinking | AcornGlobus',
  description: 'Practical engineering insights, product thinking, and lessons from building real products — from the AcornGlobus team.',
  keywords: 'software development blog, product engineering, tech articles, AcornGlobus blog',
  author: 'AcornGlobus',
  robots: 'index, follow',
  ogTitle: 'Blog | Engineering Insights & Product Thinking | AcornGlobus',
  ogDescription: 'Practical engineering insights, product thinking, and lessons from building real products.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/blog',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Blog | AcornGlobus',
  twitterDescription: 'Articles on technology, product engineering, and building software partnerships.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
});

useHead({
  link: [{ rel: 'canonical', href: 'https://acornglobus.com/blog' }],
});

useBreadcrumbSchema([
  { name: 'Blog', path: '/blog' },
]);
</script>

<style scoped>
/* Category filter pills */
.category-filters {
  display: flex;
  gap: 8px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 24px;
  font-size: 15px;
  font-weight: 600;
  font-family: inherit;
  border: none;
  border-radius: var(--radius-pill);
  cursor: pointer;
  background: var(--surface-container-high);
  color: var(--on-surface-variant);
  transition: all var(--duration-normal) var(--ease-premium);
}

.filter-btn.active {
  background: linear-gradient(135deg, var(--primary), var(--primary-container));
  color: white;
  box-shadow: 0 4px 16px rgba(0, 88, 189, 0.25);
}

.filter-btn:hover:not(.active) {
  background: var(--surface-container);
  color: var(--on-surface);
}

/* Blog grid */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 56px;
}

/* Blog card */
.blog-card {
  background: var(--surface-container-lowest);
  border-radius: var(--radius-card);
  overflow: hidden;
  transition: all var(--duration-normal) var(--ease-premium);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

.blog-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
}

.blog-card-image {
  aspect-ratio: 16 / 9;
  background: var(--surface-container-low);
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
}

.blog-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-card-image span {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-align: center;
  line-height: 1.4;
  padding: 24px;
}

.blog-card-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.blog-card-category {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 12px;
  display: inline-block;
}

/* Category colors */
.cat-tech { color: #7c3aed; }
.cat-code-quality { color: #0891b2; }
.cat-product-engineering { color: var(--primary); }
.cat-hiring { color: #c2410c; }
.cat-hiring-and-team-building { color: #c2410c; }
.cat-hiring-developers { color: #b45309; }
.cat-business { color: var(--success); }
.cat-mvp-development { color: #2563eb; }
.cat-resource-augmentation { color: #9333ea; }
.cat-thought-leadership { color: #0d9488; }
.cat-general { color: var(--on-surface-variant); }

.blog-card-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.35;
  color: var(--on-surface);
  margin-bottom: 16px;
  flex: 1;
}

.blog-card:hover .blog-card-title {
  color: var(--primary);
}

.blog-card-meta {
  font-size: 14px;
  color: var(--text-tertiary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.blog-card-meta .sep {
  color: var(--outline-variant);
}

/* Email signup */
.email-signup {
  background: var(--surface);
  border-radius: var(--radius-card);
  padding: 56px 40px;
  text-align: center;
}

.email-signup h3 {
  font-size: 24px;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 24px;
}

.email-form {
  display: flex;
  gap: 12px;
  max-width: 480px;
  margin: 0 auto;
  align-items: stretch;
}

.email-form input {
  flex: 1;
  padding: 14px 20px;
  font-size: 16px;
  font-family: inherit;
  border: 1px solid var(--outline-variant);
  border-radius: var(--radius-pill);
  background: var(--surface-container-lowest);
  color: var(--on-surface);
  outline: none;
  transition: border-color var(--duration-fast) var(--ease-premium);
}

.email-form input::placeholder {
  color: var(--text-tertiary);
}

.email-form input:focus {
  border-color: var(--brand-blue);
}

.email-signup-success {
  margin-top: 16px;
  font-size: 15px;
  font-weight: 500;
  color: var(--success);
}

.email-signup-error {
  margin-top: 16px;
  font-size: 14px;
  color: #dc2626;
}

/* Responsive -- Tablet */
@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .category-filters {
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 8px;
    -webkit-overflow-scrolling: touch;
  }

  .filter-btn {
    flex-shrink: 0;
  }
}

/* Responsive -- Mobile */
@media (max-width: 640px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .email-signup {
    padding: 40px 24px;
  }

  .email-form {
    flex-direction: column;
  }

  .email-form input {
    width: 100%;
  }
}
</style>
