import type { ProjectStatus, PropertyType } from "@/types/content";

export const propertyTypeLabels: Record<PropertyType, string> = {
  apartment: "Apartments",
  duplex: "Duplexes & penthouses",
  villa: "Villas & houses",
  plot: "Plots",
  shop: "Shops",
  showroom: "Showrooms",
  office: "Offices",
  "commercial-plot": "Commercial plots",
  "mini-factory": "Factories & warehouses",
};

export const propertyTypes = Object.keys(propertyTypeLabels) as PropertyType[];

export const projectStatusSlugs: Record<string, ProjectStatus> = {
  "pre-launch": "Pre-launch",
  "under-construction": "Under construction",
  ready: "Ready for possession",
};

export const statusSlugByStatus = Object.fromEntries(
  Object.entries(projectStatusSlugs).map(([slug, status]) => [status, slug]),
) as Record<ProjectStatus, string>;
