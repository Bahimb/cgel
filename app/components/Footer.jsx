import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="logo-box"><img src="/cgel.svg" alt="CGEL Logo" /></div>
              <div>
                <p className="k">CGEL</p>
                <p className="sub">Collège professionnel</p>
              </div>
            </div>
            <p className="footer-desc" data-i18n="footer.desc">Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l&apos;Est — au service de la gastroentérologie libérale.</p>
            <div className="footer-mission">
              <p className="label" data-i18n="footer.missionLabel">Notre mission</p>
              <p className="title" data-i18n="footer.missionTitle">Faire progresser la spécialité</p>
              <p className="sub2" data-i18n="footer.missionSub">Formation · échange · représentation</p>
            </div>
          </div>
          <div className="footer-col">
            <h4 data-i18n="footer.sectionsTitle">Sections</h4>
            <ul>
              <li><Link href="/" data-i18n="nav.home">Accueil</Link></li>
              <li><Link href="/a-propos" data-i18n="nav.about">À propos</Link></li>
              <li><Link href="/evenements" data-i18n="nav.events">Événements</Link></li>
              <li><Link href="/projets" data-i18n="nav.projects">Projets</Link></li>
              <li><Link href="/contact" data-i18n="nav.contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 data-i18n="footer.infoTitle">Information</h4>
            <ul>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact" data-i18n="nav.contact">Contact</Link></li>
              <li style={{ paddingTop: ".75rem", fontSize: "11px", lineHeight: "1.6", color: "rgba(255,255,255,.4)" }}><span style={{ color: "rgba(255,255,255,.8)" }}>CGEL</span><br />Collège professionnel de l&apos;Est</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 data-i18n="footer.contactTitle">Contact</h4>
            <ul className="footer-contact">
              <li><a href="tel:+213540699513">0540 69 95 13</a></li>
              <li><a href="mailto:college.hgel@gmail.com" style={{ wordBreak: "break-all" }}>college.hgel@gmail.com</a></li>
              <li><a href="https://cgel-gastro.com" target="_blank" rel="noreferrer">cgel-gastro.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <div className="container">
          <div className="footer-bottom">
            <p data-i18n="footer.copyright">© 2026 CGEL — Collège professionnel.</p>
            <p data-i18n="footer.tagline">Hépato-gastroentérologie libérale · Est</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
