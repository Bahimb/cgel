// Centralized GCEL event data — edit here without touching UI components
export const eventData = {
  name: "GCEL",
  edition: "3rd Edition Scientific Days",
  fullName: "GCEL — 3rd Edition Scientific Days",
  theme: "Gastroenterology in the Era of Artificial Intelligence & Smart Health",
  themeLine1: "Gastroenterology in the Era of",
  themeLine2: "Artificial Intelligence & Smart Health",
  tagline: "From Medical Innovation to Intelligent Care",
  date: {
    iso: "2026-10-01T09:00:00+01:00",
    display: "Thursday, October 1, 2026",
    day: "Thursday",
    month: "October",
    year: "2026",
    
  },
  venue: {
    name: "Ahmed Bey Zenith",
    city: "Constantine",
    country: "Algeria",
    full: "Ahmed Bey Zenith, Constantine, Algeria",
    address: "Ahmed Bey Zenith, Constantine, Algeria",
    description:
      "Ahmed Bey Zenith is one of Algeria's premier conference venues, located in the historic city of Constantine. The venue offers modern facilities for international scientific gatherings in a prestigious setting.",
  },
  organizer: "GCEL",
  scientificPartner: "MISC Laboratory",
  contact: {
    phone: "0540 69 95 13",
    phoneHref: "tel:+213540699513",
    email: "college.hgel@gmail.com",
    website: "reallygreatsite.com",
    websiteHref: "https://reallygreatsite.com",
  },
  colors: {
    primaryBlue: "#023DA5",
    cyan: "#36C0E7",
    orange: "#F08444",
    lightBg: "#F7FAFC",
    darkNavy: "#0B1D3A",
  },
  seo: {
    title: "GCEL — 3rd Edition Scientific Days | Gastroenterology, AI & Smart Health",
    description:
      "GCEL 3rd Edition Scientific Days — Gastroenterology in the Era of Artificial Intelligence & Smart Health. Join us October 1, 2026 at Ahmed Bey Zenith, Constantine, Algeria.",
    canonical: "https://reallygreatsite.com",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experts", href: "/experts" },
    { label: "Program", href: "/program" },
    { label: "Partners", href: "/partners" },
    { label: "Venue", href: "/venue" },
    { label: "FAQ", href: "/faq" },
  ],
  hero: {
    kicker: "GCEL · 3rd Edition Scientific Days",
    titleLine1: "Gastroenterology in the Era of",
    titleLine2: "Artificial Intelligence & Smart Health",
    tagline: "From Medical Innovation to Intelligent Care",
  },
} as const;

export type RegistrationType =
  | "Doctor"
  | "Pharmacist"
  | "Nurse / Healthcare Professional"
  | "Researcher"
  | "Student"
  | "Other";

export const registrationTypes: RegistrationType[] = [
  "Doctor",
  "Pharmacist",
  "Nurse / Healthcare Professional",
  "Researcher",
  "Student",
  "Other",
];
