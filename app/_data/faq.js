// Canonical FAQ content for globalNex.
// Used by FaqSection, JSON-LD FAQPage schema, and llms-full.txt generation.

export const FAQ_ITEMS = [
  {
    id: 'software-or-service',
    question: 'Is globalNex software or a service?',
    answer:
      'Both, delivered as Outcome-as-a-Service. The software is the engine: alloy decomposition, scenario modeling, trigger alerts. The service is the Expert-in-the-Loop team that maps your messy BOMs, configures your scenario studio, and delivers the boardroom-ready number. You buy the quantified conclusion, not a login to a blank dashboard.',
  },
  {
    id: 'counter-supplier-hike',
    question: 'Can globalNex help me counter a supplier price increase?',
    answer:
      'Yes. This is the primary use case. When a supplier claims aluminum is up and demands +12%, globalNex decomposes the exact grade (e.g. 6061-T6: 97% aluminum, magnesium actually down) and shows the true cost increase (e.g. +4.2%). You counter with a defensible number (e.g. 5%). One negotiation pays for the engagement.',
  },
  {
    id: 'clean-bom-data',
    question: 'Do I need clean BOM or ERP data?',
    answer:
      'No. Your BOMs are messy and your ERP is a mess. That is exactly what we take off your plate. Our ingestion engine auto-maps disparate spreadsheets and ERP dumps to our metallurgical alloy database. Our Expert-in-the-Loop team validates the edge cases. You never clean the data yourself.',
  },
  {
    id: 'expert-in-the-loop',
    question: 'What does the Expert-in-the-Loop team actually do?',
    answer:
      'Fractional cost engineers, metallurgical analysts, and commodity strategists, not customer-success reps showing you how to click buttons. They map your BOMs to our alloy database, build custom scenario studios for your geographic footprint, and act as a fractional strategic wing helping you interpret risk scores into hedging, dual-sourcing, and redesign strategies.',
  },
  {
    id: 'trigger-alerts',
    question: 'How do trigger alerts work?',
    answer:
      'We watch the macro events that move your specific grades: Indonesian nickel export bans, Chinese magnesium squeezes, production cuts, sanctions, and run your spend through the model the morning the news drops. You get a quantified impact (e.g. 2-point gross-margin hit on your 7075-T6 spend) and a recommended move, not a generic market headline.',
  },
  {
    id: 'how-engagements-work',
    question: 'How do engagements work?',
    answer:
      'globalNex takes a limited number of manufacturers at a time. You request an assessment, we scope your metal exposure and BOM complexity, and deploy the Expert-in-the-Loop team to map your data and configure your scenario studio. Ongoing: trigger alerts, negotiation support, and strategic advisory as macro events hit your grades.',
  },
  {
    id: 'what-is-alloy-grade-supply-risk',
    question: 'What is alloy-grade supply risk analysis?',
    answer:
      'Alloy-grade supply risk analysis models how price and supply shocks propagate through the exact alloy grades on your bill of materials, not just spot commodity prices. Instead of tracking LME aluminum, it decomposes 7075-T6 into its constituent metals (aluminum, zinc, magnesium, copper), maps where each is sourced, and calculates the dollar impact on cost, margin, and at-risk spend when a shock hits.',
  },
  {
    id: 'globalnex-vs-saas',
    question: 'How is globalNex different from pure SaaS supply-risk tools?',
    answer:
      'Pure SaaS hands you a login and a blank dashboard; you clean your own data, learn the UI, and hope someone on your team maintains it. The UI is trivially copyable. globalNex combines a proprietary alloy database and engine with an Expert-in-the-Loop team that does the heavy lifting and delivers the outcome. Once your BOM is mapped and studios configured, switching cost is high.',
  },
  {
    id: 'globalnex-vs-consultancies',
    question: 'How is globalNex different from consultancies?',
    answer:
      'Consultancies deliver a report in weeks, billed by the hour, with no live engine and no continuous trigger alerts. Knowledge walks out when the project ends. globalNex delivers ongoing, seconds-fast answers via a proprietary engine, plus experts who interpret the numbers into actionable strategy, including hedging, dual-sourcing, redesign.',
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
    term: 'Outcome-as-a-Service (OaaS)',
    definition:
      'A delivery model where the customer buys a quantified conclusion (negotiation counter, boardroom figure, trigger alert) rather than software access. The engine does computation; domain experts deliver the strategy.',
  },
  {
    term: 'Expert-in-the-Loop',
    definition:
      'Fractional cost engineers, metallurgical analysts, and commodity strategists who map client BOMs, configure scenario studios, and interpret risk scores into hedging, dual-sourcing, and redesign moves.',
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
      'An event-driven notification quantifying a client\'s exposure when a macro supply shock (export ban, production cut, sanction) hits a metal in their BOM.',
  },
]
