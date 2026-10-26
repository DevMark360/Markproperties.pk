import { whatsappHref } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { FaqList } from "@/components/ui/faq-list";
import type { FaqItem } from "@/types/content";

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-brand-500 uppercase">Questions</p>
      <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Buying off-plan in Pakistan</h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_17rem] lg:gap-20">
        <FaqList items={items} name="faq" />

        <aside className="self-start lg:sticky lg:top-28">
          <p className="text-sm leading-relaxed text-ink-700">
            Still deciding? An advisor who knows the project you are looking at will answer in plain terms, with the
            payment plan in writing.
          </p>
          <a
            href={whatsappHref("Hi Mark Properties, I have a question about an off-plan project.")}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "sm", className: "mt-5 rounded-lg" })}
          >
            Ask an advisor
          </a>
        </aside>
      </div>
    </div>
  );
}
