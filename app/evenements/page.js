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
            <h2 className="featured-title" data-i18n="events.featured.title">CGEL Scientific Days — 3<sup style={{fontSize:"16px"}}>e</sup> édition</h2>
            <p className="featured-desc" data-i18n="events.featured.desc">Gastroentérologie à l&apos;ère de l&apos;intelligence artificielle et de la santé connectée — le rendez-vous scientifique du collège, organisé en partenariat scientifique avec l&apos;Université Constantine 2 Abdelhamid Mehri, Faculté NTIC (partenariat propre à cette journée).</p>
            <div className="featured-meta">
              <div className="row"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg></span> <span data-i18n="events.featured.date">Jeudi 1 octobre 2026</span></div>
              <div className="row"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span> <span data-i18n="events.featured.place">Ahmed Bey Zenith, Constantine, Algérie</span></div>
            </div>
            <div style={{marginTop:"1.75rem",display:"flex",flexWrap:"wrap",gap:".75rem"}}>
              <a href="/about" className="btn btn-navy" data-i18n="events.featured.btnMore">En savoir plus</a>
              <a href="/contact" className="btn btn-ghost" data-i18n="events.featured.btnContact">Nous contacter</a>
            </div>
          </div>
          <div className="featured-side">
            <div style={{textAlign:"center",maxWidth:"280px"}}>
              <div className="circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063A2 2 0 0 0 14.063 15.5l-1.582 6.135a.5.5 0 0 1-.963 0Z"/><path d="M20 2v4"/><path d="M22 4h-4"/><path d="M3 10a2 2 0 0 0 2 2"/><path d="M3 14a2 2 0 0 1 2-2"/></svg></div>
              <p style={{marginTop:"1rem",fontSize:"11px",letterSpacing:".18em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}} data-i18n="events.coming">À venir</p>
              <p style={{marginTop:".5rem",fontSize:"12px",lineHeight:"1.6",color:"#64748B",fontWeight:"300"}} data-i18n="events.comingDesc">Plus de détails sur le programme, les intervenants et l'inscription seront publiés ici.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors — CGEL Scientific Days uniquement */}
      <div className="partners-box">
        <div className="accent"></div>
        <div className="inner">
          <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            <div style={{display:"flex",flexDirection:"column",gap:".5rem"}}>
              <div style={{display:"flex",alignItems:"center",gap:".75rem"}}><span style={{height:"1px",width:"32px",background:"#F08444"}}></span><span style={{fontSize:"11px",letterSpacing:".18em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}} data-i18n="partners.ilsNousSoutiennent">Ils nous soutiennent</span></div>
              <h3 style={{margin:"0",fontFamily:"inherit",fontSize:"22px",lineHeight:"1.1",letterSpacing:"-.02em",color:"#0F1D3A"}} data-i18n="partners.nosSponsors">Nos Sponsors</h3>
              <p style={{fontSize:"11px",lineHeight:"1.6",color:"#64748B"}} data-i18n="partners.sponsorDescription">CGEL Scientific Days — 3e édition — partenariat et sponsors propres à cet événement</p>
</div>
            <span className="hidden sm:inline-flex"><span style={{fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",fontWeight:"600",color:"#94A3B8",border:"1px solid #E8EDF3",padding:".4rem .75rem",background:"#F8FAFC"}} data-i18n="events.sponsors.count">10 sponsors confirmés</span></span>
          </div>
          <div className="partner-logos-grid">
            <div className="logo-cell" style={{height:"124px"}}><img src="/logo/logosponsor/astrazeneca.png" alt="AstraZeneca — Sponsor CGEL Scientific Days" loading="lazy" style={{maxHeight:"72px"}} /></div>
            <div className="logo-cell" style={{height:"124px"}}><img src="/logo/logosponsor/biopharm.png" alt="Biopharm — Sponsor CGEL Scientific Days" loading="lazy" style={{maxHeight:"72px"}} /></div>
            <div className="logo-cell" style={{height:"124px"}}><img src="/logo/logosponsor/dermilyne.png" alt="Dermilyne — Sponsor CGEL Scientific Days" loading="lazy" style={{maxHeight:"72px"}} /></div>
            <div className="logo-cell" style={{height:"124px"}}><img src="/logo/logosponsor/krays.png" alt="Krays — Sponsor CGEL Scientific Days" loading="lazy" style={{maxHeight:"72px"}} /></div>
            <div className="logo-cell" style={{height:"124px"}}><img src="/logo/logosponsor/mayoly.PNG" alt="Mayoly — Sponsor CGEL Scientific Days" loading="lazy" style={{maxHeight:"72px"}} /></div>
            <div className="logo-cell" style={{height:"124px"}}><img src="/logo/logosponsor/nadpharmaclic.png" alt="Nadphar — Sponsor CGEL Scientific Days" loading="lazy" style={{maxHeight:"72px"}} /></div>
            <div className="logo-cell" style={{height:"124px"}}><img src="/logo/logosponsor/repartidis.png" alt="Repartidis — Sponsor CGEL Scientific Days" loading="lazy" style={{maxHeight:"72px"}} /></div>
            <div className="logo-cell" style={{height:"124px"}}><img src="/logo/logosponsor/salem.PNG" alt="Salem — Sponsor CGEL Scientific Days" loading="lazy" style={{maxHeight:"72px"}} /></div>
            <div className="logo-cell" style={{height:"124px"}}><img src="/logo/logosponsor/merinal.png" alt="Merinal — Sponsor CGEL Scientific Days" loading="lazy" style={{maxHeight:"72px"}} /></div>
            <div className="logo-cell" style={{height:"124px"}}><img src="/logo/logosponsor/yovene.png" alt="Yovene — Sponsor CGEL Scientific Days" loading="lazy" style={{maxHeight:"72px"}} /></div>
          </div>
        </div>
      {/* Événements précédents — 3 événements réels, affiches lisibles */}
      <div className="past-events" style={{marginTop:"2.5rem",border:"1px solid var(--line)",background:"#fff",padding:"2rem"}}>
        <div style={{display:"flex",alignItems:"center",gap:".75rem",marginBottom:"1rem"}}><span style={{height:"1px",width:"32px",background:"#F08444"}}></span><span style={{fontSize:"11px",letterSpacing:".18em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}} data-i18n="pastEvents.kicker">Événements passés</span></div>
        <h3 style={{margin:"0",fontSize:"20px",lineHeight:"1.1",letterSpacing:"-.02em",color:"#0F1D3A"}} data-i18n="events.previousTitle">Événements précédents</h3>
        <p style={{marginTop:".5rem",fontSize:"12px",lineHeight:"1.6",color:"#475569",maxWidth:"600px"}} data-i18n="events.previousDesc">Retour sur nos rencontres précédentes.</p>
        <div className="past-events-grid" style={{marginTop:"1.5rem"}}>
          <div className="event-card">
            <div className="img" style={{aspectRatio:"3/4.2", background:"#fff", padding:"8px"}}><img src="/images/events/eventposter1.jpeg" alt="2ème Journée de Formation Médicale Continue CGEL" loading="lazy" style={{objectFit:"contain", background:"#fff"}} /></div>
            <div className="cap" style={{padding:"1rem"}}>
              <h3 style={{fontSize:"13px", fontWeight:"700", whiteSpace:"normal"}} data-i18n="events.past1.title">2ème Journée de Formation Médicale Continue CGEL</h3>
              <p style={{fontSize:"11px", color:"var(--muted)", marginTop:".25rem"}} data-i18n="events.past1.meta">25–26 septembre 2025 · Hôtel El Hocine, Constantine</p>
              <p style={{fontSize:"11.5px", lineHeight:"1.6", color:"var(--muted2)", marginTop:".5rem", whiteSpace:"normal"}} data-i18n="events.past1.desc">Deux jours de formation et d’échanges scientifiques à l’Hôtel El Hocine.</p>
            </div>
          </div>
          <div className="event-card">
            <div className="img" style={{aspectRatio:"3/4.2", background:"#fff", padding:"8px"}}><img src="/images/events/eventposter.jpeg" alt="Proctologie clinique pour le médecin généraliste" loading="lazy" style={{objectFit:"contain", background:"#fff"}} /></div>
            <div className="cap" style={{padding:"1rem"}}>
              <h3 style={{fontSize:"13px", fontWeight:"700", whiteSpace:"normal"}} data-i18n="events.past2.title">Proctologie clinique pour le médecin généraliste</h3>
              <p style={{fontSize:"11px", color:"var(--primary)", fontWeight:"600"}} data-i18n="events.past2.badge">1ère soirée FMC</p>
              <p style={{fontSize:"11px", color:"var(--muted)", marginTop:".15rem"}} data-i18n="events.past2.meta">25 décembre 2025, 17h00 · Restaurant Délice, Ali Mendjeli</p>
              <p style={{fontSize:"11.5px", lineHeight:"1.6", color:"var(--muted2)", marginTop:".5rem", whiteSpace:"normal"}} data-i18n="events.past2.desc">Soirée pratique en partenariat avec Repartidis.</p>
            </div>
          </div>
          <div className="event-card">
            <div className="img" style={{aspectRatio:"3/4.2", background:"#fff", padding:"8px"}}><img src="/images/events/eventposter2.jpeg" alt="Trouble fonctionnel de l’intestin" loading="lazy" style={{objectFit:"contain", background:"#fff"}} /></div>
            <div className="cap" style={{padding:"1rem"}}>
              <h3 style={{fontSize:"13px", fontWeight:"700", whiteSpace:"normal"}} data-i18n="events.past3.title">Trouble fonctionnel de l’intestin : approche pratique</h3>
              <p style={{fontSize:"11px", color:"var(--primary)", fontWeight:"600"}} data-i18n="events.past3.badge">3ème soirée FMC</p>
              <p style={{fontSize:"11px", color:"var(--muted)", marginTop:".15rem"}} data-i18n="events.past3.meta">07 mai 2026, 17h00 · Restaurant Apex, Constantine</p>
              <p style={{fontSize:"11.5px", lineHeight:"1.6", color:"var(--muted2)", marginTop:".5rem", whiteSpace:"normal"}} data-i18n="events.past3.desc">En collaboration avec le Laboratoire Mayoly.</p>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  </div>
    </>
  );
}
