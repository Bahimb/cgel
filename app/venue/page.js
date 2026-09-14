export const metadata = {
  title: "Lieu — Ahmed Bey Zenith, Constantine | CGEL",
  description: "Informations sur le lieu des CGEL Scientific Days 3e Édition — Ahmed Bey Zenith, Constantine, Algérie. 1 octobre 2026.",
  openGraph: {
    title: "Lieu — Ahmed Bey Zenith, Constantine | CGEL",
    description: "Informations sur le lieu des CGEL Scientific Days 3e Édition — Ahmed Bey Zenith, Constantine, Algérie. 1 octobre 2026.",
    type: "website",
    locale: "fr_FR",
    url: "https://cgel-gastro.com",
  },
};

export default function Page() {
  return (
    <>
      <div className="page-hero" style={{position:"relative",overflow:"hidden"}}>
    <div className="technical-bg" aria-hidden="true"><img src="/images/gcel-technical-background.png" alt="" /></div>
    <div className="page-hero-inner">
      <div className="page-kicker"><span className="line"></span><span data-i18n="venue.kicker">Lieu</span></div>
      <h1 data-i18n="venue.title">Ahmed Bey Zenith, Constantine</h1>
      <p className="lead" data-i18n="venue.lead">Ahmed Bey Zenith, Constantine, Algérie · Jeudi 1 octobre 2026</p>
    </div>
  </div>
  <div style={{background:"#fff",position:"relative"}}>
    <div className="technical-bg" aria-hidden="true" style={{opacity:".25"}}><img src="/images/gcel-technical-background.png" alt="" /></div>
    <div className="container" style={{position:"relative",padding:"2.5rem 1rem 3rem"}}>
      <div className="venue-grid">
        <div className="venue-image">
          <img src="/images/ahmed-bey-zenith.jpg" alt="Ahmed Bey Zenith — Constantine" loading="lazy" />
          <div className="caption"><p style={{margin:"0"}} data-i18n="venue.title">Ahmed Bey Zenith · Constantine</p></div>
        </div>
        <div className="venue-info">
          <h2 data-i18n="venue.aboutTitle">À propos du lieu</h2>
          <p className="lead" data-i18n="venue.aboutDesc">Le Ahmed Bey Zenith est l'une des principales salles de congrès d'Algérie, située dans la ville historique de Constantine. Le lieu offre des installations modernes pour des rencontres scientifiques internationales dans un cadre prestigieux.</p>
          <div className="venue-details">
            <div className="row"><span className="label" data-i18n="venue.address">Adresse</span><span className="value" data-i18n="venue.addressValue">Ahmed Bey Zenith, Constantine, Algérie</span></div>
            <div className="row"><span className="label" data-i18n="venue.date">Date</span><span className="value" data-i18n="venue.dateValue">Jeudi 1 octobre 2026 — Journée entière</span></div>
          </div>
          <div className="venue-actions">
            <a href="https://maps.google.com/?q=Ahmed+Bey+Zenith+Constantine+Algeria" target="_blank" rel="noreferrer" className="btn btn-navy" data-i18n="venue.mapBtn">Ouvrir dans Google Maps</a>
            <a href="/registration" className="btn btn-orange" data-i18n="nav.contactBtn">S'inscrire</a>
          </div>
        </div>
      </div>
      <div className="venue-announcement">
        <img src="/images/gcel-venue-announcement.png" alt="Annonce du lieu — Ahmed Bey Zenith, CGEL Scientific Days" />
      </div>
    </div>
  </div>
    </>
  );
}
