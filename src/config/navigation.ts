import type { NavLink } from "@/types/content";

export interface MenuSection {
  title: string;
  links: NavLink[];
}

export interface MenuPromo {
  eyebrow: string;
  title: string;
  cta: NavLink;
}

export interface MegaMenu {
  sections: MenuSection[];
  viewAll?: NavLink;
  promo?: MenuPromo;
}

export type NavItem = { label: string; href: string; menu?: never } | { label: string; menu: MegaMenu; href?: never };

export const primaryNav: NavItem[] = [
  { label: "New Projects", href: "/projects" },
  {
    label: "Buy",
    menu: {
      sections: [
        {
          title: "Buy",
          links: [
            { label: "Apartments", href: "/projects?type=apartment" },
            { label: "Villas & houses", href: "/projects?type=villa" },
            { label: "Plots", href: "/projects?type=plot" },
            { label: "Shops", href: "/projects?type=shop" },
            { label: "Showrooms", href: "/projects?type=showroom" },
            { label: "Offices", href: "/projects?type=office" },
            { label: "Commercial plots", href: "/projects?type=commercial-plot" },
            { label: "Factories & warehouses", href: "/projects?type=mini-factory" },
            { label: "Ready for possession", href: "/projects?status=ready" },
          ],
        },
      ],
      promo: {
        eyebrow: "Most searched",
        title: "Pre-launch projects at launch prices",
        cta: { label: "Browse pre-launch projects", href: "/projects?status=pre-launch" },
      },
    },
  },
  {
    label: "Luxe",
    menu: {
      sections: [
        {
          title: "Luxe",
          links: [
            { label: "Luxury apartments", href: "/projects?collection=luxury" },
            { label: "Waterfront residences", href: "/projects?collection=waterfront" },
            { label: "Duplexes & penthouses", href: "/projects?type=duplex" },
            { label: "High-rise landmark towers", href: "/projects?collection=high-rise" },
          ],
        },
      ],
      promo: {
        eyebrow: "Luxury real estate",
        title: "Pakistan's prime addresses, from waterfront towers to city-centre icons",
        cta: { label: "Explore luxury projects", href: "/projects?collection=luxury" },
      },
    },
  },
  {
    label: "Services",
    menu: {
      sections: [
        {
          title: "Services",
          links: [
            { label: "Investment advisory", href: "/services/investment-advisory" },
            { label: "Guided site visits", href: "/services/site-visits" },
            { label: "Booking & documentation", href: "/services/booking-assistance" },
            { label: "Overseas Pakistani buyers", href: "/services/overseas-buyers" },
            { label: "Possession & handover support", href: "/services/handover-support" },
            { label: "Project marketing for builders", href: "/builders" },
          ],
        },
      ],
      viewAll: { label: "View all", href: "/services" },
      promo: {
        eyebrow: "Builders",
        title: "We bring qualified buyers to your project",
        cta: { label: "Partner with us", href: "/builders" },
      },
    },
  },
  {
    label: "Trends",
    menu: {
      sections: [
        {
          title: "Trends",
          links: [
            { label: "Investment map", href: "/trends/investment-map" },
            { label: "Top investment areas", href: "/trends/top-areas" },
            { label: "Projects map", href: "/trends/projects-map" },
            { label: "Area price guide", href: "/trends/area-prices" },
            { label: "Booking & installment trends", href: "/trends/payment-trends" },
            { label: "Upcoming handovers", href: "/trends/handovers" },
            { label: "Builder delivery records", href: "/trends/builder-records" },
            { label: "Monthly market updates", href: "/trends/monthly" },
            { label: "Quarterly market updates", href: "/trends/quarterly" },
          ],
        },
      ],
      promo: {
        eyebrow: "Market data",
        title: "What Pakistan's off-plan market is doing now",
        cta: { label: "Monthly market update", href: "/trends/monthly" },
      },
    },
  },
  {
    label: "More",
    menu: {
      sections: [
        {
          title: "New homes",
          links: [
            { label: "New projects in Pakistan", href: "/projects" },
            { label: "Pre-launch projects", href: "/projects?status=pre-launch" },
            { label: "Under construction projects", href: "/projects?status=under-construction" },
            { label: "Off-plan projects location map", href: "/trends/projects-map" },
            { label: "Projects on installments", href: "/projects?plan=installments" },
          ],
        },
        {
          title: "Explore",
          links: [
            { label: "Areas", href: "/areas" },
            { label: "Developers", href: "/developers" },
          ],
        },
        {
          title: "About and resources",
          links: [
            { label: "About us", href: "/about" },
            { label: "Contact us", href: "/contact" },
            { label: "Blog", href: "/blog" },
            { label: "Guides", href: "/guides" },
            { label: "FAQs", href: "/faqs" },
            { label: "Why invest off-plan?", href: "/why-invest-off-plan" },
            { label: "Our partners", href: "/developers" },
          ],
        },
        {
          title: "Quick links",
          links: [
            { label: "Book a site visit", href: "/contact?topic=site-visit" },
            { label: "Talk to an advisor", href: "/contact" },
          ],
        },
      ],
    },
  },
];
