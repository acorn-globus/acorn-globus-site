import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(() => {
  return [
    // Homepage
    { loc: '/', changefreq: 'weekly', priority: 1.0 },

    // Main pages
    { loc: '/about', changefreq: 'monthly', priority: 0.9 },
    { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
    { loc: '/process', changefreq: 'monthly', priority: 0.6 },
    { loc: '/portfolio', changefreq: 'monthly', priority: 0.7 },
    { loc: '/projects', changefreq: 'monthly', priority: 0.7 },

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

    // Blog
    { loc: '/blog', changefreq: 'weekly', priority: 0.7 },

    // Legal
    { loc: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  ]
})
