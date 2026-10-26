import { Container } from "@/components/ui/container";

const shimmer = "animate-pulse rounded-2xl bg-ink-100";

export default function ProjectLoading() {
  return (
    <div aria-busy aria-label="Loading project">
      <div className="border-b border-ink-100">
        <Container className="space-y-3 py-5 sm:py-6">
          <div className={`${shimmer} h-4 w-64`} />
          <div className={`${shimmer} h-10 w-full max-w-md sm:h-12`} />
          <div className={`${shimmer} h-4 w-56`} />
        </Container>
      </div>
      <Container className="pt-5 pb-8 sm:pt-6 sm:pb-10">
        <div className="grid gap-3 lg:h-[clamp(22rem,calc(100svh-17.5rem),34rem)] lg:grid-cols-[2fr_1fr] lg:grid-rows-2">
          <div className={`${shimmer} aspect-[4/3] lg:row-span-2 lg:aspect-auto`} />
          <div className={`${shimmer} hidden lg:block`} />
          <div className={`${shimmer} hidden lg:block`} />
        </div>
        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="space-y-4">
            <div className={`${shimmer} h-44`} />
            <div className={`${shimmer} h-6 w-72`} />
            <div className={`${shimmer} h-24`} />
          </div>
          <div className={`${shimmer} hidden h-72 lg:block`} />
        </div>
      </Container>
    </div>
  );
}
