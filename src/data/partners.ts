export type Partner = {
  slug: string;
  name: string;
  description?: string;
  website?: string;
  logo?: string;
};

export const partners: Partner[] = [
  { slug: "partner-01", name: "Nom du partenaire", description: "Description du partenaire à annoncer.", website: "#" },
  { slug: "partner-02", name: "Nom du partenaire", description: "Description du partenaire à annoncer.", website: "#" },
  { slug: "partner-03", name: "Nom du partenaire", description: "Description du partenaire à annoncer.", website: "#" },
  { slug: "partner-04", name: "Nom du partenaire", description: "Description du partenaire à annoncer.", website: "#" },
  { slug: "partner-05", name: "Nom du partenaire", description: "Description du partenaire à annoncer.", website: "#" },
  { slug: "partner-06", name: "Nom du partenaire", description: "Description du partenaire à annoncer.", website: "#" },
  { slug: "partner-07", name: "Nom du partenaire", description: "Description du partenaire à annoncer.", website: "#" },
  { slug: "partner-08", name: "Nom du partenaire", description: "Description du partenaire à annoncer.", website: "#" },
  { slug: "partner-09", name: "Nom du partenaire", description: "Description du partenaire à annoncer.", website: "#" },
  { slug: "partner-10", name: "Nom du partenaire", description: "Description du partenaire à annoncer.", website: "#" },
  { slug: "partner-11", name: "Nom du partenaire", description: "Description du partenaire à annoncer.", website: "#" },
  { slug: "partner-12", name: "Nom du partenaire", description: "Description du partenaire à annoncer.", website: "#" },
];

export function getPartnerBySlug(slug: string): Partner | undefined {
  return partners.find((p) => p.slug === slug);
}
