import { Phone } from "lucide-react";
import { telHref } from "@/config/site";
import { LeadTrigger } from "@/components/leads/lead-dialog";
import { buttonVariants } from "@/components/ui/button";

export function MobileEnquiryBar() {
  return (
    <div className="sticky bottom-0 z-30 border-t border-ink-100 bg-white/95 py-3 pr-24 pl-4 backdrop-blur lg:hidden">
      <div className="flex gap-2">
        <a href={telHref} aria-label="Call Mark Properties" className={buttonVariants({ variant: "outline", className: "size-11 shrink-0 px-0" })}>
          <Phone className="size-4" />
        </a>
        <LeadTrigger intent="general" className={buttonVariants({ className: "flex-1" })}>
          Enquire now
        </LeadTrigger>
      </div>
    </div>
  );
}
