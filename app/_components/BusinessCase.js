'use client'

import React from 'react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal, { RevealGroup, RevealItem } from './Reveal'

const PILLARS = [
  {
    label: 'Precision',
    value: 'Alloy-grade',
    detail: 'Every figure is tied to the exact grades on your bill of materials, not a commodity index.',
  },
  {
    label: 'Speed',
    value: 'Seconds',
    detail: 'Scenario answers arrive at the pace of a leadership conversation, not a research cycle.',
  },
  {
    label: 'Stewardship',
    value: 'Board-ready',
    detail: 'One risk score and one exposure figure your leadership can trust and act on.',
  },
]

const STANDARDS = [
  {
    title: 'Negotiate with composure',
    body: 'Enter supplier conversations knowing which grades carry concentration risk and what a move means in dollars.',
  },
  {
    title: 'Decide with foresight',
    body: 'Model dual-sourcing, redesign, and hedging options while the window to act is still open.',
  },
  {
    title: 'Lead with clarity',
    body: 'Bring a precise material-risk figure into every review, not a promise to follow up.',
  },
]

export default function BusinessCase() {
  return (
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="The standard"
          title="Built for operators who refuse to guess"
          subtitle="globalNex is not another feed or spreadsheet. It is the material-risk layer serious manufacturers use to see clearly and decide well."
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
