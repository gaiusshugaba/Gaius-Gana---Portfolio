import type { Project } from "@/lib/types";

export const projects: Project[] = [
  // UI/UX
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
  // AI Automation
  {
    slug: "ai-support",
    title: "AI Customer Support Chatbot",
    summary:
      "Designed and built a multi-tenant AI support system — chat interface, RAG-powered answers, and deterministic escalation.",
    track: "automation",
    tags: ["n8n", "Pinecone", "Supabase"],
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
    title: "AI Lead Qualification & CRM Automation",
    summary:
      "Scores and routes inbound leads with AI, syncs to CRM, alerts sales — with every outcome logged.",
    track: "automation",
    tags: ["n8n", "Gemini", "HubSpot"],
    thumbnail: "/projects/ai-lead-crm.png",
    featured: true,
  },
  {
    slug: "media-monitoring",
    title: "Media Monitoring & Alerts",
    summary:
      "Tracks news mentions by keyword, classifies sentiment, alerts on negative coverage, and logs everything.",
    track: "automation",
    tags: ["Make", "Serper.dev", "Slack"],
    thumbnail: "/projects/media-monitoring.png",
    featured: false,
  },
];