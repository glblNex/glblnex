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
    template: '%s | globalnex',
    default: 'globalnex — Metals Geo-Risk Analyzer',
  },
  description: 'globalnex is a geo-risk analyzer for metals supply. Map where the alloys you buy come from, track global supply movement and concentration, and stress-test geo-shocks on cost, availability, and lead time.',
  keywords: [
    'Metals', 'Geo-Risk', 'Supply Chain Risk', 'Scenario Analysis', 'Aluminum',
    'Titanium', 'Steel', 'Copper', 'Nickel', 'Gold', 'Alloys', 'Procurement',
    'Commodity Risk', 'Geopolitical Risk', 'Supply Risk', 'Manufacturing Metals',
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
    title: 'globalnex — Metals Geo-Risk Analyzer',
    name: 'globalnex',
    site_name: 'globalnex',
    description: 'Map global metals supply, spot concentration risk, and stress-test geo-shocks on the alloys manufacturers buy.',
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
