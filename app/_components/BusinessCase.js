'use client'

import React from 'react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal, { RevealGroup, RevealItem } from './Reveal'

const MATH = [
  {
    label: 'Typical metals spend',
    value: '$80M+',
    detail: 'Annual alloy and metal spend for a mid-market manufacturer',
  },
  {
    label: 'One unmodeled shock',
    value: '$2–14M',
    detail: 'At-risk spend from a single concentrated price or supply event',
  },
  {
    label: 'Payback logic',
    value: '1 shock',
    detail: 'One avoided miss, one better-negotiated contract, or one dual-source decision pays for the platform many times over',
  },
]

const PAYOFFS = [
  {
    title: 'Negotiate from exposure',
    body: 'Walk into supplier talks knowing which grades are fragile and what a move actually costs you.',
  },
  {
    title: 'Act before the P&L does',
    body: 'Hedge, dual-source, or redesign while you still have options, not after margin is gone.',
  },
  {
    title: 'Own the board answer',
    body: 'Be the person who puts a dollar figure on material risk instead of promising a follow-up.',
  },
]

export default function BusinessCase() {
  return (
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="The business case"
          title="One avoided shock pays for this many times over"
          subtitle="You do not buy globalNex for another chart. You buy it because the cost of not knowing dwarfs the cost of knowing."
          align="center"
        />
      </Reveal>

      <RevealGroup className="mt-8 lg:mt-10 grid md:grid-cols-3 gap-4 lg:gap-5">
        {MATH.map((m) => (
          <RevealItem key={m.label}>
            <div className="h-full rounded-2xl border border-line bg-white p-6 lg:p-7">
              <p className="text-[10px] uppercase tracking-[0.16em] text-light font-medium">
                {m.label}
              </p>
              <p className={`mt-3 text-3xl lg:text-4xl font-light text-highlight tabular-nums ${urbanist.className}`}>
                {m.value}
              </p>
              <p className="mt-3 text-sm text-light leading-relaxed">{m.detail}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.08}>
        <div className="mt-4 lg:mt-5 grid md:grid-cols-3 gap-4 lg:gap-5">
          {PAYOFFS.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-line bg-bg2/60 p-5 lg:p-6"
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
