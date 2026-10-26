import type { LeadIntent } from "@/types/content";

interface LeadIntentCopy {
  title: string;
  description: string;
  submitLabel: string;
}

export const leadIntents: Record<LeadIntent, LeadIntentCopy> = {
  brochure: {
    title: "Get the brochure",
    description: "We'll send the official brochure, renders and latest price list to your WhatsApp.",
    submitLabel: "Send me the brochure",
  },
  general: {
    title: "Talk to an advisor",
    description: "Leave your number and an advisor who knows this project will call you back.",
    submitLabel: "Request a call back",
  },
};

export const isLeadIntent = (value: unknown): value is LeadIntent =>
  typeof value === "string" && Object.hasOwn(leadIntents, value);
