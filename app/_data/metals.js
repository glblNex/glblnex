// Illustrative mockup dataset for the globalNex metals scenario analyzer.
// All figures are simplified approximations used to power the marketing
// mockups and the interactive demo. They are NOT live market data.

// Supply hubs positioned on a simplified equirectangular map.
// viewBox is 0..1000 (x) by 0..500 (y).
export const REGIONS = {
  CN: { name: "China", x: 812, y: 152 },
  ID: { name: "Indonesia", x: 828, y: 268 },
  RU: { name: "Russia", x: 742, y: 96 },
  CL: { name: "Chile", x: 308, y: 340 },
  CD: { name: "DR Congo", x: 560, y: 262 },
  BR: { name: "Brazil", x: 356, y: 292 },
  AU: { name: "Australia", x: 866, y: 326 },
  CA: { name: "Canada", x: 214, y: 104 },
  ZA: { name: "South Africa", x: 566, y: 336 },
  US: { name: "United States", x: 236, y: 156 },
  KZ: { name: "Kazakhstan", x: 686, y: 122 },
  JP: { name: "Japan", x: 876, y: 158 },
  IN: { name: "India", x: 716, y: 198 },
  PH: { name: "Philippines", x: 836, y: 222 },
};

// Destination node ("your plant") that supply flows converge toward.
export const DESTINATION = { name: "Your facility", x: 500, y: 128 };

// Metals: refined-production / supply concentration by country (share %).
// basePrice is an illustrative USD/tonne index; volatility is annualized (0..1).
export const METALS = {
  aluminum: { name: "Aluminum", symbol: "Al", basePrice: 2400, volatility: 0.32, sources: [["CN", 59], ["IN", 6], ["RU", 5], ["CA", 5]] },
  iron: { name: "Steel (iron)", symbol: "Fe", basePrice: 800, volatility: 0.28, sources: [["CN", 54], ["IN", 7], ["JP", 5], ["RU", 4], ["US", 4]] },
  titanium: { name: "Titanium", symbol: "Ti", basePrice: 12000, volatility: 0.45, sources: [["CN", 57], ["JP", 17], ["RU", 13], ["KZ", 7]] },
  copper: { name: "Copper", symbol: "Cu", basePrice: 9000, volatility: 0.38, sources: [["CN", 42], ["CL", 9], ["CD", 8], ["JP", 6]] },
  nickel: { name: "Nickel", symbol: "Ni", basePrice: 18000, volatility: 0.52, sources: [["ID", 50], ["CN", 15], ["PH", 11], ["RU", 9]] },
  gold: { name: "Gold", symbol: "Au", basePrice: 62000000, volatility: 0.25, sources: [["CN", 10], ["RU", 9], ["AU", 9], ["US", 6], ["CA", 5]] },
  zinc: { name: "Zinc", symbol: "Zn", basePrice: 2700, volatility: 0.35, sources: [["CN", 33], ["IN", 8], ["KZ", 6], ["AU", 5]] },
  magnesium: { name: "Magnesium", symbol: "Mg", basePrice: 3000, volatility: 0.48, sources: [["CN", 88], ["RU", 4], ["US", 3]] },
  vanadium: { name: "Vanadium", symbol: "V", basePrice: 30000, volatility: 0.55, sources: [["CN", 65], ["RU", 18], ["ZA", 8]] },
  chromium: { name: "Chromium", symbol: "Cr", basePrice: 9500, volatility: 0.40, sources: [["ZA", 43], ["KZ", 26], ["IN", 12]] },
  niobium: { name: "Niobium", symbol: "Nb", basePrice: 45000, volatility: 0.42, sources: [["BR", 88], ["CA", 10]] },
  molybdenum: { name: "Molybdenum", symbol: "Mo", basePrice: 40000, volatility: 0.44, sources: [["CN", 45], ["CL", 20], ["US", 15]] },
  manganese: { name: "Manganese", symbol: "Mn", basePrice: 2000, volatility: 0.33, sources: [["ZA", 36], ["AU", 15], ["CN", 12]] },
  silicon: { name: "Silicon", symbol: "Si", basePrice: 2500, volatility: 0.36, sources: [["CN", 79], ["RU", 6], ["US", 4]] },
};

// Alloys grouped by parent metal. `composition` is by weight %.
// `annualSpend` (USD millions) is an illustrative buyer BOM baseline.
export const ALLOY_GROUPS = [
  {
    metal: "Aluminum",
    alloys: [
      { id: "al-6061", name: "6061-T6", use: "Structural extrusions, frames", annualSpend: 9.4, composition: { aluminum: 97.9, magnesium: 1.0, silicon: 0.6, copper: 0.3, chromium: 0.2 } },
      { id: "al-7075", name: "7075-T6", use: "Aerospace airframe, high-strength", annualSpend: 14.2, composition: { aluminum: 89.5, zinc: 5.6, magnesium: 2.5, copper: 1.6 } },
      { id: "al-2024", name: "2024-T3", use: "Aircraft skins, fatigue-critical", annualSpend: 7.8, composition: { aluminum: 93.5, copper: 4.4, magnesium: 1.5, manganese: 0.6 } },
    ],
  },
  {
    metal: "Titanium",
    alloys: [
      { id: "ti-6al4v", name: "Ti-6Al-4V (Grade 5)", use: "Turbine, airframe, medical", annualSpend: 21.5, composition: { titanium: 90, aluminum: 6, vanadium: 4 } },
      { id: "ti-gr2", name: "Grade 2 (CP)", use: "Corrosion-resistant, heat exchangers", annualSpend: 6.1, composition: { titanium: 99.8, iron: 0.2 } },
    ],
  },
  {
    metal: "Steel / Stainless",
    alloys: [
      { id: "ss-304", name: "304 Stainless", use: "General fabrication, housings", annualSpend: 5.6, composition: { iron: 72, chromium: 19, nickel: 9 } },
      { id: "ss-316l", name: "316L Stainless", use: "Marine, chemical, medical", annualSpend: 8.9, composition: { iron: 68.5, chromium: 17, nickel: 12, molybdenum: 2.5 } },
      { id: "steel-4140", name: "4140 Alloy Steel", use: "Shafts, gears, tooling", annualSpend: 4.2, composition: { iron: 96.8, chromium: 1.0, manganese: 0.9, molybdenum: 0.2, silicon: 0.3 } },
    ],
  },
  {
    metal: "Nickel superalloys",
    alloys: [
      { id: "inconel-718", name: "Inconel 718", use: "Hot-section turbine parts", annualSpend: 18.7, composition: { nickel: 53, chromium: 19, iron: 18, niobium: 5, molybdenum: 3 } },
      { id: "inconel-625", name: "Inconel 625", use: "Exhaust, marine, chemical", annualSpend: 11.3, composition: { nickel: 61, chromium: 22, molybdenum: 9, niobium: 3.6 } },
    ],
  },
  {
    metal: "Copper",
    alloys: [
      { id: "cu-c11000", name: "C11000 (ETP)", use: "Busbar, wiring, connectors", annualSpend: 6.7, composition: { copper: 99.9 } },
      { id: "cu-c26000", name: "C26000 (Brass)", use: "Fittings, hardware, ammo", annualSpend: 3.9, composition: { copper: 70, zinc: 30 } },
    ],
  },
  {
    metal: "Gold",
    alloys: [
      { id: "au-999", name: "Fine Gold 999", use: "Bonding wire, plating, contacts", annualSpend: 12.5, composition: { gold: 99.9 } },
    ],
  },
  {
    metal: "Zinc & Magnesium",
    alloys: [
      { id: "zamak-3", name: "Zamak 3", use: "Die-cast housings, brackets", annualSpend: 2.8, composition: { zinc: 96, aluminum: 4 } },
      { id: "mg-az31", name: "AZ31 Magnesium", use: "Lightweight housings, EV", annualSpend: 4.6, composition: { magnesium: 96, aluminum: 3, zinc: 1 } },
    ],
  },
];

export const ALLOYS = ALLOY_GROUPS.flatMap((g) => g.alloys);

export function getAlloy(id) {
  return ALLOYS.find((a) => a.id === id) || ALLOYS[0];
}

// Curated geo-shock scenarios tied to real-world chokepoints.
export const SCENARIOS = [
  { id: "cn-mg", label: "China magnesium export controls", region: "CN", metals: ["magnesium", "silicon", "aluminum"], severity: 0.7, kind: "Export controls" },
  { id: "id-ni", label: "Indonesia nickel export policy", region: "ID", metals: ["nickel"], severity: 0.6, kind: "Export policy" },
  { id: "ru-sanction", label: "Russia sanctions escalation", region: "RU", metals: ["aluminum", "nickel", "titanium", "vanadium"], severity: 0.65, kind: "Sanctions" },
  { id: "cn-ti", label: "China titanium supply squeeze", region: "CN", metals: ["titanium", "aluminum"], severity: 0.55, kind: "Supply squeeze" },
  { id: "cl-cu", label: "Chile copper mine outage", region: "CL", metals: ["copper", "molybdenum"], severity: 0.5, kind: "Mine outage" },
  { id: "za-cr", label: "South Africa chromium power crisis", region: "ZA", metals: ["chromium", "manganese"], severity: 0.6, kind: "Power crisis" },
  { id: "br-nb", label: "Brazil niobium logistics disruption", region: "BR", metals: ["niobium"], severity: 0.75, kind: "Logistics" },
];

export function getScenario(id) {
  return SCENARIOS.find((s) => s.id === id) || SCENARIOS[0];
}

// Share of a metal's supply that comes from a given region (0..1).
export function regionShareOfMetal(metalKey, regionCode) {
  const metal = METALS[metalKey];
  if (!metal) return 0;
  const hit = metal.sources.find(([code]) => code === regionCode);
  return hit ? hit[1] / 100 : 0;
}

// Top single-country share => concentration proxy for geo-risk (0..1).
export function concentration(metalKey) {
  const metal = METALS[metalKey];
  if (!metal) return 0;
  return Math.max(...metal.sources.map(([, s]) => s)) / 100;
}

export function riskLevel(score) {
  if (score >= 0.6) return { label: "High", token: "error" };
  if (score >= 0.35) return { label: "Medium", token: "warning" };
  return { label: "Low", token: "success" };
}

const riskHex = { error: "#B00020", warning: "#D38C22", success: "#2FAD02" };
export function riskColor(score) {
  return riskHex[riskLevel(score).token];
}

// Normalized composition entries (metalKey, pct, share) for an alloy.
export function alloyMetals(alloy) {
  return Object.entries(alloy.composition)
    .filter(([key, pct]) => METALS[key] && pct > 0)
    .map(([key, pct]) => ({
      key,
      pct,
      meta: METALS[key],
      conc: concentration(key),
      volatility: METALS[key].volatility ?? 0.3,
    }))
    .sort((a, b) => b.pct - a.pct);
}

// Scenario impact from price and production shocks (illustrative model).
// priceShockPct: e.g. +20 means price up 20%
// productionChangePct: e.g. -50 means production down 50%
export function computeScenarioImpact(alloy, priceShockPct, productionChangePct) {
  const metals = alloyMetals(alloy);
  const priceFactor = Math.max(0, priceShockPct) / 100;
  const prodDown = Math.max(0, -productionChangePct) / 100;

  let weightedVol = 0;
  let weightedConc = 0;
  for (const m of metals) {
    const w = m.pct / 100;
    weightedVol += w * m.volatility;
    weightedConc += w * m.conc;
  }

  const costImpactPct = priceFactor * 100 * weightedVol * 1.35 + prodDown * weightedConc * 32;
  const availabilityDrop = Math.min(0.92, prodDown * (0.45 + weightedConc * 0.85));
  const demandDrop = Math.min(0.75, prodDown * 0.55 + priceFactor * weightedVol * 0.35);
  const leadTimeWeeks = availabilityDrop * 12 + prodDown * 5;
  const shockIntensity = Math.max(priceFactor, prodDown);
  const atRiskSpend = alloy.annualSpend * (0.25 + weightedConc * 0.55) * shockIntensity;
  const marginHitPts = costImpactPct * 0.18;

  const score = Math.min(1, shockIntensity * 0.7 + weightedConc * 0.5 + weightedVol * 0.3);

  return {
    costImpactPct,
    availabilityDrop,
    demandDrop,
    leadTimeWeeks,
    atRiskSpend,
    marginHitPts,
    weightedVol,
    weightedConc,
    score,
    risk: riskLevel(score),
  };
}

// Generate demand/price curve points for the scenario chart (0..1 x-axis).
export function demandPriceSeries(priceShockPct, productionChangePct, weightedVol) {
  const n = 24;
  const priceFactor = Math.max(0, priceShockPct) / 100;
  const prodDown = Math.max(0, -productionChangePct) / 100;
  const points = [];

  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const ramp = 1 / (1 + Math.exp(-(t - 0.35) * 9));
    const priceY = 0.55 + ramp * (priceFactor * 1.8 + prodDown * weightedVol * 0.6);
    const demandY = 0.75 - ramp * (prodDown * 0.65 + priceFactor * weightedVol * 0.25);
    points.push({
      t,
      price: Math.max(0.08, Math.min(0.95, priceY)),
      demand: Math.max(0.08, Math.min(0.95, demandY)),
    });
  }
  return points;
}

// Deterministic, illustrative impact model for geo-shock scenarios (map views).
// Returns dollar/percent KPIs plus the affected metals in the region.
export function computeImpact(alloy, scenario, severity) {
  const metals = alloyMetals(alloy);
  const sev = severity ?? scenario.severity;

  // Fraction of the alloy (by weight) whose inputs are exposed to the shocked
  // region through the shocked metals.
  let exposure = 0; // 0..1 of alloy weight at risk
  const affected = [];
  for (const m of metals) {
    if (!scenario.metals.includes(m.key)) continue;
    const share = regionShareOfMetal(m.key, scenario.region);
    if (share <= 0) continue;
    const w = m.pct / 100;
    exposure += w * share;
    affected.push({ key: m.key, name: m.meta.name, share, weight: w });
  }

  const availabilityDrop = Math.min(0.95, exposure * sev * 1.15);
  const costImpactPct = exposure * sev * 42; // price elasticity proxy (%)
  const leadTimeWeeks = availabilityDrop * 14; // weeks added
  const atRiskSpend = alloy.annualSpend * exposure; // $M exposed to region
  const marginHitPts = costImpactPct * 0.18; // pts of gross margin

  const score = Math.min(1, exposure * 1.6 + sev * 0.25);

  return {
    exposure,
    affected,
    availabilityDrop,
    costImpactPct,
    leadTimeWeeks,
    atRiskSpend,
    marginHitPts,
    score,
    risk: riskLevel(score),
  };
}

export const COVERAGE = [
  "Aluminum", "Titanium", "Steel", "Stainless", "Copper",
  "Nickel", "Gold", "Zinc", "Magnesium", "Chromium",
  "Vanadium", "Niobium", "Molybdenum", "Manganese",
];
