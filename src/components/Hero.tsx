import Link from "next/link";
import { Award, Brain, Users, Rocket, Target, Calendar, MapPin } from "lucide-react";
import { TechnicalNetworkBackground, GCELCurvedRibbons, MedicalOrbitFrame } from "@/components/PosterGraphics";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Pale technical background */}
      <TechnicalNetworkBackground />

      {/* Flowing ribbons — poster signature */}
      <GCELCurvedRibbons variant="hero" />

      {/* Top content — CGEL branding + gut orbit */}
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Spacer for navbar (sticky white) */}
        <div className="pt-4 lg:pt-6" />

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-8 items-start">
          {/* Left: Poster header identity */}
          <div className="relative z-10 pt-2 lg:pt-8">
            {/* CGEL 3rd Edition — provided asset */}
            <div className="inline-flex flex-col">
              <img src="/images/cgel-event-title.png" alt="CGEL 3rd Edition Scientific Days" className="w-[300px] sm:w-[360px] lg:w-[380px] h-auto" />
              <div className="mt-2 flex gap-1.5">
                <span className="h-[2px] w-12 bg-[#023DA5]" />
                <span className="h-[2px] w-6 bg-[#36C0E7]" />
                <span className="h-[2px] w-6 bg-[#F08444]" />
              </div>
            </div>

            {/* Real digestive image — poster-faithful, mobile */}
            <div className="lg:hidden mt-8 relative mx-auto w-[300px] h-[360px]">
              <MedicalOrbitFrame className="absolute inset-0" />
              <div className="absolute inset-[14px] overflow-hidden flex items-center justify-center p-2">
                <img
                  src="/images/gcel-digestive-system.png"
                  alt="Digestive system — gastroenterology, GCEL"
                  className="w-full h-full object-contain drop-shadow-[0_8px_24px_rgba(2,61,165,0.18)]"
                />
              </div>
            </div>
          </div>

          {/* Right: Medical orbit — desktop — real image */}
          <div className="hidden lg:block relative h-[380px] lg:h-[440px] -mt-2">
            <MedicalOrbitFrame className="absolute inset-0" />
            <div className="absolute inset-[18px] lg:inset-[22px] overflow-hidden flex items-center justify-center p-3">
              <img
                src="/images/gcel-digestive-system.png"
                alt="Digestive system — gastroenterology, GCEL"
                className="w-full h-full object-contain drop-shadow-[0_10px_28px_rgba(2,61,165,0.20)]"
              />
            </div>
            {/* Subtle AI labels around orbit */}
            <div className="absolute -right-2 top-[22%] bg-white border border-[#E2E8F0] px-2 py-1 text-[10px] font-semibold tracking-[0.08em] text-[#023DA5] shadow-sm">
              AI • Smart Health
            </div>
            <div className="absolute -left-3 bottom-[18%] bg-[#023DA5] text-white px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] shadow-sm">
              GASTRO • 2026
            </div>
          </div>
        </div>

        {/* Center title — like poster */}
        <div className="relative z-10 mt-6 lg:mt-4 text-center max-w-[880px] mx-auto">
          <h1 className="font-extrabold leading-[1.0] tracking-[-0.02em] text-[#023DA5]">
            <span className="block text-[22px] sm:text-[26px] lg:text-[28px]">Gastroenterology in the Era of</span>
            <span className="block text-[24px] sm:text-[30px] lg:text-[34px]">Artificial Intelligence & Smart Health</span>
          </h1>
        </div>

        {/* 5 pillars — poster light-blue cards — real Lucide icons, not emojis */}
        <div className="relative z-10 mt-8 lg:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-3 max-w-[980px] mx-auto">
          {[
            { label: "EXPERT", sub: "CONFERENCE", Icon: Award },
            { label: "SCIENTIFIC", sub: "UPDATE", Icon: Brain },
            { label: "EXCHANGE", sub: "& SHARING", Icon: Users },
            { label: "BEST", sub: "PRACTICES", Icon: Rocket },
            { label: "INNOVATION", sub: "& IA", Icon: Target },
          ].map(({ label, sub, Icon }) => (
            <div
              key={label}
              className="bg-[#EEF4FF] border border-[#D6E2F5] px-3 py-4 lg:py-5 flex flex-col items-center text-center hover:bg-[#E6EEFF] transition-colors group"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#023DA5]/15 flex items-center justify-center shadow-sm group-hover:border-[#F08444]/30 transition-colors text-[#023DA5]">
                <Icon className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]" strokeWidth={1.9} />
              </div>
              <p className="mt-2.5 text-[11px] lg:text-[11px] font-extrabold tracking-[0.08em] text-[#023DA5] leading-tight">
                {label}
                <br />
                {sub}
              </p>
              <span className="mt-2 h-[2px] w-6 bg-[#F08444] group-hover:w-8 transition-all" />
            </div>
          ))}
        </div>

        {/* Date / Location — poster light-blue boxes — real icons */}
        <div className="relative z-10 mt-6 grid md:grid-cols-2 gap-3 lg:gap-4 max-w-[720px] mx-auto">
          <div className="bg-[#EEF4FF] border border-[#D6E2F5] px-4 py-3.5 flex items-center gap-3">
            <span className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#023DA5] text-white flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4" strokeWidth={1.9} />
            </span>
            <div>
              <p className="text-[11px] font-semibold text-[#023DA5] leading-none">Date of the event:</p>
              <p className="text-[13px] lg:text-[14px] font-extrabold text-[#023DA5] leading-tight">Thursday, October 1, 2026</p>
            </div>
          </div>
          <div className="bg-[#EEF4FF] border border-[#D6E2F5] px-4 py-3.5 flex items-center gap-3">
            <span className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#023DA5] text-white flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" strokeWidth={1.9} />
            </span>
            <div>
              <p className="text-[11px] font-semibold text-[#023DA5] leading-none">location:</p>
              <p className="text-[13px] lg:text-[14px] font-extrabold text-[#023DA5] leading-tight">Conference Room</p>
              <p className="text-[12px] font-semibold text-[#023DA5] leading-none">Ahmed Bey Zenith, Constantine</p>
            </div>
          </div>
        </div>

        {/* CTA — poster orange */}
        <div className="relative z-10 mt-7 flex flex-col items-center gap-3">
          <Link
            href="/registration"
            className="inline-flex items-center justify-center bg-[#F08444] px-8 py-3.5 text-[13px] tracking-[0.08em] uppercase font-extrabold text-white hover:bg-[#e57333] transition-colors shadow-[0_4px_16px_rgba(240,132,68,0.28)]"
          >
            REGISTER NOW
          </Link>
          <p className="text-[11px] tracking-wide text-[#64748B]">
            Organized by <span className="font-bold text-[#023DA5]">CGEL</span> <span className="mx-1">·</span> Scientific partner{" "}
            <span className="font-bold text-[#023DA5]">MISC Laboratory</span>
          </p>
        </div>

        {/* Bottom spacing for wave overlap */}
        <div className="h-10 lg:h-14" />
      </div>

      {/* Bottom wave divider — like poster bottom */}
      <div className="absolute bottom-0 inset-x-0">
        <GCELCurvedRibbons variant="divider" className="opacity-90" />
      </div>
    </section>
  );
}
