import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Suspense } from "react";
import { EnquiryBand } from "@/components/leads/enquiry-band";
import { LeadDialogProvider } from "@/components/leads/lead-dialog";
import { OffPlanGuide } from "@/components/projects/off-plan-guide";
import { ProjectResults } from "@/components/projects/project-results";
import { ProjectsSkeleton } from "@/components/projects/projects-skeleton";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

const title = "New Off-Plan Projects in Pakistan";
const description =
  "Pre-launch and under-construction projects from established builders across Pakistan. See the location, builder and starting price of every project.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title, description, url: "/projects" },
};

const absolute = (path: string) => new URL(path, siteConfig.url).toString();

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absolute("/") },
      { "@type": "ListItem", position: 2, name: "New projects", item: absolute("/projects") },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absolute("/projects"),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absolute(project.href),
        name: project.name,
      })),
    },
  },
];

export default function ProjectsPage({ searchParams }: PageProps<"/projects">) {
  return (
    <LeadDialogProvider>
      <JsonLd data={structuredData} />

      <section className="relative isolate border-b border-ink-100">
        <div className="bg-blueprint absolute inset-0 -z-10 opacity-60" aria-hidden />
        <Container className="pt-8 pb-10 sm:pt-10 sm:pb-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm font-medium text-ink-500">
              <li className="flex items-center gap-1.5">
                <Link href="/" className="hover:text-ink-900">
                  Home
                </Link>
                <ChevronRight className="size-3.5" aria-hidden />
              </li>
              <li aria-current="page" className="text-ink-950">
                New projects
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-3xl text-[1.75rem] leading-[1.12] font-medium tracking-[-0.02em] text-balance text-ink-950 sm:text-4xl">{title}</h1>
          <p className="mt-4 max-w-[42rem] text-base leading-[1.625] text-pretty text-ink-700">
            Pre-launch and under-construction projects from established builders across Pakistan. Search by name, or filter by city,
            property type or builder.
          </p>
        </Container>
      </section>

      <Container className="pb-16 sm:pb-20">
        <Suspense fallback={<ProjectsSkeleton />}>
          <ProjectResults searchParams={searchParams} />
        </Suspense>
      </Container>

      <OffPlanGuide />

      <EnquiryBand
        title="Want the launch before it is public?"
        description="Builders share new projects with us before they reach the portals, so our buyers get launch prices and first choice of units."
        secondaryAction={{ label: "See our developers", href: "/developers" }}
      />
    </LeadDialogProvider>
  );
}
