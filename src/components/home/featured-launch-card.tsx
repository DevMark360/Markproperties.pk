import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { formatPriceLabel } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

interface FeaturedLaunchCardProps {
  projects: Project[];
  activeIndex: number;
  onSelect: (index: number) => void;
  onPauseChange: (isPaused: boolean) => void;
}

export function FeaturedLaunchCard({ projects, activeIndex, onSelect, onPauseChange }: FeaturedLaunchCardProps) {
  const project = projects[activeIndex];
  if (!project) return null;
  const price = formatPriceLabel(project.price);

  return (
    <div
      className="w-full rounded-2xl border-l-2 border-brand-500 bg-ink-950/75 p-6 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-7 lg:w-[27rem]"
      onMouseEnter={() => onPauseChange(true)}
      onMouseLeave={() => onPauseChange(false)}
      onFocus={() => onPauseChange(true)}
      onBlur={() => onPauseChange(false)}
    >
      <div aria-live="polite">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase">Featured launch</p>
        <h2 className="mt-3 text-xl leading-snug font-semibold">{project.name}</h2>
        <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-10">
          <div>
            <dt className="text-[11px] font-semibold tracking-[0.16em] text-white/55 uppercase">{price.label}</dt>
            <dd className="mt-1 text-lg font-bold">{price.value}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold tracking-[0.16em] text-white/55 uppercase">Location</dt>
            <dd className="mt-1 text-lg font-bold">{project.area}</dd>
          </div>
        </dl>
        <Link
          href={project.href}
          className="mt-5 inline-flex items-center gap-1 border-b border-white/40 pb-1 text-sm font-semibold transition-colors hover:border-brand-500 hover:text-brand-500"
        >
          See the project
          <ChevronRight className="size-4" />
        </Link>
      </div>
      <div className="mt-6 flex gap-2">
        {projects.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Show ${item.name}`}
            aria-current={index === activeIndex}
            onClick={() => onSelect(index)}
            className="group flex-1 py-2"
          >
            <span
              className={cn(
                "block h-1 rounded-full transition-colors",
                index === activeIndex ? "bg-brand-500" : "bg-white/20 group-hover:bg-white/40",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
