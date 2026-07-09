import { FAQ_ITEMS } from '../_data/faq'

export default function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'globalNex',
    url: 'https://glblnex.com',
    logo: 'https://glblnex.com/LightSVG.svg',
    description:
      'Alloy-grade supply risk analysis for manufacturers. Decompose alloy grades, model price and supply shocks, quantify cost and margin impact.',
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
      'Alloy-grade supply risk analysis platform. Model metal price and supply shocks on the exact grades you buy.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://glblnex.com/#faq',
      'query-input': 'required name=search_term_string',
    },
  }

  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'globalNex',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://glblnex.com',
    description:
      'Alloy-grade supply risk analysis. Decompose alloys into constituent metals, stress-test price and supply shocks, and quantify cost, margin, and at-risk spend impact in seconds.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Early access waitlist',
      url: 'https://glblnex.com/started',
    },
    featureList: [
      'Alloy-grade composition decomposition',
      'Interactive price and supply shock scenarios',
      'Cost, margin, and at-risk spend modeling',
      'Geographic supply concentration mapping',
      'Board-ready risk score',
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
    '@graph': [organization, website, software, faqPage],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
