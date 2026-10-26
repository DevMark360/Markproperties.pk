import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref("Hi Mark Properties, I'm interested in an off-plan project.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with an advisor on WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex items-center gap-2"
    >
      <span className="hidden rounded-full bg-ink-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/20 sm:block">
        Not sure? <span aria-hidden>👋</span> I can help
      </span>
      <span className="grid size-13 place-items-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition-transform group-hover:scale-105">
        <MessageCircle className="size-6" />
      </span>
    </a>
  );
}
