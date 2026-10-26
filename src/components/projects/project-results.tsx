import Link from "next/link";
import { SearchX, X } from "lucide-react";
import { ProjectLaunchCard } from "@/components/cards/project-card";
import { LeadTrigger } from "@/components/leads/lead-dialog";
import { buttonVariants } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import { projectStatusSlugs, propertyTypeLabels } from "@/config/project-taxonomy";
import { projects } from "@/data/projects";
import {
  filterProjects,
  getFilterOptions,
  paginate,
  parseProjectFilters,
  projectsHref,
  type FilterKey,
  type ProjectFilters,
  type RawSearchParams,
} from "@/lib/project-filters";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";
import { ProjectFilterBar } from "./project-filter-bar";
import { ProjectsMap, type MapPin } from "./projects-map";

const statusTabs = [
  { slug: undefined, label: "All projects" },
  ...Object.entries(projectStatusSlugs).map(([slug, label]) => ({ slug, label })),
];

export async function ProjectResults({ searchParams }: { searchParams: Promise<RawSearchParams> }) {
  const options = getFilterOptions(projects);
  const filters = parseProjectFilters(await searchParams, options);
  const matches = filterProjects(projects, filters);
  const { items, page, pageCount } = paginate(matches, filters.page);

  return (
    <>
      <div className="sticky top-20 z-30 -mx-4 bg-white px-4 py-4 shadow-[0_14px_28px_-20px_rgb(0_0_0/0.28)] sm:-mx-6 sm:rounded-b-2xl sm:px-6 lg:-mx-10 lg:px-10">
        <ProjectFilterBar filters={filters} options={options} />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Project status" className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          {statusTabs.map(({ slug, label }) => {
            const isActive = filters.status === slug;
            return (
              <Link
                key={label}
                href={projectsHref(filters, { status: slug })}
                scroll={false}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors",
                  isActive ? "border-ink-950 bg-ink-950 text-white" : "border-ink-100 text-ink-700 hover:border-ink-900",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <p className="shrink-0 text-sm text-ink-500" aria-live="polite">
          Showing <span className="font-semibold text-ink-900 tabular-nums">{matches.length}</span>{" "}
          {matches.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <ActiveFilters filters={filters} />

      {items.length === 0 ? (
        <EmptyState />
      ) : filters.view === "map" ? (
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ProjectGrid items={items} className="order-2 mt-0 sm:grid-cols-2 lg:order-1" />
          <div className="order-1 h-[55svh] lg:sticky lg:top-[10.5rem] lg:order-2 lg:h-[calc(100svh-12rem)]">
            <ProjectsMap key={matches.map((project) => project.id).join()} pins={matches.map(toMapPin)} />
          </div>
        </div>
      ) : (
        <ProjectGrid items={items} className="sm:grid-cols-2 lg:grid-cols-3" />
      )}

      <Pagination className="mt-12" page={page} pageCount={pageCount} hrefFor={(number) => projectsHref(filters, { page: number })} />
    </>
  );
}

function ProjectGrid({ items, className }: { items: Project[]; className?: string }) {
  return (
    <ul className={cn("mt-8 grid gap-6", className)}>
      {items.map((project) => (
        <li key={project.id}>
          <ProjectLaunchCard project={project} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw" />
        </li>
      ))}
    </ul>
  );
}

function toMapPin(project: Project): MapPin {
  return {
    id: project.id,
    name: project.name,
    href: project.href,
    location: `${project.area}, ${project.city}`,
    image: project.image,
    lat: project.location.lat,
    lng: project.location.lng,
  };
}

function ActiveFilters({ filters }: { filters: ProjectFilters }) {
  const chips: { key: FilterKey; label: string }[] = [];
  if (filters.q) chips.push({ key: "q", label: `“${filters.q}”` });
  if (filters.city) chips.push({ key: "city", label: filters.city });
  if (filters.area) chips.push({ key: "area", label: filters.area });
  if (filters.type) chips.push({ key: "type", label: propertyTypeLabels[filters.type] });
  if (filters.developer) chips.push({ key: "developer", label: filters.developer });

  if (chips.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
      {chips.map(({ key, label }) => (
        <Link
          key={key}
          href={projectsHref(filters, { [key]: undefined })}
          scroll={false}
          aria-label={`Remove filter ${label}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-ink-50 py-1.5 pr-2.5 pl-3.5 font-medium text-ink-900 hover:bg-ink-100"
        >
          {label}
          <X className="size-3.5" />
        </Link>
      ))}
      <Link
        href={projectsHref({ status: filters.status, view: filters.view })}
        scroll={false}
        className="ml-1 font-semibold text-brand-600 underline-offset-4 hover:underline"
      >
        Clear all
      </Link>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="mt-8 flex flex-col items-center rounded-2xl border border-dashed border-ink-300 px-6 py-16 text-center">
      <SearchX className="size-8 text-ink-500" />
      <h2 className="mt-4 text-xl font-bold text-ink-900">No projects match these filters</h2>
      <p className="mt-2 max-w-md text-ink-500">
        Remove a filter to see more projects, or ask an advisor about launches that are not listed yet.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/projects" className={buttonVariants({ variant: "outline", className: "rounded-xl" })}>
          Clear filters
        </Link>
        <LeadTrigger intent="general" className={buttonVariants({ className: "rounded-xl" })}>
          Ask an advisor
        </LeadTrigger>
      </div>
    </div>
  );
}
