import type { LucideIcon } from "lucide-react";
import { Construction } from "lucide-react";

export default function ComingSoonPage({
  kicker,
  title,
  description,
  icon: Icon = Construction,
}: {
  kicker: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="bg-white border-b border-[#E8EDF3]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">{kicker}</span>
          </div>
          <h1 className="mt-4 font-serif text-[30px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#0F1D3A]">{title}</h1>
          {description && <p className="mt-3 text-[14px] leading-6 text-[#475569] max-w-[640px]">{description}</p>}
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="mx-auto max-w-[520px] border border-[#E8EDF3] bg-white px-8 py-12 lg:py-14 text-center shadow-[0_8px_30px_rgba(2,29,58,0.04)]">
          <div className="mx-auto w-14 h-14 border border-[#E8EDF3] bg-[#F8FAFC] flex items-center justify-center text-[#023DA5]">
            <Icon className="w-6 h-6" strokeWidth={1.7} />
          </div>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#F08444]/40" />
            <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Bientôt disponible</span>
            <span className="h-px w-8 bg-[#F08444]/40" />
          </div>
          <h2 className="mt-3 font-serif text-[22px] leading-[1.1] tracking-[-0.02em] text-[#0F1D3A]">Cette section est en cours de préparation</h2>
          <p className="mt-3 text-[13px] leading-6 text-[#475569] font-light">
            Le contenu sera publié prochainement. Merci de votre patience.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-[11px]">
            <span className="h-px w-6 bg-[#E8EDF3]" />
            <span className="text-[#94A3B8] tracking-wide">CGEL · Collège professionnel</span>
            <span className="h-px w-6 bg-[#E8EDF3]" />
          </div>
        </div>
      </div>
    </div>
  );
}