export const metadata = {
  title: "Projets — CGEL",
  description: "Les projets du CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est : initiatives pour la profession et la pratique libérale.",
  openGraph: {
    title: "Projets — CGEL",
    description: "Les projets du CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est : initiatives pour la profession et la pratique libérale.",
    type: "website",
    locale: "fr_FR",
    url: "https://cgel-gastro.com",
  },
};

export default function Page() {
  return (
    <div className="coming-wrap" style={{background:"#F8FAFC", minHeight:"60vh"}}>
      <div className="page-hero" style={{background:"#fff", borderBottom:"1px solid var(--line)"}}>
        <div className="page-hero-inner">
          <div className="page-kicker"><span className="line"></span><span data-i18n="projets.kicker">Projets</span></div>
          <h1 data-i18n="projets.title">Les projets du CGEL</h1>
          <p className="lead" data-i18n="projets.lead">Les initiatives portées par le collège pour la profession seront présentées prochainement.</p>
        </div>
      </div>
      <div className="container" style={{padding:"3rem 1rem", display:"flex", justifyContent:"center"}}>
        <div className="coming-box" style={{maxWidth:"520px", width:"100%", border:"1px solid var(--line)", background:"#fff", padding:"3rem 2rem", textAlign:"center", boxShadow:"0 8px 30px rgba(2,29,58,.04)"}}>
          <div className="coming-icon" style={{width:"56px",height:"56px", border:"1px solid var(--line)", background:"var(--paper)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--primary)", margin:"0 auto"}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
          </div>
          <div style={{marginTop:"1.25rem", display:"flex", alignItems:"center", justifyContent:"center", gap:".75rem"}}>
            <span style={{height:"1px", width:"32px", background:"rgba(240,132,68,.4)"}}></span>
            <span data-i18n="projets.soonLabel" style={{fontSize:"11px", letterSpacing:".18em", textTransform:"uppercase", fontWeight:"600", color:"var(--primary)"}}>Bientôt disponible</span>
            <span style={{height:"1px", width:"32px", background:"rgba(240,132,68,.4)"}}></span>
          </div>
          <h2 data-i18n="projets.soonTitle" style={{marginTop:".75rem", fontFamily:"inherit", fontSize:"22px", lineHeight:"1.1", letterSpacing:"-.02em", color:"var(--fg)"}}>Cette section est en cours de préparation</h2>
          <p data-i18n="projets.soonDesc" style={{marginTop:".75rem", fontSize:"13px", lineHeight:"1.6", color:"var(--muted2)", fontWeight:"300"}}>Le contenu sera publié prochainement. Merci de votre patience.</p>
          <div style={{marginTop:"1.5rem", display:"flex", alignItems:"center", justifyContent:"center", gap:".5rem", fontSize:"11px", color:"#94A3B8"}}>
            <span style={{height:"1px", width:"24px", background:"var(--line)"}}></span>
            <span data-i18n="header.mobileMeta">CGEL · Collège professionnel</span>
            <span style={{height:"1px", width:"24px", background:"var(--line)"}}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
