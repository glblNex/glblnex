'use client'

import React from 'react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal, { RevealGroup, RevealItem } from './Reveal'

const PILLARS = [
  {
    label: 'Negotiation',
    value: 'Counter in the room',
    detail: 'Walk into supplier talks with the exact alloy breakdown and a defensible number, not a commodity index.',
  },
  {
    label: 'Boardroom',
    value: 'One figure',
    detail: 'At-risk spend and margin impact your leadership can trust and act on, not a promise to follow up.',
  },
  {
    label: 'Window',
    value: 'Act in time',
    detail: 'See the shock, quantify the exposure, and move on hedging or dual-sourcing while the window is still open.',
  },
]

const STANDARDS = [
  {
    title: 'Protected margin',
    body: 'Every percentage point you do not overpay in a supplier negotiation flows straight to gross margin.',
  },
  {
    title: 'Composure under pressure',
    body: 'When the board asks what a magnesium squeeze does to your spend, you have the answer, not a research project.',
  },
  {
    title: 'Decisions, not dashboards',
    body: 'One quantified conclusion per question. The outcome you carry into the room, not another tool to learn.',
  },
]

export default function BusinessCase() {
  return (
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="The outcome"
          title="What you walk away with"
          subtitle="globalNex is not software you log into. It is the quantified conclusion you take into a board meeting or a supplier negotiation."
          align="center"
        />
      </Reveal>

      <RevealGroup className="mt-8 lg:mt-10 grid md:grid-cols-3 gap-4 lg:gap-5">
        {PILLARS.map((m) => (
          <RevealItem key={m.label}>
            <div className="h-full rounded-2xl border border-line bg-white p-6 lg:p-8">
              <p className="text-[10px] uppercase tracking-[0.16em] text-light font-medium">
                {m.label}
              </p>
              <p className={`mt-3 text-3xl lg:text-4xl font-light text-highlight ${urbanist.className}`}>
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
