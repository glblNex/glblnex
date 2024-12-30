import MainNavbar from '../_components/MainNavbar'
import MainFooter from '../_components/MainFooter'
import '../_style/globals.css'
import { Suspense } from "react";
import Loading from './loading';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager } from '@next/third-parties/google'
import { Syne } from 'next/font/google'
import CTABanner from '../_components/CTABanner';

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  metadataBase: new URL('https://glblnex.com'),
  title: {
    template: '%s | globalNex',
    default: 'globalNex - Global Trade Intelligence',
  },
  description: 'globalNex is a cutting-edge data analytics platform that revolutionizes the way organizations access, analyze, and leverage global trade data. globalNex provides a centralized and intelligent solution for stakeholders across the international trade ecosystem, enabling them to gain unparalleled insights, optimize operations, and drive strategic decision-making.',
  keywords: ['Global Trade', 'Data', 'AI', 'Global AI', 'Global Trade Data', 'Analytics', 'Global Analytics', 'Data Intelligence', 'Global Intelligence', 'Logistics', 'Advanced Logistics', 'Global Tracking', ' AI Logistics', 'AI Global Trade', 'Trade Data', 'Logistical Data', 'Logistics Tracking'],
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
    title: 'globalNex - Global Trade Intelligence',
    name: 'globalNex',
    site_name: 'globalNex',
    description: 'globalNex is a cutting-edge data analytics platform that revolutionizes the way organizations access, analyze, and leverage global trade data.',
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
      {/* <GoogleTagManager gtmId="G-GCQEVGZLP4" /> */}
    </html >
  )
}
