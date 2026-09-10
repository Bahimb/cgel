import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — GCEL 3rd Edition Scientific Days",
  description:
    "About GCEL — 3rd Edition Scientific Days: Gastroenterology in the Era of Artificial Intelligence & Smart Health. Organized by GCEL with MISC Laboratory.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">About</span>
          </div>
          <h1 className="mt-4 font-serif text-[30px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#0F1D3A]">About GCEL</h1>
          <p className="mt-3 text-[14px] leading-6 text-[#475569] max-w-[640px]">
            3rd Edition Scientific Days — Gastroenterology in the Era of Artificial Intelligence & Smart Health.
          </p>
          <p className="mt-2 text-[11px] tracking-wide text-[#94A3B8]">01 October 2026 · Ahmed Bey Zenith, Constantine, Algeria</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-start">
          <div>
            <SectionTitle
              kicker="Introduction"
              title="A scientific gathering for the evolution of gastroenterology"
              subtitle="GCEL Scientific Days bring together the gastroenterology community to examine how medical innovation — especially Artificial Intelligence and smart health — is expanding what is possible in diagnosis, care and clinical practice."
            />
            <div className="mt-6 space-y-4 text-[14px] leading-7 text-[#475569]">
              <p>
                The <span className="font-semibold text-[#0F1D3A]">3rd Edition</span> focuses on{" "}
                <span className="font-semibold text-[#0F1D3A]">“Gastroenterology in the Era of Artificial Intelligence & Smart Health”</span>{" "}
                — with the tagline <em className="text-[#0F1D3A]">“From Medical Innovation to Intelligent Care”</em>. The program explores how
                data, intelligent tools and digital medicine complement clinical expertise without replacing the human dimension of care.
              </p>
              <p>
                Organized by <span className="font-semibold text-[#0F1D3A]">GCEL</span> with{" "}
                <span className="font-semibold text-[#0F1D3A]">MISC Laboratory</span> as Scientific Partner, the event is designed for
                gastroenterologists, hepatologists, general practitioners, pharmacists, nurses, researchers, students and institutional
                partners.
              </p>
              <p className="text-[12px] text-[#94A3B8] border-l-2 border-[#E2E8F0] pl-3">
                All content on this page is editable — the organizer can update texts, topics and structure without modifying components.
              </p>
            </div>

            <div className="mt-8 border border-[#E2E8F0]">
              <div className="px-5 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
                <h3 className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#023DA5]">Key themes</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-0 text-[12px] text-[#475569]">
                {[
                  "AI-assisted diagnosis",
                  "Smart health & digital tools",
                  "Intelligent endoscopy",
                  "Data-driven medicine",
                  "Clinical decision support",
                  "Personalized medicine",
                  "Medical imaging",
                  "Future healthcare",
                ].map((t) => (
                  <li key={t} className="px-5 py-3 border-b sm:border-b border-r-0 sm:odd:border-r border-[#E2E8F0] last:border-b-0">
                    — {t}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/registration"
              className="mt-8 inline-flex items-center justify-center bg-[#F08444] px-6 py-3 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors"
            >
              Register Now
            </Link>
          </div>

          <div className="space-y-4">
            <div className="border border-[#E2E8F0] bg-white">
              <div className="px-5 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
                <h3 className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#023DA5]">At a glance</h3>
              </div>
              <dl className="divide-y divide-[#E2E8F0] text-[12px]">
                <div className="grid grid-cols-[110px_1fr] gap-0">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Event</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">GCEL — 3rd Edition Scientific Days</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-0">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Theme</dt>
                  <dd className="px-4 py-3 font-medium text-[#0F1D3A]">Gastroenterology in the Era of AI & Smart Health</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-0">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Date</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">01 Oct 2026</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-0">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Venue</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">Ahmed Bey Zenith, Constantine</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-0">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Organizer</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">GCEL</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-0">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Partner</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">MISC Laboratory</dd>
                </div>
              </dl>
              <div className="p-4 border-t border-[#E2E8F0]">
                <Link href="/program" className="inline-flex w-full items-center justify-center border border-[#023DA5] bg-[#023DA5] px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-semibold text-white hover:bg-[#022a72]">
                  View scientific program
                </Link>
              </div>
            </div>

            <div className="overflow-hidden border border-[#E2E8F0]">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop"
                alt="Audience at a scientific congress"
                className="h-[180px] w-full object-cover"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-px bg-[#E2E8F0] border-t border-[#E2E8F0]">
                <div className="bg-white px-4 py-3 text-center">
                  <p className="text-[12px] font-bold text-[#0F1D3A]">GCEL</p>
                  <p className="text-[10px] tracking-[0.08em] uppercase text-[#64748B]">Organizer</p>
                </div>
                <div className="bg-[#F8FAFC] px-4 py-3 text-center">
                  <p className="text-[12px] font-bold text-[#0F1D3A]">MISC Laboratory</p>
                  <p className="text-[10px] tracking-[0.08em] uppercase text-[#64748B]">Scientific Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
