import RegistrationForm from "@/components/RegistrationForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscription — CGEL Scientific Days 3e Édition",
  description: "Inscrivez-vous aux CGEL Scientific Days 3e Édition — 1 octobre 2026 à l'Ahmed Bey Zenith, Constantine, Algérie. Inscription via Google Form.",
};

export default function RegistrationPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Inscription</span>
          </div>
          <h1 className="mt-4 font-serif text-[30px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#0F1D3A]">S&apos;inscrire aux CGEL Scientific Days 2026</h1>
          <p className="mt-3 text-[14px] leading-6 text-[#475569] max-w-[640px]">
            3<sup>e</sup> Édition — La gastroentérologie à l&apos;ère de l&apos;intelligence artificielle et de la santé connectée. <br/> Jeudi 1 octobre 2026 · Ahmed Bey Zenith, Constantine, Algérie.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 items-start">
          <div className="border border-[#E2E8F0] bg-white p-6 lg:p-7">
            <h2 className="font-serif text-[16px] text-[#0F1D3A]">Formulaire d&apos;inscription</h2>
            <p className="mt-1 text-[12px] text-[#64748B]">L&apos;inscription est désormais centralisée sur Google Form — cliquez ci-dessous pour y accéder.</p>
            <div className="mt-6">
              <RegistrationForm />
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-[#E2E8F0] bg-white">
              <div className="px-5 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
                <h3 className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#023DA5]">Résumé de l&apos;événement</h3>
              </div>
              <dl className="divide-y divide-[#E2E8F0] text-[12px]">
                <div className="grid grid-cols-[90px_1fr]">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Événement</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">CGEL Scientific Days — 3<sup>e</sup> Édition</dd>
                </div>
                <div className="grid grid-cols-[90px_1fr]">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Thème</dt>
                  <dd className="px-4 py-3 text-[#0F1D3A]">Gastroentérologie à l&apos;ère de l&apos;IA & Santé connectée</dd>
                </div>
                <div className="grid grid-cols-[90px_1fr]">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Date</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">Jeu. 1 oct. 2026</dd>
                </div>
                <div className="grid grid-cols-[90px_1fr]">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Lieu</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">Ahmed Bey Zenith, Constantine</dd>
                </div>
                <div className="grid grid-cols-[90px_1fr]">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Contact</dt>
                  <dd className="px-4 py-3 text-[#0F1D3A] text-[11px]">0540 69 95 13 · college.hgel@gmail.com</dd>
                </div>
              </dl>
            </div>

            <div className="border border-[#0F1D3A] bg-[#0F1D3A] text-white px-5 py-5">
              <h3 className="text-[12px] font-bold tracking-[0.04em]">Que se passe-t-il ensuite ?</h3>
              <ol className="mt-3 space-y-2 text-[12px] leading-6 text-white/60 list-decimal list-inside">
                <li>Cliquez sur « S&apos;inscrire via Google Form ».</li>
                <li>Remplissez le formulaire Google dans le nouvel onglet.</li>
                <li>Le comité examine les demandes et vous recontacte.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
