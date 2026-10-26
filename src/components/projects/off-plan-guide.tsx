import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";

const sections = [
  {
    title: "What is an off-plan property?",
    body: [
      "An off-plan property is bought from the builder before construction is finished, often before it starts. You book with a down payment and pay the rest in installments while the building goes up, so you lock in today's price on a home that is still being built.",
    ],
  },
  {
    title: "Why buy off-plan in Pakistan?",
    body: [
      "Launch prices are usually the lowest a project is offered at, and builders typically spread the cost over three to five years without bank financing. Early buyers also get the first choice of floors, views and layouts.",
      "The trade-off is time and trust: you are paying for something that does not exist yet. That is why the builder's track record and the project's approvals matter more than the brochure.",
    ],
  },
  {
    title: "How Mark Properties helps",
    body: [
      "We work directly with established builders, so you get launch prices and the payment plan in writing. Our advisors arrange free site visits and stay with you from booking to possession.",
    ],
  },
];

const checklist = [
  "Check the builder's delivered projects, not just the renders.",
  "Ask for the approved layout plan and NOC in writing.",
  "Get the full payment schedule, including possession charges.",
  "Visit the site before you pay the booking amount.",
];

export function OffPlanGuide() {
  return (
    <section className="bg-ink-50 py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-20">
        <article>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-ink-900 sm:text-4xl">Off-plan projects in Pakistan</h2>
          {sections.map((section) => (
            <div key={section.title} className="mt-10">
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink-900">{section.title}</h3>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 max-w-[38rem] text-[17px] leading-[1.7] text-ink-700">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </article>
        <aside className="self-start rounded-2xl bg-white p-6 lg:sticky lg:top-28">
          <h3 className="text-lg font-semibold text-ink-900">Before you book</h3>
          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-700">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                  <Check className="size-3" strokeWidth={3} aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link href="/faqs" className="mt-6 inline-block text-sm font-semibold text-brand-600 underline-offset-4 hover:underline">
            Read the buyer FAQs
          </Link>
        </aside>
      </Container>
    </section>
  );
}
