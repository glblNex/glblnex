'use client'

import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ALLOY_GROUPS,
  getAlloy,
  computeScenarioImpact,
  demandPriceSeries,
} from '../_data/metals'
import GeoRiskMap from './GeoRiskMap'
import { TrajectoryChart, ImpactBarChart, CompositionBars } from './ScenarioCharts'

const PRESETS = [
  { id: 'baseline', label: 'Baseline', price: 0, production: 0 },
  { id: 'price-shock', label: 'Price +20%', price: 20, production: 0 },
  { id: 'prod-cut', label: 'Production -50%', price: 0, production: -50 },
  { id: 'combined', label: 'Combined shock', price: 20, production: -50 },
  { id: 'export-ban', label: 'Export ban', price: 15, production: -70 },
]

function AnimatedValue({ value, className = '' }) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {value}
      </motion.span>
    </AnimatePresence>
  )
}

function KpiTile({ label, value, sub, tone = 'ink', progress }) {
  const toneClass =
    tone === 'risk' ? 'text-error' : tone === 'highlight' ? 'text-highlight' : 'text-ink'
  const barColor = tone === 'risk' ? '#B00020' : '#005B97'

  return (
    <div className="rounded-xl border border-line bg-white p-4 lg:p-5 h-full">
      <p className="text-[11px] uppercase tracking-wide text-light">{label}</p>
      <p className={`mt-1.5 text-2xl lg:text-3xl font-semibold tabular-nums ${toneClass}`}>
        <AnimatedValue value={value} />
      </p>
      {typeof progress === 'number' ? (
        <div className="mt-3 h-1.5 w-full rounded-full bg-line overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: barColor }}
            animate={{ width: `${Math.min(100, Math.round(progress * 100))}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      ) : (
        <p className="mt-1.5 text-xs text-light">{sub}</p>
      )}
    </div>
  )
}

export default function ScenarioDemo() {
  const [alloyId, setAlloyId] = useState('al-7075')
  const [priceShock, setPriceShock] = useState(20)
  const [productionChange, setProductionChange] = useState(-50)
  const [activePreset, setActivePreset] = useState('combined')

  const alloy = getAlloy(alloyId)
  const impact = useMemo(
    () => computeScenarioImpact(alloy, priceShock, productionChange),
    [alloy, priceShock, productionChange]
  )
  const series = useMemo(
    () => demandPriceSeries(priceShock, productionChange, impact.weightedVol),
    [priceShock, productionChange, impact.weightedVol]
  )

  const riskTone =
    impact.risk.token === 'error'
      ? 'text-error'
      : impact.risk.token === 'warning'
      ? 'text-warning'
      : 'text-success'

  const applyPreset = (preset) => {
    setActivePreset(preset.id)
    setPriceShock(preset.price)
    setProductionChange(preset.production)
  }

  const selectAlloy = (id) => {
    setAlloyId(id)
    setActivePreset('')
  }

  return (
    <div className="rounded-2xl border border-line bg-white shadow-[0_24px_80px_-36px_rgba(10,10,10,0.4)] overflow-hidden">
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 lg:px-5 py-3 border-b border-line bg-bg2">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 text-xs font-medium text-light">globalNex Scenario Studio</span>
        <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-highlight bg-highlightSoft px-2 py-0.5 rounded">
          Live demo
        </span>
      </div>

      {/* Alloy picker */}
      <div className="px-4 lg:px-6 py-4 border-b border-line bg-white">
        <p className="text-xs font-medium text-light mb-3">Select alloy grade</p>
        <div className="space-y-3">
          {ALLOY_GROUPS.map((group) => (
            <div key={group.metal}>
              <p className="text-[10px] uppercase tracking-wider text-muted mb-1.5">{group.metal}</p>
              <div className="flex flex-wrap gap-2">
                {group.alloys.map((a) => {
                  const selected = alloyId === a.id
                  return (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => selectAlloy(a.id)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                        selected
                          ? 'border-highlight bg-highlight text-white shadow-sm'
                          : 'border-line bg-white text-ink hover:border-highlight/40 hover:bg-highlightSoft/50'
                      }`}
                    >
                      {a.name}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-light">{alloy.use}</p>
      </div>

      {/* Presets */}
      <div className="px-4 lg:px-6 py-3 border-b border-line bg-bg2/60 flex flex-wrap items-center gap-2">
        <span className="text-[10px] uppercase tracking-wider text-light mr-1">Quick scenarios</span>
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => applyPreset(preset)}
            className={`text-xs px-3 py-1.5 rounded-md border transition-colors duration-200 ${
              activePreset === preset.id
                ? 'border-highlight bg-highlightSoft text-highlight font-medium'
                : 'border-line bg-white text-ink hover:border-highlight/30'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Main workspace */}
      <div className="grid xl:grid-cols-[minmax(280px,340px)_1fr]">
        {/* Left panel */}
        <div className="p-5 lg:p-6 border-b xl:border-b-0 xl:border-r border-line space-y-6 bg-white">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-ink">Price shock</label>
              <span className="text-xs font-semibold text-highlight tabular-nums">
                {priceShock >= 0 ? '+' : ''}{priceShock}%
              </span>
            </div>
            <input
              type="range"
              min="-10"
              max="50"
              step="1"
              value={priceShock}
              onChange={(e) => {
                setActivePreset('')
                setPriceShock(parseInt(e.target.value, 10))
              }}
              className="gx-range"
              aria-label="Price shock percentage"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-ink">Production change</label>
              <span className="text-xs font-semibold text-highlight tabular-nums">
                {productionChange >= 0 ? '+' : ''}{productionChange}%
              </span>
            </div>
            <input
              type="range"
              min="-70"
              max="20"
              step="1"
              value={productionChange}
              onChange={(e) => {
                setActivePreset('')
                setProductionChange(parseInt(e.target.value, 10))
              }}
              className="gx-range"
              aria-label="Production change percentage"
            />
          </div>

          <div className="rounded-xl border border-line bg-bg2 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-light">Overall risk</p>
              <p className={`text-sm font-semibold ${riskTone}`}>{impact.risk.label}</p>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-line overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  backgroundColor:
                    impact.risk.token === 'error'
                      ? '#B00020'
                      : impact.risk.token === 'warning'
                      ? '#D38C22'
                      : '#2FAD02',
                }}
                animate={{ width: `${Math.round(impact.score * 100)}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
            <p className="text-[11px] text-light mt-2">
              Annual spend baseline ${alloy.annualSpend}M
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-ink mb-3">Alloy composition</p>
            <CompositionBars alloy={alloy} />
          </div>

          <div className="rounded-xl border border-line overflow-hidden">
            <p className="text-[10px] uppercase tracking-wider text-light px-3 pt-3 pb-1">
              Supply origins
            </p>
            <GeoRiskMap alloy={alloy} animated showLabels={false} className="opacity-90" />
          </div>
        </div>

        {/* Right panel */}
        <div className="p-5 lg:p-6 bg-white">
          <p className="text-sm text-ink leading-relaxed mb-5">
            A{' '}
            <span className="font-semibold text-highlight">
              {priceShock >= 0 ? '+' : ''}{priceShock}%
            </span>{' '}
            price move and{' '}
            <span className="font-semibold text-highlight">{productionChange}%</span> production
            change on <span className="font-semibold">{alloy.name}</span> would raise unit cost by{' '}
            <span className="font-semibold text-highlight">
              {impact.costImpactPct.toFixed(1)}%
            </span>{' '}
            and put{' '}
            <span className="font-semibold text-error">${impact.atRiskSpend.toFixed(1)}M</span> of
            spend at risk.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            <KpiTile
              label="Cost impact"
              value={`+${impact.costImpactPct.toFixed(1)}%`}
              tone="highlight"
              progress={Math.min(1, impact.costImpactPct / 40)}
            />
            <KpiTile
              label="At-risk spend"
              value={`$${impact.atRiskSpend.toFixed(1)}M`}
              tone="risk"
              progress={Math.min(1, impact.atRiskSpend / alloy.annualSpend)}
            />
            <KpiTile
              label="Margin hit"
              value={`${impact.marginHitPts.toFixed(1)} pts`}
              tone="risk"
              progress={Math.min(1, impact.marginHitPts / 8)}
            />
            <KpiTile
              label="Lead-time change"
              value={`+${impact.leadTimeWeeks.toFixed(1)} wks`}
              sub="vs. baseline"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            <div className="rounded-xl border border-line p-4 lg:p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-medium text-ink">Scenario impact breakdown</p>
              </div>
              <ImpactBarChart impact={impact} alloy={alloy} />
            </div>

            <div className="rounded-xl border border-line p-4 lg:p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-medium text-ink">Price vs. demand trajectory</p>
                <div className="flex items-center gap-3 text-[11px] text-light">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-highlight" /> Price
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-muted" /> Demand
                  </span>
                </div>
              </div>
              <TrajectoryChart series={series} height={220} />
              <div className="mt-2 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-bg2 px-3 py-2">
                  <p className="text-[10px] text-light">Supply availability</p>
                  <p className="text-lg font-semibold text-error tabular-nums">
                    {Math.round(impact.availabilityDrop * 100)}% drop
                  </p>
                </div>
                <div className="rounded-lg bg-bg2 px-3 py-2">
                  <p className="text-[10px] text-light">Global demand impact</p>
                  <p className="text-lg font-semibold text-ink tabular-nums">
                    {Math.round(impact.demandDrop * 100)}% drop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
