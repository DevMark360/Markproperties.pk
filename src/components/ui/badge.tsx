import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  brand: "bg-brand-500 text-white",
  light: "bg-white/90 text-ink-900 backdrop-blur",
  subtle: "bg-ink-100 text-ink-700",
} as const;

interface BadgeProps extends ComponentProps<"span"> {
  variant?: keyof typeof variants;
}

export function Badge({ variant = "subtle", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold", variants[variant], className)}
      {...props}
    />
  );
}
