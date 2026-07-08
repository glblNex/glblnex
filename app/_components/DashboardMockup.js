'use client'

import React from "react";
import { motion } from "motion/react";
import GeoRiskMap from "./GeoRiskMap";
import { getAlloy, computeScenarioImpact } from "../_data/metals";

export default function DashboardMockup() {
  const alloy = getAlloy("al-7075");
  const impact = computeScenarioImpact(alloy, 20, -50);

  const kpis = [
    { label: "Cost impact", value: `+${impact.costImpactPct.toFixed(1)}%`, tone: "text-highlight" },
    { label: "At-risk spend", value: `$${impact.atRiskSpend.toFixed(1)}M`, tone: "text-error" },
    { label: "Availability", value: `${Math.round(impact.availabilityDrop * 100)}% drop`, tone: "text-error" },
  ];

  return (
    <div className="relative">
      {/* ambient glow behind card */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-3xl bg-highlight/10 blur-3xl gx-glow-pulse pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative gx-float rounded-xl border border-line bg-white shadow-[0_30px_80px_-40px_rgba(10,10,10,0.45)] overflow-hidden"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-bg2">
          <span className="h-2.5 w-2.5 rounded-full bg-error/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/40" />
          <span className="ml-3 text-xs font-medium text-light">globalNex Supply Risk Map</span>
          <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded bg-highlightSoft text-highlight">
            {alloy.name}
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_200px]">
          <div className="relative p-3 lg:p-4 lg:border-r border-line min-h-[220px] lg:min-h-[280px]">
            <GeoRiskMap alloy={alloy} activeRegion="CN" animated showLabels />

            {/* floating stat chip on map */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-4 left-4 rounded-lg border border-line bg-white/95 backdrop-blur-sm px-3 py-2 shadow-sm"
            >
              <p className="text-[10px] text-light uppercase tracking-wider">Active shock</p>
              <p className="text-xs font-semibold text-error">China supply squeeze</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute top-4 right-4 rounded-lg border border-line bg-white/95 backdrop-blur-sm px-3 py-2 shadow-sm"
            >
              <p className="text-[10px] text-light uppercase tracking-wider">Risk score</p>
              <p className="text-sm font-bold text-error">{impact.risk.label}</p>
            </motion.div>
          </div>

          <div className="p-4 flex flex-col gap-2.5 border-t lg:border-t-0 border-line bg-white">
            <div className="rounded-lg border border-line bg-bg2 p-3">
              <p className="text-[11px] text-light">Scenario</p>
              <p className="text-sm font-medium text-ink leading-snug mt-0.5">Price up 20%, production down 50%</p>
            </div>
            {kpis.map((k, i) => (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.12, duration: 0.45 }}
                className="rounded-lg border border-line p-3"
              >
                <p className="text-[11px] text-light">{k.label}</p>
                <p className={`text-xl font-semibold tabular-nums ${k.tone}`}>{k.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
