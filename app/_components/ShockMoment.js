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
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="The painkiller"
          title="Win the next price negotiation before it starts"
          subtitle="When a supplier claims aluminum is up and demands +12%, globalNex hands you the exact alloy breakdown, and the number you counter with."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 lg:mt-10 rounded-2xl border border-line overflow-hidden bg-white shadow-[0_24px_70px_-36px_rgba(10,10,10,0.22)]">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2 p-7 lg:p-10 border-b lg:border-b-0 lg:border-r border-line bg-bg2/40 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-[0.18em] text-light font-medium mb-5">
                Supplier claim
              </p>
              <p className={`text-xl lg:text-2xl font-light text-ink leading-snug ${urbanist.className}`}>
                &ldquo;Aluminum is up. We need a <span className="text-highlight font-medium">12%</span> price
                increase on your 6061-T6.&rdquo;
              </p>
              <p className="mt-6 text-sm text-light leading-relaxed">
                Without alloy-grade decomposition, you accept the hike or spend weeks in spreadsheets.
                With globalNex, you counter in the room.
              </p>
            </div>

            <div className="lg:col-span-3 p-7 lg:p-10">
              <p className="text-[10px] uppercase tracking-[0.18em] text-highlight font-medium mb-5">
                Your counter receipt for 6061-T6
              </p>

              <div className="space-y-2 mb-5">
                {COMPOSITION.map((c) => (
                  <div
                    key={c.metal}
                    className="flex items-center justify-between gap-4 rounded-lg border border-line bg-bg2/40 px-4 py-2.5"
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

              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="rounded-xl border border-line bg-bg2/50 p-5">
                  <p className="text-[10px] uppercase tracking-wide text-light">True cost increase</p>
                  <p className={`mt-2 text-3xl lg:text-4xl font-light text-highlight tabular-nums ${urbanist.className}`}>
                    +4.2%
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-bg2/50 p-5">
                  <p className="text-[10px] uppercase tracking-wide text-light">Your counter</p>
                  <p className={`mt-2 text-3xl lg:text-4xl font-light text-ink tabular-nums ${urbanist.className}`}>
                    5%
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm text-light leading-relaxed max-w-xl">
                Aluminum is 97% of this grade. Magnesium is actually down. Their real cost rose
                4.2%. You accept 5%. One interaction pays for the year.
              </p>
            </div>
          </div>

          <div className="border-t border-line px-7 lg:px-10 py-6 lg:py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white">
            <p className={`text-base lg:text-lg font-light text-ink leading-snug max-w-xl ${urbanist.className}`}>
              We hand you the number and the move, not the dashboard.
            </p>
            <Link href="/started" className="shrink-0">
              <MainButton btn_txt="Request an assessment" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
