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

// Levels: native | strong | limited | not
// Honest stance: globalNex leads on alloy-grade composition modeling, and is
// deliberately behind on market-data depth, forecast track record, and
// supplier mapping, where established categories lead.
const ROWS = [
  {
    angle: 'Alloy-grade composition',
    detail: 'Decompose 7075-T6 into its metals',
    values: {
      gx: { level: 'native', text: 'Each grade broken to constituent metals' },
      feeds: { level: 'limited', text: 'Metal-level; should-cost on quotes' },
      scrisk: { level: 'not', text: 'Supplier and part level, not chemistry' },
      sheets: { level: 'limited', text: 'Only if an analyst encodes it' },
    },
  },
  {
    angle: 'Shock to grade & BOM cost',
    detail: 'Dollar impact on the spend you own',
    values: {
      gx: { level: 'native', text: 'Cost, at-risk spend, margin by grade' },
      feeds: { level: 'strong', text: 'Should-cost and cost exposure by metal' },
      scrisk: { level: 'limited', text: 'Disruption flags, rarely alloy dollars' },
      sheets: { level: 'strong', text: 'Achievable with sustained effort' },
    },
  },
  {
    angle: 'Forward scenarios',
    detail: 'Price moves, output cuts, export bans',
    values: {
      gx: { level: 'strong', text: 'Interactive shock modeling by grade' },
      feeds: { level: 'strong', text: 'Disruption modeling at metal level' },
      scrisk: { level: 'limited', text: 'Event alerts, not priced scenarios' },
      sheets: { level: 'strong', text: 'Flexible if you maintain the model' },
    },
  },
  {
    angle: 'Live market price data',
    detail: 'Breadth, freshness, accreditation',
    values: {
      gx: { level: 'limited', text: 'Focused inputs, not a price service' },
      feeds: { level: 'native', text: '1,500+ IOSCO-accredited prices' },
      scrisk: { level: 'not', text: 'Not a pricing product' },
      sheets: { level: 'limited', text: 'Whatever you license and paste in' },
    },
  },
  {
    angle: 'Forecast track record',
    detail: 'Validated accuracy over time',
    values: {
      gx: { level: 'limited', text: 'Model-based, early and unproven' },
      feeds: { level: 'native', text: 'Accredited forecasts, 90%+ claims' },
      scrisk: { level: 'limited', text: 'Event probability, not price' },
      sheets: { level: 'limited', text: 'Depends entirely on the modeler' },
    },
  },
  {
    angle: 'Geo & concentration',
    detail: 'Where supply is concentrated',
    values: {
      gx: { level: 'strong', text: 'Metal origins behind each grade' },
      feeds: { level: 'limited', text: 'Production and cost site data' },
      scrisk: { level: 'native', text: 'Multi-tier maps, single-source flags' },
      sheets: { level: 'limited', text: 'Manual research and upkeep' },
    },
  },
  {
    angle: 'Multi-tier supplier mapping',
    detail: 'Your actual suppliers, tier by tier',
    values: {
      gx: { level: 'not', text: 'We map metals, not your vendors' },
      feeds: { level: 'not', text: 'Outside their scope' },
      scrisk: { level: 'native', text: 'Down to part and site level' },
      sheets: { level: 'limited', text: 'Static, quickly out of date' },
    },
  },
  {
    angle: 'Time to a decision',
    detail: 'Question to board-ready answer',
    values: {
      gx: { level: 'native', text: 'Seconds, one figure per grade' },
      feeds: { level: 'strong', text: 'Fast prices, not tied to your BOM' },
      scrisk: { level: 'strong', text: 'Fast alerts, slower to dollars' },
      sheets: { level: 'not', text: 'Days to weeks per question' },
    },
  },
]

const LEVEL_STYLES = {
  native: { label: 'Built for it', className: 'bg-highlight text-white border-highlight' },
  strong: { label: 'Strong', className: 'bg-highlightSoft text-highlight border-highlight/20' },
  limited: { label: 'Limited', className: 'bg-bg2 text-light border-line' },
  not: { label: 'Not built for', className: 'bg-white text-muted border-line' },
}

function Cell({ value }) {
  const style = LEVEL_STYLES[value.level]
  return (
    <div className="h-full flex flex-col items-start gap-2">
      <span
        className={`inline-flex text-[9px] uppercase tracking-[0.1em] font-semibold px-2 py-0.5 rounded border ${style.className}`}
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
          title="An honest look at the metal-risk stack"
          subtitle="Price agencies lead on market data and forecasts. Supply-chain platforms lead on supplier mapping. globalNex is built for the layer they leave open: what a shock does to the exact alloy grades on your BOM, in dollars. Here is where each category leads, and where we are still early."
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
                        <Cell value={row.values[col.id]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 lg:px-5 py-3.5 border-t border-line bg-bg2">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {Object.entries(LEVEL_STYLES).map(([key, style]) => (
                <span
                  key={key}
                  className={`inline-flex text-[8px] uppercase tracking-[0.1em] font-semibold px-1.5 py-0.5 rounded border ${style.className}`}
                >
                  {style.label}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-light leading-snug max-w-md sm:text-right">
              We are early and deliberately narrow. Pair globalNex with your price and supplier
              tools; it answers the alloy-grade question they do not.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
