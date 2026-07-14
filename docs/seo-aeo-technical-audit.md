# Technical SEO + AEO Audit — acornglobus.com

**Scope:** Codebase-only technical baseline (Nuxt 4, static-generated, deployed on Netlify). No site code was changed.
**Date:** 2026-07-14 · **Author:** Engineering Lead
**Method:** Read of `nuxt.config.ts`, `layouts/default.vue`, all `pages/*`, `components/*`, `composables/useSeoSchema.ts`, `utils/getSiteMeta.js`, `plugins/*`, `server/api/__sitemap__/urls.ts`, `public/robots.txt`, `public/_redirects`, blog content frontmatter.

---

## 1. Executive Summary

The site is in **strong technical-SEO shape** and unusually well set up for AEO relative to typical agency sites. SEO is centralized and disciplined: every one of the ~40 routes calls `useSeoMeta` with a unique, human-written title and description, a self-referencing canonical, full Open Graph + Twitter card tags, and a `BreadcrumbList`. A shared `composables/useSeoSchema.ts` provides typed JSON-LD helpers (Organization, Service, BlogPosting, Article, FAQPage, BreadcrumbList), and `Organization` is injected site-wide from the layout. Rendering is static (`nuxt generate`), the sitemap is dynamically generated with per-deploy `lastmod` and pulls blog URLs from Nuxt Content, and trailing-slash canonicalization is consistent across `site` config, sitemap, canonicals, and `_redirects` — so crawlers land on 200s, not redirect chains. Blog frontmatter is genuinely AEO-friendly (answer-first descriptions, keyword arrays, alt text, publish/update dates, per-post FAQ support).

The gaps are a short, high-value list rather than a rebuild: **no `lang="en"` on `<html>`** (accessibility + SEO signal, one-line fix), **no FAQ blocks/schema on the four commercial service pages** (the money pages, and the biggest AEO miss), **no `WebSite`/`Review`/`aggregateRating` schema** despite abundant on-page testimonials, and **image-level CWV hygiene gaps** (most `<img>` lack `width`/`height`, ~60% lack `loading="lazy"`, and there's no responsive-image pipeline).

**Overall grade: B+ / strong.** The foundation is done right; the remaining work is targeted enrichment, not remediation.

### At-a-Glance Scorecard

| Dimension | Status | One-line verdict |
|---|---|---|
| Titles & meta descriptions | **Good** | Unique, hand-written, per-page via `useSeoMeta`; blog uses `metaTitle`/`metaDescription` frontmatter |
| Canonical URLs | **Good** | Self-referencing canonical on every page; trailing-slash form consistent |
| Open Graph / Twitter cards | **Good** | Full OG+Twitter set per page; only gap is a shared logo OG image on non-blog pages |
| lang / hreflang | **Gap** | No `lang="en"` on `<html>`; single-locale so hreflang not required |
| Structured data / JSON-LD (AEO-critical) | **Good** | Org (site-wide), Service, FAQPage, Breadcrumb, Article, BlogPosting present. Missing: WebSite, Review/aggregateRating, FAQ on service pages |
| Sitemap & robots.txt | **Good** | Dynamic sitemap, per-deploy lastmod, blog auto-included, trailing-slash; robots clean, admin blocked |
| Heading hierarchy / semantic HTML | **Good** | Exactly one `<h1>` per page; `<main>`/`<nav>`/`<footer>` landmarks present |
| AEO-readiness (quotability) | **Good** | Answer-first content, question-style headings, FAQ blocks on hire/guide/blog pages; service pages the exception |
| Performance / CWV signals | **Gap** | Missing image dimensions (CLS risk), partial lazy-loading, no responsive images, full Inter weight range |
| Crawlability | **Good** | Static prerender, no noindex leaks, admin noindexed, legacy 301s in place; only miss is no custom 404 |

---

## 2. Findings (with file references)

### 2.1 Titles & Meta Descriptions — Good
- Every page sets a unique `title` and `description` via `useSeoMeta`. Examples: `pages/index.vue:319`, `pages/services/mvp-development.vue:259`, `pages/hire-react-developer.vue:312`.
- Titles follow a consistent, intent-matched pattern (e.g. `"MVP Development | Ship a Real Product in 6-12 Weeks | AcornGlobus"`). Descriptions are benefit-led and within length.
- Blog posts derive meta from frontmatter with sensible fallbacks: `metaTitle || title`, `metaDescription || description || title`, and append `| AcornGlobus Blog` (`pages/blog/[slug].vue:225-246`).
- **Dead code:** `utils/getSiteMeta.js` is not imported anywhere (grep returns no references). It also contains a bug (`og:site_name`, `og:title` etc. declared with `name:` instead of `property:`), but since it is unused it has no live impact. Recommend deletion to avoid future confusion.

### 2.2 Canonical URLs — Good
- Self-referencing canonical on every page via `useHead` (e.g. `pages/index.vue:391`, `pages/blog/[slug].vue:274-281`, all service/hire/case-study/guide pages).
- All canonicals use the **trailing-slash absolute form** (`https://acornglobus.com/.../`), matching Netlify's canonicalization, the sitemap, and `_redirects`. No mixed-form ambiguity.

### 2.3 Open Graph / Twitter Cards — Good (minor gap)
- Full per-page set: `ogTitle`, `ogDescription`, `ogImage`, `ogUrl`, `ogType`, `twitterCard: summary_large_image`, `twitterTitle/Description/Image` (e.g. `pages/index.vue:325-336`). Blog sets `ogType: article` (`pages/blog/[slug].vue:241`).
- Global defaults (`og:site_name`, `twitter:site`, `twitter:creator`) in `nuxt.config.ts:17-21`.
- **Gap:** All non-blog pages share the same OG image — the org logo `https://acornglobus.com/acorn-globus.png`. Blog posts correctly use per-post `coverImg`. Service/hire/case-study pages would earn higher social + SERP CTR with page-specific OG images.
- **Minor duplication:** `twitter:site` is set both globally (`nuxt.config.ts:19`) and per-page; harmless (identical values) but redundant.

### 2.4 lang / hreflang — Gap
- **No `lang` attribute on `<html>`.** `nuxt.config.ts` sets `app.head` but never `app.head.htmlAttrs.lang`, and no layout/page sets it. Nuxt does not add one by default, so the served `<html>` has no language declaration — an accessibility (WCAG) and minor SEO signal miss. **One-line fix.**
- No `hreflang`. The site is single-locale (English), so hreflang is genuinely not needed — not a gap.

### 2.5 Structured Data / JSON-LD (AEO-critical) — Good, with targeted gaps
Implemented in `composables/useSeoSchema.ts` and wired across pages:
- **Organization** — site-wide from `layouts/default.vue:14`. Includes logo, foundingDate, employee count, `sameAs` (LinkedIn/GitHub/Clutch), and a sales `contactPoint`. Strong entity definition.
- **BreadcrumbList** — every page (auto-prepends Home).
- **Service** — all 4 service pages + all 8 hire-developer pages, with `provider`, `areaServed` (US/UK/AU/IN), and an `Offer`.
- **FAQPage** — hire pages, guides, `how-we-work`, `contact`, and blog posts that declare a `faq:` frontmatter array (`pages/blog/[slug].vue:264-271`).
- **Article** — case studies + guide pillar pages. **BlogPosting** — blog posts, with author Person/Organization logic and publisher.

**Gaps:**
- **No FAQPage on the four service pages** (`pages/services/*`) or `services/index.vue` — confirmed absent. These are the primary commercial/conversion pages and the strongest AEO opportunity.
- **No `WebSite` schema** (with `potentialAction`/`SearchAction`) — a standard site-level entity that helps search engines and answer engines understand the site.
- **No `Review` / `aggregateRating` schema** despite numerous named client testimonials on the homepage, case studies, and hire pages (e.g. `pages/index.vue:398+`). This is unused rich-result and AEO credibility signal.

### 2.6 Sitemap & robots.txt — Good
- `@nuxtjs/sitemap` with a custom source `server/api/__sitemap__/urls.ts`. Static routes enumerated with sensible `priority`/`changefreq`; blog URLs pulled dynamically from Nuxt Content using `updatedAt || createdAt` for `lastmod`.
- Per-deploy `lastmod` (`new Date().toISOString()`) gives Google an honest "bytes changed at deploy" signal.
- `excludeAppSources: true` prevents auto-discovery duplicates. Trailing-slash enforced via `withSlash()`.
- `robots.txt`: allows all, references `sitemap.xml`, blocks `/admin/`, `/_nuxt/`, `/.nuxt/`. **Minor:** `Crawl-delay: 1` is ignored by Googlebot (harmless); consider removing.
- **AEO decision point (not a defect):** robots has no rules for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended). Currently they are allowed by the wildcard. For an AEO strategy this is the *desired* posture — flagged only so it's a conscious choice.

### 2.7 Heading Hierarchy / Semantic HTML — Good
- **Exactly one `<h1>` per page** across all 43 page files (verified by count). No duplicate/zero-h1 issues.
- Landmarks present: `layouts/default.vue` wraps content in `<main>`; `components/V3Header.vue` uses `<nav>`; `components/V3Footer.vue` uses `<footer>`. Header does not emit a competing `<h1>`.

### 2.8 AEO-Readiness (quotability by answer engines) — Good
- **Answer-first content:** blog frontmatter descriptions are written as direct answers (e.g. `mvp-development-cost.md`: "MVP development costs $15,000 to $200,000+ in 2026…"). Question-style titles ("How Much Does MVP Development Cost in 2026?").
- **Visible FAQ blocks** (not schema-only) render on hire pages, guides, `how-we-work`, and `contact` — so the answers exist as extractable on-page text, which is what answer engines quote.
- **Entity clarity:** strong Organization schema + consistent `sameAs` profiles anchor the brand entity.
- **Rich frontmatter:** keyword arrays, `coverImgAlt`, `readingTime`, `createdAt`/`updatedAt`, `author`/`authorProfile` per post.
- **Gap:** the commercial **service pages lack FAQ blocks and any question/answer structure** — the exact pages you'd most want quoted for "who builds MVPs / staff augmentation" style queries.

### 2.9 Performance / CWV Signals (from code) — Gap
Good signals:
- Static generation (`nuxt generate`) → fast TTFB from CDN.
- `vite.build.target: 'esnext'` and matching Nitro target avoid legacy polyfills.
- Google Fonts moved out of CSS `@import` to `<link>` with `preconnect` + `display=swap` (`nuxt.config.ts:6-16`).
- Hero image preloaded (`pages/index.vue:392`). Images are already `.webp`. Third-party scripts (GTM, Clarity, Crisp) are client-only plugins with `preconnect` hints.

Gaps:
- **Image dimensions missing → CLS risk.** Only 18 of 58 `<img>` tags carry `width`/`height` (or aspect-ratio) attributes. The rest can shift layout as they load.
- **Partial lazy-loading.** Only 22 of 58 `<img>` use `loading="lazy"`; ~36 eager-load, including below-the-fold imagery.
- **No responsive-image pipeline.** `@nuxt/image` is not installed; images are served at a single size with no `srcset`/`sizes` and no AVIF. Large mockups/case-study images ship full-size to mobile.
- **Font weight range:** the Inter stylesheet requests weights `100;200;300;400;500;600;700;800;900` (`nuxt.config.ts:10`) — more variants than a site realistically uses; trimming reduces font payload.
- **Heavy dependencies in `package.json`** — `fabric` (canvas), `lit`, `papaparse` — show **no imports** in `pages/`, `components/`, or `plugins/`. If truly unused they are dead dependencies (tree-shaken from the client bundle, but worth removing for hygiene); confirm before deleting.

### 2.10 Crawlability — Good
- Static prerender of all routes; no `ssr: false` (no client-only blank-HTML pages).
- **No noindex leaks:** every content page sets `robots: 'index, follow'` or leaves it default-indexable; the only `noindex` is the Decap CMS admin (`public/admin/index.html:6`), which is correct.
- **Trailing-slash discipline** consistent across `site.trailingSlash`, sitemap, canonicals, and `_redirects` — one hop or fewer to a 200.
- **Legacy 301s** consolidate old URLs and fix one blog cannibalization case (`public/_redirects`).
- **Gap:** no custom `error.vue` / 404 page — a broken/legacy link renders the default Nuxt error screen. Minor UX/crawl-experience miss.

---

## 3. Prioritized Fix List

### High priority
1. **Add FAQ blocks + `useFaqSchema` to the 4 service pages and `services/index`.** Biggest AEO lever on the highest-intent commercial pages. — *Project (content + code)*
2. **Add `lang="en"` to `<html>`** via `app.head.htmlAttrs.lang` in `nuxt.config.ts`. Accessibility + SEO. — *Quick win*
3. **Add `Review`/`aggregateRating` schema** built from the existing on-page testimonials (attach to Organization or relevant Service). Unlocks star rich results + AEO trust signal. — *Project (small)*

### Medium priority
4. **Add `WebSite` JSON-LD** (with `SearchAction` if/when site search exists) as a site-wide entity in the layout alongside Organization. — *Quick win*
5. **Add `width`/`height` (or CSS aspect-ratio) to all `<img>`** to eliminate CLS. — *Project (mechanical, repo-wide)*
6. **Complete `loading="lazy"`** on all below-the-fold images (36 currently eager). — *Quick win*
7. **Install `@nuxt/image`** for responsive `srcset`/`sizes` + AVIF, starting with heavy case-study/mockup images. — *Project*
8. **Add per-page OG images** for service, hire, and case-study pages (replace the shared logo). — *Project (design + code)*

### Low priority
9. **Add a custom `error.vue`** (branded 404 with links back into the site). — *Quick win*
10. **Delete dead `utils/getSiteMeta.js`** (unused, contains a latent `name` vs `property` bug). — *Quick win*
11. **Trim the Inter font weight range** to weights actually used. — *Quick win*
12. **Remove `Crawl-delay` from robots.txt** (ignored by Google) and **make the AI-crawler policy explicit** in robots (currently allow-all by default — fine for AEO, just make it deliberate). — *Quick win*
13. **Audit/remove unused heavy deps** (`fabric`, `lit`, `papaparse`) after confirming no dynamic usage. — *Quick win*

---

## Appendix — Key files
- `nuxt.config.ts` — head, fonts, sitemap, site URL/trailing-slash, build targets
- `composables/useSeoSchema.ts` — all JSON-LD helpers
- `layouts/default.vue` — site-wide Organization schema + landmarks
- `server/api/__sitemap__/urls.ts` — dynamic sitemap source
- `public/robots.txt`, `public/_redirects` — crawl directives + legacy 301s
- `pages/blog/[slug].vue` — dynamic blog SEO + BlogPosting/FAQ schema
- `utils/getSiteMeta.js` — dead code (delete)
