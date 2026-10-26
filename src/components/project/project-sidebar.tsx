import Image from "next/image";
import { LeadTrigger } from "@/components/leads/lead-dialog";
import { buttonVariants } from "@/components/ui/button";
import { getDeveloper } from "@/data/developers";
import { formatPriceLabel } from "@/lib/format";
import type { Project } from "@/types/content";

export function ProjectSidebar({ project }: { project: Project }) {
  const price = formatPriceLabel(project.price);
  const developer = project.developer ? getDeveloper(project.developer) : undefined;

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-ink-100 bg-white p-6">
        <p className="text-sm text-ink-500">{project.price ? price.label : "Starting price"}</p>
        <p className="mt-1 text-3xl font-bold tracking-tight text-ink-900">{project.price ? price.value : "On request"}</p>

        <LeadTrigger intent="brochure" className={buttonVariants({ size: "lg", className: "mt-6 w-full rounded-xl" })}>
          Request the brochure
        </LeadTrigger>

        <dl className="mt-6 space-y-2 border-t border-ink-100 pt-5 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-ink-500">Status</dt>
            <dd className="text-right font-medium text-ink-900">{project.handover ?? project.status}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink-500">Payment plan</dt>
            <dd className="text-right font-medium text-ink-900">{project.paymentPlan}</dd>
          </div>
        </dl>
      </div>

      {project.developer && (
        <div className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-4">
          <span className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-ink-100 bg-white text-lg font-bold text-ink-900">
            {developer ? (
              <Image src={developer.logo} alt="" fill sizes="56px" className="object-contain p-1.5" />
            ) : (
              project.developer.charAt(0)
            )}
          </span>
          <div className="min-w-0">
            <p className="text-xs text-ink-500">Developer</p>
            <p className="truncate font-semibold text-ink-900">{project.developer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
