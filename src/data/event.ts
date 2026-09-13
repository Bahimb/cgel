// Centralized CGEL collège data — edit here without touching UI components
// PLACEHOLDER_UNIVERSITE = "Université [NOM À CONFIRMER]" — à remplacer dès confirmation client
export const PLACEHOLDER_UNIVERSITE = "Université [NOM À CONFIRMER]" as const;

export const eventData = {
  name: "CGEL",
  edition: "Collège professionnel",
  fullName: "Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est",
  theme: "Hépato-gastroentérologie et endoscopie en pratique libérale",
  themeLine1: "Hépato-gastroentérologie et endoscopie",
  themeLine2: "en pratique libérale",
  tagline: "Au service de la gastroentérologie libérale",
  date: {
    iso: "2026-10-01T09:00:00+01:00",
    display: "Jeudi 1 octobre 2026",
    day: "Jeudi",
    month: "octobre",
    year: "2026",
    
  },
  venue: {
    name: "Ahmed Bey Zenith",
    city: "Constantine",
    country: "Algérie",
    full: "Ahmed Bey Zenith, Constantine, Algérie",
    address: "Ahmed Bey Zenith, Constantine, Algérie",
    description:
      "Le Ahmed Bey Zenith est l'une des principales salles de congrès d'Algérie, située dans la ville historique de Constantine. Le lieu offre des installations modernes pour des rencontres scientifiques internationales dans un cadre prestigieux.",
  },
  organizer: "CGEL",
  // PLACEHOLDER_UNIVERSITE — nom exact à confirmer avec le client (ne pas afficher tel quel en prod)
  // Ancienne valeur visible remplacée par texte neutre en attendant
  scientificPartner: "Partenariat universitaire",
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
      "CGEL : le collège des hépato-gastroentérologues et endoscopistes libéraux de l'Est. Événements, projets et actualités de la gastroentérologie libérale.",
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
  | "Médecin"
  | "Pharmacien"
  | "Infirmier / Professionnel de santé"
  | "Chercheur"
  | "Étudiant"
  | "Autre";

export const registrationTypes: RegistrationType[] = [
  "Médecin",
  "Pharmacien",
  "Infirmier / Professionnel de santé",
  "Chercheur",
  "Étudiant",
  "Autre",
];