"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Retour en haut"
      className={`fixed right-5 bottom-20 z-45 w-11 h-11 rounded-full bg-[#023DA5] text-white border border-white/15 flex items-center justify-center shadow-[0_8px_24px_rgba(2,61,165,0.25)] transition-all duration-200 hover:bg-[#012A7A] hover:-translate-y-0.5 ${visible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
    >
      <ArrowUp className="w-[18px] h-[18px]" strokeWidth={2} />
    </button>
  );
}
