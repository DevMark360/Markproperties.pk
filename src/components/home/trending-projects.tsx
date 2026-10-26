"use client";

import { useMemo, useState } from "react";
import { ProjectSpotlightCard } from "@/components/cards/project-card";
import { Carousel } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { Project, ProjectStatus } from "@/types/content";

interface TrendingProjectsProps {
  projects: Project[];
  statuses: ProjectStatus[];
}

export function TrendingProjects({ projects, statuses }: TrendingProjectsProps) {
  const [activeStatus, setActiveStatus] = useState<ProjectStatus>(statuses[0]);

  const projectsByStatus = useMemo(() => {
    const groups = new Map<ProjectStatus, Project[]>();
    for (const project of projects) {
      const group = groups.get(project.status);
      if (group) group.push(project);
      else groups.set(project.status, [project]);
    }
    return groups;
  }, [projects]);

  const tabs = (
    <div role="tablist" aria-label="Filter projects by stage" className="scrollbar-none flex overflow-x-auto">
      <div className="flex gap-1 rounded-xl border border-white/15 p-1">
        {statuses.map((status) => {
          const isActive = status === activeStatus;
          return (
            <button
              key={status}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="trending-projects-panel"
              onClick={() => setActiveStatus(status)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors",
                isActive ? "bg-white text-ink-950" : "text-white/65 hover:text-white",
              )}
            >
              {status}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div id="trending-projects-panel" role="tabpanel">
      <Carousel
        key={activeStatus}
        label={`Trending ${activeStatus.toLowerCase()} projects`}
        toolbar={tabs}
        controlsPlacement="top"
        itemClassName="w-[70%] sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-5rem)/5)]"
      >
        {(projectsByStatus.get(activeStatus) ?? []).map((project) => (
          <ProjectSpotlightCard key={project.id} project={project} />
        ))}
      </Carousel>
    </div>
  );
}
