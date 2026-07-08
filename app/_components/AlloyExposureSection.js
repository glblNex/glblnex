'use client'

import React, { useState } from "react";
import GeoRiskMap from "./GeoRiskMap";
import AlloyExposure from "./AlloyExposure";
import { getAlloy } from "../_data/metals";

const FEATURED = ["ti-6al4v", "inconel-718", "al-7075", "ss-316l", "cu-c26000", "mg-az31"];

export default function AlloyExposureSection() {
  const [alloyId, setAlloyId] = useState("inconel-718");
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
              className={`text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
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

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
        <div>
          <p className="text-xs uppercase tracking-wider text-highlight font-semibold mb-2">
            {alloy.name} · {alloy.use}
          </p>
          <p className="text-light text-sm mb-6 max-w-md">
            Every alloy is decomposed into the metals you actually depend on — each mapped to its
            source countries and concentration risk.
          </p>
          <AlloyExposure alloy={alloy} />
        </div>
        <div className="rounded-lg border border-line overflow-hidden">
          <GeoRiskMap alloy={alloy} />
        </div>
      </div>
    </div>
  );
}
