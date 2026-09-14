import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import { eventData } from "@/data/event";

export const metadata: Metadata = {
  title: "Événements — CGEL",
  description:
    "Les événements du CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est : journées scientifiques, congrès et rencontres de la spécialité.",
};

export default function EventsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="bg-white border-b border-[#E8EDF3]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Événements</span>
          </div>
          <h1 className="mt-4 font-serif text-[30px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#0F1D3A]">
            Les événements du CGEL
          </h1>
          <p className="mt-3 text-[14px] leading-6 text-[#475569] max-w-[640px]">
            Journées scientifiques, congrès et rencontres de la hépato-gastroentérologie libérale de l&apos;Est.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-10">
        {/* Coming soon — full listing */}
        <div className="max-w-[720px] mx-auto border border-[#E8EDF3] bg-white px-8 py-12 lg:py-14 text-center shadow-[0_8px_30px_rgba(2,29,58,0.04)]">
          <div className="mx-auto w-14 h-14 border border-[#E8EDF3] bg-[#F8FAFC] flex items-center justify-center text-[#023DA5]">
            <Calendar className="w-6 h-6" strokeWidth={1.7} />
          </div>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#F08444]/40" />
            <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Bientôt disponible</span>
            <span className="h-px w-8 bg-[#F08444]/40" />
          </div>
          <h2 className="mt-3 font-serif text-[22px] leading-[1.1] tracking-[-0.02em] text-[#0F1D3A]">
            Calendrier des événements
          </h2>
          <p className="mt-3 text-[13px] leading-6 text-[#475569] font-light">
            Le calendrier complet des prochains événements du collège sera publié prochainement.
          </p>
        </div>

        {/* Featured event — CGEL Scientific Days (reused from original project) */}
        <div className="relative border border-[#E8EDF3] bg-white overflow-hidden shadow-sm">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#F08444] via-[#36C0E7] to-[#023DA5]" />
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
            <div className="px-6 lg:px-10 py-8 lg:py-12">
              <div className="flex items-center gap-2 text-[10px] tracking-[0.12em] uppercase font-semibold">
                <span className="bg-[#F08444] text-white px-2 py-1">À la une</span>
                <span className="text-[#94A3B8]">Journées scientifiques</span>
              </div>
              <h2 className="mt-4 font-serif text-[26px] lg:text-[32px] leading-[0.95] tracking-[-0.02em] text-[#0F1D3A] luxe-serif">
                CGEL Scientific Days — 3<sup className="text-[16px]">e</sup> Édition
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-[#475569] font-light max-w-[500px]">
                Gastroentérologie à l&apos;ère de l&apos;intelligence artificielle et de la santé connectée — le rendez-vous
                scientifique du collège, aux côtés d&apos;un partenariat universitaire.
              </p>

              <div className="mt-6 space-y-2.5 text-[13px] text-[#0F1D3A]">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 border border-[#E8EDF3] flex items-center justify-center text-[#023DA5] shrink-0">
                    <Calendar className="w-4 h-4" strokeWidth={1.8} />
                  </span>
                  {eventData.date.display}
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 border border-[#E8EDF3] flex items-center justify-center text-[#023DA5] shrink-0">
                    <MapPin className="w-4 h-4" strokeWidth={1.8} />
                  </span>
                  {eventData.venue.full}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-[#023DA5] px-6 py-3 text-[11px] tracking-[0.10em] uppercase font-semibold text-white hover:bg-[#012A7A] shadow-sm"
                >
                  En savoir plus
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-[#E8EDF3] bg-white px-6 py-3 text-[11px] tracking-[0.10em] uppercase font-semibold text-[#023DA5] hover:bg-[#F8FAFC]"
                >
                  Nous contacter
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center bg-[#EEF4FF] border-t lg:border-t-0 lg:border-l border-[#E8EDF3] px-6 py-10">
              <div className="text-center max-w-[280px]">
                <div className="mx-auto w-12 h-12 rounded-full bg-white border-2 border-[#023DA5]/15 flex items-center justify-center text-[#023DA5] shadow-sm">
                  <Sparkles className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <p className="mt-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">À venir</p>
                <p className="mt-2 text-[12px] leading-5 text-[#64748B] font-light">
                  Plus de détails sur le programme, les intervenants et l&apos;inscription seront publiés ici.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors — CGEL Scientific Days uniquement */}
        <div className="relative border border-[#E8EDF3] bg-white overflow-hidden shadow-sm">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#023DA5] via-[#36C0E7] to-[#F08444] opacity-60" />
          <div className="px-6 lg:px-10 py-8 lg:py-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#F08444]" />
                  <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Ils nous soutiennent</span>
                </div>
                <h3 className="mt-3 font-serif text-[22px] lg:text-[26px] leading-[1.1] tracking-[-0.02em] text-[#0F1D3A] luxe-serif">Sponsors</h3>
                <p className="mt-2 text-[12px] leading-5 text-[#475569] font-light max-w-[520px]">
                  Les 10 laboratoires qui accompagnent le CGEL Scientific Days.
                </p>
                <p className="mt-2 text-[11px] leading-5 text-[#64748B] font-light">CGEL Scientific Days — 3e Édition — ces sponsors sont spécifiques à cet événement uniquement.</p>
              </div>
              <span className="hidden sm:inline-flex text-[11px] tracking-[0.08em] uppercase font-semibold text-[#94A3B8] border border-[#E8EDF3] px-3 py-1.5 bg-[#F8FAFC]">10 sponsors confirmés</span>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-[#E8EDF3] border border-[#E8EDF3]">
              {[
                { src: "/logo/logosponsor/astrazeneca.png", alt: "AstraZeneca — Sponsor CGEL Scientific Days" },
                { src: "/logo/logosponsor/biopharm.png", alt: "Biopharm — Sponsor CGEL Scientific Days" },
                { src: "/logo/logosponsor/dermilyne.png", alt: "Dermilyne — Sponsor CGEL Scientific Days" },
                { src: "/logo/logosponsor/krays.png", alt: "Krays — Sponsor CGEL Scientific Days" },
                { src: "/logo/logosponsor/mayoly.PNG", alt: "Mayoly — Sponsor CGEL Scientific Days" },
                { src: "/logo/logosponsor/nadpharmaclic.png", alt: "Nadphar — Sponsor CGEL Scientific Days" },
                { src: "/logo/logosponsor/repartidis.png", alt: "Repartidis — Sponsor CGEL Scientific Days" },
                { src: "/logo/logosponsor/salem.PNG", alt: "Salem — Sponsor CGEL Scientific Days" },
                { src: "/logo/logosponsor/merinal.png", alt: "Merinal — Sponsor CGEL Scientific Days" },
                { src: "/logo/logosponsor/yovene.png", alt: "Yovene — Sponsor CGEL Scientific Days" },
              ].map(({ src, alt }) => (
                <div key={src} className="bg-white px-4 py-6 flex items-center justify-center h-[110px] lg:h-[124px] hover:bg-[#FCFDFE] transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={alt} className="max-h-[64px] lg:max-h-[72px] max-w-full w-auto object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}