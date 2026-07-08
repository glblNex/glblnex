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
import IndustriesStrip from '../_components/IndustriesStrip'
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
    title: "Supply is concentrating",
    body: "Tariffs, export controls, and sanctions are reshaping where critical metals are refined. The exposure inside your BOM deserves the same precision as your financials.",
  },
  {
    title: "Shocks move through alloys",
    body: "A single metal move ripples into unit cost and gross margin across the grades you buy. Seeing that path early is the difference between reacting and leading.",
  },
  {
    title: "Legacy tools look backward",
    body: "Price terminals and spreadsheets report what already happened. Neither models what a shock does to 7075-T6, or what it means for your margin.",
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
              Material risk intelligence
            </p>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.08] text-ink ${urbanist.className}`}>
              Material risk, refined to a single decision
            </h1>
            <p className={`mt-5 text-base lg:text-lg text-light font-light max-w-xl leading-relaxed ${urbanist.className}`}>
              globalNex turns metal price and supply data into alloy-grade clarity: what a shock does
              to the grades you buy, and what it means for your margin. All signal, no noise.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/started">
                <MainButton btn_txt="Join early access" />
              </Link>
              <a href="#demo">
                <SecondButton btn_txt="Try the demo" />
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

      {/* Industries */}
      <GxSection className="py-2">
        <IndustriesStrip />
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
            eyebrow="The landscape"
            title={<>Material exposure is rising. Visibility has not kept pace.</>}
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
            subtitle="Pick a grade, run a shock, read the impact. Alloy-grade precision in seconds."
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
