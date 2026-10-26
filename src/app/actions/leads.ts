"use server";

import { getProject } from "@/data/projects";
import { saveLead, validateLead, type LeadField } from "@/lib/leads";

export interface LeadFormState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<LeadField, string>>;
  submittedName?: string;
  values?: Record<"name" | "phone" | "intent", string>;
}

const readField = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
};

export async function submitLead(_previous: LeadFormState, formData: FormData): Promise<LeadFormState> {
  if (formData.get("website")) return { status: "success" };

  const projectId = formData.get("projectId");
  const project = typeof projectId === "string" ? getProject(projectId) : undefined;

  const values = { name: readField(formData, "name"), phone: readField(formData, "phone"), intent: readField(formData, "intent") };
  const result = validateLead({ ...values, projectId: project?.id });

  if (!result.ok) return { status: "error", errors: result.errors, values };

  try {
    await saveLead(result.lead);
  } catch (error) {
    console.error("Failed to save lead", error);
    return { status: "error", message: "Something went wrong. Please try again or message us on WhatsApp.", values };
  }

  return { status: "success", submittedName: result.lead.name.split(" ")[0] };
}
