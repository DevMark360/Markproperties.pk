import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Guide } from "@/types/content";

export function GuidesGrid({ guides }: { guides: Guide[] }) {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {guides.map(({ id, title, description, icon: Icon, href }, index) => (
        <li key={id}>
          <Link
            href={href}
            className="group flex h-full flex-col rounded-2xl bg-ink-950 p-6 text-white transition-colors hover:bg-ink-900"
          >
            <div className="flex items-center justify-between">
              <span className="grid size-12 place-items-center rounded-full bg-brand-500">
                <Icon className="size-5" />
              </span>
              <span className="text-sm font-semibold text-white/35">0{index + 1}</span>
            </div>
            <h3 className="mt-8 text-lg font-semibold">{title}</h3>
            <p className="mt-2 mb-8 text-sm leading-relaxed text-white/60">{description}</p>
            <span className="mt-auto grid size-9 place-items-center rounded-full border border-white/20 transition-colors group-hover:border-brand-500 group-hover:bg-brand-500">
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
