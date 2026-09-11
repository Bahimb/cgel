import Link from "next/link";
import { eventData } from "@/data/event";
import { GCELCurvedRibbons } from "@/components/PosterGraphics";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F1D3A] text-white border-t border-white/10 overflow-hidden">
      <GCELCurvedRibbons variant="divider" className="absolute top-0 inset-x-0 opacity-60" />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_0.9fr_1.1fr] gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-[#023DA5] font-bold text-[12px] tracking-wide">GC</span>
              </div>
              <div>
                <p className="text-[12px] font-bold tracking-[0.14em]">GCEL</p>
                <p className="text-[10px] tracking-[0.14em] uppercase text-white/60">3rd Edition — Scientific Days</p>
              </div>
            </div>
            <p className="mt-4 text-[12px] leading-5 text-white/60 max-w-[320px]">
              Gastroenterology in the Era of Artificial Intelligence & Smart Health
            </p>
            <p className="mt-1 text-[11px] tracking-wide text-white/40">From Medical Innovation to Intelligent Care</p>

            <div className="mt-6 border border-white/10 px-4 py-3 max-w-[320px]">
              <p className="text-[10px] tracking-[0.14em] uppercase font-semibold text-white/50">Save the date</p>
              <p className="mt-1 text-[13px] font-semibold">Thursday, 01 October 2026</p>
              <p className="text-[12px] text-white/60">Ahmed Bey Zenith, Constantine, Algeria</p>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.14em] uppercase font-semibold text-white/50">Sections</h4>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Experts", "/experts"],
                ["Program", "/program"],
                ["Partners", "/partners"],
                ["Venue", "/venue"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/70 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.14em] uppercase font-semibold text-white/50">Information</h4>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <Link href="/faq" className="text-white/70 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-white/70 hover:text-white">
                  Registration
                </Link>
              </li>
              <li className="pt-3 text-[11px] leading-5 text-white/40">
                Organized by <span className="text-white/80">GCEL</span>
                <br />
                Scientific Partner <span className="text-white/80">MISC Laboratory</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.14em] uppercase font-semibold text-white/50">Contact</h4>
            <ul className="mt-4 space-y-1.5 text-[13px] text-white/70">
              <li>
                <a href={`tel:${eventData.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {eventData.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${eventData.contact.email}`} className="hover:text-white break-all">
                  {eventData.contact.email}
                </a>
              </li>
              <li>
                <a href={eventData.contact.websiteHref} target="_blank" rel="noreferrer" className="hover:text-white">
                  {eventData.contact.website}
                </a>
              </li>
            </ul>

            <Link
              href="/registration"
              className="mt-6 inline-flex w-full items-center justify-center bg-[#F08444] px-5 py-3 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors"
            >
              Register Now
            </Link>
            <p className="mt-2 text-[11px] leading-4 text-white/40 text-center">Secure your place at GCEL 2026.</p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 overflow-hidden">
        <GCELCurvedRibbons variant="footer" className="opacity-95" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row gap-2 md:items-center justify-between text-[11px] tracking-wide text-white/70">
          <p>© {new Date().getFullYear()} GCEL — 3rd Edition Scientific Days.</p>
          <p>Constantine, Algeria · International medical congress</p>
        </div>
      </div>
    </footer>
  );
}
