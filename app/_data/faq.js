// Canonical FAQ content for globalNex.
// Used by FaqSection, JSON-LD FAQPage schema, and llms-full.txt generation.

export const FAQ_ITEMS = [
  {
    id: 'counter-supplier-hike',
    question: 'Can globalNex help me counter a supplier price increase?',
    answer:
      'Yes. When a supplier claims aluminum is up and demands +12%, we decompose the exact grade (e.g. 6061-T6: 97% aluminum, magnesium actually down) and show the true cost increase (e.g. +4.2%). You counter with a defensible number (e.g. 5%) or reject blanket surcharges on the same math. One interaction can pay for the engagement.',
  },
  {
    id: 'audit-surcharges',
    question: 'Can you audit material surcharges on supplier invoices?',
    answer:
      'Yes. Forward the invoices. We map each part to its alloy grade, calculate the surcharge justified by metal weight and live indices, and deliver a line-by-line rejection report—before AP pays.',
  },
  {
    id: 'hedge-timing',
    question: 'How do you help us hedge material increases?',
    answer:
      'We watch the indices and events that move the grades on your BOM. When a shock hits, you get quantified impact on your spend and a recommended move—lock contracts, hedge, or dual-source—before the next surcharge lands on an invoice.',
  },
  {
    id: 'clean-bom-data',
    question: 'Do I need clean BOM or ERP data?',
    answer:
      'No. Messy BOMs and ERP dumps are normal. We map them to alloy chemistry and validate edge cases. You leave with composition-backed numbers ready for the next negotiation—not a data-cleaning project.',
  },
  {
    id: 'how-engagements-work',
    question: 'How do engagements work?',
    answer:
      'Send an invoice, BOM, or purchase data. We scope your metal exposure, map chemistry, and deliver counters, rejection reports, and hedge timing. Fixed-scope audits or a standing retainer with success fees on defended savings.',
  },
  {
    id: 'what-is-composition-analysis',
    question: 'What is raw-material composition analysis?',
    answer:
      'We break each alloy grade into its constituent metals by weight (e.g. 6061-T6 is ~97% aluminum). That math shows how price shocks actually hit your parts—so you negotiate and hedge on chemistry, not commodity headlines.',
  },
]

export const GLOSSARY = [
  {
    term: 'Composition decomposition',
    definition:
      'Breaking an alloy into its constituent metals by weight percentage (e.g. 6061-T6 is 97% aluminum) to counter supplier price claims and time hedges.',
  },
  {
    term: 'Negotiation counter',
    definition:
      'A defensible price response backed by grade-level metal math—e.g. accept 5% when a supplier asks for 12% and true cost is +4.2%.',
  },
  {
    term: 'Hedge timing',
    definition:
      'An early signal to lock, hedge, or dual-source when indices move on grades you buy, before the increase shows up on an invoice.',
  },
  {
    term: 'Surcharge rejection report',
    definition:
      'A line-by-line audit of material surcharges on supplier invoices, showing the amount justified by metal weight and live indices.',
  },
  {
    term: 'At-risk spend',
    definition:
      'The portion of annual alloy spend exposed to a modeled price or supply shock, expressed in dollars.',
  },
]
