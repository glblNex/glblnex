'use client'

import React from 'react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const COLUMNS = [
  {
    id: 'gx',
    label: 'globalNex',
    blurb: 'Alloy-grade scenario layer',
    highlight: true,
  },
  {
    id: 'feeds',
    label: 'Price terminals & feeds',
    blurb: 'LME, Bloomberg, Reuters',
  },
  {
    id: 'sheets',
    label: 'Spreadsheets & analysts',
    blurb: 'Custom models, research',
  },
  {
    id: 'generic',
    label: 'Supply-chain platforms',
    blurb: 'Supplier risk, multi-tier maps',
  },
]

// Levels: native | strong | limited | not
// Honest: globalNex is not best at everything; it is purpose-built for alloy → shock → $
const ROWS = [
  {
    angle: 'Unit of analysis',
    detail: 'What you actually model',
    values: {
      gx: { level: 'native', text: 'Alloy grades on your BOM' },
      feeds: { level: 'strong', text: 'Spot metals & contracts' },
      sheets: { level: 'limited', text: 'Whatever you build by hand' },
      generic: { level: 'limited', text: 'Suppliers & shipments' },
    },
  },
  {
    angle: 'Composition awareness',
    detail: 'Does the tool know 7075 ≠ aluminum?',
    values: {
      gx: { level: 'native', text: 'Decomposes each grade to metals' },
      feeds: { level: 'not', text: 'Commodity symbols only' },
      sheets: { level: 'limited', text: 'If an analyst encodes it' },
      generic: { level: 'not', text: 'Not metal-composition native' },
    },
  },
  {
    angle: 'Forward scenarios',
    detail: 'Price cuts, production shocks, export bans',
    values: {
      gx: { level: 'native', text: 'Built for shock → impact' },
      feeds: { level: 'limited', text: 'History & live marks' },
      sheets: { level: 'strong', text: 'Flexible, if you maintain it' },
      generic: { level: 'limited', text: 'Disruption alerts, not alloy $' },
    },
  },
  {
    angle: 'Your cost & margin',
    detail: 'Dollar impact on spend you own',
    values: {
      gx: { level: 'native', text: 'Cost, at-risk spend, margin pts' },
      feeds: { level: 'not', text: 'Market price, not your P&L' },
      sheets: { level: 'strong', text: 'Possible with weeks of work' },
      generic: { level: 'limited', text: 'Rarely alloy-level dollars' },
    },
  },
  {
    angle: 'Live market coverage',
    detail: 'Breadth and freshness of price data',
    values: {
      gx: { level: 'limited', text: 'Focused inputs for scenarios' },
      feeds: { level: 'native', text: 'Deep, real-time markets' },
      sheets: { level: 'limited', text: 'Depends on what you paste in' },
      generic: { level: 'not', text: 'Not a price terminal' },
    },
  },
  {
    angle: 'Geo & concentration',
    detail: 'Where supply is concentrated',
    values: {
      gx: { level: 'strong', text: 'Metal origins behind each grade' },
      feeds: { level: 'not', text: 'Outside the product' },
      sheets: { level: 'limited', text: 'Manual research' },
      generic: { level: 'native', text: 'Supplier & country risk maps' },
    },
  },
  {
    angle: 'Time to a decision',
    detail: 'From question to usable answer',
    values: {
      gx: { level: 'native', text: 'Seconds on a chosen grade' },
      feeds: { level: 'strong', text: 'Instant prices, no BOM link' },
      sheets: { level: 'not', text: 'Days to weeks typical' },
      generic: { level: 'limited', text: 'Fast alerts, slow translation' },
    },
  },
  {
    angle: 'Board-ready synthesis',
    detail: 'One figure leadership can act on',
    values: {
      gx: { level: 'native', text: 'Risk score + exposure in one view' },
      feeds: { level: 'not', text: 'Raw market data' },
      sheets: { level: 'limited', text: 'Slide deck after the model' },
      generic: { level: 'limited', text: 'Risk scores, not alloy $' },
    },
  },
]

const LEVEL_STYLES = {
  native: {
    label: 'Native',
    className: 'bg-highlight text-white border-highlight',
  },
  strong: {
    label: 'Strong',
    className: 'bg-highlightSoft text-highlight border-highlight/20',
  },
  limited: {
    label: 'Limited',
    className: 'bg-bg2 text-light border-line',
  },
  not: {
    label: 'Not built for',
    className: 'bg-white text-muted border-line',
  },
}

function Cell({ value, highlight }) {
  const style = LEVEL_STYLES[value.level]
  return (
    <div className={`h-full flex flex-col items-start gap-2 ${highlight ? '' : ''}`}>
      <span
        className={`inline-flex text-[9px] uppercase tracking-[0.12em] font-semibold px-2 py-0.5 rounded border ${style.className}`}
      >
        {style.label}
      </span>
      <p className="text-[12px] lg:text-[13px] text-ink leading-snug">{value.text}</p>
    </div>
  )
}

export default function WhyGlobalNex() {
  return (
    <section className="w-full">
      <Reveal>
        <SectionHeading
          eyebrow="Where globalNex fits"
          title="Not a replacement for everything you use. The layer those tools leave open."
          subtitle="Price feeds excel at markets. Spreadsheets excel at custom work. Supply-chain platforms excel at suppliers. globalNex is built for the gap between them: what a shock does to the alloys on your BOM, in dollars."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 lg:mt-10 rounded-2xl border border-line bg-white overflow-hidden shadow-[0_20px_60px_-34px_rgba(10,10,10,0.22)]">
          <div className="overflow-x-auto gx-scrollbar">
            <table className="w-full border-collapse min-w-[860px]">
              <thead>
                <tr className="border-b border-line">
                  <th className="text-left p-4 lg:p-5 w-[22%] align-bottom bg-bg2/40">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-light font-medium">
                      Angle
                    </span>
                  </th>
                  {COLUMNS.map((col) => (
                    <th
                      key={col.id}
                      className={`p-4 lg:p-5 text-left align-bottom w-[19.5%] ${
                        col.highlight ? 'bg-highlightSoft/50' : 'bg-bg2/40'
                      }`}
                    >
                      <span
                        className={`text-sm font-semibold leading-tight block ${
                          col.highlight ? 'text-highlight' : 'text-ink'
                        } ${urbanist.className}`}
                      >
                        {col.label}
                      </span>
                      <span className="mt-1 block text-[11px] font-normal text-light leading-snug">
                        {col.blurb}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.angle} className="border-t border-line align-top">
                    <td className="p-4 lg:p-5 bg-white">
                      <p className={`text-sm font-medium text-ink ${urbanist.className}`}>
                        {row.angle}
                      </p>
                      <p className="mt-1 text-[11px] text-light leading-snug">{row.detail}</p>
                    </td>
                    {COLUMNS.map((col) => (
                      <td
                        key={col.id}
                        className={`p-4 lg:p-5 ${
                          col.highlight ? 'bg-highlightSoft/30' : 'bg-white'
                        }`}
                      >
                        <Cell value={row.values[col.id]} highlight={col.highlight} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 lg:px-5 py-3.5 border-t border-line bg-bg2">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-light">
              {Object.entries(LEVEL_STYLES).map(([key, style]) => (
                <span key={key} className="flex items-center gap-1.5">
                  <span
                    className={`inline-flex text-[8px] uppercase tracking-[0.1em] font-semibold px-1.5 py-0.5 rounded border ${style.className}`}
                  >
                    {style.label}
                  </span>
                </span>
              ))}
            </div>
            <p className="text-[11px] text-light leading-snug max-w-md sm:text-right">
              Use feeds for markets. Use platforms for suppliers. Use globalNex when the question is
              alloy-grade impact on your spend.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
