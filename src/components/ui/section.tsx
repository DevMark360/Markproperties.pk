import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type Tone = "light" | "muted" | "dark";

const toneStyles: Record<Tone, string> = {
  light: "bg-white text-ink-900",
  muted: "bg-ink-50 text-ink-900",
  dark: "bg-ink-950 text-white",
};

interface SectionProps extends ComponentProps<"section"> {
  tone?: Tone;
}

export function Section({ tone = "light", className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-24", toneStyles[tone], className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  action?: { label: string; href: string };
  tone?: Tone;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, action, tone = "light", className }: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className={cn("mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-brand-500 uppercase">{eyebrow}</p>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
        {description && (
          <p className={cn("mt-4 text-base leading-relaxed", isDark ? "text-white/65" : "text-ink-500")}>
            {description}
          </p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className={cn(
            "group inline-flex shrink-0 items-center gap-3 self-start rounded-full py-1.5 pr-1.5 pl-5 text-xs font-bold tracking-wide uppercase transition-colors sm:self-auto",
            isDark ? "bg-white/10 hover:bg-white/15" : "bg-ink-50 hover:bg-ink-100",
          )}
        >
          {action.label}
          <span
            className={cn(
              "grid size-8 place-items-center rounded-full transition-colors group-hover:bg-brand-500 group-hover:text-white",
              isDark ? "bg-white text-ink-950" : "bg-ink-950 text-white",
            )}
          >
            <ArrowUpRight className="size-4" />
          </span>
        </Link>
      )}
    </div>
  );
}
