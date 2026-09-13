import Link from "next/link";
import { partners } from "@/data/partners";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partenaires — CGEL Days 3e Édition",
  description: "Sponsors & Partenaires des CGEL Days 3e Édition — tous les partenaires présentés équitablement.",
};

export default function PartnersPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Partenaires</span>
          </div>
          <h1 className="mt-4 font-serif text-[30px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#0F1D3A]">Nos sponsors & partenaires</h1>
          <p className="mt-3 text-[14px] leading-6 text-[#475569] max-w-[640px]">Tous les partenaires sont présentés équitablement — sans hiérarchie. Un mur de logos institutionnel et sobre.</p>
          <p className="mt-2 text-[11px] text-[#94A3B8] border-l-2 border-[#E2E8F0] pl-3">Annonces partenaires à venir — les placeholders sont facilement remplaçables.</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[#E2E8F0] border border-[#E2E8F0]">
          {partners.map((p) => (
            <Link key={p.slug} href={`/partners/${p.slug}`} className="bg-white px-4 py-10 flex flex-col items-center justify-center text-center hover:bg-[#F8FAFC] transition-colors group">
              <div className="w-10 h-10 border border-[#E2E8F0] flex items-center justify-center text-[#94A3B8] group-hover:border-[#023DA5] group-hover:text-[#023DA5] transition-colors">
                <span className="text-[10px] font-bold tracking-[0.08em]">CGEL</span>
              </div>
              <p className="mt-3 text-[12px] font-semibold text-[#0F1D3A]">{p.name}</p>
              <p className="text-[11px] text-[#94A3B8] line-clamp-2">{p.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 border border-[#E2E8F0] bg-white px-5 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h3 className="text-[12px] font-bold text-[#0F1D3A]">Devenir partenaire</h3>
            <p className="text-[12px] text-[#64748B] mt-1">Contactez college.hgel@gmail.com · 0540 69 95 13 pour les opportunités de partenariat.</p>
          </div>
          <Link href="/contact" className="shrink-0 inline-flex items-center justify-center border border-[#023DA5] bg-[#023DA5] px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-semibold text-white hover:bg-[#022a72] transition-colors focus-visible:ring-2 focus-visible:ring-[#023DA5]">
            Contacter les organisateurs
          </Link>
        </div>
      </div>
    </div>
  );
}
