import type { Developer } from "@/types/content";

export const developers: Developer[] = [
  { name: "Falaknaz Group", logo: "/images/partners/falaknaz.jpg", href: "/developers/falaknaz-group" },
  { name: "Saima Group", logo: "/images/partners/saima.jpg", href: "/developers/saima-group" },
  { name: "Nadeem Brothers Group", logo: "/images/partners/nb.jpg", href: "/developers/nb-group" },
  { name: "Goldline Group", logo: "/images/partners/goldline.jpg", href: "/developers/goldline" },
  { name: "Firdous Builders & Developers", logo: "/images/partners/firdous.jpg", href: "/developers/firdous" },
  { name: "Dominion", logo: "/images/partners/dominion.jpg", href: "/developers/dominion" },
];

const developersByName = new Map(developers.map((developer) => [developer.name, developer]));

export const getDeveloper = (name: string): Developer | undefined => developersByName.get(name);
