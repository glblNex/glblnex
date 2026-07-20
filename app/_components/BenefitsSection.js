'use client'

import React from 'react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const POINTS = [
  'True cost delta on the grade you buy—not the commodity headline',
  'Defensible counters when suppliers ask for more than the metals warrant',
  'Early signal to hedge or lock before the next surcharge hits',
]

export default function BenefitsSection() {
  return (
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="Who it's for"
          title="Procurement teams defending metal spend"
          subtitle="If supplier hikes and material surcharges hit your margin, composition analysis is leverage—not another dashboard."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 lg:mt-10 max-w-2xl mx-auto">
          <p className={`text-lg lg:text-xl font-light text-ink leading-relaxed text-center ${urbanist.className}`}>
            Line-by-line alloy math on the invoices you already pay. Rejection-ready numbers before
            AP clears—and timing to lock when indices move on your grades.
          </p>
          <ul className="mt-8 space-y-4 max-w-lg mx-auto">
            {POINTS.map((point) => (
              <li key={point} className="flex gap-3 text-sm lg:text-base text-light leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
