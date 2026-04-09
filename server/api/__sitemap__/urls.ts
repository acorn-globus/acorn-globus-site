import { defineSitemapEventHandler } from '#imports'
import { serverQueryContent } from '#content/server'

export default defineSitemapEventHandler(async (event) => {
  // Static pages
  const lastmod = '2026-04-09T00:00:00.000Z'

  const staticUrls = [
    // Homepage
    { loc: '/', changefreq: 'weekly', priority: 1.0, lastmod },

    // Main pages
    { loc: '/about', changefreq: 'monthly', priority: 0.9, lastmod },
    { loc: '/how-we-work', changefreq: 'monthly', priority: 0.8, lastmod },
    { loc: '/contact', changefreq: 'monthly', priority: 0.8, lastmod },
    { loc: '/portfolio', changefreq: 'monthly', priority: 0.7, lastmod },
    { loc: '/designs', changefreq: 'monthly', priority: 0.6, lastmod },

    // Services
    { loc: '/services', changefreq: 'monthly', priority: 0.9, lastmod },
    { loc: '/services/resource-augmentation', changefreq: 'monthly', priority: 0.8, lastmod },
    { loc: '/services/mvp-development', changefreq: 'monthly', priority: 0.8, lastmod },
    { loc: '/services/full-project-delivery', changefreq: 'monthly', priority: 0.8, lastmod },
    { loc: '/services/maintenance-support', changefreq: 'monthly', priority: 0.8, lastmod },

    // Case studies
    { loc: '/case-studies/eitoss', changefreq: 'monthly', priority: 0.7, lastmod },
    { loc: '/case-studies/formester', changefreq: 'monthly', priority: 0.7, lastmod },
    { loc: '/case-studies/invoice-falcon', changefreq: 'monthly', priority: 0.7, lastmod },
    { loc: '/case-studies/performline', changefreq: 'monthly', priority: 0.7, lastmod },
    { loc: '/case-studies/rumie', changefreq: 'monthly', priority: 0.7, lastmod },

    // Technology pages
    { loc: '/technologies/reactjs', changefreq: 'monthly', priority: 0.6, lastmod },
    { loc: '/technologies/angular', changefreq: 'monthly', priority: 0.6, lastmod },
    { loc: '/technologies/vuejs', changefreq: 'monthly', priority: 0.6, lastmod },
    { loc: '/technologies/dotnet', changefreq: 'monthly', priority: 0.6, lastmod },
    { loc: '/technologies/ruby-on-rails', changefreq: 'monthly', priority: 0.6, lastmod },

    // Hire developer pages
    { loc: '/hire-react-developer', changefreq: 'monthly', priority: 0.8, lastmod },
    { loc: '/hire-angular-developer', changefreq: 'monthly', priority: 0.8, lastmod },
    { loc: '/hire-vuejs-developer', changefreq: 'monthly', priority: 0.8, lastmod },
    { loc: '/hire-nodejs-developer', changefreq: 'monthly', priority: 0.8, lastmod },
    { loc: '/hire-rails-developer', changefreq: 'monthly', priority: 0.8, lastmod },
    { loc: '/hire-python-developer', changefreq: 'monthly', priority: 0.8, lastmod },
    { loc: '/hire-flutter-developer', changefreq: 'monthly', priority: 0.8, lastmod },

    // Guides (pillar pages)
    { loc: '/guides/it-staff-augmentation', changefreq: 'monthly', priority: 0.9, lastmod },
    { loc: '/guides/mvp-development', changefreq: 'monthly', priority: 0.9, lastmod },

    // Blog index
    { loc: '/blog', changefreq: 'weekly', priority: 0.7, lastmod },

    // Legal
    { loc: '/privacy-policy', changefreq: 'yearly', priority: 0.3, lastmod },
  ]

  // Dynamic blog post URLs from Nuxt Content
  const blogPosts = await serverQueryContent(event, 'blog').find()
  const blogUrls = blogPosts.map((post) => ({
    loc: post._path,
    changefreq: 'monthly' as const,
    priority: 0.6,
    ...(post.createdAt ? { lastmod: new Date(post.createdAt).toISOString() } : {}),
  }))

  return [...staticUrls, ...blogUrls]
})
