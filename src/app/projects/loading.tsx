import { ProjectsSkeleton } from "@/components/projects/projects-skeleton";
import { Container } from "@/components/ui/container";

export default function ProjectsLoading() {
  return (
    <>
      <Container className="space-y-4 pt-8 pb-10 sm:pt-10 sm:pb-12">
        <div className="h-4 w-40 animate-pulse rounded-2xl bg-ink-100" />
        <div className="h-10 w-full max-w-xl animate-pulse rounded-2xl bg-ink-100 sm:h-12" />
        <div className="h-4 w-full max-w-2xl animate-pulse rounded-2xl bg-ink-100" />
      </Container>
      <Container className="pb-16">
        <ProjectsSkeleton />
      </Container>
    </>
  );
}
