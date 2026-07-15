'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal, { RevealGroup, RevealItem } from './Reveal'

const EASE = [0.22, 1, 0.36, 1]

const DEPLOYMENT = [
  {
    n: '01',
    title: 'Map your BOMs',
    body: 'We take your messy spreadsheets and ERP dumps and map every part to our metallurgical alloy database. You never clean the data, and you walk into talks with grade-level exposure ready.',
  },
  {
    n: '02',
    title: 'Build your scenario studio',
    body: 'Custom shock models tuned to your footprint and grades. When a squeeze hits, you already know the margin hit and which contracts to lock.',
  },
  {
    n: '03',
    title: 'Act as your strategic wing',
    body: 'Fractional cost engineers and commodity strategists turn risk into moves you execute: hedge, dual-source, redesign, or counter in the room.',
  },
]

const TRIGGER_EXAMPLES = [
  {
    event: 'Chinese magnesium export squeeze',
    grade: '7075-T6',
    impact: '2.5 pt gross-margin hit',
    action: 'Lock Q3/Q4 POs today; qualify India suppliers',
  },
  {
    event: 'Indonesian nickel export ban',
    grade: 'Inconel 718',
    impact: '$3.1M at-risk spend',
    action: 'Dual-source before Q3',
  },
]

export default function AdvisoryLayer() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] gx-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-highlight/20 blur-[100px]"
        aria-hidden
      />

      <div className="relative px-6 lg:px-24 py-16 lg:py-24">
        {/* Zero-friction ingestion */}
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-4">
              Zero-friction ingestion
            </p>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] ${urbanist.className}`}
            >
              Your BOMs are messy. Your ERP is a mess. You never touch it.
            </h2>
            <p className="mt-5 text-base lg:text-lg text-white/60 leading-relaxed max-w-2xl">
              Your supply chain finance team securely uploads raw ERP exports or messy Excel dumps.
              Our ingestion engine decomposes Tier 1 BOMs to elemental chemistry: part numbers mapped
              to grades, grades mapped to metals. You never clean the data.
            </p>
          </div>
        </Reveal>

        {/* Expert-in-the-Loop */}
        <Reveal delay={0.05}>
          <div className="mt-14 lg:mt-20 border-t border-white/10 pt-12 lg:pt-16">
            <SectionHeading
              eyebrow="Expert-in-the-Loop"
              title="A small, world-class team amplified by our engine and AI"
              subtitle="Fractional cost engineers, metallurgical analysts, and commodity strategists. Not customer-success reps showing you how to click buttons. We take a limited number of engagements."
              align="left"
              className="[&_h2]:text-white [&_p]:text-white/55 [&_p]:max-w-2xl [&_p]:text-left"
            />
          </div>
        </Reveal>

        <RevealGroup className="mt-8 lg:mt-10 grid md:grid-cols-3 gap-4 lg:gap-5">
          {DEPLOYMENT.map((d) => (
            <RevealItem key={d.n}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-7 hover:border-highlight/40 transition-colors duration-200">
                <span
                  className={`text-2xl font-light text-highlight tabular-nums ${urbanist.className}`}
                >
                  {d.n}
                </span>
                <h3 className={`mt-4 text-lg lg:text-xl font-medium text-white ${urbanist.className}`}>
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{d.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Trigger alerts */}
        <Reveal delay={0.08}>
          <div className="mt-14 lg:mt-20 border-t border-white/10 pt-12 lg:pt-16">
            <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-4">
              Trigger alerts
            </p>
            <h3
              className={`text-2xl sm:text-3xl lg:text-4xl font-light leading-snug max-w-3xl ${urbanist.className}`}
            >
              Grade-matched exposure and the move, before your team finishes their first coffee.
            </h3>
            <p className="mt-4 text-sm lg:text-base text-white/55 leading-relaxed max-w-2xl">
              We connect macro disruptions directly to the chemical grades in your spend, not generic
              market headlines. Export bans, production cuts, smelter outages: run through your mapped
              BOM instantly, then redirect, dual-source, or lock contracts while competitors are still
              reading the news.
            </p>

            <motion.div
              className="mt-8 grid md:grid-cols-2 gap-4"
              initial={reduce ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              {TRIGGER_EXAMPLES.map((t) => (
                <motion.div
                  key={t.event}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
                  }}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-5 lg:p-6"
                >
                  <p className="text-[10px] uppercase tracking-[0.14em] text-highlight font-semibold">
                    {t.event}
                  </p>
                  <p className={`mt-3 text-base font-medium text-white ${urbanist.className}`}>
                    Your {t.grade} spend
                  </p>
                  <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-white/45">Impact</p>
                      <p className={`text-xl font-light text-white tabular-nums ${urbanist.className}`}>
                        {t.impact}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-white/45">Move</p>
                      <p className="text-sm text-white/70">{t.action}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
