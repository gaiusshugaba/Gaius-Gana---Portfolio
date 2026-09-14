export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessTrack {
  id: "uiux" | "automation";
  label: string;
  intro: string;
  steps: ProcessStep[];
}

export const processTracks: ProcessTrack[] = [
  {
    id: "uiux",
    label: "UI/UX",
    intro: "how I take a product from problem to shipped interface.",
    steps: [
      {
        number: "01",
        title: "Discover",
        description:
          "Understand the problem, users, and constraints before designing.",
      },
      {
        number: "02",
        title: "Map",
        description:
          "Turn requirements into flows, wireframes, and edge cases.",
      },
      {
        number: "03",
        title: "Design",
        description:
          "UI, prototypes, and design systems built for real constraints.",
      },
      {
        number: "04",
        title: "Validate",
        description:
          "Test with real users, refine what doesn't hold up.",
      },
      {
        number: "05",
        title: "Handoff",
        description:
          "Clean files, documented so developers can build from them.",
      },
    ],
  },
  {
    id: "automation",
    label: "AI Automation",
    intro: "how I take a manual process from audit to running system.",
    steps: [
      {
        number: "01",
        title: "Audit",
        description:
          "Map the manual process and find what's worth automating.",
      },
      {
        number: "02",
        title: "Plan",
        description:
          "Choose the tools, sketch the workflow, define the failure paths.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Connect the tools and wire the automation.",
      },
      {
        number: "04",
        title: "Test",
        description:
          "Run edge cases, break it on purpose, fix what fails.",
      },
      {
        number: "05",
        title: "Monitor",
        description:
          "Log every run and alert when something breaks.",
      },
    ],
  },
];