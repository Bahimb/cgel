export const metadata = {
  title: "Partenaires — CGEL Scientific Days 3e Édition",
  description: "Sponsors & Partenaires des CGEL Scientific Days 3e Édition — tous les partenaires présentés équitablement.",
  openGraph: {
    title: "Partenaires — CGEL Scientific Days 3e Édition",
    description: "Sponsors & Partenaires des CGEL Scientific Days 3e Édition — tous les partenaires présentés équitablement.",
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
      <div className="page-kicker"><span className="line"></span><span>Partenaires</span></div>
      <h1>Nos sponsors &amp; partenaires</h1>
      <p className="lead">Tous les partenaires sont présentés équitablement — sans hiérarchie. Un mur de logos institutionnel et sobre.</p>
      <p style={{marginTop:".5rem",fontSize:"11px",color:"#94A3B8",borderLeft:"2px solid #E2E8F0",paddingLeft:".75rem"}}>Annonces partenaires à venir — les placeholders sont facilement remplaçables.</p>
    </div>
  </div>
  <div style={{background:"#F8FAFC"}}>
    <div className="container" style={{padding:"2rem 1rem 2.5rem"}}>
      <div className="partners-grid">
        <a href="/partners/partner-01" className="partner-card"><div className="icon"><span>CGEL</span></div><p className="name">Nom du partenaire</p><p className="desc">Description du partenaire à annoncer.</p></a>
        <a href="/partners/partner-02" className="partner-card"><div className="icon"><span>CGEL</span></div><p className="name">Nom du partenaire</p><p className="desc">Description du partenaire à annoncer.</p></a>
        <a href="/partners/partner-03" className="partner-card"><div className="icon"><span>CGEL</span></div><p className="name">Nom du partenaire</p><p className="desc">Description du partenaire à annoncer.</p></a>
        <a href="/partners/partner-04" className="partner-card"><div className="icon"><span>CGEL</span></div><p className="name">Nom du partenaire</p><p className="desc">Description du partenaire à annoncer.</p></a>
        <a href="/partners/partner-05" className="partner-card"><div className="icon"><span>CGEL</span></div><p className="name">Nom du partenaire</p><p className="desc">Description du partenaire à annoncer.</p></a>
        <a href="/partners/partner-06" className="partner-card"><div className="icon"><span>CGEL</span></div><p className="name">Nom du partenaire</p><p className="desc">Description du partenaire à annoncer.</p></a>
        <a href="/partners/partner-07" className="partner-card"><div className="icon"><span>CGEL</span></div><p className="name">Nom du partenaire</p><p className="desc">Description du partenaire à annoncer.</p></a>
        <a href="/partners/partner-08" className="partner-card"><div className="icon"><span>CGEL</span></div><p className="name">Nom du partenaire</p><p className="desc">Description du partenaire à annoncer.</p></a>
        <a href="/partners/partner-09" className="partner-card"><div className="icon"><span>CGEL</span></div><p className="name">Nom du partenaire</p><p className="desc">Description du partenaire à annoncer.</p></a>
        <a href="/partners/partner-10" className="partner-card"><div className="icon"><span>CGEL</span></div><p className="name">Nom du partenaire</p><p className="desc">Description du partenaire à annoncer.</p></a>
        <a href="/partners/partner-11" className="partner-card"><div className="icon"><span>CGEL</span></div><p className="name">Nom du partenaire</p><p className="desc">Description du partenaire à annoncer.</p></a>
        <a href="/partners/partner-12" className="partner-card"><div className="icon"><span>CGEL</span></div><p className="name">Nom du partenaire</p><p className="desc">Description du partenaire à annoncer.</p></a>
      </div>
      <div style={{marginTop:"2rem",border:"1px solid #E2E8F0",background:"#fff",padding:"1.25rem",display:"flex",flexDirection:"column",gap:"1rem"}}>
        <div><h3 style={{margin:"0",fontSize:"12px",fontWeight:"700",color:"#0F1D3A"}}>Devenir partenaire</h3><p style={{margin:".25rem 0 0",fontSize:"12px",color:"#64748B"}}>Contactez college.hgel@gmail.com · 0540 69 95 13 pour les opportunités de partenariat.</p></div>
        <a href="/contact" className="btn btn-navy" style={{alignSelf:"flex-start"}}>Contacter les organisateurs</a>
      </div>
    </div>
  </div>
    </>
  );
}
