import Link from "next/link";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import ExpertCard from "@/components/ExpertCard";
import { featuredExperts, experts } from "@/data/experts";
import { partners } from "@/data/partners";
import { programItems } from "@/data/program";
import { TechnicalNetworkBackground, GCELCurvedRibbons, SectionWaveDivider } from "@/components/PosterGraphics";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionWaveDivider />
      <Countdown />

      {/* ABOUT GCEL — poster pale technical */}
      <section className="relative bg-white border-b border-[#E8EDF3] overflow-hidden">
        <TechnicalNetworkBackground />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-0">
            {/* Left — luxe intro */}
            <div className="py-12 lg:py-16 xl:py-20 lg:pr-10 xl:pr-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#E8EDF3]">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#F08444]" />
                <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">About GCEL</span>
              </div>

              <h2 className="mt-6 font-serif leading-[0.92] tracking-[-0.03em] text-[#0F1D3A] luxe-serif">
                <span className="block text-[28px] sm:text-[32px] lg:text-[36px] font-[380]">A SCIENTIFIC</span>
                <span className="block text-[28px] sm:text-[32px] lg:text-[36px] font-[380]">GATHERING</span>
                <span className="block text-[12px] tracking-[0.18em] uppercase font-semibold text-[#94A3B8] mt-3 font-sans">At the crossroads of</span>
                <span className="block text-[30px] sm:text-[36px] lg:text-[40px] font-normal tracking-[-0.02em] mt-1">
                  MEDICINE <span className="font-light italic text-[#023DA5]">&</span> INTELLIGENCE
                </span>
              </h2>

              <div className="mt-8 space-y-4 text-[14px] leading-7 text-[#475569] max-w-[520px]">
                <p>
                  <span className="font-semibold text-[#0F1D3A]">GCEL — 3rd Edition Scientific Days</span> brings together clinicians,
                  researchers and institutions to examine how{" "}
                  <span className="text-[#0F1D3A] font-medium">Artificial Intelligence, Smart Health and digital medicine</span> are extending
                  what is possible in gastroenterology.
                </p>
                <p className="text-[#64748B] font-light">
                  Organized by <span className="font-semibold text-[#0F1D3A]">GCEL</span> with{" "}
                  <span className="font-semibold text-[#0F1D3A]">MISC Laboratory</span> as Scientific Partner — a rigorous, educational congress
                  for the medical and scientific community.
                </p>
              </div>

              <p className="mt-7 font-serif italic text-[15px] leading-5 text-[#0F1D3A] max-w-[520px] border-l-[2.5px] border-[#F08444]/30 pl-4">
                “From Medical Innovation to Intelligent Care.”
              </p>
            </div>

            {/* Right — luxe photography with mat */}
            <div className="relative flex flex-col justify-center py-8 lg:py-10 lg:pl-10 xl:pl-12">
              <div className="relative overflow-hidden bg-[#F1F5F9] border border-[#E8EDF3] p-[8px] shadow-[0_8px_30px_rgba(2,29,58,0.06)]">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                    alt="Gastroenterology team reviewing endoscopic imagery"
                    className="w-full h-[380px] lg:h-[420px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none" />
                  <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-[2px] border-t border-[#E8EDF3] px-4 py-2.5 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[#023DA5]">Constantine · 01 Oct 2026</span>
                    <span className="text-[10px] tracking-wide text-[#94A3B8]">Ahmed Bey Zenith</span>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[11px] leading-4 text-[#94A3B8] font-light text-center">Editorial clinical environment — Constantine, City of Bridges.</p>
            </div>
          </div>

          {/* Why this edition matters — three icon-led mini-cards luxe */}
          <div className="grid md:grid-cols-3 gap-px bg-[#E8EDF3] border border-[#E8EDF3] -mx-4 sm:mx-0 shadow-sm">
            {[
              {
                k: "01",
                t: "Evolving practice",
                d: "Earlier, more precise diagnosis supported by AI and data-driven tools.",
                icon: "◈",
              },
              {
                k: "02",
                t: "Grounded education",
                d: "Sessions rooted in clinical practice, not hype — scientific and practical.",
                icon: "◎",
              },
              {
                k: "03",
                t: "Human + technology",
                d: "Scientific rigor with the human core of care intact — intelligence in service of patients.",
                icon: "⬡",
              },
            ].map((item) => (
              <div key={item.k} className="relative bg-white px-6 py-6 flex gap-4 overflow-hidden group hover:bg-[#FCFDFE] transition-colors">
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#F08444] to-transparent opacity-60" />
                <div className="shrink-0 w-9 h-9 bg-[#0F1D3A] text-white flex items-center justify-center text-[13px] font-bold shadow-sm group-hover:bg-[#023DA5] transition-colors">{item.icon}</div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] tracking-[0.14em] font-semibold text-[#F08444]">{item.k}</span>
                    <span className="h-px w-6 bg-[#E8EDF3]" />
                  </div>
                  <h3 className="mt-1 text-[13px] font-bold text-[#0F1D3A] tracking-[-0.01em]">{item.t}</h3>
                  <p className="mt-1.5 text-[12px] leading-5 text-[#64748B] font-light">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-4" />
        </div>
        <GCELCurvedRibbons variant="divider" className="opacity-80" />
      </section>

      {/* CONSTANTINE — poster pale, not dark */}
      <section className="relative bg-white overflow-hidden border-b border-[#E8EDF3]">
        <TechnicalNetworkBackground />
        <GCELCurvedRibbons variant="divider" className="absolute top-0 inset-x-0 opacity-50" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-10 items-center">
            <div className="flex gap-4">
              <span className="hidden sm:block h-auto w-px bg-gradient-to-b from-[#F08444] via-[#F08444]/30 to-transparent shrink-0" />
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#36C0E7]" />
                  <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Sense of Place</span>
                </div>
                <h2 className="mt-3 font-serif text-[26px] lg:text-[30px] leading-[0.95] tracking-[-0.02em] text-[#023DA5] luxe-serif">
                  Constantine — <span className="font-light italic text-[#0F1D3A]">City of Bridges</span>
                </h2>
                <p className="mt-3 text-[13px] leading-6 text-[#475569] max-w-[520px] font-light">
                  Perched above a dramatic gorge, Constantine has connected cultures for centuries — a fitting host for a congress about
                  connecting medicine and intelligence. The 2026 edition convenes at the Ahmed Bey Zenith, the city&apos;s landmark venue for
                  international gatherings.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                  <span className="border border-[#E8EDF3] bg-[#EEF4FF] px-2.5 py-1 text-[#023DA5]">Gorge · Sidi M&apos;Cid · El-Kantara</span>
                  <span className="border border-[#E8EDF3] bg-white px-2.5 py-1 text-[#64748B]">Ahmed Bey Zenith · Constantine</span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden border border-[#E8EDF3] bg-white p-4 flex items-center gap-4 shadow-[0_8px_24px_rgba(2,61,165,0.06)]">
              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop"
                alt="Ahmed Bey Zenith venue — Constantine (editorial)"
                className="w-[112px] h-[84px] object-cover border border-[#E8EDF3] shrink-0"
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[#023DA5]">Venue</p>
                <p className="text-[13px] font-semibold text-[#0F1D3A] leading-4 tracking-[-0.01em]">Ahmed Bey Zenith</p>
                <p className="text-[11px] text-[#64748B] font-light">Constantine, Algeria — 01 Oct 2026</p>
                <Link href="/venue" className="mt-2 inline-flex text-[11px] tracking-[0.06em] uppercase font-semibold text-[#023DA5] border-b border-[#023DA5]/20 pb-0.5 hover:border-[#023DA5]">
                  Explore venue →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <SectionWaveDivider />
      </section>

      {/* THE THEME — poster pale technical */}
      <section className="relative bg-white overflow-hidden border-b border-[#E8EDF3]">
        <TechnicalNetworkBackground />
        <GCELCurvedRibbons variant="divider" className="absolute top-0 inset-x-0 opacity-60" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-[1.05fr_0.9fr] gap-10 lg:gap-14 items-center min-h-[56vh]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#F08444]" />
                <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Main Theme — 2026</span>
              </div>

              <h2 className="mt-6 font-serif leading-[0.88] tracking-[-0.03em] luxe-serif">
                <span className="block text-[32px] sm:text-[40px] lg:text-[46px] font-[380] text-[#0F1D3A]">GASTROENTEROLOGY</span>
                <span className="block text-[40px] sm:text-[56px] lg:text-[64px] font-extralight text-[#E2E8F0] leading-none my-1">×</span>
                <span className="block text-[30px] sm:text-[38px] lg:text-[42px] font-light italic text-[#023DA5]">ARTIFICIAL INTELLIGENCE</span>
                <span className="block text-[40px] sm:text-[56px] lg:text-[64px] font-extralight text-[#E2E8F0] leading-none my-1">×</span>
                <span className="block text-[32px] sm:text-[40px] lg:text-[46px] font-[380] text-[#0F1D3A]">SMART HEALTH</span>
              </h2>

              <p className="mt-6 text-[13px] leading-6 text-[#475569] max-w-[480px] font-light">
                How emerging technologies complement clinical expertise — strengthening diagnosis, care pathways and patient outcomes without replacing the human core of medicine.
              </p>
              <p className="mt-4 text-[11px] leading-4 text-white/35 border-l border-white/15 pl-3 max-w-[480px] font-light">
                Educational framing only.
              </p>
            </div>

            <div className="border border-[#E8EDF3] bg-[#EEF4FF] shadow-sm">
              <div className="px-5 py-3 border-b border-[#D6E2F5] bg-white/70 flex items-center justify-between">
                <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[#023DA5]">Core topics</p>
                <span className="h-px w-8 bg-[#E8EDF3] hidden sm:block" />
              </div>
              <div className="divide-y divide-[#D6E2F5]">
                {[
                  ["01", "AI-assisted diagnosis", "Decision support · pattern recognition"],
                  ["02", "Intelligent endoscopy", "Enhanced visualisation · guidance"],
                  ["03", "Smart health & digital tools", "Connected care · monitoring"],
                  ["04", "Personalized medicine", "Data-informed · patient-centered"],
                  ["05", "Medical imaging", "Imaging + AI convergence"],
                  ["06", "Future healthcare", "Responsible innovation"],
                ].map(([n, t, d]) => (
                  <div key={n} className="grid grid-cols-[44px_1fr] gap-3 px-5 py-4 hover:bg-white transition-colors">
                    <span className="text-[11px] tracking-[0.12em] font-semibold text-[#F08444]">{n}</span>
                    <div>
                      <p className="text-[13px] font-semibold text-[#0F1D3A] tracking-[-0.01em]">{t}</p>
                      <p className="text-[11px] text-[#64748B] font-light">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-14 grid lg:grid-cols-[1.25fr_0.75fr] gap-0 border border-[#E8EDF3] overflow-hidden bg-white shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop"
              alt="Modern endoscopy and medical imaging equipment — editorial"
              className="h-[300px] lg:h-[360px] w-full object-cover"
              loading="lazy"
            />
            <div className="px-6 lg:px-8 py-8 flex flex-col justify-center bg-white">
              <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[#023DA5]">Medicine × Technology</p>
              <p className="mt-2 font-serif text-[20px] leading-6 text-[#0F1D3A] luxe-serif">Technology in service of clinical excellence.</p>
              <div className="mt-4 h-px bg-gradient-to-r from-[#E8EDF3] to-transparent" />
              <div className="mt-4 flex gap-2 text-[11px]">
                <span className="border border-[#E8EDF3] px-2.5 py-1.5 font-medium text-[#0F1D3A] bg-[#FCFDFE]">Gastroenterology</span>
                <span className="bg-[#023DA5] text-white px-2 py-1.5 font-bold">+</span>
                <span className="border border-[#E8EDF3] px-2.5 py-1.5 font-medium text-[#0F1D3A] bg-[#FCFDFE]">AI & Smart Health</span>
              </div>
            </div>
          </div>
        </div>
        <GCELCurvedRibbons variant="divider" className="opacity-70" />
      </section>

      <SectionWaveDivider />

      {/* WHY ATTEND — poster pale */}
      <section className="relative bg-white border-b border-[#E8EDF3] overflow-hidden">
        <TechnicalNetworkBackground />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#F08444]" />
                <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Why Attend</span>
              </div>
              <h2 className="mt-4 font-serif text-[28px] lg:text-[34px] leading-[0.95] tracking-[-0.02em] text-[#0F1D3A] luxe-serif">Why attend GCEL?</h2>
              <p className="mt-2 text-[13px] leading-5 text-[#475569] font-light">A focused, rigorous and practical congress.</p>
            </div>
            <p className="text-[11px] tracking-wide text-[#94A3B8] lg:text-right font-light">For gastroenterologists · researchers · healthcare professionals</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E8EDF3] bg-white shadow-sm">
            {[
              { n: "01", t: "Scientific Exchange", d: "Current insights and clinical perspectives from specialists and researchers." },
              { n: "02", t: "AI & Innovation", d: "How AI is concretely influencing gastroenterology practice today." },
              { n: "03", t: "Clinical Perspectives", d: "Evolving approaches in diagnosis, care pathways and management." },
              { n: "04", t: "Networking", d: "Connect with professionals, institutions and partners across the field." },
            ].map((item) => (
              <div key={item.n} className="relative border-r last:border-r-0 border-[#E8EDF3] px-6 py-8 lg:py-10 bg-white hover:bg-[#FCFDFE] transition-colors overflow-hidden border-b lg:border-b-0">
                <div className="absolute top-0 inset-x-0 h-[2px] bg-[#F08444] opacity-60" />
                <div className="font-serif text-[48px] leading-none tracking-[-0.05em] text-[#EEF4FF] font-extralight">{item.n}</div>
                <div className="mt-3 h-px w-8 bg-[#F08444]/50" />
                <h3 className="mt-4 text-[13px] font-bold tracking-[-0.01em] text-[#023DA5]">{item.t}</h3>
                <p className="mt-2 text-[12px] leading-5 text-[#475569] font-light">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
        <GCELCurvedRibbons variant="divider" className="opacity-60" />
      </section>

      {/* EXPERTS — poster pale */}
      <section className="relative bg-[#F8FAFC] border-b border-[#E8EDF3] overflow-hidden">
        <TechnicalNetworkBackground />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#F08444]" />
                <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Experts</span>
              </div>
              <h2 className="mt-4 font-serif text-[28px] lg:text-[34px] leading-[0.95] tracking-[-0.02em] text-[#0F1D3A] luxe-serif">Meet the Experts</h2>
              <p className="mt-2 text-[13px] leading-5 text-[#475569] max-w-[520px] font-light">
                Leading voices in gastroenterology and AI-driven health — programme finalised September 2026.
              </p>
            </div>
            <Link href="/experts" className="hidden lg:inline-flex text-[11px] tracking-[0.10em] uppercase font-semibold text-[#023DA5] border-b border-[#023DA5] pb-1 hover:text-[#0F1D3A] hover:border-[#0F1D3A]">
              View all {experts.length} experts
            </Link>
          </div>

          <div className="mt-10 grid lg:grid-cols-[1.15fr_1.85fr] gap-3 lg:gap-4">
            <Link href={`/experts/${featuredExperts[0].slug}`} className="group relative overflow-hidden bg-white border border-[#E8EDF3] flex flex-col hover:border-[#D6DEE8] hover:shadow-[0_12px_32px_rgba(2,29,58,0.08)] transition-all">
              <div className="aspect-[4/4.6] lg:aspect-[4/4.8] overflow-hidden relative bg-[#023DA5] flex items-center justify-center p-6">
                <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                <div className="absolute inset-[8px] border border-white/10 pointer-events-none" />
                <div className="relative flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-[96px] h-[96px] rounded-full bg-white flex items-center justify-center border-[3px] border-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                      <span className="font-serif text-[26px] font-bold tracking-[-0.02em] text-[#023DA5]">GA</span>
                    </div>
                    <div className="absolute -inset-[5px] rounded-full border border-white/20 pointer-events-none" />
                    <div className="absolute -inset-[9px] rounded-full border border-white/8 pointer-events-none" />
                  </div>
                  <span className="h-px w-10 bg-white/20" />
                  <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-white/65 text-center">Gastroenterology</span>
                </div>
                <span className="absolute bottom-3 right-3 w-2 h-2 bg-[#F08444] border border-white/20" />
              </div>
              <div className="absolute top-0 left-0 max-w-[88%] bg-white border-b border-r border-[#E8EDF3] px-2.5 py-1.5 overflow-hidden shadow-sm">
                <span className="block text-[10px] tracking-[0.08em] uppercase font-semibold text-[#023DA5] truncate">{featuredExperts[0].specialty}</span>
              </div>
              <div className="p-4 bg-white border-t border-[#E8EDF3] mt-auto">
                <h3 className="text-[13px] font-bold text-[#0F1D3A] truncate">{featuredExperts[0].name}</h3>
                <p className="text-[11px] font-medium text-[#023DA5] truncate">{featuredExperts[0].title}</p>
                <p className="text-[11px] text-[#64748B] truncate font-light">{featuredExperts[0].institution} · Featured</p>
              </div>
            </Link>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-4">
              {featuredExperts.slice(1, 6).map((e) => (
                <ExpertCard key={e.slug} expert={e} />
              ))}
              {featuredExperts.length < 6 && <ExpertCard expert={featuredExperts[1]} />}
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#E8EDF3] bg-white px-4 py-3 shadow-sm">
            <p className="text-[12px] text-[#475569] font-light">Speakers to be announced — more names added weekly.</p>
            <Link href="/experts" className="text-[11px] tracking-[0.10em] uppercase font-semibold text-[#023DA5] hover:underline">
              Browse all profiles →
            </Link>
          </div>
        </div>
        <GCELCurvedRibbons variant="divider" className="opacity-60" />
      </section>

      <SectionWaveDivider />

      {/* PROGRAM — poster pale */}
      <section className="relative bg-white border-b border-[#E8EDF3] overflow-hidden">
        <TechnicalNetworkBackground />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-[380px_1fr] gap-8 lg:gap-12">
            <div className="lg:sticky lg:top-[84px] self-start">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#F08444]" />
                <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Scientific Program</span>
              </div>
              <h2 className="mt-4 font-serif text-[28px] lg:text-[32px] leading-[0.95] tracking-[-0.02em] text-[#0F1D3A] luxe-serif">
                A focused,
                <br />
                one-day program
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-[#475569] font-light">
                Programme to be finalised — sessions and speakers updated as confirmed. The official PDF will be linked directly from the full programme page.
              </p>
              <Link
                href="/program"
                className="mt-6 hidden lg:inline-flex border border-[#023DA5] px-5 py-2.5 text-[11px] tracking-[0.10em] uppercase font-semibold text-[#023DA5] hover:bg-[#023DA5] hover:text-white transition-colors"
              >
                View full program
              </Link>
            </div>

            <div className="border border-[#0F1D3A] shadow-[0_8px_24px_rgba(2,29,58,0.06)]">
              <div className="hidden lg:grid grid-cols-[96px_1fr_150px] gap-0 border-b border-[#0F1D3A] bg-[#0F1D3A] text-white px-6 py-3">
                <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-white/60">Time</span>
                <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-white/60">Session</span>
                <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-white/60">Topic</span>
              </div>
              <div className="divide-y divide-[#E8EDF3]">
                {programItems.slice(0, 6).map((item) => (
                  <div key={item.id} className="grid lg:grid-cols-[96px_1fr_150px] gap-2 lg:gap-0 px-4 lg:px-6 py-4 hover:bg-[#FCFDFE] transition-colors">
                    <span className="text-[12px] font-semibold tracking-wide text-[#023DA5] tabular-nums">
                      {item.time}
                      {item.endTime ? ` — ${item.endTime}` : ""}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold leading-5 text-[#0F1D3A] tracking-[-0.01em]">{item.title}</p>
                      <p className="text-[11px] text-[#64748B] mt-0.5 font-light">
                        {item.session} · {item.type}
                        {item.speaker ? ` · ${item.speaker}` : ""}
                      </p>
                    </div>
                    <span className="text-[11px] text-[#475569] lg:pl-4 lg:border-l border-[#E8EDF3] font-light">{item.topic}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#0F1D3A] bg-[#F8FAFC] px-4 lg:px-6 py-3 flex items-center justify-between">
                <p className="text-[11px] text-[#64748B] font-light">Indicative · Scientific committee</p>
                <Link href="/program" className="text-[11px] tracking-[0.08em] uppercase font-semibold text-[#023DA5] hover:underline lg:hidden">
                  View full program →
                </Link>
                <span className="hidden lg:block text-[11px] text-[#94A3B8]">PDF coming soon</span>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-14 relative border border-[#E8EDF3] bg-[#EEF4FF] px-6 lg:px-10 py-8 lg:py-9 shadow-sm overflow-hidden">
            <GCELCurvedRibbons variant="divider" className="absolute top-0 inset-x-0 opacity-40" />
            <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[#023DA5]">Ready to join the conversation?</p>
                <h3 className="mt-2 font-serif text-[20px] lg:text-[24px] leading-none tracking-[-0.01em] text-[#0F1D3A] luxe-serif">GCEL — 3rd Edition Scientific Days</h3>
                <p className="mt-1 text-[12px] tracking-wide text-[#64748B] font-light">01 OCTOBER 2026 · CONSTANTINE</p>
              </div>
              <Link
                href="/registration"
                className="shrink-0 inline-flex items-center justify-center bg-[#F08444] px-7 py-3.5 text-[11px] tracking-[0.10em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors shadow-[0_4px_14px_rgba(240,132,68,0.18)]"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS — poster pale */}
      <section className="relative bg-white border-b border-[#E8EDF3] overflow-hidden">
        <TechnicalNetworkBackground />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="text-center max-w-[560px] mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#F08444]/40" />
              <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Partners</span>
              <span className="h-px w-8 bg-[#F08444]/40" />
            </div>
            <h2 className="mt-4 font-serif text-[26px] lg:text-[30px] leading-[0.95] tracking-[-0.02em] text-[#0F1D3A] luxe-serif">Our Sponsors & Partners</h2>
            <p className="mt-3 text-[13px] leading-5 text-[#475569] font-light">All partners treated equally — no hierarchy. A calm, institutional wall.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[#E8EDF3] border border-[#E8EDF3] max-w-[960px] mx-auto shadow-sm">
            {partners.slice(0, 8).map((p) => (
              <Link
                key={p.slug}
                href={`/partners/${p.slug}`}
                className="bg-white px-5 py-10 flex flex-col items-center justify-center text-center hover:bg-[#FCFDFE] transition-colors group min-h-[132px]"
              >
                <div className="w-10 h-10 border border-[#E8EDF3] flex items-center justify-center text-[#94A3B8] group-hover:border-[#F08444]/40 group-hover:text-[#023DA5] transition-colors">
                  <span className="text-[11px] font-bold tracking-[0.08em]">GCEL</span>
                </div>
                <p className="mt-3 text-[12px] font-semibold text-[#0F1D3A] tracking-[-0.01em]">{p.name}</p>
                <p className="text-[11px] text-[#94A3B8] font-light">Partner</p>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-center text-[11px] text-[#94A3B8] font-light">Partnerships for the 2026 edition will be announced here.</p>
        </div>
      </section>

      {/* VENUE — poster pale */}
      <section className="relative bg-white overflow-hidden border-b border-[#E8EDF3]">
        <TechnicalNetworkBackground />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-[1.05fr_0.85fr] gap-0 border border-[#E8EDF3] bg-white shadow-sm overflow-hidden">
            <div className="relative min-h-[360px] lg:min-h-[420px] overflow-hidden bg-[#F8FAFC] p-[8px]">
              <div className="relative w-full h-full overflow-hidden border border-[#E8EDF3]">
                <img
                  src="/images/ahmed-bey-zenith.jpg"
                  alt="Ahmed Bey Zenith — Constantine"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-[1px] border-t border-[#E8EDF3] px-4 py-2.5 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#023DA5]">Ahmed Bey Zenith · Constantine</span>
                  <span className="text-[10px] tracking-[0.08em] uppercase font-semibold text-[#64748B] border border-[#E8EDF3] px-2 py-1 bg-[#F8FAFC]">Venue</span>
                </div>
              </div>
            </div>

            <div className="px-6 lg:px-8 py-8 lg:py-10 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#F08444]" />
                <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#023DA5]">Venue</span>
              </div>
              <h2 className="mt-4 font-serif text-[28px] lg:text-[32px] leading-[0.95] tracking-[-0.02em] text-[#023DA5] luxe-serif">
                Ahmed Bey Zenith,
                <br />
                <span className="text-[#0F1D3A]">Constantine</span>
              </h2>
              <p className="mt-2 text-[11px] tracking-[0.14em] uppercase font-semibold text-[#94A3B8]">Constantine, Algeria — City of Bridges</p>

              <div className="mt-6 space-y-0 border border-[#E8EDF3]">
                <div className="grid grid-cols-[96px_1fr] border-b border-[#E8EDF3]">
                  <span className="px-4 py-3 text-[10px] tracking-[0.14em] uppercase font-semibold text-[#64748B] bg-[#F8FAFC] border-r border-[#E8EDF3]">Location</span>
                  <span className="px-4 py-3 text-[13px] text-[#0F1D3A]">Ahmed Bey Zenith, Constantine, Algeria</span>
                </div>
                <div className="grid grid-cols-[96px_1fr] border-b border-[#E8EDF3]">
                  <span className="px-4 py-3 text-[10px] tracking-[0.14em] uppercase font-semibold text-[#64748B] bg-[#F8FAFC] border-r border-[#E8EDF3]">Date</span>
                  <span className="px-4 py-3 text-[13px] text-[#0F1D3A]">01 October 2026 — Full day</span>
                </div>
                <div className="grid grid-cols-[96px_1fr]">
                  <span className="px-4 py-3 text-[10px] tracking-[0.14em] uppercase font-semibold text-[#64748B] bg-[#F8FAFC] border-r border-[#E8EDF3]">Note</span>
                  <span className="px-4 py-3 text-[12px] leading-5 text-[#475569] font-light">Details and directions updated as provided.</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/venue" className="inline-flex items-center justify-center bg-[#023DA5] px-5 py-2.5 text-[11px] tracking-[0.10em] uppercase font-semibold text-white hover:bg-[#012A7A] shadow-sm">
                  Explore venue
                </Link>
                <a
                  href="https://maps.google.com/?q=Ahmed+Bey+Zenith+Constantine+Algeria"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-[#E8EDF3] bg-white px-5 py-2.5 text-[11px] tracking-[0.10em] uppercase font-semibold text-[#023DA5] hover:bg-[#F8FAFC]"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
        <GCELCurvedRibbons variant="divider" className="opacity-50" />
      </section>

      {/* Organizers — provided assets */}
      <section className="relative bg-[#F8FAFC] border-b border-[#E8EDF3] overflow-hidden">
        <TechnicalNetworkBackground />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-[11px] tracking-[0.16em] uppercase font-semibold text-[#94A3B8]">Organized by</p>
          <div className="mt-5 grid grid-cols-2 gap-px bg-[#E8EDF3] border border-[#E8EDF3] max-w-[560px] mx-auto shadow-sm">
            <div className="bg-white px-6 py-6 flex flex-col items-center justify-center">
              <img src="/images/orgniser1.png" alt="CGEL — Organizer" className="h-12 w-auto object-contain" />
              <p className="mt-3 text-[11px] tracking-[0.08em] uppercase font-semibold text-[#023DA5]">CGEL</p>
              <p className="text-[10px] tracking-[0.08em] uppercase text-[#94A3B8]">Organizer</p>
            </div>
            <div className="bg-white px-6 py-6 flex flex-col items-center justify-center">
              <img src="/images/orgniser2.png" alt="MISC Laboratory — Scientific Partner" className="h-12 w-auto object-contain" />
              <p className="mt-3 text-[11px] tracking-[0.08em] uppercase font-semibold text-[#023DA5]">MISC Laboratory</p>
              <p className="text-[10px] tracking-[0.08em] uppercase text-[#94A3B8]">Scientific Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — poster wave */}
      <section className="relative bg-[#023DA5] text-white overflow-hidden">
        <GCELCurvedRibbons variant="divider" className="absolute top-0 inset-x-0 opacity-90 z-10" />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2000&auto=format&fit=crop"
            alt="International congress audience — editorial"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.09]"
          />
          <div className="absolute inset-0 bg-[#023DA5]/88" />
          <div className="absolute inset-[10px] lg:inset-[14px] border border-white/[0.07] pointer-events-none" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-[780px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#F08444]/60" />
              <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-white/55">Final Call</span>
            </div>
            <h2 className="mt-6 font-serif leading-[0.86] tracking-[-0.03em] luxe-serif">
              <span className="block text-[34px] sm:text-[44px] lg:text-[52px] font-[380]">BE PART OF THE FUTURE</span>
              <span className="block text-[34px] sm:text-[44px] lg:text-[52px] font-light italic text-[#9DD9EE]">OF GASTROENTEROLOGY.</span>
            </h2>
            <p className="mt-4 text-[11px] tracking-[0.16em] uppercase font-semibold text-white/40">
              From Medical Innovation <span className="mx-2 text-white/20">—</span> To Intelligent Care.
            </p>
            <p className="mt-4 text-[13px] leading-6 text-white/65 max-w-[520px] font-light">
              Join GCEL — 3rd Edition Scientific Days. 01 October 2026 · Ahmed Bey Zenith, Constantine, Algeria.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/registration" className="inline-flex items-center justify-center bg-[#F08444] px-7 py-3.5 text-[11px] tracking-[0.10em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors shadow-[0_6px_20px_rgba(240,132,68,0.22)]">
                Register Now
              </Link>
              <Link href="/program" className="inline-flex items-center justify-center border border-white/25 px-7 py-3.5 text-[11px] tracking-[0.10em] uppercase font-semibold text-white hover:bg-white hover:text-[#023DA5] transition-colors backdrop-blur-[1px]">
                Explore the program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
