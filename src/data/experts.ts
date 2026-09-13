export type Expert = {
  slug: string;
  name: string;
  title: string;
  specialty: string;
  institution: string;
  location: string;
  topic: string;
  session?: string;
  bio: string;
  image: string; // placeholder / real photo url
  featured?: boolean;
};

export const experts: Expert[] = [
  {
    slug: "speaker-01",
    name: "Nom de l'intervenant",
    title: "Spécialiste en Gastroentérologie",
    specialty: "Gastroentérologie",
    institution: "Établissement à annoncer",
    location: "Algérie",
    topic: "Thème à annoncer",
    session: "Session à annoncer",
    bio: "Biographie à annoncer — profil détaillé à publier dès que le programme sera finalisé.",
    image: "",
    featured: true,
  },
  {
    slug: "speaker-02",
    name: "Nom de l'intervenant",
    title: "Spécialiste en Hépatologie",
    specialty: "Hépatologie",
    institution: "Établissement à annoncer",
    location: "Algérie",
    topic: "Thème à annoncer",
    session: "Session à annoncer",
    bio: "Biographie à annoncer — profil détaillé à publier dès que le programme sera finalisé.",
    image: "",
    featured: true,
  },
  {
    slug: "speaker-03",
    name: "Nom de l'intervenant",
    title: "Spécialiste en Endoscopie digestive",
    specialty: "Endoscopie digestive",
    institution: "Établissement à annoncer",
    location: "Algérie",
    topic: "Thème à annoncer",
    session: "Session à annoncer",
    bio: "Biographie à annoncer.",
    image: "",
    featured: true,
  },
  {
    slug: "speaker-04",
    name: "Nom de l'intervenant",
    title: "Intelligence artificielle en médecine",
    specialty: "IA & Santé numérique",
    institution: "Établissement à annoncer",
    location: "International",
    topic: "Thème à annoncer",
    session: "Session à annoncer",
    bio: "Biographie à annoncer.",
    image: "",
    featured: true,
  },
  {
    slug: "speaker-05",
    name: "Nom de l'intervenant",
    title: "Spécialiste en Gastroentérologie",
    specialty: "Gastroentérologie",
    institution: "Établissement à annoncer",
    location: "Algérie",
    topic: "Thème à annoncer",
    session: "Session à annoncer",
    bio: "Biographie à annoncer.",
    image: "",
    featured: true,
  },
  {
    slug: "speaker-06",
    name: "Nom de l'intervenant",
    title: "Chercheur — Santé connectée",
    specialty: "Santé connectée & Innovation",
    // institution: PLACEHOLDER_UNIVERSITE — voir src/data/event.ts
    institution: "Partenariat universitaire",
    location: "Constantine, Algérie",
    topic: "Thème à annoncer",
    session: "Session à annoncer",
    bio: "Biographie à annoncer.",
    image: "",
    featured: true,
  },
  {
    slug: "speaker-07",
    name: "Nom de l'intervenant",
    title: "Spécialiste en Gastroentérologie",
    specialty: "Gastroentérologie",
    institution: "Établissement à annoncer",
    location: "Algérie",
    topic: "Thème à annoncer",
    bio: "Biographie à annoncer.",
    image: "",
  },
  {
    slug: "speaker-08",
    name: "Nom de l'intervenant",
    title: "Spécialiste en Imagerie médicale",
    specialty: "Imagerie médicale",
    institution: "Établissement à annoncer",
    location: "International",
    topic: "Thème à annoncer",
    bio: "Biographie à annoncer.",
    image: "",
  },
  {
    slug: "speaker-09",
    name: "Nom de l'intervenant",
    title: "Chercheur clinique",
    specialty: "Recherche clinique",
    institution: "Établissement à annoncer",
    location: "Algérie",
    topic: "Thème à annoncer",
    bio: "Biographie à annoncer.",
    image: "",
  },
  {
    slug: "speaker-10",
    name: "Nom de l'intervenant",
    title: "Spécialiste en Gastroentérologie",
    specialty: "Gastroentérologie",
    institution: "Établissement à annoncer",
    location: "Algérie",
    topic: "Thème à annoncer",
    bio: "Biographie à annoncer.",
    image: "",
  },
  {
    slug: "speaker-11",
    name: "Nom de l'intervenant",
    title: "Spécialiste en Médecine numérique",
    specialty: "Médecine numérique",
    institution: "Établissement à annoncer",
    location: "International",
    topic: "Thème à annoncer",
    bio: "Biographie à annoncer.",
    image: "",
  },
  {
    slug: "speaker-12",
    name: "Nom de l'intervenant",
    title: "Spécialiste en Gastroentérologie",
    specialty: "Gastroentérologie",
    institution: "Établissement à annoncer",
    location: "Algérie",
    topic: "Thème à annoncer",
    bio: "Biographie à annoncer.",
    image: "",
  },
];

export function getExpertBySlug(slug: string): Expert | undefined {
  return experts.find((e) => e.slug === slug);
}

export const featuredExperts = experts.filter((e) => e.featured).slice(0, 6);
