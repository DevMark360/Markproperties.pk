import { LeadTrigger } from "@/components/leads/lead-dialog";
import { ButtonLink, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface EnquiryBandProps {
  title: string;
  description: string;
  secondaryAction: { label: string; href: string };
}

export function EnquiryBand({ title, description, secondaryAction }: EnquiryBandProps) {
  return (
    <section className="bg-ink-950 py-14 text-white sm:py-16">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-balance">{title}</h2>
          <p className="mt-3 leading-relaxed text-white/65">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <LeadTrigger intent="general" className={buttonVariants({ size: "lg", className: "rounded-xl" })}>
            Talk to an advisor
          </LeadTrigger>
          <ButtonLink href={secondaryAction.href} variant="outline-light" size="lg" className="rounded-xl">
            {secondaryAction.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
