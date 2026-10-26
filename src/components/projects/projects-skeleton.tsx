const shimmer = "animate-pulse rounded-2xl bg-ink-100";

export function ProjectsSkeleton() {
  return (
    <div aria-busy aria-label="Loading projects">
      <div className="grid gap-2 py-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className={`${shimmer} h-12 rounded-xl`} />
        ))}
      </div>
      <div className="mt-6 flex gap-2">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className={`${shimmer} h-9 w-32 rounded-full`} />
        ))}
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className={`${shimmer} h-[26rem]`} />
        ))}
      </div>
    </div>
  );
}
