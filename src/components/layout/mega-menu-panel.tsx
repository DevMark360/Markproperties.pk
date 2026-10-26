import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { MegaMenu } from "@/config/navigation";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface MegaMenuPanelProps {
  id: string;
  menu: MegaMenu;
  onNavigate: () => void;
}

const linkClass = "text-[15px] text-ink-700 transition-colors hover:text-brand-500";
const headingClass = "text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase";

export function MegaMenuPanel({ id, menu, onNavigate }: MegaMenuPanelProps) {
  const [primary] = menu.sections;
  const isMultiSection = menu.sections.length > 1;

  return (
    <div id={id} className="absolute inset-x-0 top-full border-t border-ink-100 bg-white shadow-[0_24px_48px_-24px_rgb(0_0_0/0.25)]">
      <Container className={cn("grid gap-12 py-10", menu.promo && "lg:grid-cols-[1fr_25rem]")}>
        {isMultiSection ? (
          <div className="grid grid-cols-4 gap-10">
            {menu.sections.map((section) => (
              <div key={section.title}>
                <p className={cn(headingClass, "border-b border-ink-100 pb-4")}>{section.title}</p>
                <ul className="mt-5 space-y-3.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} onClick={onNavigate} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          primary && (
            <div>
              <div className="flex min-h-11 items-center justify-between border-b border-ink-100 pb-4">
                <p className={headingClass}>{primary.title}</p>
                {menu.viewAll && (
                  <Link
                    href={menu.viewAll.href}
                    onClick={onNavigate}
                    className="inline-flex items-center gap-1 rounded-full bg-ink-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
                  >
                    {menu.viewAll.label}
                    <ChevronRight className="size-4" />
                  </Link>
                )}
              </div>
              <ul className="mt-6 columns-3 gap-x-10">
                {primary.links.map((link) => (
                  <li key={link.label} className="mb-4 break-inside-avoid">
                    <Link href={link.href} onClick={onNavigate} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}

        {menu.promo && (
          <Link
            href={menu.promo.cta.href}
            onClick={onNavigate}
            className="group flex min-h-52 flex-col rounded-2xl bg-ink-950 p-7 text-white transition-colors hover:bg-ink-900"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-white/55 uppercase">{menu.promo.eyebrow}</span>
            <span className="mt-3 text-xl leading-snug font-bold">{menu.promo.title}</span>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold">
              {menu.promo.cta.label}
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        )}
      </Container>
    </div>
  );
}
