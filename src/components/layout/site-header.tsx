"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { primaryNav } from "@/config/navigation";
import { siteConfig, telHref, whatsappHref } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { AdaptiveLogo } from "./logo";
import { MegaMenuPanel } from "./mega-menu-panel";
import { MobileNav } from "./mobile-nav";

const CLOSE_DELAY_MS = 150;

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    if (!openMenu) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpenMenu(null);
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [openMenu]);

  const showMenu = (label: string) => {
    window.clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), CLOSE_DELAY_MS);
  };

  const closeAll = () => {
    setOpenMenu(null);
    setIsMobileOpen(false);
  };

  const activeMenu = primaryNav.find((item) => item.label === openMenu)?.menu;
  const isHome = usePathname() === "/";
  const isTransparent = isHome && !isScrolled && !openMenu && !isMobileOpen;

  return (
    <header
      ref={headerRef}
      onMouseLeave={scheduleClose}
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,color] duration-300",
        isTransparent
          ? "bg-gradient-to-b from-black/45 to-transparent text-white"
          : "bg-white text-ink-900 shadow-[0_1px_0_0_var(--color-ink-100),0_8px_24px_-12px_rgb(0_0_0/0.15)]",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <AdaptiveLogo isLight={isTransparent} className="h-12 sm:h-14" />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const itemClass =
                "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-semibold whitespace-nowrap transition-colors hover:text-brand-500";
              if (!item.menu) {
                return (
                  <li key={item.label} onMouseEnter={scheduleClose}>
                    <Link href={item.href} className={itemClass}>
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const isOpen = openMenu === item.label;
              const panelId = `menu-${item.label.toLowerCase()}`;
              return (
                <li key={item.label} onMouseEnter={() => showMenu(item.label)}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? panelId : undefined}
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                    className={cn(itemClass, isOpen && "text-brand-500")}
                  >
                    {item.label}
                    <ChevronDown className={cn("size-4 transition-transform", isOpen && "rotate-180")} />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="hidden items-center gap-2 px-3 text-sm font-semibold whitespace-nowrap xl:inline-flex"
          >
            <Phone className="size-4 text-brand-500" />
            {siteConfig.contact.phone}
          </a>
          <a
            href={whatsappHref("Hi Mark Properties, I'd like to speak with an advisor.")}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
          >
            Talk to an advisor
          </a>
          <button
            type="button"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileOpen((open) => !open)}
            className={cn("grid size-10 place-items-center rounded-full lg:hidden", isTransparent ? "hover:bg-white/10" : "hover:bg-ink-50")}
          >
            {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {activeMenu && openMenu && (
        <div className="hidden lg:block" onMouseEnter={() => showMenu(openMenu)}>
          <MegaMenuPanel id={`menu-${openMenu.toLowerCase()}`} menu={activeMenu} onNavigate={closeAll} />
        </div>
      )}

      {isMobileOpen && <MobileNav id="mobile-menu" onNavigate={closeAll} />}
    </header>
  );
}
