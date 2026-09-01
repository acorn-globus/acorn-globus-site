import { defineSitemapEventHandler } from '#imports'
import { serverQueryContent } from '#content/server'

// Netlify canonicalizes URLs to trailing-slash form (301 redirects no-slash → /).
// Emit trailing-slash URLs directly so Google's crawler lands on 200s instead
// of chasing redirects through the sitemap.
const withSlash = (path: string): string =>
  path === '/' || path.endsWith('/') ? path : `${path}/`

// Real per-page last-commit dates, generated from git history before build by
// scripts/generate-lastmod.mjs. See that file for why: a build-time `new Date()`
// told Google every page changed on every deploy, and Google ignores <lastmod>
// from sites that are inaccurate about it. Falls back to build time when a route
// has no entry, which is the old behaviour and can never break a deploy.
import lastmodMap from '~~/server/utils/lastmod.json'

export default defineSitemapEventHandler(async (event) => {
  // Fallback only. Each static URL prefers its real git commit date (below).
  const buildTime = new Date().toISOString()

  const staticPaths = [
    // Homepage
    { loc: '/', changefreq: 'weekly', priority: 1.0 },

    // Main pages
    { loc: '/about', changefreq: 'monthly', priority: 0.9 },
    { loc: '/how-we-work', changefreq: 'monthly', priority: 0.8 },
    { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
    { loc: '/portfolio', changefreq: 'monthly', priority: 0.7 },
    { loc: '/designs', changefreq: 'monthly', priority: 0.6 },

    // Services
    { loc: '/services', changefreq: 'monthly', priority: 0.9 },
    { loc: '/services/resource-augmentation', changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/mvp-development', changefreq: 'monthly', priority: 0.8 },
    { loc: '/mvp-development-for-startups', changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/full-project-delivery', changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/dedicated-development-team', changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/maintenance-support', changefreq: 'monthly', priority: 0.8 },

    // AI service lines
    { loc: '/services/ai-development', changefreq: 'monthly', priority: 0.9 },
    { loc: '/services/ai-agent-development', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-ai-developers', changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/ai-app-rescue', changefreq: 'monthly', priority: 0.8 },

    // Case studies
    { loc: '/case-studies/eitoss', changefreq: 'monthly', priority: 0.7 },
    { loc: '/case-studies/formester', changefreq: 'monthly', priority: 0.7 },
    { loc: '/case-studies/invoice-falcon', changefreq: 'monthly', priority: 0.7 },
    { loc: '/case-studies/performline', changefreq: 'monthly', priority: 0.7 },
    { loc: '/case-studies/rumie', changefreq: 'monthly', priority: 0.7 },

    // Hire developer pages
    { loc: '/hire-full-stack-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-mobile-app-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-react-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-angular-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-vuejs-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-nuxt-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-nodejs-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-rails-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-python-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-django-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-react-native-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-flutter-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-dotnet-developer', changefreq: 'monthly', priority: 0.8 },

    // Offshore / buyer-intent landing pages
    { loc: '/offshore-software-development-india', changefreq: 'monthly', priority: 0.8 },

    // Guides (pillar pages)
    { loc: '/guides/it-staff-augmentation', changefreq: 'monthly', priority: 0.9 },
    { loc: '/guides/mvp-development', changefreq: 'monthly', priority: 0.9 },

    // Blog index
    { loc: '/blog', changefreq: 'weekly', priority: 0.7 },

    // Legal
    { loc: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  ]

  const staticUrls = staticPaths.map((p) => ({
    ...p,
    loc: withSlash(p.loc),
    lastmod: (lastmodMap as Record<string, string>)[p.loc] || buildTime,
  }))

  // Dynamic blog post URLs from Nuxt Content. Prefer `updatedAt` over
  // `createdAt` so content refreshes surface in the sitemap — otherwise
  // rewriting a post would never tell Google to re-crawl.
  const blogPosts = await serverQueryContent(event, 'blog').find()
  const blogUrls = blogPosts
    // Skip noindexed/unpublished posts — don't advertise pages we've told Google to ignore.
    .filter((post) => !String(post.robots || '').includes('noindex') && post.published !== false)
    .map((post) => {
    const modDate = post.updatedAt || post.createdAt
    return {
      loc: withSlash(post._path),
      changefreq: 'monthly' as const,
      priority: 0.6,
      ...(modDate ? { lastmod: new Date(modDate).toISOString() } : {}),
    }
  })

  return [...staticUrls, ...blogUrls]
})
