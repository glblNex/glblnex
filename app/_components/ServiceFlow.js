'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const SCENARIOS = [
  {
    id: 'reactive',
    label: 'Reactive defense',
    short: 'Price hike',
    title: 'The supplier price hike',
    tagline: 'Forward the email. Get the counter receipt in four hours.',
    steps: [
      {
        phase: 'Trigger',
        body: 'Your Tier 1 machine shop emails: "LME aluminum is up 15%. We need a 12% increase on all 6061-T6 airframe brackets, effective next month."',
      },
      {
        phase: 'Client action',
        body: 'Your procurement director forwards the email to their dedicated globalNex commodity strategist: "Can they justify this?"',
      },
      {
        phase: 'globalNex execution',
        body: 'We run the exact part volumes through your mapped alloy database. The engine decomposes 6061-T6: aluminum is 97% of the grade, but magnesium and silicon are trending down. True blended cost increase: 4.2%.',
      },
      {
        phase: 'Deliverable',
        body: 'Within four hours: a single-page Counter Receipt with metallurgical math your team can use in the room.',
      },
      {
        phase: 'Outcome',
        body: 'You counter at 5%. The supplier accepts. Margin defended. The engagement pays for itself in one afternoon.',
        highlight: true,
      },
    ],
  },
  {
    id: 'proactive',
    label: 'Proactive strike',
    short: 'Geo shock',
    title: 'The geopolitical shock',
    tagline: 'We tell you where you are bleeding before you feel the cut.',
    steps: [
      {
        phase: 'Trigger',
        body: 'At 6:00 AM, news breaks: China is squeezing magnesium exports to prioritize domestic automotive manufacturing.',
      },
      {
        phase: 'globalNex execution',
        body: 'Your internal team has not had coffee yet. Our engine flags the macro event, cross-references your mapped BOM, and identifies that 22% of high-strength aluminum spend (magnesium-dependent alloying) is highly exposed.',
      },
      {
        phase: 'Deliverable',
        body: 'By 8:00 AM, your VP of Operations and Head of Finance receive an alert: "Magnesium export squeeze confirmed. 2.5-point gross margin hit on 7075-T6 spend within six weeks."',
      },
      {
        phase: 'The move',
        body: 'Execute Q3/Q4 purchase orders today to lock current pricing. Initiate qualification for secondary suppliers in India for three specific parts.',
        highlight: true,
      },
      {
        phase: 'Outcome',
        body: 'You lock contracts before the rest of the market panics. The line keeps running.',
        highlight: true,
      },
    ],
  },
  {
    id: 'npi',
    label: 'Ugly spend offload',
    short: 'New product',
    title: 'The new product introduction',
    tagline: 'Keep engineers engineering. Hand us the prototype BOM.',
    steps: [
      {
        phase: 'Trigger',
        body: 'Engineering finalizes a next-generation propulsion component: Inconel 718 forgings and custom titanium fasteners. Your supply chain team is maxed out on the legacy production line.',
      },
      {
        phase: 'Client action',
        body: 'You send the unproven, messy prototype BOM to globalNex.',
      },
      {
        phase: 'globalNex execution',
        body: 'Our fractional experts analyze the BOM, run materials through the risk engine to avoid geopolitical bottlenecks, and tap our vetted network of specialized micro-factories and raw material suppliers.',
      },
      {
        phase: 'Deliverable',
        body: 'A fully de-risked sourcing plan: three vetted manufacturing partners, projected landed costs, and lead times.',
      },
      {
        phase: 'Outcome',
        body: 'Your internal team keeps the main line moving. We manage the complex, low-volume ugly spend until the new product is ready to scale.',
        highlight: true,
      },
    ],
  },
]

export default function ServiceFlow() {
  const [activeId, setActiveId] = useState(SCENARIOS[0].id)
  const active = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0]

  return (
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="How the service actually works"
          title="Day one starts with your ugly data"
          subtitle="Every engagement begins with zero-friction ingestion. Your supply chain finance team securely uploads raw ERP exports or messy Excel dumps: thousands of part numbers and purchase orders. We map Part #8472 to 7075-T6 aluminum. Once the baseline exists, here is how the ongoing service flows."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.04}>
        <div className="mt-8 lg:mt-10 rounded-2xl border border-line bg-bg2/40 p-6 lg:p-8 max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.18em] text-highlight font-semibold mb-3">
            Zero-friction ingestion
          </p>
          <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-center">
            <div className="rounded-xl border border-line bg-white p-4">
              <p className="text-[10px] uppercase tracking-wide text-light">What you upload</p>
              <p className={`mt-2 text-sm font-medium text-ink ${urbanist.className}`}>
                Raw ERP dump · messy Excel · thousands of POs
              </p>
            </div>
            <p className="text-center text-light text-sm hidden sm:block">→</p>
            <div className="rounded-xl border border-highlight/25 bg-highlightSoft/30 p-4">
              <p className="text-[10px] uppercase tracking-wide text-highlight">What we map</p>
              <p className={`mt-2 text-sm font-medium text-ink ${urbanist.className}`}>
                Part #8472 → 7075-T6 · grade-level exposure live
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-light leading-relaxed text-center max-w-2xl mx-auto">
            You never clean the data. Our ingestion engine and fractional experts do.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-3 w-full max-w-4xl mx-auto">
        {SCENARIOS.map((s) => {
          const selected = activeId === s.id
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveId(s.id)}
              className={`rounded-xl border px-4 py-3 lg:py-4 text-left transition-all duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/40 ${
                selected
                  ? 'border-highlight bg-highlight text-white shadow-md'
                  : 'border-line bg-white text-ink hover:border-highlight/35 hover:bg-highlightSoft/40'
              }`}
            >
              <p className={`text-[10px] uppercase tracking-wider mb-1 ${selected ? 'text-white/70' : 'text-light'}`}>
                {s.short}
              </p>
              <p className={`text-sm lg:text-base font-medium leading-snug ${urbanist.className}`}>
                {s.label}
              </p>
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28 }}
          className="mt-4 lg:mt-5 max-w-4xl mx-auto rounded-2xl border border-line bg-white overflow-hidden shadow-[0_20px_60px_-32px_rgba(10,10,10,0.25)]"
        >
          <div className="p-6 lg:p-10 border-b border-line bg-bg2/30">
            <p className="text-xs uppercase tracking-[0.16em] text-highlight font-medium mb-2">
              Scenario {SCENARIOS.findIndex((s) => s.id === active.id) + 1}
            </p>
            <h3 className={`text-2xl lg:text-3xl font-medium text-ink leading-tight ${urbanist.className}`}>
              {active.title}
            </h3>
            <p className={`mt-3 text-base text-light ${urbanist.className}`}>{active.tagline}</p>
          </div>

          <ol className="divide-y divide-line">
            {active.steps.map((step, i) => (
              <li
                key={step.phase}
                className={`p-5 lg:p-6 flex gap-4 lg:gap-6 ${
                  step.highlight ? 'bg-highlightSoft/25' : 'bg-white'
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    step.highlight
                      ? 'bg-highlight text-white'
                      : 'bg-bg2 text-light border border-line'
                  }`}
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-highlight font-semibold">
                    {step.phase}
                  </p>
                  <p className="mt-2 text-sm lg:text-base text-light leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
