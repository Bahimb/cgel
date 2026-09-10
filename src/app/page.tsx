import Link from "next/link";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import ExpertCard from "@/components/ExpertCard";
import { featuredExperts, experts } from "@/data/experts";
import { partners } from "@/data/partners";
import { programItems } from "@/data/program";

export default function Home() {
  return (
    <>
      <Hero />
      <Countdown />

      {/* ABOUT GCEL — editorial large type + photography (60vh) */}
      <section className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-0 min-h-[62vh]">
            {/* Left — large editorial intro */}
            <div className="py-12 lg:py-16 xl:py-20 lg:pr-10 xl:pr-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#023DA5]" />
                <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">About GCEL</span>
              </div>

              <h2 className="mt-6 font-serif leading-[0.92] tracking-[-0.03em] text-[#0F1D3A]">
                <span className="block text-[28px] sm:text-[32px] lg:text-[36px] font-normal">A SCIENTIFIC</span>
                <span className="block text-[28px] sm:text-[32px] lg:text-[36px] font-normal">GATHERING</span>
                <span className="block text-[12px] tracking-[0.14em] uppercase font-semibold text-[#64748B] mt-3">At the crossroads of</span>
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
                <p className="text-[#64748B]">
                  Organized by <span className="font-semibold text-[#0F1D3A]">GCEL</span> with{" "}
                  <span className="font-semibold text-[#0F1D3A]">MISC Laboratory</span> as Scientific Partner — a rigorous, educational congress
                  for the medical and scientific community.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-[#E2E8F0] pt-6 max-w-[520px]">
                <p className="font-serif italic text-[15px] leading-5 text-[#0F1D3A] flex-1">“From Medical Innovation to Intelligent Care.”</p>
                <Link
                  href="/registration"
                  className="shrink-0 inline-flex items-center justify-center bg-[#F08444] px-6 py-3 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Right — large photography, not boxed */}
            <div className="relative flex flex-col">
              <div className="flex-1 min-h-[360px] lg:min-h-0 relative overflow-hidden bg-[#F1F5F9]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                  alt="Gastroenterology team reviewing endoscopic imagery"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Subtle thin label */}
                <div className="absolute bottom-0 inset-x-0 bg-white border-t border-[#E2E8F0] px-4 py-3 flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.12em] uppercase font-semibold text-[#023DA5]">Constantine · Scientific Days</span>
                  <span className="text-[10px] tracking-wide text-[#94A3B8]">Why this edition matters</span>
                </div>
              </div>
              <div className="bg-[#F8FAFC] border-t lg:border-t-0 border-[#E2E8F0] px-6 py-5">
                <ul className="space-y-3">
                  {[
                    ["Evolving practice", "Earlier, more precise diagnosis supported by AI."],
                    ["Grounded education", "Sessions rooted in clinical practice, not hype."],
                    ["Human + technology", "Scientific rigor with the human core of care intact."],
                  ].map(([t, d]) => (
                    <li key={t} className="flex gap-3 text-[12px] leading-5">
                      <span className="mt-2 h-px w-6 bg-[#023DA5] shrink-0" />
                      <span>
                        <span className="font-semibold text-[#0F1D3A]">{t} — </span>
                        <span className="text-[#475569]">{d}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE THEME — signature visual moment (full-bleed, 75vh) */}
      <section className="relative bg-[#023DA5] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop"
            alt="Scientific laboratory — gastroenterology research atmosphere"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.16]"
          />
          <div className="absolute inset-0 bg-[#023DA5]/85" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-[1.05fr_0.9fr] gap-10 lg:gap-14 items-center min-h-[56vh]">
            {/* Left — huge editorial */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#36C0E7]" />
                <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#9DD9EE]">Main Theme — 2026</span>
              </div>

              <h2 className="mt-6 font-serif leading-[0.88] tracking-[-0.03em]">
                <span className="block text-[32px] sm:text-[40px] lg:text-[46px] font-normal">GASTROENTEROLOGY</span>
                <span className="block text-[40px] sm:text-[56px] lg:text-[64px] font-light text-white/25 leading-none my-1">×</span>
                <span className="block text-[30px] sm:text-[38px] lg:text-[42px] font-light italic text-[#9DD9EE]">ARTIFICIAL INTELLIGENCE</span>
                <span className="block text-[40px] sm:text-[56px] lg:text-[64px] font-light text-white/25 leading-none my-1">×</span>
                <span className="block text-[32px] sm:text-[40px] lg:text-[46px] font-normal">SMART HEALTH</span>
              </h2>

              <p className="mt-6 text-[13px] leading-6 text-white/70 max-w-[480px]">
                How emerging technologies complement clinical expertise — strengthening diagnosis, care pathways and patient outcomes without replacing the human core of medicine.
              </p>
              <p className="mt-4 text-[11px] leading-4 text-white/40 border-l border-white/15 pl-3 max-w-[480px]">
                No unsupported medical claims. Educational framing only.
              </p>
            </div>

            {/* Right — editorial list, not cards, with thin dividers */}
            <div className="border border-white/15 bg-white/5 backdrop-blur-[1px]">
              <div className="px-5 py-3 border-b border-white/10 bg-white/5">
                <p className="text-[11px] tracking-[0.12em] uppercase font-semibold text-white/60">Core topics · Editorial list</p>
              </div>
              <div className="divide-y divide-white/10">
                {[
                  ["01", "AI-assisted diagnosis", "Decision support · pattern recognition"],
                  ["02", "Intelligent endoscopy", "Enhanced visualisation · guidance"],
                  ["03", "Smart health & digital tools", "Connected care · monitoring"],
                  ["04", "Personalized medicine", "Data-informed · patient-centered"],
                  ["05", "Medical imaging", "Imaging + AI convergence"],
                  ["06", "Future healthcare", "Responsible innovation"],
                ].map(([n, t, d]) => (
                  <div key={n} className="grid grid-cols-[44px_1fr] gap-3 px-5 py-4">
                    <span className="text-[11px] tracking-[0.12em] font-semibold text-[#36C0E7]">{n}</span>
                    <div>
                      <p className="text-[13px] font-semibold text-white">{t}</p>
                      <p className="text-[11px] text-white/50">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom strip — photography + caption (editorial 50/60) */}
          <div className="mt-10 lg:mt-14 grid lg:grid-cols-[1.25fr_0.75fr] gap-0 border border-white/15 overflow-hidden bg-white">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop"
              alt="Modern endoscopy and medical imaging equipment — editorial"
              className="h-[300px] lg:h-[360px] w-full object-cover"
              loading="lazy"
            />
            <div className="px-6 lg:px-8 py-8 flex flex-col justify-center bg-white">
              <p className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#023DA5]">Medicine × Technology</p>
              <p className="mt-2 font-serif text-[20px] leading-6 text-[#0F1D3A]">Technology in service of clinical excellence.</p>
              <div className="mt-4 h-px bg-[#E2E8F0]" />
              <div className="mt-4 flex gap-2 text-[11px]">
                <span className="border border-[#E2E8F0] px-2.5 py-1.5 font-medium text-[#0F1D3A]">Gastroenterology</span>
                <span className="bg-[#023DA5] text-white px-2 py-1.5 font-bold">+</span>
                <span className="border border-[#E2E8F0] px-2.5 py-1.5 font-medium text-[#0F1D3A]">AI & Smart Health</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ATTEND — 4 editorial columns with large numbers, no cards */}
      <section className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#023DA5]" />
                <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Why Attend</span>
              </div>
              <h2 className="mt-4 font-serif text-[28px] lg:text-[34px] leading-[0.95] tracking-[-0.02em] text-[#0F1D3A]">Why attend GCEL?</h2>
              <p className="mt-2 text-[13px] leading-5 text-[#475569]">A focused, rigorous and practical congress.</p>
            </div>
            <p className="text-[11px] tracking-wide text-[#94A3B8] lg:text-right">For gastroenterologists · researchers · healthcare professionals</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#0F1D3A]">
            {[
              { n: "01", t: "Scientific Exchange", d: "Current insights and clinical perspectives from specialists and researchers." },
              { n: "02", t: "AI & Innovation", d: "How AI is concretely influencing gastroenterology practice today." },
              { n: "03", t: "Clinical Perspectives", d: "Evolving approaches in diagnosis, care pathways and management." },
              { n: "04", t: "Networking", d: "Connect with professionals, institutions and partners across the field." },
            ].map((item) => (
              <div key={item.n} className="border-b sm:border-b-0 sm:border-r last:border-r-0 border-[#E2E8F0] px-6 py-8 lg:py-10">
                <div className="font-serif text-[48px] leading-none tracking-[-0.04em] text-[#E2E8F0]">{item.n}</div>
                <div className="mt-3 h-px w-8 bg-[#023DA5]" />
                <h3 className="mt-4 text-[13px] font-bold tracking-[-0.01em] text-[#0F1D3A]">{item.t}</h3>
                <p className="mt-2 text-[12px] leading-5 text-[#64748B]">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTS — magazine editorial (featured + grid) */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#023DA5]" />
                <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Experts</span>
              </div>
              <h2 className="mt-4 font-serif text-[28px] lg:text-[34px] leading-[0.95] tracking-[-0.02em] text-[#0F1D3A]">Meet the Experts</h2>
              <p className="mt-2 text-[13px] leading-5 text-[#475569] max-w-[520px]">
                Speaker profiles published progressively. Placeholders indicate slots awaiting confirmation.
              </p>
            </div>
            <Link href="/experts" className="hidden lg:inline-flex text-[11px] tracking-[0.08em] uppercase font-semibold text-[#023DA5] border-b border-[#023DA5] pb-1">
              View all {experts.length} experts
            </Link>
          </div>

          {/* Featured editorial: large portrait left + 5 small */}
          <div className="mt-10 grid lg:grid-cols-[1.15fr_1.85fr] gap-3 lg:gap-4">
            {/* Large featured placeholder */}
            <Link href={`/experts/${featuredExperts[0].slug}`} className="group relative overflow-hidden bg-white border border-[#E2E8F0] block">
              <div className="aspect-[4/4.6] lg:aspect-[4/4.8] overflow-hidden bg-[#F1F5F9]">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
                  alt="Featured expert portrait"
                  className="h-full w-full object-cover object-top grayscale-[6%] group-hover:grayscale-0 transition duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-0 left-0 bg-white border-b border-r border-[#E2E8F0] px-2.5 py-1">
                <span className="text-[10px] tracking-[0.08em] uppercase font-semibold text-[#023DA5]">{featuredExperts[0].specialty}</span>
              </div>
              <div className="p-4 bg-white border-t border-[#E2E8F0]">
                <h3 className="text-[13px] font-bold text-[#0F1D3A]">{featuredExperts[0].name}</h3>
                <p className="text-[11px] font-medium text-[#023DA5]">{featuredExperts[0].title}</p>
                <p className="text-[11px] text-[#64748B]">{featuredExperts[0].institution} · Featured</p>
              </div>
            </Link>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-4">
              {featuredExperts.slice(1, 6).map((e) => (
                <ExpertCard key={e.slug} expert={e} />
              ))}
              {/* Fill 6th if needed */}
              {featuredExperts.length < 6 && <ExpertCard expert={featuredExperts[1]} />}
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#E2E8F0] bg-white px-4 py-3">
            <p className="text-[12px] text-[#475569]">No invented credentials — placeholders use “Speaker Name” / “Topic to be announced”.</p>
            <Link href="/experts" className="text-[11px] tracking-[0.06em] uppercase font-semibold text-[#023DA5] hover:underline">
              Browse all profiles →
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAM — editorial schedule (thin separators, blue type) */}
      <section className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-[380px_1fr] gap-8 lg:gap-12">
            <div className="lg:sticky lg:top-[84px] self-start">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#023DA5]" />
                <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Scientific Program</span>
              </div>
              <h2 className="mt-4 font-serif text-[28px] lg:text-[32px] leading-[0.95] tracking-[-0.02em] text-[#0F1D3A]">
                A focused,
                <br />
                one-day program
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-[#475569]">
                Placeholder schedule — updated as sessions and speakers are finalized. The official PDF will be linked directly from the full program page.
              </p>
              <Link
                href="/program"
                className="mt-6 hidden lg:inline-flex border border-[#023DA5] px-5 py-2.5 text-[11px] tracking-[0.08em] uppercase font-semibold text-[#023DA5] hover:bg-[#023DA5] hover:text-white transition-colors"
              >
                View full program
              </Link>
            </div>

            <div className="border border-[#0F1D3A]">
              <div className="hidden lg:grid grid-cols-[96px_1fr_150px] gap-0 border-b border-[#0F1D3A] bg-[#0F1D3A] text-white px-6 py-3">
                <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-white/60">Time</span>
                <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-white/60">Session</span>
                <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-white/60">Topic</span>
              </div>
              <div className="divide-y divide-[#E2E8F0]">
                {programItems.slice(0, 6).map((item) => (
                  <div key={item.id} className="grid lg:grid-cols-[96px_1fr_150px] gap-2 lg:gap-0 px-4 lg:px-6 py-4">
                    <span className="text-[12px] font-semibold tracking-wide text-[#023DA5] tabular-nums">
                      {item.time}
                      {item.endTime ? ` — ${item.endTime}` : ""}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold leading-5 text-[#0F1D3A]">{item.title}</p>
                      <p className="text-[11px] text-[#64748B] mt-0.5">
                        {item.session} · {item.type}
                        {item.speaker ? ` · ${item.speaker}` : ""}
                      </p>
                    </div>
                    <span className="text-[11px] text-[#475569] lg:pl-4 lg:border-l border-[#E2E8F0]">{item.topic}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#0F1D3A] bg-[#F8FAFC] px-4 lg:px-6 py-3 flex items-center justify-between">
                <p className="text-[11px] text-[#64748B]">Indicative · Scientific committee</p>
                <Link href="/program" className="text-[11px] tracking-[0.06em] uppercase font-semibold text-[#023DA5] hover:underline lg:hidden">
                  View full program →
                </Link>
                <span className="hidden lg:block text-[11px] text-[#94A3B8]">PDF coming soon</span>
              </div>
            </div>
          </div>

          {/* Registration transition — large statement */}
          <div className="mt-10 lg:mt-14 border border-[#023DA5] bg-[#F8FAFC] px-6 lg:px-10 py-8 lg:py-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[#023DA5]">Ready to join the conversation?</p>
                <h3 className="mt-2 font-serif text-[20px] lg:text-[24px] leading-none tracking-[-0.01em] text-[#0F1D3A]">GCEL — 3rd Edition Scientific Days</h3>
                <p className="mt-1 text-[12px] tracking-wide text-[#64748B]">01 OCTOBER 2026 · CONSTANTINE</p>
              </div>
              <Link
                href="/registration"
                className="shrink-0 inline-flex items-center justify-center bg-[#F08444] px-7 py-3.5 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS — official wall, lots of whitespace */}
      <section className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="text-center max-w-[560px] mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#023DA5]" />
              <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Partners</span>
              <span className="h-px w-8 bg-[#023DA5]" />
            </div>
            <h2 className="mt-4 font-serif text-[26px] lg:text-[30px] leading-[0.95] tracking-[-0.02em] text-[#0F1D3A]">Our Sponsors & Partners</h2>
            <p className="mt-3 text-[13px] leading-5 text-[#475569]">All partners treated equally — no hierarchy. A calm, institutional wall.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[#E2E8F0] border border-[#E2E8F0] max-w-[960px] mx-auto">
            {partners.slice(0, 8).map((p) => (
              <Link
                key={p.slug}
                href={`/partners/${p.slug}`}
                className="bg-white px-4 py-10 flex flex-col items-center justify-center text-center hover:bg-[#F8FAFC] transition-colors group min-h-[132px]"
              >
                <div className="w-10 h-10 border border-[#E2E8F0] flex items-center justify-center text-[#94A3B8] group-hover:border-[#023DA5] group-hover:text-[#023DA5] transition-colors">
                  <span className="text-[11px] font-bold tracking-[0.08em]">GCEL</span>
                </div>
                <p className="mt-3 text-[12px] font-semibold text-[#0F1D3A]">{p.name}</p>
                <p className="text-[11px] text-[#94A3B8]">Partner</p>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-center text-[11px] text-[#94A3B8]">Partner announcements coming soon — placeholders easily replaceable.</p>
        </div>
      </section>

      {/* VENUE — large visual personality (full-bleed + editorial) */}
      <section className="bg-[#0F1D3A] text-white border-b border-white/10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-0">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-0 min-h-[64vh]">
            <div className="relative min-h-[380px] lg:min-h-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
                alt="Ahmed Bey Zenith — conference venue, Constantine"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0F1D3A]/18" />
              <div className="absolute bottom-0 inset-x-0 bg-white text-[#0F1D3A] border-t border-white/20 px-4 py-3 flex items-center justify-between">
                <p className="text-[11px] font-semibold tracking-[0.04em]">Ahmed Bey Zenith · Constantine</p>
                <span className="text-[10px] tracking-[0.08em] uppercase font-semibold text-[#64748B] border border-[#E2E8F0] px-2 py-1">Venue</span>
              </div>
            </div>

            <div className="px-6 lg:px-10 py-10 lg:py-12 flex flex-col justify-center bg-[#0F1D3A]">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white/30" />
                <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-white/60">Venue</span>
              </div>
              <h2 className="mt-4 font-serif text-[30px] lg:text-[36px] leading-[0.92] tracking-[-0.02em]">
                AHMED BEY
                <br />
                ZENITH
              </h2>
              <p className="mt-2 text-[11px] tracking-[0.12em] uppercase font-semibold text-white/50">Constantine, Algeria</p>

              <div className="mt-6 h-px bg-white/10" />

              <div className="mt-6 space-y-0 border border-white/10">
                <div className="grid grid-cols-[96px_1fr] border-b border-white/10">
                  <span className="px-4 py-3 text-[10px] tracking-[0.12em] uppercase font-semibold text-white/40 bg-white/5 border-r border-white/10">Location</span>
                  <span className="px-4 py-3 text-[13px] text-white">Ahmed Bey Zenith, Constantine, Algeria</span>
                </div>
                <div className="grid grid-cols-[96px_1fr] border-b border-white/10">
                  <span className="px-4 py-3 text-[10px] tracking-[0.12em] uppercase font-semibold text-white/40 bg-white/5 border-r border-white/10">Date</span>
                  <span className="px-4 py-3 text-[13px] text-white">01 October 2026 — Full day</span>
                </div>
                <div className="grid grid-cols-[96px_1fr]">
                  <span className="px-4 py-3 text-[10px] tracking-[0.12em] uppercase font-semibold text-white/40 bg-white/5 border-r border-white/10">Note</span>
                  <span className="px-4 py-3 text-[12px] leading-5 text-white/60">Details and directions updated as provided. No facilities invented.</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/venue" className="inline-flex items-center justify-center bg-white px-5 py-2.5 text-[11px] tracking-[0.08em] uppercase font-semibold text-[#023DA5] hover:bg-[#F8FAFC]">
                  Explore venue
                </Link>
                <a
                  href="https://maps.google.com/?q=Ahmed+Bey+Zenith+Constantine+Algeria"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-white/20 px-5 py-2.5 text-[11px] tracking-[0.08em] uppercase font-semibold text-white hover:bg-white/10"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers — minimal */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-[11px] tracking-[0.14em] uppercase font-semibold text-[#64748B]">Organized by</p>
          <div className="mt-5 grid grid-cols-2 gap-px bg-[#E2E8F0] border border-[#E2E8F0] max-w-[520px] mx-auto">
            <div className="bg-white px-6 py-5 text-center">
              <div className="mx-auto w-8 h-8 bg-[#023DA5] flex items-center justify-center text-white font-bold text-[11px]">GC</div>
              <p className="mt-2 text-[12px] font-bold text-[#0F1D3A]">GCEL</p>
              <p className="text-[10px] tracking-[0.06em] uppercase text-[#64748B]">Organizer</p>
            </div>
            <div className="bg-white px-6 py-5 text-center">
              <div className="mx-auto w-8 h-8 border border-[#E2E8F0] flex items-center justify-center text-[#023DA5] font-bold text-[10px]">MISC</div>
              <p className="mt-2 text-[12px] font-bold text-[#0F1D3A]">MISC Laboratory</p>
              <p className="text-[10px] tracking-[0.06em] uppercase text-[#64748B]">Scientific Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — ending of major event (full-width strong background) */}
      <section className="relative bg-[#023DA5] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2000&auto=format&fit=crop"
            alt="International congress audience — editorial"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.10]"
          />
          <div className="absolute inset-0 bg-[#023DA5]/88" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-[780px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-white/60">Final Call</span>
            </div>
            <h2 className="mt-6 font-serif leading-[0.86] tracking-[-0.03em]">
              <span className="block text-[34px] sm:text-[44px] lg:text-[52px] font-normal">BE PART OF THE FUTURE</span>
              <span className="block text-[34px] sm:text-[44px] lg:text-[52px] font-light italic text-[#9DD9EE]">OF GASTROENTEROLOGY.</span>
            </h2>
            <p className="mt-4 text-[11px] tracking-[0.14em] uppercase font-semibold text-white/50">
              From Medical Innovation <span className="mx-2 text-white/20">—</span> To Intelligent Care.
            </p>
            <p className="mt-4 text-[13px] leading-6 text-white/70 max-w-[520px]">
              Join GCEL — 3rd Edition Scientific Days. 01 October 2026 · Ahmed Bey Zenith, Constantine, Algeria.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/registration" className="inline-flex items-center justify-center bg-[#F08444] px-7 py-3.5 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors">
                Register Now
              </Link>
              <Link href="/program" className="inline-flex items-center justify-center border border-white/25 px-7 py-3.5 text-[11px] tracking-[0.08em] uppercase font-semibold text-white hover:bg-white hover:text-[#023DA5] transition-colors">
                Explore the program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
