import Link from "next/link";
import type { Expert } from "@/data/experts";

export default function ExpertCard({ expert }: { expert: Expert }) {
  // Use a deterministic portrait based on slug index to avoid randomness
  const imgIndex = Math.abs(hashCode(expert.slug)) % portraits.length;
  const portrait = portraits[imgIndex];

  return (
    <Link
      href={`/experts/${expert.slug}`}
      className="group block border border-[#E2E8F0] bg-white hover:border-[#023DA5]/30 transition-colors"
    >
      <div className="aspect-[4/5] overflow-hidden bg-[#F1F5F9] relative">
        <img
          src={portrait}
          alt={`${expert.name} — ${expert.title}`}
          className="h-full w-full object-cover object-top grayscale-[8%] group-hover:grayscale-0 transition-all duration-500"
          loading="lazy"
        />
        {/* Thin specialty tag — not pill, not glass */}
        <div className="absolute top-0 left-0 bg-white border-b border-r border-[#E2E8F0] px-2.5 py-1">
          <span className="text-[10px] tracking-[0.08em] uppercase font-semibold text-[#023DA5]">{expert.specialty}</span>
        </div>
      </div>
      <div className="px-4 py-4">
        <h3 className="text-[13px] font-bold leading-5 text-[#0F1D3A] group-hover:text-[#023DA5] transition-colors line-clamp-1">
          {expert.name}
        </h3>
        <p className="mt-0.5 text-[12px] font-medium text-[#023DA5] line-clamp-1">{expert.title}</p>
        <p className="mt-1 text-[11px] leading-4 text-[#64748B] line-clamp-1">
          {expert.institution} · {expert.location}
        </p>
        <div className="mt-3 h-px bg-[#E2E8F0]" />
        <p className="mt-3 text-[11px] tracking-[0.04em] text-[#475569] line-clamp-1">{expert.topic}</p>
      </div>
    </Link>
  );
}

function hashCode(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return h;
}

// Professional, diverse medical portrait pool — Unsplash editorial
const portraits = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1537368910025-70035079f3d5?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600&auto=format&fit=crop",
];
