import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — CGEL Days 3e Édition",
  description:
    "À propos des CGEL Days — 3e Édition : la gastroentérologie à l'ère de l'intelligence artificielle et de la santé connectée. Organisé par le CGEL avec un partenariat universitaire.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">À propos</span>
          </div>
          <h1 className="mt-4 font-serif text-[30px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#0F1D3A]">À propos des CGEL Days</h1>
          <p className="mt-3 text-[14px] leading-6 text-[#475569] max-w-[640px]">
            3<sup>e</sup> Édition — La gastroentérologie à l'ère de l'intelligence artificielle et de la santé connectée.
          </p>
          <p className="mt-2 text-[11px] tracking-wide text-[#94A3B8]">01 octobre 2026 · Ahmed Bey Zenith, Constantine, Algérie</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-start">
          <div>
            <SectionTitle
              kicker="Introduction"
              title="Une rencontre scientifique au service de l'évolution de la gastroentérologie"
              subtitle="Les CGEL Days rassemblent la communauté gastroentérologique pour examiner comment l'innovation médicale — notamment l'intelligence artificielle et la santé connectée — repousse les limites du diagnostic, du soin et de la pratique clinique."
            />
            <div className="mt-6 space-y-4 text-[14px] leading-7 text-[#475569]">
              <p>
                La <span className="font-semibold text-[#0F1D3A]">3<sup>e</sup> Édition</span> porte sur{" "}
                <span className="font-semibold text-[#0F1D3A]">« La gastroentérologie à l'ère de l'intelligence artificielle et de la santé connectée »</span>{" "}
                — avec le slogan <em className="text-[#0F1D3A]">« De l'innovation médicale au soin intelligent »</em>. Le programme explore comment
                les données, les outils intelligents et la médecine numérique complètent l'expertise clinique sans remplacer la dimension humaine du soin.
              </p>
              <p>
                Organisé par <span className="font-semibold text-[#0F1D3A]">le CGEL</span> avec{" "}
                <span className="font-semibold text-[#0F1D3A]">un partenariat universitaire</span> comme partenaire scientifique, l'événement s'adresse aux
                hépato-gastroentérologues, hépatologues, médecins généralistes, pharmaciens, infirmiers, chercheurs, étudiants et partenaires institutionnels.
              </p>
            </div>

            <div className="mt-8 border border-[#E2E8F0]">
              <div className="px-5 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
                <h3 className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#023DA5]">Thèmes clés</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-0 text-[12px] text-[#475569]">
                {[
                  "Diagnostic assisté par l’IA",
                  "Santé intelligente et outils numériques",
                  "Endoscopie intelligente",
                  "Médecine fondée sur les données",
                  "Support aux décisions cliniques",
                  "Médecine personnalisée",
                  "Imagerie médicale",
                  "Santé future ",
                ].map((t) => (
                  <li key={t} className="px-5 py-3 border-b sm:border-b border-r-0 sm:odd:border-r border-[#E2E8F0] last:border-b-0">
                    — {t}
                  </li>
                ))}
              </ul>
            </div>

              <Link
              href="/registration"
              className="mt-8 inline-flex items-center justify-center bg-[#F08444] px-6 py-3 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors focus-visible:ring-2 focus-visible:ring-[#023DA5]"
            >
              S'inscrire
            </Link>
          </div>

          <div className="space-y-4">
            <div className="border border-[#E2E8F0] bg-white">
              <div className="px-5 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
                <h3 className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#023DA5]">En bref</h3>
              </div>
              <dl className="divide-y divide-[#E2E8F0] text-[12px]">
                <div className="grid grid-cols-[110px_1fr] gap-0">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Événement</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">CGEL Days — 3<sup>e</sup> Édition</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-0">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Thème</dt>
                  <dd className="px-4 py-3 font-medium text-[#0F1D3A]">Gastroentérologie à l'ère de l'IA & Santé connectée</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-0">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Date</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">01 oct. 2026</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-0">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Lieu</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">Ahmed Bey Zenith, Constantine</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-0">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Organisateur</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">CGEL</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-0">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Partenaire</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">Université Constantine 2 Abdelhamid Mehri et Faculté NTIC</dd>
                </div>
              </dl>
              <div className="p-4 border-t border-[#E2E8F0]">
                <Link href="/program" className="inline-flex w-full items-center justify-center border border-[#023DA5] bg-[#023DA5] px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-semibold text-white hover:bg-[#022a72] focus-visible:ring-2 focus-visible:ring-[#023DA5]">
                  Voir le programme scientifique
                </Link>
              </div>
            </div>

            <div className="overflow-hidden border border-[#E2E8F0]">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop"
                alt="Auditoire lors d'un congrès scientifique"
                className="h-[180px] w-full object-cover"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-px bg-[#E2E8F0] border-t border-[#E2E8F0]">
                <div className="bg-white px-4 py-3 text-center">
                  <p className="text-[12px] font-bold text-[#0F1D3A]">CGEL</p>
                  <p className="text-[10px] tracking-[0.08em] uppercase text-[#64748B]">Organisateur</p>
                </div>
                <div className="bg-[#F8FAFC] px-4 py-3 text-center flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2"> 
                    <img src="/logo/uc2.png" alt="Partenariat universitaire — partenaire scientifique du CGEL" className="h-6 w-auto object-contain" loading="lazy" />
                    <img src="/logo/ntic.png" alt="Partenariat universitaire — partenaire scientifique du CGEL" className="h-6 w-auto object-contain" loading="lazy" />
                  </div>
                  
                  <p className="text-[10px] tracking-[0.08em] uppercase text-[#64748B]">Partenaire scientifique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
