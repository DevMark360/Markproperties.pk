"use client";

import { useEffect, useState } from "react";

/** Cycles an index through `length` items every `intervalMs`, pausing while `isPaused` is true. */
export function useAutoRotate(length: number, intervalMs: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || length < 2) return;
    const timer = window.setTimeout(() => setActiveIndex((index) => (index + 1) % length), intervalMs);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused, length, intervalMs]);

  return { activeIndex, setActiveIndex, setIsPaused };
}
