import Link from "next/link";
import type { Expert } from "@/data/experts";

function getInitials(expert: Expert): string {
  if (!expert.image) {
    const words = expert.specialty
      .split(/[\s&\/—\-]+/)
      .filter(Boolean)
      .slice(0, 2);
    if (words.length === 0) return "GC";
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  const parts = expert.name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "GC";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function ExpertCard({ expert }: { expert: Expert }) {
  const initials = getInitials(expert);
  const hasPhoto = Boolean(expert.image);

  return (
    <Link
      href={`/experts/${expert.slug}`}
      className="group block border border-[#E8EDF3] bg-white hover:border-[#D6DEE8] hover:shadow-[0_8px_28px_rgba(2,29,58,0.08)] transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="aspect-[4/5] overflow-hidden relative bg-[#023DA5] flex items-center justify-center">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
        {/* Luxe inner mat */}
        <div className="absolute inset-[8px] border border-white/[0.06] pointer-events-none" />

        {hasPhoto ? (
          <>
            <img
              src={expert.image}
              alt={`${expert.name} — ${expert.title}`}
              className="absolute inset-0 w-full h-full object-cover object-top grayscale-[10%] group-hover:grayscale-0 transition duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#023DA5]/8 mix-blend-multiply pointer-events-none" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#023DA5] via-[#023DA5] to-[#0a2e7a]" />
            {/* Soft glow */}
            <div className="absolute inset-[22%] bg-white/5 blur-[24px] rounded-full pointer-events-none" />
            <div className="relative flex flex-col items-center gap-3 p-6">
              <div className="relative">
                <div className="w-[88px] h-[88px] rounded-full bg-white flex items-center justify-center border-[3px] border-white shadow-[0_6px_22px_rgba(0,0,0,0.20)]">
                  <span className="font-serif text-[22px] font-bold tracking-[-0.02em] text-[#023DA5]">{initials}</span>
                </div>
                {/* Luxe double ring */}
                <div className="absolute -inset-[5px] rounded-full border border-white/20 pointer-events-none" />
                <div className="absolute -inset-[9px] rounded-full border border-white/8 pointer-events-none" />
              </div>
              <span className="h-px w-10 bg-white/20" />
              <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-white/65 text-center max-w-[160px] leading-4">
                {expert.specialty}
              </span>
            </div>
            <span className="absolute bottom-3 right-3 w-2 h-2 bg-[#F08444] border border-white/20 shadow-sm" />
          </>
        )}

        <div className="absolute top-0 left-0 max-w-[88%] bg-white border-b border-r border-[#E8EDF3] px-2.5 py-1.5 overflow-hidden shadow-sm">
          <span className="block text-[10px] tracking-[0.08em] uppercase font-semibold text-[#023DA5] truncate">{expert.specialty}</span>
        </div>
      </div>

      <div className="px-4 py-4 flex flex-col flex-1 min-w-0 bg-white">
        <h3 className="text-[13px] font-bold leading-5 text-[#0F1D3A] group-hover:text-[#023DA5] transition-colors truncate" title={expert.name}>
          {expert.name}
        </h3>
        <p className="mt-0.5 text-[12px] font-medium text-[#023DA5] truncate" title={expert.title}>
          {expert.title}
        </p>
        <p className="mt-1 text-[11px] leading-4 text-[#64748B] truncate font-light" title={`${expert.institution} · ${expert.location}`}>
          {expert.institution} · {expert.location}
        </p>
        <div className="mt-3 h-px bg-gradient-to-r from-[#E8EDF3] via-[#E8EDF3] to-transparent" />
        <p className="mt-3 text-[11px] tracking-[0.04em] text-[#475569] truncate font-light" title={expert.topic}>
          {expert.topic}
        </p>
      </div>
    </Link>
  );
}
