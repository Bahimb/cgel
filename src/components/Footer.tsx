import Link from "next/link";
import { eventData } from "@/data/event";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F1D3A] text-white border-t border-white/10 overflow-hidden">
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_0.9fr_1.1fr] gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white  flex items-center justify-center">
                <img src="/cgel.svg" alt="CGEL Logo" className="h-10 w-auto" />

              </div>
              <div>
                <p className="text-[12px] font-bold tracking-[0.14em]">CGEL</p>
                <p className="text-[10px] tracking-[0.14em] uppercase text-white/60">Collège professionnel</p>
              </div>
            </div>
            <p className="mt-4 text-[12px] leading-5 text-white/60 max-w-[320px]">
              Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l&apos;Est — au service de la gastroentérologie libérale.
            </p>

            <div className="mt-6 border border-white/10 px-4 py-3 max-w-[320px]">
              <p className="text-[10px] tracking-[0.14em] uppercase font-semibold text-white/50">Notre mission</p>
              <p className="mt-1 text-[13px] font-semibold">Faire progresser la spécialité</p>
              <p className="text-[12px] text-white/60">Formation · échange · représentation</p>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.14em] uppercase font-semibold text-white/50">Sections</h4>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              {[
                ["Accueil", "/"],
                ["À propos", "/a-propos"],
                ["Événements", "/evenements"],
                ["Projets", "/projets"],
                ["Contact", "/contact"],
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
              <li className="pt-3 text-[11px] leading-5 text-white/40">
                <span className="text-white/80">CGEL</span>
                <br />
                Collège professionnel de l&apos;Est
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
              href="/contact"
              className="mt-6 inline-flex w-full items-center justify-center bg-[#F08444] px-5 py-3 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333] transition-colors"
            >
              Nous contacter
            </Link>
            <p className="mt-2 text-[11px] leading-4 text-white/40 text-center">Une question ? Écrivez-nous.</p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 overflow-hidden">
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row gap-2 md:items-center justify-between text-[11px] tracking-wide text-white/70">
          <p>© {new Date().getFullYear()} CGEL — Collège professionnel.</p>
          <p>Hépato-gastroentérologie libérale · Est</p>
        </div>
      </div>
    </footer>
  );
}