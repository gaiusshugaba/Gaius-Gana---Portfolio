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

export interface CaseStudy {
  slug: string;
  title: string;
  track: Track;
  year: string;
  tags: string[];
  coverImage: CaseStudyImage;
  liveUrl?: string;
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
  };
  research: {
    heading: string;
    body: string;
  };
  approach: {
    heading: string;
    intro: string;
    sections: CaseStudyApproachSection[];
  };
  designSystem: {
    heading: string;
    paletteNote: string;
    palette: CaseStudyPalette[];
    typography: CaseStudyTypography;
  };
  finalUI: {
    heading: string;
    images: CaseStudyImage[];
  };
  outcome: {
    heading: string;
    body: string;
  };
  reflection: {
    heading: string;
    paragraphs: string[];
  };
}