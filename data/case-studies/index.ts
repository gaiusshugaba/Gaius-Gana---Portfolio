import { qurexa } from "./qurexa";
import { funlearn } from "./funlearn";
import { trip } from "./trip";
import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [qurexa, funlearn, trip];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}