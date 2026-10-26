import type { LucideIcon } from "lucide-react";

export type ProjectStatus = "Pre-launch" | "Under construction" | "Ready for possession";

export type PropertyType =
  | "apartment"
  | "duplex"
  | "villa"
  | "plot"
  | "shop"
  | "showroom"
  | "office"
  | "commercial-plot"
  | "mini-factory";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink extends NavLink {
  platform: "facebook" | "instagram" | "youtube" | "linkedin";
}

export interface TrustRating {
  score: number;
  reviewCount: string;
  source: string;
  href: string;
}

export interface LinkGroup {
  title: string;
  links: NavLink[];
}

export interface Stat {
  value: string;
  label: string;
  caption?: string;
}

export interface ProjectPrice {
  amount: number;
  basis: "booking" | "total";
}

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface Project {
  id: string;
  name: string;
  developer?: string;
  area: string;
  city: string;
  address: string;
  location: GeoPoint;
  image: string;
  heroImage?: string;
  status: ProjectStatus;
  unitTypes: string;
  propertyTypes: PropertyType[];
  paymentPlan: string;
  price?: ProjectPrice;
  handover?: string;
  href: string;
}

export interface ProjectDetails {
  overview: string[];
  highlights: string[];
  amenities: string[];
  gallery?: string[];
  mapQuery: string;
}

export type LeadIntent = "brochure" | "general";

export interface Developer {
  name: string;
  logo: string;
  href: string;
}

export interface MarketInsight {
  title: string;
  description: string;
  href: string;
}

export interface Area {
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  image: string;
  href: string;
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
