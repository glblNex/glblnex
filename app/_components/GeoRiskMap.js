'use client'

import React, { useMemo } from "react";
import {
  REGIONS,
  DESTINATION,
  alloyMetals,
  riskColor,
} from "../_data/metals";

function arcPath(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy) || 1;
  const nx = -dy / dist;
  const ny = dx / dist;
  const curve = Math.min(120, dist * 0.3);
  const mx = (a.x + b.x) / 2 + nx * curve;
  const my = (a.y + b.y) / 2 + ny * curve - 20;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

// Aggregate the source regions that feed a given alloy.
function sourceNodes(alloy) {
  const map = new Map();
  for (const m of alloyMetals(alloy)) {
    for (const [code, share] of m.meta.sources) {
      const weight = (m.pct / 100) * (share / 100);
      const prev = map.get(code) || { code, weight: 0, conc: 0 };
      prev.weight += weight;
      prev.conc = Math.max(prev.conc, m.conc);
      map.set(code, prev);
    }
  }
  return [...map.values()]
    .filter((n) => REGIONS[n.code])
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 7);
}

export default function GeoRiskMap({
  alloy,
  activeRegion = null,
  showLabels = true,
  className = "",
}) {
  const nodes = useMemo(() => (alloy ? sourceNodes(alloy) : []), [alloy]);
  const maxW = useMemo(() => Math.max(0.001, ...nodes.map((n) => n.weight)), [nodes]);

  return (
    <svg
      viewBox="0 0 1000 500"
      className={`w-full h-auto ${className}`}
      role="img"
      aria-label="Global metals supply map"
    >
      <defs>
        <pattern id="gxdots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.4" fill="#0A0A0A" opacity="0.05" />
        </pattern>
        <radialGradient id="gxglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#005B97" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#005B97" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="1000" height="500" rx="18" fill="#FBFCFD" />
      <rect x="0" y="0" width="1000" height="500" rx="18" fill="url(#gxdots)" />
      <rect x="0.5" y="0.5" width="999" height="499" rx="18" fill="none" stroke="#E6E8EC" />

      {/* graticule to signal a world map */}
      <g stroke="#0A0A0A" strokeOpacity="0.045" fill="none">
        <ellipse cx="500" cy="250" rx="470" ry="215" />
        <ellipse cx="500" cy="250" rx="320" ry="215" />
        <ellipse cx="500" cy="250" rx="165" ry="215" />
        <line x1="30" y1="250" x2="970" y2="250" />
        <line x1="30" y1="150" x2="970" y2="150" />
        <line x1="30" y1="350" x2="970" y2="350" />
      </g>

      {/* base flow arcs (static) */}
      <g fill="none">
        {nodes.map((n) => {
          const from = REGIONS[n.code];
          const isActive = activeRegion === n.code;
          if (isActive) return null;
          return (
            <path
              key={`arc-${n.code}`}
              d={arcPath(from, DESTINATION)}
              stroke="#005B97"
              strokeOpacity="0.28"
              strokeWidth="1.2"
            />
          );
        })}
        {/* active arc: highlighted + animated flow */}
        {nodes.map((n) => {
          const from = REGIONS[n.code];
          const isActive = activeRegion === n.code;
          if (!isActive) return null;
          return (
            <path
              key={`arc-active-${n.code}`}
              d={arcPath(from, DESTINATION)}
              stroke="#B00020"
              strokeOpacity="0.8"
              strokeWidth="2.2"
              className="gx-flow"
            />
          );
        })}
      </g>

      {/* source nodes */}
      {nodes.map((n) => {
        const p = REGIONS[n.code];
        const isActive = activeRegion === n.code;
        const r = 5 + (n.weight / maxW) * 8;
        const color = isActive ? "#B00020" : riskColor(n.conc);
        return (
          <g key={`node-${n.code}`}>
            {isActive && (
              <circle cx={p.x} cy={p.y} r={r} fill={color} className="gx-ping" opacity="0.5" />
            )}
            <circle cx={p.x} cy={p.y} r={r + 6} fill="url(#gxglow)" />
            <circle cx={p.x} cy={p.y} r={r} fill={color} fillOpacity="0.9" stroke="#fff" strokeWidth="1.5" />
            {showLabels && (
              <text
                x={p.x}
                y={p.y - r - 7}
                textAnchor="middle"
                fontSize="13"
                fontWeight="600"
                fill="#0A0A0A"
                fillOpacity="0.7"
              >
                {p.name}
              </text>
            )}
          </g>
        );
      })}

      {/* destination node */}
      <g>
        <circle cx={DESTINATION.x} cy={DESTINATION.y} r="16" fill="url(#gxglow)" />
        <rect
          x={DESTINATION.x - 7}
          y={DESTINATION.y - 7}
          width="14"
          height="14"
          rx="3"
          transform={`rotate(45 ${DESTINATION.x} ${DESTINATION.y})`}
          fill="#005B97"
          stroke="#fff"
          strokeWidth="1.5"
        />
        {showLabels && (
          <text
            x={DESTINATION.x}
            y={DESTINATION.y - 18}
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill="#005B97"
          >
            {DESTINATION.name}
          </text>
        )}
      </g>
    </svg>
  );
}
