'use client'

import React, { useId, useMemo } from 'react'
import { motion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1]

function formatAxis(v) {
  return `${Math.round(v * 100)}`
}

export function TrajectoryChart({ series, height = 220 }) {
  const uid = useId().replace(/:/g, '')
  const w = 640
  const h = height
  const pad = { top: 14, right: 12, bottom: 28, left: 36 }
  const iw = w - pad.left - pad.right
  const ih = h - pad.top - pad.bottom

  const { pricePath, demandPath, areaPath, yTicks, endPrice, endDemand } = useMemo(() => {
    const allVals = series.flatMap((p) => [p.price, p.demand])
    const min = Math.min(...allVals)
    const max = Math.max(...allVals)
    const range = max - min || 0.1
    const padV = range * 0.14

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

    const ticks = [0, 0.5, 1].map((f) => ({
      y: pad.top + (1 - f) * ih,
      label: formatAxis(min + f * range),
    }))

    const last = series[series.length - 1]
    return {
      pricePath: price,
      demandPath: demand,
      areaPath: area,
      yTicks: ticks,
      endPrice: { x: toX(last.t), y: toY(last.price) },
      endDemand: { x: toX(last.t), y: toY(last.demand) },
    }
  }, [series, ih, iw, pad.left, pad.top])

  return (
    <div className="w-full h-full" style={{ minHeight: height }}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Price versus demand trajectory over twelve months"
      >
        <defs>
          <linearGradient id={`gx-traj-area-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#005B97" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#005B97" stopOpacity="0" />
          </linearGradient>
        </defs>

        {yTicks.map((tick) => (
          <g key={`${tick.label}-${tick.y}`}>
            <line
              x1={pad.left}
              x2={pad.left + iw}
              y1={tick.y}
              y2={tick.y}
              stroke="#E6E8EC"
              strokeWidth="1"
            />
            <text
              x={pad.left - 6}
              y={tick.y + 3}
              fontSize="9"
              fill="#9CA3AF"
              textAnchor="end"
              fontFamily="system-ui, sans-serif"
            >
              {tick.label}
            </text>
          </g>
        ))}

        <motion.path
          d={areaPath}
          fill={`url(#gx-traj-area-${uid})`}
          initial={false}
          animate={{ d: areaPath }}
          transition={{ duration: 0.5, ease: EASE }}
        />
        <motion.path
          d={demandPath}
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{ d: demandPath }}
          transition={{ duration: 0.5, ease: EASE }}
        />
        <motion.path
          d={pricePath}
          fill="none"
          stroke="#005B97"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{ d: pricePath }}
          transition={{ duration: 0.5, ease: EASE }}
        />

        <motion.circle
          r="3.5"
          fill="#005B97"
          initial={false}
          animate={{ cx: endPrice.x, cy: endPrice.y }}
          transition={{ duration: 0.5, ease: EASE }}
        />
        <motion.circle
          r="3.5"
          fill="#9CA3AF"
          initial={false}
          animate={{ cx: endDemand.x, cy: endDemand.y }}
          transition={{ duration: 0.5, ease: EASE }}
        />

        <text
          x={pad.left}
          y={h - 8}
          fontSize="9"
          fill="#9CA3AF"
          fontFamily="system-ui, sans-serif"
        >
          Today
        </text>
        <text
          x={pad.left + iw}
          y={h - 8}
          fontSize="9"
          fill="#9CA3AF"
          textAnchor="end"
          fontFamily="system-ui, sans-serif"
        >
          12 mo
        </text>
      </svg>
    </div>
  )
}

const IMPACT_METRICS = [
  { key: 'costImpactPct', label: 'Cost impact', color: '#005B97', scale: 40 },
  { key: 'atRiskSpend', label: 'At-risk spend', color: '#B00020', scale: 20 },
  { key: 'marginHitPts', label: 'Margin hit', color: '#B00020', scale: 8 },
  { key: 'availabilityDrop', label: 'Availability', color: '#D38C22', scale: 1, multiply: 100 },
  { key: 'leadTimeWeeks', label: 'Lead time', color: '#6B7280', scale: 16 },
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
        ? `+${raw.toFixed(1)}w`
        : m.key === 'marginHitPts'
        ? `${raw.toFixed(1)} pts`
        : `+${raw.toFixed(1)}%`
    const pct = Math.min(100, Math.max(2, (raw / (m.scale || 1)) * 100))
    return { ...m, raw, display, pct }
  })

  return (
    <div className="space-y-3">
      {bars.map((bar) => (
        <div key={bar.key}>
          <div className="flex items-baseline justify-between gap-3 mb-1">
            <span className="text-[11px] text-light">{bar.label}</span>
            <motion.span
              key={`${bar.key}-${bar.display}`}
              initial={{ opacity: 0.35 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="text-[12px] font-semibold tabular-nums text-ink shrink-0"
            >
              {bar.display}
            </motion.span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-line/80 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: bar.color }}
              animate={{ width: `${bar.pct}%` }}
              transition={{ duration: 0.45, ease: EASE }}
            />
          </div>
          {bar.key === 'atRiskSpend' ? (
            <p className="mt-0.5 text-[9px] text-muted tabular-nums">
              of ${alloy.annualSpend}M baseline
            </p>
          ) : null}
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
    <div className="space-y-1.5">
      {entries.map(([metal, pct]) => (
        <div key={metal} className="grid grid-cols-[1fr_auto] gap-x-2 gap-y-0.5 items-center">
          <span className="text-[10px] text-light capitalize truncate">{metal}</span>
          <span className="text-[10px] text-ink tabular-nums">{pct}%</span>
          <div className="col-span-2 h-1 rounded-full bg-line/80 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-highlight/75"
              animate={{ width: `${Math.min(100, pct)}%` }}
              transition={{ duration: 0.4, ease: EASE }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
