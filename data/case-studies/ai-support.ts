import type { CaseStudy } from "@/lib/types";

export const aiSupport: CaseStudy = {
  slug: "ai-support",
  title: "An AI Support System With Deterministic Escalation",
  track: "automation",
  year: "2026",
  tags: ["AI Automation", "RAG", "n8n", "UI/UX"],
  overview: {
    src: "/case-studies/ai-support/workflow-main.png",
    width: 1467,
    height: 768,
  },
  liveUrl: "https://ai-customer-support-agent-frontend-eta.vercel.app",
  liveUrlLabel: "View live demo",
  liveUrlNote: "Demo login — demo@flowstack.com / demo1234",
  timeline: "~4 weeks",
  role: "Solo AI Automation Engineer — architecture, orchestration, prompt engineering, backend, frontend, ops console",
  context: {
    heading: "Context",
    body: "A multi-tenant AI customer support platform for B2B SaaS. Customers chat with an assistant grounded strictly in each tenant's own documentation. When the assistant can't safely answer — due to risk signals, missing account context, or low retrieval confidence — it deterministically escalates to a human, managing multi-turn case intake along the way. I built the entire system solo: the RAG pipeline, the guardrails, the escalation state machine, the error observability layer, and the frontend admin console.",
    meta: [
      { label: "Stack", value: "n8n, Supabase, Pinecone, OpenRouter, React/Tailwind" },
      { label: "Role", value: "Solo AI Automation Engineer" },
      { label: "Timeline", value: "~4 weeks" },
    ],
  },

  problem: {
    heading: "The Problem",
    body: "Most AI support tools optimize for a single behavior: answer the question. But answering isn't the hard part — knowing when not to is. Systems that always answer hallucinate policies. Systems built on autonomous agents — where the LLM decides whether to escalate — are unpredictable and hard to debug at the node level. And multi-turn escalation, where a customer provides information across several messages before a human picks up, is where most RAG demos quietly fall apart.",
    objectives: [
      "Ground every answer strictly in the tenant's own ingested documentation — no outside knowledge, no invented policy.",
      "Make escalation decisions deterministic and traceable, not delegated to an LLM.",
      "Handle multi-turn escalation state — merge new information with the original complaint, never ask the customer to repeat themselves.",
      "Capture every failure mode (validation, extraction, DB write, unhandled) into a unified error log per tenant.",
    ],
  },

  research: {
    heading: "Approach",
    body: "I built the system as a single orchestrated n8n workflow with section-prefixed node names ([CHAT], [RAG], [GUARDRAIL], [ESCALATION], [INGEST], [MEMORY], [ERROR]) plus a separate error-handling workflow. The LLM generates candidate text; deterministic guardrails decide whether that text is delivered or escalated. Two additional pipelines run independently: a knowledge ingestion pipeline (PDF / MD / DOCX / TXT / CSV → chunked → embedded → tenant-scoped vectors) and an isolated error workflow that catches unhandled failures and tags them with the originating tenant ID. The frontend is a React admin console plus an embedded chat widget — both deployed on Vercel.",
  },

  before: {
    heading: "The Manual Process Before",
    body: "Every Tier-1 support ticket went through the same manual triage cycle, and most of them ended up escalated anyway.",
    steps: [
      "Tier-1 support ticket arrives in the queue",
      "Agent reads the message and manually searches the knowledge base",
      "Agent drafts an answer, or forwards to Tier-2 if uncertain",
      "Agent logs the interaction in a spreadsheet or CRM",
      "If unresolved, agent creates a follow-up task and waits for the customer to provide more information",
    ],
    timeCost: "~12 minutes per Tier-1 ticket, with roughly 40% of tickets ultimately escalated to Tier-2 anyway.",
  },

  approach: {
    heading: "What Was Built",
    intro:
      "Three independent workflows, each with a clear job. The main workflow handles the live customer conversation; the ingestion pipeline handles documents; the error workflow handles everything that goes wrong in either.",
    sections: [
      {
        title: "Core Live Chat Pipeline",
        description:
          "Every message flows through the same fixed pipeline: intake → context assembly → intent classification → RAG retrieval → grounded generation → deterministic guardrails → response or escalation. Node names are section-prefixed so the entire flow reads as a document — [CHAT], [RAG], [GUARDRAIL], [ESCALATION], [MEMORY], [ERROR] — not a wall of unlabeled boxes.",
        images: [
          {
            src: "/case-studies/ai-support/workflow-main.png",
            width: 1467,
            height: 768,
            caption: "Core chat pipeline — full canvas",
          },
        ],
      },
      {
        title: "Knowledge Ingestion Pipeline",
        description:
          "Accepts multipart uploads across 5 formats, routes by extension, extracts and validates text, chunks header-aware (Markdown splits on ##, PDF/DOCX fall back to structural heuristics), embeds with OpenAI text-embedding-3-large, and writes to tenant-scoped vectors in Pinecone. Re-ingestion deletes prior vectors for the same document first — no ghost chunks.",
        images: [
          {
            src: "/case-studies/ai-support/workflow-ingestion.png",
            width: 1366,
            height: 768,
            caption: "Ingestion pipeline — receive, validate, chunk, embed, persist",
          },
        ],
      },
      {
        title: "Independent Error Observability",
        description:
          "The error handler lives in a separate n8n workflow, isolated by workflow ID. The main workflow can't catch its own unhandled failures, and mixing the two muddles node names. Isolation also means the error handler is testable on its own and won't accidentally fire for unrelated workflows on the same n8n instance.",
        images: [
          {
            src: "/case-studies/ai-support/workflow-error.png",
            width: 1366,
            height: 768,
            caption: "Error workflow — normalize, tag, persist",
          },
        ],
      },
    ],
  },

  architecture: {
    heading: "Architecture",
    intro:
      "Six modules across three workflows. The main pipeline is fully deterministic: every message goes through the same path, and only plain JavaScript — never the model — decides whether to respond or escalate. The close-ups below show how each section is built.",
    images: [
      {
        src: "/case-studies/ai-support/workflow-chat.png",
        width: 1366,
        height: 768,
        caption: "Chat intake, context assembly, and memory",
      },
      {
        src: "/case-studies/ai-support/workflow-rag.png",
        width: 1366,
        height: 768,
        caption: "RAG retrieval, response generation, and deterministic guardrails",
      },
      {
        src: "/case-studies/ai-support/workflow-escalation.png",
        width: 1366,
        height: 768,
        caption: "Escalation state machine — case management and follow-up",
      },
    ],
    modules: [
      {
        title: "Ingestion Pipeline",
        description:
          "Multipart uploads (PDF, MD, DOCX, TXT, CSV), routed by extension, extracted via format-specific handlers, header-aware chunking, embedded with OpenAI text-embedding-3-large, stored in Pinecone under tenant namespace, logged to ingestion_log.",
      },
      {
        title: "Live Chat Intake",
        description:
          "Receives message, validates required fields, loads tenant config + customer profile + conversation history in parallel via a Merge node, merges into unified context, classifies intent with structured output.",
      },
      {
        title: "RAG Retrieval & Generation",
        description:
          "Queries Pinecone scoped to tenant namespace, validates retrieval score against tenant-configured threshold, generates response grounded strictly in retrieved context — the model never sees the guardrails it will be graded on.",
      },
      {
        title: "Deterministic Guardrails",
        description:
          "Evaluates risk flags, account-context requirement, customer-context availability, and retrieval quality via plain JavaScript. Routes to either direct response or escalation case creation.",
      },
      {
        title: "Escalation State Machine",
        description:
          "Creates a case, analyzes requirements vs. provided information, tracks awaiting_customer_info → ready_for_agent, merges follow-up information into the existing case rather than resetting it.",
      },
      {
        title: "Error Observability",
        description:
          "Isolated error workflow captures validation failures, extraction failures, DB write failures, and unhandled workflow errors into a single request_errors table, tagged by tenant and failing node.",
      },
    ],
  },

  design: {
    heading: "Design — An Ops Console Built Like a Health Monitor",
    intro:
      "The admin console is a single-screen health monitor, not a data-heavy dashboard. Every panel answers one of four questions at a glance: Is ingestion healthy? Is the AI answering well? Are there errors? Are cases moving through the pipeline? Deliberately avoided pagination, filters, and complex queries — because an ops console that requires navigation is an ops console nobody opens.",
    principles: [
      "Health indicators are derived from real system activity, not health-check pings. The Vector search card turns green when writes and reads have both happened recently — proving the round-trip actually completed, not just that the API responded to a probe.",
      "The customer-facing chat widget shows a compact trace strip per message (Intent → Retrieval score → Decision) so support engineers can see why an answer was given, not just what it was.",
      "Transparency over polish: engineer-facing signals inside a customer-facing surface, because in a support system, visible confidence is worth more than hidden machinery.",
    ],
    images: [
      {
        src: "/case-studies/ai-support/console-overview.png",
        width: 1366,
        height: 764,
        caption: "Admin ops console — system health at a glance",
      },
      {
        src: "/case-studies/ai-support/console-documents.png",
        width: 1366,
        height: 768,
        caption: "Knowledge Documents — 11 docs ingested across 3 formats",
      },
    ],
  },

  keyDecisions: {
    heading: "Key Decisions",
    items: [
      {
        title: "Deterministic guardrails over an autonomous agent",
        description:
          "An LLM agent that 'decides' whether to escalate is unpredictable and impossible to debug at the node level. The current system routes every message through the same fixed pipeline; only plain JavaScript logic — not the model — decides whether to respond or escalate. Every routing decision traces back to a specific guardrail check.",
      },
      {
        title: "Confidence as a computed heuristic, not LLM self-report",
        description:
          "If you ask a model to grade its own answer, it will grade generously. Confidence here is derived deterministically from the retrieval score, the presence of risk flags, and whether the generated text contains hedging or refusal language. The model that writes the answer never sees the score it will be graded on.",
      },
      {
        title: "Two workflows, not one",
        description:
          "The error handler lives in a separate n8n workflow, isolated by workflow ID. The main workflow can't catch its own unhandled failures, and mixing the two muddles node names. Isolation also means the error handler is testable independently and won't accidentally fire for unrelated workflows on the same n8n instance.",
      },
    ],
  },

  errorHandling: {
    heading: "Error Handling",
    body: "Every failure path — validation, extraction, DB write, unhandled — lands in the same request_errors table with tenant_id, failed_node, error_message, and occurred_at. One query answers 'what's broken' without scrolling logs.",
    items: [
      "Document contains no extractable text — validation gate after extraction; logs to request_errors with failed_node: Validate Extracted Text. Case is not created, no vectors are written.",
      "Embedding provider returns empty vector — Pinecone rejects with a dimension-mismatch error. Retry-on-fail is enabled on the embedding node with exponential backoff; the error propagates to the error workflow if retries are exhausted.",
      "Supabase write failure on conversation turn — onError: continueErrorOutput routes to an inline Log Write Failure node that captures the error with tenant_id and failing node, then writes to request_errors without halting the workflow.",
      "Unhandled workflow-level error — a separate error workflow normalizes the failure into the same schema as inline errors and writes to request_errors, ensuring one table is the single source of truth for all failures.",
    ],
  },

  prototype: {
    heading: "Customer Chat in Action",
    intro:
      "The customer-facing widget shows the full arc: initial greeting with suggested questions, a specific complaint, deterministic escalation asking for the details needed, multi-turn intake collecting those details without re-asking, and a final grounded answer when the question can safely be resolved by the knowledge base.",
    images: [
      {
        src: "/case-studies/ai-support/chat-widget.png",
        width: 1358,
        height: 768,
        caption: "Chat widget — entry point with suggested questions",
      },
      {
        src: "/case-studies/ai-support/chat-charged-twice.png",
        width: 1357,
        height: 768,
        caption: "Customer reports a duplicate charge",
      },
      {
        src: "/case-studies/ai-support/chat-escalation.png",
        width: 1357,
        height: 768,
        caption: "Deterministic escalation — the assistant asks for what's actually needed",
      },
      {
        src: "/case-studies/ai-support/chat-details-provided.png",
        width: 1366,
        height: 768,
        caption: "Multi-turn intake — details merged into the same case, no re-asking",
      },
      {
        src: "/case-studies/ai-support/chat-grounded-response.png",
        width: 1360,
        height: 768,
        caption: "Grounded answer — response generated strictly from ingested docs",
      },
      {
        src: "/case-studies/ai-support/chat-grounded-response1.png",
        width: 1357,
        height: 768,
        caption: "Grounded answer — continued",
      },
    ],
  },

  results: {
    heading: "Results",
    body: "Honest framing: this is a portfolio demo, not a production system with measured baseline data. Here's what I can verify from the live build. The gap I'm aware of: I haven't benchmarked against a Tier-1 human baseline on the same ticket set. That's the next measurement I'd add, along with conversation volume analytics.",
    metrics: [
      { label: "Documents ingested", value: "11" },
      { label: "Formats supported", value: "3" },
      { label: "Retrieval precision", value: "18/20" },
      { label: "Grounded response latency", value: "~3s" },
      { label: "Trivial message latency", value: "<300ms" },
      { label: "Multi-turn escalation accuracy", value: "10/10" },
    ],
  },

  outcome: {
    heading: "Outcome",
    body: "A production-shaped AI support platform — live at the demo URL above — that answers strictly from tenant documentation, escalates deterministically when it shouldn't answer, and captures every failure in a single observable table. The frontend is intentionally engineer-facing: an ops console that surfaces system health from real activity, and a chat widget that shows customers and engineers alike why each answer was given. The lesson the project kept reinforcing: in an AI system, what you don't automate matters as much as what you do.",
  },

  reflection: {
    heading: "What I'd Improve Next",
    paragraphs: [
      "Human agent operations layer — the system hands off to a human with full context, but there's no agent-side queue, assignment, notes, or SLA tracking. That's the natural next layer.",
      "Streaming responses — currently the frontend waits for the full response before showing anything. Streaming would cut perceived latency by 2–3x for long answers.",
      "Prompt library as data, not code — prompt text currently lives in n8n Code nodes. Moving it to a Prompt_Library table would enable per-tenant prompt overrides and version history without redeploying the workflow.",
    ],
  },
};