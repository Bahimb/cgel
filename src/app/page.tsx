import Link from "next/link";
import { Calendar, FolderOpen, Mail, GraduationCap, Users, Network } from "lucide-react";
import { SectionWaveDivider } from "@/components/PosterGraphics";

export default function Home() {
  return (
    <>
      {/* HERO — association identity */}
      <section className="relative bg-white overflow-hidden">

        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-14 lg:pb-20 text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#F08444]" />
            <div className="w-9 h-9  flex items-center justify-center">
                <img src="/cgel.svg" alt="CGEL Logo" className="h-10 w-auto" />
            </div>
            <span className="h-px w-8 bg-[#F08444]" />
          </div>

          <h1 className="mt-8 max-w-[920px] mx-auto font-serif leading-[0.95] tracking-[-0.03em] luxe-serif">
            <span className="block text-[30px] sm:text-[40px] lg:text-[52px] font-[380] text-[#023DA5]">
              Collège des Hépato-Gastroentérologues
            </span>
            <span className="block text-[30px] sm:text-[40px] lg:text-[52px] font-light italic text-[#0F1D3A] mt-1">
              et Endoscopistes Libéraux de l&apos;Est
            </span>
          </h1>

          <p className="mt-6 text-[13px] lg:text-[14px] leading-6 text-[#475569] max-w-[560px] mx-auto font-light">
            Une association professionnelle au service des hépato-gastroentérologues et endoscopistes libéraux de l&apos;Est
            — formation, échange scientifique et représentation de la spécialité.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/a-propos"
              className="inline-flex items-center justify-center bg-[#F08444] px-7 py-3.5 text-[11px] tracking-[0.10em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors shadow-[0_4px_16px_rgba(240,132,68,0.28)]"
            >
              Découvrir l&apos;association
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#023DA5]/25 bg-white px-7 py-3.5 text-[11px] tracking-[0.10em] uppercase font-semibold text-[#023DA5] hover:bg-[#EEF4FF] transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>

       
      </section>

      <SectionWaveDivider />

      {/* À PROPOS — presentation */}
      <section className="relative bg-white border-b border-[#E8EDF3] overflow-hidden">
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-0">
            {/* Left — intro */}
            <div className="py-12 lg:py-16 xl:py-20 lg:pr-10 xl:pr-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#E8EDF3]">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#F08444]" />
                <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">À propos</span>
              </div>

              <h2 className="mt-6 font-serif leading-[0.92] tracking-[-0.03em] text-[#0F1D3A] luxe-serif">
                <span className="block text-[28px] sm:text-[32px] lg:text-[36px] font-[380]">L&apos;association</span>
                <span className="block text-[28px] sm:text-[32px] lg:text-[36px] font-[380]">en bref</span>
              </h2>

              <div className="mt-8 space-y-4 text-[14px] leading-7 text-[#475569] max-w-[520px]">
                <p>
                  <span className="font-semibold text-[#0F1D3A]">GCEL</span> fédère les hépato-gastroentérologues et endoscopistes
                  libéraux de l&apos;Est. Notre mission : soutenir la pratique libérale, favoriser la formation continue et porter la
                  voix de la spécialité auprès des institutions.
                </p>
                <p className="text-[#64748B] font-light">
                  L&apos;association organise des rencontres scientifiques, développe des projets pour la profession et accompagne ses
                  membres au quotidien. Ce site est en cours d&apos;enrichissement — chaque section sera complétée prochainement.
                </p>
              </div>

              <p className="mt-7 font-serif italic text-[15px] leading-5 text-[#0F1D3A] max-w-[520px] border-l-[2.5px] border-[#F08444]/30 pl-4">
                “Faire progresser ensemble la gastroentérologie libérale de l&apos;Est.”
              </p>
            </div>

            {/* Right — mission card */}
            <div className="relative flex flex-col justify-center py-8 lg:py-10 lg:pl-10 xl:pl-12">
              <div className="relative overflow-hidden bg-[#F1F5F9] border border-[#E8EDF3] p-[8px] shadow-[0_8px_30px_rgba(2,29,58,0.06)]">
                <div className="relative overflow-hidden border border-[#E8EDF3]">
                  <div className="relative px-7 py-8 lg:px-9 lg:py-10">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-[#F08444]" />
                      <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Notre mission</span>
                    </div>
                    <ul className="mt-6 space-y-4 text-[13px] text-[#0F1D3A]">
                      {[
                        ["Formation", "Valoriser la formation continue et l'actualisation des pratiques."],
                        ["Échange", "Créer des lieux de partage et de discussion entre professionnels."],
                        ["Représentation", "Défendre les intérêts de la spécialité en pratique libérale."],
                      ].map(([t, d]) => (
                        <li key={t} className="border border-[#E8EDF3] bg-white/95 px-4 py-3 flex gap-3">
                          <span className="mt-1 h-[2px] w-6 bg-[#023DA5] shrink-0" />
                          <span>
                            <span className="font-semibold">{t}</span>
                            <span className="block text-[12px] leading-5 text-[#64748B] font-light">{d}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-px bg-[#E8EDF3] border border-[#E8EDF3] -mx-4 sm:mx-0 shadow-sm">
            {[
              {
                k: "01",
                t: "Formation continue",
                d: "Des journées scientifiques et des mises à jour adaptées à la pratique libérale.",
                Icon: GraduationCap,
              },
              {
                k: "02",
                t: "Échange scientifique",
                d: "Un réseau de professionnels qui partagent leurs expériences et leurs cas.",
                Icon: Network,
              },
              {
                k: "03",
                t: "Vie de la spécialité",
                d: "Représentation de la gastroentérologie et de la pratique libérale de l'Est.",
                Icon: Users,
              },
            ].map(({ k, t, d, Icon }) => (
              <div key={k} className="relative bg-white px-6 py-6 flex gap-4 overflow-hidden group hover:bg-[#FCFDFE] transition-colors">
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#F08444] to-transparent opacity-60" />
                <div className="shrink-0 w-9 h-9 bg-[#0F1D3A] text-white flex items-center justify-center group-hover:bg-[#023DA5] transition-colors">
                  <Icon className="w-[17px] h-[17px]" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] tracking-[0.14em] font-semibold text-[#F08444]">{k}</span>
                    <span className="h-px w-6 bg-[#E8EDF3]" />
                  </div>
                  <h3 className="mt-1 text-[13px] font-bold text-[#0F1D3A] tracking-[-0.01em]">{t}</h3>
                  <p className="mt-1.5 text-[12px] leading-5 text-[#64748B] font-light">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-4" />
        </div>
      </section>

      <SectionWaveDivider />

      {/* SECTIONS — cards links */}
      <section className="relative bg-[#F8FAFC] border-b border-[#E8EDF3] overflow-hidden">
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#F08444]" />
                <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Explorez</span>
              </div>
              <h2 className="mt-4 font-serif text-[28px] lg:text-[34px] leading-[0.95] tracking-[-0.02em] text-[#0F1D3A] luxe-serif">
                Les sections du site
              </h2>
              <p className="mt-2 text-[13px] leading-5 text-[#475569] font-light">
                Nos événements, projets et actualités — bientôt disponibles, en cours de préparation.
              </p>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#E8EDF3] bg-white shadow-sm">
            {[
              {
                href: "/evenements",
                Icon: Calendar,
                t: "Journées scientifiques",
                d: "Congrès, journées d'étude et rencontres de la spécialité — calendrier et informations pratiques.",
              },
              {
                href: "/projets",
                Icon: FolderOpen,
                t: "Les projets du collège",
                d: "Les initiatives portées par l'association pour la profession et la pratique libérale.",
              },
              {
                href: "/contact",
                Icon: Mail,
                t: "Nous écrire",
                d: "Une question, une adhésion, un partenariat ? Contactez le collège directement.",
              },
            ].map(({ href, Icon, t, d }) => (
              <Link
                key={href}
                href={href}
                className="group relative border-r last:border-r-0 border-[#E8EDF3] px-6 py-8 lg:py-10 bg-white hover:bg-[#FCFDFE] transition-colors overflow-hidden border-b lg:border-b-0"
              >
                <div className="absolute top-0 inset-x-0 h-[2px] bg-[#F08444] opacity-60" />
                <div className="w-10 h-10 bg-[#0F1D3A] text-white flex items-center justify-center group-hover:bg-[#023DA5] transition-colors">
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.8} />
                </div>
                <div className="mt-4 h-px w-8 bg-[#F08444]/50" />
                <h3 className="mt-4 text-[13px] font-bold tracking-[-0.01em] text-[#023DA5]">{t}</h3>
                <p className="mt-2 text-[12px] leading-5 text-[#475569] font-light">{d}</p>
                <span className="mt-4 inline-flex text-[11px] tracking-[0.10em] uppercase font-semibold text-[#023DA5] border-b border-[#023DA5]/20 pb-0.5 group-hover:border-[#023DA5]">
                  Découvrir →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — association call */}
      <section className="relative bg-[#023DA5] text-white overflow-hidden">
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#F08444]/60" />
              <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-white/55">Rejoignez-nous</span>
            </div>
            <h2 className="mt-6 font-serif leading-[0.86] tracking-[-0.03em] luxe-serif">
              <span className="block text-[34px] sm:text-[44px] lg:text-[52px] font-[380]">AU SERVICE DE LA</span>
              <span className="block text-[34px] sm:text-[44px] lg:text-[52px] font-light italic text-[#9DD9EE]">GASTROENTÉROLOGIE LIBÉRALE.</span>
            </h2>
            <p className="mt-4 text-[13px] leading-6 text-white/65 max-w-[520px] font-light">
              Adhérez au collège, participez à nos journées scientifiques et suivez les projets de la spécialité dans l&apos;Est.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#F08444] px-7 py-3.5 text-[11px] tracking-[0.10em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors shadow-[0_6px_20px_rgba(240,132,68,0.22)]"
              >
                Nous contacter
              </Link>
              <Link
                href="/evenements"
                className="inline-flex items-center justify-center border border-white/25 px-7 py-3.5 text-[11px] tracking-[0.10em] uppercase font-semibold text-white hover:bg-white hover:text-[#023DA5] transition-colors backdrop-blur-[1px]"
              >
                Nos événements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}