'use client'

import React from 'react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const STEPS = [
  {
    n: '01',
    title: 'Analyze composition',
    body: 'We map your invoices and BOMs to alloy chemistry—what each part is actually made of, by weight.',
  },
  {
    n: '02',
    title: 'Negotiate pricing',
    body: 'You get the justified cost delta and a defensible counter when suppliers ask for more than the metals warrant.',
  },
  {
    n: '03',
    title: 'Hedge increases',
    body: 'When indices move on grades you buy, we flag impact early so you can lock, hedge, or dual-source before the hike lands.',
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="How it works"
          title="Composition math that puts money back"
          subtitle="Custom analysis of your raw materials—then the moves that defend margin."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <ol className="mt-10 lg:mt-12 grid md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto list-none p-0">
          {STEPS.map((step) => (
            <li key={step.n} className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-3">
                {step.n}
              </p>
              <h3 className={`text-xl lg:text-2xl font-medium text-ink leading-tight ${urbanist.className}`}>
                {step.title}
              </h3>
              <p className="mt-3 text-sm lg:text-base text-light leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
