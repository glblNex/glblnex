'use client'

import React, { useMemo, useId } from "react";
import { motion } from "motion/react";
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

// Simplified continent silhouettes for instant map readability
const LANDMASSES = [
  { d: "M120,110 Q180,80 260,95 Q310,120 290,170 Q250,210 190,195 Q130,180 110,140 Z", opacity: 0.07 },
  { d: "M270,260 Q320,240 360,280 Q370,340 320,380 Q270,390 250,330 Q240,290 270,260 Z", opacity: 0.06 },
  { d: "M460,90 Q540,70 590,110 Q610,180 570,260 Q520,340 480,320 Q450,220 460,90 Z", opacity: 0.07 },
  { d: "M620,80 Q780,60 900,100 Q940,180 880,260 Q780,300 680,240 Q600,180 620,80 Z", opacity: 0.08 },
  { d: "M820,300 Q880,290 920,330 Q910,370 860,380 Q820,360 820,300 Z", opacity: 0.06 },
];

export default function GeoRiskMap({
  alloy,
  activeRegion = null,
  showLabels = true,
  animated = false,
  className = "",
}) {
  const uid = useId().replace(/:/g, "");
  const nodes = useMemo(() => (alloy ? sourceNodes(alloy) : []), [alloy]);
  const maxW = useMemo(() => Math.max(0.001, ...nodes.map((n) => n.weight)), [nodes]);

  return (
    <svg
      viewBox="0 0 1000 500"
      className={`w-full h-auto block ${className}`}
      role="img"
      aria-label="Global metals supply map"
    >
      <defs>
        <pattern id={`gxdots-${uid}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.4" fill="#0A0A0A" opacity="0.05" />
        </pattern>
        <radialGradient id={`gxglow-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#005B97" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#005B97" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`gxscan-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#005B97" stopOpacity="0" />
          <stop offset="50%" stopColor="#005B97" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#005B97" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="1000" height="500" rx="18" fill="#F8FAFB" />
      <rect x="0" y="0" width="1000" height="500" rx="18" fill={`url(#gxdots-${uid})`} />
      <rect x="0.5" y="0.5" width="999" height="499" rx="18" fill="none" stroke="#E6E8EC" />

      {/* continent landmasses */}
      <g fill="#005B97">
        {LANDMASSES.map((l, i) => (
          <path key={i} d={l.d} opacity={l.opacity} />
        ))}
      </g>

      {/* graticule */}
      <g stroke="#0A0A0A" strokeOpacity="0.04" fill="none">
        <ellipse cx="500" cy="250" rx="470" ry="215" />
        <ellipse cx="500" cy="250" rx="320" ry="215" />
        <ellipse cx="500" cy="250" rx="165" ry="215" />
        <line x1="30" y1="250" x2="970" y2="250" />
        <line x1="30" y1="150" x2="970" y2="150" />
        <line x1="30" y1="350" x2="970" y2="350" />
      </g>

      {/* supply flow arcs */}
      <g fill="none">
        {nodes.map((n, i) => {
          const from = REGIONS[n.code];
          const isActive = activeRegion === n.code;
          const isFlow = animated && (isActive || i < 3);
          const path = arcPath(from, DESTINATION);
          const ArcTag = animated ? motion.path : "path";
          const arcProps = animated
            ? {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.6, delay: 0.15 + i * 0.1, ease: "easeOut" },
              }
            : {};

          return (
            <ArcTag
              key={`arc-${n.code}`}
              d={path}
              stroke={isActive ? "#B00020" : "#005B97"}
              strokeOpacity={isActive ? 0.85 : 0.35}
              strokeWidth={isActive ? 2.4 : 1.4}
              className={isFlow ? "gx-flow" : undefined}
              {...arcProps}
            />
          );
        })}
      </g>

      {/* source nodes */}
      {nodes.map((n, i) => {
        const p = REGIONS[n.code];
        const isActive = activeRegion === n.code;
        const r = 5 + (n.weight / maxW) * 9;
        const color = isActive ? "#B00020" : riskColor(n.conc);
        const NodeTag = animated ? motion.g : "g";
        const nodeProps = animated
          ? {
              initial: { opacity: 0, scale: 0 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.45, delay: 0.5 + i * 0.1, ease: "backOut" },
            }
          : {};

        return (
          <NodeTag key={`node-${n.code}`} {...nodeProps}>
            {(isActive || (animated && i < 2)) && (
              <circle cx={p.x} cy={p.y} r={r} fill={color} className="gx-ping" opacity="0.45" />
            )}
            <circle cx={p.x} cy={p.y} r={r + 7} fill={`url(#gxglow-${uid})`} />
            <circle cx={p.x} cy={p.y} r={r} fill={color} fillOpacity="0.92" stroke="#fff" strokeWidth="1.5" />
            {showLabels && (
              <text
                x={p.x}
                y={p.y - r - 8}
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
                fill="#0A0A0A"
                fillOpacity="0.75"
              >
                {p.name}
              </text>
            )}
          </NodeTag>
        );
      })}

      {/* destination */}
      <g>
        <circle cx={DESTINATION.x} cy={DESTINATION.y} r="18" fill={`url(#gxglow-${uid})`} />
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
            y={DESTINATION.y - 20}
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
            fill="#005B97"
          >
            {DESTINATION.name}
          </text>
        )}
      </g>

      {/* scan line decorator (hero only) */}
      {animated && (
        <rect
          x="0"
          y="0"
          width="1000"
          height="80"
          fill={`url(#gxscan-${uid})`}
          className="gx-scan"
          style={{ pointerEvents: "none" }}
        />
      )}
    </svg>
  );
}
