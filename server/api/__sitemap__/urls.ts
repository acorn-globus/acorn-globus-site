import { defineSitemapEventHandler } from '#imports'
import { serverQueryContent } from '#content/server'

// Netlify canonicalizes URLs to trailing-slash form (301 redirects no-slash → /).
// Emit trailing-slash URLs directly so Google's crawler lands on 200s instead
// of chasing redirects through the sitemap.
const withSlash = (path: string): string =>
  path === '/' || path.endsWith('/') ? path : `${path}/`

export default defineSitemapEventHandler(async (event) => {
  // Static pages — lastmod resolves at build time (`nuxi generate`), so each
  // deploy advertises a fresh lastmod across every static URL. This is the
  // honest signal: "the rendered bytes changed at deploy time." Without it
  // the sitemap stayed frozen at a hardcoded date and Google lost the signal
  // that pages had refreshed.
  const lastmod = new Date().toISOString()

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
    { loc: '/services/full-project-delivery', changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/maintenance-support', changefreq: 'monthly', priority: 0.8 },

    // Case studies
    { loc: '/case-studies/eitoss', changefreq: 'monthly', priority: 0.7 },
    { loc: '/case-studies/formester', changefreq: 'monthly', priority: 0.7 },
    { loc: '/case-studies/invoice-falcon', changefreq: 'monthly', priority: 0.7 },
    { loc: '/case-studies/performline', changefreq: 'monthly', priority: 0.7 },
    { loc: '/case-studies/rumie', changefreq: 'monthly', priority: 0.7 },

    // Hire developer pages
    { loc: '/hire-react-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-angular-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-vuejs-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-nodejs-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-rails-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-python-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-flutter-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-dotnet-developer', changefreq: 'monthly', priority: 0.8 },

    // Guides (pillar pages)
    { loc: '/guides/it-staff-augmentation', changefreq: 'monthly', priority: 0.9 },
    { loc: '/guides/mvp-development', changefreq: 'monthly', priority: 0.9 },

    // Blog index
    { loc: '/blog', changefreq: 'weekly', priority: 0.7 },

    // Legal
    { loc: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  ]

  const staticUrls = staticPaths.map((p) => ({ ...p, loc: withSlash(p.loc), lastmod }))

  // Dynamic blog post URLs from Nuxt Content. Prefer `updatedAt` over
  // `createdAt` so content refreshes surface in the sitemap — otherwise
  // rewriting a post would never tell Google to re-crawl.
  const blogPosts = await serverQueryContent(event, 'blog').find()
  const blogUrls = blogPosts.map((post) => {
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
