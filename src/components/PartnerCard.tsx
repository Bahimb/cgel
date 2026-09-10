import Link from "next/link";
import type { Partner } from "@/data/partners";

export default function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Link
      href={`/partners/${partner.slug}`}
      className="group flex flex-col items-center justify-center bg-white border border-[#E2E8F0] px-4 py-6 hover:border-[#023DA5]/20 transition-colors text-center"
    >
      <div className="w-10 h-10 border border-[#E2E8F0] flex items-center justify-center text-[#023DA5] group-hover:bg-[#023DA5] group-hover:text-white group-hover:border-[#023DA5] transition-colors">
        <span className="text-[11px] font-bold tracking-wide">
          {partner.name
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("") || "P"}
        </span>
      </div>
      <p className="mt-3 text-[12px] font-semibold text-[#0F1D3A]">{partner.name}</p>
      <p className="mt-1 text-[11px] text-[#64748B] line-clamp-2">{partner.description ?? "Partner"}</p>
    </Link>
  );
}
