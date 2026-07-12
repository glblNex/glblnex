'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const BENEFITS = [
  {
    id: 'procurement',
    role: 'Procurement & Sourcing',
    short: 'Procurement',
    headline: 'Counter the +12% hike with a 5% counter',
    outcome: 'A defensible alloy-grade number in every supplier negotiation.',
    points: [
      'True cost delta on the grade, not the commodity index',
      'Counter receipt you can use in the room, same day',
    ],
  },
  {
    id: 'supply-chain',
    role: 'Supply Chain & Operations',
    short: 'Supply Chain',
    headline: 'Know the margin hit before the line stops',
    outcome: 'Trigger alerts the morning a squeeze hits — with your spend already quantified.',
    points: [
      'Exposure on your grades, not generic market alerts',
      'Dual-sourcing priorities ranked by concentration risk',
    ],
  },
  {
    id: 'finance',
    role: 'Finance & Risk',
    short: 'Finance',
    headline: 'One at-risk spend figure for the board',
    outcome: 'Margin impact and dollar exposure leadership can act on — not a follow-up promise.',
    points: [
      'Board-ready figures tied to your BOM',
      'Scenario-backed numbers for hedging and budget calls',
    ],
  },
  {
    id: 'engineering',
    role: 'Engineering & Design',
    short: 'Engineering',
    headline: 'Pick the grade that survives the shock',
    outcome: 'Compare alloys on supply resilience before tooling locks you in.',
    points: [
      'Composition and volatility behind each grade choice',
      'De-risk programs before qualification commits you',
    ],
  },
]

export default function BenefitsSection() {
  const [activeId, setActiveId] = useState(BENEFITS[0].id)
  const active = BENEFITS.find((b) => b.id === activeId) || BENEFITS[0]

  return (
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="Who we work with"
          title="Every function walks away with an outcome"
          subtitle="Defense, aerospace, automotive, and heavy manufacturing — selective engagements for teams who refuse to guess."
          align="center"
        />
      </Reveal>

      <div className="mt-8 lg:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 w-full">
        {BENEFITS.map((b) => {
          const selected = activeId === b.id
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => setActiveId(b.id)}
              className={`rounded-xl border px-3 py-3 lg:px-5 lg:py-4 text-left transition-all duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/40 ${
                selected
                  ? 'border-highlight bg-highlight text-white shadow-md'
                  : 'border-line bg-white text-ink hover:border-highlight/35 hover:bg-highlightSoft/40'
              }`}
            >
              <p className={`text-[10px] uppercase tracking-wider mb-1 ${selected ? 'text-white/70' : 'text-light'}`}>
                {b.short}
              </p>
              <p className={`text-sm lg:text-base font-medium leading-snug ${urbanist.className}`}>
                {b.role.split(' & ')[0]}
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
          className="mt-4 lg:mt-5 w-full rounded-2xl border border-line bg-white overflow-hidden shadow-[0_20px_60px_-32px_rgba(10,10,10,0.25)]"
        >
          <div className="p-6 lg:p-10">
            <p className="text-xs uppercase tracking-[0.16em] text-highlight font-medium mb-3">
              {active.role}
            </p>
            <h3 className={`text-2xl lg:text-3xl font-medium text-ink leading-tight ${urbanist.className}`}>
              {active.headline}
            </h3>
            <p className={`mt-4 text-base lg:text-lg font-light text-highlight ${urbanist.className}`}>
              {active.outcome}
            </p>
            <ul className="mt-6 space-y-3 max-w-2xl">
              {active.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm lg:text-base text-light leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
