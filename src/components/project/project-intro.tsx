import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { Project } from "@/types/content";

export function ProjectIntro({ project }: { project: Project }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: project.area, href: `/projects?area=${encodeURIComponent(project.area)}` },
  ];

  return (
    <div className="border-b border-ink-100">
      <Container className="py-5 sm:py-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-500">
            {crumbs.map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-1.5">
                <Link href={crumb.href} className="hover:text-ink-900">
                  {crumb.label}
                </Link>
                <ChevronRight className="size-3.5" aria-hidden />
              </li>
            ))}
            <li aria-current="page" className="font-medium text-ink-900">
              {project.name}
            </li>
          </ol>
        </nav>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance text-ink-900 sm:text-4xl lg:text-[2.75rem]">{project.name}</h1>
        <p className="mt-2 text-ink-500">
          {[project.area, project.developer, project.status].filter(Boolean).join(" · ")}
        </p>
      </Container>
    </div>
  );
}
