import RegistrationForm from "@/components/RegistrationForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration — GCEL 3rd Edition Scientific Days",
  description: "Register for GCEL 3rd Edition Scientific Days — October 1, 2026 at Ahmed Bey Zenith, Constantine, Algeria.",
};

export default function RegistrationPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Registration</span>
          </div>
          <h1 className="mt-4 font-serif text-[30px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#0F1D3A]">Register for GCEL 2026</h1>
          <p className="mt-3 text-[14px] leading-6 text-[#475569] max-w-[640px]">
            3rd Edition Scientific Days — Gastroenterology in the Era of Artificial Intelligence & Smart Health. 01 October 2026 · Ahmed Bey Zenith, Constantine, Algeria.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
            <span className="border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-[#475569]">No payment required at this stage</span>
            <span className="border border-[#E2E8F0] bg-white px-2.5 py-1 text-[#94A3B8]">Organizers will confirm details</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 items-start">
          <div className="border border-[#E2E8F0] bg-white p-6 lg:p-7">
            <h2 className="font-serif text-[16px] text-[#0F1D3A]">Registration form</h2>
            <p className="mt-1 text-[12px] text-[#64748B]">Fields marked with * are required. Your data is shared only with the organizing committee.</p>
            <div className="mt-6">
              <RegistrationForm />
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-[#E2E8F0] bg-white">
              <div className="px-5 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
                <h3 className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#023DA5]">Event summary</h3>
              </div>
              <dl className="divide-y divide-[#E2E8F0] text-[12px]">
                <div className="grid grid-cols-[90px_1fr]">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Event</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">GCEL — 3rd Edition</dd>
                </div>
                <div className="grid grid-cols-[90px_1fr]">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Theme</dt>
                  <dd className="px-4 py-3 text-[#0F1D3A]">Gastroenterology in the Era of AI & Smart Health</dd>
                </div>
                <div className="grid grid-cols-[90px_1fr]">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Date</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">Thu 01 Oct 2026</dd>
                </div>
                <div className="grid grid-cols-[90px_1fr]">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Venue</dt>
                  <dd className="px-4 py-3 font-semibold text-[#0F1D3A]">Ahmed Bey Zenith, Constantine</dd>
                </div>
                <div className="grid grid-cols-[90px_1fr]">
                  <dt className="px-4 py-3 text-[#64748B] bg-[#F8FAFC] border-r border-[#E2E8F0]">Contact</dt>
                  <dd className="px-4 py-3 text-[#0F1D3A] text-[11px]">0540 69 95 13 · college.hgel@gmail.com</dd>
                </div>
              </dl>
            </div>

            <div className="border border-[#0F1D3A] bg-[#0F1D3A] text-white px-5 py-5">
              <h3 className="text-[12px] font-bold tracking-[0.04em]">What happens next?</h3>
              <ol className="mt-3 space-y-2 text-[12px] leading-6 text-white/60 list-decimal list-inside">
                <li>Submit your registration request.</li>
                <li>You’ll be redirected to a confirmation page.</li>
                <li>The committee reviews requests and contacts you with next steps.</li>
              </ol>
              <p className="mt-4 text-[11px] leading-4 text-white/40 border-t border-white/10 pt-3">
                No prices or payment methods are invented — official information will be communicated directly when available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
