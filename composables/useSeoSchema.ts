/**
 * SEO Schema composables for JSON-LD structured data.
 * Used across all pages for Organization, Service, FAQ, and Breadcrumb schemas.
 */

const SITE_URL = 'https://acornglobus.com'
const ORG_NAME = 'Acorn Globus'
const ORG_LOGO = `${SITE_URL}/acorn-globus.png`

/**
 * Injects Organization JSON-LD schema site-wide.
 * Call once in the default layout.
 */
export function useOrganizationSchema() {
  // Emit the WebSite schema alongside the Organization schema so both render
  // site-wide from the single call site in the default layout.
  useWebsiteSchema()

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: ORG_NAME,
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: ORG_LOGO,
            width: 512,
            height: 512,
          },
          description: 'AcornGlobus is a product engineering team that builds with you, not just for you. We treat every client\'s product like our own.',
          foundingDate: '2019',
          numberOfEmployees: {
            '@type': 'QuantitativeValue',
            minValue: 20,
          },
          sameAs: [
            'https://www.linkedin.com/company/acornglobus/',
            'https://github.com/AcornGlobus',
            // NOTE: Removed 'https://clutch.co/profile/acorn-globus' — that Clutch
            // profile is empty (0 reviews). Asserting it as a sameAs proof point
            // pointed crawlers/AI at an empty page and undermined trust. Re-add
            // only once the Clutch profile has real, published reviews.
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'business@acornglobus.com',
            url: `${SITE_URL}/contact`,
          },
          // Real, named client testimonials surfaced on the site (see
          // components/ReviewsSection.vue). All three are displayed with a
          // 5-star rating, so aggregateRating uses ratingValue 5 over a
          // reviewCount of 3 — the honest number of published named reviews.
          // Do not inflate reviewCount without adding more real, attributable
          // testimonials.
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
            reviewCount: 3,
          },
          review: [
            {
              '@type': 'Review',
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              author: { '@type': 'Person', name: 'Alon Diamant', jobTitle: 'CTO', worksFor: { '@type': 'Organization', name: 'Mayple' } },
              name: 'Proficient and Innovative Development Team',
              reviewBody: 'Acorn Globus is a very proficient team, quick to learn new technologies and concepts. They quickly dove in deep and generated impressive results of high quality that are still operational to this day.',
            },
            {
              '@type': 'Review',
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              author: { '@type': 'Person', name: 'Enzo Zadrima', jobTitle: 'Chief Technology Officer', worksFor: { '@type': 'Organization', name: 'Viewber' } },
              name: 'Exceptional Development and Vision',
              reviewBody: 'Acorn Globus is a gifted team with a rare combination of attention to detail and an overall sense for the big picture. They are very passionate about what they do and come up proactively with improvement ideas.',
            },
            {
              '@type': 'Review',
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              author: { '@type': 'Person', name: 'Bogdan Arsenie', jobTitle: 'CTO', worksFor: { '@type': 'Organization', name: 'PerformLine' } },
              name: 'Reliable Front-End Solutions',
              reviewBody: 'Acorn Globus is my go-to team when I need a trusted partner to execute any front-end project. They are super attentive, communicate effectively, and accurately manage your expectations for their time and involvement.',
            },
          ],
        }),
      },
    ],
  })
}

/**
 * Injects BreadcrumbList JSON-LD schema.
 * @param items Array of { name, path } for the breadcrumb trail.
 *   Home is always prepended automatically.
 */
export function useBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    ...items,
  ]

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.path}`,
          })),
        }),
      },
    ],
  })
}

/**
 * Injects Service JSON-LD schema for service pages.
 */
export function useServiceSchema(service: {
  name: string
  description: string
  url: string
}) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: service.name,
          name: service.name,
          description: service.description,
          url: `${SITE_URL}${service.url}`,
          provider: {
            '@type': 'Organization',
            name: ORG_NAME,
            url: SITE_URL,
          },
          areaServed: [
            { '@type': 'Country', name: 'United States' },
            { '@type': 'Country', name: 'United Kingdom' },
            { '@type': 'Country', name: 'Australia' },
            { '@type': 'Country', name: 'India' },
          ],
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceSpecification: {
              '@type': 'PriceSpecification',
              priceCurrency: 'USD',
            },
          },
        }),
      },
    ],
  })
}

/**
 * Injects BlogPosting JSON-LD schema for individual blog posts.
 */
export function useBlogPostSchema(post: {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
}) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description || post.title,
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.datePublished,
          dateModified: post.dateModified || post.datePublished,
          author: {
            '@type': post.author && post.author !== 'AcornGlobus Team' && post.author !== 'AcornGlobus'
              ? 'Person'
              : 'Organization',
            name: post.author || 'AcornGlobus Team',
          },
          publisher: {
            '@type': 'Organization',
            name: ORG_NAME,
            url: SITE_URL,
            logo: {
              '@type': 'ImageObject',
              url: ORG_LOGO,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/blog/${post.slug}`,
          },
          ...(post.image ? { image: post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}` } : {}),
        }),
      },
    ],
  })
}

/**
 * Injects Article JSON-LD schema for long-form guide/pillar pages.
 */
export function useArticleSchema(article: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
  wordCount?: number
}) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.description,
          url: `${SITE_URL}${article.url}`,
          datePublished: article.datePublished,
          dateModified: article.dateModified || article.datePublished,
          author: {
            '@type': 'Organization',
            name: article.author || ORG_NAME,
            url: SITE_URL,
          },
          publisher: {
            '@type': 'Organization',
            name: ORG_NAME,
            url: SITE_URL,
            logo: {
              '@type': 'ImageObject',
              url: ORG_LOGO,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}${article.url}`,
          },
          image: article.image
            ? (article.image.startsWith('http') ? article.image : `${SITE_URL}${article.image}`)
            : ORG_LOGO,
          ...(article.wordCount ? { wordCount: article.wordCount } : {}),
        }),
      },
    ],
  })
}

/**
 * Injects WebSite JSON-LD schema site-wide.
 * Call once in the default layout (alongside useOrganizationSchema).
 * Helps search engines and AI answer engines associate the domain with the
 * brand name (and enables potential sitelinks search box treatment).
 */
export function useWebsiteSchema() {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: ORG_NAME,
          url: SITE_URL,
          publisher: {
            '@type': 'Organization',
            name: ORG_NAME,
            url: SITE_URL,
          },
        }),
      },
    ],
  })
}

/**
 * Injects FAQPage JSON-LD schema.
 * @param faqs Array of { question, answer } pairs.
 */
export function useFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }),
      },
    ],
  })
}
