'use client'

import React from 'react'
import Link from 'next/link'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const BENEFITS = [
  {
    id: 'procurement',
    role: 'Procurement & Sourcing',
    short: 'Procurement',
    headline: 'Reject inflated surcharges before AP pays',
    outcome: 'Line-by-line alloy math on every invoice. Rejection sheet ready before the payment clears.',
    points: [
      'True cost delta on the grade, not the commodity index',
      'Counter receipt when the supplier asks for 12% and true cost is 4.2%',
    ],
  },
  {
    id: 'pe',
    role: 'Private Equity & M&A',
    short: 'PE / M&A',
    headline: 'Unpriced material risk before you close',
    outcome: 'Messy purchase data mapped to chemistry. Quantified geopolitical exposure for diligence or post-close dual-sourcing.',
    points: [
      'Material exposure report scoped to the target\'s SKUs',
      'Hidden supply chain liability surfaced before enterprise value is set',
    ],
  },
]

export default function BenefitsSection() {
  return (
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="Who we work with"
          title="Built for the buyers who feel the dollars"
          subtitle="Procurement teams defending margin on every invoice. Deal teams pricing material risk before close."
          align="center"
        />
      </Reveal>

      <div className="mt-8 lg:mt-10 grid sm:grid-cols-2 gap-4 lg:gap-5 max-w-4xl mx-auto">
        {BENEFITS.map((b) => (
          <div
            key={b.id}
            className="rounded-2xl border border-line bg-white overflow-hidden shadow-[0_20px_60px_-32px_rgba(10,10,10,0.25)] p-6 lg:p-8"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-highlight font-medium mb-3">
              {b.role}
            </p>
            <h3 className={`text-xl lg:text-2xl font-medium text-ink leading-tight ${urbanist.className}`}>
              {b.headline}
            </h3>
            <p className={`mt-4 text-base font-light text-highlight ${urbanist.className}`}>
              {b.outcome}
            </p>
            <ul className="mt-5 space-y-3">
              {b.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-light leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
