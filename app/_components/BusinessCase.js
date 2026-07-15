'use client'

import React from 'react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal, { RevealGroup, RevealItem } from './Reveal'

const PILLARS = [
  {
    label: 'Trace',
    value: 'Shock to parts',
    detail: 'Macro event traced to the specific components at risk, with a redirect hit list, not a commodity headline.',
  },
  {
    label: 'Audit',
    value: 'Surcharge to math',
    detail: 'Line-by-line alloy breakdown on incoming invoices. Reject inflated surcharges before you pay.',
  },
  {
    label: 'Counter',
    value: 'Claim to receipt',
    detail: 'Supplier hike decomposed to true cost. Walk in with a defensible number and counter in the room.',
  },
  {
    label: 'Route',
    value: 'NPI off your plate',
    detail: 'Prototype and low-volume spend sourced, contracted, and managed through our vetted network.',
  },
  {
    label: 'Quantify',
    value: 'Exposure in days',
    detail: 'Board, deal, or hedge figure from messy purchase data, mapped to chemistry, not part numbers alone.',
  },
]

const STANDARDS = [
  {
    title: 'Chemistry, not SKUs',
    body: 'Your ERP tracks part numbers and vendors. We decompose to elemental exposure so policy shocks land on specific components.',
  },
  {
    title: 'Execution, not alerts',
    body: 'Generic tools push news. We deliver the move: redirect, reject, source, or counter, with a team that executes.',
  },
  {
    title: 'Decisions, not dashboards',
    body: 'One quantified conclusion per question, plus the recommended action. The outcome you carry into the room.',
  },
]

export default function BusinessCase() {
  return (
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="The outcome"
          title="What you walk away with"
          subtitle="Trace, audit, counter, route, and quantify. We take the problem on so you do not babysit a tool or wait weeks for a report."
          align="center"
        />
      </Reveal>

      <RevealGroup className="mt-8 lg:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
        {PILLARS.map((m) => (
          <RevealItem key={m.label}>
            <div className="h-full rounded-2xl border border-line bg-white p-6 lg:p-7">
              <p className="text-[10px] uppercase tracking-[0.16em] text-light font-medium">
                {m.label}
              </p>
              <p className={`mt-3 text-2xl lg:text-3xl font-light text-highlight ${urbanist.className}`}>
                {m.value}
              </p>
              <p className="mt-3 text-sm text-light leading-relaxed">{m.detail}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.08}>
        <div className="mt-4 lg:mt-5 grid md:grid-cols-3 gap-4 lg:gap-5">
          {STANDARDS.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-line bg-bg2/50 p-5 lg:p-6"
            >
              <h3 className={`text-base lg:text-lg font-medium text-ink ${urbanist.className}`}>
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-light leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
