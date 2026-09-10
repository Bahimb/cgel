"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { programItems, programSessions } from "@/data/program";

export default function ProgramPage() {
  const [activeSession, setActiveSession] = useState<string>("All Sessions");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return programItems.filter((item) => {
      const sessionMatch = activeSession === "All Sessions" || item.session === activeSession;
      const searchLower = search.toLowerCase();
      const searchMatch =
        !search ||
        item.title.toLowerCase().includes(searchLower) ||
        item.topic.toLowerCase().includes(searchLower) ||
        (item.speaker && item.speaker.toLowerCase().includes(searchLower));
      return sessionMatch && searchMatch;
    });
  }, [activeSession, search]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Scientific Program</span>
          </div>
          <h1 className="mt-4 font-serif text-[30px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#0F1D3A]">Scientific Program</h1>
          <p className="mt-3 text-[14px] leading-6 text-[#475569] max-w-[640px]">
            One-day program · Thursday, 01 October 2026 · Ahmed Bey Zenith, Constantine. Placeholder content — will be updated as sessions and speakers are finalized.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
            <span className="border border-[#E2E8F0] px-2.5 py-1 font-medium text-[#475569]">Indicative schedule</span>
            <span className="border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-[#94A3B8]">PDF link can be added here</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        {/* Controls — editorial, no pills */}
        <div className="border border-[#E2E8F0] bg-white p-4 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="flex flex-wrap gap-px bg-[#E2E8F0] border border-[#E2E8F0]">
            {programSessions.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSession(s)}
                className={`px-3 py-2 text-[11px] tracking-[0.04em] font-semibold transition-colors ${
                  activeSession === s ? "bg-[#023DA5] text-white" : "bg-white text-[#475569] hover:text-[#023DA5]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter by topic, speaker…"
            className="w-full lg:w-[260px] border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-[12px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#023DA5] focus:bg-white"
          />
        </div>

        {/* Timeline — serious thin dividers */}
        <div className="mt-6 border border-[#E2E8F0] bg-white">
          <div className="hidden lg:grid grid-cols-[96px_1fr_160px_120px_80px] gap-0 border-b border-[#E2E8F0] bg-[#F8FAFC] px-6 py-3">
            <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[#64748B]">Time</span>
            <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[#64748B]">Session</span>
            <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[#64748B]">Topic</span>
            <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[#64748B]">Room</span>
            <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[#64748B]">Type</span>
          </div>

          {filtered.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-[13px] font-semibold text-[#0F1D3A]">No sessions match your filters.</p>
              <p className="mt-1 text-[12px] text-[#64748B]">Try another session or clear the search.</p>
              <button
                onClick={() => {
                  setActiveSession("All Sessions");
                  setSearch("");
                }}
                className="mt-4 inline-flex items-center justify-center border border-[#023DA5] bg-[#023DA5] px-4 py-2 text-[11px] tracking-[0.06em] uppercase font-semibold text-white"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#E2E8F0]">
              {filtered.map((item) => (
                <div key={item.id} className="grid lg:grid-cols-[96px_1fr_160px_120px_80px] gap-2 lg:gap-0 px-4 lg:px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-semibold text-[#023DA5] tabular-nums">{item.time}</span>
                    {item.endTime && <span className="text-[11px] text-[#94A3B8]">— {item.endTime}</span>}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold leading-5 text-[#0F1D3A]">{item.title}</p>
                    {item.description && <p className="mt-1 text-[11px] leading-5 text-[#64748B]">{item.description}</p>}
                    <p className="mt-1 text-[11px] text-[#475569]">
                      <span className="font-medium text-[#023DA5]">{item.session}</span>
                      {item.speaker && (
                        <>
                          {" "}
                          ·{" "}
                          {item.speakerSlug ? (
                            <Link href={`/experts/${item.speakerSlug}`} className="hover:underline font-medium">
                              {item.speaker}
                            </Link>
                          ) : (
                            item.speaker
                          )}
                        </>
                      )}
                    </p>
                  </div>
                  <span className="text-[11px] text-[#475569] lg:pl-2">{item.topic}</span>
                  <span className="text-[11px] text-[#64748B] lg:pl-2">{item.room}</span>
                  <span className="text-[10px] tracking-[0.06em] uppercase font-semibold text-[#64748B]">{item.type}</span>
                </div>
              ))}
            </div>
          )}

          <div className="border-t border-[#E2E8F0] bg-[#F8FAFC] px-4 lg:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[11px] text-[#64748B]">
              Showing {filtered.length} of {programItems.length} items · Schedule is indicative.
            </p>
            <span className="border border-[#E2E8F0] bg-white px-3 py-1.5 text-[11px] text-[#94A3B8]">Download PDF (coming soon)</span>
          </div>
        </div>

        <div className="mt-8 border border-[#023DA5] bg-[#023DA5] text-white px-6 py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-[16px]">Discover the scientific program and reserve your place at GCEL.</h3>
            <p className="mt-1 text-[12px] text-white/60">01 October 2026 · Ahmed Bey Zenith, Constantine, Algeria</p>
          </div>
          <Link href="/registration" className="shrink-0 inline-flex items-center justify-center bg-[#F08444] px-6 py-3 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333]">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}
