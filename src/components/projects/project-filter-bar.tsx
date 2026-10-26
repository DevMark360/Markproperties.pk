"use client";

import Form from "next/form";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import type { ChangeEvent } from "react";
import { propertyTypeLabels } from "@/config/project-taxonomy";
import { projectsHref, type FilterOptions, type ProjectFilters } from "@/lib/project-filters";
import { cn } from "@/lib/utils";

interface ProjectFilterBarProps {
  filters: ProjectFilters;
  options: FilterOptions;
}

const submitOnChange = (event: ChangeEvent<HTMLSelectElement>) => event.currentTarget.form?.requestSubmit();

export function ProjectFilterBar({ filters, options }: ProjectFilterBarProps) {
  const selects = [
    { name: "city", label: "City", placeholder: "All cities", value: filters.city, items: options.cities.map((city) => ({ value: city, label: city })) },
    {
      name: "type",
      label: "Property type",
      placeholder: "All property types",
      value: filters.type,
      items: options.types.map((type) => ({ value: type, label: propertyTypeLabels[type] })),
    },
    {
      name: "developer",
      label: "Developer",
      placeholder: "All developers",
      value: filters.developer,
      items: options.developers.map((developer) => ({ value: developer, label: developer })),
    },
  ];

  return (
    <Form
      key={JSON.stringify(filters)}
      action="/projects"
      role="search"
      aria-label="Filter projects"
      className="grid gap-2 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))_auto]"
    >
      {filters.status && <input type="hidden" name="status" value={filters.status} />}
      {filters.area && <input type="hidden" name="area" value={filters.area} />}
      {filters.view && <input type="hidden" name="view" value={filters.view} />}

      <label className="relative sm:col-span-2 lg:col-span-1">
        <span className="sr-only">Search projects</span>
        <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-ink-500" aria-hidden />
        <input
          type="search"
          name="q"
          defaultValue={filters.q}
          maxLength={80}
          autoComplete="off"
          placeholder="Project, builder or area"
          className="h-12 w-full rounded-xl border border-ink-100 bg-white pr-4 pl-11 text-[15px] text-ink-900 outline-none placeholder:text-ink-500 focus:border-ink-900"
        />
      </label>

      {selects.map((select) => (
        <label key={select.name} className="relative">
          <span className="sr-only">{select.label}</span>
          <select
            name={select.name}
            defaultValue={select.value ?? ""}
            onChange={submitOnChange}
            className="h-12 w-full appearance-none rounded-xl border border-ink-100 bg-white pr-10 pl-4 text-[15px] text-ink-900 outline-none focus:border-ink-900"
          >
            <option value="">{select.placeholder}</option>
            {select.items.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-ink-500" aria-hidden />
        </label>
      ))}

      <MapToggle filters={filters} />

      <noscript>
        <button type="submit" className="h-12 rounded-xl bg-brand-500 px-6 text-sm font-semibold text-white">
          Apply
        </button>
      </noscript>
    </Form>
  );
}

function MapToggle({ filters }: { filters: ProjectFilters }) {
  const isOn = filters.view === "map";

  return (
    <Link
      href={projectsHref(filters, { view: isOn ? undefined : "map", page: filters.page })}
      scroll={false}
      aria-label={isOn ? "Hide map" : "Show map"}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-3 rounded-xl px-5 text-[15px] font-semibold transition-colors sm:col-span-2 lg:col-span-1",
        isOn ? "bg-ink-950 text-white" : "border border-ink-100 bg-white text-ink-900 hover:border-ink-900",
      )}
    >
      <span className={cn("relative h-5 w-9 rounded-full transition-colors", isOn ? "bg-white/25" : "bg-ink-100")} aria-hidden>
        <span className={cn("absolute top-0.5 size-4 rounded-full bg-white shadow transition-[left]", isOn ? "left-[1.125rem]" : "left-0.5")} />
      </span>
      Map
    </Link>
  );
}

