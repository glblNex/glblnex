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
    { label: "Availability", value: `−${Math.round(impact.availabilityDrop * 100)}%`, tone: "text-error" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="rounded-xl border border-line bg-white shadow-[0_30px_80px_-40px_rgba(10,10,10,0.4)] overflow-hidden"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-bg2">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 text-xs font-medium text-light">globalNex · Scenario Analysis</span>
        <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded bg-highlightSoft text-highlight">
          {alloy.name}
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_190px]">
        <div className="p-4 md:border-r border-line">
          <GeoRiskMap alloy={alloy} activeRegion="CN" />
        </div>
        <div className="p-4 flex flex-col gap-3 border-t md:border-t-0 border-line">
          <div className="rounded-lg border border-line bg-bg2 p-3">
            <p className="text-[11px] text-light">Scenario</p>
            <p className="text-sm font-medium text-ink leading-snug mt-0.5">Price +20% · Production −50%</p>
          </div>
          {kpis.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
              className="rounded-lg border border-line p-3"
            >
              <p className="text-[11px] text-light">{k.label}</p>
              <p className={`text-xl font-semibold tabular-nums ${k.tone}`}>{k.value}</p>
            </motion.div>
          ))}
          <div className="rounded-lg bg-ink text-white p-3">
            <p className="text-[11px] text-white/60">Risk level</p>
            <p className="text-lg font-semibold">{impact.risk.label}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
