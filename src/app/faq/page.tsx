import { faqs } from "@/data/faq";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — CGEL Days 3e Édition",
  description: "Foire aux questions — CGEL Days 3e Édition : inscriptions, programme, lieu, intervenants.",
};

export default function FAQPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">FAQ</span>
          </div>
          <h1 className="mt-4 font-serif text-[30px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#0F1D3A]">Questions fréquentes</h1>
          <p className="mt-3 text-[14px] leading-6 text-[#475569] max-w-[640px]">Réponses sur le CGEL — inscriptions, programme, intervenants et lieu. Contenu éditable, mis à jour dès que les détails sont confirmés.</p>
        </div>
      </div>

      <div className="mx-auto max-w-[840px] px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="border border-[#E2E8F0] bg-white divide-y divide-[#E2E8F0]">
          {faqs.map((item) => (
            <details key={item.q} className="group">
              <summary className="list-none flex items-center justify-between gap-4 px-5 py-4 cursor-pointer">
                <h2 className="text-[13px] font-semibold text-[#0F1D3A] pr-2">{item.q}</h2>
                <span className="shrink-0 w-7 h-7 border border-[#E2E8F0] flex items-center justify-center text-[#023DA5] group-open:bg-[#023DA5] group-open:text-white group-open:border-[#023DA5] transition-colors">
                  <span className="group-open:rotate-45 transition-transform leading-none">+</span>
                </span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-[13px] leading-6 text-[#475569] border-l-2 border-[#E2E8F0] pl-3">{item.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 border border-[#E2E8F0] bg-white px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-[12px] font-bold text-[#0F1D3A]">Encore une question ?</p>
            <p className="text-[12px] text-[#64748B]">Contactez directement le comité d'organisation.</p>
          </div>
          <Link href="/contact" className="shrink-0 inline-flex items-center justify-center border border-[#023DA5] bg-[#023DA5] px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-semibold text-white hover:bg-[#022a72] transition-colors focus-visible:ring-2 focus-visible:ring-[#023DA5]">
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
