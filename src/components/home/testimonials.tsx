import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/content";

const MAX_RATING = 5;

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {testimonials.map((testimonial) => (
        <li key={testimonial.id} className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-0.5" role="img" aria-label={`Rated ${testimonial.rating} out of ${MAX_RATING}`}>
              {Array.from({ length: MAX_RATING }, (_, index) => (
                <Star
                  key={index}
                  className={cn("size-4", index < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-ink-300")}
                />
              ))}
            </div>
            <Quote className="size-6 text-brand-100" />
          </div>
          <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink-700">“{testimonial.quote}”</blockquote>
          <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
            <span className="grid size-10 place-items-center rounded-full bg-ink-900 text-sm font-semibold text-white">
              {testimonial.name.charAt(0)}
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-900">{testimonial.name}</p>
              <p className="text-xs text-ink-500">{testimonial.role}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
