"use client";

import { X } from "lucide-react";
import { createContext, use, useCallback, useEffect, useRef, useState, type ComponentProps, type ReactNode } from "react";
import { leadIntents } from "@/config/leads";
import type { LeadIntent } from "@/types/content";
import { LeadForm } from "./lead-form";

interface LeadDialogContextValue {
  open: (intent: LeadIntent) => void;
}

const LeadDialogContext = createContext<LeadDialogContextValue | null>(null);

interface LeadDialogProviderProps {
  projectId?: string;
  projectName?: string;
  children: ReactNode;
}

export function LeadDialogProvider({ projectId, projectName, children }: LeadDialogProviderProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [intent, setIntent] = useState<LeadIntent | null>(null);
  const [session, setSession] = useState(0);

  const open = useCallback((nextIntent: LeadIntent) => {
    setIntent(nextIntent);
    setSession((count) => count + 1);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (intent && dialog && !dialog.open) dialog.showModal();
  }, [intent, session]);

  const copy = intent ? leadIntents[intent] : null;

  return (
    <LeadDialogContext value={{ open }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="lead-dialog-title"
        onClose={() => setIntent(null)}
        onClick={(event) => event.target === event.currentTarget && event.currentTarget.close()}
        className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl bg-white p-0 text-ink-900 shadow-2xl backdrop:bg-ink-950/70 backdrop:backdrop-blur-sm"
      >
        {intent && copy && (
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                {projectName && <p className="text-xs font-semibold tracking-[0.18em] text-brand-500 uppercase">{projectName}</p>}
                <h2 id="lead-dialog-title" className="mt-2 text-2xl font-bold tracking-tight">
                  {copy.title}
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => dialogRef.current?.close()}
                className="-mt-1 -mr-2 grid size-10 shrink-0 place-items-center rounded-full text-ink-500 hover:bg-ink-50 hover:text-ink-900"
              >
                <X className="size-5" />
              </button>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">{copy.description}</p>
            <LeadForm
              key={session}
              defaultIntent={intent}
              projectId={projectId}
              projectName={projectName}
              className="mt-6"
            />
          </div>
        )}
      </dialog>
    </LeadDialogContext>
  );
}

export function useLeadDialog(): LeadDialogContextValue {
  const context = use(LeadDialogContext);
  if (!context) throw new Error("useLeadDialog must be used within a LeadDialogProvider");
  return context;
}

interface LeadTriggerProps extends Omit<ComponentProps<"button">, "onClick" | "type"> {
  intent: LeadIntent;
}

export function LeadTrigger({ intent, ...props }: LeadTriggerProps) {
  const { open } = useLeadDialog();
  return <button type="button" onClick={() => open(intent)} {...props} />;
}
