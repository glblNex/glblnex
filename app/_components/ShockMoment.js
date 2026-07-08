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
          eyebrow="Clarity under pressure"
          title="The question every leadership team eventually asks"
          subtitle="globalNex is built for the moment when precision matters more than volume. One question. One number. Absolute composure."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 lg:mt-10 rounded-2xl border border-line overflow-hidden bg-white shadow-[0_24px_70px_-36px_rgba(10,10,10,0.22)]">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2 p-7 lg:p-10 border-b lg:border-b-0 lg:border-r border-line bg-bg2/40 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-[0.18em] text-light font-medium mb-5">
                The question
              </p>
              <p className={`text-xl lg:text-2xl font-light text-ink leading-snug ${urbanist.className}`}>
                &ldquo;What does a magnesium export squeeze do to our 7075 and AZ31 spend?&rdquo;
              </p>
              <p className="mt-6 text-sm text-light leading-relaxed">
                Spot markets cannot answer it. Spreadsheets take weeks. globalNex answers it on the
                grades you actually buy.
              </p>
            </div>

            <div className="lg:col-span-3 p-7 lg:p-10">
              <p className="text-[10px] uppercase tracking-[0.18em] text-highlight font-medium mb-5">
                The globalNex answer
              </p>

              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="rounded-xl border border-line bg-bg2/50 p-5">
                  <p className="text-[10px] uppercase tracking-wide text-light">At-risk spend</p>
                  <p className={`mt-2 text-3xl lg:text-4xl font-light text-ink tabular-nums ${urbanist.className}`}>
                    $4.8M
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-bg2/50 p-5">
                  <p className="text-[10px] uppercase tracking-wide text-light">Cost impact</p>
                  <p className={`mt-2 text-3xl lg:text-4xl font-light text-highlight tabular-nums ${urbanist.className}`}>
                    +11.2%
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-bg2/50 p-5">
                  <p className="text-[10px] uppercase tracking-wide text-light">Margin effect</p>
                  <p className={`mt-2 text-3xl lg:text-4xl font-light text-ink tabular-nums ${urbanist.className}`}>
                    2.0 pts
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-bg2/50 p-5">
                  <p className="text-[10px] uppercase tracking-wide text-light">Lead time</p>
                  <p className={`mt-2 text-3xl lg:text-4xl font-light text-ink tabular-nums ${urbanist.className}`}>
                    +3.4 wks
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm text-light leading-relaxed max-w-xl">
                Alloy-grade precision. Board-ready figures. The standard of clarity your material
                decisions deserve.
              </p>
            </div>
          </div>

          <div className="border-t border-line px-7 lg:px-10 py-6 lg:py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white">
            <p className={`text-base lg:text-lg font-light text-ink leading-snug max-w-xl ${urbanist.className}`}>
              Material intelligence, refined to a single decision.
            </p>
            <Link href="/started" className="shrink-0">
              <MainButton btn_txt="Request access" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
