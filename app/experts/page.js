export const metadata = {
  title: "Experts — CGEL Scientific Days 3e Édition",
  description: "Rencontrez les experts des CGEL Scientific Days 3e Édition — gastroentérologie, hépatologie, IA et santé connectée.",
  openGraph: {
    title: "Experts — CGEL Scientific Days 3e Édition",
    description: "Rencontrez les experts des CGEL Scientific Days 3e Édition — gastroentérologie, hépatologie, IA et santé connectée.",
    type: "website",
    locale: "fr_FR",
    url: "https://cgel-gastro.com",
  },
};

export default function Page() {
  return (
    <>
      <div style={{background:"#fff",borderBottom:"1px solid #E2E8F0"}}>
    <div className="container" style={{padding:"2.5rem 1rem"}}>
      <div className="page-kicker"><span className="line"></span><span>Experts</span></div>
      <h1 style={{marginTop:"1rem",fontFamily:"inherit",fontSize:"30px",lineHeight:"1.05",letterSpacing:"-.02em",color:"#0F1D3A"}}>Rencontrez les experts</h1>
      <p style={{marginTop:".75rem",fontSize:"14px",lineHeight:"1.6",color:"#475569",maxWidth:"640px"}}>Les profils des intervenants sont publiés progressivement. Les placeholders indiquent des créneaux en attente de confirmation — chaque profil est facilement remplaçable par des données réelles.</p>
      <div style={{marginTop:"1rem",display:"flex",gap:".5rem",fontSize:"11px"}}>
        <span style={{border:"1px solid #023DA5",background:"#023DA5",color:"#fff",padding:".25rem .625rem",fontWeight:"600"}}>12 placeholders</span>
        <span style={{border:"1px solid #E2E8F0",padding:".25rem .625rem",color:"#64748B"}}>Contenu entièrement éditable</span>
      </div>
    </div>
  </div>
  <div style={{background:"#fff"}}>
    <div className="container" style={{padding:"2rem 1rem 2.5rem"}}>
      <div style={{border:"1px solid #E2E8F0",background:"#F8FAFC",padding:"1rem",display:"flex",flexDirection:"column",gap:".75rem"}}>
        <p style={{margin:"0",fontSize:"12px",color:"#475569"}}>Aucun médecin ou diplôme inventé — les placeholders utilisent « Nom de l'intervenant » / « Thème à annoncer ».</p>
        <a href="/registration" className="btn btn-orange" style={{alignSelf:"flex-start"}}>S'inscrire</a>
      </div>
      <div className="experts-grid" style={{marginTop:"2rem"}}>
        {/* Expert cards — 12 */}
        <a href="/experts/speaker-01" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>GA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec">Gastroentérologie</span></div><span className="dot"></span><div className="badge"><span>Gastroentérologie</span></div></div>
          <div className="info"><h3>Nom de l'intervenant</h3><p className="role">Spécialiste en Gastroentérologie</p><p className="inst">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-02" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>HE</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec">Hépatologie</span></div><span className="dot"></span><div className="badge"><span>Hépatologie</span></div></div>
          <div className="info"><h3>Nom de l'intervenant</h3><p className="role">Spécialiste en Hépatologie</p><p className="inst">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-03" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>EN</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec">Endoscopie digestive</span></div><span className="dot"></span><div className="badge"><span>Endoscopie digestive</span></div></div>
          <div className="info"><h3>Nom de l'intervenant</h3><p className="role">Spécialiste en Endoscopie digestive</p><p className="inst">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-04" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>IA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec">IA &amp; Santé numérique</span></div><span className="dot"></span><div className="badge"><span>IA &amp; Santé numérique</span></div></div>
          <div className="info"><h3>Nom de l'intervenant</h3><p className="role">Intelligence artificielle en médecine</p><p className="inst">Établissement à annoncer · International</p><div className="line"></div><p className="topic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-05" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>GA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec">Gastroentérologie</span></div><span className="dot"></span><div className="badge"><span>Gastroentérologie</span></div></div>
          <div className="info"><h3>Nom de l'intervenant</h3><p className="role">Spécialiste en Gastroentérologie</p><p className="inst">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-06" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>SA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec">Santé connectée &amp; Innovation</span></div><span className="dot"></span><div className="badge"><span>Santé connectée &amp; Innovation</span></div></div>
          <div className="info"><h3>Nom de l'intervenant</h3><p className="role">Chercheur — Santé connectée</p><p className="inst">Partenariat universitaire · Constantine, Algérie</p><div className="line"></div><p className="topic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-07" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>GA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec">Gastroentérologie</span></div><span className="dot"></span><div className="badge"><span>Gastroentérologie</span></div></div>
          <div className="info"><h3>Nom de l'intervenant</h3><p className="role">Spécialiste en Gastroentérologie</p><p className="inst">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-08" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>IM</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec">Imagerie médicale</span></div><span className="dot"></span><div className="badge"><span>Imagerie médicale</span></div></div>
          <div className="info"><h3>Nom de l'intervenant</h3><p className="role">Spécialiste en Imagerie médicale</p><p className="inst">Établissement à annoncer · International</p><div className="line"></div><p className="topic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-09" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>RE</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec">Recherche clinique</span></div><span className="dot"></span><div className="badge"><span>Recherche clinique</span></div></div>
          <div className="info"><h3>Nom de l'intervenant</h3><p className="role">Chercheur clinique</p><p className="inst">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-10" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>GA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec">Gastroentérologie</span></div><span className="dot"></span><div className="badge"><span>Gastroentérologie</span></div></div>
          <div className="info"><h3>Nom de l'intervenant</h3><p className="role">Spécialiste en Gastroentérologie</p><p className="inst">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-11" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>ME</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec">Médecine numérique</span></div><span className="dot"></span><div className="badge"><span>Médecine numérique</span></div></div>
          <div className="info"><h3>Nom de l'intervenant</h3><p className="role">Spécialiste en Médecine numérique</p><p className="inst">Établissement à annoncer · International</p><div className="line"></div><p className="topic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-12" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>GA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec">Gastroentérologie</span></div><span className="dot"></span><div className="badge"><span>Gastroentérologie</span></div></div>
          <div className="info"><h3>Nom de l'intervenant</h3><p className="role">Spécialiste en Gastroentérologie</p><p className="inst">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic">Thème à annoncer</p></div>
        </a>
      </div>
      <div style={{marginTop:"2.5rem",border:"1px solid #023DA5",background:"#023DA5",color:"#fff",padding:"1.5rem",display:"flex",flexDirection:"column",gap:"1.5rem"}}>
        <div><h3 style={{margin:"0",fontFamily:"inherit",fontSize:"16px"}}>Annonce des intervenants à venir</h3><p style={{marginTop:".25rem",fontSize:"12px",color:"rgba(255,255,255,.6)"}}>Suivez les mises à jour. Pour toute candidature : college.hgel@gmail.com</p></div>
        <a href="/program" className="btn" style={{borderColor:"rgba(255,255,255,.3)",color:"#fff",alignSelf:"flex-start"}}>Voir le programme</a>
      </div>
    </div>
  </div>
    </>
  );
}
