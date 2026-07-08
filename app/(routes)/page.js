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
    title: "Supply is concentrated",
    body: "Most metals are mined or refined in a handful of countries. A single policy shift can cut off a critical input overnight.",
  },
  {
    title: "Movement has chokepoints",
    body: "Shipping lanes, export controls, and logistics disruptions ripple through global supply chains long before spot prices move.",
  },
  {
    title: "Alloy exposure is invisible",
    body: "You buy 7075-T6 or Inconel 718 — not \"aluminum\" or \"nickel.\" Spot prices don't show where your real risk lives.",
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
    title: "Run a geo-shock",
    body: "Stress-test export bans, mine outages, sanctions, or price spikes and watch supply risk move across the map.",
  },
]

const AUDIENCES = [
  {
    title: "Aerospace",
    body: "Titanium, nickel superalloys, and high-strength aluminum drive airframe and turbine programs. One supply shock can halt production lines.",
  },
  {
    title: "Automotive & EV",
    body: "Aluminum castings, copper busbar, and magnesium housings face tightening supply and rising geo-exposure as volumes scale.",
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
              Metals geo-risk analyzer
            </p>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.08] text-ink ${urbanist.className}`}>
              See where your metals come from — before a shock hits your line
            </h1>
            <p className={`mt-6 text-lg text-light font-light max-w-xl leading-relaxed ${urbanist.className}`}>
              globalnex maps global supply, movement, and concentration risk for the alloys
              manufacturers buy — then stress-tests geo-shocks so procurement teams can act before
              disruption becomes downtime.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/started">
                <MainButton btn_txt="Join Waitlist" />
              </Link>
              <a href="#demo">
                <SecondButton btn_txt="See it in action" />
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
              Global trade data tells you what moved. globalnex tells you what breaks.
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
              Stress-test the exact alloys you buy. Quantify at-risk spend, availability, lead time,
              and cost impact — in seconds.
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
              Run a geo-shock on any alloy
            </h2>
            <p className="mt-4 text-light text-sm lg:text-base">
              Pick an alloy and a scenario — export controls, mine outage, sanctions — and watch
              supply risk propagate across the map.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ScenarioDemo />
        </Reveal>
      </GxSection>

      {/* Alloy exposure */}
      <GxSection>
        <Reveal>
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-3">
              Alloy → geography
            </p>
            <h2 className={`text-3xl lg:text-5xl font-light text-ink ${urbanist.className}`}>
              Every alloy decomposed to its source countries
            </h2>
            <p className="mt-4 text-light text-sm lg:text-base">
              See which metals drive your exposure and where they concentrate — the view spot
              prices and trade dashboards never give you.
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
