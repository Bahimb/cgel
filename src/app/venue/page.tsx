import Link from "next/link";
import type { Metadata } from "next";
import { TechnicalNetworkBackground } from "@/components/PosterGraphics";

export const metadata: Metadata = {
  title: "Lieu — Ahmed Bey Zenith, Constantine | CGEL",
  description: "Informations sur le lieu des CGEL Scientific Days 3e Édition — Ahmed Bey Zenith, Constantine, Algérie. 1 octobre 2026.",
};

export default function VenuePage() {
  return (
    <div className="bg-white">
      <div className="relative border-b border-[#E2E8F0] overflow-hidden">
        <TechnicalNetworkBackground />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Lieu</span>
          </div>
          <h1 className="mt-4 text-[30px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] font-extrabold text-[#0F1D3A]">Ahmed Bey Zenith, Constantine</h1>
          <p className="mt-3 text-[14px] leading-6 text-[#475569]">Ahmed Bey Zenith, Constantine, Algérie · Jeudi 1 octobre 2026</p>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <TechnicalNetworkBackground />
        <div className="relative grid lg:grid-cols-[520px_1fr] gap-0 border border-[#E2E8F0] overflow-hidden bg-white">
          <div className="relative h-[320px] lg:h-auto overflow-hidden bg-[#F1F5F9]">
            <img
              src="/images/ahmed-bey-zenith.jpg"
              alt="Ahmed Bey Zenith — Constantine"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-white border-t border-[#E2E8F0] px-4 py-3 flex items-center justify-between">
              <p className="text-[11px] font-semibold text-[#0F1D3A]">Ahmed Bey Zenith · Constantine</p>
            </div>
          </div>

          <div className="px-6 lg:px-8 py-8 bg-white">
            <h2 className="text-[18px] font-bold text-[#0F1D3A]">À propos du lieu</h2>
            <p className="mt-3 text-[13px] leading-6 text-[#475569]">
              Le Ahmed Bey Zenith est l'une des principales salles de congrès d'Algérie, située dans la ville historique de Constantine. Le lieu offre des installations modernes pour des rencontres scientifiques internationales dans un cadre prestigieux.
            </p>

            <div className="mt-6 border border-[#E2E8F0]">
              <div className="grid grid-cols-[100px_1fr] border-b border-[#E2E8F0]">
                <span className="px-4 py-3 text-[11px] tracking-[0.06em] uppercase font-semibold text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Adresse</span>
                <span className="px-4 py-3 text-[12px] text-[#0F1D3A]">Ahmed Bey Zenith, Constantine, Algérie</span>
              </div>
              <div className="grid grid-cols-[100px_1fr]">
                <span className="px-4 py-3 text-[11px] tracking-[0.06em] uppercase font-semibold text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Date</span>
                <span className="px-4 py-3 text-[12px] text-[#0F1D3A]">Jeudi 1 octobre 2026 — Journée entière</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Ahmed+Bey+Zenith+Constantine+Algeria"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-[#023DA5] bg-[#023DA5] px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-semibold text-white hover:bg-[#022a72] transition-colors focus-visible:ring-2 focus-visible:ring-[#023DA5]"
              >
                Ouvrir dans Google Maps
              </a>
              <Link href="/registration" className="inline-flex items-center justify-center bg-[#F08444] px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors focus-visible:ring-2 focus-visible:ring-[#023DA5]">
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border border-[#E8EDF3] overflow-hidden max-w-[720px] mx-auto">
          <img src="/images/gcel-venue-announcement.png" alt="Annonce du lieu — Ahmed Bey Zenith, CGEL Scientific Days" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
