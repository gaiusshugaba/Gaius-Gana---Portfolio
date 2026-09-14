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