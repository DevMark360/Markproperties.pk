import { ArticleCard } from "@/components/cards/article-card";
import { ProjectLaunchCard } from "@/components/cards/project-card";
import { AreasGrid } from "@/components/home/areas-grid";
import { BuilderCta } from "@/components/home/builder-cta";
import { DevelopersGrid } from "@/components/home/developers-section";
import { FaqSection } from "@/components/home/faq-section";
import { GuidesGrid } from "@/components/home/guides-grid";
import { HeroSection } from "@/components/home/hero-section";
import { MarketInsights } from "@/components/home/market-insights";
import { NewsletterSignup } from "@/components/home/newsletter-signup";
import { Testimonials } from "@/components/home/testimonials";
import { TrendingProjects } from "@/components/home/trending-projects";
import { TrustBar } from "@/components/home/trust-bar";
import { Carousel } from "@/components/ui/carousel";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  areas,
  articles,
  buyingSteps,
  faqs,
  latestLaunches,
  marketInsights,
  projectStatuses,
  testimonials,
  trustRating,
} from "@/data/home";
import { developers } from "@/data/developers";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar rating={trustRating} />

      <Section className="pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Developers"
          title="Trusted partner of Pakistan's leading builders"
          description="We work directly with established developers, so launch prices and payment plans reach you first."
          action={{ label: "All developers", href: "/developers" }}
        />
        <DevelopersGrid developers={developers} />
      </Section>

      <Section tone="dark">
        <SectionHeading
          tone="dark"
          title="Most trending projects in Pakistan"
          action={{ label: "View all projects", href: "/projects" }}
          className="mb-8"
        />
        <TrendingProjects projects={projects} statuses={projectStatuses} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Off-plan"
          title="The latest launches in Pakistan"
          description="Newly released projects from the builders shaping Pakistan's cities, at launch prices for early buyers."
          action={{ label: "All new projects", href: "/projects?sort=latest" }}
        />
        <Carousel label="Latest launches" itemClassName="w-[80%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]">
          {latestLaunches.map((project) => (
            <ProjectLaunchCard key={project.id} project={project} />
          ))}
        </Carousel>
      </Section>

      <Section className="pt-0 sm:pt-0">
        <SectionHeading
          eyebrow="Market data"
          title="The numbers behind every payment plan"
          description="What off-plan projects ask for at booking, how long they give you to pay, and when they hand over."
          action={{ label: "All market data", href: "/insights" }}
        />
        <MarketInsights insights={marketInsights} />
      </Section>

      <BuilderCta />

      <Section tone="muted">
        <SectionHeading
          eyebrow="Blog"
          title="What is moving the property market"
          action={{ label: "All articles", href: "/blog" }}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <li key={article.id}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="Locations"
          title="Where Pakistan is building next"
          description="The growth corridors where new off-plan projects are launching, from Karachi's Super Highway to Jinnah Avenue."
          action={{ label: "All areas", href: "/areas" }}
        />
        <AreasGrid areas={areas} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How it works"
          title="How buying off-plan works with us"
          description="Four steps, with free advisor support at every one, from your first search to booking."
          action={{ label: "Buyer's guide", href: "/guides/off-plan" }}
        />
        <GuidesGrid guides={buyingSteps} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          title="What our clients say"
          description="Families and investors across Pakistan and overseas who booked their next home with us."
          action={{ label: "Read all reviews", href: "/reviews" }}
        />
        <Testimonials testimonials={testimonials} />
      </Section>

      <Section>
        <FaqSection items={faqs} />
      </Section>

      <NewsletterSignup />
    </>
  );
}
