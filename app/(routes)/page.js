"use client"

import React from 'react'
import Link from 'next/link'
import { urbanist } from '../_style/fonts'
import GxSection from '../_components/GxSection'
import MainButton from '../_components/MainButton'
import SecondButton from '../_components/SecondButton'
import CTABanner from '../_components/CTABanner'
import DashboardMockup from '../_components/DashboardMockup'
import ScenarioDemo from '../_components/ScenarioDemo'
import AlloyExposureSection from '../_components/AlloyExposureSection'
import BenefitsSection from '../_components/BenefitsSection'
import CoverageMarquee from '../_components/CoverageMarquee'
import WhyGlobalNex from '../_components/WhyGlobalNex'
import ShockMoment from '../_components/ShockMoment'
import BusinessCase from '../_components/BusinessCase'
import SectionHeading from '../_components/SectionHeading'
import Reveal, { RevealGroup, RevealItem } from '../_components/Reveal'

const HERO_PROOF = [
  { value: "Seconds", label: "to model any price or supply shock" },
  { value: "Alloy-grade", label: "exposure, not just spot commodity" },
  { value: "Board-ready", label: "risk in one score and dollar figure" },
]

const VALUE_ADDS = [
  {
    stat: "One number",
    title: "Not ten dashboards",
    body: "Every alloy gets a single supply-risk score. Know what to watch at a glance.",
  },
  {
    stat: "In seconds",
    title: "Not weeks of analysis",
    body: "Model any shock and see cost, margin, and at-risk spend impact instantly.",
  },
  {
    stat: "Your BOM",
    title: "Not the whole market",
    body: "Only the grades you buy, decomposed to the metals that drive your risk.",
  },
]

const PROBLEMS = [
  {
    title: "Geopolitics is rewriting supply",
    body: "Tariffs, export controls, and sanctions concentrate critical metals in fewer hands each year. Your exposure grows whether you measure it or not.",
  },
  {
    title: "One shock cascades to your margin",
    body: "A single metal move ripples through your alloys into unit cost and gross margin. By the time it hits the P&L, your options are gone.",
  },
  {
    title: "Your current tools are reactive",
    body: "Price terminals and spreadsheets report what already happened. Neither tells you what a shock does to 7075-T6, or what it costs you.",
  },
]

const STEPS = ["Pick the alloy grade you buy", "Model a price or supply shock", "See the cost and margin impact"]

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <GxSection className="pt-24 lg:pt-28 pb-4 lg:pb-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-3">
              Material risk intelligence for manufacturers
            </p>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.08] text-ink ${urbanist.className}`}>
              Protect your margins from supply shocks you do not control
            </h1>
            <p className={`mt-5 text-base lg:text-lg text-light font-light max-w-xl leading-relaxed ${urbanist.className}`}>
              globalNex turns metal price and supply data into one decision: what a shock does to the
              alloys you buy, and what it costs you in margin. All signal, no noise.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/started">
                <MainButton btn_txt="Join Waitlist" />
              </Link>
              <a href="#demo">
                <SecondButton btn_txt="See how it works" />
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
            <DashboardMockup />
          </div>
        </div>
      </GxSection>

      {/* Value adds */}
      <GxSection>
        <Reveal>
          <SectionHeading
            eyebrow="All signal, no noise"
            title="We cut the market down to the one number you act on"
            align="center"
            className="mb-8"
          />
        </Reveal>
        <RevealGroup className="grid md:grid-cols-3 gap-6">
          {VALUE_ADDS.map((v) => (
            <RevealItem key={v.title}>
              <div className="h-full rounded-xl border border-line bg-white p-6">
                <p className={`text-2xl lg:text-3xl font-light text-highlight mb-2 ${urbanist.className}`}>{v.stat}</p>
                <h3 className={`text-lg font-medium text-ink mb-2 ${urbanist.className}`}>{v.title}</h3>
                <p className="text-light text-sm leading-relaxed">{v.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </GxSection>

      {/* Problem */}
      <GxSection>
        <Reveal>
          <SectionHeading
            eyebrow="Why this matters now"
            title={<>The exposure is growing, and the tools you have cannot see it.</>}
          />
        </Reveal>
        <RevealGroup className="grid md:grid-cols-3 gap-5 mt-8">
          {PROBLEMS.map((p) => (
            <RevealItem key={p.title}>
              <div className="h-full rounded-xl border border-line bg-white p-6 hover:border-highlight/40 transition-colors duration-200">
                <h3 className={`text-xl font-medium text-ink mb-3 ${urbanist.className}`}>{p.title}</h3>
                <p className="text-light text-sm leading-relaxed">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </GxSection>

      {/* The unanswerable question */}
      <GxSection>
        <ShockMoment />
      </GxSection>

      {/* Interactive demo */}
      <GxSection id="demo">
        <Reveal>
          <SectionHeading
            eyebrow="Live demo"
            title="What if aluminum goes up 20%?"
            subtitle="Model a shock on any grade and watch cost, margin, and availability react in real time."
            align="center"
            className="mb-6"
          />
        </Reveal>
        <Reveal delay={0.03}>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-8 text-sm text-light">
            {STEPS.map((s, i) => (
              <React.Fragment key={s}>
                <span className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-highlightSoft text-highlight text-xs font-semibold">
                    {i + 1}
                  </span>
                  {s}
                </span>
                {i < STEPS.length - 1 ? <span className="text-line hidden sm:inline">/</span> : null}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <ScenarioDemo />
        </Reveal>
      </GxSection>

      {/* Alloy decomposition */}
      <GxSection>
        <Reveal>
          <SectionHeading
            eyebrow="Alloy decomposition"
            title="See what your alloys are really made of"
            subtitle="Every grade broken into its metals, with the composition share and volatility that drive your exposure. The view nobody else gives you."
            className="mb-8"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <AlloyExposureSection />
        </Reveal>
      </GxSection>

      {/* Why globalNex / differentiation */}
      <GxSection>
        <WhyGlobalNex />
      </GxSection>

      {/* Business case / ROI */}
      <GxSection>
        <BusinessCase />
      </GxSection>

      {/* Who benefits and how */}
      <GxSection>
        <BenefitsSection />
      </GxSection>

      <CoverageMarquee />

      <CTABanner />
    </main>
  )
}
