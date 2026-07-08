import MainNavbar from '../_components/MainNavbar'
import MainFooter from '../_components/MainFooter'
import '../_style/globals.css'
import { Suspense } from "react";
import Loading from './loading';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Syne } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://glblnex.com'),
  title: {
    template: '%s | globalNex',
    default: 'globalNex — Metals Scenario Analysis',
  },
  description: 'globalNex is a metals scenario analysis platform. Decompose the alloys you buy, stress-test price and supply shocks, and quantify the impact on cost, availability, and margin.',
  keywords: [
    'Metals', 'Scenario Analysis', 'Supply Chain Risk', 'Aluminum', 'Titanium',
    'Steel', 'Copper', 'Nickel', 'Gold', 'Alloys', 'Procurement', 'Commodity Risk',
    'Risk Analysis', 'Manufacturing Metals', 'Supply Risk',
  ],
  type: 'website',
  url: '/',
  icons: {
    icon: 'icons/favicon.ico',
    shortcut: 'icons/favicon.ico',
    apple: 'icons/apple-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: 'icons/apple-touch-icon.png',
    },
  },
  canonical: 'https://glblnex.com/',
  manifest: 'icons/site.webmanifest',
  openGraph: {
    title: 'globalNex — Metals Scenario Analysis',
    name: 'globalNex',
    site_name: 'globalNex',
    description: 'Stress-test the exact alloys you buy. See what a price or supply shock does to cost, availability, and margin — in seconds.',
    type: 'website',
    url: '/',
    images: "https://y2etwt0sktcajnaj.public.blob.vercel-storage.com/og_photo.png",
  }
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
    </html >
  )
}
