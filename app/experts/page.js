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
      <div className="page-kicker"><span className="line"></span><span data-i18n="experts.kicker">Experts</span></div>
      <h1 style={{marginTop:"1rem",fontFamily:"inherit",fontSize:"30px",lineHeight:"1.05",letterSpacing:"-.02em",color:"#0F1D3A"}} data-i18n="experts.title">Rencontrez les experts</h1>
      <p style={{marginTop:".75rem",fontSize:"14px",lineHeight:"1.6",color:"#475569",maxWidth:"640px"}} data-i18n="experts.lead">Les profils des intervenants sont publiés progressivement. Les placeholders indiquent des créneaux en attente de confirmation — chaque profil est facilement remplaçable par des données réelles.</p>
      <div style={{marginTop:"1rem",display:"flex",gap:".5rem",fontSize:"11px"}}>
        <span style={{border:"1px solid #023DA5",background:"#023DA5",color:"#fff",padding:".25rem .625rem",fontWeight:"600"}} data-i18n="experts.badge1">12 placeholders</span>
        <span style={{border:"1px solid #E2E8F0",padding:".25rem .625rem",color:"#64748B"}} data-i18n="experts.badge2">Contenu entièrement éditable</span>
      </div>
    </div>
  </div>
  <div style={{background:"#fff"}}>
    <div className="container" style={{padding:"2rem 1rem 2.5rem"}}>
      <div style={{border:"1px solid #E2E8F0",background:"#F8FAFC",padding:"1rem",display:"flex",flexDirection:"column",gap:".75rem"}}>
        <p style={{margin:"0",fontSize:"12px",color:"#475569"}} data-i18n="experts.note">Aucun médecin ou diplôme inventé — les placeholders utilisent « Nom de l'intervenant » / « Thème à annoncer ».</p>
        <a href="/registration" className="btn btn-orange" style={{alignSelf:"flex-start"}} data-i18n="nav.contactBtn">S'inscrire</a>
      </div>
      <div className="experts-grid" style={{marginTop:"2rem"}}>
        {/* Expert cards — 12 */}
        <a href="/experts/speaker-01" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>GA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec" data-i18n="experts.specGastro">Gastroentérologie</span></div><span className="dot"></span><div className="badge"><span data-i18n="experts.specGastro">Gastroentérologie</span></div></div>
          <div className="info"><h3 data-i18n="experts.cardName">Nom de l'intervenant</h3><p className="role" data-i18n="experts.roleGastro">Spécialiste en Gastroentérologie</p><p className="inst" data-i18n="experts.instAlgeria">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic" data-i18n="experts.cardTopic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-02" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>HE</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec" data-i18n="experts.specHepato">Hépatologie</span></div><span className="dot"></span><div className="badge"><span data-i18n="experts.specHepato">Hépatologie</span></div></div>
          <div className="info"><h3 data-i18n="experts.cardName">Nom de l'intervenant</h3><p className="role" data-i18n="experts.roleHepato">Spécialiste en Hépatologie</p><p className="inst" data-i18n="experts.instAlgeria">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic" data-i18n="experts.cardTopic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-03" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>EN</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec" data-i18n="experts.specEndo">Endoscopie digestive</span></div><span className="dot"></span><div className="badge"><span data-i18n="experts.specEndo">Endoscopie digestive</span></div></div>
          <div className="info"><h3 data-i18n="experts.cardName">Nom de l'intervenant</h3><p className="role" data-i18n="experts.roleEndo">Spécialiste en Endoscopie digestive</p><p className="inst" data-i18n="experts.instAlgeria">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic" data-i18n="experts.cardTopic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-04" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>IA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec" data-i18n="experts.specAI">IA &amp; Santé numérique</span></div><span className="dot"></span><div className="badge"><span data-i18n="experts.specAI">IA &amp; Santé numérique</span></div></div>
          <div className="info"><h3 data-i18n="experts.cardName">Nom de l'intervenant</h3><p className="role" data-i18n="experts.roleAI">Intelligence artificielle en médecine</p><p className="inst" data-i18n="experts.instIntl">Établissement à annoncer · International</p><div className="line"></div><p className="topic" data-i18n="experts.cardTopic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-05" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>GA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec" data-i18n="experts.specGastro">Gastroentérologie</span></div><span className="dot"></span><div className="badge"><span data-i18n="experts.specGastro">Gastroentérologie</span></div></div>
          <div className="info"><h3 data-i18n="experts.cardName">Nom de l'intervenant</h3><p className="role" data-i18n="experts.roleGastro">Spécialiste en Gastroentérologie</p><p className="inst" data-i18n="experts.instAlgeria">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic" data-i18n="experts.cardTopic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-06" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>SA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec" data-i18n="experts.specConnected">Santé connectée &amp; Innovation</span></div><span className="dot"></span><div className="badge"><span data-i18n="experts.specConnected">Santé connectée &amp; Innovation</span></div></div>
          <div className="info"><h3 data-i18n="experts.cardName">Nom de l'intervenant</h3><p className="role" data-i18n="experts.roleConnected">Chercheur — Santé connectée</p><p className="inst" data-i18n="experts.instUni">Partenariat universitaire · Constantine, Algérie</p><div className="line"></div><p className="topic" data-i18n="experts.cardTopic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-07" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>GA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec" data-i18n="experts.specGastro">Gastroentérologie</span></div><span className="dot"></span><div className="badge"><span data-i18n="experts.specGastro">Gastroentérologie</span></div></div>
          <div className="info"><h3 data-i18n="experts.cardName">Nom de l'intervenant</h3><p className="role" data-i18n="experts.roleGastro">Spécialiste en Gastroentérologie</p><p className="inst" data-i18n="experts.instAlgeria">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic" data-i18n="experts.cardTopic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-08" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>IM</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec" data-i18n="experts.specImaging">Imagerie médicale</span></div><span className="dot"></span><div className="badge"><span data-i18n="experts.specImaging">Imagerie médicale</span></div></div>
          <div className="info"><h3 data-i18n="experts.cardName">Nom de l'intervenant</h3><p className="role" data-i18n="experts.roleImaging">Spécialiste en Imagerie médicale</p><p className="inst" data-i18n="experts.instIntl">Établissement à annoncer · International</p><div className="line"></div><p className="topic" data-i18n="experts.cardTopic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-09" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>RE</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec" data-i18n="experts.specResearch">Recherche clinique</span></div><span className="dot"></span><div className="badge"><span data-i18n="experts.specResearch">Recherche clinique</span></div></div>
          <div className="info"><h3 data-i18n="experts.cardName">Nom de l'intervenant</h3><p className="role" data-i18n="experts.roleResearch">Chercheur clinique</p><p className="inst" data-i18n="experts.instAlgeria">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic" data-i18n="experts.cardTopic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-10" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>GA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec" data-i18n="experts.specGastro">Gastroentérologie</span></div><span className="dot"></span><div className="badge"><span data-i18n="experts.specGastro">Gastroentérologie</span></div></div>
          <div className="info"><h3 data-i18n="experts.cardName">Nom de l'intervenant</h3><p className="role" data-i18n="experts.roleGastro">Spécialiste en Gastroentérologie</p><p className="inst" data-i18n="experts.instAlgeria">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic" data-i18n="experts.cardTopic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-11" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>ME</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec" data-i18n="experts.specDigital">Médecine numérique</span></div><span className="dot"></span><div className="badge"><span data-i18n="experts.specDigital">Médecine numérique</span></div></div>
          <div className="info"><h3 data-i18n="experts.cardName">Nom de l'intervenant</h3><p className="role" data-i18n="experts.roleDigital">Spécialiste en Médecine numérique</p><p className="inst" data-i18n="experts.instIntl">Établissement à annoncer · International</p><div className="line"></div><p className="topic" data-i18n="experts.cardTopic">Thème à annoncer</p></div>
        </a>
        <a href="/experts/speaker-12" className="expert-card">
          <div className="photo"><div className="dots"></div><div className="inner-border"></div><div className="avatar"><div style={{position:"relative"}}><div className="circle"><span>GA</span></div><div className="ring1"></div><div className="ring2"></div></div><span className="sep"></span><span className="spec" data-i18n="experts.specGastro">Gastroentérologie</span></div><span className="dot"></span><div className="badge"><span data-i18n="experts.specGastro">Gastroentérologie</span></div></div>
          <div className="info"><h3 data-i18n="experts.cardName">Nom de l'intervenant</h3><p className="role" data-i18n="experts.roleGastro">Spécialiste en Gastroentérologie</p><p className="inst" data-i18n="experts.instAlgeria">Établissement à annoncer · Algérie</p><div className="line"></div><p className="topic" data-i18n="experts.cardTopic">Thème à annoncer</p></div>
        </a>
      </div>
      <div style={{marginTop:"2.5rem",border:"1px solid #023DA5",background:"#023DA5",color:"#fff",padding:"1.5rem",display:"flex",flexDirection:"column",gap:"1.5rem"}}>
        <div><h3 style={{margin:"0",fontFamily:"inherit",fontSize:"16px"}} data-i18n="experts.annonceTitle">Annonce des intervenants à venir</h3><p style={{marginTop:".25rem",fontSize:"12px",color:"rgba(255,255,255,.6)"}} data-i18n="experts.annonceDesc">Suivez les mises à jour. Pour toute candidature : college.hgel@gmail.com</p></div>
        <a href="/program" className="btn" style={{borderColor:"rgba(255,255,255,.3)",color:"#fff",alignSelf:"flex-start"}} data-i18n="experts.programBtn">Voir le programme</a>
      </div>
    </div>
  </div>
    </>
  );
}
