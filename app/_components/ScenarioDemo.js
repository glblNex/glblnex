'use client'

import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ALLOY_GROUPS,
  getAlloy,
  computeScenarioImpact,
  demandPriceSeries,
} from "../_data/metals";

function KpiCard({ label, value, sub, tone = "ink", progress }) {
  const toneClass = tone === "risk" ? "text-error" : tone === "highlight" ? "text-highlight" : "text-ink";
  const barColor = tone === "risk" ? "#B00020" : "#005B97";
  return (
    <div className="rounded-lg border border-line bg-white p-4">
      <p className="text-xs text-light">{label}</p>
      <p className={`mt-1 text-2xl font-semibold tabular-nums ${toneClass}`}>{value}</p>
      {typeof progress === "number" ? (
        <div className="mt-2 h-1.5 w-full rounded-full bg-line overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: barColor }}
            animate={{ width: `${Math.min(100, Math.round(progress * 100))}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      ) : (
        <p className="mt-1 text-xs text-light">{sub}</p>
      )}
    </div>
  );
}

function DemandPriceChart({ series }) {
  const w = 300;
  const h = 100;
  const toPath = (key) =>
    series
      .map((p, i) => {
        const x = p.t * w;
        const y = (1 - p[key]) * h;
        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");

  const pricePath = toPath("price");
  const demandPath = toPath("demand");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-28" preserveAspectRatio="none">
      <line x1="0" y1={h * 0.5} x2={w} y2={h * 0.5} stroke="#E6E8EC" strokeWidth="0.6" strokeDasharray="3 4" />
      <motion.path
        d={demandPath}
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.35"
        initial={false}
        animate={{ d: demandPath }}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d={pricePath}
        fill="none"
        stroke="#005B97"
        strokeWidth="2"
        strokeLinecap="round"
        initial={false}
        animate={{ d: pricePath }}
        transition={{ duration: 0.5 }}
      />
      <g fontSize="10" fill="#6B7280">
        <circle cx="8" cy="10" r="3" fill="#005B97" />
        <text x="16" y="13">Price index</text>
        <circle cx="88" cy="10" r="3" fill="#0A0A0A" fillOpacity="0.35" />
        <text x="96" y="13">Global demand</text>
      </g>
    </svg>
  );
}

export default function ScenarioDemo() {
  const [alloyId, setAlloyId] = useState("al-7075");
  const [priceShock, setPriceShock] = useState(20);
  const [productionChange, setProductionChange] = useState(-50);

  const alloy = getAlloy(alloyId);
  const impact = useMemo(
    () => computeScenarioImpact(alloy, priceShock, productionChange),
    [alloy, priceShock, productionChange]
  );
  const series = useMemo(
    () => demandPriceSeries(priceShock, productionChange, impact.weightedVol),
    [priceShock, productionChange, impact.weightedVol]
  );

  return (
    <div className="rounded-xl border border-line bg-white shadow-[0_20px_60px_-30px_rgba(10,10,10,0.35)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-bg2">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 text-xs font-medium text-light">globalNex · Scenario Studio</span>
        <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-highlight bg-highlightSoft px-2 py-0.5 rounded">
          Live demo
        </span>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr]">
        <div className="p-5 border-b lg:border-b-0 lg:border-r border-line bg-white">
          <label className="block text-xs font-medium text-light mb-1.5">Alloy grade</label>
          <select
            value={alloyId}
            onChange={(e) => setAlloyId(e.target.value)}
            className="w-full rounded-md border border-line bg-white text-ink text-sm px-3 py-2.5 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20"
          >
            {ALLOY_GROUPS.map((g) => (
              <optgroup key={g.metal} label={g.metal}>
                {g.alloys.map((a) => (
                  <option key={a.id} value={a.id}>{a.name}</option>
                ))}
              </optgroup>
            ))}
          </select>
          <p className="mt-1.5 text-xs text-light">{alloy.use}</p>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-light">Price shock</label>
              <span className="text-xs font-semibold text-ink tabular-nums">
                {priceShock >= 0 ? "+" : ""}{priceShock}%
              </span>
            </div>
            <input
              type="range"
              min="-10"
              max="50"
              step="1"
              value={priceShock}
              onChange={(e) => setPriceShock(parseInt(e.target.value, 10))}
              className="gx-range"
            />
            <p className="mt-1 text-[11px] text-light">What if the metal price moves?</p>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-light">Production change</label>
              <span className="text-xs font-semibold text-ink tabular-nums">
                {productionChange >= 0 ? "+" : ""}{productionChange}%
              </span>
            </div>
            <input
              type="range"
              min="-70"
              max="20"
              step="1"
              value={productionChange}
              onChange={(e) => setProductionChange(parseInt(e.target.value, 10))}
              className="gx-range"
            />
            <p className="mt-1 text-[11px] text-light">What if global production shifts?</p>
          </div>

          <div className="mt-5 rounded-lg border border-line bg-bg2 p-3">
            <p className="text-xs text-light">Scenario risk level</p>
            <p className={`text-lg font-semibold ${impact.risk.token === "error" ? "text-error" : impact.risk.token === "warning" ? "text-warning" : "text-success"}`}>
              {impact.risk.label}
            </p>
            <p className="text-xs text-light mt-1">
              Annual spend baseline: ${alloy.annualSpend}M
            </p>
          </div>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <KpiCard
              label="Est. cost impact"
              value={`+${impact.costImpactPct.toFixed(1)}%`}
              tone="highlight"
              progress={Math.min(1, impact.costImpactPct / 40)}
            />
            <KpiCard
              label="At-risk spend"
              value={`$${impact.atRiskSpend.toFixed(1)}M`}
              tone="risk"
              progress={Math.min(1, impact.atRiskSpend / alloy.annualSpend)}
            />
            <KpiCard
              label="Margin hit"
              value={`−${impact.marginHitPts.toFixed(1)} pts`}
              tone="risk"
              progress={Math.min(1, impact.marginHitPts / 8)}
            />
            <KpiCard
              label="Lead-time change"
              value={`+${impact.leadTimeWeeks.toFixed(1)} wks`}
              sub="vs. baseline"
            />
          </div>

          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            <div className="rounded-lg border border-line p-4">
              <p className="text-xs text-light">Supply availability</p>
              <p className="text-xl font-semibold text-error tabular-nums">
                −{Math.round(impact.availabilityDrop * 100)}%
              </p>
            </div>
            <div className="rounded-lg border border-line p-4">
              <p className="text-xs text-light">Global demand impact</p>
              <p className="text-xl font-semibold text-ink tabular-nums">
                −{Math.round(impact.demandDrop * 100)}%
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-line p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-ink">Price vs. demand trajectory</p>
              <p className="text-[11px] text-light">illustrative · next 12 months</p>
            </div>
            <DemandPriceChart series={series} />
          </div>
        </div>
      </div>
    </div>
  );
}
