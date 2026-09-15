import type { CaseStudy } from "@/lib/types";

export const trip: CaseStudy = {
  slug: "trip",
  title: "Trip — AI Travel Planner",
  track: "uiux",
  year: "2025",
  tags: ["UX/UI", "Mobile", "AI Product"],
  overview: {
    src: "/case-studies/trip/overview.png",
    width: 1200,
    height: 800,
  },
  timeline: "7 Weeks",
  role: "Lead Product Designer",

  context: {
    heading: "Context",
    body: "Planning a trip in Africa often means juggling multiple apps, hidden fees, and generic recommendations. Trip is an AI-powered mobile travel planner that cuts planning time from hours to minutes while delivering personalized itineraries with local context.",
    meta: [
      { label: "Platform", value: "Mobile (iOS + Android)" },
      { label: "Role", value: "Lead Product Designer" },
      { label: "Tools", value: "Figma, ChatGPT, Google Forms, Maze" },
    ],
  },

  problem: {
    heading: "The Problem",
    body: "Travelers in Africa struggle with fragmented planning tools that lack real-time adjustments, personalization, and localized insights — making trip planning stressful, time-consuming, and less culturally relevant. The solution was a unified AI-powered travel planner that integrates bookings, itineraries, personalization, and local insights into a single seamless flow.",
    objectives: [
      "Cut planning time from hours to minutes with AI-generated itineraries.",
      "Replace multiple apps with one cohesive interface.",
      "Personalize recommendations based on traveler preferences.",
      "Build cultural context and local trust into every trip.",
    ],
    images: [
      {
        src: "/case-studies/trip/problem.png",
        width: 1400,
        height: 900,
        caption: "Too many apps. Too much planning time. Not enough trust.",
      },
    ],
  },

  research: {
    heading: "Research & Insights",
    body: "I ran a competitive analysis across four leading African travel apps — Timbu, Wakanow, Flapp (Travelstart), and TripZapp — and conducted a quantitative survey with 14 frequent travelers. The research surfaced four clear opportunities: AI-driven real-time adjustments, voice and chat assistants, hyper-personalized itineraries, and localized cultural experiences.",
    images: [
      {
        src: "/case-studies/trip/research-competitor.png",
        width: 1400,
        height: 400,
        caption: "Competitor analysis across four leading African travel apps",
      },
      {
        src: "/case-studies/trip/persona-david.png",
        width: 1400,
        height: 900,
        caption: "David Okoye — The Busy Business Traveler",
      },
      {
        src: "/case-studies/trip/persona-aisha.png",
        width: 1400,
        height: 900,
        caption: "Aisha Suleiman — The Adventure-Seeking Solo Traveler",
      },
      {
        src: "/case-studies/trip/persona-family.png",
        width: 1400,
        height: 900,
        caption: "Tunde & Chioma Adewale — The Family Vacation Planner",
      },
    ],
  },

  approach: {
    heading: "The Solution",
    intro:
      "A 7-week design process took Trip from research through usability testing. The app is built around one belief: planning a trip should feel effortless, personalized, and trustworthy — not stressful.",
    sections: [
      {
        title: "Design Process & Timeline",
        description:
          "A structured 7-week flow: research and discovery, personas and journey mapping, wireframing and information architecture, visual design system, high-fidelity screens, prototype build, and finally usability testing with real travelers.",
        images: [
          {
            src: "/case-studies/trip/process.png",
            width: 1380,
            height: 682,
            caption: "7-week design timeline from research to testing",
          },
        ],
      },
      {
        title: "Information Architecture",
        description:
          "The IA maps how travelers move through Trip: from welcome screen and sign-up, through onboarding and dashboard, then branching into four core areas — planning a new trip, ongoing trips, notifications, and profile settings. Each branch opens into the flows that support it, like AI chat planning, itinerary editing, and trip sharing.",
        images: [
          {
            src: "/case-studies/trip/information-architecture.png",
            width: 1371,
            height: 2106,
            caption: "Information architecture from onboarding to itinerary",
          },
        ],
      },
      {
        title: "Onboarding Experience",
        description:
          "Three screens welcome the user, showcase the app's value, and guide them into their first trip. Copy is warm and direct — the goal is to build trust quickly without overwhelming new users.",
        images: [
          {
            src: "/case-studies/trip/screens-onboarding.png",
            width: 1400,
            height: 900,
            caption: "Onboarding screens",
          },
        ],
      },
      {
        title: "Home & Itinerary Screens",
        description:
          "The home screen is a clear hub for quick actions: flights, stays, cars, and the primary 'Plan a new trip' call. The itinerary screen presents each day as a timeline — and a Story Mode reimagines the plan as a narrative you can relive.",
        images: [
          {
            src: "/case-studies/trip/screens-home.png",
            width: 900,
            height: 1100,
            caption: "Home screen",
          },
          {
            src: "/case-studies/trip/screens-itinerary.png",
            width: 1400,
            height: 900,
            caption: "Itinerary and Story Mode screens",
          },
        ],
      },
      {
        title: "Booking Experience",
        description:
          "Flights, stays, and cars follow a consistent card-based pattern. Filters, ratings, and AI suggestions make options clear and easy to compare — reducing the stress of choosing.",
        images: [
          {
            src: "/case-studies/trip/screens-booking-flights.png",
            width: 1000,
            height: 900,
            caption: "Flights — one-way, round-trip, and multi-city",
          },
          {
            src: "/case-studies/trip/screens-booking-stays.png",
            width: 1000,
            height: 900,
            caption: "Stays — hotel search and results",
          },
          {
            src: "/case-studies/trip/screens-booking-cars.png",
            width: 1000,
            height: 900,
            caption: "Cars — rental search and comparison",
          },
        ],
      },
      {
        title: "AI Chat & Voice Assistant",
        description:
          "The AI assistant turns planning into a conversation. Users can type or speak — 'Plan a 5-day solo relaxing trip to Cape Town' — and get a full itinerary back in seconds. This dual-mode interaction is what sets Trip apart from traditional planners.",
        images: [
          {
            src: "/case-studies/trip/screens-ai-chat.png",
            width: 1400,
            height: 800,
            caption: "AI Chat and Voice Assistant flow",
          },
        ],
      },
    ],
  },

  designSystem: {
    heading: "Visual Design System",
    paletteNote:
      "The visual identity follows a minimalist, elegant style — deep blues, rich gold, and soft neutrals reflecting trust, luxury, and simplicity. Mulish was chosen for its clean, modern, and highly legible personality.",
    palette: [
      { name: "Indigo Ink", hex: "#214263" },
      { name: "Goldenrod", hex: "#D4AF37" },
      { name: "Neutral Gray", hex: "#9C9D9E" },
      { name: "Charcoal Black", hex: "#0D0D0E" },
      { name: "Sand Beige", hex: "#ECE4C0" },
      { name: "OffWhite", hex: "#F3F3F3" },
    ],
    typography: {
      fontName: "Mulish",
      weights: ["Regular", "Medium", "SemiBold", "Bold"],
    },
    images: [
      {
        src: "/case-studies/trip/design-system-typography.png",
        width: 1341,
        height: 520,
        caption: "Typography & Colours",
      },
      {
        src: "/case-studies/trip/design-system-components.png",
        width: 1335,
        height: 1465,
        caption: "Iconography & Components",
      },
      {
        src: "/case-studies/trip/design-system-cards.png",
        width: 1270,
        height: 1463,
        caption: "UI Cards",
      },
    ],
  },

  prototype: {
    heading: "Full UI Screens",
    intro:
      "A complete screen library covering onboarding, planning, itinerary, booking, AI chat, notifications, and profile — all connected through the same modular card system.",
    images: [
      {
        src: "/case-studies/trip/screens-all.png",
        width: 1200,
        height: 2900,
        caption: "Full UI screen library",
      },
      {
        src: "/case-studies/trip/prototype.mp4",
        width: 1280,
        height: 720,
        caption: "Interactive prototype",
        video: true,
      },
    ],
  },

  testing: {
    heading: "User Testing",
    body: "To validate the design, I ran a usability test with 6 participants representing diverse traveler types and experience levels. The goal was to assess how easily users could complete core tasks — creating an account, planning an itinerary, and booking flights or stays.",
    insights: [
      "Signing up was quick and easy for all users.",
      "AI itineraries were helpful, but users wanted a simpler way to edit — like drag-and-drop.",
      "Users wanted more control over budget and trip interests when planning.",
      "Booking flows were smooth, but pricing wasn't always clear enough.",
    ],
  },

  outcome: {
    heading: "Outcome",
    body: "Trip was validated with 6 participants from diverse traveler segments. All core tasks — onboarding, itinerary creation, and booking — were completed successfully. The feedback surfaced three clear improvements for a future iteration: drag-and-drop itinerary editing, budget sliders and interest filters, and transparent pricing breakdowns across bookings.",
  },

  reflection: {
    heading: "Reflections for Future Projects",
    paragraphs: [
      "If I worked on a similar project again, I'd add drag-and-drop functionality to make itinerary customization more intuitive.",
      "I'd provide budget sliders and interest filters so users can personalize their plans more precisely.",
      "I'd introduce transparent pricing breakdowns to build trust across bookings.",
    ],
  },
};