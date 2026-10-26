import { CalendarCheck, Handshake, MessagesSquare, Search } from "lucide-react";
import { pickProjects } from "./projects";
import type {
  Area,
  Article,
  FaqItem,
  Guide,
  MarketInsight,
  ProjectStatus,
  Stat,
  Testimonial,
  TrustRating,
} from "@/types/content";

export const trustRating: TrustRating = {
  score: 4.9,
  reviewCount: "500+",
  source: "Google",
  href: "https://www.google.com/maps/search/Mark+Properties+Karachi",
};

export const quickSearches = ["Scheme 33", "Korangi Creek", "Jinnah Avenue", "M-9 Motorway", "Faisal Cantonment"];

export const heroStats: Stat[] = [
  { value: "15+", label: "Years", caption: "Advising property buyers across Pakistan" },
  { value: "50+", label: "Builder partners", caption: "Established Pakistani developers" },
  { value: "70+", label: "Projects", caption: "From pre-launch to possession" },
];

export const featuredLaunches = pickProjects([
  "saima-mangrove-residences",
  "falaknaz-skyview-towers",
  "bloom-gardens",
]);

export const latestLaunches = pickProjects([
  "falaknaz-skyview-towers",
  "bloom-gardens",
  "victoria-icon",
  "saima-mangrove-residences",
  "saima-ace-residency",
]);

export const projectStatuses: ProjectStatus[] = ["Pre-launch", "Under construction", "Ready for possession"];

export const marketInsights: MarketInsight[] = [
  {
    title: "Payment plan trends",
    description: "The median booking is 7% of the unit price, with the balance spread over about 36 months.",
    href: "/insights/payment-plans",
  },
  {
    title: "Off-plan market update",
    description: "Most projects on the market are pre-launch or under construction. What is launching, and where.",
    href: "/insights/market-update",
  },
  {
    title: "Area price guide",
    description: "Booking amounts and starting prices by area, from Scheme 33 to Korangi Creek.",
    href: "/insights/area-prices",
  },
  {
    title: "Handovers and possession",
    description: "Which projects are nearing possession, when, and by which builder.",
    href: "/insights/handovers",
  },
];

export const areas: Area[] = [
  {
    name: "Scheme 33",
    description: "Gulzar-e-Hijri and the Super Highway corridor, home to many new high-rise launches.",
    image: "/images/areas/scheme33.jpg",
    href: "/areas/scheme-33",
  },
  {
    name: "Jinnah Avenue",
    description: "A 200 ft avenue near Malir Cantt with large apartments and duplexes.",
    image: "/images/areas/jinnah_avenue.jpg",
    href: "/areas/jinnah-avenue",
  },
  {
    name: "North Karachi",
    description: "Established neighbourhoods with affordable new apartment projects.",
    image: "/images/areas/northkarachi.jpg",
    href: "/areas/north-karachi",
  },
  {
    name: "Gulshan-e-Maymaar",
    description: "Planned communities off the Super Highway with plots and family homes.",
    image: "/images/areas/maymaar.jpg",
    href: "/areas/gulshan-e-maymaar",
  },
];

export const articles: Article[] = [
  {
    id: "mistakes-to-avoid",
    title: "Some mistakes you need to avoid if you are investing in real estate",
    excerpt: "Investing in real estate can be tricky. If you are just getting started, here is what to watch out for.",
    category: "Buyer guides",
    author: "Mark Properties",
    publishedAt: "2021-07-06",
    image: "/images/blog/mistakes-to-avoid.png",
    href: "/blog/some-mistakes-you-need-to-avoid-if-you-are-investing-in-real-estate",
  },
  {
    id: "before-investing",
    title: "What to consider before investing in real estate",
    excerpt: "Some buyers are well suited to real estate, others are not. Study the market before you commit.",
    category: "Buyer guides",
    author: "Mark Properties",
    publishedAt: "2021-07-06",
    image: "/images/blog/before-investing.png",
    href: "/blog/what-to-consider-before-investing-in-real-estate",
  },
  {
    id: "why-real-estate",
    title: "Why real estate is the best investment",
    excerpt: "Why property in Pakistan continues to outperform other ways of growing your savings.",
    category: "Buyer guides",
    author: "Mark Properties",
    publishedAt: "2021-07-06",
    image: "/images/blog/why-real-estate.png",
    href: "/blog/why-real-estate-is-the-best-investment",
  },
];

export const buyingSteps: Guide[] = [
  {
    id: "search",
    title: "Search projects",
    description: "Filter off-plan projects by area, budget, unit type and handover date to build your shortlist.",
    icon: Search,
    href: "/projects",
  },
  {
    id: "visit",
    title: "Schedule a site visit",
    description: "Book a guided visit with our advisors once you have shortlisted projects worth seeing.",
    icon: CalendarCheck,
    href: "/contact",
  },
  {
    id: "advisor",
    title: "Talk to an advisor",
    description: "Get clear answers on payment plans, developer track records and area growth.",
    icon: MessagesSquare,
    href: "/contact",
  },
  {
    id: "invest",
    title: "Book with confidence",
    description: "Finalise your choice and book with transparent pricing and documented terms.",
    icon: Handshake,
    href: "/contact",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed R.",
    role: "Booked in Korangi Creek",
    quote: "They shortlisted three projects that fit my budget and arranged site visits the same week.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sana K.",
    role: "Overseas buyer, Dubai",
    quote: "I booked an off-plan apartment without flying back. Regular construction updates gave me peace of mind.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Usman T.",
    role: "Booked in Scheme 33",
    quote: "Honest advice on which builder delivers on time. That is why I will book through them again.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Hira M.",
    role: "First-time buyer",
    quote: "As a first-time buyer I was nervous. The team explained installments and paperwork in plain language.",
    rating: 5,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What is an off-plan property?",
    answer:
      "An off-plan property is sold before construction is finished, at pre-launch or while it is being built. You pay a down payment first and the rest in installments until possession, which usually costs less up front than buying a finished property.",
  },
  {
    question: "How do off-plan payment plans work?",
    answer:
      "Most projects ask for a down payment at booking, then spread the balance over monthly or quarterly installments until possession. Many plans also include larger balloon payments at milestones such as confirmation, structure completion or handover. Always confirm the current schedule in writing before you pay.",
  },
  {
    question: "What should I check before booking an off-plan project?",
    answer:
      "Ask for the Sindh Building Control Authority (SBCA) approval and NOC, confirm the developer's land title, visit projects they have already handed over, get every installment and late-payment charge in writing, read the booking form's cancellation and refund terms, and visit the site to compare progress with the promised timeline.",
  },
  {
    question: "What happens after I book?",
    answer:
      "You receive a booking or allotment document and follow the installment schedule until handover. Keep every receipt, track construction progress, and contact the developer or your Mark Properties advisor if milestones slip. At possession, check the unit against the agreed specifications before taking the keys.",
  },
  {
    question: "Is off-plan cheaper than ready property?",
    answer:
      "Usually, yes. Pre-launch prices are typically lower and often rise in later phases, and you pay over the construction period instead of the full price at transfer. The trade-off is waiting for handover, so the developer's track record matters.",
  },
  {
    question: "Do I pay Mark Properties for advice or site visits?",
    answer:
      "No. Our advisors help you shortlist projects, explain payment terms and arrange site visits free of charge.",
  },
  {
    question: "Which cities and areas do you cover?",
    answer:
      "Our head office is in Karachi and we work with 50+ builder partners on projects across Pakistan. Current launches include Scheme 33, Korangi Creek, Jinnah Avenue and the M-9 Motorway in Karachi. Ask an advisor about projects in your city.",
  },
];
