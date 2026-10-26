import Link from "next/link";
import Form from "next/form";
import { Search, Sparkle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { featuredLaunches, heroStats, quickSearches } from "@/data/home";
import { HeroShowcase } from "./hero-showcase";

export function HeroSection() {
  return (
    <section className="relative isolate -mt-20 overflow-hidden bg-ink-950 text-white">
      <HeroShowcase projects={featuredLaunches}>
        <p className="text-sm font-semibold text-white/80">{siteConfig.name} · Pakistan</p>
        <h1 className="mt-3 text-4xl leading-[1.05] font-bold tracking-tight sm:text-[clamp(2.75rem,7.5svh,3.75rem)]">
          Invest Early.
          <Sparkle className="ml-3 hidden size-11 fill-white text-white sm:inline" aria-hidden />
          <br />
          Live Better.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Pre-launch and under-construction projects from Pakistan&apos;s trusted builders, with expert advisors from
          booking to possession.
        </p>

        <Form
          action="/projects"
          role="search"
          className="mt-7 flex w-full max-w-2xl items-center gap-2 rounded-xl bg-white p-1.5 shadow-2xl shadow-black/40"
        >
          <label htmlFor="hero-search" className="sr-only">
            Search by project, builder or area
          </label>
          <Search className="ml-3 size-5 shrink-0 text-ink-500" aria-hidden />
          <input
            id="hero-search"
            name="q"
            type="search"
            autoComplete="off"
            placeholder="Search by project, builder or area"
            className="h-12 min-w-0 flex-1 bg-transparent px-2 text-base text-ink-900 outline-none placeholder:text-ink-500"
          />
          <button
            type="submit"
            className="h-12 shrink-0 rounded-lg bg-brand-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-600 sm:px-10"
          >
            Search
          </button>
        </Form>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
          <span className="mr-1 text-white/65">Popular:</span>
          {quickSearches.map((term) => (
            <Link
              key={term}
              href={`/projects?q=${encodeURIComponent(term)}`}
              className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-white/90 backdrop-blur transition-colors hover:border-white/60 hover:text-white"
            >
              {term}
            </Link>
          ))}
        </div>
      </HeroShowcase>

      <Container>
        <dl className="grid grid-cols-3 border-t border-white/10 py-8 sm:divide-x sm:divide-white/10">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-1 sm:px-8 sm:first:pl-0">
              <dt>
                <span className="block text-sm font-semibold">{stat.label}</span>
                {stat.caption && <span className="mt-0.5 hidden text-xs text-white/50 sm:block">{stat.caption}</span>}
              </dt>
              <dd className="text-3xl font-medium tracking-tight sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
      <div className="h-24 sm:h-28" />
    </section>
  );
}
