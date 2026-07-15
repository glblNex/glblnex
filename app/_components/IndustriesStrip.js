'use client'

import React from 'react'
import { urbanist } from '../_style/fonts'
import Reveal from './Reveal'

const INDUSTRIES = [
  'Defense & aerospace',
  'Automotive & EV',
  'Industrial manufacturing',
  'Hardware & mobility',
  'Medical devices',
  'Private equity & M&A',
]

export default function IndustriesStrip() {
  return (
    <section className="w-full">
      <Reveal>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-light font-medium mb-6">
            Built for teams where metal spend, supply continuity, or deal risk is material
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-4">
            {INDUSTRIES.map((industry) => (
              <li
                key={industry}
                className={`text-sm sm:text-base font-light text-ink/75 px-4 py-2 rounded-full border border-line bg-white ${urbanist.className}`}
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
