import { qurexa } from "./qurexa";
import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [qurexa];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}