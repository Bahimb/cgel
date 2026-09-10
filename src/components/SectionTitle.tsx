export default function SectionTitle({
  kicker,
  title,
  subtitle,
  align = "left",
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto max-w-[640px]" : "max-w-[640px]"}`}>
      {kicker && (
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-6 bg-[#023DA5]" />
          <p className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">{kicker}</p>
        </div>
      )}
      <h2 className="mt-3 font-serif text-[26px] lg:text-[30px] leading-[1.15] tracking-[-0.02em] text-[#0F1D3A]">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-[14px] leading-6 text-[#475569]">{subtitle}</p>}
    </div>
  );
}
