import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "qurexa",
    title: "Qurexa",
    summary:
      "Role-based dashboards for a UK healthcare logistics startup — one clear operations view per team, from prescription intake to delivery.",
    track: "uiux",
    tags: ["Website & Webapp", "Dashboards", "UI/UX"],
    thumbnail: "/projects/qurexa.png",
    featured: true,
  },
  {
    slug: "funlearn",
    title: "FunLearn — Connected Learning Experience",
    summary:
      "Offline-first, gamified learning for Nigerian primary school pupils — designed for low-connectivity classrooms and shared devices.",
    track: "uiux",
    tags: ["UI/UX", "Gamified Learning", "Mobile"],
    thumbnail: "/projects/funlearn.png",
    featured: true,
  },
  {
    slug: "trip",
    title: "Trip — AI Travel Planner",
    summary:
      "An AI-assisted travel planner that turns scattered trip decisions — flights, stays, itinerary — into one guided flow.",
    track: "uiux",
    tags: ["Mobile", "AI Product", "UI/UX"],
    thumbnail: "/projects/trip.png",
    featured: true,
  },
  {
    slug: "ledger",
    title: "Ledger — Invoice Reconciliation",
    summary:
      "Reason-first AP tool that replaces confidence scores with specific explanations — designed and built with n8n, GPT-4o, and Supabase.",
    track: "uiux",
    tags: ["UI/UX", "FinTech", "n8n", "AI Automation"],
    thumbnail: "/case-studies/ledger/review-screen.png",
    featured: true,
  },
  {
    slug: "ai-support",
    title: "An AI Support System With Deterministic Escalation",
    summary:
      "Multi-tenant RAG platform that answers from tenant docs, escalates deterministically when it shouldn't answer, and manages multi-turn case intake.",
    track: "automation",
    tags: ["n8n", "Pinecone", "Supabase", "UI/UX"],
    thumbnail: "/projects/ai-support.png",
    featured: true,
  },
  {
    slug: "ai-newsletter",
    title: "AI Newsletter Automation",
    summary:
      "Researches, ranks, writes, and segments a newsletter — with human approval before send.",
    track: "automation",
    tags: ["n8n", "Gemini", "Airtable"],
    thumbnail: "/projects/ai-newsletter.png",
    featured: true,
  },
  {
    slug: "ai-lead-crm",
    title: "AI-Powered Real Estate Lead Qualification & CRM Automation",
    summary:
      "Scores and routes inbound leads with AI, syncs to CRM, alerts sales — with every outcome logged.",
    track: "automation",
    tags: ["n8n", "Gemini", "HubSpot"],
    thumbnail: "/projects/ai-lead-crm.png",
    featured: true,
  },
];