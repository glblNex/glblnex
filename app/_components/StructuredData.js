import { FAQ_ITEMS } from '../_data/faq'

export default function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'globalNex',
    url: 'https://glblnex.com',
    logo: 'https://glblnex.com/LightSVG.svg',
    description:
      'Tech-enabled managed service for material-risk outcomes. Trace shocks to specific parts, audit surcharges, route NPI spend, and quantify exposure for defense, aerospace, heavy manufacturing, and deal teams.',
    sameAs: [
      'https://x.com/glblNex',
      'https://www.linkedin.com/company/glblnex/',
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'globalNex',
    url: 'https://glblnex.com',
    description:
      'Tech-enabled managed service: map BOMs to chemistry, deliver hit lists, rejection reports, sourcing plans, and diligence figures with Expert-in-the-Loop execution.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://glblnex.com/#faq',
      'query-input': 'required name=search_term_string',
    },
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'globalNex Expert-in-the-Loop',
    url: 'https://glblnex.com',
    description:
      'Fractional cost engineers, metallurgical analysts, and commodity strategists who map client BOMs to chemistry, trace geo shocks to specific parts, audit surcharges, route NPI spend, and quantify material exposure for board and deal decisions.',
    serviceType: 'Tech-enabled material risk managed service',
    areaServed: 'Worldwide',
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Defense, aerospace, automotive, heavy manufacturing, hardware, and private equity teams',
    },
  }

  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'globalNex Engine',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://glblnex.com',
    description:
      'Proprietary alloy-grade decomposition and scenario engine used by the Expert-in-the-Loop team. Powers trace, audit, route, and quantify outcomes. Not sold as self-serve SaaS.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Send an invoice or BOM for a surcharge audit',
      url: 'https://glblnex.com/started',
    },
    featureList: [
      'Elemental BOM decomposition (part number to chemistry)',
      'Line-by-line surcharge audit and rejection reports',
      'Geo shock traceability to specific components',
      'Grade-matched trigger alerts with recommended moves',
      'NPI and low-volume sourcing risk modeling',
      'Deal-speed material exposure mapping',
    ],
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, website, service, software, faqPage],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
