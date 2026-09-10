import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration Received — GCEL",
  description: "Your registration request for GCEL 3rd Edition Scientific Days has been received.",
};

export default function RegistrationSuccessPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-[70vh] flex flex-col">
      <div className="mx-auto max-w-[640px] w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-10 h-10 border border-[#023DA5] bg-[#023DA5] text-white flex items-center justify-center">
          <span className="text-[16px] leading-none">✓</span>
        </div>
        <p className="mt-6 text-[11px] tracking-[0.14em] uppercase font-semibold text-[#023DA5]">Registration Received</p>
        <h1 className="mt-3 font-serif text-[24px] lg:text-[26px] leading-[1.2] tracking-[-0.01em] text-[#0F1D3A]">
          Thank you for registering for GCEL — 3rd Edition Scientific Days.
        </h1>
        <p className="mt-4 text-[13px] leading-6 text-[#475569]">
          Your registration request has been submitted. The organizing committee will review it and contact you at the email you provided with next steps if required.
        </p>

        <div className="mt-8 w-full border border-[#E2E8F0] bg-white text-left">
          <div className="px-5 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
            <h2 className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#023DA5]">Event recap</h2>
          </div>
          <dl className="divide-y divide-[#E2E8F0] text-[12px]">
            <div className="grid grid-cols-2">
              <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Date</dt>
              <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">Thu 01 Oct 2026</dd>
            </div>
            <div className="grid grid-cols-2">
              <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Venue</dt>
              <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">Ahmed Bey Zenith, Constantine</dd>
            </div>
            <div className="grid grid-cols-2">
              <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Theme</dt>
              <dd className="px-4 py-3 text-[#0F1D3A] text-[11px] leading-5">Gastroenterology in the Era of AI & Smart Health</dd>
            </div>
            <div className="grid grid-cols-2">
              <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Contact</dt>
              <dd className="px-4 py-3 text-[#0F1D3A] text-[11px]">0540 69 95 13 · college.hgel@gmail.com</dd>
            </div>
          </dl>
          <div className="px-5 py-3 border-t border-[#E2E8F0] bg-[#F8FAFC]">
            <p className="text-[11px] leading-4 text-[#64748B]">
              If you do not receive confirmation, contact <a href="mailto:college.hgel@gmail.com" className="text-[#023DA5] font-medium hover:underline">college.hgel@gmail.com</a> or 0540 69 95 13.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="inline-flex items-center justify-center border border-[#023DA5] bg-[#023DA5] px-6 py-2.5 text-[11px] tracking-[0.06em] uppercase font-semibold text-white hover:bg-[#022a72]">
            Back to home
          </Link>
          <Link href="/program" className="inline-flex items-center justify-center border border-[#E2E8F0] bg-white px-6 py-2.5 text-[11px] tracking-[0.06em] uppercase font-semibold text-[#023DA5] hover:bg-[#F8FAFC]">
            View scientific program
          </Link>
        </div>
      </div>
    </div>
  );
}
