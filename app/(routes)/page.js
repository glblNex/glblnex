"use client"

import React from 'react'
import Link from 'next/link'
import { Urbanist } from 'next/font/google'
import GxSection from '../_components/GxSection'
import MainButton from '../_components/MainButton'
import SecondButton from '../_components/SecondButton'
import CTABanner from '../_components/CTABanner'
import DashboardMockup from '../_components/DashboardMockup'
import ScenarioDemo from '../_components/ScenarioDemo'
import AlloyExposureSection from '../_components/AlloyExposureSection'
import Reveal from '../_components/Reveal'
import { COVERAGE } from '../_data/metals'

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
})

const PROBLEMS = [
  {
    title: "Price volatility",
    body: "Metal prices swing on macro shocks, tariffs, and energy costs. Buyers need to know what a 20% move does to the alloys they actually procure — not just the LME spot.",
  },
  {
    title: "Concentrated supply",
    body: "Most metals are mined or refined in a handful of countries. Geopolitical events, export bans, and sanctions can cut supply before prices fully reflect the risk.",
  },
  {
    title: "Alloy exposure is invisible",
    body: "You buy 7075-T6 or Inconel 718 — not \"aluminum\" or \"nickel.\" Spot prices don't show how a shock propagates through your exact alloy composition.",
  },
]

const STEPS = [
  {
    n: "01",
    title: "Select your metal",
    body: "Start with the metal family you procure — aluminum, titanium, steel, copper, nickel, gold, and more.",
  },
  {
    n: "02",
    title: "Choose the alloy grade",
    body: "Pick the exact grade you buy — 7075-T6, Ti-6Al-4V, Inconel 718 — and see its constituent metals decomposed.",
  },
  {
    n: "03",
    title: "Run a scenario",
    body: "Stress-test price shocks, production cuts, export bans, or demand surges and see the impact on cost, availability, and margin.",
  },
]

const AUDIENCES = [
  {
    title: "Aerospace",
    body: "Titanium, nickel superalloys, and high-strength aluminum drive airframe and turbine programs. One supply shock can halt production lines.",
  },
  {
    title: "Automotive & EV",
    body: "Aluminum castings, copper busbar, and magnesium housings face tightening supply and rising exposure as volumes scale.",
  },
  {
    title: "Electronics",
    body: "Copper, gold bonding wire, and specialty alloys sit at the center of connector and PCB supply chains with hidden concentration risk.",
  },
  {
    title: "Industrial & Defense",
    body: "Steel, stainless, and specialty alloys power tooling, infrastructure, and defense programs where supply continuity is non-negotiable.",
  },
]

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <GxSection className="pt-28 lg:pt-36 pb-8 lg:pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-4">
              Metals scenario analysis
            </p>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.08] text-ink ${urbanist.className}`}>
              Stress-test the alloys you buy — before a shock hits your line
            </h1>
            <p className={`mt-6 text-lg text-light font-light max-w-xl leading-relaxed ${urbanist.className}`}>
              globalNex decomposes each alloy into its constituent metals, maps global supply
              concentration, and runs what-if scenarios so procurement teams can quantify cost,
              availability, and margin impact in seconds.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/started">
                <MainButton btn_txt="Join Waitlist" />
              </Link>
              <a href="#demo">
                <SecondButton btn_txt="See how it works" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="absolute inset-0 gx-grid rounded-xl opacity-40 pointer-events-none" />
            <DashboardMockup />
          </Reveal>
        </div>
      </GxSection>

      {/* Problem / value */}
      <GxSection>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-3">
              The problem
            </p>
            <h2 className={`text-3xl lg:text-5xl font-light text-ink leading-tight ${urbanist.className}`}>
              Spot prices tell you what happened. globalNex tells you what happens next.
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={0.1 * i}>
              <div className="h-full rounded-xl border border-line bg-white p-6 hover:border-highlight/30 transition-colors duration-300">
                <h3 className={`text-xl font-medium text-ink mb-3 ${urbanist.className}`}>{p.title}</h3>
                <p className="text-light text-sm leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.35}>
          <div className="mt-10 rounded-xl bg-ink text-white p-8 lg:p-10">
            <p className={`text-2xl lg:text-3xl font-light leading-snug max-w-3xl ${urbanist.className}`}>
              Stress-test the exact alloys you buy. See what a price or supply shock does to cost,
              availability, and margin — in seconds.
            </p>
          </div>
        </Reveal>
      </GxSection>

      {/* How it works */}
      <GxSection>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-3">
            How it works
          </p>
          <h2 className={`text-3xl lg:text-5xl font-light text-ink ${urbanist.className}`}>
            Three steps from metal to decision
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={0.1 * i}>
              <div className="group">
                <span className="text-5xl font-light text-line group-hover:text-highlight transition-colors duration-500">
                  {s.n}
                </span>
                <h3 className={`mt-4 text-xl font-medium text-ink ${urbanist.className}`}>{s.title}</h3>
                <p className="mt-2 text-light text-sm leading-relaxed">{s.body}</p>
                <span className="block mt-4 max-w-0 group-hover:max-w-[40%] transition-all duration-500 h-0.5 bg-highlight" />
              </div>
            </Reveal>
          ))}
        </div>
      </GxSection>

      {/* Interactive demo */}
      <GxSection id="demo">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-3">
              Live demo
            </p>
            <h2 className={`text-3xl lg:text-5xl font-light text-ink ${urbanist.className}`}>
              What if aluminum goes up 20%?
            </h2>
            <p className="mt-4 text-light text-sm lg:text-base">
              Adjust price and production shocks on any alloy grade. Watch cost, availability,
              demand, and lead time react in real time.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ScenarioDemo />
        </Reveal>
      </GxSection>

      {/* Alloy decomposition */}
      <GxSection>
        <Reveal>
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-3">
              Alloy decomposition
            </p>
            <h2 className={`text-3xl lg:text-5xl font-light text-ink ${urbanist.className}`}>
              See what your alloys are really made of
            </h2>
            <p className="mt-4 text-light text-sm lg:text-base">
              Pick Ti-6Al-4V or Inconel 718 and see each constituent metal&apos;s composition share,
              price volatility, and exposure — the wedge nobody else gives you.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <AlloyExposureSection />
        </Reveal>
      </GxSection>

      {/* Who it's for */}
      <GxSection>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-3">
            Built for
          </p>
          <h2 className={`text-3xl lg:text-5xl font-light text-ink ${urbanist.className}`}>
            Procurement teams under metals pressure
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={0.08 * i}>
              <div className="h-full rounded-xl border border-line p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className={`text-lg font-medium text-ink mb-2 ${urbanist.className}`}>{a.title}</h3>
                <p className="text-light text-sm leading-relaxed">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </GxSection>

      {/* Coverage marquee */}
      <section className="py-10 border-y border-line bg-bg2 overflow-hidden">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-light font-medium mb-6">
          Metals & alloys covered
        </p>
        <div className="gx-fade-mask overflow-hidden">
          <div className="gx-marquee-track flex whitespace-nowrap w-max">
            {[...COVERAGE, ...COVERAGE].map((m, i) => (
              <span
                key={`${m}-${i}`}
                className="mx-6 text-lg lg:text-xl font-light text-ink/70"
              >
                {m}
                <span className="ml-6 text-highlight">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
