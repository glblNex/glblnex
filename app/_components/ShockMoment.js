'use client'

import React from 'react'
import Link from 'next/link'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import MainButton from './MainButton'

const COMPOSITION = [
  { metal: 'Aluminum', share: '97.0%', move: '+8.2%', note: 'Primary driver' },
  { metal: 'Magnesium', share: '1.0%', move: '−3.1%', note: 'Actually down' },
  { metal: 'Silicon', share: '0.6%', move: '+1.4%', note: 'Minor' },
  { metal: 'Other', share: '1.4%', move: '+0.8%', note: 'Minor' },
]

export default function ShockMoment() {
  return (
    <section id="proof" className="w-full scroll-mt-24">
      <Reveal>
        <SectionHeading
          eyebrow="One example"
          title="Supplier asks 12%. The metals say 4.2%."
          subtitle="We decompose the grade on your invoice, hand you the counter, and flag when to lock before the next move."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 lg:mt-10 border-y border-line bg-white">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2 p-7 lg:p-10 border-b lg:border-b-0 lg:border-r border-line bg-bg2/40 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-[0.18em] text-light font-medium mb-5">
                Supplier claim
              </p>
              <p className={`text-xl lg:text-2xl font-light text-ink leading-snug ${urbanist.className}`}>
                &ldquo;Aluminum is up. We need a <span className="text-highlight font-medium">12%</span> price
                increase on your 6061-T6 brackets.&rdquo;
              </p>
              <p className="mt-6 text-sm text-light leading-relaxed">
                Without grade-level composition, procurement pays the headline. We deliver the
                justified number before AP clears the invoice.
              </p>
            </div>

            <div className="lg:col-span-3 p-7 lg:p-10">
              <p className="text-[10px] uppercase tracking-[0.18em] text-highlight font-medium mb-5">
                Composition · 6061-T6
              </p>

              <div className="space-y-2 mb-5">
                {COMPOSITION.map((c) => (
                  <div
                    key={c.metal}
                    className="flex items-center justify-between gap-4 border-b border-line last:border-b-0 py-2.5"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-sm font-medium text-ink w-20 shrink-0">{c.metal}</span>
                      <span className="text-xs text-light">{c.share} of grade</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 text-right">
                      <span
                        className={`text-sm tabular-nums font-medium ${
                          c.move.startsWith('−') ? 'text-success' : 'text-ink'
                        }`}
                      >
                        {c.move}
                      </span>
                      <span className="text-[10px] text-light w-16">{c.note}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6 lg:gap-8 pt-2">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-light">Justified increase</p>
                  <p className={`mt-2 text-3xl lg:text-4xl font-light text-highlight tabular-nums ${urbanist.className}`}>
                    +4.2%
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-light">Your counter</p>
                  <p className={`mt-2 text-3xl lg:text-4xl font-light text-ink tabular-nums ${urbanist.className}`}>
                    5%
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm text-light leading-relaxed max-w-xl">
                Aluminum is 97% of this grade. Magnesium is actually down. Reject the blanket 12%.
                Accept 5%—and lock the rest of the year before indices climb again.
              </p>
            </div>
          </div>

          <div className="border-t border-line px-7 lg:px-10 py-6 lg:py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-bg2/30">
            <p className={`text-base lg:text-lg font-light text-ink leading-snug max-w-xl ${urbanist.className}`}>
              Negotiate with math. Hedge when the metals move—not when the invoice does.
            </p>
            <Link href="/started" className="shrink-0">
              <MainButton btn_txt="Send us a supplier invoice" className="!text-xs sm:!text-sm !px-4 sm:!px-6" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
