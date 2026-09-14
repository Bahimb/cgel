import { notFound } from "next/navigation";
import Link from "next/link";
import { experts, getExpertBySlug } from "@/data/experts";
import type { Metadata } from "next";

export function generateStaticParams() {
  return experts.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const expert = getExpertBySlug(slug);
  if (!expert) return { title: "Expert non trouvé — CGEL" };
  return {
    title: `${expert.name} — ${expert.title} | Experts CGEL`,
    description: `${expert.specialty} · ${expert.institution} · ${expert.location} — CGEL Scientific Days 3e Édition.`,
  };
}

const portraits = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1537368910025-70035079f3d5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
];

function hashCode(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return h;
}

export default async function ExpertDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const expert = getExpertBySlug(slug);
  if (!expert) notFound();
  const img = portraits[Math.abs(hashCode(expert.slug)) % portraits.length];

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/experts" className="text-[11px] tracking-[0.06em] uppercase font-semibold text-[#023DA5] hover:underline">
            ← Retour aux experts
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid lg:grid-cols-[380px_1fr] gap-6 lg:gap-8 items-start">
          <div className="border border-[#E2E8F0] bg-white">
            <div className="aspect-[4/5] overflow-hidden bg-[#F1F5F9]">
              <img src={img} alt={`${expert.name} — ${expert.title}`} className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-5 border-t border-[#E2E8F0]">
              <h1 className="text-[16px] font-bold text-[#0F1D3A]">{expert.name}</h1>
              <p className="text-[12px] font-medium text-[#023DA5]">{expert.title}</p>
              <p className="mt-1 text-[11px] text-[#64748B]">
                {expert.institution} · {expert.location}
              </p>

              <div className="mt-4 space-y-3">
                <div className="border border-[#E2E8F0] px-3 py-2.5 bg-[#F8FAFC]">
                  <p className="text-[10px] tracking-[0.08em] uppercase font-semibold text-[#64748B]">Thème de conférence</p>
                  <p className="mt-1 text-[12px] font-semibold text-[#0F1D3A]">{expert.topic}</p>
                </div>
                {expert.session && (
                  <div className="border border-[#E2E8F0] px-3 py-2.5 bg-[#F8FAFC]">
                    <p className="text-[10px] tracking-[0.08em] uppercase font-semibold text-[#64748B]">Session</p>
                    <p className="mt-1 text-[12px] font-medium text-[#0F1D3A]">{expert.session}</p>
                  </div>
                )}
              </div>

              <Link href="/registration" className="mt-5 inline-flex w-full items-center justify-center bg-[#F08444] px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors">
                S'inscrire
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-[#E2E8F0] bg-white p-6 lg:p-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#023DA5]" />
                <span className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#023DA5]">Biographie</span>
              </div>
              <p className="mt-3 text-[14px] leading-7 text-[#475569]">{expert.bio}</p>
              <p className="mt-6 text-[11px] leading-4 text-[#94A3B8] border-l-2 border-[#E2E8F0] pl-3">
                Biographie placeholder — sera remplacée par la biographie professionnelle complète de l'intervenant dès confirmation. Aucune fausse accréditation n'est affichée.
              </p>
            </div>

            <div className="border border-[#E2E8F0] bg-white p-5">
              <h3 className="text-[12px] font-bold text-[#0F1D3A]">Détails de la session</h3>
              <p className="mt-2 text-[12px] leading-6 text-[#64748B]">
                Les informations détaillées de la session — horaire, salle et résumé — apparaîtront ici dès que le programme scientifique sera finalisé. Consultez la{" "}
                <Link href="/program" className="text-[#023DA5] font-medium hover:underline">
                  page Programme
                </Link>{" "}
                pour les mises à jour.
              </p>
            </div>

            <div className="border border-[#023DA5] bg-[#023DA5] text-white px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-[12px] font-semibold">Envie d'assister à cette session ?</p>
                <p className="text-[11px] text-white/60">Réservez votre place pour le 01 oct. 2026</p>
              </div>
              <Link href="/registration" className="shrink-0 inline-flex items-center justify-center bg-[#F08444] px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors">
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
