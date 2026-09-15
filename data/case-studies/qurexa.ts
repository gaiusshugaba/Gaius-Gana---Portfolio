import type { CaseStudy } from "@/lib/types";

export const qurexa: CaseStudy = {
  slug: "qurexa",
  title: "Qurexa Website & WebApp",
  track: "uiux",
  year: "2025",
  tags: ["UX/UI", "Healthcare", "Logistics"],
  coverImage: {
    src: "/case-studies/qurexa/cover.png",
    width: 1400,
    height: 1035,
  },
  liveUrl: "https://qurexa.co.uk",
  timeline: "July 2025 – November 2025",
  role: "UI/UX Designer",

  context: {
    heading: "Overview",
    body: "Qurexa is a UK-based healthcare logistics startup built to remove everyday friction from how people access essential care and groceries. The platform connects patients, pharmacies, stores, riders, and operations teams through a single, secure system — making prescription delivery, medication returns, and grocery logistics fast, reliable, and easy to manage.",
    meta: [
      {
        label: "Owner",
        value: "Adedotun David Seremekun — Founder, Qurexa Ltd",
      },
      { label: "Category", value: "Healthcare Logistics" },
      { label: "Role", value: "UI/UX Designer" },
    ],
  },

  problem: {
    heading: "The Problem",
    body: "Healthcare deliveries involve sensitive data, multiple stakeholders, and time-critical operations. Qurexa needed a way to bring prescription delivery, medication returns, grocery logistics, partners, riders, and internal teams into one unified platform without creating friction, confusion, or trust issues for users. Existing solutions were fragmented, hard to manage at scale, and not designed with real-world healthcare workflows in mind. The challenge was to design a system that felt simple for customers, operationally efficient for teams, and compliant by default.",
    objectives: [
      "Clear, stress-free delivery experience for customers.",
      "Transparent order tracking that builds trust.",
      "Privacy-first handling of personal health information.",
      "Efficient dashboards for internal teams.",
    ],
  },

  research: {
    heading: "Research & Discovery",
    body: "I was onboarded by the founder and front-end developer, who walked me through the product requirements document, business objectives, and existing technical constraints. I conducted a competitive review of comparable healthcare and logistics platforms to identify established interaction patterns and areas of opportunity. From there, I mapped the core user journeys — customer onboarding, prescription requests, order tracking, and internal operations — and used these to define a design system capable of supporting four distinct user roles (customers, partners, riders, and admins) within a single cohesive product experience.",
  },

  approach: {
    heading: "The Solution",
    intro:
      "A complete platform across marketing site, customer dashboard, and admin tools — designed to feel simple on the surface while supporting real healthcare operations underneath.",
    sections: [
      {
        title: "Clear Access & Onboarding",
        description:
          "Clear entry points reduce friction from the first interaction. Sign up, verification, and personalization are broken into small, focused steps so first-time users are never overwhelmed.",
        images: [
          {
            src: "/case-studies/qurexa/signin.png",
            width: 1347,
            height: 723,
          },
        ],
      },
      {
        title: "Privacy by Design",
        description:
          "Sensitive patient data is masked by default. Any admin requesting to view PII must provide a reason, ensuring privacy and compliance are built into the workflow rather than added on top.",
        images: [
          {
            src: "/case-studies/qurexa/privacy.png",
            width: 1258,
            height: 786,
          },
        ],
      },
      {
        title: "Customer Dashboard",
        description:
          "All services — prescriptions, returns, and grocery orders — brought into one clear dashboard with quick actions, live status cards, and recent order tracking.",
        images: [
          {
            src: "/case-studies/qurexa/dashboard-full.png",
            width: 1258,
            height: 1538,
          },
        ],
      },
      {
        title: "Order Tracking",
        description:
          "Simple delivery states keep users informed and reassured at every step, from order placed to delivered, with a visible rider, timeline, and real-time progress.",
        images: [
          {
            src: "/case-studies/qurexa/tracking.png",
            width: 1400,
            height: 1405,
          },
        ],
      },
      {
        title: "Partners & Operations",
        description:
          "Purpose-built tools for partners and operations teams keep deliveries moving efficiently, from sign-up and integration to admin dashboards for live operational visibility.",
        images: [
          {
            src: "/case-studies/qurexa/partners.png",
            width: 1208,
            height: 2320,
          },
        ],
      },
    ],
  },

  designSystem: {
    heading: "Design System",
    paletteNote:
      "The colour palette reflects the brand's calm, dependable personality while ensuring strong usability and accessibility in a healthcare setting.",
    palette: [
      { name: "Blue", hex: "#4873ED" },
      { name: "Pink", hex: "#CB2B7D" },
      { name: "Navy", hex: "#0B1F3A" },
    ],
    typography: {
      fontName: "IBM Plex Sans",
      weights: [
        "Thin",
        "ExtraLight",
        "Light",
        "Regular",
        "Medium",
        "SemiBold",
        "Bold",
      ],
    },
  },

  finalUI: {
    heading: "Final UI",
    images: [
      {
        src: "/case-studies/qurexa/landing-full.png",
        width: 1182,
        height: 5786,
        caption: "Landing Page",
      },
      {
        src: "/case-studies/qurexa/onboarding.png",
        width: 1061,
        height: 1860,
        caption: "Onboarding Flow",
      },
      {
        src: "/case-studies/qurexa/signin-flow.png",
        width: 1047,
        height: 1049,
        caption: "Sign In Flow",
      },
      {
        src: "/case-studies/qurexa/reset-flow.png",
        width: 1047,
        height: 824,
        caption: "Password Reset Flow",
      },
      {
        src: "/case-studies/qurexa/dashboard-tilted.png",
        width: 1400,
        height: 1515,
        caption: "Customer Dashboard",
      },
      {
        src: "/case-studies/qurexa/admin-tilted.png",
        width: 1380,
        height: 1866,
        caption: "Admin Dashboard",
      },
      {
        src: "/case-studies/qurexa/collage.png",
        width: 1400,
        height: 1035,
        caption: "Screen Library",
      },
    ],
  },

  outcome: {
    heading: "Outcome",
    body: "Qurexa is live at qurexa.co.uk and currently in testing. The platform covers the marketing website, customer dashboard, and admin tools, with role-based dashboards supporting prescription delivery, medication returns, grocery logistics, and internal operations.",
  },

  reflection: {
    heading: "Key Takeaways",
    paragraphs: [
      "Designing for healthcare logistics reinforced the importance of clarity, trust, and operational thinking. Small UX decisions have an outsized impact when users are handling sensitive information or time-critical deliveries.",
      "Working closely with the founder helped me align design decisions with business goals, while collaborating with the front-end developer strengthened my ability to design systems that are scalable and realistic to build. Most importantly, this project deepened my understanding of designing for multiple user roles — customers, partners, riders, and admins — within a single cohesive experience.",
    ],
  },
};