'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { urbanist } from '../_style/fonts'
import MainButton from './MainButton'
import SecondButton from './SecondButton'

const EASE = [0.22, 1, 0.36, 1]

const SHIFTS = [
  {
    k: 'Electrification',
    v: 'Every EV, grid, and turbine',
    d: 'The energy transition runs on physical metal. Demand for the grades behind it is compounding faster than supply can follow.',
  },
  {
    k: 'Geopolitics',
    v: 'Tariffs, export controls, sanctions',
    d: 'Where critical materials are mined and refined is now a lever of policy. The map of who controls supply is being redrawn.',
  },
  {
    k: 'Strategy',
    v: 'From financial trade to necessity',
    d: 'Commodities are no longer a pure financial exercise. Securing raw physical inputs is becoming a board-level priority.',
  },
]

const FRONTIER = [
  {
    n: '01',
    title: 'Trace the source',
    body: 'Precisely map where the critical materials inside each grade are actually sourced.',
  },
  {
    n: '02',
    title: 'Follow the refining',
    body: 'Understand how those materials are refined and where that capacity concentrates.',
  },
  {
    n: '03',
    title: 'Predict the shock',
    body: 'See supply shocks coming before they reach the manufacturing floor, not after.',
  },
]

export default function MarketThesis() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-ink text-white mt-8 lg:mt-14">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] gx-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-highlight/25 blur-[120px]"
        aria-hidden
      />

      <div className="relative px-6 lg:px-24 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Thesis statement */}
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-5">
              The thesis
            </p>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] ${urbanist.className}`}
            >
              Securing raw physical inputs is becoming more critical than writing code.
            </h2>
            <p className="mt-6 text-base lg:text-lg text-white/60 leading-relaxed max-w-xl">
              As the global economy electrifies and geopolitical tension holds, the metal beneath a
              product matters as much as the software inside it. Commodities are shifting from a
              financial exercise to a strategic necessity, and the tools built for the old world
              cannot see the new one.
            </p>
            <p
              className={`mt-6 text-lg lg:text-xl font-light text-white leading-snug max-w-xl ${urbanist.className}`}
            >
              This is a wide-open frontier. globalNex is building the layer that maps it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/started">
                <MainButton btn_txt="Join early access" />
              </Link>
              <a href="#demo">
                <SecondButton btn_txt="See it in action" darkBg />
              </a>
            </div>
          </div>

          {/* The shifts */}
          <div className="lg:col-span-6 lg:pt-2">
            <motion.ul
              className="space-y-3"
              initial={reduce ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
            >
              {SHIFTS.map((s) => (
                <motion.li
                  key={s.k}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:p-6 transition-colors duration-200 hover:border-highlight/50 hover:bg-white/[0.05]"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-highlight font-semibold">
                      {s.k}
                    </p>
                    <p
                      className={`text-sm lg:text-base font-light text-white/80 text-right ${urbanist.className}`}
                    >
                      {s.v}
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-white/55 leading-relaxed">{s.d}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* The frontier */}
        <div className="mt-14 lg:mt-20 border-t border-white/10 pt-10 lg:pt-14">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45 font-medium mb-8">
            The frontier globalNex is built for
          </p>
          <motion.div
            className="grid md:grid-cols-3 gap-5 lg:gap-6"
            initial={reduce ? false : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            {FRONTIER.map((f, i) => (
              <motion.div
                key={f.n}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                }}
                className="relative"
              >
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-7">
                  <span
                    className={`text-2xl font-light text-highlight tabular-nums ${urbanist.className}`}
                  >
                    {f.n}
                  </span>
                  <h3 className={`mt-4 text-lg lg:text-xl font-medium text-white ${urbanist.className}`}>
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{f.body}</p>
                </div>
                {i < FRONTIER.length - 1 ? (
                  <span
                    className="hidden md:block absolute top-1/2 -right-3 lg:-right-3.5 -translate-y-1/2 text-white/25 text-lg"
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
