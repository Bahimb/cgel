"use client";

import { useEffect, useState } from "react";
import { eventData } from "@/data/event";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(): TimeLeft {
  const target = new Date(eventData.date.iso).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    queueMicrotask(() => setMounted(true));
    return () => clearInterval(id);
  }, []);

  const items: Array<[string, number]> = [
    ["Days", timeLeft.days],
    ["Hours", timeLeft.hours],
    ["Minutes", timeLeft.minutes],
    ["Seconds", timeLeft.seconds],
  ];

  return (
    <section className="bg-[#023DA5] text-white border-b border-white/10 relative overflow-hidden">
      {/* Luxe — subtle top inner line and soft glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute -right-24 -top-24 w-[420px] h-[420px] bg-[#36C0E7]/10 blur-[60px] pointer-events-none" />
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 lg:py-9">
        <div className="flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-8">
          <div className="shrink-0 lg:w-[260px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/25" />
              <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-white/60">Countdown</span>
            </div>
            <p className="mt-2 font-serif text-[20px] lg:text-[22px] leading-none tracking-[-0.015em] font-light">01 October 2026</p>
            <p className="mt-1 text-[11px] tracking-[0.08em] uppercase font-medium text-white/45">Ahmed Bey Zenith · Constantine</p>
          </div>

          <div className="flex-1 lg:border-l lg:border-white/10 lg:pl-8">
            <div className="grid grid-cols-4 gap-0">
              {items.map(([label, value], i) => (
                <div key={label} className={`text-center lg:text-left px-2 sm:px-6 py-2 ${i !== items.length - 1 ? "border-r border-white/10" : ""}`}>
                  <div className="font-serif text-[34px] sm:text-[42px] lg:text-[46px] leading-none tracking-[-0.04em] tabular-nums font-extralight">
                    {mounted ? String(value).padStart(2, "0") : "— —"}
                  </div>
                  <div className="mt-1.5 text-[10px] tracking-[0.18em] uppercase font-semibold text-white/45">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden xl:block shrink-0 text-right">
            <p className="text-[11px] tracking-[0.08em] uppercase font-medium text-white/40 border border-white/15 px-3 py-2 bg-white/[0.04]">One-day scientific congress</p>
          </div>
        </div>
      </div>
    </section>
  );
}
