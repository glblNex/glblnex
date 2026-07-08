'use client'

import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import GeoRiskMap from "./GeoRiskMap";
import {
  ALLOY_GROUPS,
  SCENARIOS,
  getAlloy,
  getScenario,
  computeImpact,
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

function Trendline({ impact }) {
  const points = useMemo(() => {
    const n = 24;
    const amp = impact.costImpactPct / 100;
    const arr = [];
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      const ramp = 1 / (1 + Math.exp(-(t - 0.45) * 10));
      const wobble = Math.sin(t * 9) * 0.02;
      const y = 0.72 - (ramp * amp * 1.6 + wobble) ;
      arr.push([t * 300, Math.max(6, Math.min(92, y * 100))]);
    }
    return arr;
  }, [impact.costImpactPct]);

  const d = points.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${d} L 300 100 L 0 100 Z`;

  return (
    <svg viewBox="0 0 300 100" className="w-full h-24" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gxtrend" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#005B97" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#005B97" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="28" x2="300" y2="28" stroke="#E6E8EC" strokeWidth="0.6" strokeDasharray="3 4" />
      <motion.path d={area} fill="url(#gxtrend)" initial={false} animate={{ d: area }} transition={{ duration: 0.6 }} />
      <motion.path
        d={d}
        fill="none"
        stroke="#005B97"
        strokeWidth="2"
        strokeLinecap="round"
        initial={false}
        animate={{ d }}
        transition={{ duration: 0.6 }}
      />
    </svg>
  );
}

export default function ScenarioDemo() {
  const [alloyId, setAlloyId] = useState("ti-6al4v");
  const [scenarioId, setScenarioId] = useState("cn-ti");
  const [severity, setSeverity] = useState(0.55);

  const alloy = getAlloy(alloyId);
  const scenario = getScenario(scenarioId);
  const impact = useMemo(() => computeImpact(alloy, scenario, severity), [alloy, scenario, severity]);

  return (
    <div className="rounded-xl border border-line bg-white shadow-[0_20px_60px_-30px_rgba(10,10,10,0.35)] overflow-hidden">
      {/* window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-bg2">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 text-xs font-medium text-light">globalnex · Geo-Risk Studio</span>
        <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-highlight bg-highlightSoft px-2 py-0.5 rounded">
          Live demo
        </span>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr]">
        {/* controls */}
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

          <label className="block text-xs font-medium text-light mb-1.5 mt-5">Geo-shock scenario</label>
          <select
            value={scenarioId}
            onChange={(e) => setScenarioId(e.target.value)}
            className="w-full rounded-md border border-line bg-white text-ink text-sm px-3 py-2.5 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20"
          >
            {SCENARIOS.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
          <p className="mt-1.5 text-xs text-light">{scenario.kind}</p>

          <div className="mt-5">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-light">Shock severity</label>
              <span className="text-xs font-semibold text-ink tabular-nums">{Math.round(severity * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={severity}
              onChange={(e) => setSeverity(parseFloat(e.target.value))}
              className="gx-range"
            />
          </div>

          <div className="mt-5 rounded-lg border border-line bg-bg2 p-3">
            <p className="text-xs text-light">Overall supply-risk</p>
            <p className="text-lg font-semibold text-error">{impact.risk.label}</p>
            <p className="text-xs text-light mt-1">
              {impact.affected.length
                ? `Exposed inputs: ${impact.affected.map((a) => a.name).join(", ")}`
                : "No direct exposure for this alloy."}
            </p>
          </div>
        </div>

        {/* map + kpis */}
        <div className="p-5">
          <div className="rounded-lg border border-line overflow-hidden">
            <GeoRiskMap alloy={alloy} activeRegion={scenario.region} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            <KpiCard
              label="At-risk spend"
              value={`$${impact.atRiskSpend.toFixed(1)}M`}
              tone="risk"
              progress={Math.min(1, impact.atRiskSpend / alloy.annualSpend)}
            />
            <KpiCard
              label="Supply availability"
              value={`−${Math.round(impact.availabilityDrop * 100)}%`}
              tone="risk"
              progress={impact.availabilityDrop}
            />
            <KpiCard
              label="Lead-time added"
              value={`+${impact.leadTimeWeeks.toFixed(1)} wks`}
              sub="vs. baseline"
            />
            <KpiCard
              label="Est. cost impact"
              value={`+${impact.costImpactPct.toFixed(1)}%`}
              tone="highlight"
              sub={`≈ ${impact.marginHitPts.toFixed(1)} pts margin`}
            />
          </div>

          <div className="mt-4 rounded-lg border border-line p-4">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs font-medium text-ink">Projected unit-cost trajectory</p>
              <p className="text-[11px] text-light">next 12 months (illustrative)</p>
            </div>
            <Trendline impact={impact} />
          </div>
        </div>
      </div>
    </div>
  );
}
