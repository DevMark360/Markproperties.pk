import { Star } from "lucide-react";
import type { TrustRating } from "@/types/content";

const LEAF_COUNT = 7;

function LaurelBranch({ flipped = false }: { flipped?: boolean }) {
  const leaves = Array.from({ length: LEAF_COUNT }, (_, index) => {
    const angle = 105 + (index / (LEAF_COUNT - 1)) * 150;
    const radians = (angle * Math.PI) / 180;
    return { x: 24 + Math.cos(radians) * 17, y: 25 + Math.sin(radians) * 19, rotation: angle - 40 };
  });

  return (
    <svg viewBox="0 0 30 48" className="h-12 w-7 text-ink-700" style={flipped ? { transform: "scaleX(-1)" } : undefined} aria-hidden>
      {leaves.map((leaf) => (
        <ellipse
          key={leaf.rotation}
          cx={leaf.x}
          cy={leaf.y}
          rx="2.2"
          ry="4.6"
          fill="currentColor"
          transform={`rotate(${leaf.rotation} ${leaf.x} ${leaf.y})`}
        />
      ))}
    </svg>
  );
}

function GoogleWordmark() {
  const letters = [
    ["G", "#4285F4"],
    ["o", "#EA4335"],
    ["o", "#FBBC05"],
    ["g", "#4285F4"],
    ["l", "#34A853"],
    ["e", "#EA4335"],
  ] as const;

  return (
    <span className="text-2xl font-semibold tracking-tight" aria-label="Google">
      {letters.map(([letter, color], index) => (
        <span key={index} style={{ color }} aria-hidden>
          {letter}
        </span>
      ))}
    </span>
  );
}

export function TrustBar({ rating }: { rating: TrustRating }) {
  return (
    <div className="relative z-10 -mt-16 px-4">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl bg-white px-6 py-6 shadow-2xl shadow-black/10 ring-1 ring-ink-100 sm:flex-row sm:gap-8 sm:px-10">
        <div className="flex shrink-0 items-center" aria-label={`Rated ${rating.score} out of 5`}>
          <LaurelBranch />
          <div className="flex flex-col items-center px-1">
            <span className="text-3xl font-bold tracking-tight text-ink-900">{rating.score}</span>
            <span className="flex gap-px">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} className="size-2.5 fill-amber-400 text-amber-400" />
              ))}
            </span>
          </div>
          <LaurelBranch flipped />
        </div>

        <p className="flex-1 text-center text-lg text-ink-900 sm:text-left">
          Every off-plan <span className="text-brand-500">decision</span>. One{" "}
          <span className="text-brand-500">trusted</span> partner.
        </p>

        <a
          href={rating.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 flex-col items-center border-ink-100 sm:border-l sm:pl-8"
        >
          <GoogleWordmark />
          <span className="text-xl font-bold tracking-wide text-ink-900">{rating.reviewCount}</span>
          <span className="text-sm text-ink-500 underline underline-offset-2">Reviews</span>
        </a>
      </div>
    </div>
  );
}
