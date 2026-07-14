'use client'

import React from 'react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal, { RevealGroup, RevealItem } from './Reveal'

const PILLARS = [
  {
    label: 'Negotiation',
    value: 'Counter in the room',
    detail: 'Walk in with the alloy breakdown and a defensible number. Counter at 5% when they ask for 12%.',
  },
  {
    label: 'Boardroom',
    value: 'One figure',
    detail: 'At-risk spend and margin impact leadership can act on today, not a promise to follow up.',
  },
  {
    label: 'Window',
    value: 'Act in time',
    detail: 'See the shock, quantify the exposure, then lock contracts, dual-source, or redesign while the window is open.',
  },
]

const STANDARDS = [
  {
    title: 'Protected margin',
    body: 'Every point you do not overpay in a supplier negotiation flows straight to gross margin. We own the math so you can take the move.',
  },
  {
    title: 'Composure under pressure',
    body: 'When the board asks what a magnesium squeeze does to your spend, you leave with the figure and the next action.',
  },
  {
    title: 'Decisions, not dashboards',
    body: 'One quantified conclusion per question, plus the recommended move. The outcome you carry into the room.',
  },
]

export default function BusinessCase() {
  return (
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="The outcome"
          title="What you walk away with"
          subtitle="You walk away with the number and the move: a negotiation counter, a boardroom figure, a dual-sourcing call. We take the problem on, so you do not babysit a tool."
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
