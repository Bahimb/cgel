// Poster-faithful reusable graphics — ribbons, technical background, orbit frame
// Colors: #023DA5 (navy), #36C0E7 (cyan), #F08444 (orange)

export function TechnicalNetworkBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 bg-[#F2F7FF] overflow-hidden ${className}`} aria-hidden>
      {/* Provided technical background asset — pale, low-contrast, scientific */}
      <img
        src="/images/gcel-technical-background.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.55]"
      />
      {/* Soft vignette to keep it subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/50" />
    </div>
  );
}

export function GCELCurvedRibbons({ variant = "hero", className = "" }: { variant?: "hero" | "divider" | "footer"; className?: string }) {
  // Use provided curved-ribbons asset — exact poster graphic, not generated
  if (variant === "hero") {
    return (
      <div className={`absolute inset-x-0 top-[84px] lg:top-[72px] h-[220px] lg:h-[300px] overflow-hidden pointer-events-none ${className}`} aria-hidden>
        <img src="/images/gcel-curved-ribbons.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-95" />
      </div>
    );
  }

  if (variant === "divider") {
    return (
      <div className={`relative h-[36px] lg:h-[44px] overflow-hidden pointer-events-none ${className}`} aria-hidden>
        <img src="/images/gcel-curved-ribbons.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        {/* Soften edges for divider */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-20" />
      </div>
    );
  }

  // Footer variant: bottom wave
  return (
    <div className={`absolute inset-x-0 bottom-0 h-[120px] lg:h-[160px] overflow-hidden pointer-events-none ${className}`} aria-hidden>
      <img src="/images/gcel-curved-ribbons.png" alt="" className="absolute inset-0 w-full h-full object-cover object-bottom opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#023DA5]/10 to-transparent" />
    </div>
  );
}

export function MedicalOrbitFrame({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      {/* Outer orange orbit arc — like poster */}
      <svg viewBox="0 0 420 420" className="absolute -inset-[14px] w-[calc(100%+28px)] h-[calc(100%+28px)]" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Large orange arc around top-right */}
        <path d="M 30 40 C 120 6, 260 4, 360 52 S 410 210, 370 320" stroke="#F08444" strokeWidth="2.8" strokeLinecap="round" opacity="0.95" />
        {/* Second thin orange */}
        <path d="M 34 48 C 122 16, 255 14, 352 60 S 400 205, 362 312" stroke="#F08444" strokeWidth="1" opacity="0.5" />
        {/* Navy arc bottom-left */}
        <path d="M 40 300 C 14 220, 10 140, 52 72" stroke="#023DA5" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
        <path d="M 48 292 C 24 220, 20 145, 60 82" stroke="#023DA5" strokeWidth="0.9" opacity="0.45" />
        {/* Small accent ticks */}
        <circle cx="372" cy="58" r="3" fill="#F08444" />
        <circle cx="366" cy="72" r="1.6" fill="#36C0E7" />
        <circle cx="42" cy="312" r="2.2" fill="#023DA5" />
      </svg>

      {/* Inner subtle cyan orbit */}
      <div className="absolute inset-0 rounded-[28%] border border-[#36C0E7]/15 pointer-events-none" />

      {/* Glow behind */}
      <div className="absolute inset-[12%] bg-[#023DA5]/6 blur-[28px] rounded-full" />
      <div className="absolute inset-[18%] bg-[#36C0E7]/8 blur-[20px] rounded-full" />
    </div>
  );
}

export function SectionWaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative h-[28px] overflow-hidden ${flip ? "scale-y-[-1]" : ""}`} aria-hidden>
      <svg viewBox="0 0 1440 28" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 14 C 320 4, 640 24, 960 14 S 1280 4, 1440 14" fill="none" stroke="#E8EDF3" strokeWidth="1" opacity="0.8" />
        <circle cx="720" cy="14" r="1.4" fill="#36C0E7" opacity="0.9" />
        <circle cx="710" cy="14" r="0.8" fill="#F08444" opacity="0.9" />
        <circle cx="730" cy="14" r="0.8" fill="#023DA5" opacity="0.9" />
      </svg>
    </div>
  );
}
