import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SiteEffects from "./components/SiteEffects";

export const metadata = {
  title: {
    default: "CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est",
    template: "%s — CGEL",
  },
  description: "CGEL : le collège des hépato-gastroentérologues et endoscopistes libéraux de l'Est. Événements, projets et actualités de la gastroentérologie libérale.",
  metadataBase: new URL("https://cgel-gastro.com"),
  openGraph: {
    title: "CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est",
    description: "CGEL : le collège des hépato-gastroentérologues et endoscopistes libéraux de l'Est.",
    type: "website",
    locale: "fr_FR",
    url: "https://cgel-gastro.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr">
      <body>
        <a href="#main" className="sr-only">Aller au contenu</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <div id="mobileBar" className="mobile-bar">
          <div className="mobile-bar-inner">
            <div className="mobile-bar-text">
              <p className="k" data-i18n="mobileBar.title">CGEL — 01 oct. 2026</p>
              <p className="loc" data-i18n="mobileBar.loc">Ahmed Bey Zenith, Constantine</p>
            </div>
            <a href="/registration" data-i18n="mobileBar.cta">S&apos;inscrire</a>
          </div>
        </div>
        <button type="button" id="backToTop" aria-label="Retour en haut">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m18 15-6-6-6 6"/>
          </svg>
          <span data-i18n="backToTop" class="sr-only"></span>
          </button>
        <div className="lightbox" id="galleryLightbox" aria-hidden="true" role="dialog" aria-label="Galerie agrandie" style={{display: "none"}}>
          <button type="button" className="close" aria-label="Fermer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <img src="" alt="" />
          <p className="caption"></p>
        </div>
        <SiteEffects />
      </body>
    </html>
  );
}
