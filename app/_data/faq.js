// Canonical FAQ content for globalNex.
// Used by FaqSection, JSON-LD FAQPage schema, and llms-full.txt generation.

export const FAQ_ITEMS = [
  {
    id: 'what-is-alloy-grade-supply-risk',
    question: 'What is alloy-grade supply risk analysis?',
    answer:
      'Alloy-grade supply risk analysis models how price and supply shocks propagate through the exact alloy grades on your bill of materials, not just spot commodity prices. Instead of tracking LME aluminum, it decomposes 7075-T6 into its constituent metals (aluminum, zinc, magnesium, copper), maps where each is sourced, and calculates the dollar impact on cost, margin, and at-risk spend when a shock hits.',
  },
  {
    id: 'globalnex-vs-price-feeds',
    question: 'How is globalNex different from commodity price feeds like Fastmarkets or MetalMiner?',
    answer:
      'Price and forecast providers excel at market-level data: IOSCO-accredited prices, metal-level forecasts, and disruption modeling at the commodity level. globalNex operates at the alloy-grade layer: it decomposes the specific grades you buy (7075-T6, Ti-6Al-4V, Inconel 718), models how shocks propagate through their composition, and outputs grade-level and BOM-level dollar impact. The two are complementary: market data feeds the scenario inputs; globalNex answers what it means for your spend.',
  },
  {
    id: 'globalnex-vs-supply-chain-platforms',
    question: 'How is globalNex different from supply-chain risk platforms like Interos or Resilinc?',
    answer:
      'Supply-chain risk platforms map your suppliers tier by tier, score vendor risk, and flag disruptions at the company and site level. globalNex maps metal and geographic concentration behind each alloy grade: where the constituent metals are mined and refined, and what a production cut or export ban does to the grades on your BOM in dollars. Supplier platforms answer who supplies you; globalNex answers what your metal chemistry exposes you to.',
  },
  {
    id: 'how-shock-modeling-works',
    question: 'How does globalNex model the impact of a metal price or supply shock?',
    answer:
      'You select an alloy grade, set a price shock percentage and a production change percentage, and globalNex computes cost impact, at-risk spend, margin hit, availability drop, lead-time change, and an overall risk score. The model weights each constituent metal by its composition share, factors in supply concentration and volatility, and produces board-ready figures in seconds.',
  },
  {
    id: 'spot-vs-alloy',
    question: 'Why does LME spot price not tell you your real metal exposure?',
    answer:
      'Spot prices reflect a single commodity at a single point in time. Manufacturers buy alloy grades, not raw metals. A 20% aluminum price move affects 7075-T6 differently than 6061-T6 because their compositions differ. A magnesium export ban hits AZ31 and 7075-T6 through different metal pathways. Alloy-grade analysis connects market events to the grades and dollars on your BOM.',
  },
  {
    id: 'who-uses-globalnex',
    question: 'Who uses alloy-grade supply risk analysis?',
    answer:
      'Procurement and sourcing teams use it to negotiate from exposure data instead of spot prices. Supply chain and operations teams use it to spot single-country dependencies before disruptions stop production. Finance and risk teams use it to quantify at-risk spend and margin impact for board reporting. Engineering teams use it to compare alloy grades on supply resilience, not just mechanical spec.',
  },
  {
    id: 'metals-covered',
    question: 'What metals and alloys does globalNex cover?',
    answer:
      'globalNex covers aluminum (6061-T6, 7075-T6, 2024-T3), titanium (Ti-6Al-4V, Grade 2), steel and stainless (304, 316L, 4140), nickel superalloys (Inconel 718, 625), copper (C11000, C26000 brass), gold (Fine Gold 999), and zinc/magnesium alloys (Zamak 3, AZ31). Each grade is decomposed into constituent metals with composition share, volatility, and geographic supply concentration.',
  },
  {
    id: 'board-question',
    question: 'What question does globalNex answer for leadership teams?',
    answer:
      'The question every leadership team eventually asks: what does a specific supply or price shock do to the alloy grades we buy, and what does it cost us in margin and spend? globalNex turns that into one risk score and one exposure figure in seconds, on the exact grades on your bill of materials.',
  },
]

export const GLOSSARY = [
  {
    term: 'Alloy-grade exposure',
    definition:
      'The dollar and margin impact of a supply or price shock on a specific named alloy grade (e.g. 7075-T6), accounting for its full metal composition rather than a single commodity index.',
  },
  {
    term: 'Composition decomposition',
    definition:
      'Breaking an alloy into its constituent metals by weight percentage (e.g. 7075-T6 is 89.5% aluminum, 5.6% zinc, 2.5% magnesium, 1.6% copper) to trace how shocks propagate.',
  },
  {
    term: 'At-risk spend',
    definition:
      'The portion of annual alloy spend exposed to a modeled shock scenario, expressed in dollars.',
  },
  {
    term: 'Supply concentration',
    definition:
      'The degree to which a metal\'s production or refining is concentrated in a single country or region, creating geo-political exposure.',
  },
]
