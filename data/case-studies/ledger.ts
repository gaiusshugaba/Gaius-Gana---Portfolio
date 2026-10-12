import type { CaseStudy } from "@/lib/types";

export const ledger: CaseStudy = {
  slug: "ledger",
  title: "Ledger — Invoice Reconciliation with Reason-First Exceptions",
  track: "uiux",
  year: "2026",
  tags: ["UI/UX", "FinTech", "n8n", "AI Automation"],
  overview: {
    src: "/case-studies/ledger/ledger-card.png",
    width: 5760,
    height: 4288,
  },
  liveUrl: "https://ledger-ui-zeta.vercel.app",
  liveUrlLabel: "View live demo",
  timeline: "~4 weeks",
  role: "Solo — UI/UX design and automation build",

  context: {
    heading: "What Ledger Is",
    body: "An invoice reconciliation system. Invoices arrive by email or upload. A vision model extracts the fields. A match engine compares them against purchase orders. Anything uncertain routes to a human — with the reason, the source PDF, and the reasoning behind every decision on one screen. Not an OCR wrapper. An exception resolution layer.",
    meta: [
      { label: "Stack", value: "Next.js, TypeScript, Tailwind, n8n, GPT-4o, Supabase" },
      { label: "Role", value: "Solo — design and build" },
      { label: "Timeline", value: "~4 weeks" },
    ],
  },

  problem: {
    heading: "The Problem",
    body: "Most AP tools answer one question: did we read the invoice correctly? They surface confidence scores. They flag low-quality scans. They stop there. But extraction isn't what breaks AP teams — modern OCR is good enough. What breaks them is everything after: matching to the right PO, figuring out why totals don't match, chasing approvals, resolving exceptions a rounding rule shouldn't have flagged. The failure mode is context. Every flag said 'something might be off' without saying what. An operator sees '0.65 confidence' and has to open the PDF and hunt through the fields themselves. The problem isn't reading the invoice. It's deciding whether to pay it.",
    objectives: [
      "Move from confidence-first to reason-first — every flag explains why.",
      "Make per-field confidence meaningful rather than uniform.",
      "Keep all context on one screen: PDF, extraction, checks, and reasoning.",
    ],
  },

  research: {
    heading: "How I Thought About It",
    body: "I didn't have budget for user interviews. So I read what AP teams write when no vendor is listening — Reddit threads across r/Accounting, r/Netsuite, r/Bookkeeping, r/QuickBooks, r/smallbusiness, and r/fintech, plus industry articles that quote practitioners. Twenty patterns surfaced. Four quotes reframed the product.",
  },

  quotes: {
    heading: "What Practitioners Said",
    items: [
      {
        text: "Where AI actually earns its keep is the exception queue: classify why it failed, pull the missing context, and route the right person with a suggested fix.",
        source: "AP practitioner, via industry compilation",
      },
      {
        text: "Treating both the same means your team spends equal time on a ₹2 rounding difference as a ₹2 lakh missing credit.",
        source: "r/Accounting, reconciliation tooling thread",
      },
      {
        text: "If your ERP says ORD-2024-10042 and the bank says 10042, the tool says unmatched. Next month — same thing. The tool learned nothing.",
        source: "r/Accounting, reconciliation tooling thread",
      },
      {
        text: "Every cycle starts fresh. The context your team built — none of it carries over. It lives in someone's head until they leave.",
        source: "r/Accounting, reconciliation tooling thread",
      },
    ],
  },

  approach: {
    heading: "The Approach",
    intro: "Ledger is built around three decisions that had to line up. Each one responds to a specific problem the research surfaced.",
    sections: [],
  },

  keyDecisions: {
    heading: "The Three Decisions",
    items: [
      {
        title: "Reason-first, not confidence-first",
        description: "Every AP tool surfaces 'confidence.' Nobody surfaces 'reason.' Every flagged invoice shows why next to the what — the same reason across the queue card, dashboard row, and review screen, sourced from one shared function. Trade-off: more surface area to keep consistent. Centralizing reason logic in one function was the fix.",
      },
      {
        title: "Per-field confidence, derived not trusted",
        description: "The first extraction prompt returned 0.95 on every field. Uniform confidence is worse than no confidence — it looks precise but doesn't distinguish between fields an operator should trust. So there are two layers: a reference scale in the prompt, and a derivation layer that bounds the model's guess with hard signals like PO format validation, date regex, and line-item math checks. If the model says 0.95 on an amount but line items don't sum to the total, confidence drops to 0.65. Trade-off: more code. But trusting the model's number produces scores that don't help.",
      },
      {
        title: "n8n over writing the pipeline myself",
        description: "I'm a designer who works with automation tools, not a backend engineer. Writing a job queue, retry logic, credential management, and per-step logging would have taken weeks. Using n8n as the pipeline runtime means every step is a node you can inspect and retry individually. When extraction fails on one invoice, you re-run that node. An AP lead can open the canvas and see exactly what happens to an invoice. Trade-off: another service to host, and bound by what n8n's nodes can do. For a solo project, being able to ship mattered more than the theoretically cleaner architecture.",
      },
    ],
  },

  architecture: {
    heading: "The Pipeline",
    intro: "Four n8n workflows handle the full lifecycle — intake, extraction, matching, and routing. The canvas is the architecture diagram. Every node is inspectable and retryable, and an AP lead can open any workflow to see exactly what happens to an invoice.",
    images: [
      {
        src: "/case-studies/ledger/n8n-full-pipeline.png",
        width: 1366,
        height: 768,
        caption: "Full pipeline — the end-to-end canvas",
      },
      {
        src: "/case-studies/ledger/n8n-pipeline-1.png",
        width: 1366,
        height: 768,
        caption: "Pipeline 1 — intake. Gmail and webhook triggers converge, then a linear flow through validation, storage, duplicate check, and insert.",
      },
      {
        src: "/case-studies/ledger/n8n-pipeline-2.png",
        width: 1366,
        height: 768,
        caption: "Pipeline 2 — extraction. Schedule trigger polls Supabase, downloads the PDF, sends it to GPT-4o with a structured output parser, writes back.",
      },
      {
        src: "/case-studies/ledger/n8n-match-routing.png",
        width: 1366,
        height: 768,
        caption: "Pipeline 3 — match engine, notification, and routing. Where confidence scores become decisions about who sees what.",
      },
    ],
    modules: [],
  },

  errorHandling: {
    heading: "The Bug That Taught Me Something",
    body: "The intake pipeline kept silently stopping at the duplicate check node. Error said 'no output data.' But the node was working correctly — it found no duplicates for a new invoice. The problem: n8n stops the workflow when a node returns zero rows. 'Not found' is a valid result. It means 'not a duplicate.' The workflow should continue from it, not die at it. The fix was toggling Always Output Data on the lookup node. Now an empty result produces an empty item, and the IF condition routes correctly. Small bug. Took an hour. Reminder that most pipeline bugs aren't logic bugs — they're assumptions about edge cases.",
    items: [],
    images: [],
  },

  prototype: {
    heading: "The Product",
    intro: "The review screen is the product in one shot. PDF on the left, extraction panel, automated checks, and line items on the right.",
    images: [
      {
        src: "/case-studies/ledger/review-screen.png",
        width: 5760,
        height: 4288,
        caption: "Review screen — the whole product in one layout",
      },
      {
        src: "/case-studies/ledger/queue.png",
        width: 5760,
        height: 4288,
        caption: "Queue — every card shows the reason, not buried behind a click",
      },
      {
        src: "/case-studies/ledger/dashboard.png",
        width: 5760,
        height: 4288,
        caption: "Dashboard — exceptions given their own space, not hidden behind a confidence aggregate",
      },
      {
        src: "/case-studies/ledger/extracted-fields.png",
        width: 5760,
        height: 4288,
        caption: "Extracted fields — per-field confidence, varying",
      },
      {
        src: "/case-studies/ledger/review-mismatch.png",
        width: 5760,
        height: 4288,
        caption: "The mismatch check that catches the cheapest fraud signal",
      },
      {
        src: "/case-studies/ledger/rules.png",
        width: 5760,
        height: 4288,
        caption: "Rules — the write side of the loop",
      },
    ],
  },

  results: {
    heading: "What the Three Decisions Produced",
    body: "The vendor mismatch check. When an invoice cites a PO, does the vendor name on the invoice match the vendor on the PO? A legitimate vendor doesn't usually cite someone else's PO number. Three scenarios all need human eyes: an attacker using a real PO number with their own bank details, a vendor's legal name change the master record doesn't know about, or an operator attaching the wrong PO. The match engine already computed a vendor comparison score. The work wasn't computing it — it was deciding to make it prominent. Each decision made it possible: reason-first surfaced the mismatch as a specific sentence on every screen, per-field confidence gave the reason real data to work from, and n8n made it a one-condition change with no redeploy.",
  },

  outcome: {
    heading: "Where Ledger Grows",
    body: "The architecture was designed with the next layer in mind. Prepared for extension: multi-user and role-based access, multi-currency handling, multi-invoice document splitting, and payment provider integration. Deliberate boundaries — solving these would mean solving a different problem: N:M reconciliation, ERP connectors, and physical intake.",
  },

  reflection: {
    heading: "What I Learned",
    paragraphs: [
      "Design decisions don't exist in isolation. The vendor mismatch check works because all three decisions line up. Change one, the check doesn't ship.",
      "Confidence scores are only useful if they vary. A model returning 0.95 on everything looks precise but isn't.",
      "The interesting part isn't the design or the pipeline — it's the loop between them. UI writes a threshold, pipeline reads it, the next classification changes.",
      "Designing for a decision is different from designing for a data display. Every visual weight was chosen against the operator's next decision.",
    ],
  },
};