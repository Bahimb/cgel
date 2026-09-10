"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { eventData } from "@/data/event";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      const next = window.scrollY > 24;
      setScrolled((prev) => (prev !== next ? next : prev));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solid = scrolled || !isHome;
  const positionClass = isHome ? "fixed top-0 inset-x-0" : "sticky top-0";
  // Transparent hero mode vs solid
  return (
    <header
      className={`${positionClass} z-50 transition-colors duration-300 ${
        solid ? "bg-white border-b border-[#E2E8F0]" : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[64px] lg:h-[68px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="GCEL Home">
            <div
              className={`w-8 h-8 flex items-center justify-center transition-colors ${solid ? "bg-[#023DA5]" : "bg-white"}`}
            >
              <span className={`font-bold text-[13px] tracking-[0.04em] ${solid ? "text-white" : "text-[#023DA5]"}`}>GC</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-[13px] font-bold tracking-[0.14em] ${solid ? "text-[#023DA5]" : "text-white"}`}>GCEL</span>
              <span className={`text-[10px] tracking-[0.16em] uppercase font-medium ${solid ? "text-[#64748B]" : "text-white/70"}`}>
                3rd EDITION — 2026
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {eventData.navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] tracking-[0.14em] uppercase font-semibold pb-1 border-b transition-colors ${
                    solid
                      ? active
                        ? "text-[#023DA5] border-[#023DA5]"
                        : "text-[#475569] border-transparent hover:text-[#023DA5]"
                      : active
                        ? "text-white border-white"
                        : "text-white/70 border-transparent hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`text-[11px] tracking-[0.14em] uppercase font-semibold pb-1 border-b transition-colors ${
                solid
                  ? ((pathname as string) === "/contact"
                    ? "text-[#023DA5] border-[#023DA5]"
                    : "text-[#475569] border-transparent hover:text-[#023DA5]")
                  : ((pathname as string) === "/contact"
                    ? "text-white border-white"
                    : "text-white/70 border-transparent hover:text-white")
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/registration"
              className="inline-flex items-center justify-center bg-[#F08444] px-5 py-2.5 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors"
            >
              Register Now
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden inline-flex w-9 h-9 items-center justify-center border transition-colors ${
                solid ? "border-[#E2E8F0] bg-white text-[#0F1D3A]" : "border-white/20 bg-white/10 text-white backdrop-blur"
              }`}
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
        <div className="lg:hidden border-t bg-white border-[#E2E8F0]">
          <nav className="mx-auto max-w-[1280px] px-4 py-6 flex flex-col" aria-label="Mobile">
            {[...eventData.navLinks, { label: "Contact", href: "/contact" }].map((link) => (
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
              href="/registration"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center bg-[#F08444] px-6 py-3 text-[12px] tracking-[0.08em] uppercase font-bold text-white"
            >
              Register Now
            </Link>
            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] tracking-wide text-[#64748B]">
              <span>01 OCT 2026 · Ahmed Bey Zenith</span>
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
