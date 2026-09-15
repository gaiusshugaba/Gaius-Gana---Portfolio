import { qurexa } from "./qurexa";
import { funlearn } from "./funlearn";
import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [qurexa, funlearn];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}