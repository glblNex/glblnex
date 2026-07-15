'use client'

import React from 'react'
import { urbanist } from '../_style/fonts'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const COLUMNS = [
  {
    id: 'gx',
    label: 'globalNex',
    blurb: 'Outcomes + experts + engine',
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

const ROWS = [
  {
    angle: 'What you get',
    detail: 'The deliverable, not the tool',
    values: {
      gx: { level: 'native', text: 'Counter, board figure, and recommended move ready to use' },
      saas: { level: 'limited', text: 'A login and a blank dashboard' },
      consult: { level: 'strong', text: 'A PDF report in weeks' },
    },
  },
  {
    angle: 'Your messy BOMs',
    detail: 'Who maps spreadsheets and ERP dumps',
    values: {
      gx: { level: 'native', text: 'We map it; you leave with grade-level exposure and a counter' },
      saas: { level: 'not', text: 'You clean and upload the data' },
      consult: { level: 'strong', text: 'Analysts do it, billed by the hour' },
    },
  },
  {
    angle: 'Supplier negotiation counter',
    detail: 'Counter a +12% hike with alloy-grade math',
    values: {
      gx: { level: 'native', text: '6061-T6 breakdown: true cost +4.2%, counter at 5%' },
      saas: { level: 'limited', text: 'Commodity charts, not grade decomposition' },
      consult: { level: 'limited', text: 'Possible, but slow and project-scoped' },
    },
  },
  {
    angle: 'Speed to answer',
    detail: 'Question to decision-ready figure',
    values: {
      gx: { level: 'native', text: 'Seconds in the room; same-morning alert with the move to take' },
      saas: { level: 'limited', text: 'Fast UI, if your data is already mapped' },
      consult: { level: 'not', text: 'Days to weeks per question' },
    },
  },
  {
    angle: 'Switching cost',
    detail: 'Embedded in your operation',
    values: {
      gx: { level: 'native', text: 'Your BOM mapped, studios configured, so it is hard to rip out' },
      saas: { level: 'not', text: 'Export your data and leave' },
      consult: { level: 'limited', text: 'Knowledge walks out when the project ends' },
    },
  },
  {
    angle: 'Defensibility',
    detail: 'Can a competitor clone it in a weekend',
    values: {
      gx: { level: 'native', text: 'Proprietary alloy DB + expert interpretation layer' },
      saas: { level: 'not', text: 'UI and charts are trivially copyable' },
      consult: { level: 'strong', text: 'Relationships and expertise, no live engine' },
    },
  },
  {
    angle: 'Part numbers vs chemistry',
    detail: 'What your ERP actually tracks',
    values: {
      gx: { level: 'native', text: 'Decompose SKUs to elemental exposure; trace policy shocks to specific parts' },
      saas: { level: 'not', text: 'Tracks vendors and part numbers, not metallurgical makeup' },
      consult: { level: 'limited', text: 'Possible manually, billed by the hour, too slow' },
    },
  },
  {
    angle: 'Alert vs execution',
    detail: 'News push vs the move delivered',
    values: {
      gx: { level: 'native', text: 'Redirect, reject, source, or counter, with experts who execute' },
      saas: { level: 'not', text: 'Generic news alerts; you figure out the response' },
      consult: { level: 'limited', text: 'Recommendations in a report; no continuous execution' },
    },
  },
  {
    angle: 'Deal-cycle speed',
    detail: 'Messy data to exposure figure',
    values: {
      gx: { level: 'native', text: 'Days from raw purchase data to board or diligence-ready figure' },
      saas: { level: 'not', text: 'Months of IT integration before data is usable' },
      consult: { level: 'not', text: 'Weeks per audit; impossible in a 30-day diligence window' },
    },
  },
  {
    angle: 'Works with your stack',
    detail: 'Market data and supplier context together',
    values: {
      gx: { level: 'strong', text: 'Scenarios powered by your feeds and supplier maps' },
      saas: { level: 'limited', text: 'Another siloed dashboard' },
      consult: { level: 'strong', text: 'Flexible, but not continuous' },
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
          eyebrow="The moat"
          title="We own the problem. You walk away with the move."
          subtitle="A tech-enabled managed service: engine plus experts. Pure SaaS hands you alerts. Consultancies hand you a report in weeks. globalNex maps chemistry, delivers the move, and executes."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 lg:mt-10 rounded-2xl border border-line bg-white overflow-hidden shadow-[0_20px_60px_-34px_rgba(10,10,10,0.22)]">
          <div className="overflow-x-auto gx-scrollbar">
            <table className="w-full border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-line">
                  <th className="text-left p-4 lg:p-5 w-[24%] align-bottom bg-bg2/40">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-light font-medium">
                      Angle
                    </span>
                  </th>
                  {COLUMNS.map((col) => (
                    <th
                      key={col.id}
                      className={`p-4 lg:p-5 text-left align-bottom w-[25.3%] ${
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
            <p className="text-[11px] text-light leading-snug max-w-lg">
              An elite, tech-enabled managed service. The engine does the heavy lifting; domain
              experts deliver the move.
            </p>
            <p className="text-[11px] text-light leading-snug max-w-md sm:text-right">
              Selective engagements. A limited number of manufacturers at a time.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
