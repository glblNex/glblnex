'use client'

import React, { useState } from "react";
import AlloyBreakdown from "./AlloyBreakdown";
import { getAlloy } from "../_data/metals";

const FEATURED = ["ti-6al4v", "inconel-718", "al-7075", "ss-316l"];

export default function AlloyExposureSection() {
  const [alloyId, setAlloyId] = useState("ti-6al4v");
  const alloy = getAlloy(alloyId);
  const chips = FEATURED.map((id) => getAlloy(id)).filter(Boolean);

  return (
    <div className="rounded-xl border border-line bg-white p-5 lg:p-8">
      <div className="flex flex-wrap gap-2 mb-8">
        {chips.map((a) => {
          const active = a.id === alloyId;
          return (
            <button
              key={a.id}
              onClick={() => setAlloyId(a.id)}
              className={`text-sm px-4 py-2 rounded-full border transition-colors duration-200 ${
                active
                  ? "bg-ink text-white border-ink"
                  : "bg-white text-ink border-line hover:border-ink"
              }`}
            >
              {a.name}
            </button>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div>
          <p className="text-xs uppercase tracking-wider text-highlight font-semibold mb-2">
            {alloy.name}
          </p>
          <p className="text-light text-sm leading-relaxed max-w-md">
            {alloy.use}. Each constituent metal carries its own price volatility and supply
            concentration. That exposure stays invisible when you only watch spot commodities.
          </p>
        </div>
        <AlloyBreakdown alloy={alloy} />
      </div>
    </div>
  );
}
