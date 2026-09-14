"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { eventData } from "@/data/event";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Toujours opaque pour contraste WCAG AA sur fond à vagues — plus de mode transparent
  const solid = true;
  const positionClass = "sticky top-0";
  return (
    <header className={`${positionClass} z-50 bg-white border-b border-[#E8EDF3] shadow-[0_1px_8px_rgba(2,29,58,0.06)]`}>
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#023DA5] via-[#36C0E7] to-[#F08444] opacity-100" />
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] lg:h-[82px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="CGEL Home">
            
            <img src="/cgel.svg" alt="CGEL Logo" className="h-14 lg:h-16 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {eventData.navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] tracking-[0.14em] uppercase font-semibold pb-1 border-b transition-colors ${
                    active ? "text-[#023DA5] border-[#023DA5]" : "text-[#334155] border-transparent hover:text-[#023DA5] hover:border-[#023DA5]/30"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.facebook.com/people/CGEL/61565723925313/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CGEL sur Facebook"
              className="inline-flex items-center justify-center w-[44px] h-[44px] border border-[#E2E8F0] bg-white text-[#023DA5] hover:bg-[#EEF4FF] hover:border-[#023DA5]/25 transition-colors shrink-0"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[22px] h-[22px] fill-current"><path d="M14 13.5h2.5l1-4H14V7.5c0-1.1.3-1.9 1.9-1.9H18V2.1C17.3 2 15.9 2 14.6 2 11.1 2 9 4.1 9 7.2V9.5H6v4h3v6h4v-6Z" /></svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#F08444] px-5 py-2.5 text-[11px] tracking-[0.10em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors shadow-[0_2px_10px_rgba(240,132,68,0.22)]"
            >
              Nous contacter
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex w-9 h-9 items-center justify-center border border-[#E2E8F0] bg-white text-[#0F1D3A] hover:border-[#023DA5]/20 transition-colors"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1">
                <span className={`block h-px w-4 bg-current transition-all ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
                <span className={`block h-px w-4 bg-current transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`block h-px w-4 bg-current transition-all ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-white border-[#E8EDF3]">
          <nav className="mx-auto max-w-[1280px] px-4 py-6 flex flex-col" aria-label="Mobile">
            {eventData.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-[13px] tracking-[0.08em] uppercase font-semibold border-b border-[#F1F5F9] last:border-0 ${
                  pathname === link.href ? "text-[#023DA5]" : "text-[#334155]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center bg-[#F08444] px-6 py-3 text-[12px] tracking-[0.08em] uppercase font-bold text-white"
            >
              Nous contacter
            </Link>
            <a
              href="https://www.facebook.com/people/CGEL/61565723925313/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 w-full border border-[#E2E8F0] bg-white px-6 py-3 text-[12px] tracking-[0.06em] uppercase font-semibold text-[#023DA5] hover:bg-[#EEF4FF]"
              aria-label="CGEL sur Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current"><path d="M14 13.5h2.5l1-4H14V7.5c0-1.1.3-1.9 1.9-1.9H18V2.1C17.3 2 15.9 2 14.6 2 11.1 2 9 4.1 9 7.2V9.5H6v4h3v6h4v-6Z" /></svg>
              Facebook
            </a>
            <div className="mt-6 pt-4 border-t border-[#E8EDF3] flex items-center justify-between text-[11px] tracking-wide text-[#64748B]">
              <span>CGEL · Collège professionnel</span>
              <a href={`mailto:${eventData.contact.email}`} className="text-[#023DA5] font-medium">
                {eventData.contact.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}