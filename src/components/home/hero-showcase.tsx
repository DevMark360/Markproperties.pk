"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { useAutoRotate } from "@/hooks/use-auto-rotate";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";
import { FeaturedLaunchCard } from "./featured-launch-card";

const ROTATION_MS = 6000;

interface HeroShowcaseProps {
  projects: Project[];
  children: ReactNode;
}

export function HeroShowcase({ projects, children }: HeroShowcaseProps) {
  const { activeIndex, setActiveIndex, setIsPaused } = useAutoRotate(projects.length, ROTATION_MS);

  return (
    <div className="relative">
      {projects.map((project, index) => (
        <Image
          key={project.id}
          src={project.heroImage ?? project.image}
          alt={index === activeIndex ? `${project.name}, ${project.area}, ${project.city}` : ""}
          fill
          preload={index === 0}
          sizes="100vw"
          className={cn(
            "-z-10 object-cover transition-opacity duration-1000 ease-in-out",
            index === activeIndex ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/85 via-ink-950/45 to-ink-950/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />

      <Container className="grid min-h-svh content-end gap-10 pt-28 pb-[clamp(2rem,7svh,4.5rem)] lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <div>{children}</div>
        <FeaturedLaunchCard
          projects={projects}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          onPauseChange={setIsPaused}
        />
      </Container>
    </div>
  );
}
