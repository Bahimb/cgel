"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileRegisterBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname === "/registration" || pathname === "/registration/success") return;
    const onScroll = () => {
      const shouldShow = window.scrollY > 560;
      setVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-[#E2E8F0] px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] tracking-[0.12em] uppercase font-semibold text-[#64748B]">GCEL — 01 Oct 2026</p>
          <p className="text-[12px] font-semibold text-[#0F1D3A] truncate">Ahmed Bey Zenith, Constantine</p>
        </div>
        <Link
          href="/registration"
          className="shrink-0 inline-flex items-center justify-center bg-[#F08444] px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-bold text-white"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
