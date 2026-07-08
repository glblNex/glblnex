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
  { id: 'prod-cut', label: 'Prod -50%', price: 0, production: -50 },
  { id: 'combined', label: 'Combined', price: 20, production: -50 },
  { id: 'export-ban', label: 'Export ban', price: 15, production: -70 },
]

const EASE = [0.22, 1, 0.36, 1]

function AnimatedValue({ value }) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={String(value)}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22, ease: EASE }}
        className="inline-block tabular-nums"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  )
}

function KpiCell({ label, value, tone = 'ink', progress }) {
  const toneClass =
    tone === 'risk' ? 'text-error' : tone === 'highlight' ? 'text-highlight' : 'text-ink'
  const barColor = tone === 'risk' ? '#B00020' : tone === 'warning' ? '#D38C22' : '#005B97'

  return (
    <div className="min-w-0 px-3 py-2.5 lg:px-4 lg:py-3">
      <p className="text-[10px] uppercase tracking-[0.12em] text-light truncate">{label}</p>
      <p className={`mt-1 text-lg lg:text-xl font-semibold leading-none ${toneClass}`}>
        <AnimatedValue value={value} />
      </p>
      {typeof progress === 'number' ? (
        <div className="mt-2 h-1 w-full rounded-full bg-line/80 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: barColor }}
            animate={{ width: `${Math.min(100, Math.round(progress * 100))}%` }}
            transition={{ duration: 0.45, ease: EASE }}
          />
        </div>
      ) : null}
    </div>
  )
}

function SliderField({ label, value, min, max, onChange, ariaLabel }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-[11px] font-medium text-ink">{label}</label>
        <span className="text-[11px] font-semibold text-highlight tabular-nums">
          {value >= 0 ? '+' : ''}{value}%
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step="1"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="gx-range"
        style={{ '--gx-range-fill': `${pct}%` }}
        aria-label={ariaLabel}
      />
    </div>
  )
}

export default function ScenarioDemo() {
  const [alloyId, setAlloyId] = useState('al-7075')
  const [priceShock, setPriceShock] = useState(20)
  const [productionChange, setProductionChange] = useState(-50)
  const [activePreset, setActivePreset] = useState('combined')

  const alloy = getAlloy(alloyId)
  const family =
    ALLOY_GROUPS.find((g) => g.alloys.some((a) => a.id === alloyId))?.metal ||
    ALLOY_GROUPS[0].metal
  const activeGroup = ALLOY_GROUPS.find((g) => g.metal === family) || ALLOY_GROUPS[0]
  const impact = useMemo(
    () => computeScenarioImpact(alloy, priceShock, productionChange),
    [alloy, priceShock, productionChange]
  )
  const series = useMemo(
    () => demandPriceSeries(priceShock, productionChange, impact.weightedVol),
    [priceShock, productionChange, impact.weightedVol]
  )

  const riskColor =
    impact.risk.token === 'error'
      ? '#B00020'
      : impact.risk.token === 'warning'
      ? '#D38C22'
      : '#2FAD02'

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

  const selectFamily = (metal) => {
    const group = ALLOY_GROUPS.find((g) => g.metal === metal)
    if (!group) return
    if (!group.alloys.some((a) => a.id === alloyId)) {
      setAlloyId(group.alloys[0].id)
      setActivePreset('')
    }
  }

  const selectAlloy = (id) => {
    setAlloyId(id)
    setActivePreset('')
  }

  const onPrice = (v) => {
    setActivePreset('')
    setPriceShock(v)
  }

  const onProduction = (v) => {
    setActivePreset('')
    setProductionChange(v)
  }

  return (
    <div className="rounded-2xl border border-line bg-white shadow-[0_28px_80px_-40px_rgba(10,10,10,0.38)] overflow-hidden">
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 lg:px-5 h-10 border-b border-line bg-bg2">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-2.5 text-[11px] font-medium text-light tracking-wide">
          Scenario Studio
        </span>
        <span className="ml-auto text-[9px] font-semibold uppercase tracking-[0.14em] text-highlight bg-highlightSoft px-2 py-0.5 rounded">
          Live
        </span>
      </div>

      {/* Alloy + presets toolbar */}
      <div className="border-b border-line bg-white">
        <div className="px-4 lg:px-5 pt-3.5 pb-2.5">
          <div className="flex items-center gap-1 overflow-x-auto gx-scrollbar pb-0.5">
            {ALLOY_GROUPS.map((g) => {
              const on = family === g.metal
              return (
                <button
                  key={g.metal}
                  type="button"
                  onClick={() => selectFamily(g.metal)}
                  className={`shrink-0 text-[11px] px-2.5 py-1 rounded-md transition-colors duration-200 ${
                    on
                      ? 'bg-ink text-white'
                      : 'text-light hover:text-ink hover:bg-bg2'
                  }`}
                >
                  {g.metal.split(' / ')[0]}
                </button>
              )
            })}
          </div>

          <div className="mt-2.5 flex items-center gap-2">
            <div className="flex gap-1.5 overflow-x-auto gx-scrollbar flex-1 min-w-0 pb-0.5">
              {activeGroup.alloys.map((a) => {
                const selected = alloyId === a.id
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => selectAlloy(a.id)}
                    className={`shrink-0 text-[11px] px-3 py-1.5 rounded-full border transition-all duration-200 ${
                      selected
                        ? 'border-highlight bg-highlight text-white'
                        : 'border-line bg-white text-ink hover:border-highlight/35'
                    }`}
                  >
                    {a.name}
                  </button>
                )
              })}
            </div>
            <p className="hidden lg:block shrink-0 text-[11px] text-light max-w-[200px] text-right leading-snug">
              {alloy.use}
            </p>
          </div>
        </div>

        <div className="px-4 lg:px-5 py-2 border-t border-line bg-bg2/40 flex items-center gap-2 overflow-x-auto gx-scrollbar">
          <span className="shrink-0 text-[9px] uppercase tracking-[0.14em] text-muted">
            Scenario
          </span>
          <div className="flex items-center gap-1">
            {PRESETS.map((preset) => {
              const on = activePreset === preset.id
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => applyPreset(preset)}
                  className={`shrink-0 text-[11px] px-2.5 py-1 rounded-md transition-colors duration-200 ${
                    on
                      ? 'bg-white text-highlight border border-highlight/25 shadow-sm font-medium'
                      : 'text-light hover:text-ink border border-transparent'
                  }`}
                >
                  {preset.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Workspace */}
      <div className="grid xl:grid-cols-[280px_1fr]">
        {/* Left controls */}
        <aside className="p-4 lg:p-5 border-b xl:border-b-0 xl:border-r border-line bg-white space-y-4">
          <SliderField
            label="Price shock"
            value={priceShock}
            min={-10}
            max={50}
            onChange={onPrice}
            ariaLabel="Price shock percentage"
          />
          <SliderField
            label="Production change"
            value={productionChange}
            min={-70}
            max={20}
            onChange={onProduction}
            ariaLabel="Production change percentage"
          />

          <div className="rounded-xl border border-line bg-bg2/70 p-3.5">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[10px] uppercase tracking-[0.12em] text-light">Risk</p>
              <p className={`text-xs font-semibold ${riskTone}`}>{impact.risk.label}</p>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-line overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: riskColor }}
                animate={{ width: `${Math.round(impact.score * 100)}%` }}
                transition={{ duration: 0.45, ease: EASE }}
              />
            </div>
            <p className="text-[10px] text-light mt-2 tabular-nums">
              ${alloy.annualSpend}M baseline · {alloy.name}
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.12em] text-light mb-2.5">
              Composition
            </p>
            <CompositionBars alloy={alloy} />
          </div>

          <div className="rounded-xl border border-line overflow-hidden">
            <div className="flex items-center justify-between px-3 pt-2.5 pb-1">
              <p className="text-[10px] uppercase tracking-[0.12em] text-light">Origins</p>
            </div>
            <div className="px-1 pb-1">
              <GeoRiskMap alloy={alloy} animated showLabels={false} className="opacity-95" />
            </div>
          </div>
        </aside>

        {/* Right results */}
        <div className="bg-white flex flex-col min-h-0">
          <div className="px-4 lg:px-5 pt-4 pb-3 border-b border-line">
            <p className="text-[13px] lg:text-sm text-ink leading-relaxed">
              <span className="font-semibold text-highlight">
                {priceShock >= 0 ? '+' : ''}{priceShock}%
              </span>
              {' '}price ·{' '}
              <span className="font-semibold text-highlight">{productionChange}%</span>
              {' '}production on{' '}
              <span className="font-semibold">{alloy.name}</span>
              {' '}→ cost{' '}
              <span className="font-semibold text-highlight">
                +{impact.costImpactPct.toFixed(1)}%
              </span>
              ,{' '}
              <span className="font-semibold text-error">
                ${impact.atRiskSpend.toFixed(1)}M
              </span>
              {' '}at risk
            </p>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-6 divide-x divide-line border-b border-line">
            <KpiCell
              label="Cost"
              value={`+${impact.costImpactPct.toFixed(1)}%`}
              tone="highlight"
              progress={Math.min(1, impact.costImpactPct / 40)}
            />
            <KpiCell
              label="At risk"
              value={`$${impact.atRiskSpend.toFixed(1)}M`}
              tone="risk"
              progress={Math.min(1, impact.atRiskSpend / alloy.annualSpend)}
            />
            <KpiCell
              label="Margin"
              value={`${impact.marginHitPts.toFixed(1)} pts`}
              tone="risk"
              progress={Math.min(1, impact.marginHitPts / 8)}
            />
            <KpiCell
              label="Lead time"
              value={`+${impact.leadTimeWeeks.toFixed(1)}w`}
            />
            <KpiCell
              label="Availability"
              value={`${Math.round(impact.availabilityDrop * 100)}%`}
              tone="risk"
              progress={impact.availabilityDrop}
            />
            <KpiCell
              label="Demand"
              value={`${Math.round(impact.demandDrop * 100)}%`}
              progress={impact.demandDrop}
            />
          </div>

          <div className="grid lg:grid-cols-2 flex-1 min-h-[280px]">
            <div className="p-4 lg:p-5 border-b lg:border-b-0 lg:border-r border-line flex flex-col">
              <p className="text-[10px] uppercase tracking-[0.12em] text-light mb-3.5">
                Impact breakdown
              </p>
              <div className="flex-1 flex flex-col justify-center">
                <ImpactBarChart impact={impact} alloy={alloy} />
              </div>
            </div>

            <div className="p-4 lg:p-5 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] uppercase tracking-[0.12em] text-light">
                  Price vs demand
                </p>
                <div className="flex items-center gap-3 text-[10px] text-light">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-highlight" /> Price
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted" /> Demand
                  </span>
                </div>
              </div>
              <div className="flex-1 min-h-[200px]">
                <TrajectoryChart series={series} height={220} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
