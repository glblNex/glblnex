// Canonical FAQ content for globalNex.
// Used by FaqSection, JSON-LD FAQPage schema, and llms-full.txt generation.

export const FAQ_ITEMS = [
  {
    id: 'software-or-service',
    question: 'Is globalNex software or a service?',
    answer:
      'A tech-enabled managed service, powered by software. You buy quantified outcomes and the next move: hit lists, rejection reports, sourcing plans, counters, and boardroom figures. Our Expert-in-the-Loop team maps your messy BOMs and executes. The engine runs behind the scenes. You do not buy a login to a blank dashboard.',
  },
  {
    id: 'counter-supplier-hike',
    question: 'Can globalNex help me counter a supplier price increase?',
    answer:
      'Yes. When a supplier claims aluminum is up and demands +12%, globalNex decomposes the exact grade (e.g. 6061-T6: 97% aluminum, magnesium actually down) and shows the true cost increase (e.g. +4.2%). You counter with a defensible number (e.g. 5%) or reject blanket surcharges on the same math. One interaction can pay for the engagement.',
  },
  {
    id: 'audit-surcharges',
    question: 'Can globalNex audit material surcharges on supplier invoices?',
    answer:
      'Yes. Forward the invoices to your globalNex advisor. We map each part to its alloy grade, calculate the penny-accurate surcharge justified by metal weight and live indices, and deliver a line-by-line rejection report. Reject inflated surcharges before AP pays, not after a three-month consultancy audit.',
  },
  {
    id: 'npi-sourcing',
    question: 'Do you handle new product or prototype sourcing?',
    answer:
      'Yes. Hand us the prototype BOM. We analyze grades for supply risk, route low-volume and NPI spend through our vetted network of specialized suppliers, and deliver a sourcing plan with projected costs and lead times. Your engineering team stays on the main product line while we manage the ugly spend.',
  },
  {
    id: 'ma-diligence',
    question: 'Can globalNex assess material risk for M&A diligence?',
    answer:
      'Yes. Provide historical purchase data from the target. In days, our ingestion engine maps SKUs to chemistry and our experts quantify geographic concentration and hidden geopolitical exposure. You get a material exposure figure for the deal room, not a balance-sheet audit that misses supply chain physics.',
  },
  {
    id: 'clean-bom-data',
    question: 'Do I need clean BOM or ERP data?',
    answer:
      'No. Your BOMs are messy and your ERP is a mess. That is exactly what we take off your plate. Our ingestion engine auto-maps disparate spreadsheets and ERP dumps to our metallurgical alloy database. Our Expert-in-the-Loop team validates the edge cases. You never clean the data yourself. You leave with mapped exposure ready for the next negotiation.',
  },
  {
    id: 'expert-in-the-loop',
    question: 'What does the Expert-in-the-Loop team actually do?',
    answer:
      'Fractional cost engineers, metallurgical analysts, and commodity strategists, not customer-success reps showing you how to click buttons. They map your BOMs to our alloy database, build custom scenario studios for your geographic footprint, and turn risk into moves you execute: hedge, dual-source, redesign, or counter in the room.',
  },
  {
    id: 'trigger-alerts',
    question: 'How do trigger alerts work?',
    answer:
      'We watch the macro events that move your specific grades, including Indonesian nickel export bans, Chinese magnesium squeezes, production cuts, and sanctions, and run your spend through the model the morning the news drops. You get a quantified impact (e.g. 2-point gross-margin hit on your 7075-T6 spend) and a recommended move such as lock contracts this week or dual-source before Q3, not a generic market headline.',
  },
  {
    id: 'how-engagements-work',
    question: 'How do engagements work?',
    answer:
      'globalNex takes a limited number of manufacturers and deal teams at a time. You request an assessment, we scope your metal exposure and BOM complexity, and deploy the Expert-in-the-Loop team to map chemistry and configure your scenario studio. Ongoing: trace geo shocks to your parts, audit surcharges, route NPI spend, and quantify exposure as events hit your grades.',
  },
  {
    id: 'what-is-alloy-grade-supply-risk',
    question: 'What is alloy-grade supply risk analysis?',
    answer:
      'Alloy-grade supply risk analysis models how price and supply shocks propagate through the exact alloy grades on your bill of materials, not just spot commodity prices. Instead of tracking LME aluminum, it decomposes 7075-T6 into its constituent metals (aluminum, zinc, magnesium, copper), maps where each is sourced, and calculates the dollar impact on cost, margin, and at-risk spend when a shock hits, so you can take a concrete move.',
  },
  {
    id: 'globalnex-vs-saas',
    question: 'How is globalNex different from pure SaaS supply-risk tools?',
    answer:
      'Pure SaaS hands you a login and a blank dashboard; you clean your own data, learn the UI, and hope someone on your team maintains it. The UI is trivially copyable. globalNex maps your BOMs, runs a proprietary alloy engine, and delivers the outcome: the counter, the board figure, and the next action. Once your BOM is mapped and studios configured, switching cost is high.',
  },
  {
    id: 'globalnex-vs-consultancies',
    question: 'How is globalNex different from consultancies?',
    answer:
      'Consultancies deliver a report in weeks, billed by the hour, with no live engine and no continuous trigger alerts. Knowledge walks out when the project ends. globalNex delivers ongoing, seconds-fast answers via a proprietary engine, plus experts who interpret the numbers into actionable moves: hedge, dual-source, redesign, or counter.',
  },
  {
    id: 'metals-covered',
    question: 'What metals and alloys does globalNex cover?',
    answer:
      'globalNex covers aluminum (6061-T6, 7075-T6, 2024-T3), titanium (Ti-6Al-4V, Grade 2), steel and stainless (304, 316L, 4140), nickel superalloys (Inconel 718, 625), copper (C11000, C26000 brass), gold (Fine Gold 999), and zinc/magnesium alloys (Zamak 3, AZ31). Each grade is decomposed into constituent metals with composition share, volatility, and geographic supply concentration.',
  },
]

export const GLOSSARY = [
  {
    term: 'Material-risk outcome',
    definition:
      'A quantified conclusion the customer can act on: risk hit list, surcharge rejection report, sourcing plan, negotiation counter, boardroom exposure figure, or diligence report. Delivered by experts using the engine, not sold as a blank login.',
  },
  {
    term: 'Expert-in-the-Loop',
    definition:
      'Fractional cost engineers, metallurgical analysts, and commodity strategists who map client BOMs, configure scenario studios, and interpret risk scores into hedging, dual-sourcing, redesign, and counter moves.',
  },
  {
    term: 'Alloy-grade exposure',
    definition:
      'The dollar and margin impact of a supply or price shock on a specific named alloy grade (e.g. 7075-T6), accounting for its full metal composition rather than a single commodity index.',
  },
  {
    term: 'Composition decomposition',
    definition:
      'Breaking an alloy into its constituent metals by weight percentage (e.g. 6061-T6 is 97% aluminum) to trace how shocks propagate and counter supplier price claims.',
  },
  {
    term: 'At-risk spend',
    definition:
      'The portion of annual alloy spend exposed to a modeled shock scenario, expressed in dollars.',
  },
  {
    term: 'Trigger alert',
    definition:
      'An event-driven notification quantifying a client\'s exposure when a macro supply shock (export ban, production cut, sanction) hits a metal in their BOM, paired with a recommended move.',
  },
]
