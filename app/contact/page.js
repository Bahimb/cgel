export const metadata = {
  title: "Contact — CGEL Scientific Days 3e Édition",
  description: "Contact CGEL — Journées Scientifiques 3e Édition. Téléphone, e-mail et informations sur le lieu.",
  openGraph: {
    title: "Contact — CGEL Scientific Days 3e Édition",
    description: "Contact CGEL — Journées Scientifiques 3e Édition. Téléphone, e-mail et informations sur le lieu.",
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
      <div className="page-kicker"><span className="line"></span><span data-i18n="contact.kicker">Contact</span></div>
      <h1 data-i18n="contact.title">Contacter le CGEL</h1>
      <p className="lead" data-i18n="contact.lead">Écrivez au comité d'organisation du collège.</p>
    </div>
  </div>
  <div style={{background:"#F8FAFC"}}>
    <div className="container">
      <div className="contact-grid">
        <div className="contact-card">
          <div className="head">
            <p className="kicker" data-i18n="contact.organizer">Organisateur</p>
            <p className="title">CGEL</p>
            <p style={{fontSize:"11px",color:"#64748B",margin:".1rem 0 0"}} data-i18n="contact.edition">3<sup>e</sup> Édition — CGEL Scientific Days</p>
          </div>
          <div className="contact-rows">
            <a href="tel:+213540699513" className="contact-row">
              <span className="icon">T</span>
              <div><p className="label" data-i18n="contact.phone">Téléphone</p><p className="value">0540 69 95 13</p></div>
            </a>
            <a href="mailto:college.hgel@gmail.com" className="contact-row">
              <span className="icon">E</span>
              <div style={{minWidth:"0"}}><p className="label" data-i18n="contact.email">E-mail</p><p className="value">college.hgel@gmail.com</p></div>
            </a>
            <a href="https://cgel-gastro.com" target="_blank" rel="noreferrer" className="contact-row">
              <span className="icon">W</span>
              <div><p className="label" data-i18n="contact.website">Site web</p><p className="value">cgel-gastro.com</p></div>
            </a>
          </div>
          <div className="contact-partner">
            <div style={{display:"flex",gap:".5rem",alignItems:"center"}}>
              <div className="logo"><img src="/logo/uc2.png" alt="Universite Constantine 2 Abdelhamid Mehri" /></div>
              <div className="logo"><img src="/logo/ntic.png" alt="Faculte NTIC" /></div>
            </div>
            <div>
              <p className="label" data-i18n="contact.partner">Partenaire scientifique</p>
              <p className="name" data-i18n="contact.partnerName">Partenariat universitaire</p>
              <p style={{marginTop:".25rem",fontSize:"11px",color:"rgba(255,255,255,.4)"}} data-i18n="contact.partnerNote">Les informations partenaire seront enrichies dès réception.</p>
            </div>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
          <div className="contact-card">
            <div className="head"><h3 style={{margin:"0",fontSize:"11px",letterSpacing:".12em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}} data-i18n="contact.details">Détails de l'événement</h3></div>
            <dl style={{margin:"0"}}>
              <div style={{display:"grid",gridTemplateColumns:"90px 1fr",borderBottom:"1px solid #E2E8F0"}}><dt style={{padding:".75rem 1rem",fontSize:"12px",color:"#64748B",background:"#F8FAFC",borderRight:"1px solid #E2E8F0"}} data-i18n="contact.date">Date</dt><dd style={{padding:".75rem 1rem",fontSize:"12px",fontWeight:"600",color:"#0F1D3A",margin:"0"}} data-i18n="contact.dateValue">01 oct. 2026</dd></div>
              <div style={{display:"grid",gridTemplateColumns:"90px 1fr"}}><dt style={{padding:".75rem 1rem",fontSize:"12px",color:"#64748B",background:"#F8FAFC",borderRight:"1px solid #E2E8F0"}} data-i18n="contact.place">Lieu</dt><dd style={{padding:".75rem 1rem",fontSize:"12px",fontWeight:"600",color:"#0F1D3A",margin:"0"}} data-i18n="contact.placeValue">Ahmed Bey Zenith, Constantine</dd></div>
            </dl>
            <div style={{padding:"1rem",borderTop:"1px solid #E2E8F0"}}><a href="/venue" className="btn btn-ghost" style={{width:"100%"}} data-i18n="contact.viewPlace">Voir le lieu</a></div>
          </div>
          <div style={{border:"1px solid #023DA5",background:"#023DA5",color:"#fff",padding:"1.5rem"}}>
            <h3 style={{margin:"0",fontFamily:"inherit",fontSize:"16px"}} data-i18n="contact.registerTitle">Prêt à vous inscrire ?</h3>
            <p style={{marginTop:".25rem",fontSize:"12px",color:"rgba(255,255,255,.6)"}} data-i18n="contact.registerDesc">Réservez votre place aux CGEL Scientific Days — 3<sup>e</sup> Édition.</p>
            <a href="/registration" className="btn btn-orange" style={{marginTop:"1rem",width:"100%"}} data-i18n="contact.registerBtn">S'inscrire</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
