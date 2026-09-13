"use client";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSerGOXc3e5980njfA9R0Zi2MHHhMP1xJp-_gnbgHa-oSyK2vQ/viewform";

export default function RegistrationForm() {
  return (
    <div className="space-y-5">
      <div className="border border-[#E2E8F0] bg-[#F8FAFC] px-5 py-5 text-center">
        <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[#023DA5]">Inscription officielle</p>
        <h3 className="mt-2 font-serif text-[18px] leading-tight text-[#0F1D3A]">Les inscriptions se font via Google Form</h3>
        <p className="mt-2 text-[13px] leading-6 text-[#475569] max-w-[520px] mx-auto font-light">
          Cliquez sur le bouton ci-dessous pour accéder au formulaire officiel. Il s&apos;ouvrira dans un nouvel onglet — aucune donnée n&apos;est stockée localement sur ce site.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center bg-[#F08444] px-8 py-3.5 text-[12px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors shadow-[0_4px_16px_rgba(240,132,68,0.28)] focus-visible:ring-2 focus-visible:ring-[#023DA5] focus-visible:ring-offset-2"
        >
          S&apos;inscrire via Google Form
          <span aria-hidden className="ml-2">↗</span>
        </a>
        <p className="mt-3 text-[11px] leading-4 text-[#94A3B8]">Ouverture dans un nouvel onglet · Formulaire sécurisé Google</p>
      </div>

      <div className="border border-[#E2E8F0] bg-white px-4 py-3 text-[11px] leading-5 text-[#475569]">
        En vous inscrivant, vous confirmez votre demande pour les <span className="font-semibold text-[#0F1D3A]">CGEL Days — 3<sup>e</sup> Édition · 01 oct. 2026</span>. Le comité
        d&apos;organisation examinera votre demande. Aucun paiement n&apos;est requis à ce stade sauf communication directe.
      </div>

      <p className="text-center text-[11px] text-[#64748B]">
        Questions ? <a href="mailto:college.hgel@gmail.com" className="text-[#023DA5] font-medium hover:underline">college.hgel@gmail.com</a> · 0540 69 95 13
      </p>

      <div className="border border-dashed border-[#E2E8F0] bg-[#FCFDFE] px-4 py-3 text-[11px] leading-4 text-[#94A3B8] text-center">
        Ancien formulaire interne désactivé — redirection vers Google Form pour centraliser les inscriptions.
      </div>
    </div>
  );
}
