import MainNavbar from '../_components/MainNavbar'
import MainFooter from '../_components/MainFooter'
import StructuredData from '../_components/StructuredData'
import '../_style/globals.css'
import { Suspense } from "react";
import Loading from './loading';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { syne } from '../_style/fonts'

const siteDescription =
  'globalNex helps you save money on metal spend with custom analysis of your raw materials and composition—so you can negotiate pricing and hedge increases before the next surcharge hits.';

const ogImage = 'https://y2etwt0sktcajnaj.public.blob.vercel-storage.com/og_photo.png';

export const metadata = {
  metadataBase: new URL('https://glblnex.com'),
  title: {
    template: '%s | globalNex',
    default: 'globalNex: Save Money on Metal Spend',
  },
  description: siteDescription,
  applicationName: 'globalNex',
  authors: [{ name: 'globalNex', url: 'https://glblnex.com' }],
  creator: 'globalNex',
  publisher: 'globalNex',
  category: 'technology',
  keywords: [
    'metal spend savings', 'supplier price negotiation', 'composition analysis',
    'raw material analysis', 'alloy composition', 'surcharge audit',
    'negotiation counter', 'hedge metal prices', 'material surcharge rejection',
    'BOM metal analysis', 'procurement metal costs', 'supply chain cost savings',
    '6061-T6 surcharge', 'alloy-grade pricing', 'Manufacturing Metals', 'globalNex',
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
    title: 'globalNex: Save Money on Metal Spend',
    description: 'Custom analysis of your raw materials and composition so you can negotiate pricing and hedge increases.',
    url: 'https://glblnex.com/',
    siteName: 'globalNex',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'globalNex: Save money on metal spend',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'globalNex: Save Money on Metal Spend',
    description: 'Custom composition analysis so you can negotiate pricing and hedge increases—before the next surcharge hits.',
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
