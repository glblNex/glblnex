'use client'

import React from 'react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const COLUMNS = [
  {
    id: 'gx',
    label: 'globalNex',
    blurb: 'Purpose-built engine + experts',
    highlight: true,
  },
  {
    id: 'saas',
    label: 'Pure SaaS tools',
    blurb: 'Self-serve dashboards',
  },
  {
    id: 'consult',
    label: 'Consultancies',
    blurb: 'Analyst reports & projects',
  },
]

const CAPABILITIES = [
  {
    category: 'Foundation',
    rows: [
      {
        angle: 'BOM to chemistry',
        detail: 'Messy ERP and Excel to elemental exposure',
        values: {
          gx: { level: 'native', text: 'Zero-friction ingestion: part numbers mapped to grades, grades to metals' },
          saas: { level: 'not', text: 'You clean, upload, and maintain the data yourself' },
          consult: { level: 'limited', text: 'Analysts map manually, billed hourly, takes weeks' },
        },
      },
      {
        angle: 'Alloy decomposition',
        detail: 'Grade-level math, not commodity indices',
        values: {
          gx: { level: 'native', text: 'Proprietary alloy DB: composition, volatility, geo-concentration per grade' },
          saas: { level: 'not', text: 'LME charts and spot prices, not 6061-T6 or Inconel 718 breakdown' },
          consult: { level: 'limited', text: 'Possible in a project scope, not continuous or live' },
        },
      },
      {
        angle: 'Scenario studio',
        detail: 'Shock models tuned to your footprint',
        values: {
          gx: { level: 'native', text: 'Custom price, supply, and geo scenarios on your mapped BOM' },
          saas: { level: 'limited', text: 'Generic templates if your data is already loaded' },
          consult: { level: 'limited', text: 'Built once per engagement, not kept live' },
        },
      },
    ],
  },
  {
    category: 'Applications',
    rows: [
      {
        angle: 'Geo shock tracing',
        detail: 'Policy and supply events to your parts',
        values: {
          gx: { level: 'native', text: 'Risk and redirect hit list: which components bottleneck, with alternate sources' },
          saas: { level: 'not', text: 'Generic news alert; no link to your BOM chemistry' },
          consult: { level: 'not', text: 'Too slow to trace 15,000 parts when the embargo drops' },
        },
      },
      {
        angle: 'Surcharge audit',
        detail: 'Blanket invoice hikes vs alloy-weight math',
        values: {
          gx: { level: 'native', text: 'Line-by-line rejection report before AP pays the invoice' },
          saas: { level: 'not', text: 'No penny-accurate grade decomposition on invoice lines' },
          consult: { level: 'not', text: 'Three-month audit cycle; invoice already paid' },
        },
      },
      {
        angle: 'Price negotiations',
        detail: 'Supplier claims vs true cost',
        values: {
          gx: { level: 'native', text: 'Counter receipt: true cost +4.2%, counter at 5%, ready for the room' },
          saas: { level: 'limited', text: 'Commodity trend charts, not a defensible grade counter' },
          consult: { level: 'limited', text: 'Possible per project, not same-day in the negotiation' },
        },
      },
      {
        angle: 'Supply redirect',
        detail: 'Disruption to capacity move',
        values: {
          gx: { level: 'native', text: 'Grade-matched alert same morning: lock billet, redirect POs, qualify alternates' },
          saas: { level: 'not', text: 'Headline notification; you wait for Tier 1 to update the ERP' },
          consult: { level: 'not', text: 'No live engine connecting smelter outage to your grades' },
        },
      },
      {
        angle: 'NPI and ugly spend',
        detail: 'Prototype and low-volume sourcing',
        values: {
          gx: { level: 'native', text: 'De-risked sourcing plan: vetted partners, landed cost, lead time, contracts executed' },
          saas: { level: 'not', text: 'No supplier network; does not pick up the phone' },
          consult: { level: 'limited', text: 'Strategy deck; no ongoing execution on the build' },
        },
      },
      {
        angle: 'Deal diligence',
        detail: 'Hidden material exposure at deal speed',
        values: {
          gx: { level: 'native', text: 'Material exposure report from messy PO data in days, not months' },
          saas: { level: 'not', text: 'Six-month IT integration; useless in a 30-day diligence window' },
          consult: { level: 'not', text: 'Balance sheet audit; misses metallurgical supply chain risk' },
        },
      },
    ],
  },
  {
    category: 'Execution',
    rows: [
      {
        angle: 'Trigger alerts',
        detail: 'Macro event to your spend, instantly',
        values: {
          gx: { level: 'native', text: 'Quantified margin hit on your grades plus the recommended move' },
          saas: { level: 'limited', text: 'Market alert with no spend context' },
          consult: { level: 'not', text: 'No continuous monitoring between projects' },
        },
      },
      {
        angle: 'Expert-in-the-Loop',
        detail: 'Who executes the move',
        values: {
          gx: { level: 'native', text: 'Fractional cost engineers and commodity strategists who redirect, reject, and source' },
          saas: { level: 'not', text: 'Customer-success reps showing you how to click buttons' },
          consult: { level: 'limited', text: 'Knowledge walks out when the project ends' },
        },
      },
      {
        angle: 'Speed to outcome',
        detail: 'Question to decision-ready deliverable',
        values: {
          gx: { level: 'native', text: 'Same day for counters and redirects; days for diligence and BOM mapping' },
          saas: { level: 'limited', text: 'Fast UI only after months of data prep' },
          consult: { level: 'not', text: 'Days to weeks per question; PDF in the mail' },
        },
      },
    ],
  },
]

const DELIVERABLES = [
  'Hit lists',
  'Rejection reports',
  'Counter receipts',
  'Redirect protocols',
  'Sourcing plans',
  'Diligence figures',
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
          eyebrow="Purpose-built"
          title="Every material-risk job, built in"
          subtitle="Not a generic dashboard with a login. globalNex is a tech-enabled managed service with purpose-built applications for ingestion, tracing, auditing, redirecting, sourcing, and diligence. Engine plus experts who execute."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 lg:mt-10 rounded-2xl border border-line bg-white overflow-hidden shadow-[0_20px_60px_-34px_rgba(10,10,10,0.22)]">
          <div className="overflow-x-auto gx-scrollbar">
            <table className="w-full border-collapse min-w-[780px]">
              <thead>
                <tr className="border-b border-line">
                  <th className="text-left p-4 lg:p-5 w-[22%] align-bottom bg-bg2/40">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-light font-medium">
                      Capability
                    </span>
                  </th>
                  {COLUMNS.map((col) => (
                    <th
                      key={col.id}
                      className={`p-4 lg:p-5 text-left align-bottom w-[26%] ${
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
                {CAPABILITIES.map((group) => (
                  <React.Fragment key={group.category}>
                    <tr className="border-t border-line bg-bg2/60">
                      <td
                        colSpan={4}
                        className="px-4 lg:px-5 py-2.5 text-[10px] uppercase tracking-[0.16em] text-highlight font-semibold"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
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
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-line bg-bg2 px-4 lg:px-5 py-4">
            <p className="text-[10px] uppercase tracking-[0.14em] text-light font-medium mb-3">
              Deliverables globalNex produces
            </p>
            <div className="flex flex-wrap gap-2">
              {DELIVERABLES.map((d) => (
                <span
                  key={d}
                  className={`text-xs font-medium text-highlight px-3 py-1.5 rounded-full border border-highlight/25 bg-highlightSoft/50 ${urbanist.className}`}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 lg:px-5 py-3.5 border-t border-line bg-white">
            <p className="text-[11px] text-light leading-snug max-w-lg">
              Twelve purpose-built capabilities. Six deliverable types. One team that executes
              the move.
            </p>
            <p className="text-[11px] text-light leading-snug max-w-md sm:text-right">
              Pure SaaS and consultancies cover pieces. globalNex covers the full job.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
