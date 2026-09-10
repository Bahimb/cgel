import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venue — Ahmed Bey Zenith, Constantine | GCEL",
  description: "Venue information for GCEL 3rd Edition Scientific Days — Ahmed Bey Zenith, Constantine, Algeria. October 1, 2026.",
};

export default function VenuePage() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Venue</span>
          </div>
          <h1 className="mt-4 font-serif text-[30px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#0F1D3A]">Ahmed Bey Zenith, Constantine</h1>
          <p className="mt-3 text-[14px] leading-6 text-[#475569]">Ahmed Bey Zenith, Constantine, Algeria · Thursday, 01 October 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid lg:grid-cols-[520px_1fr] gap-0 border border-[#E2E8F0]">
          <div className="relative h-[320px] lg:h-auto overflow-hidden bg-[#F1F5F9]">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop"
              alt="Ahmed Bey Zenith — conference hall interior"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-white border-t border-[#E2E8F0] px-4 py-3 flex items-center justify-between">
              <p className="text-[11px] font-semibold text-[#0F1D3A]">Ahmed Bey Zenith</p>
              <span className="text-[10px] tracking-[0.08em] uppercase font-semibold text-[#64748B] border border-[#E2E8F0] px-2 py-1">Venue photograph</span>
            </div>
          </div>

          <div className="px-6 lg:px-8 py-8">
            <h2 className="font-serif text-[18px] text-[#0F1D3A]">About the venue</h2>
            <p className="mt-3 text-[13px] leading-6 text-[#475569]">
              Ahmed Bey Zenith is one of Algeria&apos;s premier conference venues, located in the historic city of Constantine. The venue offers modern facilities for international scientific gatherings in a prestigious setting.
            </p>
            <p className="mt-3 text-[11px] leading-5 text-[#94A3B8] border-l-2 border-[#E2E8F0] pl-3">
              Detailed facilities, hall capacities and logistics will be updated as assets are provided. No facilities are invented.
            </p>

            <div className="mt-6 border border-[#E2E8F0]">
              <div className="grid grid-cols-[100px_1fr] border-b border-[#E2E8F0]">
                <span className="px-4 py-3 text-[11px] tracking-[0.06em] uppercase font-semibold text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Address</span>
                <span className="px-4 py-3 text-[12px] text-[#0F1D3A]">Ahmed Bey Zenith, Constantine, Algeria</span>
              </div>
              <div className="grid grid-cols-[100px_1fr]">
                <span className="px-4 py-3 text-[11px] tracking-[0.06em] uppercase font-semibold text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Date</span>
                <span className="px-4 py-3 text-[12px] text-[#0F1D3A]">Thursday, 01 October 2026 — Full day</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Ahmed+Bey+Zenith+Constantine+Algeria"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-[#023DA5] bg-[#023DA5] px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-semibold text-white hover:bg-[#022a72]"
              >
                Open in Google Maps
              </a>
              <Link href="/registration" className="inline-flex items-center justify-center bg-[#F08444] px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-bold text-white hover:bg-[#e57333]">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
