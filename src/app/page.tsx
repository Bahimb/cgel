import Link from "next/link";
import { Calendar, MapPin, GraduationCap, Users, Network } from "lucide-react";
import { SectionWaveDivider } from "@/components/PosterGraphics";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

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
                <span className="block text-[28px] sm:text-[32px] lg:text-[36px] font-[380]">Le collège</span>
                <span className="block text-[28px] sm:text-[32px] lg:text-[36px] font-[380]">en bref</span>
              </h2>

              <div className="mt-8 space-y-4 text-[14px] leading-7 text-[#475569] max-w-[520px]">
                <p>
                  <span className="font-semibold text-[#0F1D3A]">CGEL</span> fédère les hépato-gastroentérologues et endoscopistes
                  libéraux de l&apos;Est. Notre mission : soutenir la pratique libérale, favoriser la formation continue et porter la
                  voix de la spécialité auprès des institutions.
                </p>
                <p className="text-[#64748B] font-light">
                  Le collège organise des rencontres scientifiques, développe des projets pour la profession et accompagne ses
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

      {/* Événements passés — 3 real events, taller posters */}
      <section className="relative bg-white border-b border-[#E8EDF3] overflow-hidden">
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#F08444]" />
            <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Événements passés</span>
          </div>
          <h2 className="mt-4 font-serif text-[26px] lg:text-[30px] leading-[1.1] tracking-[-0.02em] text-[#0F1D3A]">Retour en images — nos événements passés</h2>
          <p className="mt-2 text-[13px] leading-5 text-[#475569] font-light max-w-[640px]">Trois moments forts du CGEL — affiches lisibles en grand format.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                src: "/images/events/eventposter1.jpeg",
                alt: "Affiche 2ème Journée de Formation Médicale Continue CGEL",
                title: "2ème Journée de Formation Médicale Continue CGEL",
                date: "25–26 septembre 2025",
                lieu: "Hôtel El Hocine, Constantine",
                desc: "Deux jours de formation et d’échanges scientifiques autour de la gastroentérologie libérale, réunissant praticiens et partenaires à l’Hôtel El Hocine.",
              },
              {
                src: "/images/events/eventposter.jpeg",
                alt: "Affiche Proctologie clinique pour le médecin généraliste — 1ère soirée FMC",
                title: "Proctologie clinique pour le médecin généraliste",
                subtitle: "1ère soirée FMC",
                date: "25 décembre 2025, 17h00",
                lieu: "Restaurant Délice, Nouvelle Ville–Ali Mendjeli",
                desc: "Soirée pratique dédiée à la proctologie en médecine générale. Rencontre clinique au Restaurant Délice, en partenariat avec Repartidis.",
              },
              {
                src: "/images/events/eventposter2.jpeg",
                alt: "Affiche Trouble fonctionnel de l’intestin — 3ème soirée FMC",
                title: "Trouble fonctionnel de l’intestin : une approche pratique",
                subtitle: "3ème soirée FMC",
                date: "07 mai 2026, 17h00",
                lieu: "Restaurant Apex, Ali Mendjeli – Constantine",
                desc: "Approche pratique des troubles fonctionnels intestinaux pour le médecin généraliste. Soirée au Restaurant Apex, en collaboration avec le Laboratoire Mayoly.",
              },
            ].map((ev) => (
              <div key={ev.src} className="group border border-[#E2E8F0] bg-white overflow-hidden hover:border-[#D6DEE8] hover:shadow-[0_8px_28px_rgba(2,29,58,0.08)] transition-all flex flex-col">
                <div className="relative overflow-hidden bg-[#F1F5F9] aspect-[3/4] lg:aspect-[3/4.2]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ev.src} alt={ev.alt} className="w-full h-full object-contain p-2 bg-white group-hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-[10px] tracking-[0.10em] uppercase font-semibold text-[#023DA5]">
                    <span className="h-px w-5 bg-[#F08444]" />
                    {ev.subtitle ? ev.subtitle : "Formation CGEL"}
                  </div>
                  <h3 className="mt-2 text-[14px] font-bold leading-[1.3] text-[#0F1D3A]">{ev.title}</h3>
                  <div className="mt-2 flex flex-col gap-1 text-[11px] text-[#475569]">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#023DA5] shrink-0" /> {ev.date}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#023DA5] shrink-0" /> {ev.lieu}</span>
                  </div>
                  <p className="mt-3 text-[12px] leading-5 text-[#64748B] font-light flex-1">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionWaveDivider />

      {/* FINAL CTA — collège call — more compact */}
      <section className="relative bg-[#023DA5] text-white overflow-hidden">
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
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