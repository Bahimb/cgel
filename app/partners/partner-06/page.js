export const metadata = {
  title: "Nom du partenaire — Partenaire | CGEL",
  description: "Description du partenaire à annoncer.",
  openGraph: {
    title: "Nom du partenaire — Partenaire | CGEL",
    description: "Description du partenaire à annoncer.",
    type: "website",
    locale: "fr_FR",
    url: "https://cgel-gastro.com",
  },
};

export default function Page() {
  return (
    <>
      <div style={{background:"#fff",borderBottom:"1px solid #E2E8F0"}}>
    <div className="container" style={{padding:"1rem 1rem"}}><a href="/../partners" style={{fontSize:"11px",letterSpacing:".06em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}}>← Retour aux partenaires</a></div>
  </div>
  <div style={{background:"#F8FAFC"}}>
    <div className="container" style={{padding:"2.5rem 1rem 3rem",maxWidth:"640px"}}>
      <div style={{border:"1px solid #E2E8F0",background:"#fff",padding:"2rem",textAlign:"center"}}>
        <div style={{width:"56px",height:"56px",border:"1px solid #E2E8F0",display:"flex",alignItems:"center",justifyContent:"center",color:"#023DA5",fontWeight:"700",fontSize:"11px",letterSpacing:".08em",margin:"0 auto"}}>CGEL</div>
        <h1 style={{marginTop:"1rem",fontFamily:"inherit",fontSize:"20px",color:"#0F1D3A"}}>Nom du partenaire</h1>
        <p style={{marginTop:".5rem",fontSize:"12px",lineHeight:"1.6",color:"#64748B"}}>Description du partenaire à annoncer.</p>
        <div style={{marginTop:"1.5rem",border:"1px solid #E2E8F0",background:"#F8FAFC",padding:".75rem 1rem",fontSize:"11px",lineHeight:"1.4",color:"#64748B"}}>Partenaire placeholder — l'organisateur peut ajouter logo, description et site web sans toucher au code UI.</div>
        <p style={{marginTop:"1.5rem",fontSize:"11px",color:"#94A3B8"}}>Le lien du site apparaîtra ici dès qu'il sera fourni.</p>
      </div>
      <div style={{marginTop:"1.5rem",textAlign:"center"}}><a href="/../partners" style={{fontSize:"11px",letterSpacing:".06em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}}>Voir tous les partenaires</a></div>
    </div>
  </div>
    </>
  );
}
