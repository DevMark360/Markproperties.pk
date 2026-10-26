import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MarketInsight } from "@/types/content";

export function MarketInsights({ insights }: { insights: MarketInsight[] }) {
  return (
    <ul className="grid overflow-hidden rounded-2xl border border-ink-100 sm:grid-cols-2">
      {insights.map((insight, index) => (
        <li
          key={insight.title}
          className={cn(
            "border-ink-100",
            index > 0 && "border-t",
            index === 1 && "sm:border-t-0",
            index % 2 === 1 && "sm:border-l",
          )}
        >
          <Link href={insight.href} className="group flex items-start gap-6 p-6 transition-colors hover:bg-ink-50 sm:p-8">
            <span className="flex-1">
              <span className="block font-semibold text-ink-900">{insight.title}</span>
              <span className="mt-1.5 block text-sm leading-relaxed text-ink-500">{insight.description}</span>
            </span>
            <ChevronRight className="mt-0.5 size-5 shrink-0 text-ink-500 transition-transform group-hover:translate-x-0.5 group-hover:text-ink-900" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
