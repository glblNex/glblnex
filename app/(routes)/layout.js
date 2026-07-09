import MainNavbar from '../_components/MainNavbar'
import MainFooter from '../_components/MainFooter'
import StructuredData from '../_components/StructuredData'
import '../_style/globals.css'
import { Suspense } from "react";
import Loading from './loading';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { syne } from '../_style/fonts'

const siteDescription =
  'globalNex is the alloy-grade supply risk analysis platform for manufacturers. Decompose the alloys you buy (7075-T6, Ti-6Al-4V, Inconel 718), model price and supply shocks, and quantify cost, margin, and at-risk spend in seconds. All signal, no noise.';

const ogImage = 'https://y2etwt0sktcajnaj.public.blob.vercel-storage.com/og_photo.png';

export const metadata = {
  metadataBase: new URL('https://glblnex.com'),
  title: {
    template: '%s | globalNex',
    default: 'globalNex: Alloy-Grade Supply Risk Analysis',
  },
  description: siteDescription,
  applicationName: 'globalNex',
  authors: [{ name: 'globalNex', url: 'https://glblnex.com' }],
  creator: 'globalNex',
  publisher: 'globalNex',
  category: 'technology',
  keywords: [
    'alloy-grade supply risk', 'alloy-grade exposure', 'metal supply risk analysis',
    'BOM metal risk', '7075-T6 supply risk', 'Ti-6Al-4V exposure', 'Inconel 718 risk',
    'metal price shock modeling', 'at-risk spend metals', 'composition decomposition',
    'Metals Scenario Analysis', 'Supply Chain Risk', 'Aluminum', 'Titanium',
    'Steel', 'Copper', 'Nickel', 'Alloys', 'Procurement', 'Commodity Risk',
    'Manufacturing Metals', 'globalNex',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://glblnex.com/',
    types: {
      'text/plain': 'https://glblnex.com/llms.txt',
    },
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/icons/favicon.ico',
    apple: '/icons/apple-icon.png',
    other: [
      { rel: 'apple-touch-icon', url: '/icons/apple-touch-icon.png' },
      { rel: 'mask-icon', url: '/icons/safari-pinned-tab.svg', color: '#005B97' },
    ],
  },
  manifest: '/icons/site.webmanifest',
  openGraph: {
    title: 'globalNex: Alloy-Grade Supply Risk Analysis',
    description: 'Model what a price or supply shock does to the exact alloy grades on your BOM. Cost, margin, and at-risk spend in seconds.',
    url: 'https://glblnex.com/',
    siteName: 'globalNex',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'globalNex: Metals Scenario Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'globalNex: Alloy-Grade Supply Risk Analysis',
    description: 'Decompose alloys, model shocks, quantify cost and margin impact. The alloy-grade layer your price feeds and supplier tools leave open.',
    site: '@glblNex',
    creator: '@glblNex',
    images: [ogImage],
  },
}

export const viewport = {
  themeColor: '#FFFFFF',
  colorScheme: 'light',
}

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={syne.className}>
      <body suppressHydrationWarning={true}>
        <StructuredData />
        <MainNavbar />
        <Suspense fallback={<Loading />}>
          <div className='container mx-auto min-w-full z-1'>
            <SpeedInsights />
            <main>{children}</main>
          </div>
        </Suspense>
        <MainFooter />
      </body>
    </html>
  )
}
