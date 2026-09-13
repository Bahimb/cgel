import ExpertCard from "@/components/ExpertCard";
import { experts } from "@/data/experts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experts — CGEL Days 3e Édition",
  description: "Rencontrez les experts des CGEL Days 3e Édition — gastroentérologie, hépatologie, IA et santé connectée.",
};

export default function ExpertsPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Experts</span>
          </div>
          <h1 className="mt-4 font-serif text-[30px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#0F1D3A]">Rencontrez les experts</h1>
          <p className="mt-3 text-[14px] leading-6 text-[#475569] max-w-[640px]">
            Les profils des intervenants sont publiés progressivement. Les placeholders indiquent des créneaux en attente de confirmation — chaque profil est facilement
            remplaçable par des données réelles.
          </p>
          <div className="mt-4 flex gap-2 text-[11px]">
            <span className="border border-[#023DA5] bg-[#023DA5] text-white px-2.5 py-1 font-semibold">{experts.length} placeholders</span>
            <span className="border border-[#E2E8F0] px-2.5 py-1 text-[#64748B]">Contenu entièrement éditable</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-[12px] text-[#475569]">Aucun médecin ou diplôme inventé — les placeholders utilisent « Nom de l'intervenant » / « Thème à annoncer ».</p>
          <Link href="/registration" className="shrink-0 inline-flex items-center justify-center bg-[#F08444] px-5 py-2 text-[11px] tracking-[0.06em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors focus-visible:ring-2 focus-visible:ring-[#023DA5]">
            S'inscrire
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
          {experts.map((e) => (
            <ExpertCard key={e.slug} expert={e} />
          ))}
        </div>

        <div className="mt-10 border border-[#023DA5] bg-[#023DA5] text-white px-6 py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-[16px]">Annonce des intervenants à venir</h3>
            <p className="mt-1 text-[12px] text-white/60">Suivez les mises à jour. Pour toute candidature : college.hgel@gmail.com</p>
          </div>
          <Link href="/program" className="shrink-0 inline-flex items-center justify-center border border-white/30 px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-semibold text-white hover:bg-white hover:text-[#023DA5] transition-colors focus-visible:ring-2 focus-visible:ring-white">
            Voir le programme
          </Link>
        </div>
      </div>
    </div>
  );
}
