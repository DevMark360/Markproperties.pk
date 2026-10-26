import { Building2, CalendarClock, Home, Wallet, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

interface Fact {
  icon: LucideIcon;
  label: string;
  value: string;
}

export function ProjectFacts({ project, className }: { project: Project; className?: string }) {
  const facts: Fact[] = [
    ...(project.developer ? [{ icon: Building2, label: "Developer", value: project.developer }] : []),
    { icon: CalendarClock, label: "Status", value: project.handover ?? project.status },
    { icon: Home, label: "Property types", value: project.unitTypes },
    { icon: Wallet, label: "Payment plan", value: project.paymentPlan },
  ];

  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-x-6 gap-y-8 rounded-2xl bg-ink-50 p-6 sm:p-8 xl:grid-cols-4 xl:gap-0 xl:divide-x xl:divide-ink-300/60",
        className,
      )}
    >
      {facts.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex flex-col gap-3 xl:px-6 xl:first:pl-0 xl:last:pr-0">
          <span className="grid size-10 place-items-center rounded-full bg-white text-brand-500 shadow-sm">
            <Icon className="size-[1.125rem]" />
          </span>
          <div>
            <dt className="text-[11px] font-semibold tracking-[0.14em] text-ink-500 uppercase">{label}</dt>
            <dd className="mt-1 leading-snug font-semibold text-ink-900">
              {value.split(" · ").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
