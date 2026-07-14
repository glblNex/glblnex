'use client'

import React from 'react'
import { urbanist } from '../_style/fonts'
import { FAQ_ITEMS } from '../_data/faq'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function FaqSection() {
  return (
    <section id="faq" className="w-full scroll-mt-24">
      <Reveal>
        <SectionHeading
          eyebrow="Common questions"
          title="Outcomes, explained"
          subtitle="Definitive answers on engagements, data ingestion, supplier counters, and the Expert-in-the-Loop team."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 lg:mt-10 max-w-3xl mx-auto divide-y divide-line border-y border-line">
          {FAQ_ITEMS.map((item) => (
            <details key={item.id} id={item.id} className="group py-4 lg:py-5">
              <summary
                className={`cursor-pointer list-none flex items-start justify-between gap-4 text-base lg:text-lg font-medium text-ink leading-snug focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/30 rounded ${urbanist.className}`}
              >
                <span>{item.question}</span>
                <span
                  className="shrink-0 mt-0.5 text-highlight text-lg leading-none group-open:rotate-45 transition-transform duration-200"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm lg:text-base text-light leading-relaxed pr-6">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
