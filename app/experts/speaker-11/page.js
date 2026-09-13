export const metadata = {
  title: "Nom de l'intervenant — Spécialiste en Médecine numérique | Experts CGEL",
  description: "Médecine numérique · Établissement à annoncer · International — CGEL Days 3e Édition.",
  openGraph: {
    title: "Nom de l'intervenant — Spécialiste en Médecine numérique | Experts CGEL",
    description: "Médecine numérique · Établissement à annoncer · International — CGEL Days 3e Édition.",
    type: "website",
    locale: "fr_FR",
    url: "https://cgel-gastro.com",
  },
};

export default function Page() {
  return (
    <>
      <div style={{background:"#fff",borderBottom:"1px solid #E2E8F0"}}>
    <div className="container" style={{padding:"1rem 1rem"}}><a href="/../experts" style={{fontSize:"11px",letterSpacing:".06em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}}>← Retour aux experts</a></div>
  </div>
  <div style={{background:"#F8FAFC"}}>
    <div className="container">
      <div className="expert-detail-grid">
        <div className="expert-detail-card">
          <div className="img"><img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" alt="Nom de l'intervenant — Spécialiste en Médecine numérique" /></div>
          <div className="body">
            <h1>Nom de l'intervenant</h1>
            <p className="role">Spécialiste en Médecine numérique</p>
            <p className="inst">Établissement à annoncer · International</p>
            <div className="boxes">
              <div className="box"><p className="label">Thème de conférence</p><p className="value">Thème à annoncer</p></div>
            </div>
            <a href="/../registration" className="cta">S'inscrire</a>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
          <div className="expert-bio">
            <div className="kicker"><span className="line"></span><span>Biographie</span></div>
            <p className="bio">Biographie à annoncer.</p>
            <p className="note">Biographie placeholder — sera remplacée par la biographie professionnelle complète de l'intervenant dès confirmation. Aucune fausse accréditation n'est affichée.</p>
          </div>
          <div style={{border:"1px solid #E2E8F0",background:"#fff",padding:"1.25rem"}}>
            <h3 style={{margin:"0",fontSize:"12px",fontWeight:"700",color:"#0F1D3A"}}>Détails de la session</h3>
            <p style={{marginTop:".5rem",fontSize:"12px",lineHeight:"1.6",color:"#64748B"}}>Les informations détaillées de la session — horaire, salle et résumé — apparaîtront ici dès que le programme scientifique sera finalisé. Consultez la <a href="/../program" style={{color:"#023DA5",fontWeight:"500"}}>page Programme</a> pour les mises à jour.</p>
          </div>
          <div style={{border:"1px solid #023DA5",background:"#023DA5",color:"#fff",padding:"1.25rem",display:"flex",flexDirection:"column",gap:"1rem"}}>
            <div><p style={{margin:"0",fontSize:"12px",fontWeight:"600"}}>Envie d'assister à cette session ?</p><p style={{margin:".2rem 0 0",fontSize:"11px",color:"rgba(255,255,255,.6)"}}>Réservez votre place pour le 01 oct. 2026</p></div>
            <a href="/../registration" className="btn btn-orange" style={{alignSelf:"flex-start"}}>S'inscrire</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
