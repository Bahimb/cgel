// Centralized CGEL association data — edit here without touching UI components
export const eventData = {
  name: "CGEL",
  edition: "Association professionnelle",
  fullName: "Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est",
  theme: "Hépato-gastroentérologie et endoscopie en pratique libérale",
  themeLine1: "Hépato-gastroentérologie et endoscopie",
  themeLine2: "en pratique libérale",
  tagline: "Au service de la gastroentérologie libérale",
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
  organizer: "CGEL",
  scientificPartner: "MISC Laboratory",
  contact: {
    phone: "0540 69 95 13",
    phoneHref: "tel:+213540699513",
    email: "college.hgel@gmail.com",
    website: "cgel-gastro.com",
    websiteHref: "https://cgel-gastro.com",
  },
  colors: {
    primaryBlue: "#023DA5",
    cyan: "#36C0E7",
    orange: "#F08444",
    lightBg: "#F7FAFC",
    darkNavy: "#0B1D3A",
  },
  seo: {
    title: "CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est",
    description:
      "CGEL : l'association des hépato-gastroentérologues et endoscopistes libéraux de l'Est. Événements, projets et actualités de la gastroentérologie libérale.",
    canonical: "https://cgel-gastro.com",
  },
  navLinks: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Événements", href: "/evenements" },
    { label: "Projets", href: "/projets" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    kicker: "CGEL",
    titleLine1: "Collège des Hépato-Gastroentérologues",
    titleLine2: "et Endoscopistes Libéraux de l'Est",
    tagline: "Au service de la gastroentérologie libérale",
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