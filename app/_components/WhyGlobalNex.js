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
    label: 'Price & forecast providers',
    blurb: 'Fastmarkets, CRU, MetalMiner, Argus',
  },
  {
    id: 'scrisk',
    label: 'Supply-chain risk platforms',
    blurb: 'Everstream, Interos, Resilinc',
  },
  {
    id: 'sheets',
    label: 'In-house spreadsheets',
    blurb: 'Analysts & custom models',
  },
]

const ROWS = [
  {
    angle: 'Alloy-grade composition',
    detail: 'Decompose 7075-T6 into its metals',
    values: {
      gx: { level: 'native', text: 'Every grade broken to constituent metals' },
      feeds: { level: 'limited', text: 'Metal-level; should-cost on quotes' },
      scrisk: { level: 'not', text: 'Supplier and part level, not chemistry' },
      sheets: { level: 'limited', text: 'Only if an analyst encodes it' },
    },
  },
  {
    angle: 'Shock to grade & BOM dollars',
    detail: 'Dollar impact on the spend you own',
    values: {
      gx: { level: 'native', text: 'Cost, at-risk spend, and margin by grade' },
      feeds: { level: 'strong', text: 'Should-cost and exposure by metal' },
      scrisk: { level: 'limited', text: 'Disruption flags, rarely alloy dollars' },
      sheets: { level: 'strong', text: 'Achievable with sustained analyst effort' },
    },
  },
  {
    angle: 'Interactive grade scenarios',
    detail: 'Price moves, output cuts, export bans',
    values: {
      gx: { level: 'native', text: 'Instant shock modeling on the grade you buy' },
      feeds: { level: 'strong', text: 'Disruption modeling at metal level' },
      scrisk: { level: 'limited', text: 'Event alerts, not priced scenarios' },
      sheets: { level: 'strong', text: 'Flexible if you maintain the model' },
    },
  },
  {
    angle: 'Geo exposure behind the grade',
    detail: 'Where each alloy input is concentrated',
    values: {
      gx: { level: 'native', text: 'Metal origins mapped to every grade' },
      feeds: { level: 'limited', text: 'Production and cost site data' },
      scrisk: { level: 'strong', text: 'Supplier and country risk maps' },
      sheets: { level: 'limited', text: 'Manual research and upkeep' },
    },
  },
  {
    angle: 'Seconds to a board-ready figure',
    detail: 'Question to decision-ready answer',
    values: {
      gx: { level: 'native', text: 'One risk score and exposure in seconds' },
      feeds: { level: 'strong', text: 'Fast prices, not tied to your BOM' },
      scrisk: { level: 'strong', text: 'Fast alerts, slower to dollar impact' },
      sheets: { level: 'not', text: 'Days to weeks per question' },
    },
  },
  {
    angle: 'One signal, not ten dashboards',
    detail: 'Clarity over volume of data',
    values: {
      gx: { level: 'native', text: 'One number you act on per grade' },
      feeds: { level: 'limited', text: 'Broad market feeds and charts' },
      scrisk: { level: 'limited', text: 'Multi-domain risk scores' },
      sheets: { level: 'not', text: 'Spreadsheet sprawl' },
    },
  },
  {
    angle: 'Works with your existing stack',
    detail: 'Market data and supplier context together',
    values: {
      gx: { level: 'strong', text: 'Scenarios powered by your market and supplier context' },
      feeds: { level: 'native', text: 'Deep market data and forecasts' },
      scrisk: { level: 'native', text: 'Multi-tier supplier mapping' },
      sheets: { level: 'limited', text: 'Manual imports and upkeep' },
    },
  },
]

const LEVEL_STYLES = {
  native: { label: 'Built for it', gxLabel: 'Purpose-built', className: 'bg-highlight text-white border-highlight' },
  strong: { label: 'Strong', gxLabel: 'Strong', className: 'bg-highlightSoft text-highlight border-highlight/20' },
  limited: { label: 'Limited', gxLabel: 'Limited', className: 'bg-bg2 text-light border-line' },
  not: { label: 'Not built for', gxLabel: 'Not built for', className: 'bg-white text-muted border-line' },
}

function Cell({ value, isGlobalNex }) {
  const style = LEVEL_STYLES[value.level]
  const badgeLabel = isGlobalNex && value.level === 'native' ? style.gxLabel : style.label
  return (
    <div className="h-full flex flex-col items-start gap-2">
      <span
        className={`inline-flex text-[9px] uppercase tracking-[0.1em] font-semibold px-2 py-0.5 rounded border ${style.className}`}
      >
        {badgeLabel}
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
          title="How globalNex compares on the decisions that matter"
          subtitle="Price and forecast providers excel at markets. Supply-chain platforms excel at suppliers. globalNex is built for the layer between them: what a shock does to the exact alloy grades on your BOM, in dollars."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 lg:mt-10 rounded-2xl border border-line bg-white overflow-hidden shadow-[0_20px_60px_-34px_rgba(10,10,10,0.22)]">
          <div className="overflow-x-auto gx-scrollbar">
            <table className="w-full border-collapse min-w-[880px]">
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
                        <Cell value={row.values[col.id]} isGlobalNex={col.id === 'gx'} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 lg:px-5 py-3.5 border-t border-line bg-bg2">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex text-[8px] uppercase tracking-[0.1em] font-semibold px-1.5 py-0.5 rounded border bg-highlight text-white border-highlight">
                Purpose-built
              </span>
              <span className="inline-flex text-[8px] uppercase tracking-[0.1em] font-semibold px-1.5 py-0.5 rounded border bg-highlightSoft text-highlight border-highlight/20">
                Strong
              </span>
              <span className="inline-flex text-[8px] uppercase tracking-[0.1em] font-semibold px-1.5 py-0.5 rounded border bg-bg2 text-light border-line">
                Limited
              </span>
              <span className="inline-flex text-[8px] uppercase tracking-[0.1em] font-semibold px-1.5 py-0.5 rounded border bg-white text-muted border-line">
                Not built for
              </span>
            </div>
            <p className="text-[11px] text-light leading-snug max-w-md sm:text-right">
              Use your price and supplier tools for markets and vendors. Use globalNex when the
              question is alloy-grade impact on your spend.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
