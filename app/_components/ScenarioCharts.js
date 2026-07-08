'use client'

import React, { useId, useMemo } from 'react'
import { motion } from 'motion/react'

function formatAxis(v) {
  return `${Math.round(v * 100)}%`
}

export function TrajectoryChart({ series, height = 220 }) {
  const uid = useId().replace(/:/g, '')
  const w = 640
  const h = height
  const pad = { top: 20, right: 20, bottom: 36, left: 44 }
  const iw = w - pad.left - pad.right
  const ih = h - pad.top - pad.bottom

  const { pricePath, demandPath, areaPath, yTicks } = useMemo(() => {
    const allVals = series.flatMap((p) => [p.price, p.demand])
    const min = Math.min(...allVals)
    const max = Math.max(...allVals)
    const range = max - min || 0.1
    const padV = range * 0.12

    const toY = (v) => pad.top + (1 - (v - min + padV) / (range + padV * 2)) * ih
    const toX = (t) => pad.left + t * iw

    const buildPath = (key) =>
      series
        .map((p, i) => {
          const x = toX(p.t)
          const y = toY(p[key])
          return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
        })
        .join(' ')

    const price = buildPath('price')
    const demand = buildPath('demand')
    const area = `${price} L ${toX(1).toFixed(1)} ${pad.top + ih} L ${toX(0).toFixed(1)} ${pad.top + ih} Z`

    const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => ({
      y: pad.top + (1 - f) * ih,
      label: formatAxis(min + f * range),
    }))

    return { pricePath: price, demandPath: demand, areaPath: area, yTicks: ticks }
  }, [series, ih, iw, pad.left, pad.top])

  return (
    <div className="w-full" style={{ height }}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Price versus demand trajectory over twelve months"
      >
        <defs>
          <linearGradient id={`gx-traj-area-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#005B97" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#005B97" stopOpacity="0" />
          </linearGradient>
        </defs>

        {yTicks.map((tick) => (
          <g key={tick.label}>
            <line
              x1={pad.left}
              x2={pad.left + iw}
              y1={tick.y}
              y2={tick.y}
              stroke="#E6E8EC"
              strokeWidth="1"
            />
            <text x={pad.left - 8} y={tick.y + 4} fontSize="10" fill="#9CA3AF" textAnchor="end">
              {tick.label}
            </text>
          </g>
        ))}

        <motion.path
          d={areaPath}
          fill={`url(#gx-traj-area-${uid})`}
          initial={false}
          animate={{ d: areaPath }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        />
        <motion.path
          d={demandPath}
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{ d: demandPath }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        />
        <motion.path
          d={pricePath}
          fill="none"
          stroke="#005B97"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{ d: pricePath }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        />

        <text x={pad.left} y={h - 10} fontSize="10" fill="#9CA3AF">Today</text>
        <text x={pad.left + iw} y={h - 10} fontSize="10" fill="#9CA3AF" textAnchor="end">
          12 months
        </text>
      </svg>
    </div>
  )
}

const IMPACT_METRICS = [
  { key: 'costImpactPct', label: 'Cost impact', suffix: '%', prefix: '+', color: '#005B97', scale: 40 },
  { key: 'atRiskSpend', label: 'At-risk spend', suffix: 'M', prefix: '$', color: '#B00020', scale: 20 },
  { key: 'marginHitPts', label: 'Margin hit', suffix: ' pts', prefix: '', color: '#B00020', scale: 8 },
  { key: 'availabilityDrop', label: 'Availability', suffix: '% drop', prefix: '', color: '#D38C22', scale: 1, multiply: 100 },
  { key: 'leadTimeWeeks', label: 'Lead time', suffix: ' wks', prefix: '+', color: '#6B7280', scale: 16 },
]

export function ImpactBarChart({ impact, alloy }) {
  const bars = IMPACT_METRICS.map((m) => {
    let raw = impact[m.key]
    if (m.multiply) raw *= m.multiply
    const display =
      m.key === 'atRiskSpend'
        ? `$${raw.toFixed(1)}M`
        : m.key === 'availabilityDrop'
        ? `${Math.round(raw)}%`
        : m.key === 'leadTimeWeeks'
        ? `+${raw.toFixed(1)}`
        : m.key === 'marginHitPts'
        ? `${raw.toFixed(1)}`
        : `+${raw.toFixed(1)}%`
    const pct = Math.min(100, (raw / (m.scale || 1)) * 100)
    return { ...m, raw, display, pct }
  })

  return (
    <div className="space-y-3.5">
      {bars.map((bar) => (
        <div key={bar.key}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-light">{bar.label}</span>
            <motion.span
              key={`${bar.key}-${bar.display}`}
              initial={{ opacity: 0.4, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold tabular-nums text-ink"
            >
              {bar.display}
              {bar.key === 'atRiskSpend' ? (
                <span className="text-[10px] font-normal text-light ml-1">
                  of ${alloy.annualSpend}M baseline
                </span>
              ) : null}
            </motion.span>
          </div>
          <div className="h-2 w-full rounded-full bg-line overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: bar.color }}
              animate={{ width: `${bar.pct}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export function CompositionBars({ alloy }) {
  const entries = useMemo(
    () =>
      Object.entries(alloy.composition)
        .filter(([, pct]) => pct > 0)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5),
    [alloy]
  )

  return (
    <div className="space-y-2">
      {entries.map(([metal, pct]) => (
        <div key={metal}>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-light capitalize">{metal}</span>
            <span className="text-ink tabular-nums">{pct}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-line overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-highlight/70"
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
