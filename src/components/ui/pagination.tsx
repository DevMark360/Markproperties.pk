import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  page: number;
  pageCount: number;
  hrefFor: (page: number) => string;
  className?: string;
}

const itemClass = "grid size-10 place-items-center rounded-full text-sm font-semibold transition-colors";

export function Pagination({ page, pageCount, hrefFor, className }: PaginationProps) {
  if (pageCount <= 1) return null;
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className={cn("flex items-center justify-center gap-1.5", className)}>
      <PageArrow href={page > 1 ? hrefFor(page - 1) : undefined} label="Previous page">
        <ChevronLeft className="size-4" />
      </PageArrow>
      {pages.map((number) =>
        number === page ? (
          <span key={number} aria-current="page" className={cn(itemClass, "bg-ink-950 text-white")}>
            {number}
          </span>
        ) : (
          <Link key={number} href={hrefFor(number)} className={cn(itemClass, "text-ink-700 hover:bg-ink-50")}>
            {number}
          </Link>
        ),
      )}
      <PageArrow href={page < pageCount ? hrefFor(page + 1) : undefined} label="Next page">
        <ChevronRight className="size-4" />
      </PageArrow>
    </nav>
  );
}

function PageArrow({ href, label, children }: { href?: string; label: string; children: React.ReactNode }) {
  const className = cn(itemClass, "border border-ink-100");
  if (!href) {
    return (
      <span aria-hidden className={cn(className, "text-ink-300")}>
        {children}
      </span>
    );
  }
  return (
    <Link href={href} aria-label={label} className={cn(className, "text-ink-900 hover:border-ink-900")}>
      {children}
    </Link>
  );
}
