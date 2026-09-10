import { notFound } from "next/navigation";
import Link from "next/link";
import { partners, getPartnerBySlug } from "@/data/partners";
import type { Metadata } from "next";

export function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPartnerBySlug(slug);
  if (!p) return { title: "Partner not found — GCEL" };
  return { title: `${p.name} — Partner | GCEL`, description: p.description };
}

export default async function PartnerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  if (!partner) notFound();

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/partners" className="text-[11px] tracking-[0.06em] uppercase font-semibold text-[#023DA5] hover:underline">
            ← Back to partners
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[640px] px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="border border-[#E2E8F0] bg-white p-8 text-center">
          <div className="mx-auto w-14 h-14 border border-[#E2E8F0] flex items-center justify-center text-[#023DA5] font-bold text-[11px] tracking-[0.08em]">GCEL</div>
          <h1 className="mt-4 font-serif text-[20px] text-[#0F1D3A]">{partner.name}</h1>
          <p className="mt-2 text-[12px] leading-6 text-[#64748B]">{partner.description ?? "Partner description to be announced."}</p>

          <div className="mt-6 border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[11px] leading-4 text-[#64748B]">
            Placeholder partner — organizer can add logo, description and website without touching UI code.
          </div>

          {partner.website && partner.website !== "#" ? (
            <a href={partner.website} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center border border-[#023DA5] bg-[#023DA5] px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-semibold text-white hover:bg-[#022a72]">
              Visit website
            </a>
          ) : (
            <p className="mt-6 text-[11px] text-[#94A3B8]">Website link will appear here once provided.</p>
          )}
        </div>

        <div className="mt-6 text-center">
          <Link href="/partners" className="text-[11px] tracking-[0.06em] uppercase font-semibold text-[#023DA5] hover:underline">
            View all partners
          </Link>
        </div>
      </div>
    </div>
  );
}
