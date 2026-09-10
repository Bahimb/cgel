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
    slug: "speaker-placeholder-01",
    name: "Speaker Name",
    title: "Gastroenterology Specialist",
    specialty: "Gastroenterology",
    institution: "Institution to be announced",
    location: "Algeria",
    topic: "Topic to be announced",
    session: "Session TBA",
    bio: "Biography to be announced. This placeholder will be replaced with the speaker's full professional biography once confirmed.",
    image: "",
    featured: true,
  },
  {
    slug: "speaker-placeholder-02",
    name: "Speaker Name",
    title: "Hepatology Specialist",
    specialty: "Hepatology",
    institution: "Institution to be announced",
    location: "Algeria",
    topic: "Topic to be announced",
    session: "Session TBA",
    bio: "Biography to be announced. This placeholder will be replaced once the speaker is confirmed.",
    image: "",
    featured: true,
  },
  {
    slug: "speaker-placeholder-03",
    name: "Speaker Name",
    title: "Digestive Endoscopy Specialist",
    specialty: "Digestive Endoscopy",
    institution: "Institution to be announced",
    location: "Algeria",
    topic: "Topic to be announced",
    session: "Session TBA",
    bio: "Biography to be announced.",
    image: "",
    featured: true,
  },
  {
    slug: "speaker-placeholder-04",
    name: "Speaker Name",
    title: "Artificial Intelligence in Medicine",
    specialty: "AI & Digital Health",
    institution: "Institution to be announced",
    location: "International",
    topic: "Topic to be announced",
    session: "Session TBA",
    bio: "Biography to be announced.",
    image: "",
    featured: true,
  },
  {
    slug: "speaker-placeholder-05",
    name: "Speaker Name",
    title: "Gastroenterology Specialist",
    specialty: "Gastroenterology",
    institution: "Institution to be announced",
    location: "Algeria",
    topic: "Topic to be announced",
    session: "Session TBA",
    bio: "Biography to be announced.",
    image: "",
    featured: true,
  },
  {
    slug: "speaker-placeholder-06",
    name: "Speaker Name",
    title: "Researcher — Smart Health",
    specialty: "Smart Health & Innovation",
    institution: "MISC Laboratory",
    location: "Constantine, Algeria",
    topic: "Topic to be announced",
    session: "Session TBA",
    bio: "Biography to be announced.",
    image: "",
    featured: true,
  },
  {
    slug: "speaker-placeholder-07",
    name: "Speaker Name",
    title: "Gastroenterology Specialist",
    specialty: "Gastroenterology",
    institution: "Institution to be announced",
    location: "Algeria",
    topic: "Topic to be announced",
    bio: "Biography to be announced.",
    image: "",
  },
  {
    slug: "speaker-placeholder-08",
    name: "Speaker Name",
    title: "Medical Imaging Specialist",
    specialty: "Medical Imaging",
    institution: "Institution to be announced",
    location: "International",
    topic: "Topic to be announced",
    bio: "Biography to be announced.",
    image: "",
  },
  {
    slug: "speaker-placeholder-09",
    name: "Speaker Name",
    title: "Clinical Researcher",
    specialty: "Clinical Research",
    institution: "Institution to be announced",
    location: "Algeria",
    topic: "Topic to be announced",
    bio: "Biography to be announced.",
    image: "",
  },
  {
    slug: "speaker-placeholder-10",
    name: "Speaker Name",
    title: "Gastroenterology Specialist",
    specialty: "Gastroenterology",
    institution: "Institution to be announced",
    location: "Algeria",
    topic: "Topic to be announced",
    bio: "Biography to be announced.",
    image: "",
  },
  {
    slug: "speaker-placeholder-11",
    name: "Speaker Name",
    title: "Digital Medicine Specialist",
    specialty: "Digital Medicine",
    institution: "Institution to be announced",
    location: "International",
    topic: "Topic to be announced",
    bio: "Biography to be announced.",
    image: "",
  },
  {
    slug: "speaker-placeholder-12",
    name: "Speaker Name",
    title: "Gastroenterology Specialist",
    specialty: "Gastroenterology",
    institution: "Institution to be announced",
    location: "Algeria",
    topic: "Topic to be announced",
    bio: "Biography to be announced.",
    image: "",
  },
];

export function getExpertBySlug(slug: string): Expert | undefined {
  return experts.find((e) => e.slug === slug);
}

export const featuredExperts = experts.filter((e) => e.featured).slice(0, 6);
