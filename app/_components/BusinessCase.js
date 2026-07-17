'use client'

import React from 'react'
import Link from 'next/link'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal, { RevealGroup, RevealItem } from './Reveal'
import MainButton from './MainButton'

const PILLARS = [
  {
    label: 'Counter',
    value: 'Claim to receipt',
    detail: 'Supplier hike decomposed to true cost. Walk in with a defensible number and counter in the room.',
  },
  {
    label: 'Audit',
    value: 'Surcharge to math',
    detail: 'Line-by-line alloy breakdown on incoming invoices. Rejection sheet ready before AP clears the payment.',
  },
  {
    label: 'Route',
    value: 'NPI off your plate',
    detail: 'Prototype and low-volume spend sourced, contracted, and managed through our vetted network.',
  },
  {
    label: 'Quantify',
    value: 'Exposure for the deal',
    detail: 'Board or diligence figure from messy purchase data, mapped to chemistry, not part numbers alone.',
  },
  {
    label: 'Trace',
    value: 'Shock to parts',
    detail: 'The capability behind every outcome: macro events traced to the components that move your margin.',
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
          subtitle="Counter and audit put money back this quarter. Route and quantify serve the deal room. Trace powers all four."
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

      <Reveal delay={0.1}>
        <div className="mt-8 flex justify-center">
          <Link href="/started">
            <MainButton btn_txt="Upload a BOM, get a hit list" className="!text-xs sm:!text-sm" />
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
