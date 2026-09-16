import type { CaseStudy } from "@/lib/types";

export const funlearn: CaseStudy = {
  slug: "funlearn",
  title: "FunLearn — Connected Learning Experience",
  track: "uiux",
  year: "2025",
  tags: ["UX/UI", "Mobile", "EdTech"],
  overview: {
    src: "/case-studies/funlearn/overview.png",
    width: 816,
    height: 882,
  },
  timeline: "5 Weeks",
  role: "UX/UI Designer",

  context: {
    heading: "Context",
    body: "FunLearn is a gamified K–12 learning app designed around Nigeria's primary school curriculum. It helps children learn independently while giving parents a simple way to set goals, track progress, and celebrate growth — on devices that are often shared and offline.",
    meta: [
      { label: "Platform", value: "Mobile (iOS + Android)" },
      { label: "Audience", value: "Primary school pupils & parents" },
      { label: "Role", value: "UX/UI Designer" },
    ],
  },

  problem: {
    heading: "The Problem",
    body: "Children can complete learning activities without necessarily understanding the topic or feeling motivated to continue. For parents, the challenge is different — they want to support their child's learning but struggle to understand what their child is learning, where they're struggling, and whether they're improving. In a low-connectivity environment, reliable internet cannot be assumed.",
    objectives: [
      "Keep children motivated and engaged with short, rewarding lessons.",
      "Give parents clarity on progress without constant supervision.",
      "Make learning feel like play, not another task.",
      "Work reliably in low-connectivity environments.",
    ],
    images: [
      {
        src: "/case-studies/funlearn/problem-personas.png",
        width: 1378,
        height: 310,
        caption: "Child, Parent, and Connectivity — the three forces shaping the design",
      },
    ],
  },

  research: {
    heading: "Research & Discovery",
    body: "I started from two user profiles — the child (Tunde, 10, the Curious Learner) and the parent (Mrs Adebayo, 34, the Engaged Parent) — and mapped their goals, pain points, needs, and motivators. From there I identified five design constraints that shaped every decision.",
    images: [
      {
        src: "/case-studies/funlearn/context-tunde.png",
        width: 1380,
        height: 738,
        caption: "The Child — Tunde, 10",
      },
      {
        src: "/case-studies/funlearn/context-mrs-adebayo.png",
        width: 1380,
        height: 737,
        caption: "The Parent — Mrs Adebayo, 34",
      },
    ],
  },

  constraints: {
    heading: "The Constraints",
    intro:
      "FunLearn wasn't designed for an ideal environment where every child has fast, reliable internet. Five constraints shaped every decision.",
    images: [
      {
        src: "/case-studies/funlearn/constraints.png",
        width: 1376,
        height: 854,
      },
    ],
  },

  approach: {
    heading: "The Solution",
    intro:
      "I shifted the experience from lessons to goals. Instead of asking 'what lesson should I start?', FunLearn asks 'what are we trying to achieve?' That reframing led to a core product loop: Set Goals → Learn → Get Feedback → Earn Rewards → Track Progress → Keep Learning.",
    sections: [
      {
        title: "Product Idea — From Lessons to Goals",
        description:
          "The core loop reframes the experience around intention rather than content. Parents set meaningful goals, children work toward them, and every lesson feeds back into visible progress.",
        images: [
          {
            src: "/case-studies/funlearn/product-loop.png",
            width: 1408,
            height: 728,
          },
        ],
      },
      {
        title: "Designing the First Goal",
        description:
          "Rather than asking parents to configure everything at once, onboarding progressively introduces Child → Focus → Goal → Reward → Review. This gives parents control without turning setup into a form-filling exercise.",
        images: [
          {
            src: "/case-studies/funlearn/onboarding.png",
            width: 1376,
            height: 1817,
          },
        ],
      },
      {
        title: "Learning Journey",
        description:
          "One of the biggest challenges was turning an academic topic into something a child could move through. I used 'Whole Numbers' as the prototype topic and structured it into five smaller steps: What are whole numbers? → Place value → Comparing numbers → Practice → Check understanding. The result is a clear progression: Understand → Practice → Apply → Check.",
        images: [
          {
            src: "/case-studies/funlearn/learning-journey.png",
            width: 1376,
            height: 1814,
          },
        ],
      },
      {
        title: "Designing Feedback",
        description:
          "Getting an answer wrong shouldn't feel like failing. Feedback works in three layers — Confirmation ('You got it right'), Reinforcement ('Here's why'), and Reward ('Here's what you earned'). Incorrect answers encourage another attempt instead of ending the experience.",
        images: [
          {
            src: "/case-studies/funlearn/feedback.png",
            width: 696,
            height: 896,
          },
        ],
      },
      {
        title: "Making Progress Feel Rewarding",
        description:
          "Badges celebrate achievement, stars give progress value, and the Avatar Shop makes rewards actionable. The motivation loop is simple: Learn → Earn → Spend → Customize → Keep Learning. Badges celebrate progress, stars create value, and customization creates motivation.",
        images: [
          {
            src: "/case-studies/funlearn/rewards.png",
            width: 1310,
            height: 1319,
          },
        ],
      },
      {
        title: "The Parent Experience",
        description:
          "Parents shouldn't have to become data analysts. The parent interface was built around one question: 'What do I need to know about my child's learning right now?' The flow is Goals → Rewards → Progress & Insights.",
        images: [
          {
            src: "/case-studies/funlearn/parent-experience.png",
            width: 1368,
            height: 2760,
          },
        ],
      },
    ],
  },

  designSystem: {
    heading: "Design System",
    paletteNote:
      "A lightweight design system kept FunLearn playful for children, clear for parents, and consistent across the experience. The colour system balances playfulness with clarity — using colour to communicate action, progress, rewards, and feedback.",
    palette: [
      { name: "Primary Blue", hex: "#1225F1" },
      { name: "Neutral", hex: "#131519" },
      { name: "Accent Orange", hex: "#FF7748" },
      { name: "Accent Green", hex: "#38BD72" },
      { name: "Accent Pink", hex: "#FF5C84" },
      { name: "Accent Red", hex: "#E24A4C" },
    ],
    typography: {
      fontName: "Dynapuff & Baloo 2",
      weights: ["Regular", "Medium", "SemiBold", "Bold", "ExtraBold"],
    },
    images: [
      {
        src: "/case-studies/funlearn/design-system-typography.png",
        width: 1379,
        height: 679,
        caption: "Typography",
      },
      {
        src: "/case-studies/funlearn/design-system-colors.png",
        width: 1280,
        height: 1789,
        caption: "Colour Palette",
      },
      {
        src: "/case-studies/funlearn/design-system-components.png",
        width: 1381,
        height: 3997,
        caption: "Components",
      },
    ],
  },

  wireframes: {
    heading: "Wireframes",
    images: [
      {
        src: "/case-studies/funlearn/wireframes.png",
        width: 1376,
        height: 1026,
      },
    ],
  },

  prototype: {
    heading: "Prototype",
    intro:
      "Two connected flows — one for the child, one for the parent. Tap through to see how the experience comes together.",
    images: [
      {
        src: "/case-studies/funlearn/prototype-child.mp4",
        width: 1280,
        height: 720,
        caption: "Child Flow Prototype",
        video: true,
      },
      {
        src: "/case-studies/funlearn/prototype-parent.mp4",
        width: 1280,
        height: 720,
        caption: "Parent Flow Prototype",
        video: true,
      },
    ],
  },

  outcome: {
    heading: "Outcome",
    body: "FunLearn is a portfolio prototype, not a shipped product — so I'm not presenting fabricated post-launch metrics. The concept evolved from a simple learning app into a connected learning loop: Lessons → Goals → Feedback → Rewards → Progress. The child experience moves through Learn → Practice → Improve → Earn → Continue, while the parent experience moves through Set → Guide → Monitor → Celebrate. Both connect through shared learning goals and progress.",
  },

  reflection: {
    heading: "What I Learned",
    paragraphs: [
      "01 — Content comes first. Educational UX is about how information is taught, not just how it looks.",
      "02 — Motivation needs a system. Stars and badges work best when connected to meaningful learning behaviour.",
      "03 — Simplicity depends on the user. For children: intuitive and engaging. For parents: clear and actionable.",
      "04 — Constraints shape better decisions. Designing offline-first forced me to focus on what the product truly needs.",
    ],
  },
};