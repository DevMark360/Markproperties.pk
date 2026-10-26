import type { LinkGroup, SocialLink } from "@/types/content";

export const siteConfig = {
  name: "Mark Properties",
  slogan: "Abad Raho",
  description:
    "Pakistan's off-plan property specialists. Pre-launch and under-construction projects from trusted builders, with free advisor support from booking to possession.",
  url: "https://markproperties.pk",
  logo: "/brand/mark-properties-logo-v2.png",
  logoLight: "/brand/mark-properties-logo-light-v2.png",
  logoSize: { width: 2541, height: 2377 },
  contact: {
    phone: "021 3432 0869",
    mobile: "0310 3173660",
    whatsapp: "923103173660",
    email: "info@markproperties.pk",
    address: "Plot B-354, Ground Floor, Block 7-8, Kathiawar C.H.S, Karachi",
    mapHref: "https://maps.google.com/?q=Kathiawar+Cooperative+Housing+Society+Karachi",
  },
} as const;

export const footerNav: LinkGroup[] = [
  {
    title: "Mark Properties",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact us", href: "/contact" },
      { label: "Builders: partner with us", href: "/builders" },
      { label: "Property blog", href: "/blog" },
      { label: "FAQs", href: "/faqs" },
      { label: "Privacy policy", href: "/privacy" },
    ],
  },
  {
    title: "Off-plan projects",
    links: [
      { label: "New projects in Pakistan", href: "/projects" },
      { label: "Pre-launch projects", href: "/projects?status=pre-launch" },
      { label: "Under construction projects", href: "/projects?status=under-construction" },
      { label: "Ready for possession", href: "/projects?status=ready" },
      { label: "Projects on installments", href: "/projects?plan=installments" },
    ],
  },
  {
    title: "Property types",
    links: [
      { label: "Apartments", href: "/projects?type=apartment" },
      { label: "Shops & showrooms", href: "/projects?type=shop" },
      { label: "Offices", href: "/projects?type=office" },
      { label: "Plots", href: "/projects?type=plot" },
      { label: "Villas & houses", href: "/projects?type=villa" },
    ],
  },
  {
    title: "Popular areas",
    links: [
      { label: "Projects in Scheme 33", href: "/areas/scheme-33" },
      { label: "Projects in Korangi Creek", href: "/areas/korangi-creek" },
      { label: "Projects on Jinnah Avenue", href: "/areas/jinnah-avenue" },
      { label: "Projects on M-9 Motorway", href: "/areas/m-9-motorway" },
      { label: "Projects in North Karachi", href: "/areas/north-karachi" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", platform: "facebook", href: "https://www.facebook.com/markpropertiespk/" },
  { label: "Instagram", platform: "instagram", href: "https://www.instagram.com/markproperties.pk/" },
  { label: "YouTube", platform: "youtube", href: "https://youtube.com/channel/UCIURvxsMpDyf3X9W0BHauFg" },
  { label: "LinkedIn", platform: "linkedin", href: "https://pk.linkedin.com/company/markpropertiespk" },
];

const toTelHref = (localNumber: string) => `tel:+92${localNumber.replace(/\s/g, "").slice(1)}`;

export const telHref = toTelHref(siteConfig.contact.phone);
export const mobileTelHref = toTelHref(siteConfig.contact.mobile);

export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
