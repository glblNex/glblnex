'use client'

import React from "react";
import { motion } from "motion/react";
import { urbanist } from "../_style/fonts";

const COMPOSITION = [
  { metal: "Aluminum", share: "97.0%", move: "+8.2%" },
  { metal: "Magnesium", share: "1.0%", move: "−3.1%" },
  { metal: "Silicon", share: "0.6%", move: "+1.4%" },
  { metal: "Other", share: "1.4%", move: "+0.8%" },
];

export default function OutcomeDeliverable() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-3xl bg-highlight/10 blur-3xl gx-glow-pulse pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative gx-float rounded-2xl border border-line bg-white shadow-[0_30px_80px_-40px_rgba(10,10,10,0.45)] overflow-hidden"
      >
        <div className="px-5 py-4 lg:px-6 lg:py-5 border-b border-line bg-bg2/50">
          <p className="text-[10px] uppercase tracking-[0.18em] text-highlight font-semibold">
            Sample deliverable
          </p>
          <p className={`mt-1.5 text-lg lg:text-xl font-medium text-ink ${urbanist.className}`}>
            Surcharge rejection · 6061-T6
          </p>
          <p className="mt-1 text-xs text-light">
            One of five outcomes: counter, audit, route, quantify, trace.
          </p>
        </div>

        <div className="p-5 lg:p-6">
          <div className="flex items-baseline justify-between gap-3 mb-4">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-light">Supplier claim</p>
              <p className={`mt-1 text-2xl font-light text-ink tabular-nums ${urbanist.className}`}>
                +12%
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wide text-light">True cost increase</p>
              <p className={`mt-1 text-2xl font-light text-highlight tabular-nums ${urbanist.className}`}>
                +4.2%
              </p>
            </div>
          </div>

          <div className="space-y-1.5 mb-5">
            {COMPOSITION.map((c, i) => (
              <motion.div
                key={c.metal}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                className="flex items-center justify-between gap-3 rounded-lg border border-line bg-bg2/40 px-3 py-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-sm font-medium text-ink w-[4.5rem] shrink-0">{c.metal}</span>
                  <span className="text-[11px] text-light">{c.share}</span>
                </div>
                <span
                  className={`text-sm tabular-nums font-medium ${
                    c.move.startsWith("−") ? "text-success" : "text-ink"
                  }`}
                >
                  {c.move}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="rounded-xl border border-highlight/25 bg-highlightSoft/40 p-4 lg:p-5"
          >
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-highlight font-semibold">
                  Your counter
                </p>
                <p className={`mt-1 text-4xl font-light text-ink tabular-nums ${urbanist.className}`}>
                  5%
                </p>
              </div>
              <div className="text-right max-w-[11rem]">
                <p className="text-[10px] uppercase tracking-wide text-light">Recommended move</p>
                <p className="mt-1 text-sm font-medium text-ink leading-snug">
                  Accept 5%. Lock the rest of the year.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
