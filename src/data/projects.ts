import { formatPriceLabel } from "@/lib/format";
import type { FaqItem, Project, ProjectDetails } from "@/types/content";

export const projects: Project[] = [
  {
    id: "falaknaz-skyview-towers",
    name: "Falaknaz Skyview Towers",
    developer: "Falaknaz Group",
    area: "Korangi Creek",
    city: "Karachi",
    address: "Main Korangi Road, opposite IoBM, Karachi",
    location: { lat: 24.81244, lng: 67.1168 },
    image: "/images/projects/falaknaz-skyview-towers.jpg",
    heroImage: "/images/hero/falaknaz-skyview-towers.jpg",
    status: "Under construction",
    unitTypes: "1, 2 & 3 bed apartments · Showrooms",
    propertyTypes: ["apartment", "shop", "showroom"],
    paymentPlan: "4-year installments",
    price: { amount: 780_000, basis: "booking" },
    href: "/projects/falaknaz-skyview-towers",
  },
  {
    id: "saima-mangrove-residences",
    name: "Saima Mangrove Residences",
    developer: "Saima Group",
    area: "Korangi Creek",
    city: "Karachi",
    address: "Korangi Creek Road, near IoBM, Karachi",
    location: { lat: 24.81954, lng: 67.10434 },
    image: "/images/projects/saima-mangrove-residences.jpg",
    heroImage: "/images/hero/saima-mangrove-residences.jpg",
    status: "Under construction",
    unitTypes: "3 – 6 room waterfront apartments",
    propertyTypes: ["apartment"],
    paymentPlan: "4-year installments",
    price: { amount: 14_900_000, basis: "total" },
    href: "/projects/saima-mangrove-residences",
  },
  {
    id: "victoria-icon",
    name: "Victoria Icon",
    developer: "Thara Group",
    area: "Faisal Cantonment",
    city: "Karachi",
    address: "Jinnah International Terminal Road, Karachi",
    location: { lat: 24.89738, lng: 67.16735 },
    image: "/images/projects/victoria-icon.png",
    status: "Under construction",
    unitTypes: "3, 4 & 5 bed apartments",
    propertyTypes: ["apartment"],
    paymentPlan: "48 monthly installments",
    price: { amount: 550_000, basis: "booking" },
    href: "/projects/victoria-icon",
  },
  {
    id: "bloom-gardens",
    name: "Bloom Gardens",
    developer: "Falaknaz Group",
    area: "M-9 Motorway",
    city: "Karachi",
    address: "Main M-9 Motorway, opposite Iqra University, Karachi",
    location: { lat: 25.018, lng: 67.148 },
    image: "/images/projects/bloom-gardens.jpg",
    heroImage: "/images/hero/bloom-gardens.jpg",
    status: "Pre-launch",
    unitTypes: "4 & 5 room apartments · Commercial",
    propertyTypes: ["apartment", "shop", "showroom"],
    paymentPlan: "Easy installments",
    href: "/projects/bloom-gardens",
  },
  {
    id: "saima-ace-residency",
    name: "Saima Ace Residency",
    developer: "Saima Group",
    area: "Scheme 33",
    city: "Karachi",
    address: "Phase 1, Gulzar-e-Hijri, Scheme 33, Karachi",
    location: { lat: 24.97742, lng: 67.14061 },
    image: "/images/projects/saima-ace-residency.jpg",
    status: "Under construction",
    unitTypes: "2 & 3 bed apartments · Showrooms",
    propertyTypes: ["apartment", "shop", "showroom"],
    paymentPlan: "3 – 4 year installments",
    href: "/projects/saima-ace-residency",
  },
  {
    id: "roomi-enclave",
    name: "Roomi Enclave",
    developer: "Roomi Builders & Developers",
    area: "Scheme 33",
    city: "Karachi",
    address: "Main Super Highway, near Jamali Bridge, Karachi",
    location: { lat: 24.9625, lng: 67.1235 },
    image: "/images/projects/roomi-enclave.jpg",
    status: "Pre-launch",
    unitTypes: "2 & 3 bed apartments · Showrooms",
    propertyTypes: ["apartment", "showroom"],
    paymentPlan: "5-year installments",
    href: "/projects/roomi-enclave",
  },
  {
    id: "roomi-sapphire",
    name: "Roomi Sapphire",
    developer: "Roomi Builders & Developers",
    area: "Scheme 33",
    city: "Karachi",
    address: "Sector 44, KDA Scheme 33, Karachi",
    location: { lat: 24.97079, lng: 67.13946 },
    image: "/images/projects/roomi-sapphire.jpg",
    status: "Pre-launch",
    unitTypes: "3, 4 & 5 room apartments",
    propertyTypes: ["apartment"],
    paymentPlan: "Easy installments",
    href: "/projects/roomi-sapphire",
  },
  {
    id: "roomi-icon",
    name: "Roomi Icon",
    developer: "Roomi Builders & Developers",
    area: "Jinnah Avenue",
    city: "Karachi",
    address: "Main Jinnah Avenue, near Malir Cantt, Karachi",
    location: { lat: 24.89815, lng: 67.17992 },
    image: "/images/gallery/roomi-icon-2.jpg",
    status: "Under construction",
    unitTypes: "4 & 5 room apartments · Duplexes",
    propertyTypes: ["apartment", "duplex"],
    paymentPlan: "Easy installments",
    href: "/projects/roomi-icon",
  },
  {
    id: "meydan-homes",
    name: "Meydan Homes",
    developer: "Patel Group Holdings",
    area: "Baldia Town",
    city: "Karachi",
    address: "Near Baldia Town & Naval Colony, Karachi",
    location: { lat: 24.91877, lng: 66.96139 },
    image: "/images/projects/meydan-homes.jpg",
    status: "Under construction",
    unitTypes: "80 & 120 sq. yd plots · Homes",
    propertyTypes: ["plot", "villa"],
    paymentPlan: "Easy installments",
    href: "/projects/meydan-homes",
  },
  {
    id: "dhedhi-business-avenue",
    name: "Dhedhi Business Avenue",
    area: "SITE Area",
    city: "Karachi",
    address: "Near Siemens Chowrangi, SITE Area, Karachi",
    location: { lat: 24.90309, lng: 67.00258 },
    image: "/images/projects/dhedhi-business-avenue.png",
    status: "Ready for possession",
    unitTypes: "Shops · Offices · Mini factories",
    propertyTypes: ["shop", "office", "mini-factory"],
    paymentPlan: "Cash, 2 or 5-year plans",
    href: "/projects/dhedhi-business-avenue",
  },
];

const projectDetails: Record<string, ProjectDetails> = {
  "falaknaz-skyview-towers": {
    overview: [
      "Falaknaz Skyview Towers is the flagship high-rise of Falaknaz Group, rising Ground + 26 storeys on Main Korangi Road, directly opposite IoBM (CBM University). The tower pairs luxury 1, 2 and 3 bedroom apartments with dedicated shops and showrooms on the ground and mezzanine levels.",
      "A 200-ft wide road frontage gives the project strong visibility and quick links to DHA, Korangi Industrial Area and Shahrah-e-Faisal, which supports both end-user living and rental demand.",
    ],
    highlights: [
      "Flagship mixed-use development by Falaknaz Group",
      "Opposite IoBM (CBM University) on Main Korangi Road",
      "200-ft wide main road frontage",
      "Ground + 26 storeys",
      "Shops and showrooms on ground and mezzanine levels",
      "4-year (48-month) installment plan with low booking",
    ],
    amenities: [
      "25+ lifestyle amenities",
      "Gymnasium & health club",
      "Swimming pool & leisure deck",
      "Kids' play area & daycare",
      "Passenger & cargo elevators",
      "24/7 power backup",
      "24/7 CCTV & gated security",
    ],
    gallery: ["/images/gallery/falaknaz-skyview-towers-2.jpg", "/images/gallery/falaknaz-skyview-towers-3.jpg"],
    mapQuery: "Institute of Business Management, Korangi Creek, Karachi",
  },
  "saima-mangrove-residences": {
    overview: [
      "Saima Mangrove Residences is a waterfront twin-tower development by Saima Group on Korangi Creek Road, near IoBM and the DHA Phase 8 connection. Each tower rises Ground + 31 storeys above four dedicated parking floors.",
      "Residences face the mangroves and coastal lagoon, offering 3 to 6 room layouts for families who want open views, resort-style amenities and a quieter address close to DHA.",
    ],
    highlights: [
      "Twin residential towers by Saima Group",
      "Korangi Creek Road, near IoBM and DHA Phase 8",
      "Ground + 31 storeys with 4 parking floors",
      "Panoramic views of the mangroves and lagoon",
      "6 passenger & cargo lifts per tower",
      "4-year (48-month) installment plan",
    ],
    amenities: [
      "Resort-style pool & deck",
      "Fitness gymnasium",
      "Park & children's play area",
      "Jamia Masjid & community hall",
      "RO water plant",
      "Standby generator & firefighting",
      "CCTV & gated security",
    ],
    gallery: ["/images/gallery/saima-mangrove-residences-2.jpg", "/images/gallery/saima-mangrove-residences-3.jpg"],
    mapQuery: "Korangi Creek Road, Karachi",
  },
  "victoria-icon": {
    overview: [
      "Victoria Icon by Thara Group is a super-luxury residential project on Jinnah International Terminal Road, moments from Shahrah-e-Faisal. The building rises Ground + 15 storeys with two dedicated parking floors.",
      "Large 3, 4 and 5 bedroom apartments sit above an elegant entrance lobby, with leisure facilities that include a pool, sauna and jacuzzi, and booking from PKR 5.5 Lac on a 48-month plan.",
    ],
    highlights: [
      "Super-luxury apartments by Thara Group",
      "Jinnah International Terminal Road, near Shahrah-e-Faisal",
      "Ground + 15 storeys with 2 parking floors",
      "Elegant entrance lobby & reception",
      "48 monthly installments, booking from PKR 5.5 Lac",
    ],
    amenities: [
      "Swimming pool",
      "Gym, sauna & jacuzzi",
      "Kids' play area & daycare",
      "Community hall & indoor games",
      "High-speed lifts",
      "24/7 standby generator",
      "CCTV & firefighting system",
    ],
    gallery: ["/images/gallery/victoria-icon-2.jpg", "/images/gallery/victoria-icon-3.jpg"],
    mapQuery: "Jinnah International Terminal Road, Karachi",
  },
  "bloom-gardens": {
    overview: [
      "Bloom Gardens is a contemporary residential and commercial project by Falaknaz Group, a developer established in 1975. It sits directly on Main M-9 Motorway, opposite Iqra University's Highway Campus.",
      "Ultra-luxury 4 and 5 room apartments are paired with prime commercial space suited to flagship showrooms and retail, in one of Karachi's fastest-growing corridors.",
    ],
    highlights: [
      "By Falaknaz Group, established 1975",
      "On Main M-9 Motorway, opposite Iqra University",
      "Ultra-luxury 4 & 5 room apartments",
      "Commercial space for showrooms & retail",
      "Pre-launch prices for early buyers",
    ],
    amenities: [
      "Modern gym & indoor games",
      "Private mini-theatre",
      "Kids' play area",
      "Solar system integration",
      "RO water plant",
      "Power backup",
      "24/7 CCTV & security",
    ],
    gallery: ["/images/gallery/bloom-gardens-2.jpg", "/images/gallery/bloom-gardens-3.jpg"],
    mapQuery: "Iqra University Highway Campus, M-9 Motorway, Karachi",
  },
  "saima-ace-residency": {
    overview: [
      "Saima Ace Residency is a residential and commercial high-rise by Saima Group in Phase 1, Gulzar-e-Hijri, Scheme 33, one of Karachi's most established family neighbourhoods.",
      "The project offers 2 and 3 bedroom apartments with ground-level showrooms, multi-level parking and a full set of community facilities, on a flexible 3 to 4-year plan.",
    ],
    highlights: [
      "High-rise by Saima Group",
      "Phase 1, Gulzar-e-Hijri, Scheme 33",
      "2 & 3 bedroom apartments",
      "Ground-level showrooms & retail",
      "Multi-level structured parking",
      "3 to 4-year installment plans",
    ],
    amenities: [
      "Gymnasium & health club",
      "Swimming pool",
      "Kids' play & gaming zones",
      "Jamia Masjid & community hall",
      "Passenger & cargo lifts",
      "24/7 standby generator",
      "CCTV & gated security",
    ],
    gallery: ["/images/gallery/saima-ace-residency-2.jpg", "/images/gallery/saima-ace-residency-3.jpg"],
    mapQuery: "Gulzar-e-Hijri, Scheme 33, Karachi",
  },
  "roomi-enclave": {
    overview: [
      "Roomi Enclave is a gated residential project on Main Super Highway (M-9) with quick access to Scheme 33 and University Road.",
      "Apartments come with double basement parking, backup power, an RO water plant and an on-site mosque, offered at pre-launch prices on a 5-year plan.",
    ],
    highlights: [
      "Gated community with 24/7 security",
      "Main Super Highway (M-9) location",
      "Quick access to Scheme 33 & University Road",
      "Double basement parking",
      "5-year installment plan",
    ],
    amenities: ["Standby generators", "RO water plant", "High-speed elevators", "Fitness gym", "Mosque", "CCTV surveillance"],
    gallery: ["/images/gallery/roomi-enclave-2.jpg", "/images/gallery/roomi-enclave-3.jpg"],
    mapQuery: "Jamali Bridge, Super Highway, Karachi",
  },
  "roomi-sapphire": {
    overview: [
      "Roomi Sapphire is a secure, boundary-walled residential project in Sector 44, KDA Scheme 33, designed around family living.",
      "Two basements plus dedicated parking floors, a modern lobby and a ground-floor recreation area make it a practical choice for end users entering at pre-launch prices.",
    ],
    highlights: [
      "Boundary-walled, gated community",
      "Sector 44, KDA Scheme 33",
      "2 basements + dedicated parking floors",
      "Modern lobby & reception",
      "Family-friendly recreation area",
    ],
    amenities: ["24/7 CCTV security", "High-speed lifts", "RO drinking water", "Gymnasium", "Mosque", "Kids' play area"],
    gallery: ["/images/gallery/roomi-sapphire-2.jpg", "/images/gallery/roomi-sapphire-3.jpg"],
    mapQuery: "Sector 44, Scheme 33, Karachi",
  },
  "roomi-icon": {
    overview: [
      "Roomi Icon is a high-rise on 200-ft Main Jinnah Avenue, close to Malir Cantt, in an area developing quickly around the Jinnah Avenue corridor.",
      "A limited inventory of duplexes and large apartments is supported by premium amenities including a pool, spa, business lounge and library.",
    ],
    highlights: [
      "200-ft Main Jinnah Avenue frontage",
      "Limited luxury inventory: duplexes & large apartments",
      "Fast-developing area near Malir Cantt",
      "Strong long-term appreciation potential",
    ],
    amenities: ["Swimming pool", "Gym, spa & yoga studio", "Business lounge", "Library & cafeteria", "Children's play area"],
    gallery: ["/images/gallery/roomi-icon-3.jpg", "/images/gallery/roomi-icon-4.jpg"],
    mapQuery: "Jinnah Avenue, Malir Cantonment, Karachi",
  },
  "meydan-homes": {
    overview: [
      "Meydan Homes by Patel Group Holdings is a gated community near Baldia Town and Naval Colony offering 80 and 120 sq. yd plots and homes.",
      "Wide roads, parks, walking tracks and a central mosque make it a complete neighbourhood, with all utilities planned in from the start.",
    ],
    highlights: [
      "Gated community by Patel Group Holdings",
      "80 & 120 sq. yd plots and homes",
      "Wide roads and landscaped parks",
      "Electricity, gas and water planned in",
    ],
    amenities: ["Parks & green areas", "Children's play areas", "Walking tracks", "Central mosque", "CCTV & community security"],
    gallery: ["/images/gallery/meydan-homes-2.jpg", "/images/gallery/meydan-homes-3.jpg"],
    mapQuery: "Baldia Town, Karachi",
  },
  "dhedhi-business-avenue": {
    overview: [
      "Dhedhi Business Avenue is a fully operational commercial project spread across 2.5 acres in SITE Area, near Siemens Chowrangi.",
      "Shops, warehouses, offices and mini factories are ready now, with rental income from the following month and flexible cash, 2-year and 5-year payment options.",
    ],
    highlights: [
      "Ready, fully operational commercial project",
      "Rental income from next month",
      "Approx. 6–8% expected annual rental yield",
      "Shops, warehouses, offices & mini factories",
      "2.5-acre site near Siemens Chowrangi",
    ],
    amenities: ["Basement car parking", "Cash, 2-year & 5-year plans"],
    gallery: ["/images/gallery/dhedhi-business-avenue-2.jpg", "/images/gallery/dhedhi-business-avenue-3.jpg"],
    mapQuery: "Siemens Chowrangi, SITE Area, Karachi",
  },
};

const projectsById = new Map(projects.map((project) => [project.id, project]));

export const pickProjects = (ids: string[]): Project[] => ids.flatMap((id) => projectsById.get(id) ?? []);

export const getProject = (id: string): Project | undefined => projectsById.get(id);

export const getProjectDetails = (id: string): ProjectDetails | undefined => projectDetails[id];

export function getRelatedProjects(project: Project, limit = 6): Project[] {
  const relevance = (candidate: Project) =>
    (candidate.city === project.city ? 4 : 0) +
    (candidate.area === project.area ? 2 : 0) +
    (candidate.developer && candidate.developer === project.developer ? 1 : 0);

  return projects
    .filter((candidate) => candidate.id !== project.id)
    .map((candidate) => ({ candidate, score: relevance(candidate) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

export function getProjectFaqs(project: Project): FaqItem[] {
  const price = formatPriceLabel(project.price);
  const faqs: FaqItem[] = [
    {
      question: `Where is ${project.name} located?`,
      answer: `${project.name} is located at ${project.address}. Your advisor can arrange a free guided site visit.`,
    },
    {
      question: `What is the price of ${project.name}?`,
      answer: project.price
        ? `${price.label} ${price.value}. Prices change between phases, so request the latest price list for currently available units.`
        : "Pricing is shared on request because it changes between phases. Request the latest price list and an advisor will send it to you.",
    },
    {
      question: `What is the payment plan for ${project.name}?`,
      answer: `${project.name} is offered on ${project.paymentPlan.toLowerCase()}. Request the payment plan to receive the full schedule in writing.`,
    },
    {
      question: `What property types are available in ${project.name}?`,
      answer: `${project.name} offers ${project.unitTypes.replaceAll(" · ", ", ").toLowerCase()}.`,
    },
  ];

  if (project.developer) {
    faqs.push({
      question: `Who is the developer of ${project.name}?`,
      answer: `${project.name} is developed by ${project.developer}. Mark Properties works directly with the developer to give you verified information and launch prices.`,
    });
  }

  return faqs;
}
