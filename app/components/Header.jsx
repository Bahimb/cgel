"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile nav on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="site-header">
      <div className="top-accent" aria-hidden="true"></div>
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="CGEL Home">
            <img src="/cgel.svg" alt="CGEL Logo" />
          </Link>
          <nav className="nav-primary" aria-label="Primary">
            <Link href="/" className={isActive("/") ? "active" : ""} data-i18n="nav.home">Accueil</Link>
            <Link href="/a-propos" className={isActive("/a-propos") || isActive("/about") ? "active" : ""} data-i18n="nav.about">À propos</Link>
            <Link href="/evenements" className={isActive("/evenements") ? "active" : ""} data-i18n="nav.events">Événements</Link>
            <Link href="/projets" className={isActive("/projets") ? "active" : ""} data-i18n="nav.projects">Projets</Link>
            <Link href="/contact" className={isActive("/contact") ? "active" : ""} data-i18n="nav.contact">Contact</Link>
          </nav>
          <div className="header-actions">
            <a href="https://facebook.com/cgel" target="_blank" rel="noopener noreferrer" className="facebook-btn" aria-label="CGEL sur Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 13.5h2.5l1-4H14V7.5c0-1.1.3-1.9 1.9-1.9H18V2.1C17.3 2 15.9 2 14.6 2 11.1 2 9 4.1 9 7.2V9.5H6v4h3v6h4v-6Z" /></svg>
            </a>
            <div className="lang-switcher" role="group" aria-label="Language">
              <button type="button" data-lang="fr" className="active" aria-label="Français">FR</button>
              <button type="button" data-lang="ar" aria-label="العربية">AR</button>
              <button type="button" data-lang="en" aria-label="English">EN</button>
            </div>
            <Link href="/contact" className="btn-contact" data-i18n="nav.contactBtn">Nous contacter</Link>
            <button
              type="button"
              id="menuToggle"
              className="menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={String(open)}
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Menu</span>
              <span className="menu-icon" aria-hidden="true">
                <span className="mi1"></span><span className="mi2"></span><span className="mi3"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div id="mobileNav" className={`mobile-nav ${open ? "open" : ""}`}>
        <nav className="nav-mobile" aria-label="Mobile">
          <Link href="/" className={isActive("/") ? "active-mobile" : ""} data-i18n="nav.home" onClick={() => setOpen(false)}>Accueil</Link>
          <Link href="/a-propos" className={isActive("/a-propos") ? "active-mobile" : ""} data-i18n="nav.about" onClick={() => setOpen(false)}>À propos</Link>
          <Link href="/evenements" className={isActive("/evenements") ? "active-mobile" : ""} data-i18n="nav.events" onClick={() => setOpen(false)}>Événements</Link>
          <Link href="/projets" className={isActive("/projets") ? "active-mobile" : ""} data-i18n="nav.projects" onClick={() => setOpen(false)}>Projets</Link>
          <Link href="/contact" className={isActive("/contact") ? "active-mobile" : ""} data-i18n="nav.contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/contact" className="mobile-cta" data-i18n="nav.contactBtn" onClick={() => setOpen(false)}>Nous contacter</Link>
          <a href="https://facebook.com/cgel" target="_blank" rel="noopener noreferrer" className="facebook-btn" aria-label="CGEL sur Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 13.5h2.5l1-4H14V7.5c0-1.1.3-1.9 1.9-1.9H18V2.1C17.3 2 15.9 2 14.6 2 11.1 2 9 4.1 9 7.2V9.5H6v4h3v6h4v-6Z" /></svg><span>Facebook</span>
          </a>
          <div className="lang-switcher" role="group" aria-label="Language">
            <button type="button" data-lang="fr" className="active" aria-label="Français">FR</button>
            <button type="button" data-lang="ar" aria-label="العربية">AR</button>
            <button type="button" data-lang="en" aria-label="English">EN</button>
          </div>
          <div className="mobile-meta"><span>CGEL · Collège professionnel</span><a href="mailto:college.hgel@gmail.com">college.hgel@gmail.com</a></div>
        </nav>
      </div>
    </header>
  );
}
