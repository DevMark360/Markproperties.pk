import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { ProjectLaunchCard } from "@/components/cards/project-card";
import { EnquiryBand } from "@/components/leads/enquiry-band";
import { LeadDialogProvider } from "@/components/leads/lead-dialog";
import { MobileEnquiryBar } from "@/components/project/mobile-enquiry-bar";
import { ProjectFacts } from "@/components/project/project-facts";
import { ProjectGallery } from "@/components/project/project-gallery";
import { ProjectIntro } from "@/components/project/project-intro";
import { ProjectLocation } from "@/components/project/project-location";
import { ProjectSidebar } from "@/components/project/project-sidebar";
import { Carousel } from "@/components/ui/carousel";
import { Container } from "@/components/ui/container";
import { FaqList } from "@/components/ui/faq-list";
import { getProject, getProjectDetails, getProjectFaqs, getRelatedProjects, projects } from "@/data/projects";
import { formatPriceLabel } from "@/lib/format";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const price = formatPriceLabel(project.price);
  const description = `${project.name} by ${project.developer ?? "a trusted builder"} in ${project.area}, ${project.city}. ${project.unitTypes}. ${price.label} ${price.value}, ${project.paymentPlan.toLowerCase()}.`;

  return {
    title: `${project.name}, ${project.area}, ${project.city} | Price & Payment Plan`,
    description,
    alternates: { canonical: project.href },
    openGraph: { title: project.name, description, images: [project.heroImage ?? project.image] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  const details = getProjectDetails(slug);
  if (!project || !details) notFound();

  const relatedProjects = getRelatedProjects(project);

  return (
    <LeadDialogProvider projectId={project.id} projectName={project.name}>
      <ProjectIntro project={project} />

      <Container className="pt-5 pb-8 sm:pt-6 sm:pb-10">
        <ProjectGallery project={project} gallery={details.gallery} />

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="min-w-0">
            <ProjectFacts project={project} className="mb-12" />

            <ContentBlock title={`About ${project.name}`}>
              <div className="space-y-4 text-base leading-relaxed text-ink-700">
                {details.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </ContentBlock>

            <ContentBlock title="Project highlights">
              <CheckList items={details.highlights} className="sm:grid-cols-2" />
            </ContentBlock>

            <ContentBlock title="Amenities">
              <CheckList items={details.amenities} className="sm:grid-cols-2 xl:grid-cols-3" />
            </ContentBlock>

            <ContentBlock title="Location">
              <ProjectLocation project={project} mapQuery={details.mapQuery} />
            </ContentBlock>

            <ContentBlock title="Frequently asked">
              <FaqList items={getProjectFaqs(project)} name="project-faq" />
            </ContentBlock>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <ProjectSidebar project={project} />
          </aside>
        </div>
      </Container>

      <EnquiryBand
        title={`Interested in ${project.name}?`}
        description="We work directly with Pakistan's leading builders, so launch prices and payment plans reach our buyers first."
        secondaryAction={{ label: "All off-plan projects", href: "/projects" }}
      />

      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <Carousel
              label="Similar projects"
              controlsPlacement="top"
              toolbar={<h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">Similar projects</h2>}
              itemClassName="w-[80%] sm:w-[45%] lg:w-[calc((100%-3.75rem)/4)]"
            >
              {relatedProjects.map((related) => (
                <ProjectLaunchCard key={related.id} project={related} />
              ))}
            </Carousel>
          </Container>
        </section>
      )}

      <MobileEnquiryBar />
    </LeadDialogProvider>
  );
}

function ContentBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-ink-100 py-10 first-of-type:border-t-0 first-of-type:pt-0">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-ink-900">{title}</h2>
      {children}
    </section>
  );
}

function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("grid gap-x-8 gap-y-4", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] text-ink-700">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
            <Check className="size-3" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
