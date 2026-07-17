"use client"

import React from 'react'
import Link from 'next/link'
import { urbanist } from '../_style/fonts'
import GxSection from '../_components/GxSection'
import MainButton from '../_components/MainButton'
import SecondButton from '../_components/SecondButton'
import CTABanner from '../_components/CTABanner'
import OutcomeDeliverable from '../_components/OutcomeDeliverable'
import ScenarioDemo from '../_components/ScenarioDemo'
import AlloyExposureSection from '../_components/AlloyExposureSection'
import BenefitsSection from '../_components/BenefitsSection'
import CoverageMarquee from '../_components/CoverageMarquee'
import FaqSection from '../_components/FaqSection'
import IndustriesStrip from '../_components/IndustriesStrip'
import WhyGlobalNex from '../_components/WhyGlobalNex'
import AdvisoryLayer from '../_components/AdvisoryLayer'
import ShockMoment from '../_components/ShockMoment'
import BusinessCase from '../_components/BusinessCase'
import SectionHeading from '../_components/SectionHeading'
import Reveal from '../_components/Reveal'

const STEPS = ["Pick a grade", "Run a shock", "Read the number"]

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero: money first, deliverable above the fold */}
      <GxSection className="pt-24 lg:pt-28 pb-4 lg:pb-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Reveal className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-3">
              Surcharge audit and negotiation counters
            </p>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.08] text-ink ${urbanist.className}`}>
              Your suppliers are overcharging you. We prove it, down to the alloy.
            </h1>
            <p className={`mt-5 text-base lg:text-lg text-light font-light max-w-xl leading-relaxed ${urbanist.className}`}>
              We decompose every invoice and BOM to elemental math, reject inflated surcharges,
              and hand you the counter before AP pays.
            </p>
            <p className={`mt-4 text-sm lg:text-base text-ink/80 font-light max-w-xl leading-relaxed ${urbanist.className}`}>
              Tech-enabled managed service. Our engine does the math, our cost engineers execute the move.
            </p>
            <p className={`mt-3 text-sm text-light max-w-xl leading-relaxed ${urbanist.className}`}>
              When supply shocks hit, we trace them to your parts and keep production moving.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/started">
                <MainButton btn_txt="Send us your last supplier invoice" className="!text-xs sm:!text-sm !px-4 sm:!px-6" />
              </Link>
              <a href="#demo">
                <SecondButton btn_txt="See the math" />
              </a>
            </div>
          </Reveal>
          <div className="relative order-1 lg:order-2">
            <OutcomeDeliverable />
          </div>
        </div>
      </GxSection>

      <GxSection className="py-2">
        <IndustriesStrip />
      </GxSection>

      <GxSection>
        <ShockMoment />
      </GxSection>

      <GxSection>
        <BusinessCase />
      </GxSection>

      <AdvisoryLayer />

      <GxSection id="demo">
        <Reveal>
          <SectionHeading
            eyebrow="Proof the engine is real"
            title="Alloy-grade math behind every outcome"
            subtitle="Counters, rejection reports, hit lists, and exposure figures all run on the same decomposition engine. Pick a grade, run a shock, read the number."
            align="center"
            className="mb-5"
          />
        </Reveal>
        <Reveal delay={0.03}>
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 mb-6 text-[13px] text-light">
            {STEPS.map((s, i) => (
              <React.Fragment key={s}>
                <span className="flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-highlightSoft text-highlight text-[10px] font-semibold">
                    {i + 1}
                  </span>
                  {s}
                </span>
                {i < STEPS.length - 1 ? <span className="text-line/80 hidden sm:inline">·</span> : null}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <ScenarioDemo />
        </Reveal>
      </GxSection>

      <GxSection id="alloys">
        <Reveal>
          <SectionHeading
            eyebrow="The depth behind the number"
            title="Every grade decomposed to its metals"
            subtitle="The proprietary alloy database behind every outcome. Your ERP tracks part numbers; we decompose to elemental chemistry, volatility, and geo-concentration at grade level."
            className="mb-8"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <AlloyExposureSection />
        </Reveal>
      </GxSection>

      <GxSection id="compare">
        <WhyGlobalNex />
      </GxSection>

      <GxSection>
        <BenefitsSection />
      </GxSection>

      <CoverageMarquee />

      <GxSection id="faq">
        <FaqSection />
      </GxSection>

      <CTABanner />
    </main>
  )
}
