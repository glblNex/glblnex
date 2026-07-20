'use client'

import React from 'react'
import Link from 'next/link'
import { urbanist } from '../_style/fonts'
import GxSection from '../_components/GxSection'
import MainButton from '../_components/MainButton'
import SecondButton from '../_components/SecondButton'
import CTABanner from '../_components/CTABanner'
import BenefitsSection from '../_components/BenefitsSection'
import FaqSection from '../_components/FaqSection'
import ShockMoment from '../_components/ShockMoment'
import HowItWorks from '../_components/HowItWorks'
import Reveal from '../_components/Reveal'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero: brand + one offer, full-bleed atmosphere */}
      <section className="relative min-h-[min(92vh,880px)] flex items-center overflow-hidden">
        <div className="absolute inset-0 gx-hero-atmosphere" aria-hidden />
        <div className="absolute inset-0 gx-grid opacity-40" aria-hidden />
        <div className="relative z-10 w-full px-5 lg:px-20 pt-28 pb-20 lg:pt-36 lg:pb-28">
          <Reveal>
            <p
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-ink leading-[0.95] ${urbanist.className}`}
            >
              globalNex
            </p>
            <h1
              className={`mt-6 sm:mt-8 text-2xl sm:text-3xl lg:text-4xl font-light leading-snug text-ink max-w-2xl ${urbanist.className}`}
            >
              Save money on metal spend—before the next surcharge hits
            </h1>
            <p className={`mt-5 text-base lg:text-lg text-light font-light max-w-xl leading-relaxed ${urbanist.className}`}>
              Custom analysis of your raw materials and composition so you can negotiate pricing
              and hedge increases.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/started">
                <MainButton
                  btn_txt="Send us a supplier invoice"
                  className="!text-xs sm:!text-sm !px-4 sm:!px-6"
                />
              </Link>
              <a href="#proof">
                <SecondButton btn_txt="See an example" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <GxSection id="how">
        <HowItWorks />
      </GxSection>

      <GxSection>
        <ShockMoment />
      </GxSection>

      <GxSection>
        <BenefitsSection />
      </GxSection>

      <GxSection id="faq">
        <FaqSection />
      </GxSection>

      <CTABanner />
    </main>
  )
}
