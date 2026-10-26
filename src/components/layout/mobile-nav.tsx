import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { primaryNav } from "@/config/navigation";
import { siteConfig, telHref, whatsappHref } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function MobileNav({ id, onNavigate }: { id: string; onNavigate: () => void }) {
  return (
    <div id={id} className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto border-t border-ink-100 bg-white lg:hidden">
      <Container className="py-4">
        <ul className="divide-y divide-ink-100">
          {primaryNav.map((item) =>
            item.menu ? (
              <li key={item.label}>
                <details name="mobile-nav" className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                    {item.label}
                    <ChevronDown className="size-5 text-ink-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="space-y-5 pb-5">
                    {item.menu.sections.map((section) => (
                      <div key={section.title}>
                        {item.menu.sections.length > 1 && (
                          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">{section.title}</p>
                        )}
                        <ul className="space-y-1">
                          {section.links.map((link) => (
                            <li key={link.label}>
                              <Link href={link.href} onClick={onNavigate} className="block py-1.5 text-ink-700 hover:text-brand-500">
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              </li>
            ) : (
              <li key={item.label}>
                <Link href={item.href} onClick={onNavigate} className="block py-4 text-lg font-semibold text-ink-900">
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        <div className="mt-6 flex flex-col gap-3 border-t border-ink-100 pt-6">
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
            Talk to an advisor
          </a>
          <a href={telHref} className={buttonVariants({ variant: "outline", size: "lg" })}>
            <Phone className="size-4" />
            {siteConfig.contact.phone}
          </a>
        </div>
      </Container>
    </div>
  );
}
