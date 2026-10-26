import { projectStatusSlugs, propertyTypeLabels } from "@/config/project-taxonomy";
import type { Project, ProjectStatus, PropertyType } from "@/types/content";

export const PROJECTS_PER_PAGE = 12;
const MAX_QUERY_LENGTH = 80;

export interface ProjectFilters {
  q?: string;
  city?: string;
  area?: string;
  developer?: string;
  type?: PropertyType;
  status?: string;
  view?: "map";
  page: number;
}

export type FilterKey = Exclude<keyof ProjectFilters, "page" | "view">;

export type RawSearchParams = Record<string, string | string[] | undefined>;

export interface FilterOptions {
  cities: string[];
  areas: string[];
  developers: string[];
  types: PropertyType[];
}

const first = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value)?.trim() || undefined;

const oneOf = (value: string | undefined, allowed: Iterable<string>) => {
  if (!value) return undefined;
  const lower = value.toLowerCase();
  for (const option of allowed) if (option.toLowerCase() === lower) return option;
  return undefined;
};

export function getFilterOptions(projects: Project[]): FilterOptions {
  const sorted = (values: Set<string>) => [...values].sort((a, b) => a.localeCompare(b));
  const cities = new Set<string>();
  const areas = new Set<string>();
  const developers = new Set<string>();
  const types = new Set<PropertyType>();

  for (const project of projects) {
    cities.add(project.city);
    areas.add(project.area);
    if (project.developer) developers.add(project.developer);
    for (const type of project.propertyTypes) types.add(type);
  }

  return {
    cities: sorted(cities),
    areas: sorted(areas),
    developers: sorted(developers),
    types: (Object.keys(propertyTypeLabels) as PropertyType[]).filter((type) => types.has(type)),
  };
}

export function parseProjectFilters(params: RawSearchParams, options: FilterOptions): ProjectFilters {
  const page = Number.parseInt(first(params.page) ?? "1", 10);

  return {
    q: first(params.q)?.slice(0, MAX_QUERY_LENGTH),
    city: oneOf(first(params.city), options.cities),
    area: oneOf(first(params.area), options.areas),
    developer: oneOf(first(params.developer), options.developers),
    type: oneOf(first(params.type), options.types) as PropertyType | undefined,
    status: oneOf(first(params.status), Object.keys(projectStatusSlugs)),
    view: first(params.view) === "map" ? "map" : undefined,
    page: Number.isSafeInteger(page) && page > 0 ? page : 1,
  };
}

/** O(n · k) where k is the searchable text length per project. */
export function filterProjects(projects: Project[], filters: ProjectFilters): Project[] {
  const terms = filters.q?.toLowerCase().split(/\s+/).filter(Boolean) ?? [];
  const status: ProjectStatus | undefined = filters.status ? projectStatusSlugs[filters.status] : undefined;

  return projects.filter((project) => {
    if (filters.city && project.city !== filters.city) return false;
    if (filters.area && project.area !== filters.area) return false;
    if (filters.developer && project.developer !== filters.developer) return false;
    if (filters.type && !project.propertyTypes.includes(filters.type)) return false;
    if (status && project.status !== status) return false;
    if (terms.length === 0) return true;

    const haystack = [project.name, project.area, project.city, project.address, project.developer, project.unitTypes]
      .join(" ")
      .toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

export function paginate<T>(items: T[], page: number, perPage = PROJECTS_PER_PAGE) {
  const pageCount = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(page, pageCount);
  return { items: items.slice((current - 1) * perPage, current * perPage), page: current, pageCount };
}

export function projectsHref(filters: Partial<ProjectFilters>, changes: Partial<Record<keyof ProjectFilters, string | number | undefined>> = {}) {
  const params = new URLSearchParams();
  const merged = { ...filters, page: undefined, ...changes };

  for (const key of ["q", "city", "area", "type", "developer", "status", "view", "page"] as const) {
    const value = merged[key];
    if (value !== undefined && value !== "" && !(key === "page" && Number(value) <= 1)) params.set(key, String(value));
  }

  const query = params.toString();
  return query ? `/projects?${query}` : "/projects";
}
