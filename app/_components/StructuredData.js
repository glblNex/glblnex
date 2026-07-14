import { FAQ_ITEMS } from '../_data/faq'

export default function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'globalNex',
    url: 'https://glblnex.com',
    logo: 'https://glblnex.com/LightSVG.svg',
    description:
      'Material-risk outcomes for defense, aerospace, and heavy manufacturing. Alloy-grade negotiation counters, Expert-in-the-Loop deployment, and boardroom-ready exposure figures with recommended moves.',
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
      'Material-risk outcomes delivered via Expert-in-the-Loop engagement. Counter supplier hikes, map messy BOMs, quantify exposure, and get the next move.',
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
      'Fractional cost engineers, metallurgical analysts, and commodity strategists who map client BOMs, configure scenario studios, and deliver negotiation counters, boardroom figures, and recommended moves.',
    serviceType: 'Material risk advisory and outcomes delivery',
    areaServed: 'Worldwide',
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Defense, aerospace, automotive, and heavy manufacturing procurement and finance teams',
    },
  }

  // Engine is supporting evidence for the service, not the product being sold.
  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'globalNex Engine',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://glblnex.com',
    description:
      'Proprietary alloy-grade decomposition and scenario engine used by the Expert-in-the-Loop team to deliver quantified conclusions. Not sold as self-serve SaaS.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Request an assessment',
      url: 'https://glblnex.com/started',
    },
    featureList: [
      'Alloy-grade composition decomposition',
      'Supplier negotiation counter (e.g. 6061-T6 breakdown)',
      'Zero-friction BOM ingestion',
      'Trigger alerts with recommended moves',
      'Interactive price and supply shock scenarios',
      'Geographic supply concentration mapping',
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

  // Lead with ProfessionalService; SoftwareApplication is supporting evidence only.
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
