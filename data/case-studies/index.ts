import { qurexa } from "./qurexa";
import { funlearn } from "./funlearn";
import { trip } from "./trip";
import { aiLeadCrm } from "./ai-lead-crm";
import { aiNewsletter } from "./ai-newsletter";
import { aiSupport } from "./ai-support";
import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  qurexa,
  funlearn,
  trip,
  aiLeadCrm,
  aiNewsletter,
  aiSupport,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}