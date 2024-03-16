import { Metadata } from 'next'
import MainNavbar from '../_components/MainNavbar'
import MainFooter from '../_components/MainFooter'
import Head from 'next/head';
import '../_style/globals.css'
import { Suspense } from "react";
import Loading from './loading';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Syne } from 'next/font/google'

const syne = Syne({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | globalNex',
    default: 'globalNex - Global Trade Data Intelligence',
  },
  description: 'GlobalNex is a cutting-edge data analytics platform that revolutionizes the way organizations access, analyze, and leverage global trade data. GlobalNex provides a centralized and intelligent solution for stakeholders across the international trade ecosystem, enabling them to gain unparalleled insights, optimize operations, and drive strategic decision-making.',
  keywords: ['Global Trade', 'Data', 'AI', 'Global AI', 'Global Trade Data', 'Analytics', 'Global Analytics', 'Data Intelligence', 'Global Intelligence', 'Logistics', 'Advanced Logistics', 'Global Tracking', ' AI Logistics', 'AI Global Trade', 'Trade Data', 'Logistical Data', 'Logistics Tracking'],
  type: 'website',
  url: 'https://glblnex.com/',
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
}

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={syne.className}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Syne&display=swap" rel="stylesheet" />
      </Head>
      <body suppressHydrationWarning={true}>
        <MainNavbar />
        <Suspense fallback={<Loading />}>
          <div className='container mx-auto min-w-full z-1'>
            <main>{children}</main>
          </div>
        </Suspense>
        {/* <CTABanner/> */}
        <MainFooter />
      </body>
    </html >
  )
}
