'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { urbanist } from '../_style/fonts'
import { COVERAGE } from '../_data/metals'

function MarqueeTrack({ items, direction = 'left', duration = 38, className = '' }) {
  const trackRef = useRef(null)
  const [loopWidth, setLoopWidth] = useState(0)
  const reduceMotion = useReducedMotion()
  const doubled = [...items, ...items]

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const measure = () => setLoopWidth(el.scrollWidth / 2)
    measure()

    const ro = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(measure)
      : null
    ro?.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro?.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [items])

  const from = direction === 'left' ? 0 : -loopWidth
  const to = direction === 'left' ? -loopWidth : 0

  return (
    <div className={`gx-fade-mask overflow-hidden ${className}`}>
      <motion.div
        ref={trackRef}
        className="flex w-max whitespace-nowrap group-hover:[animation-play-state:paused]"
        animate={reduceMotion || !loopWidth ? { x: 0 } : { x: [from, to] }}
        transition={
          reduceMotion || !loopWidth
            ? undefined
            : { duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }
        }
      >
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className={`inline-flex items-center shrink-0 text-base sm:text-lg lg:text-xl font-light text-ink/75 hover:text-highlight transition-colors duration-200 ${urbanist.className}`}
          >
            <span className="mx-5 sm:mx-7">{label}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-highlight/50" aria-hidden />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function CoverageMarquee() {
  const rowA = COVERAGE
  const rowB = [...COVERAGE].reverse()

  return (
    <section className="py-10 lg:py-12 border-y border-line bg-bg2 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-light font-medium mb-7">
        Metals and alloys covered
      </p>

      <div className="space-y-4 group">
        <MarqueeTrack items={rowA} direction="left" duration={42} />
        <MarqueeTrack items={rowB} direction="right" duration={36} />
      </div>

      <p className={`mt-6 text-center text-sm text-light max-w-2xl mx-auto px-5 ${urbanist.className}`}>
        From aerospace grades to superalloys, globalNex decomposes every alloy into the metals
        that actually drive your supply risk.
      </p>
    </section>
  )
}
