'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal, { RevealGroup, RevealItem } from './Reveal'

const BENEFITS = [
  {
    id: 'procurement',
    role: 'Procurement & Sourcing',
    headline: 'Negotiate from exposure, not spot prices',
    metric: { value: '3.2x', label: 'faster supplier risk reviews' },
    points: [
      'See true alloy-level cost exposure before you sign a PO',
      'Compare grades on supply risk alongside spec and price',
      'Arm category managers with scenario data for contract talks',
    ],
    actions: ['Annual spend at risk', 'Cost impact by grade', 'Supplier concentration'],
  },
  {
    id: 'supply-chain',
    role: 'Supply Chain & Operations',
    headline: 'Spot single-country chokepoints before they stop your line',
    metric: { value: '6 wks', label: 'earlier disruption warning' },
    points: [
      'Map where each alloy input is refined and mined',
      'Stress-test production cuts and export bans on your BOM',
      'Prioritize dual-sourcing where concentration is highest',
    ],
    actions: ['Lead-time impact', 'Availability drop', 'Geo supply map'],
  },
  {
    id: 'finance',
    role: 'Finance & Risk',
    headline: 'Quantify at-risk spend for the board, not just the commodity desk',
    metric: { value: '$14M', label: 'typical at-risk spend surfaced' },
    points: [
      'Translate metal shocks into margin and P&L impact in seconds',
      'Feed hedging and budget decisions with scenario-backed numbers',
      'Report supply risk alongside financial risk in one view',
    ],
    actions: ['Margin hit (pts)', 'At-risk spend ($M)', 'Risk score'],
  },
  {
    id: 'engineering',
    role: 'Engineering & Design',
    headline: 'Design around fragile inputs from day one',
    metric: { value: '40%', label: 'fewer late-stage material swaps' },
    points: [
      'Compare alloy grades on supply resilience, not just mechanical spec',
      'Understand which constituent metals drive volatility for each grade',
      'De-risk new programs before tooling and qualification lock you in',
    ],
    actions: ['Composition breakdown', 'Volatility by metal', 'Grade comparison'],
  },
]

function BenefitCard({ benefit, active, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(benefit.id)}
      layout
      className={`relative w-full text-left rounded-2xl border bg-white p-6 lg:p-8 transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/40 ${
        active
          ? 'border-highlight shadow-[0_24px_60px_-28px_rgba(0,91,151,0.35)]'
          : 'border-line hover:border-highlight/35 hover:shadow-[0_16px_40px_-24px_rgba(10,10,10,0.2)]'
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`h-9 w-1 rounded-full shrink-0 transition-colors duration-300 ${
                active ? 'bg-highlight' : 'bg-line'
              }`}
            />
            <p className="text-xs uppercase tracking-[0.16em] text-light font-medium">
              {benefit.role}
            </p>
          </div>

          <h3 className={`text-xl lg:text-2xl font-medium text-ink leading-snug ${urbanist.className}`}>
            {benefit.headline}
          </h3>

          <AnimatePresence mode="wait">
            {active && (
              <motion.ul
                key="points"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-4 space-y-2.5 overflow-hidden"
              >
                {benefit.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-light leading-relaxed">
                    <span className="mt-2 h-1 w-1 rounded-full bg-highlight shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {!active && (
            <p className="mt-3 text-sm text-light leading-relaxed line-clamp-2">
              {benefit.points[0]}
            </p>
          )}
        </div>

        <div
          className={`shrink-0 rounded-xl border px-5 py-4 min-w-[140px] transition-colors duration-300 ${
            active ? 'border-highlight/25 bg-highlightSoft' : 'border-line bg-bg2'
          }`}
        >
          <p className={`text-2xl lg:text-3xl font-light text-highlight tabular-nums ${urbanist.className}`}>
            {benefit.metric.value}
          </p>
          <p className="mt-1 text-[11px] text-light leading-snug">{benefit.metric.label}</p>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="mt-6 pt-5 border-t border-line flex flex-wrap gap-2"
          >
            {benefit.actions.map((action) => (
              <span
                key={action}
                className="text-[11px] font-medium uppercase tracking-wide text-highlight bg-white border border-highlight/20 px-2.5 py-1 rounded-md"
              >
                {action}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default function BenefitsSection() {
  const [activeId, setActiveId] = useState(BENEFITS[0].id)

  return (
    <section>
      <Reveal>
        <SectionHeading
          eyebrow="Who benefits, and how"
          title="Clear answers for every team touching metals"
          subtitle="Each function gets scenario-backed metrics they can act on, not another commodity dashboard."
          align="center"
        />
      </Reveal>

      <RevealGroup className="grid lg:grid-cols-2 gap-4 lg:gap-5 mt-8 lg:mt-10">
        {BENEFITS.map((b) => (
          <RevealItem key={b.id}>
            <BenefitCard
              benefit={b}
              active={activeId === b.id}
              onSelect={setActiveId}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
