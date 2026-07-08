'use client'

import React from "react";
import { motion } from "motion/react";
import { alloyMetals, riskColor } from "../_data/metals";

export default function AlloyBreakdown({ alloy }) {
  const metals = alloyMetals(alloy);

  return (
    <div className="w-full flex flex-col gap-5">
      {metals.map((m, i) => {
        const exposure = m.pct / 100;
        const volScore = m.volatility;
        const color = riskColor(volScore);
        return (
          <motion.div
            key={m.key}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
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
              <span
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                style={{ color, backgroundColor: `${color}14` }}
              >
                {Math.round(volScore * 100)}% volatility
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-light mb-1.5">Composition</p>
                <div className="h-2 w-full rounded-full bg-line overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-highlight"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.round(exposure * 100)}%` }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                  />
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-light mb-1.5">Price exposure</p>
                <div className="h-2 w-full rounded-full bg-line overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.round(exposure * volScore * 100)}%` }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
