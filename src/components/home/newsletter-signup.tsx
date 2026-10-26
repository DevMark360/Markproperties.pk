"use client";

import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function NewsletterSignup() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <section className="border-t border-ink-100 bg-white py-16 sm:py-20">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-brand-500 uppercase">Early access</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">New launches, before the portals</h2>
          <p className="mt-3 text-ink-500">
            Pre-launch prices and payment plans reach our subscribers first. One email when it matters, nothing else.
          </p>
        </div>

        {isSubscribed ? (
          <p role="status" className="flex items-center gap-3 rounded-xl bg-ink-50 px-6 py-5 font-medium text-ink-900">
            <CheckCircle2 className="size-5 text-emerald-600" />
            You&apos;re on the list. Watch your inbox for the next launch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full max-w-lg flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Your email address"
              className="h-13 flex-1 rounded-xl border border-ink-300 bg-white px-5 text-base text-ink-900 outline-none placeholder:text-ink-500 focus:border-ink-900"
            />
            <Button type="submit" size="lg" className="rounded-xl">
              Subscribe
            </Button>
          </form>
        )}
      </Container>
    </section>
  );
}
