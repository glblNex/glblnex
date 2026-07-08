'use client'

import React from 'react'
import Link from 'next/link'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import MainButton from './MainButton'

export default function ShockMoment() {
  return (
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="The moment that matters"
          title="Your board asks one question. You do not have the answer."
          subtitle="That is the gap globalNex closes. Not another dashboard. The number that ends the meeting."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 lg:mt-10 rounded-2xl border border-line overflow-hidden bg-white shadow-[0_24px_70px_-36px_rgba(10,10,10,0.3)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-7 lg:p-10 border-b lg:border-b-0 lg:border-r border-line bg-bg2/50">
              <p className="text-[10px] uppercase tracking-[0.18em] text-light font-medium mb-4">
                Without globalNex
              </p>
              <p className={`text-xl lg:text-2xl font-medium text-ink leading-snug ${urbanist.className}`}>
                &ldquo;What does a China magnesium export squeeze do to our 7075 and AZ31 spend?&rdquo;
              </p>
              <ul className="mt-6 space-y-3 text-sm text-light leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-error shrink-0" />
                  <span>Two weeks of analyst spreadsheets, still incomplete</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-error shrink-0" />
                  <span>Spot prices for magnesium. Nothing for your actual grades</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-error shrink-0" />
                  <span>You walk back into the room without a dollar figure</span>
                </li>
              </ul>
              <p className="mt-8 text-sm font-medium text-error">
                That silence is your exposure.
              </p>
            </div>

            <div className="p-7 lg:p-10 bg-white">
              <p className="text-[10px] uppercase tracking-[0.18em] text-highlight font-medium mb-4">
                With globalNex
              </p>
              <p className={`text-xl lg:text-2xl font-medium text-ink leading-snug ${urbanist.className}`}>
                Same question. Answered in seconds.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-bg2 p-4">
                  <p className="text-[10px] uppercase tracking-wide text-light">At-risk spend</p>
                  <p className={`mt-1 text-2xl lg:text-3xl font-light text-error tabular-nums ${urbanist.className}`}>
                    $4.8M
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-bg2 p-4">
                  <p className="text-[10px] uppercase tracking-wide text-light">Cost impact</p>
                  <p className={`mt-1 text-2xl lg:text-3xl font-light text-highlight tabular-nums ${urbanist.className}`}>
                    +11.2%
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-bg2 p-4">
                  <p className="text-[10px] uppercase tracking-wide text-light">Margin hit</p>
                  <p className={`mt-1 text-2xl lg:text-3xl font-light text-ink tabular-nums ${urbanist.className}`}>
                    2.0 pts
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-bg2 p-4">
                  <p className="text-[10px] uppercase tracking-wide text-light">Lead time</p>
                  <p className={`mt-1 text-2xl lg:text-3xl font-light text-ink tabular-nums ${urbanist.className}`}>
                    +3.4 wks
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm text-light leading-relaxed">
                On the exact grades you buy. Not the LME. Not a generic commodity index.
                Your BOM, your dollars, your decision.
              </p>
            </div>
          </div>

          <div className="border-t border-line bg-ink text-white px-7 lg:px-10 py-6 lg:py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className={`text-lg lg:text-xl font-light leading-snug max-w-2xl ${urbanist.className}`}>
              If you cannot answer that question today, you are flying blind on your largest material exposure.
            </p>
            <Link href="/started" className="shrink-0">
              <MainButton btn_txt="Get the answer" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
