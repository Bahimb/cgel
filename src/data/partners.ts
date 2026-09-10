export type Partner = {
  slug: string;
  name: string;
  description?: string;
  website?: string;
  logo?: string;
};

export const partners: Partner[] = [
  { slug: "partner-01", name: "Partner Name", description: "Partner description to be announced.", website: "#" },
  { slug: "partner-02", name: "Partner Name", description: "Partner description to be announced.", website: "#" },
  { slug: "partner-03", name: "Partner Name", description: "Partner description to be announced.", website: "#" },
  { slug: "partner-04", name: "Partner Name", description: "Partner description to be announced.", website: "#" },
  { slug: "partner-05", name: "Partner Name", description: "Partner description to be announced.", website: "#" },
  { slug: "partner-06", name: "Partner Name", description: "Partner description to be announced.", website: "#" },
  { slug: "partner-07", name: "Partner Name", description: "Partner description to be announced.", website: "#" },
  { slug: "partner-08", name: "Partner Name", description: "Partner description to be announced.", website: "#" },
  { slug: "partner-09", name: "Partner Name", description: "Partner description to be announced.", website: "#" },
  { slug: "partner-10", name: "Partner Name", description: "Partner description to be announced.", website: "#" },
  { slug: "partner-11", name: "Partner Name", description: "Partner description to be announced.", website: "#" },
  { slug: "partner-12", name: "Partner Name", description: "Partner description to be announced.", website: "#" },
];

export function getPartnerBySlug(slug: string): Partner | undefined {
  return partners.find((p) => p.slug === slug);
}
