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
            'https://clutch.co/profile/acorn-globus',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'business@acornglobus.com',
            url: `${SITE_URL}/contact`,
          },
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
