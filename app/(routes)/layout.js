import MainNavbar from '../_components/MainNavbar'
import MainFooter from '../_components/MainFooter'
import '../_style/globals.css'
import { Suspense } from "react";
import Loading from './loading';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { syne } from '../_style/fonts'

const siteDescription =
  'globalNex is a metals scenario analysis platform. Decompose the alloys you buy, stress-test price and supply shocks, and quantify the impact on cost, availability, and margin.';

const ogImage = 'https://y2etwt0sktcajnaj.public.blob.vercel-storage.com/og_photo.png';

export const metadata = {
  metadataBase: new URL('https://glblnex.com'),
  title: {
    template: '%s | globalNex',
    default: 'globalNex: Metals Scenario Analysis',
  },
  description: siteDescription,
  applicationName: 'globalNex',
  authors: [{ name: 'globalNex', url: 'https://glblnex.com' }],
  creator: 'globalNex',
  publisher: 'globalNex',
  category: 'technology',
  keywords: [
    'Metals', 'Scenario Analysis', 'Supply Chain Risk', 'Aluminum', 'Titanium',
    'Steel', 'Copper', 'Nickel', 'Gold', 'Alloys', 'Procurement', 'Commodity Risk',
    'Risk Analysis', 'Manufacturing Metals', 'Supply Risk', 'globalNex',
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
    title: 'globalNex: Metals Scenario Analysis',
    description: 'Stress-test the exact alloys you buy. See what a price or supply shock does to cost, availability, and margin in seconds.',
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
    title: 'globalNex: Metals Scenario Analysis',
    description: 'Stress-test the exact alloys you buy. Quantify cost, availability, and margin impact from price and supply shocks.',
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
