import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-[#021a4d] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop"
          alt="Endoscopy suite — physician reviewing medical imaging, editorial gastroenterology environment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark blue sophisticated overlay — readable but with depth */}
        <div className="absolute inset-0 bg-[#023DA5]/82" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01103a]/70 via-transparent to-[#023DA5]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02194a]/35 via-transparent to-transparent" />
      </div>

      {/* Bottom subtle grain line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />

      {/* Content — offset for fixed navbar */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-[88px] pb-10 lg:pb-12">
        <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-[760px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#36C0E7]" />
              <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-white/85">GCEL — 3rd Edition Scientific Days</span>
              <span className="hidden sm:inline-flex items-center border border-white/20 bg-white/10 px-2 py-1 text-[10px] tracking-[0.12em] uppercase font-semibold text-white/80">
                Constantine 2026
              </span>
            </div>

            {/* Headline — intentional hierarchy, not same size every line */}
            <h1 className="mt-6 font-serif leading-[0.9] tracking-[-0.03em] text-white">
              <span className="block text-[38px] sm:text-[48px] lg:text-[58px] xl:text-[64px] font-normal">GASTROENTEROLOGY</span>
              <span className="block mt-1 text-[22px] sm:text-[28px] lg:text-[30px] font-light tracking-[-0.02em] text-white/90">
                IN THE ERA OF
              </span>
              <span className="block text-[30px] sm:text-[40px] lg:text-[46px] xl:text-[52px] font-normal">ARTIFICIAL INTELLIGENCE</span>
              <span className="block text-[26px] sm:text-[34px] lg:text-[40px] font-light italic text-[#9DD9EE]">& SMART HEALTH</span>
            </h1>

            {/* Tagline — thin separator */}
            <div className="mt-6 flex items-center gap-4 max-w-[560px]">
              <span className="h-px flex-1 bg-white/20 hidden sm:block" />
              <p className="text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-semibold text-white/70">
                From Medical Innovation <span className="text-white/40 mx-2">—</span> To Intelligent Care
              </p>
            </div>

            {/* Date / Venue — typography, not cards */}
            <div className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-[auto_1px_auto] gap-6 sm:gap-8 items-start max-w-[560px] border-t border-white/15 pt-6">
              <div>
                <p className="text-[10px] tracking-[0.16em] uppercase font-semibold text-white/50">Date</p>
                <p className="mt-1 text-[14px] sm:text-[15px] font-semibold tracking-[0.02em] text-white">01 OCTOBER 2026</p>
                <p className="text-[11px] tracking-wide text-white/60">Thursday — Full day</p>
              </div>
              <span className="hidden sm:block h-12 w-px bg-white/15 self-center" />
              <div>
                <p className="text-[10px] tracking-[0.16em] uppercase font-semibold text-white/50">Venue</p>
                <p className="mt-1 text-[14px] sm:text-[15px] font-semibold tracking-[0.02em] text-white">AHMED BEY ZENITH</p>
                <p className="text-[11px] tracking-[0.08em] uppercase font-medium text-white/60">Constantine, Algeria</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/registration"
                className="inline-flex items-center justify-center bg-[#F08444] px-7 py-3.5 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors"
              >
                Register Now
              </Link>
              <Link
                href="/program"
                className="inline-flex items-center justify-center border border-white/25 bg-white/5 px-7 py-3.5 text-[11px] tracking-[0.08em] uppercase font-semibold text-white hover:bg-white hover:text-[#023DA5] transition-colors backdrop-blur-[2px]"
              >
                Explore the Program
              </Link>
            </div>

            <p className="mt-6 text-[11px] tracking-wide text-white/50">
              Organized by <span className="text-white font-medium">GCEL</span> <span className="mx-1.5 text-white/20">·</span> Scientific Partner{" "}
              <span className="text-white font-medium">MISC Laboratory</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom event meta bar — subtle, not card */}
      <div className="relative z-10 border-t border-white/10 bg-[#021a4d]/40 backdrop-blur-[4px]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center gap-3 text-white/60">
            <span className="h-px w-6 bg-white/20 hidden sm:block" />
            <span className="tracking-wide">A major international gastroenterology congress — Constantine, Algeria</span>
          </div>
          <div className="flex items-center gap-4 text-white/50">
            <span className="hidden sm:inline">0540 69 95 13</span>
            <span className="hidden sm:inline h-3 w-px bg-white/15" />
            <span>college.hgel@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
