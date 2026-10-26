"use client";

import { useEffect } from "react";
import { ButtonLink, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function ProjectsError({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <h1 className="text-2xl font-bold text-ink-900">Projects could not be loaded</h1>
      <p className="mt-2 max-w-md text-ink-500">This is on our side. Try again, or go back to the home page.</p>
      <div className="mt-6 flex gap-3">
        <button type="button" onClick={retry} className={buttonVariants({ className: "rounded-xl" })}>
          Try again
        </button>
        <ButtonLink href="/" variant="outline" className="rounded-xl">
          Go to home page
        </ButtonLink>
      </div>
    </Container>
  );
}
