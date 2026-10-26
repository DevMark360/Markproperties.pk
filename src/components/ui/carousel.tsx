"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: ReactNode;
  label: string;
  toolbar?: ReactNode;
  controlsPlacement?: "top" | "bottom";
  itemClassName?: string;
  className?: string;
}

export function Carousel({ children, label, toolbar, controlsPlacement = "bottom", itemClassName, className }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState({ prev: false, next: false });

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScroll({ prev: scrollLeft > 4, next: scrollLeft + clientWidth < scrollWidth - 4 });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateControls();
    const observer = new ResizeObserver(updateControls);
    observer.observe(track);
    track.addEventListener("scroll", updateControls, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", updateControls);
    };
  }, [updateControls, children]);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: "smooth" });
  };

  const controls = (
    <div className="flex shrink-0 gap-2">
      <CarouselButton label="Previous" disabled={!canScroll.prev} onClick={() => scrollBy(-1)}>
        <ChevronLeft className="size-5" />
      </CarouselButton>
      <CarouselButton label="Next" disabled={!canScroll.next} onClick={() => scrollBy(1)}>
        <ChevronRight className="size-5" />
      </CarouselButton>
    </div>
  );

  return (
    <div className={cn("relative", className)} role="region" aria-roledescription="carousel" aria-label={label}>
      {(toolbar || controlsPlacement === "top") && (
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="min-w-0">{toolbar}</div>
          {controlsPlacement === "top" && <div className="hidden sm:block">{controls}</div>}
        </div>
      )}
      <div
        ref={trackRef}
        className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-2 sm:mx-0 sm:scroll-px-0 sm:px-0"
      >
        {Children.map(children, (child) => (
          <div className={cn("shrink-0 snap-start", itemClassName)}>{child}</div>
        ))}
      </div>
      <div className={cn("mt-6", controlsPlacement === "top" && "sm:hidden")}>{controls}</div>
    </div>
  );
}

function CarouselButton({ label, disabled, onClick, children }: { label: string; disabled: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid size-10 place-items-center rounded-full border border-current/25 transition-colors hover:border-current disabled:opacity-30 disabled:hover:border-current/25"
    >
      {children}
    </button>
  );
}
