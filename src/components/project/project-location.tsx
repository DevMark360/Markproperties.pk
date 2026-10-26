import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/types/content";

interface ProjectLocationProps {
  project: Project;
  mapQuery: string;
}

export function ProjectLocation({ project, mapQuery }: ProjectLocationProps) {
  const query = encodeURIComponent(mapQuery);

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-100">
      <iframe
        title={`Map showing the location of ${project.name}`}
        src={`https://maps.google.com/maps?q=${query}&z=14&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="aspect-[16/9] w-full border-0 bg-ink-100 sm:aspect-[2/1]"
      />
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-sm text-ink-700">
          <MapPin className="mt-0.5 size-4 shrink-0 text-brand-500" />
          {project.address}
        </p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-ink-900 hover:text-brand-500"
        >
          Get directions
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
