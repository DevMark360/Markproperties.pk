import Image from "next/image";
import Link from "next/link";
import type { Developer } from "@/types/content";

export function DevelopersGrid({ developers }: { developers: Developer[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {developers.map((developer) => (
        <li key={developer.name}>
          <Link
            href={developer.href}
            className="relative block aspect-[3/2] overflow-hidden rounded-xl border border-ink-100 bg-white transition-shadow hover:shadow-lg hover:shadow-black/5"
          >
            <Image
              src={developer.logo}
              alt={developer.name}
              fill
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
              className="object-contain p-2"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
