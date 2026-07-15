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
import ServiceFlow from '../_components/ServiceFlow'
import AdvisoryLayer from '../_components/AdvisoryLayer'
import ShockMoment from '../_components/ShockMoment'
import BusinessCase from '../_components/BusinessCase'
import SectionHeading from '../_components/SectionHeading'
import Reveal from '../_components/Reveal'

const HERO_PROOF = [
  { value: "5%", label: "counter when they ask for 12%" },
  { value: "Your BOM", label: "mapped by our team, not you" },
  { value: "Selective", label: "limited engagements at a time" },
]

const STEPS = ["Pick a grade", "Run a shock", "Read the number"]

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <GxSection className="pt-24 lg:pt-28 pb-4 lg:pb-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-3">
              Material-risk outcomes, delivered
            </p>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.08] text-ink ${urbanist.className}`}>
              Win the next price negotiation before it starts
            </h1>
            <p className={`mt-5 text-base lg:text-lg text-light font-light max-w-xl leading-relaxed ${urbanist.className}`}>
              We map your BOMs, quantify the hit, and hand you the counter and the next move.
              For manufacturers who need the problem taken care of, not another dashboard to learn.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/started">
                <MainButton btn_txt="Request an assessment" />
              </Link>
              <a href="#demo">
                <SecondButton btn_txt="See a sample counter" />
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 max-w-xl border-t border-line pt-6">
              {HERO_PROOF.map((p) => (
                <div key={p.value}>
                  <dt className={`text-lg lg:text-xl font-medium text-highlight ${urbanist.className}`}>
                    {p.value}
                  </dt>
                  <dd className="mt-1 text-xs text-light leading-snug">{p.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <div className="relative">
            <OutcomeDeliverable />
          </div>
        </div>
      </GxSection>

      {/* Industries */}
      <GxSection className="py-2">
        <IndustriesStrip />
      </GxSection>

      {/* Pain: supplier negotiation */}
      <GxSection>
        <ShockMoment />
      </GxSection>

      {/* What you get */}
      <GxSection>
        <BusinessCase />
      </GxSection>

      {/* Day-one ingestion + real-world service scenarios */}
      <GxSection id="how-it-works">
        <ServiceFlow />
      </GxSection>

      {/* Expert team + trigger alerts */}
      <AdvisoryLayer />

      {/* Proof the math is real (evidence, not the product) */}
      <GxSection id="demo">
        <Reveal>
          <SectionHeading
            eyebrow="Proof the math is real"
            title="The math behind the counter"
            subtitle="This is not the product. It is evidence the engine works. Pick a grade, run a shock, read the number."
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

      {/* Alloy decomposition: depth behind the number */}
      <GxSection id="alloys">
        <Reveal>
          <SectionHeading
            eyebrow="The depth behind the number"
            title="Every grade decomposed to its metals"
            subtitle="The proprietary alloy database that makes the counter possible. Composition, volatility, and geo-concentration nobody else gives you at grade level."
            className="mb-8"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <AlloyExposureSection />
        </Reveal>
      </GxSection>

      {/* Why not SaaS / consultancies */}
      <GxSection id="compare">
        <WhyGlobalNex />
      </GxSection>

      {/* Who we work with */}
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
