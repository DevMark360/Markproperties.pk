"use client";

import { CheckCircle2, LoaderCircle, MessageCircle } from "lucide-react";
import { useActionState, useId } from "react";
import { submitLead, type LeadFormState } from "@/app/actions/leads";
import { leadIntents } from "@/config/leads";
import { whatsappHref } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LeadIntent } from "@/types/content";

interface LeadFormProps {
  defaultIntent?: LeadIntent;
  projectId?: string;
  projectName?: string;
  className?: string;
}

const initialState: LeadFormState = { status: "idle" };

export function LeadForm({
  defaultIntent = "general",
  projectId,
  projectName,
  className,
}: LeadFormProps) {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);
  const id = useId();
  const subject = projectName ?? "an off-plan project";

  if (state.status === "success") {
    return (
      <div className={cn("flex flex-col items-start gap-4", className)} role="status">
        <CheckCircle2 className="size-10 text-emerald-500" />
        <div>
          <p className="text-lg font-semibold">Thanks{state.submittedName ? `, ${state.submittedName}` : ""}. We&apos;ve got your request.</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-500">
            An advisor will call you shortly. Want it faster? Continue on WhatsApp.
          </p>
        </div>
        <a
          href={whatsappHref(`Hi Mark Properties, I just enquired about ${subject}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ className: "bg-[#25d366] hover:bg-[#1ebe5a]" })}
        >
          <MessageCircle className="size-4" />
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  const fieldClass =
    "h-12 w-full rounded-xl border border-ink-300 bg-white px-4 text-base text-ink-900 outline-none transition-colors placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";
  const errorClass = "mt-1.5 text-xs font-medium text-brand-500";

  return (
    <form action={formAction} noValidate className={cn("space-y-4", className)}>
      {projectId && <input type="hidden" name="projectId" value={projectId} />}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <input type="hidden" name="intent" value={defaultIntent} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="sr-only">
            Full name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            defaultValue={state.values?.name}
            placeholder="Full name"
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? `${id}-name-error` : undefined}
            className={fieldClass}
          />
          {state.errors?.name && (
            <p id={`${id}-name-error`} className={errorClass}>
              {state.errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="sr-only">
            Mobile number
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            defaultValue={state.values?.phone}
            placeholder="WhatsApp number"
            aria-invalid={Boolean(state.errors?.phone)}
            aria-describedby={state.errors?.phone ? `${id}-phone-error` : undefined}
            className={fieldClass}
          />
          {state.errors?.phone && (
            <p id={`${id}-phone-error`} className={errorClass}>
              {state.errors.phone}
            </p>
          )}
        </div>
      </div>

      <button type="submit" disabled={isPending} className={buttonVariants({ size: "lg", className: "w-full rounded-xl" })}>
        {isPending && <LoaderCircle className="size-4 animate-spin" />}
        {leadIntents[defaultIntent].submitLabel}
      </button>

      {state.message && (
        <p className={errorClass} role="alert">
          {state.message}
        </p>
      )}
      <p className="text-xs leading-relaxed text-ink-500">
        By submitting, you agree to be contacted by Mark Properties by phone and WhatsApp. We never share your details.
      </p>
    </form>
  );
}
