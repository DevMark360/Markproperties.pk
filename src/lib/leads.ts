import { isLeadIntent } from "@/config/leads";
import type { LeadIntent } from "@/types/content";

export type LeadField = "name" | "phone" | "intent";

export interface Lead {
  name: string;
  phone: string;
  intent: LeadIntent;
  projectId?: string;
  createdAt: Date;
}

export type LeadValidation = { ok: true; lead: Lead } | { ok: false; errors: Partial<Record<LeadField, string>> };

const NAME_LIMITS = { min: 2, max: 80 } as const;

/** Normalises Pakistani and international numbers to E.164, e.g. "0310 3173660" → "+923103173660". */
export function normalizePhone(raw: string): string | null {
  const trimmed = raw.trim();
  let digits = trimmed.replace(/\D/g, "");

  if (!trimmed.startsWith("+")) {
    if (digits.startsWith("00")) digits = digits.slice(2);
    else if (digits.startsWith("0")) digits = `92${digits.slice(1)}`;
    else if (/^3\d{9}$/.test(digits)) digits = `92${digits}`;
  }

  if (digits.startsWith("92")) return /^92\d{9,10}$/.test(digits) ? `+${digits}` : null;
  return /^\d{8,15}$/.test(digits) ? `+${digits}` : null;
}

export function validateLead(input: { name: unknown; phone: unknown; intent: unknown; projectId?: string }): LeadValidation {
  const errors: Partial<Record<LeadField, string>> = {};
  const name = typeof input.name === "string" ? input.name.trim().replace(/\s+/g, " ") : "";
  const phone = typeof input.phone === "string" ? normalizePhone(input.phone) : null;

  if (name.length < NAME_LIMITS.min || name.length > NAME_LIMITS.max) errors.name = "Please enter your name.";
  if (!phone) errors.phone = "Please enter a valid mobile number, e.g. 0300 1234567.";
  if (!isLeadIntent(input.intent)) errors.intent = "Please choose what you need.";

  if (Object.keys(errors).length > 0 || !phone || !isLeadIntent(input.intent)) return { ok: false, errors };

  return { ok: true, lead: { name, phone, intent: input.intent, projectId: input.projectId, createdAt: new Date() } };
}

/** Persistence lands with the MySQL `leads` table; until then submissions are validated only. */
export async function saveLead(lead: Lead): Promise<void> {
  void lead;
}
