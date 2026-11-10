export interface Service {
  id: "uiux" | "automation" | "video";
  label: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "uiux",
    label: "UI/UX Product Design",
    headline: "Interfaces built for clarity and scale.",
    description: "I design end-to-end digital products, from early user research and wireframing to high-fidelity UI and developer handoff. I specialize in data-heavy dashboards, SaaS platforms, and building scalable design systems that make complex products feel simple.",
    deliverables: ["User Research", "Wireframing", "Interactive Prototypes", "Design Systems"]
  },
  {
    id: "automation",
    label: "AI Workflow Automation",
    headline: "Systems that remove manual bottlenecks.",
    description: "I build production-ready backend systems that connect your tools and automate repetitive work. From AI-powered customer support (RAG) to lead qualification pipelines, I use tools like n8n and LLMs to make your operations run faster without errors.",
    deliverables: ["n8n Workflows", "AI Integrations", "API Connections", "Error Observability"]
  },
   {
    id: "video",
    label: "AI Video & Content",
    headline: "High-velocity content creation.",
    description: "I produce short-form AI video and social media assets using modern tools like Canva and generative visuals. I help brands maintain a consistent visual presence and communicate complex ideas quickly, without the traditional overhead of a full production studio.",
    deliverables: ["AI Commercials", "Short-form Video", "Social Carousels", "Visual Storytelling"]
  }
];