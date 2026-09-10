import type { Metadata } from "next";
import { eventData } from "@/data/event";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — GCEL 3rd Edition Scientific Days",
  description: "Contact GCEL — 3rd Edition Scientific Days. Phone, email and venue information.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Contact</span>
          </div>
          <h1 className="mt-4 font-serif text-[30px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#0F1D3A]">Contact GCEL</h1>
          <p className="mt-3 text-[14px] leading-6 text-[#475569]">Get in touch with the organizing committee.</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid lg:grid-cols-[1.05fr_0.9fr] gap-6 lg:gap-8 items-start">
          <div className="border border-[#E2E8F0] bg-white">
            <div className="px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
              <p className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#023DA5]">Organizer</p>
              <p className="mt-1 font-serif text-[18px] text-[#0F1D3A]">GCEL</p>
              <p className="text-[11px] text-[#64748B]">3rd Edition Scientific Days</p>
            </div>

            <div className="p-6 space-y-0 divide-y divide-[#E2E8F0] border-b border-[#E2E8F0]">
              <a href={`tel:${eventData.contact.phone.replace(/\s/g, "")}`} className="flex gap-4 py-4 hover:bg-[#F8FAFC] -mx-6 px-6 transition-colors">
                <span className="shrink-0 w-8 h-8 border border-[#E2E8F0] flex items-center justify-center text-[#023DA5] text-[11px]">T</span>
                <div>
                  <p className="text-[10px] tracking-[0.12em] uppercase font-semibold text-[#64748B]">Phone</p>
                  <p className="text-[13px] font-semibold text-[#0F1D3A]">{eventData.contact.phone}</p>
                </div>
              </a>
              <a href={`mailto:${eventData.contact.email}`} className="flex gap-4 py-4 hover:bg-[#F8FAFC] -mx-6 px-6 transition-colors">
                <span className="shrink-0 w-8 h-8 border border-[#E2E8F0] flex items-center justify-center text-[#023DA5] text-[11px]">E</span>
                <div className="min-w-0">
                  <p className="text-[10px] tracking-[0.12em] uppercase font-semibold text-[#64748B]">Email</p>
                  <p className="text-[13px] font-semibold text-[#0F1D3A] break-all">{eventData.contact.email}</p>
                </div>
              </a>
              <a href={eventData.contact.websiteHref} target="_blank" rel="noreferrer" className="flex gap-4 py-4 hover:bg-[#F8FAFC] -mx-6 px-6 transition-colors">
                <span className="shrink-0 w-8 h-8 border border-[#E2E8F0] flex items-center justify-center text-[#023DA5] text-[11px]">W</span>
                <div>
                  <p className="text-[10px] tracking-[0.12em] uppercase font-semibold text-[#64748B]">Website</p>
                  <p className="text-[13px] font-semibold text-[#0F1D3A]">{eventData.contact.website}</p>
                </div>
              </a>
            </div>

            <div className="px-6 py-4 bg-[#0F1D3A] text-white">
              <p className="text-[11px] tracking-[0.08em] uppercase font-semibold text-white/60">Scientific Partner</p>
              <p className="text-[13px] font-semibold">MISC Laboratory</p>
              <p className="mt-1 text-[11px] text-white/40">Partner information will be enriched as provided.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-[#E2E8F0] bg-white">
              <div className="px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
                <h3 className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#023DA5]">Event details</h3>
              </div>
              <dl className="divide-y divide-[#E2E8F0] text-[12px]">
                <div className="grid grid-cols-[90px_1fr]">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Date</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">01 Oct 2026</dd>
                </div>
                <div className="grid grid-cols-[90px_1fr]">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Venue</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">Ahmed Bey Zenith, Constantine</dd>
                </div>
              </dl>
              <div className="p-4 border-t border-[#E2E8F0]">
                <Link href="/venue" className="inline-flex w-full items-center justify-center border border-[#E2E8F0] bg-white px-4 py-2.5 text-[11px] tracking-[0.06em] uppercase font-semibold text-[#023DA5] hover:bg-[#F8FAFC]">
                  View venue
                </Link>
              </div>
            </div>

            <div className="border border-[#023DA5] bg-[#023DA5] text-white px-6 py-6">
              <h3 className="font-serif text-[16px]">Ready to register?</h3>
              <p className="mt-1 text-[12px] text-white/60">Secure your place at GCEL 3rd Edition Scientific Days.</p>
              <Link href="/registration" className="mt-4 inline-flex w-full items-center justify-center bg-[#F08444] px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-bold text-white hover:bg-[#e57333]">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
