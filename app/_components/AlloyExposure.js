'use client'

import React from "react";
import { motion } from "motion/react";
import { REGIONS, alloyMetals, riskColor, riskLevel } from "../_data/metals";

export default function AlloyExposure({ alloy }) {
  const metals = alloyMetals(alloy);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        {metals.map((m, i) => {
          const [topCode, topShare] = m.meta.sources[0];
          const level = riskLevel(m.conc);
          const color = riskColor(m.conc);
          return (
            <motion.div
              key={m.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-4"
            >
              <div className="flex items-center gap-3 min-w-[130px]">
                <span
                  className="grid place-items-center h-8 w-8 rounded-md text-[11px] font-bold text-white shrink-0"
                  style={{ backgroundColor: color }}
                >
                  {m.meta.symbol}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-medium text-ink">{m.meta.name}</p>
                  <p className="text-xs text-light">{m.pct}% of alloy</p>
                </div>
              </div>

              <div>
                <div className="h-2 w-full rounded-full bg-line overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.round(m.conc * 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.1 + 0.06 * i, ease: "easeOut" }}
                  />
                </div>
                <p className="mt-1 text-xs text-light">
                  Top source: <span className="text-ink font-medium">{REGIONS[topCode]?.name || topCode}</span> · {topShare}% of global supply
                </p>
              </div>

              <span
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                style={{ color, backgroundColor: `${color}14` }}
              >
                {level.label} risk
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
