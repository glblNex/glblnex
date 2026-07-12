import MainNavbar from '../_components/MainNavbar'
import MainFooter from '../_components/MainFooter'
import StructuredData from '../_components/StructuredData'
import '../_style/globals.css'
import { Suspense } from "react";
import Loading from './loading';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { syne } from '../_style/fonts'

const siteDescription =
  'globalNex is an Outcome-as-a-Service platform for defense, aerospace, and heavy manufacturing. Counter supplier price hikes with alloy-grade precision, map messy BOMs via Expert-in-the-Loop deployment, and get boardroom-ready exposure figures — not a blank dashboard.';

const ogImage = 'https://y2etwt0sktcajnaj.public.blob.vercel-storage.com/og_photo.png';

export const metadata = {
  metadataBase: new URL('https://glblnex.com'),
  title: {
    template: '%s | globalNex',
    default: 'globalNex: Material-Risk Outcomes, Delivered',
  },
  description: siteDescription,
  applicationName: 'globalNex',
  authors: [{ name: 'globalNex', url: 'https://glblnex.com' }],
  creator: 'globalNex',
  publisher: 'globalNex',
  category: 'technology',
  keywords: [
    'outcome-as-a-service', 'material risk advisory', 'BOM risk assessment',
    'fractional commodity strategist', 'supplier price negotiation', 'alloy-grade supply risk',
    'alloy-grade exposure', 'metal supply risk analysis', 'BOM metal risk',
    '7075-T6 supply risk', 'Ti-6Al-4V exposure', 'Inconel 718 risk',
    'metal price shock modeling', 'at-risk spend metals', 'composition decomposition',
    'critical minerals risk', 'supply shock prediction', 'Metals Scenario Analysis',
    'Supply Chain Risk', 'Procurement', 'Commodity Risk', 'Manufacturing Metals', 'globalNex',
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
    title: 'globalNex: Material-Risk Outcomes, Delivered',
    description: 'Counter supplier price hikes with alloy-grade precision. Expert-in-the-Loop deployment maps your BOMs and delivers boardroom-ready numbers — not a blank dashboard.',
    url: 'https://glblnex.com/',
    siteName: 'globalNex',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'globalNex: Material-Risk Outcomes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'globalNex: Material-Risk Outcomes, Delivered',
    description: 'Outcome-as-a-Service for manufacturers. Alloy-grade counters, trigger alerts, and Expert-in-the-Loop deployment — not another self-serve dashboard.',
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
