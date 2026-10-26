import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types/content";

interface FaqListProps {
  items: FaqItem[];
  name: string;
  className?: string;
}

export function FaqList({ items, name, className }: FaqListProps) {
  return (
    <div className={cn("border-t border-ink-100", className)}>
      {items.map((item, index) => (
        <details key={item.question} name={name} open={index === 0} className="group border-b border-ink-100">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold text-ink-900 group-open:text-brand-500 [&::-webkit-details-marker]:hidden">
            {item.question}
            <Plus className="size-4 shrink-0 text-ink-500 transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <p className="max-w-3xl pb-6 text-sm leading-relaxed text-ink-500">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
