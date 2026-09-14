"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Award, Brain, Users, Rocket, Target, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  accroche: string;
  date: string;
  lieu: string;
  chiffre: string;
  bg: "gradient" | "photo";
  src?: string;
  alt?: string;
};

const slides: Slide[] = [
  {
    id: "edition",
    kicker: "À la une",
    title: "CGEL Scientific Days — 3e édition",
    subtitle: "Journées scientifiques du collège",
    accroche: "Gastroentérologie à l'ère de l'IA & santé connectée",
    date: "Jeudi 1 octobre 2026",
    lieu: "Ahmed Bey Zenith, Constantine",
    chiffre: "1 journée · 5 thématiques · 10 partenaires",
    bg: "gradient",
  },
  {
    id: "expertise",
    kicker: "Au cœur de la spécialité",
    title: "CGEL Scientific Days — 3e édition",
    subtitle: "Journées scientifiques du collège",
    accroche: "L'excellence en hépato-gastroentérologie libérale",
    date: "Jeudi 1 octobre 2026",
    lieu: "Ahmed Bey Zenith, Constantine",
    chiffre: "Formation · Échange · Innovation",
    bg: "photo",
    src: "/images/gcel-digestive-system.png",
    alt: "Illustration système digestif — gastroentérologie CGEL",
  },
  {
    id: "lieu",
    kicker: "Lieu d'exception",
    title: "CGEL Scientific Days — 3e édition",
    subtitle: "Journées scientifiques du collège",
    accroche: "Un cadre prestigieux pour une rencontre scientifique",
    date: "Jeudi 1 octobre 2026",
    lieu: "Ahmed Bey Zenith, Constantine",
    chiffre: "Constantine — Cité des ponts",
    bg: "photo",
    src: "/images/ahmed-bey-zenith.jpg",
    alt: "Ahmed Bey Zenith, Constantine — lieu des CGEL Scientific Days",
  },
  {
    id: "programme",
    kicker: "Programme",
    title: "CGEL Scientific Days — 3e édition",
    subtitle: "Journées scientifiques du collège",
    accroche: "De l'innovation médicale au soin intelligent",
    date: "Jeudi 1 octobre 2026",
    lieu: "Ahmed Bey Zenith, Constantine",
    chiffre: "Conférences · Ateliers · Échanges",
    bg: "gradient",
  },
];

// Logos partenaires pour marquee — 10 laboratoires (point B)
const partnerLogos = [
  { src: "/logo/logosponsor/astrazeneca.png", alt: "AstraZeneca" },
  { src: "/logo/logosponsor/biopharm.png", alt: "Biopharm" },
  { src: "/logo/logosponsor/dermilyne.png", alt: "Dermilyne" },
  { src: "/logo/logosponsor/krays.png", alt: "Krays" },
  { src: "/logo/logosponsor/mayoly.PNG", alt: "Mayoly" },
  { src: "/logo/logosponsor/nadpharmaclic.png", alt: "Nadpharmaclic" },
  { src: "/logo/logosponsor/repartidis.png", alt: "Repartidis" },
  { src: "/logo/logosponsor/salem.PNG", alt: "Salem" },
  { src: "/logo/logosponsor/merinal.png", alt: "Partenaire" },
  { src: "/logo/logosponsor/yovene.png", alt: "Yovene" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  const handleArrowClick = (action: () => void) => (e: React.MouseEvent<HTMLButtonElement>) => {
    action();
    (e.currentTarget as HTMLButtonElement).blur();
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-white to-[#F8FAFC]">
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="pt-6 lg:pt-8" />

        {/* Header institutionnel sobre */}
          <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#F08444]" />
            <div className="w-14 h-14 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/cgel.svg" alt="CGEL Logo" className="h-14 w-auto" />
            </div>
            <span className="h-px w-8 bg-[#F08444]" />
          </div>
          <p className="mt-3 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Collège des Hépato-Gastroentérologues</p>
          <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]/70">et Endoscopistes Libéraux de l&apos;Est</p>
          <p className="mt-2 text-[12px] leading-5 text-[#475569] font-light max-w-[560px] mx-auto">au service de la gastroentérologie libérale — formation, échange scientifique et représentation de la spécialité.</p>
        </div>

        {/* Carrousel — arrows en dehors de la card (point A1) */}
        <div
          className="relative z-10 mt-8 mx-auto max-w-[980px] group/carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="CGEL Scientific Days — carrousel"
        >
          <div className="absolute -inset-3 bg-gradient-to-br from-[#EEF4FF]/50 via-white/0 to-[#FFF4ED]/30 blur-[1px] pointer-events-none" aria-hidden />
          {/* Wrapper avec padding latéral pour flèches extérieures sur mobile */}
          <div className="relative px-0 sm:px-10 lg:px-12">
            {/* Flèches extérieures — jamais sur le contenu */}
            <button
              type="button"
              onClick={handleArrowClick(prev)}
              onMouseDown={(e) => e.preventDefault()}
              aria-label="Slide précédent"
              className="absolute left-0 sm:left-1 lg:left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white border border-[#E2E8F0] flex items-center justify-center text-[#023DA5] hover:bg-[#F8FAFC] hover:border-[#D6DEE8] shadow-[0_2px_10px_rgba(2,29,58,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023DA5] focus-visible:ring-offset-1 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={handleArrowClick(next)}
              onMouseDown={(e) => e.preventDefault()}
              aria-label="Slide suivant"
              className="absolute right-0 sm:right-1 lg:right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white border border-[#E2E8F0] flex items-center justify-center text-[#023DA5] hover:bg-[#F8FAFC] hover:border-[#D6DEE8] shadow-[0_2px_10px_rgba(2,29,58,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023DA5] focus-visible:ring-offset-1 transition-colors"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={2} />
            </button>

            <div className="relative bg-white border border-[#E2E8F0] p-[6px] sm:p-[8px] shadow-[0_8px_30px_rgba(2,29,58,0.07)] mx-8 sm:mx-0">
              <div className="relative overflow-hidden bg-[#023DA5] min-h-[480px] sm:min-h-[500px] lg:min-h-[520px]">
                {slides.map((slide, idx) => {
                  const isActive = idx === current;
                  const isExpertise = slide.id === "expertise";
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-out ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                      aria-hidden={!isActive}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${idx + 1} sur ${slides.length}`}
                    >
                      {slide.bg === "gradient" ? (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#023DA5] via-[#0A2F7A] to-[#0F1D3A]">
                          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at 75% 30%, rgba(54,192,231,0.18) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(240,132,68,0.12) 0%, transparent 50%)" }} />
                        </div>
                      ) : isExpertise ? (
                        <div className="absolute inset-0 flex flex-col lg:flex-row bg-[#F8FAFC]">
                          <div className="relative z-10 flex-1 flex flex-col justify-center p-5 sm:p-7 lg:p-8 lg:pr-6 order-1 min-w-0">
                            <div className="inline-flex items-center gap-2 self-start">
                              <span className="text-[10px] tracking-[0.16em] uppercase font-bold px-2.5 py-1 bg-[#023DA5] text-white">{slide.kicker}</span>
                              <span className="hidden sm:inline text-[11px] font-medium text-[#64748B]">· 3<sup>e</sup> édition</span>
                            </div>
                            <h2 className="mt-4 font-serif leading-[0.92] tracking-[-0.02em] text-[#023DA5]">
                              <span className="block text-[24px] sm:text-[28px] lg:text-[30px] font-[380]">{slide.title}</span>
                              <span className="block mt-1 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#0F1D3A]/70">{slide.subtitle}</span>
                            </h2>
                            <p className="mt-3 text-[13px] leading-6 font-medium text-[#334155] max-w-[420px]">{slide.accroche}</p>
                            <div className="mt-4 flex flex-col sm:flex-row gap-2">
                              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-[#E2E8F0] text-[#023DA5] text-[12px] font-semibold">
                                <Calendar className="w-3.5 h-3.5" /> {slide.date}
                              </span>
                              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-[#E2E8F0] text-[#023DA5] text-[12px] font-semibold">
                                <MapPin className="w-3.5 h-3.5" /> {slide.lieu}
                              </span>
                            </div>
                            {/* Badge contraste amélioré — fond blanc semi-transparent + bordure visible (point A2) */}
                            <span className="mt-3 inline-flex self-start text-[11px] tracking-wide px-2.5 py-1 bg-white border border-[#D6E2F5] text-[#023DA5] shadow-sm">{slide.chiffre}</span>
                            <div className="mt-5 flex flex-wrap gap-3">
                              <Link href="/registration" className="inline-flex items-center justify-center bg-[#F08444] px-6 py-3 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors">S&apos;inscrire</Link>
                              <Link href="/a-propos" className="inline-flex items-center justify-center bg-white border border-[#023DA5]/20 px-6 py-3 text-[11px] tracking-[0.08em] uppercase font-semibold text-[#023DA5] hover:bg-[#EEF4FF]">Découvrir le collège</Link>
                            </div>
                                          <div className="grid grid-cols-2 gap-px bg-[#E2E8F0] border-t border-[#E2E8F0]">
                <div className="bg-white px-4 py-3 text-center">
                  <p className="text-[12px] font-bold text-[#0F1D3A]">CGEL</p>
                  <p className="text-[10px] tracking-[0.08em] uppercase text-[#64748B]">Organisateur</p>
                </div>
                <div className="bg-[#F8FAFC] px-4 py-3 text-center flex flex-col items-center gap-1">
                  <img src="/logo/uc2.png" alt="Partenariat universitaire — partenaire scientifique du CGEL" className="h-8 w-auto object-contain" loading="lazy" />
                  <p className="text-[10px] tracking-[0.08em] uppercase text-[#64748B]">Partenaire scientifique</p>
                </div>
              </div>
                          </div>
                          <div className="hidden lg:flex relative w-[38%] shrink-0 bg-white border-l border-[#E2E8F0] items-center justify-center p-4 lg:p-5 order-2 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#EEF4FF] to-white" />
                            <div className="relative w-full h-full max-h-[300px] flex items-center justify-center">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={slide.src} alt={slide.alt ?? ""} className="w-full h-full object-contain drop-shadow-[0_8px_24px_rgba(2,61,165,0.12)]" />
                            </div>
                          </div>
                          <div className="lg:hidden relative flex justify-center px-5 pb-5 order-3">
                            <div className="w-full max-w-[200px] bg-white border border-[#E2E8F0] p-2">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={slide.src} alt={slide.alt ?? ""} className="w-full h-auto object-contain" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={slide.src} alt={slide.alt ?? ""} className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D3A]/75 via-[#0F1D3A]/30 to-[#0F1D3A]/10" />
                          <div className="relative z-10 flex flex-col justify-center h-full p-5 sm:p-7 lg:p-8 text-white min-w-0">
                            <div className="inline-flex items-center gap-2 self-start">
                              <span className="text-[10px] tracking-[0.16em] uppercase font-bold px-2.5 py-1 bg-[#F08444] text-white">{slide.kicker}</span>
                              <span className="hidden sm:inline text-[11px] font-medium text-white/80">· 3<sup>e</sup> édition</span>
                            </div>
                            <h2 className="mt-4 font-serif leading-[0.92] tracking-[-0.02em]">
                              <span className="block text-[26px] sm:text-[30px] lg:text-[34px] font-[380]">{slide.title}</span>
                              <span className="block mt-1 text-[11px] tracking-[0.18em] uppercase font-semibold text-white/85">{slide.subtitle}</span>
                            </h2>
                            <p className="mt-3 text-[13px] sm:text-[14px] leading-6 font-medium text-white/90 max-w-[520px]">{slide.accroche}</p>
                            <div className="mt-5 flex flex-col sm:flex-row gap-3">
                              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/15 backdrop-blur border border-white/20 text-white text-[12px] font-semibold">
                                <Calendar className="w-3.5 h-3.5" /> {slide.date}
                              </span>
                              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/15 backdrop-blur border border-white/20 text-white text-[12px] font-semibold">
                                <MapPin className="w-3.5 h-3.5" /> {slide.lieu}
                              </span>
                            </div>
                            {/* Contraste amélioré pour badge sombre (point A2) */}
                            <span className="mt-3 inline-flex self-start text-[11px] tracking-wide px-2.5 py-1 bg-white/20 backdrop-blur border border-white/40 text-white shadow-sm">{slide.chiffre}</span>
                            <div className="mt-6 flex flex-wrap gap-3">
                              <Link href="/registration" className="inline-flex items-center justify-center bg-[#F08444] px-6 py-3 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333]">S&apos;inscrire</Link>
                              <Link href="/a-propos" className="inline-flex items-center justify-center bg-white/10 backdrop-blur border border-white/30 px-6 py-3 text-[11px] tracking-[0.08em] uppercase font-semibold text-white hover:bg-white hover:text-[#023DA5]">Découvrir le collège</Link>
                            </div>
              <div className="grid grid-cols-2 gap-px border-t border-[#E2E8F0]">
                <div className="flex flex-col items-center justify-center gap-1.5 px-4 py-3 text-center">
                  <span className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(15,29,58,0.35)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/cgel.svg" alt="Organisateur" className="h-12 w-auto object-contain" loading="lazy" />
                  </span>
                  <p className="text-[10px] tracking-[0.08em] uppercase text-white">Organisateur</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 px-4 py-3 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo/uc2.png" alt="Partenariat universitaire — partenaire scientifique du CGEL" className="h-8 w-auto object-contain" loading="lazy" />
                  <p className="text-[10px] tracking-[0.08em] uppercase text-white">Partenaire scientifique</p>
                </div>
              </div>
                          </div>
                        </>
                      )}

                        {slide.bg === "gradient" && slide.id !== "programme" && (
                        <div className="relative z-10 flex flex-col justify-center w-full p-5 sm:p-7 lg:p-8 text-white min-w-0">
                          <div className="inline-flex items-center gap-2 self-start">
                            <span className="text-[10px] tracking-[0.16em] uppercase font-bold px-2.5 py-1 bg-[#F08444] text-white">{slide.kicker}</span>
                            <span className="hidden sm:inline text-[11px] font-medium text-white/80">· 3<sup>e</sup> édition</span>
                          </div>
                          <h2 className="mt-4 font-serif leading-[0.92] tracking-[-0.02em]">
                            <span className="block text-[26px] sm:text-[30px] lg:text-[34px] font-[380]">{slide.title}</span>
                            <span className="block mt-1 text-[11px] tracking-[0.18em] uppercase font-semibold text-white/85">{slide.subtitle}</span>
                          </h2>
                          <p className="mt-3 text-[13px] sm:text-[14px] leading-6 font-medium text-white/90 max-w-[520px]">{slide.accroche}</p>
                          <div className="mt-5 flex flex-col sm:flex-row gap-3">
                            <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/15 backdrop-blur border border-white/20 text-white text-[12px] font-semibold">
                              <Calendar className="w-3.5 h-3.5" /> {slide.date}
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/15 backdrop-blur border border-white/20 text-white text-[12px] font-semibold">
                              <MapPin className="w-3.5 h-3.5" /> {slide.lieu}
                            </span>
                          </div>
                          <span className="mt-3 inline-flex self-start text-[11px] tracking-wide px-2.5 py-1 bg-white/20 backdrop-blur border border-white/40 text-white shadow-sm">{slide.chiffre}</span>
                          <div className="mt-6 flex flex-wrap gap-3">
                            <Link href="/registration" className="inline-flex items-center justify-center bg-[#F08444] px-6 py-3 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333]">S&apos;inscrire</Link>
                            <Link href="/a-propos" className="inline-flex items-center justify-center bg-white/10 backdrop-blur border border-white/30 px-6 py-3 text-[11px] tracking-[0.08em] uppercase font-semibold text-white hover:bg-white hover:text-[#023DA5]">Découvrir le collège</Link>
                          </div>
              <div className="grid grid-cols-2 gap-px border-t border-[#E2E8F0]">
                <div className="flex flex-col items-center justify-center gap-1.5 px-4 py-3 text-center">
                  <span className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(15,29,58,0.35)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/cgel.svg" alt="Organisateur" className="h-12 w-auto object-contain" loading="lazy" />
                  </span>
                  <p className="text-[10px] tracking-[0.08em] uppercase text-white">Organisateur</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 px-4 py-3 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo/uc2.png" alt="Partenariat universitaire — partenaire scientifique du CGEL" className="h-8 w-auto object-contain" loading="lazy" />
                  <p className="text-[10px] tracking-[0.08em] uppercase text-white">Partenaire scientifique</p>
                </div>
              </div>
                        </div>
                      )}
                      {/* Slide PROGRAMME — redesigned for no clipping and clear hierarchy */}
                      {slide.id === "programme" && (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#023DA5] via-[#0A2F7A] to-[#0F1D3A]">
                          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at 75% 30%, rgba(54,192,231,0.18) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(240,132,68,0.12) 0%, transparent 50%)" }} />
                        </div>
                      )}
                      {slide.id === "programme" && (
                        <div className="relative z-10 flex flex-col lg:flex-row h-full min-w-0 overflow-y-auto scrollbar-thin">
                          {/* Poster — top on mobile, left on desktop */}
                          <div className="w-full lg:w-[40%] flex items-center justify-center p-5 sm:p-6 lg:p-7 shrink-0">
                            <div className="relative bg-white p-2.5 sm:p-3 border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.25)] w-full max-w-[300px] lg:max-w-[320px]">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src="/images/gcel-poster.png" alt="Affiche officielle CGEL Scientific Days — 3e édition" className="w-full h-auto object-contain" />
                            </div>
                          </div>
                          {/* Info panel — clear vertical rhythm */}
                          <div className="flex-1 flex flex-col justify-center p-5 sm:p-6 lg:p-7 lg:pl-6 text-white min-w-0 gap-3.5">
                            {/* Badge row — with top breathing room to avoid clipping */}
                            <div className="flex flex-wrap items-center gap-2 pt-1">
                              <span className="text-[10px] tracking-[0.16em] uppercase font-bold px-2.5 py-1 bg-[#F08444] text-white">{slide.kicker}</span>
                              <span className="text-[11px] font-medium text-white/80">· 3<sup>e</sup> édition</span>
                            </div>
                            {/* Title block */}
                            <div>
                              <h2 className="font-serif leading-[0.92] tracking-[-0.02em]">
                                <span className="block text-[24px] sm:text-[28px] lg:text-[30px] font-[380]">{slide.title}</span>
                                <span className="block mt-2 text-[11px] tracking-[0.18em] uppercase font-semibold text-white/85">{slide.subtitle}</span>
                              </h2>
                              <p className="mt-3 text-[13px] leading-6 font-medium text-white/90 max-w-[440px]">{slide.accroche}</p>
                            </div>
                            {/* Meta pills — date & lieu */}
                            <div className="flex flex-col sm:flex-row gap-2">
                              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/15 backdrop-blur border border-white/20 text-white text-[12px] font-semibold">
                                <Calendar className="w-3.5 h-3.5 shrink-0" /> {slide.date}
                              </span>
                              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/15 backdrop-blur border border-white/20 text-white text-[12px] font-semibold">
                                <MapPin className="w-3.5 h-3.5 shrink-0" /> {slide.lieu}
                              </span>
                            </div>
                            {/* Tag */}
                            <span className="inline-flex self-start text-[11px] tracking-wide px-2.5 py-1 bg-white/20 backdrop-blur border border-white/40 text-white shadow-sm">{slide.chiffre}</span>
                            {/* CTAs */}
                            <div className="flex flex-wrap gap-3 pt-1">
                              <Link href="/registration" className="inline-flex items-center justify-center bg-[#F08444] px-6 py-3 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors">S&apos;inscrire</Link>
                              <Link href="/a-propos" className="inline-flex items-center justify-center bg-white/10 backdrop-blur border border-white/30 px-6 py-3 text-[11px] tracking-[0.08em] uppercase font-semibold text-white hover:bg-white hover:text-[#023DA5] transition-colors">Découvrir le collège</Link>
                            </div>
                            {/* Organizer / Sponsor — separated with divider and proper spacing */}
                            <div className="mt-2 pt-4 border-t border-white/15 grid grid-cols-2 gap-4">
                              <div className="flex flex-col items-center justify-center gap-2 text-center">
                                <span className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(15,29,58,0.35)] shrink-0">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src="/cgel.svg" alt="CGEL — Organisateur" className="h-12 w-auto object-contain" loading="lazy" />
                                </span>
                                <p className="text-[11px] font-bold tracking-[0.06em] text-white">CGEL</p>
                                <p className="text-[10px] tracking-[0.08em] uppercase text-white/70 -mt-1">Organisateur</p>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-2 text-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/logo/uc2.png" alt="Université Constantine 2 Abdelhamid Mehri — partenaire scientifique" className="h-8 w-auto object-contain" loading="lazy" />
                                <p className="text-[10px] tracking-[0.08em] uppercase text-white/70">Partenaire scientifique</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots */}
            <div className="mt-3 flex items-center justify-center gap-2">
              {slides.map((_, idx) => (
                <button key={idx} type="button" onClick={() => setCurrent(idx)} onMouseDown={(e) => e.preventDefault()} aria-label={`Aller au slide ${idx + 1}`} aria-current={idx === current} className={`h-[5px] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023DA5] ${idx === current ? "w-8 bg-[#023DA5]" : "w-5 bg-[#D6DEE8] hover:bg-[#B0BECF]"}`} />
              ))}
              <span className="ml-3 text-[10px] tracking-[0.08em] uppercase font-medium text-[#64748B]">{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        {/* Bandeau logos défilant — full-width edge-to-edge, larger logos */}
        <div className="relative z-10 mt-10 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="text-center mb-4">
            <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[#64748B]">Ils soutiennent le collège</p>
            <div className="mx-auto mt-1.5 h-px w-12 bg-[#E2E8F0]" />
          </div>
          <div className="relative overflow-hidden border-y border-[#E2E8F0] bg-white py-5 sm:py-6 lg:py-7 marquee-container">
            {/* Masques dégradés bords (fondu) */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" aria-hidden />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" aria-hidden />
            <div className="flex w-max marquee-track">
              {/* Deux copies pour boucle continue */}
              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <div key={`${logo.src}-${i}`} className="flex items-center justify-center shrink-0 mx-5 sm:mx-7 lg:mx-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={logo.alt} className="h-10 sm:h-12 lg:h-14 w-auto max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] object-contain opacity-90 hover:opacity-100 transition-opacity" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

       

      </div>

      {/* Styles marquee — CSS pur, pas de lib */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 36s linear infinite;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
