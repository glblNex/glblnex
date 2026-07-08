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
import SectionHeading from '../_components/SectionHeading'
import Reveal, { RevealGroup, RevealItem } from '../_components/Reveal'

const HERO_PROOF = [
  { value: "Seconds", label: "to model any price or supply shock" },
  { value: "Alloy-grade", label: "exposure, not just spot commodity" },
  { value: "Board-ready", label: "risk in one score and dollar figure" },
]

const VALUE_ADDS = [
  {
    stat: "Minutes",
    title: "Decisions in minutes, not weeks",
    body: "Replace slow analyst spreadsheets with instant scenario modeling on the exact grades you buy, so leadership can act while it still matters.",
  },
  {
    stat: "Margin",
    title: "Margin you can defend",
    body: "Quantify at-risk spend and the margin hit from any price or supply shock before it reaches the P&L, and take it to the board with numbers.",
  },
  {
    stat: "Zero",
    title: "Zero blind spots",
    body: "Expose the single-country dependencies hidden inside every alloy you buy, so a sanction or export ban never surprises your operation.",
  },
]

const PROBLEMS = [
  {
    title: "Geopolitics is rewriting supply",
    body: "Tariffs, export controls, and sanctions are concentrating critical metals in fewer hands each year. The exposure sitting in your bill of materials is growing, whether you measure it or not.",
  },
  {
    title: "One shock cascades to your margin",
    body: "A single metal move ripples through your alloys into unit cost, availability, and gross margin. By the time it shows up in the P&L, your options are already gone.",
  },
  {
    title: "Your current tools are reactive",
    body: "Price terminals and spreadsheets tell you what already happened. They cannot tell you what a shock does to 7075-T6 or Inconel 718, or what it costs you specifically.",
  },
]

const STEPS = [
  {
    n: "01",
    title: "Select your metal",
    body: "Start with the metal family you procure: aluminum, titanium, steel, copper, nickel, gold, and more.",
  },
  {
    n: "02",
    title: "Choose the alloy grade",
    body: "Pick the exact grade you buy, such as 7075-T6, Ti-6Al-4V, or Inconel 718, and see its metals decomposed.",
  },
  {
    n: "03",
    title: "Run a scenario",
    body: "Stress-test price shocks, production cuts, or export bans and see the impact on cost, availability, and margin.",
  },
]

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
              globalNex turns metal price and supply data into a decision your leadership can make
              today: exactly what a shock does to the alloys you buy, and what it costs you in margin,
              spend, and continuity. In seconds, not weeks.
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
      <GxSection className="py-2">
        <RevealGroup className="grid md:grid-cols-3 gap-6">
          {VALUE_ADDS.map((v) => (
            <RevealItem key={v.title}>
              <div className="h-full rounded-xl border border-line bg-white p-6">
                <p className={`text-3xl font-light text-highlight mb-3 ${urbanist.className}`}>{v.stat}</p>
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
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl bg-ink text-white p-8 lg:p-12 text-center">
            <p className={`text-2xl lg:text-3xl font-light leading-snug max-w-3xl mx-auto ${urbanist.className}`}>
              The cost of finding out too late is measured in stopped lines, blown budgets, and
              margin you can never recover. globalNex puts that number in front of you first.
            </p>
          </div>
        </Reveal>
      </GxSection>

      {/* How it works */}
      <GxSection>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Three steps from metal to decision"
            align="center"
          />
        </Reveal>
        <RevealGroup className="grid md:grid-cols-3 gap-6 mt-8">
          {STEPS.map((s) => (
            <RevealItem key={s.n}>
              <div className="group h-full rounded-xl border border-line bg-white p-6">
                <span className={`text-4xl font-light text-line group-hover:text-highlight transition-colors duration-300 ${urbanist.className}`}>
                  {s.n}
                </span>
                <h3 className={`mt-4 text-xl font-medium text-ink ${urbanist.className}`}>{s.title}</h3>
                <p className="mt-2 text-light text-sm leading-relaxed">{s.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </GxSection>

      {/* Interactive demo */}
      <GxSection id="demo">
        <Reveal>
          <SectionHeading
            eyebrow="Live demo"
            title="What if aluminum goes up 20%?"
            subtitle="Adjust price and production shocks on any alloy grade and watch cost, availability, demand, and lead time react in real time."
            align="center"
            className="mb-8"
          />
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
            subtitle="Pick Ti-6Al-4V or Inconel 718 and see each constituent metal's composition share, price volatility, and exposure. This is the view nobody else gives you."
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

      {/* Who benefits and how */}
      <GxSection>
        <BenefitsSection />
      </GxSection>

      <CoverageMarquee />

      <CTABanner />
    </main>
  )
}
