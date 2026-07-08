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
    headline: 'Negotiate from exposure, not spot prices',
    metric: { value: '3.2x', label: 'faster supplier risk reviews' },
    secondary: { value: '$9.4M', label: 'avg. annual spend modeled per grade' },
    points: [
      'See true alloy-level cost exposure before you sign a PO',
      'Compare grades on supply risk alongside spec and price',
      'Arm category managers with scenario data for contract talks',
    ],
    actions: [
      { label: 'Annual spend at risk', detail: 'Dollar exposure by alloy grade' },
      { label: 'Cost impact by grade', detail: 'Shock-to-unit-cost translation' },
      { label: 'Supplier concentration', detail: 'Single-country dependency flags' },
    ],
  },
  {
    id: 'supply-chain',
    role: 'Supply Chain & Operations',
    short: 'Supply Chain',
    headline: 'Spot single-country chokepoints before they stop your line',
    metric: { value: '6 wks', label: 'earlier disruption warning' },
    secondary: { value: '7', label: 'supply origins mapped per alloy' },
    points: [
      'Map where each alloy input is refined and mined',
      'Stress-test production cuts and export bans on your BOM',
      'Prioritize dual-sourcing where concentration is highest',
    ],
    actions: [
      { label: 'Lead-time impact', detail: 'Weeks added under shock scenarios' },
      { label: 'Availability drop', detail: 'Supply shortfall by production cut' },
      { label: 'Geo supply map', detail: 'Origin-weighted flow visualization' },
    ],
  },
  {
    id: 'finance',
    role: 'Finance & Risk',
    short: 'Finance',
    headline: 'Quantify at-risk spend for the board, not just the commodity desk',
    metric: { value: '$14M', label: 'typical at-risk spend surfaced' },
    secondary: { value: '1.8 pts', label: 'avg. margin hit per shock scenario' },
    points: [
      'Translate metal shocks into margin and P&L impact in seconds',
      'Feed hedging and budget decisions with scenario-backed numbers',
      'Report supply risk alongside financial risk in one view',
    ],
    actions: [
      { label: 'Margin hit (pts)', detail: 'Gross margin erosion from shocks' },
      { label: 'At-risk spend ($M)', detail: 'Board-ready exposure figures' },
      { label: 'Risk score', detail: 'Single composite supply-risk number' },
    ],
  },
  {
    id: 'engineering',
    role: 'Engineering & Design',
    short: 'Engineering',
    headline: 'Design around fragile inputs from day one',
    metric: { value: '40%', label: 'fewer late-stage material swaps' },
    secondary: { value: '5+', label: 'metals decomposed per alloy grade' },
    points: [
      'Compare alloy grades on supply resilience, not just mechanical spec',
      'Understand which constituent metals drive volatility for each grade',
      'De-risk new programs before tooling and qualification lock you in',
    ],
    actions: [
      { label: 'Composition breakdown', detail: 'Weight % by constituent metal' },
      { label: 'Volatility by metal', detail: 'Price swing sensitivity per input' },
      { label: 'Grade comparison', detail: 'Side-by-side risk across alloys' },
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
          eyebrow="Who benefits, and how"
          title="Clear answers for every team touching metals"
          subtitle="Each function gets scenario-backed metrics they can act on, not another commodity dashboard."
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
          <div className="grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-line">
              <p className="text-xs uppercase tracking-[0.16em] text-highlight font-medium mb-3">
                {active.role}
              </p>
              <h3 className={`text-2xl lg:text-3xl xl:text-4xl font-medium text-ink leading-tight ${urbanist.className}`}>
                {active.headline}
              </h3>
              <ul className="mt-6 space-y-3">
                {active.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm lg:text-base text-light leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 p-6 lg:p-10 bg-bg2/70 flex flex-col justify-between gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-line bg-white p-5">
                  <p className={`text-3xl lg:text-4xl font-light text-highlight tabular-nums ${urbanist.className}`}>
                    {active.metric.value}
                  </p>
                  <p className="mt-2 text-xs text-light leading-snug">{active.metric.label}</p>
                </div>
                <div className="rounded-xl border border-line bg-white p-5">
                  <p className={`text-3xl lg:text-4xl font-light text-ink tabular-nums ${urbanist.className}`}>
                    {active.secondary.value}
                  </p>
                  <p className="mt-2 text-xs text-light leading-snug">{active.secondary.label}</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {active.actions.map((action) => (
                  <div
                    key={action.label}
                    className="rounded-lg border border-line bg-white px-4 py-3 flex items-center justify-between gap-4"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-highlight">
                      {action.label}
                    </span>
                    <span className="text-xs text-light text-right">{action.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
