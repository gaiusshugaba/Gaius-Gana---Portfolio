import type { CaseStudy } from "@/lib/types";

export const aiNewsletter: CaseStudy = {
  slug: "ai-newsletter",
  title: "AI Newsletter Automation",
  track: "automation",
  year: "2026",
  tags: ["AI Automation", "n8n", "Content", "B2B SaaS"],
  overview: {
    src: "/case-studies/ai-newsletter/n8n-workflow.png",
    width: 1600,
    height: 900,
  },
  timeline: "~2 weeks",
  role: "Solo AI automation engineer — designed, built, tested, and documented end to end",

  context: {
    heading: "Context",
    body: "An end-to-end AI newsletter system built for a fictional B2B DevOps/infrastructure SaaS company (PulseStack). It researches industry news weekly, drafts a newsletter grounded in real sources, verifies its own claims, and — only after a human approves — sends a version tailored to each audience segment.",
    meta: [
      { label: "Stack", value: "n8n, Google Gemini & Groq, Airtable, Slack, Brevo" },
      { label: "Role", value: "Solo AI Automation Engineer" },
      { label: "Timeline", value: "~2 weeks" },
    ],
  },

  problem: {
    heading: "The Problem",
    body: "Small marketing teams spend hours every week on a fully manual, repetitive cycle: researching industry news across scattered sources, drafting content from scratch, manually applying brand voice, and reformatting for different audience segments — all before a newsletter ever goes out. AI can clearly help with the drafting, but a naive 'AI writes it, AI sends it' system introduces a worse problem: no way to catch a fabricated fact before it reaches real subscribers, no visibility when the automation silently fails, and no safeguard against runaway cost or a stuck approval.",
    objectives: [
      "Reduce the hours spent on repetitive research and drafting.",
      "Keep a human in control of what actually gets sent to customers.",
      "Make failures visible instead of silent.",
      "Support meaningfully different content per audience segment without multiplying manual work.",
    ],
  },

  research: {
    heading: "Approach",
    body: "Built a three-part system: a core pipeline that researches, ranks, writes, and verifies a newsletter before routing it to a human for approval in Slack; an independent health-check workflow that catches failures the main pipeline can't see itself; and a maintenance workflow that keeps the data store from growing unbounded. Kept the three deliberately separate — a lesson learned by briefly merging them and reverting it — so each has its own blast radius and none can silently break another.",
  },

  before: {
    heading: "The Manual Process Before",
    body: "Every issue went through the same fully manual cycle, every week.",
    steps: [
      "Manually browse and read through dozens of industry news sources",
      "Draft newsletter copy from scratch, matching brand tone by memory and habit",
      "Manually rewrite or re-angle the same content for different audience segments",
      "Format and proofread each version by hand",
      "Schedule and send through the email platform manually",
    ],
    timeCost: "4–6 hours per week — every week, on a cycle that repeats without end.",
  },

  approach: {
    heading: "What Was Built",
    intro:
      "Three separate workflows, each with a specific job. The core pipeline researches, ranks, writes, and verifies the newsletter before routing to a human. The monitoring workflow checks for failures the pipeline can't see itself. A third keeps the data store from growing unbounded.",
    sections: [
      {
        title: "Core Pipeline",
        description:
          "The main workflow runs from research and ranking, through generation and two-tier verification, to the Slack approval handoff. Every branch is visible, every failure has a path.",
        images: [
          {
            src: "/case-studies/ai-newsletter/n8n-workflow.png",
            width: 1600,
            height: 900,
            caption: "n8n canvas — core pipeline",
          },
        ],
      },
      {
        title: "Approval & Segmented Send",
        description:
          "When a draft is approved in Slack, this workflow re-angles the same fact-checked content for each audience segment and triggers a separate tracked campaign per segment through Brevo.",
        images: [
          {
            src: "/case-studies/ai-newsletter/n8n-workflow-approve-or-reject.png",
            width: 1600,
            height: 900,
            caption: "Approve or Reject — segmented send workflow",
          },
        ],
      },
      {
        title: "Independent Health Monitoring",
        description:
          "A separate workflow runs daily to catch what the core pipeline can't see about itself: a draft that never generated, a draft stuck in approval, or a run that silently failed. Because it lives on its own canvas, a monitoring tweak never shares a deploy unit with the revenue-facing send pipeline.",
        images: [
          {
            src: "/case-studies/ai-newsletter/n8n-workflow-healthcheck.png",
            width: 1600,
            height: 900,
            caption: "Independent monitoring workflow",
          },
        ],
      },
      {
        title: "The Published Newsletter",
        description:
          "After approval, the newsletter lands in the subscriber's inbox — grounded in real sources, matching brand voice, and with a clear CTA. Every issue is issue-numbered and archive-linked.",
        images: [
          {
            src: "/case-studies/ai-newsletter/newsletter-output.png",
            width: 1400,
            height: 800,
            caption: "Published issue — July 26, 2026",
          },
          {
            src: "/case-studies/ai-newsletter/email-example.png",
            width: 1400,
            height: 700,
            caption: "Rendered email with structured section and CTA",
          },
        ],
      },
      {
        title: "Configuration Layer",
        description:
          "Feeds, brand guidelines, and audience segments all live in Airtable — not hardcoded. Adding a source, adjusting tone, or changing a segment's angle means editing a row, not opening the workflow.",
        images: [
          {
            src: "/case-studies/ai-newsletter/airtable-feeds.png",
            width: 1400,
            height: 700,
            caption: "Feed config — 6 curated sources, filterable and toggleable",
          },
          {
            src: "/case-studies/ai-newsletter/airtable-segments.png",
            width: 1400,
            height: 700,
            caption: "Audience segments — Founder, Developer, Marketing",
          },
          {
            src: "/case-studies/ai-newsletter/airtable-brand.png",
            width: 1400,
            height: 700,
            caption: "Brand guidelines — tone, CTA, writing style, banned words",
          },
        ],
      },
    ],
  },

  architecture: {
    heading: "Architecture",
    intro:
      "Six stages across three independent workflows. Each has its own blast radius — a failure in one cannot silently break another.",
    images: [],
    modules: [
      {
        title: "Ingestion & Ranking",
        description:
          "Pulls from 6 RSS feeds (config-driven via Airtable, not hardcoded), deduplicates against previously-seen articles, and ranks relevance with an LLM (Groq primary, Gemini fallback).",
      },
      {
        title: "Generation & Verification",
        description:
          "Writes the newsletter grounded in the ranked articles and stored brand guidelines, enforced into a strict JSON schema. Runs a two-tier verification pass — free deterministic claim-check on every draft, LLM semantic check only when something's flagged — before it ever reaches a human.",
      },
      {
        title: "Human Approval (Slack)",
        description:
          "Posts the draft with Approve / Edit / Reject actions. Nothing sends without an explicit human decision.",
      },
      {
        title: "Segmented Send",
        description:
          "On approval, re-angles the same fact-checked content for each audience segment and sends a separate tracked campaign per segment via Brevo.",
      },
      {
        title: "Reject & Edit Recovery",
        description:
          "Reject triggers an automatic same-day regeneration (capped, to prevent runaway retries). Edit routes the reviewer to Airtable directly, then polls for a 'ready for re-review' signal and reposts automatically.",
      },
      {
        title: "Monitoring (separate workflow)",
        description:
          "Daily health checks for missing or stuck drafts. Runs independently so a monitoring tweak never shares a deploy unit with the revenue-facing send pipeline.",
      },
    ],
  },

  keyDecisions: {
    heading: "Key Decisions",
    items: [
      {
        title: "Two-tier, cost-gated content verification",
        description:
          "A cheap deterministic check runs on every draft; a smarter AI check only fires when something's flagged. Same pattern real moderation pipelines use — expensive judgment only where it's actually earned.",
      },
      {
        title: "Full content persisted to Airtable, not referenced live",
        description:
          "Early versions referenced the AI's output directly from later steps, which breaks the moment approval happens in a separate execution — which it always does. Persisting the full generated JSON at creation time makes human approval genuinely time-independent.",
      },
      {
        title: "Independent monitoring workflow instead of merging it into the main pipeline",
        description:
          "Monitoring was briefly merged into the main pipeline's canvas, then split back apart after review. It has a different failure impact than the send logic; bundling them meant a low-risk monitoring tweak shared a deploy unit with the revenue-facing pipeline.",
      },
    ],
  },

  errorHandling: {
    heading: "Error Handling",
    body: "Every stage has an explicit failure path. When something breaks, the system either recovers silently or makes the failure loudly visible — nothing drops quietly.",
    items: [
      "Dead RSS feed — Continue-on-fail is enabled per feed, so one broken source doesn't halt the whole ingestion run.",
      "AI provider rate limits or outage — Dual-provider fallback (Groq ↔ Gemini) on every AI step, so a single provider's limits don't stop the pipeline.",
      "Draft never generated or silently failed — A separate daily health check queries for this week's expected draft and alerts if it's missing.",
      "Draft stuck awaiting approval — A second daily check flags any draft sitting un-actioned past 24 hours, batched into one summary alert rather than spamming per-record.",
      "Repeated rejection — Same-day auto-regeneration is capped after 2 attempts; beyond that a human is notified to intervene manually instead of the system retrying unbounded.",
    ],
  },

  results: {
    heading: "Results",
    body: "The system reduced the weekly newsletter process — research, draft, segment, send — to a single human decision: approve, edit, or reject. The two-tier verification layer was built and tested to catch fabricated numeric and version claims before human review. The full system was tested in an isolated staging environment (separate Airtable base, Slack channel, and workflow) before promotion to production, then split cleanly into two independently deployable workflows — core pipeline and monitoring — version-controlled in a private git repository alongside full technical documentation.",
    images: [],
  },

  outcome: {
    heading: "Outcome",
    body: "A production-grade newsletter system that removes the research-to-draft bottleneck while keeping a human firmly in the approval seat. Every issue is grounded in real sources, verified before review, and segmented automatically. The architecture is deliberately conservative: three workflows with independent blast radii, dual-provider AI fallbacks, cost-gated verification, and daily monitoring — because a system that touches customer inboxes has to fail safely or not fail at all.",
  },

  reflection: {
    heading: "What I'd Improve Next",
    paragraphs: [
      "Subject line A/B testing — 3 variants are already generated per issue specifically to support this. Implementation is scoped and ready, deferred only because it requires a paid email-platform tier.",
      "Automated GDPR data-subject-request handling — currently a documented manual runbook, not yet automated.",
      "Visual content (header images or diagrams per issue) — currently text-only. Would likely improve engagement for a B2B technical audience.",
    ],
  },
};