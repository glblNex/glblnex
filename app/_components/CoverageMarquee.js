'use client'

import React from 'react'
import { motion } from 'motion/react'
import { urbanist } from '../_style/fonts'
import { COVERAGE } from '../_data/metals'

function MarqueeRow({ items, duration = '38s' }) {
  const trackItems = Array(3).fill(items).flat()

  const Track = ({ trackId, hidden }) => (
    <div className="flex shrink-0 items-center whitespace-nowrap" aria-hidden={hidden || undefined}>
      {trackItems.map((label, i) => (
        <span
          key={`${trackId}-${label}-${i}`}
          className={`inline-flex items-center shrink-0 ${urbanist.className}`}
        >
          <span className="mx-3 sm:mx-4 px-4 py-2 rounded-full border border-line bg-white text-sm sm:text-base lg:text-lg font-light text-ink/80 shadow-sm">
            {label}
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="gx-fade-mask overflow-hidden gx-marquee-wrap">
      <div
        className="gx-marquee-inner flex w-max"
        style={{ '--gx-marquee-duration': duration }}
      >
        <Track trackId="a" />
        <Track trackId="b" hidden />
      </div>
    </div>
  )
}

export default function CoverageMarquee() {
  return (
    <section className="relative py-10 lg:py-14 border-y border-line bg-bg2 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,91,151,0.08), transparent 70%)',
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45 }}
        className="relative text-center text-xs uppercase tracking-[0.2em] text-light font-medium mb-8"
      >
        Metals and alloys covered
      </motion.p>

      <div className="relative">
        <MarqueeRow items={COVERAGE} duration="36s" />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className={`relative mt-8 text-center text-sm text-light max-w-2xl mx-auto px-5 ${urbanist.className}`}
      >
        From aerospace grades to superalloys, globalNex decomposes every alloy into the metals
        that actually drive your supply risk.
      </motion.p>
    </section>
  )
}
