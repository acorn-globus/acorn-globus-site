import { defineSitemapEventHandler } from '#imports'
import { serverQueryContent } from '#content/server'

export default defineSitemapEventHandler(async (event) => {
  // Static pages
  const staticUrls = [
    // Homepage
    { loc: '/', changefreq: 'weekly', priority: 1.0 },

    // Main pages
    { loc: '/about', changefreq: 'monthly', priority: 0.9 },
    { loc: '/how-we-work', changefreq: 'monthly', priority: 0.8 },
    { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
    { loc: '/portfolio', changefreq: 'monthly', priority: 0.7 },
    { loc: '/designs', changefreq: 'monthly', priority: 0.6 },
    { loc: '/process', changefreq: 'monthly', priority: 0.5 },
    { loc: '/projects', changefreq: 'monthly', priority: 0.5 },

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

    // Technology pages
    { loc: '/technologies/reactjs', changefreq: 'monthly', priority: 0.6 },
    { loc: '/technologies/angular', changefreq: 'monthly', priority: 0.6 },
    { loc: '/technologies/vuejs', changefreq: 'monthly', priority: 0.6 },
    { loc: '/technologies/dotnet', changefreq: 'monthly', priority: 0.6 },
    { loc: '/technologies/ruby-on-rails', changefreq: 'monthly', priority: 0.6 },

    // Hire developer pages
    { loc: '/hire-react-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-angular-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-vuejs-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-nodejs-developer', changefreq: 'monthly', priority: 0.8 },
    { loc: '/hire-rails-developer', changefreq: 'monthly', priority: 0.8 },

    // Guides (pillar pages)
    { loc: '/guides/it-staff-augmentation', changefreq: 'monthly', priority: 0.9 },
    { loc: '/guides/mvp-development', changefreq: 'monthly', priority: 0.9 },

    // Blog index
    { loc: '/blog', changefreq: 'weekly', priority: 0.7 },

    // Legal
    { loc: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
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
