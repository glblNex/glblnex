'use client'

import React from 'react'
import { FaCheck, FaMinus } from 'react-icons/fa6'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const COLUMNS = [
  { id: 'gx', label: 'globalNex', highlight: true },
  { id: 'feeds', label: 'Commodity price feeds' },
  { id: 'sheets', label: 'Spreadsheets & analysts' },
  { id: 'generic', label: 'Generic supply-chain tools' },
]

const ROWS = [
  {
    capability: 'Alloy-grade exposure, not just spot commodity',
    values: { gx: 'full', feeds: 'none', sheets: 'partial', generic: 'none' },
  },
  {
    capability: 'Models what happens next, not just what happened',
    values: { gx: 'full', feeds: 'none', sheets: 'partial', generic: 'partial' },
  },
  {
    capability: 'Dollar cost and margin impact on your own BOM',
    values: { gx: 'full', feeds: 'none', sheets: 'partial', generic: 'none' },
  },
  {
    capability: 'Single-country and geo-concentration exposure',
    values: { gx: 'full', feeds: 'none', sheets: 'none', generic: 'full' },
  },
  {
    capability: 'Answers in seconds, not weeks of analyst work',
    values: { gx: 'full', feeds: 'partial', sheets: 'none', generic: 'partial' },
  },
  {
    capability: 'One board-ready risk score and exposure figure',
    values: { gx: 'full', feeds: 'none', sheets: 'none', generic: 'partial' },
  },
]

function Mark({ level }) {
  if (level === 'full') {
    return (
      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-highlight text-white">
        <FaCheck size={11} />
      </span>
    )
  }
  if (level === 'partial') {
    return (
      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full border border-warning/40 text-warning">
        <FaMinus size={11} />
      </span>
    )
  }
  return (
    <span className="inline-flex items-center justify-center h-6 w-6 text-muted" aria-label="Not available">
      <span className="h-0.5 w-3 rounded-full bg-line" />
    </span>
  )
}

export default function WhyGlobalNex() {
  return (
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="Why globalNex"
          title="The only tool built to price your metal risk in dollars"
          subtitle="Your teams already have price terminals, spreadsheets, and supplier trackers. None of them tell you what a shock does to the exact alloys you buy, or to your margin. globalNex does."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 lg:mt-10 rounded-2xl border border-line bg-white overflow-hidden shadow-[0_20px_60px_-34px_rgba(10,10,10,0.25)]">
          <div className="overflow-x-auto gx-scrollbar">
            <table className="w-full border-collapse min-w-[720px]">
              <thead>
                <tr>
                  <th className="text-left p-4 lg:p-5 w-[34%] align-bottom">
                    <span className="text-xs uppercase tracking-wider text-light font-medium">
                      Capability
                    </span>
                  </th>
                  {COLUMNS.map((col) => (
                    <th
                      key={col.id}
                      className={`p-4 lg:p-5 text-center align-bottom ${
                        col.highlight ? 'bg-highlightSoft/60' : ''
                      }`}
                    >
                      <span
                        className={`text-sm lg:text-base font-semibold leading-tight block ${
                          col.highlight ? 'text-highlight' : 'text-ink'
                        } ${urbanist.className}`}
                      >
                        {col.label}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.capability} className="border-t border-line">
                    <td className="p-4 lg:p-5 text-sm text-ink leading-snug">
                      {row.capability}
                    </td>
                    {COLUMNS.map((col) => (
                      <td
                        key={col.id}
                        className={`p-4 lg:p-5 text-center ${
                          col.highlight ? 'bg-highlightSoft/60' : ''
                        }`}
                      >
                        <span className="inline-flex justify-center">
                          <Mark level={row.values[col.id]} />
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-4 lg:px-5 py-3 border-t border-line bg-bg2 text-xs text-light">
            <span className="flex items-center gap-2">
              <Mark level="full" /> Built for it
            </span>
            <span className="flex items-center gap-2">
              <Mark level="partial" /> Partial or manual
            </span>
            <span className="flex items-center gap-2">
              <Mark level="none" /> Not covered
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
