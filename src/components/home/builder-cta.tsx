import { whatsappHref } from "@/config/site";
import { ButtonLink, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function BuilderCta() {
  return (
    <section className="bg-ink-950 py-16 text-white sm:py-20">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Building a new project in Pakistan?</h2>
          <p className="mt-3 leading-relaxed text-white/65">
            List it where off-plan buyers already search. We present your payment plans, handover timeline and
            availability to qualified buyers, and handle the site visits.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/builders" size="lg" className="rounded-xl">
            Partner with us
          </ButtonLink>
          <a
            href={whatsappHref("Hi Mark Properties, I'd like a free consultation on off-plan projects.")}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline-light", size: "lg", className: "rounded-xl" })}
          >
            Get a free consultation
          </a>
        </div>
      </Container>
    </section>
  );
}
