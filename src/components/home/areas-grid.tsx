import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Area } from "@/types/content";

export function AreasGrid({ areas }: { areas: Area[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {areas.map((area) => (
        <li key={area.name}>
          <Link href={area.href} className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-ink-900">
            <Image
              src={area.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <span className="absolute top-4 right-4 grid size-9 place-items-center rounded-full bg-white/15 backdrop-blur transition-colors group-hover:bg-brand-500">
              <ArrowUpRight className="size-4" />
            </span>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="text-xl font-semibold">{area.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{area.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
