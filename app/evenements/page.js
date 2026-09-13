export const metadata = {
  title: "Événements — CGEL",
  description: "Les événements du CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est : journées scientifiques, congrès et rencontres de la spécialité.",
  openGraph: {
    title: "Événements — CGEL",
    description: "Les événements du CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est : journées scientifiques, congrès et rencontres de la spécialité.",
    type: "website",
    locale: "fr_FR",
    url: "https://cgel-gastro.com",
  },
};

export default function Page() {
  return (
    <>
      <div className="page-hero">
    <div className="page-hero-inner">
      <div className="page-kicker"><span className="line"></span><span data-i18n="events.hero.kicker">Événements</span></div>
      <h1 data-i18n="events.hero.title">Les événements du CGEL</h1>
      <p className="lead" data-i18n="events.hero.lead">Journées scientifiques, congrès et rencontres de la hépato-gastroentérologie libérale de l'Est.</p>
    </div>
  </div>
  <div style={{background:"#F8FAFC"}}>
    <div className="container" style={{padding:"1.5rem 1rem 2rem"}}>
{/* Featured */}
      <div className="featured-event" style={{marginTop:"2.5rem"}}>
        <div className="accent-top"></div>
        <div className="featured-grid">
          <div className="featured-main">
            <div className="featured-badge-row"><span className="badge" data-i18n="events.featured.badge">À la une</span><span className="muted" data-i18n="events.featured.muted">Journées scientifiques</span></div>
            <h2 className="featured-title" data-i18n="events.featured.title">CGEL Days — 3<sup style={{fontSize:"16px"}}>e</sup> Édition</h2>
            <p className="featured-desc" data-i18n="events.featured.desc">Gastroenterologie à l'ère de l'intelligence artificielle et de la santé connectée — le rendez-vous scientifique du collège, aux côtés d'un partenariat universitaire.</p>
            <div className="featured-meta">
              <div className="row"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg></span> Jeudi 1 octobre 2026</div>
              <div className="row"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span> Ahmed Bey Zenith, Constantine, Algérie</div>
            </div>
            <div style={{marginTop:"1.75rem",display:"flex",flexWrap:"wrap",gap:".75rem"}}>
              <a href="/about" className="btn btn-navy" data-i18n="events.featured.btnMore">En savoir plus</a>
              <a href="/contact" className="btn btn-ghost" data-i18n="events.featured.btnContact">Nous contacter</a>
            </div>
          </div>
          <div className="featured-side">
            <div style={{textAlign:"center",maxWidth:"280px"}}>
              <div className="circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063A2 2 0 0 0 14.063 15.5l-1.582 6.135a.5.5 0 0 1-.963 0Z"/><path d="M20 2v4"/><path d="M22 4h-4"/><path d="M3 10a2 2 0 0 0 2 2"/><path d="M3 14a2 2 0 0 1 2-2"/></svg></div>
              <p style={{marginTop:"1rem",fontSize:"11px",letterSpacing:".18em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}}>À venir</p>
              <p style={{marginTop:".5rem",fontSize:"12px",lineHeight:"1.6",color:"#64748B",fontWeight:"300"}}>Plus de détails sur le programme, les intervenants et l'inscription seront publiés ici.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="partners-box">
        <div className="accent"></div>
        <div className="inner">
          <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
              <div style={{display:"flex",alignItems:"center",gap:".75rem"}}><span style={{height:"1px",width:"32px",background:"#F08444"}}></span><span style={{fontSize:"11px",letterSpacing:".18em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}}>Ils nous soutiennent</span></div>
              <h3 style={{margin:"0",fontFamily:"inherit",fontSize:"22px",lineHeight:"1.1",letterSpacing:"-.02em",color:"#0F1D3A"}} data-i18n="carousel.org.partner">Nos partenaires</h3>
</div>
            <span className="hidden sm:inline-flex"><span style={{fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",fontWeight:"600",color:"#94A3B8",border:"1px solid #E8EDF3",padding:".4rem .75rem",background:"#F8FAFC"}}>10 partenaires confirmés</span></span>
          </div>
          <div className="partner-logos-grid">
            <div className="logo-cell"><img src="/logo/logosponsor/astrazeneca.png" alt="AstraZeneca — partenaire CGEL Days" loading="lazy" /></div>
            <div className="logo-cell"><img src="/logo/logosponsor/biopharm.png" alt="Biopharm — partenaire CGEL Days" loading="lazy" /></div>
            <div className="logo-cell"><img src="/logo/logosponsor/dermilyne.png" alt="Dermilyne — partenaire CGEL Days" loading="lazy" /></div>
            <div className="logo-cell"><img src="/logo/logosponsor/krays.png" alt="Krays — partenaire CGEL Days" loading="lazy" /></div>
            <div className="logo-cell"><img src="/logo/logosponsor/mayoly.PNG" alt="Mayoly — partenaire CGEL Days" loading="lazy" /></div>
            <div className="logo-cell"><img src="/logo/logosponsor/nadpharmaclic.png" alt="Nadphar — partenaire CGEL Days" loading="lazy" /></div>
            <div className="logo-cell"><img src="/logo/logosponsor/repartidis.png" alt="Repartidis — partenaire CGEL Days" loading="lazy" /></div>
            <div className="logo-cell"><img src="/logo/logosponsor/salem.PNG" alt="Salem — partenaire CGEL Days" loading="lazy" /></div>
            <div className="logo-cell"><img src="/logo/logosponsor/merinal.png" alt="Partenaire — CGEL Days" loading="lazy" /></div>
            <div className="logo-cell"><img src="/logo/logosponsor/yovene.png" alt="Yovene — partenaire CGEL Days" loading="lazy" /></div>
          </div>
        </div>
      {/* Previous Events */}
      <div className="past-events" style={{marginTop:"2.5rem",border:"1px solid var(--line)",background:"#fff",padding:"2rem"}}>
        <div style={{display:"flex",alignItems:"center",gap:".75rem",marginBottom:"1rem"}}><span style={{height:"1px",width:"32px",background:"#F08444"}}></span><span style={{fontSize:"11px",letterSpacing:".18em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}} data-i18n="pastEvents.kicker">Événements passés</span></div>
        <h3 style={{margin:"0",fontSize:"20px",lineHeight:"1.1",letterSpacing:"-.02em",color:"#0F1D3A"}} data-i18n="events.previousTitle">Événements précédents</h3>
        <p style={{marginTop:".5rem",fontSize:"12px",lineHeight:"1.6",color:"#475569",maxWidth:"600px"}} data-i18n="events.previousDesc">Retour sur nos éditions antérieures — remplacez les placeholders par vos vraies photos dans <code>images/events/</code>.</p>
        <div className="past-events-grid" style={{marginTop:"1.5rem"}}>
          <div className="event-card">
            <div className="img"><img src="/images/events/event-1.jpg" alt="Événement passé 1" loading="lazy" onerror="this.src='images/gcel-digestive-system.png'" /></div>
            <div className="cap"><h3>CGEL Days — Édition 1</h3><p>Constantine · 2024</p></div>
          </div>
          <div className="event-card">
            <div className="img"><img src="/images/events/event-2.jpg" alt="Événement passé 2" loading="lazy" onerror="this.src='images/gcel-digestive-system.png'" /></div>
            <div className="cap"><h3>Journée scientifique</h3><p>Échanges &amp; cas cliniques · 2023</p></div>
          </div>
          <div className="event-card">
            <div className="img"><img src="/images/events/event-3.jpg" alt="Événement passé 3" loading="lazy" onerror="this.src='images/gcel-poster.png'" /></div>
            <div className="cap"><h3>Atelier endoscopie</h3><p>Formation pratique</p></div>
          </div>
        </div>
        <div className="past-events-grid" style={{marginTop:"1rem"}}>
          <div className="event-card">
            <div className="img"><img src="/images/events/event-4.jpg" alt="Événement passé 4" loading="lazy" onerror="this.src='images/gcel-digestive-system.png'" /></div>
            <div className="cap"><h3>Conférence IA &amp; Santé</h3><p>Innovation · 2024</p></div>
          </div>
          <div className="event-card">
            <div className="img"><img src="/images/events/event-5.jpg" alt="Événement passé 5" loading="lazy" onerror="this.src='images/gcel-poster.png'" /></div>
            <div className="cap"><h3>Rencontre partenaires</h3><p>Échanges laboratoires</p></div>
          </div>
          <div className="event-card">
            <div className="img"><img src="/images/events/event-6.jpg" alt="Événement passé 6" loading="lazy" onerror="this.src='images/gcel-digestive-system.png'" /></div>
            <div className="cap"><h3>Clôture &amp; moments forts</h3><p>Constantine</p></div>
          </div>
        </div>
      </div>

      </div>
    </div>
  </div>
    </>
  );
}
