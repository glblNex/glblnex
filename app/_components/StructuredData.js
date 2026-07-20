import { FAQ_ITEMS } from '../_data/faq'

export default function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'globalNex',
    url: 'https://glblnex.com',
    logo: 'https://glblnex.com/LightSVG.svg',
    description:
      'globalNex helps manufacturers save money on metal spend through custom raw-material and composition analysis—so procurement can negotiate pricing and hedge increases.',
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
      'Custom analysis of raw materials and composition for supplier negotiation and hedge timing on metal spend.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://glblnex.com/#faq',
      'query-input': 'required name=search_term_string',
    },
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'globalNex composition analysis',
    url: 'https://glblnex.com',
    description:
      'Composition analysis of invoices and BOMs that delivers negotiation counters, surcharge rejection reports, and hedge timing for procurement teams.',
    serviceType: 'Metal spend savings and composition analysis',
    areaServed: 'Worldwide',
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Procurement and supply-chain teams in manufacturing',
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
      'Alloy-grade composition engine that powers negotiation counters, surcharge audits, and hedge timing. Delivered as analysis and outcomes—not a blank self-serve dashboard.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Send a supplier invoice for composition analysis',
      url: 'https://glblnex.com/started',
    },
    featureList: [
      'Elemental BOM and invoice decomposition',
      'Line-by-line surcharge audit and rejection reports',
      'Defensible negotiation counters',
      'Hedge timing when indices move on your grades',
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
