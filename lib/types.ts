export type Track = "uiux" | "automation";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  track: Track;
  tags: string[];
  thumbnail: string;
  featured: boolean;
}

export interface CaseStudyMeta {
  label: string;
  value: string;
}

export interface CaseStudyApproachSection {
  title: string;
  description: string;
  images: CaseStudyImage[];
}

export interface CaseStudyPalette {
  name: string;
  hex: string;
}

export interface CaseStudyTypography {
  fontName: string;
  weights: string[];
}

export interface CaseStudyImage {
  src: string;
  width: number;
  height: number;
  caption?: string;
  video?: boolean;
}

export interface CaseStudyBefore {
  heading: string;
  body: string;
  steps: string[];
  timeCost?: string;
}

export interface CaseStudyArchitecture {
  heading: string;
  intro?: string;
  images: CaseStudyImage[];
  modules?: { title: string; description: string }[];
}

export interface CaseStudyDecision {
  title: string;
  description: string;
}

export interface CaseStudyErrorHandling {
  heading: string;
  body: string;
  items?: string[];
  images?: CaseStudyImage[];
}

export interface CaseStudyDesign {
  heading: string;
  intro: string;
  principles?: string[];
  images: CaseStudyImage[];
}

export interface CaseStudyResult {
  heading: string;
  body: string;
  metrics?: { label: string; value: string }[];
  images?: CaseStudyImage[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  track: Track;
  year: string;
  tags: string[];
  coverImage?: CaseStudyImage;
  overview?: CaseStudyImage;
  liveUrl?: string;
  liveUrlLabel?: string;
  liveUrlNote?: string;
  timeline: string;
  role: string;
  context: {
    heading: string;
    body: string;
    meta: CaseStudyMeta[];
  };
  problem: {
    heading: string;
    body: string;
    objectives: string[];
    images?: CaseStudyImage[];
  };
  research: {
    heading: string;
    body: string;
    images?: CaseStudyImage[];
  };
  constraints?: {
    heading: string;
    intro?: string;
    images: CaseStudyImage[];
  };
  before?: CaseStudyBefore;
  approach: {
    heading: string;
    intro: string;
    sections: CaseStudyApproachSection[];
  };
  design?: CaseStudyDesign;
  architecture?: CaseStudyArchitecture;
  keyDecisions?: {
    heading: string;
    items: CaseStudyDecision[];
  };
  errorHandling?: CaseStudyErrorHandling;
  results?: CaseStudyResult;
  designSystem?: {
    heading: string;
    paletteNote: string;
    palette: CaseStudyPalette[];
    typography: CaseStudyTypography;
    images?: CaseStudyImage[];
  };
  wireframes?: {
    heading: string;
    images: CaseStudyImage[];
  };
  finalUI?: {
    heading: string;
    images: CaseStudyImage[];
  };
  prototype?: {
    heading: string;
    intro?: string;
    images: CaseStudyImage[];
  };
  testing?: {
    heading: string;
    body: string;
    insights: string[];
    images?: CaseStudyImage[];
  };
  outcome: {
    heading: string;
    body: string;
  };
  reflection?: {
    heading: string;
    paragraphs: string[];
  };
}