import Image from "next/image";
import Link from "next/link";
import { Building2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatPriceLabel } from "@/lib/format";
import type { Project } from "@/types/content";

interface ProjectCardProps {
  project: Project;
  sizes?: string;
}

export function ProjectSpotlightCard({ project, sizes = "(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 70vw" }: ProjectCardProps) {
  const price = formatPriceLabel(project.price);

  return (
    <Link href={project.href} className="group block">
      <div className="relative aspect-[9/14] overflow-hidden rounded-2xl bg-ink-900">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <Badge variant="brand" className="absolute top-3 left-3">
          {project.paymentPlan}
        </Badge>
      </div>
      <p className="mt-4 flex items-baseline gap-2">
        <span className="text-[11px] font-semibold tracking-wider text-white/50 uppercase">{price.label}</span>
        <span className="text-xl font-bold tracking-tight">{price.value}</span>
      </p>
      <h3 className="mt-1 font-semibold">{project.name}</h3>
      <p className="mt-0.5 text-sm text-white/55">
        {project.area}, {project.city}
      </p>
    </Link>
  );
}

export function ProjectLaunchCard({ project, sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 80vw" }: ProjectCardProps) {
  const price = formatPriceLabel(project.price);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-colors duration-300 hover:border-ink-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
        <Image
          src={project.image}
          alt=""
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg leading-snug font-semibold tracking-[-0.01em] text-balance text-ink-900">{project.name}</h3>
        <dl className="mt-3 space-y-2 text-[15px] text-ink-500">
          <div className="flex items-center gap-2.5">
            <dt>
              <MapPin className="size-4 shrink-0" aria-label="Location" />
            </dt>
            <dd>
              {project.area}, {project.city}
            </dd>
          </div>
          {project.developer && (
            <div className="flex items-center gap-2.5">
              <dt>
                <Building2 className="size-4 shrink-0" aria-label="Builder" />
              </dt>
              <dd>{project.developer}</dd>
            </div>
          )}
        </dl>

        <div className="mt-auto pt-5">
          <div className="border-t border-ink-100 pt-5">
            <Link
              href={project.href}
              aria-label={`${project.name}, ${project.price ? `${price.label.toLowerCase()} ${price.value}` : "price on request"}`}
              className="flex h-12 items-center justify-center rounded-xl bg-ink-950 px-4 text-[15px] font-semibold text-white transition-colors outline-none group-hover:bg-brand-500 after:absolute after:inset-0 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              {project.price ? `${price.label} ${price.value}` : "Price on request"}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
